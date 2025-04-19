'use client'
import { useSubscription } from '@libs/useSubscription'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { useSession } from '@node_modules/next-auth/react'
import Link from '@node_modules/next/link'
import HorizontalCalendar from '@public/components/client/HorizontalCalendar'
import ModalConfirm from '@public/components/client/modals/ModalConfirm'
import TimePicker from '@public/components/client/TimePicker'
import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'

const LiveClasses = () => {

    const [loading, setLoading] = useState(true)

    const { data: session } = useSession()

    const { subscription, isLoading } = useSubscription(session.user.email)

    const [selectedDate, setSelectedDate] = useState(null);

    const [selectedTime, setSelectedTime] = useState(null)

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
    }

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate)
        setSelectedTime(null)
    }

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
                <div className="live-wrap" />
                <div className="live-wrap" />
            </div>
        )
    }

    return (
        <>
            <ModalConfirm mainText={confirmModalText} active={confirmModal} setActive={handleConfirmModal} response={responseConfirmModal} />

            <div className="client-content-container">
                <div className="live-wrap">
                    <div className="live-header m-btm">
                        <div className="title">
                            <h1>Reserva tu sesión en vivo</h1>
                        </div>
                        <div className="remaining">
                            <p>
                                Sesiones restantes: <span>1</span>
                            </p>
                        </div>
                    </div>
                    <div className="live-body">
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
                                <li>
                                    Si no utilizas tu sesión en el mes, no se acumulará para el siguiente mes.
                                </li>
                                <li>
                                    Si no puedes asistir a la sesión, por favor cancela tu reserva con al menos 24 horas de anticipación.
                                </li>
                                <li>
                                    Si no asistes a la sesión, se considerará como una sesión utilizada.
                                </li>
                                <li>
                                    Aprovecha el tiempo al máximo, si no tienes dudas, puedes pedirle a tu tutor que te explique un tema adicional.
                                </li>
                                <li>
                                    Puedes grabar libremente la sesión, pero no la compartas con nadie.
                                </li>
                                <li>
                                    Se amable y respetuoso con tu tutor, recuerda que está aquí para ayudarte.
                                </li>
                                <li>
                                    Si sobra tiempo, puedes pedirle a tu tutor que te explique un tema adicional.
                                </li>
                                <li>
                                    Si puedes preguntar si es posible revisar los proyectos de tu tutor, pero no todos los proyectos están disponibles para revisión.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
                                <TimePicker selectedDate={selectedDate}
                                    onTimeSelect={(dateTime) => setSelectedTime(dateTime)}
                                    startTime="10:00"
                                    endTime="22:00" />
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
            </div>
        </>

    )
}

export default LiveClasses