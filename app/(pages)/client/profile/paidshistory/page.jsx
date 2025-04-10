'use client'
import axios from '@node_modules/axios'
import { useSession } from '@node_modules/next-auth/react'
import Image from '@node_modules/next/image'
import Link from '@node_modules/next/link'
import ArrowLeft from '@public/assets/icons/arrow-left.webp'
import React, { useEffect, useState } from 'react'

const PaidHistory = () => {

    const { data: session, status } = useSession()

    const [loading, setLoading] = useState(true)

    const [payments, setPayments] = useState([])

    const getUserData = async (email) => {
        try {
            const res = await axios.get(`/api/client/data?email=${email}&action=paids`)
            return res.data.userData
        } catch (e) {
            /* Handle Error */
        }
    }

    useEffect(() => {
        const userData = async () => {
            if (status === 'authenticated') {
                try {
                    const isUser = await getUserData(session.user.email)
                    if (isUser) {
                        setPayments(isUser.paymentHistory)
                        setLoading(false)

                    } else {
                        console.log("Error with server (404)")
                    }


                } catch (error) {
                    console.error("Error at pulling user data:", error)
                }
            }
        }

        userData()
    }, [])

    if (loading) {
        return (
            <div className="client-content-container loading">
                <div className="return-link">
                    <Link href={{ pathname: '/client/profile' }} className='link'>
                        <div className="icon">
                            <Image src={ArrowLeft} width={10} height={'auto'} alt='Arrow' />
                        </div>
                        <div className="label">
                            <span>
                                OWQEIQ
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="profile-wrap">
                    <div className="card-row">
                        <div className="card full h-fit">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="client-content-container">
                <div className="return-link">
                    <Link href={{ pathname: '/client/profile' }} className='link'>
                        <div className="icon">
                            <Image src={ArrowLeft} width={10} height={'auto'} alt='Arrow' />
                        </div>
                        <div className="label">
                            <span>
                                Regresar
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="profile-wrap">
                    <div className="card-row">
                        <div className="card full h-fit">
                            <div className="card-wrap fit">
                                <div className="name-holder">
                                    <div className="icon">
                                        $
                                    </div>
                                    <div className="name">
                                        <span>Historial de Pagos</span>
                                    </div>
                                </div>
                                <div className="separator"></div>
                                {
                                    payments.length > 0 ?
                                        <div className="content-holder">
                                            <div className="content">
                                                <table className='table-payments'>
                                                    <thead>
                                                        <tr>
                                                            <th className='product'>Producto</th>
                                                            <th className='date'>Fecha de Pago</th>
                                                            <th className='price'>Monto</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            payments.map((product, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className='product b'>{product.product}</td>
                                                                        <td className='date b'>{new Date(product.paymentDate).toLocaleDateString('es-MX')}</td>
                                                                        <td className='price b'>${product.amount}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        : (
                                            <div className="content-holder">
                                                <div className="content">
                                                    <p>
                                                        No tienes pagos realizados aún.
                                                    </p>
                                                </div>
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

export default PaidHistory