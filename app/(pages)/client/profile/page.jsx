'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProfileIcon from '@public/assets/icons/profile-asset.webp'
import SubsIcon from '@public/assets/icons/logo-subs.webp'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import axios from '@node_modules/axios'

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

    useEffect(() => {

        const userData = async () => {
            if (status === 'authenticated') {
                try {
                    const isUser = await getUserData(session.user.email)

                    if(isUser){
                        setName(isUser.name)
                        setEmail(isUser.email)
                        setVerify(isUser.emailVerified)
                    }else{
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
            <div className='profile-wrap loading'>
                <div className="card">

                </div>
                <div className="card subs">

                </div>
            </div>
        )
    } else {
        return (
            <div className='profile-wrap'>
                <div className="card">
                    <div className="card-wrap">
                        <div className="name-holder">
                            <div className="icon">
                                <Image src={ProfileIcon} width={20} height={'auto'} alt='Icon' />
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
                            <button>
                                Cambiar Contraseña
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card subs">
                    <div className="card-wrap">
                        <div className="name-holder">
                            <div className="icon">
                                <Image src={SubsIcon} width={35} height={'auto'} alt='Icon' />
                            </div>
                            <div className="name">
                                <span>Suscripción</span>
                                <p>Desde aquí podrás administrar o cambiar tu suscripción.</p>
                            </div>
                        </div>
                        <div className="subs-holder">
                            <span>
                                Actualmente no tienes una suscripción activa
                            </span>
                            <button onClick={() => router.push('/client/subscription')}>
                                Empezar hoy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile