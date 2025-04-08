'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProfileIcon from '@public/assets/icons/profile-asset.webp'
import SubsIcon from '@public/assets/icons/logo-subs.webp'
import SubsIcon2 from '@public/assets/icons/logo-footer.webp'
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation'
import axios from '@node_modules/axios'
import ModalConfirm from '@public/components/client/ModalConfirm'
import ModalInfo from '@public/components/client/ModalInfo'
import ModalSubs from '@public/components/client/ModalSubs'

const Profile = () => {

    const router = useRouter()

    const searchParams = useSearchParams()

    const { data: session, status } = useSession()

    const [name, setName] = useState('Student')
    const [email, setEmail] = useState('student@address.com')
    const [verify, setVerify] = useState(false)
    const [subscription, setSubscription] = useState({
        isActive: false,
        type: null
    })

    const [loading, setLoading] = useState(true)

    const getUserData = async (email) => {
        try {
            const res = await axios.get(`/api/client/data?email=${email}`)

            return res.data.userData
        } catch (e) {
            /* Handle error */
        }
    }

    /* Password Confirm-Info Modal */

    const [confirmModal, setConfirmModal] = useState(false)
    const [infoModal, setInfoModal] = useState(false)
    const [subsModal, setSubsModal] = useState(false)

    const [infoModalText, setInfoModalText] = useState('')

    const handleConfirmModal = () => {
        setConfirmModal(current => !current)
    }

    const handleInfoModal = () => {
        setInfoModal(current => !current)
    }

    const handleSubsModal = () => {
        setSubsModal(current => !current)
    }

    const responseConfirmModal = async () => {
        setConfirmModal(false)
        setLoading(true)
        try {

            const data = {
                email: email
            }

            const res = await axios.post('../api/auth/login/password', data)

            if (res.data.error) {
                setInfoModalText('Lo siento no pudimos completar el proceso, intenta más tarde.')
            } else {
                setInfoModalText(`Te enviamos un correo a ${email} para que puedas realizar el cambio de tu contraseña`)
            }

        } catch (e) {
            setInfoModalText('Lo siento no pudimos completar el proceso, intenta más tarde.')
        }
        setLoading(false)
        setInfoModal(true)
    }

    useEffect(() => {

        const userData = async () => {
            if (status === 'authenticated') {
                try {
                    const isUser = await getUserData(session.user.email)

                    if (isUser) {
                        setName(isUser.name)
                        setEmail(isUser.email)
                        setVerify(isUser.emailVerified)
                        setSubscription(isUser.subscription)

                    } else {
                        console.log("Error with server (404)")
                    }


                } catch (error) {
                    console.error("Error at pulling user data:", error)
                }
            }
        }

        userData()

        setLoading(false)
    }, [])

    useEffect(() => {
        const openSubsModal = searchParams.get('openSubsModal')
        if (openSubsModal) {
            setSubsModal(true)
            router.replace('/client/profile');
        }
    }, [searchParams])

    if (loading) {
        return (
            <div className="client-content-container">
                <div className='profile-wrap loading'>
                    <div className="card">

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <ModalInfo mainText={infoModalText} active={infoModal} setActive={handleInfoModal} />
                <ModalSubs active={subsModal} setActive={handleSubsModal} />
                <ModalConfirm mainText={'¿Estás seguro de que deseas cambiar tu contraseña?'} active={confirmModal} setActive={handleConfirmModal} response={responseConfirmModal} />
                <div className="client-content-container">
                    <div className="profile-wrap">
                        <div className="card">
                            <div className="card-wrap">
                                <div className="name-holder">
                                    <div className="icon">
                                        <Image src={ProfileIcon} width={10} height={'auto'} alt='Icon' />
                                    </div>
                                    <div className="name">
                                        <span>{name}</span>
                                    </div>
                                </div>
                                <div className="separator" />
                                <div className="email-holder">
                                    <div className="header">
                                        <span className='email-label'>
                                            Correo Electrónico
                                        </span>
                                        <div className={verify ? "decor" : "decor err"} />
                                        {
                                            verify ? (
                                                <span className='sucess'>
                                                    Verificado
                                                </span>
                                            ) : (
                                                <span className="err">
                                                    No verificado
                                                </span>
                                            )
                                        }
                                    </div>
                                    <div className="body">
                                        <span>
                                            {email}
                                        </span>
                                    </div>
                                </div>
                                <div className="btn-holder">
                                    <button onClick={() => handleConfirmModal()}>
                                        Cambiar Contraseña
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`card fit ${subscription.isActive ? 'bg' : ''}`}>
                            {
                                subscription.isActive ? (
                                    <div className="card-wrap act-subs ">
                                        <div className="name-holder">
                                            <div className="icon">
                                                <Image src={SubsIcon2} width={15} height={'auto'} alt='Icon' />
                                            </div>
                                            <div className="name">
                                                <span>Suscripción</span>
                                            </div>
                                        </div>
                                        <div className="separator" />
                                        <div className="info-holder">
                                            <div className="info-row">
                                                <span className='label'>
                                                    Tipo de Suscripción:
                                                </span>
                                                <span className='value'>

                                                </span>
                                            </div>
                                            <div className="info-row">
                                                <span className='label'>
                                                    Próximo pago:
                                                </span>
                                                <span className='value'>
                                                    
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="card-wrap subs">
                                        <div className="name-holder">
                                            <div className="icon">
                                                <Image src={SubsIcon} width={15} height={'auto'} alt='Icon' />
                                            </div>
                                            <div className="name">
                                                <span>Suscripción</span>
                                            </div>
                                        </div>
                                        <div className="subs-holder">
                                            <p>
                                                Actualmente no cuentas con una suscripción activa.
                                            </p>
                                            <p>
                                                Si quieres acceder a todos los beneficios considera en unirte a esta comunidad <b>creativa.</b>
                                            </p>
                                        </div>
                                        <div className="btn-holder primary">
                                            <button onClick={() => handleSubsModal()}>
                                                Suscribirme
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Profile