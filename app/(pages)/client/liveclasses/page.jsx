'use client'
import { useSubscription } from '@libs/useSubscription'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { useSession } from '@node_modules/next-auth/react'
import Link from '@node_modules/next/link'
import HorizontalCalendar from '@public/components/client/HorizontalCalendar'
import ModalConfirm from '@public/components/client/modals/ModalConfirm'
import TimePicker from '@public/components/client/TimePicker'
import React, { useEffect, useState } from 'react'
import axios from '@node_modules/axios'
import ModalInfo from '@public/components/client/modals/ModalInfo'
import ModalBuySessions from '@public/components/client/modals/ModalBuySessions'
import { useRouter } from '@node_modules/next/navigation'
import { mutate } from '@node_modules/swr/dist/_internal'
import { set } from 'mongoose'

const LiveClasses = () => {

    const router = useRouter()

    const [loading, setLoading] = useState(true)

    const { data: session } = useSession()

    const { subscription, isLoading, mutate } = useSubscription(session.user.email)

    /* My Reservations */

    const [myReservations, setMyReservations] = useState([]);
    const [loadingReservations, setLoadingReservations] = useState(false);

    /* Reservations Slots */

    const [reservedSlots, setReservedSlots] = useState([]) // ISO strings
    const [loadingSlots, setLoadingSlots] = useState(false)
    const [errorSlots, setErrorSlots] = useState(null)

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null)

    const [buyModal, setBuyModal] = useState(false)
    const handleBuyModal = () => {
        setBuyModal(current => !current)
    }

    const [infoModal, setInfoModal] = useState(false)
    const [infoModalText, setInfoModalText] = useState('')
    const handleInfoModal = () => {
        setInfoModal(current => !current)
    }

    const [confirmModal, setConfirmModal] = useState(false)
    const [confirmModalText, setConfirmModalText] = useState('')
    const handleConfirmModal = () => {
        var hour = format(selectedTime, 'HH:mm')
        var date = format(selectedDate, 'EEEE, d LLLL', { locale: es })
        setConfirmModalText(`¿Estás seguro de que quieres reservar tu sesión para el ${date}, a las ${hour}?`)
        setConfirmModal(current => !current)
    }

    const responseConfirmModal = async () => {

        handleConfirmModal()

        setLoading(true)

        const year = selectedDate.getFullYear()
        const month = selectedDate.getMonth()
        const day = selectedDate.getDate()

        const hours = selectedTime.getHours()
        const minutes = selectedTime.getMinutes()

        const startDateTime = new Date(year, month, day, hours, minutes)

        try {
            const data = {
                email: session.user.email,
                start: startDateTime.toISOString(),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }

            const res = await axios.post(`/api/client/reserves`, data)
            if (res.data.error) {
                console.log(res.data.error)
                setInfoModalText('Hubo un problema, por favor intenta más tarde.')

            } else {
                var hour = format(selectedTime, 'HH:mm')
                var date = format(selectedDate, 'EEEE, d LLLL', { locale: es })
                setInfoModalText(`Tu sesión para el ${date}, a las ${hour}, fue reservada con éxito.`)
            }
            fetchReservations();
            mutate()
            setLoading(false)
            handleInfoModal()
        } catch (error) {
            console.log(error)
            setInfoModalText('Hubo un problema, por favor intenta más tarde.')
            setLoading(false)
            handleInfoModal()
        }
    }

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate)
        setSelectedTime(null)
    }

    const fetchReservations = () => {
        setLoadingReservations(true);
        axios.get(`/api/client/reserves/${session.user.email}`)
            .then(res => {
                setMyReservations(res.data.reserves || []);
            })
            .catch(() => setMyReservations([]))
            .finally(() => setLoadingReservations(false));
    };

    useEffect(() => {
        if (!session?.user?.email) return;
        fetchReservations();
    }, [session?.user?.email]);

    useEffect(() => {
        if (!selectedDate) return
        setLoadingSlots(true)
        const dateStr = format(selectedDate, 'yyyy-MM-dd')
        axios.get(`/api/client/reserves?date=${dateStr}`)
            .then((response) => {
                if (response.data.slots) {
                    setReservedSlots(response.data.slots)
                    setLoadingSlots(false)
                } else {
                    setErrorSlots('No se encontraron reservas para esta fecha')
                    setLoadingSlots(false)
                }
            }
            ).catch((error) => {
                console.log(error)
                setErrorSlots('Hubo un problema al recuperar las reservas')
                setLoadingSlots(false)
            }
            ).finally(() => { setLoadingSlots(false) })

    }, [selectedDate])

    useEffect(() => {
        if (isLoading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [isLoading])

    if (loading) {
        return (
            <div className="client-content-container loading">
                <div className="live-wrap min" />
                <div className="live-wrap min" />
            </div>
        )
    }

    return (
        <>
            <ModalConfirm mainText={confirmModalText} active={confirmModal} setActive={handleConfirmModal} response={responseConfirmModal} />
            <ModalInfo mainText={infoModalText} active={infoModal} setActive={handleInfoModal} />
            <ModalBuySessions active={buyModal} setActive={handleBuyModal} />

            <div className="client-content-container">

                <div className="live-wrap">
                    <div className="live-header m-btm">
                        <div className="title">
                            <h1>Reserva tu sesión en vivo</h1>
                        </div>
                        <div className="remaining">
                            <p>
                                Sesiones restantes: <span>{subscription.liveSessions}</span>
                            </p>
                        </div>
                    </div>
                    <div className="live-body">
                        {
                            subscription.liveSessions > 0 ? (
                                <>
                                    <div className="descrip m-btm">
                                        <p>
                                            Reserva tu sesión en vivo desde aquí, recuerda que tu suscripción
                                            incluye una sesión por mes de 30 minutos. Si no tienes sesiones restantes, <b>
                                                <Link href={{ pathname: '/client/liveclasses' }} className='link-general'>
                                                    puedes comprar más.
                                                </Link>
                                            </b>
                                        </p>
                                    </div>
                                    <div className="rules">
                                        <h4>
                                            Importante
                                        </h4>
                                        <ul>
                                            <li>Las sesiones de suscripción son válidas por un mes; si no las utilizas, expirarán.</li>
                                            <li>Si no puedes asistir, cancela tu reserva con al menos 24 horas de antelación.</li>
                                            <li>La inasistencia se considerará como sesión utilizada.</li>
                                            <li>Aprovecha el tiempo al máximo: si no tienes dudas, solicita explorar un tema adicional.</li>
                                            <li>Puedes grabar la sesión para tu uso personal, pero no la compartas con terceros.</li>
                                            <li>Sé amable y respetuoso con tu tutor; está aquí para ayudarte.</li>
                                            <li>Puedes preguntar si es posible revisar algunos proyectos de tu tutor; ten en cuenta que no todos estarán disponibles.</li>
                                            <li>Las sesiones adquiridas por compra, son válidas por 3 meses, luego expirarán.</li>
                                        </ul>

                                    </div>
                                </>

                            ) : (
                                <div className="nosessions">
                                    <h4>
                                        No te quedan más sesiones disponibles.
                                    </h4>
                                    <p>
                                        Si tienes una suscripción activa, el próximo mes tendrás una sesión disponible, pero si no puedes esperar, puedes comprar más sesiones desde el siguiente botón.
                                    </p>
                                    <div className="btns">
                                        <div className="btn-nosessions" onClick={handleBuyModal}>
                                            Comprar más sesiones
                                        </div>
                                        <Link href={{ pathname: '/client' }} className='btn-nosessions sec'>
                                            Regresar al inicio
                                        </Link>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>

                {
                    subscription.liveSessions > 0 && (
                        <div className="live-wrap">
                            <div className="live-body">
                                <div className="form">
                                    <h4 className={selectedTime ? 'primary' : ''}>
                                        {!selectedDate ? 'Selecciona el día de tu sesión' : selectedTime ? 'Confirma tu reserva' : 'Selecciona la hora de tu sesión'}
                                    </h4>
                                    <div>
                                        <HorizontalCalendar onDateChange={handleDateChange} endDate={subscription.endDate} />
                                    </div>
                                    <div>
                                        <TimePicker
                                            selectedDate={selectedDate}
                                            onTimeSelect={(dateTime) => setSelectedTime(dateTime)}
                                            reservedSlots={reservedSlots}
                                        />
                                    </div>
                                    <div>
                                        {
                                            selectedDate && selectedTime ? (
                                                <div className="reserve-button" onClick={handleConfirmModal}>
                                                    Reservar sesión
                                                </div>
                                            ) : (
                                                <div className='reserve-separator'>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    myReservations.length > 0 && (
                        <div className="live-wrap anim-In">
                            <div className="live-header m-btm">
                                <div className="title">
                                    <h1>Mis sesiones</h1>
                                </div>
                            </div>
                            {loadingReservations ? (
                                <p>Cargando reservas...</p>
                            ) : myReservations.length === 0 ? (
                                <p>No tienes reservas realizadas.</p>
                            ) : (
                                <div className="live-table">
                                    <table>
                                        <tbody>
                                            {myReservations.map(reserve => {
                                                const dateObj = new Date(reserve.start);
                                                const now = new Date();
                                                const endMeeting = new Date(dateObj.getTime() + 30 * 60000); // 30 min duration

                                                const isActive = now >= dateObj && now <= endMeeting;
                                                const isFuture = now < dateObj;

                                                const btnClass = isActive || isFuture ? 'btn-table' : 'btn-table disabled';

                                                const statusMap = {
                                                    confirmed: 'Confirmada',
                                                    cancelled: 'Cancelada',
                                                    done: 'Finalizada'
                                                };

                                                return (
                                                    <tr key={reserve._id} className="mobile-row">
                                                        <td colSpan={3}>
                                                            <div className="mobile-row-main">
                                                                <span className="col1">{statusMap[reserve.status] || 'Reservada'}</span>
                                                                <span className="col2">{format(dateObj, 'EEEE, d LLLL yyyy', { locale: es })}</span>
                                                                <span className="col3">{format(dateObj, 'HH:mm', { locale: es })}</span>
                                                            </div>
                                                        </td>
                                                        <td className={btnClass}>
                                                            <a
                                                                href={reserve.meetingUrl}
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                                tabIndex={isActive || isFuture ? 0 : -1}
                                                                style={isActive || isFuture ? {} : { pointerEvents: 'none', opacity: 0.5 }}
                                                            >
                                                                Ingresar
                                                            </a>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                        </div>
                    )
                }
            </div>
        </>

    )
}

export default LiveClasses