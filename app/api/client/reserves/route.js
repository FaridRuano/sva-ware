import { NextResponse } from "next/server"
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";
import Reservation from "@models/Reservation";
import transporter from "@libs/mailer";
import { toZonedTime, } from "@node_modules/date-fns-tz/dist/cjs";
import { es } from "@node_modules/date-fns/locale";
import { differenceInBusinessDays } from "@node_modules/date-fns/differenceInBusinessDays";
import { format } from "@node_modules/date-fns/format";
import { subMinutes } from "@node_modules/date-fns/subMinutes";
import { add } from "@node_modules/date-fns/add";
import { getCalendarClient } from "@libs/google";

function isMoreThanTwoDaysAway(sessionDate) {
    const laterDate = new Date(sessionDate)
    const earlierDate = new Date()

    return differenceInBusinessDays(laterDate, earlierDate) > 2 ? true : false
}

export async function POST(request) {

    await connectMongoDB()

    const { email, start, timeZone } = await request.json()

    const user = await User.findOne({ email })
    if (!user) {
        return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
    }
    user.subscription.liveSessions = user.subscription.liveSessions - 1
    await user.save()

    const startUtc = new Date(start)

    const reservationExists = await Reservation.findOne({ start: startUtc })

    if (reservationExists) {
        return NextResponse.json(
            {
                error: 'Ya existe una reserva para esta fecha y hora'
            }, { status: 200 }
        )
    }

    const reservation = await Reservation.create({
        user: user._id,
        start: startUtc,
        timeZone: timeZone,
    })

    if (!reservation) {
        return NextResponse.json({ error: 'Error al crear la reserva' }, { status: 200 })
    }

    const zonedStart = toZonedTime(reservation.start, timeZone)

    let sessionDateTime = format(
        zonedStart,
        "EEEE d',' 'de' MMMM yyyy 'a las' H'h'mm",
        { locale: es }
    )

    var reservationMail = {}

    reservation.status = 'confirmed'
    await reservation.save()

    const calendar = getCalendarClient();

    const meet = await calendar.events.insert({
        calendarId: 'primary',
        conferenceDataVersion: 1,
        requestBody: {
            summary: `Sesión con ${user.name}`,
            description: 'Clase en vivo',
            start: { dateTime: startUtc },
            end: { dateTime: add(startUtc, { minutes: 30 }) },
            attendees: [ /* opcional: { email: userEmail }*/],
            conferenceData: {
                createRequest: {
                    requestId: `meet-${reservation._id}`,
                    conferenceSolutionKey: { type: 'hangoutsMeet' }
                }
            }
        }
    })

    const meetLink = meet.data.conferenceData.entryPoints[0].uri || ''

    reservation.meetingUrl = meetLink;
    await reservation.save();

    reservationMail = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Link de acceso a tu sesión - Escuela de Artes Visuales',
        html: `
                <!DOCTYPE html>
                    <html>
                        <head>
                            <style>
                                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                                .header { text-align: center; margin-bottom: 20px; background-color:rgb(0, 0, 0); color: #00ff95; border-radius: 20px;}
                                .separator-logo{ height: 20px;}
                                .logo-container{text-align: center;  height: 60px;}
                                .logo { width: auto; height: 60px; }
                                .content { background-color: #f1f1f1; padding: 20px; border-radius: 5px; color: #161616; border-radius: 20px; font-weight: 500;}
                                .button { 
                                    display: inline-block; 
                                    padding: 10px 20px; 
                                    background-color: #00ff95; 
                                    color: rgb(0, 0, 0) !important; 
                                    font-weight: 600;
                                    text-decoration: none; 
                                    border-radius: 20px; 
                                    margin: 15px 0;
                                }
                                .footer { 
                                    margin-top: 20px; 
                                    font-size: 12px; 
                                    color: #777; 
                                    text-align: center;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="header">
                                <div class="separator-logo"></div>
                                <div class="logo-container">
                                    <img
                                        src="https://visualartsschool.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-navbar.257dcda8.webp&w=96&q=75"
                                        alt="Escuela de Artes Visuales Logo" class="logo">
                                </div>
                                <div class="separator-logo"></div>
                            </div>
    
                            <div class="content">
                                <h2>¡Tu sesión está confirmada!</h2>
                                <p>Gracias por reservar tu sesión en vivo para el <strong>${sessionDateTime}</strong>.</p>

                                <p><strong>${user.name}</strong>, tu enlace de acceso está listo:</p>

                                <p>
                                <a href="${meetLink}" target="_blank" style="display:inline-block;
                                    padding:0.75rem 1.25rem; background-color:#6b46c1; color:#fff;
                                    text-decoration:none; border-radius:6px;">
                                    Acceder a mi sesión
                                </a>
                                </p>

                                <p style="margin-top:1rem;">
                                Si por alguna razón no puedes asistir, por favor avísanos con al menos 
                                <strong>24 horas de antelación</strong> para reprogramar tu sesión.
                                </p>

                                <p>¡Estamos deseando ayudarte a seguir avanzando en tu carrera artística!</p>

                                <p>Saludos,<br>
                                El equipo de Escuela de Artes Visuales</p>
                            </div>
    
                            <div class="footer">
                                <p>© ${new Date().getFullYear()} Escuela de Artes Visuales. Todos
                                    los derechos reservados.</p>
                                <p>Si no solicitaste este registro, por favor ignora este
                                    mensaje.</p>
                            </div>
                        </body>
                    </html>
                `
    }

    if (process.env.NODE_ENV === 'development') {
        return NextResponse.json({ message: "Data created" }, { status: 200 })
    } else {
        try {
            await transporter.sendMail(reservationMail)
            console.log('Reservation email sent succesfully:', email)
        } catch (error) {
            console.error('Error at sending the reservation email:', error.message)
        }
        return NextResponse.json({ message: "Data created" }, { status: 200 })
    }

}