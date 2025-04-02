'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProfileIcon from '@public/assets/icons/profile-asset.webp'
import SubsIcon from '@public/assets/icons/logo-subs.webp'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import axios from '@node_modules/axios'
import ModalConfirm from '@public/components/shared/ModalConfirm'
import ModalInfo from '@public/components/shared/ModalInfo'

const Profile = () => {

    const router = useRouter()

    const { data: session, status } = useSession()

    const [name, setName] = useState('Student')
    const [email, setEmail] = useState('student@address.com')
    const [verify, setVerify] = useState(false)

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

    const handleConfirmModal = () => {
        setConfirmModal(current => !current)
    }

    const handleInfoModal = () => {
        setInfoModal(current => !current)
    }

    const responseConfirmModal = async () => {
        setConfirmModal(false)
        setLoading(true)
        try {

            const data = {
                email: email
            }

            await axios.put('../api/auth/login/password', data)

        } catch (e) {
            /* Handle Error */
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
                <ModalInfo mainText={`Te enviamos un correo a ${email} para que puedas realizar el cambio de tu contraseña`} active={infoModal} setActive={handleInfoModal} />
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
                    </div>
                </div>
            </>

        )
    }
}

export default Profile