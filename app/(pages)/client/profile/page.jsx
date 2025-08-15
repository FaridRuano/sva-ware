'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProfileIcon from '@public/assets/icons/profile-asset.webp'
import ProductsIcon from '@public/assets/icons/products.webp'
import SubsIcon from '@public/assets/icons/logo-subs.webp'
import SubsIcon2 from '@public/assets/icons/logo-footer.webp'
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation'
import axios from '@node_modules/axios'
import ModalConfirm from '@public/components/client/modals/ModalConfirm'
import ModalInfo from '@public/components/client/modals/ModalInfo'
import ModalSubs from '@public/components/client/modals/ModalSubs'
import Link from '@node_modules/next/link'
import introadobe from '@public/assets/imgs/products/product-introadobe.jpg'

const Profile = () => {
    const router = useRouter()

    const searchParams = useSearchParams()

    const { data: session, status } = useSession()

    const [purchasedProducts, setPurchasedProducts] = useState([]);

    const [coursesInfo, setCoursesInfo] = useState([]);

    const [name, setName] = useState('Student')
    const [email, setEmail] = useState('student@address.com')
    const [verify, setVerify] = useState(false)
    const [subscription, setSubscription] = useState({
        isActive: false,
        type: null
    })

    const [loading, setLoading] = useState(true)
    const [loadingPurchases, setLoadingPurchases] = useState(true);

    const getUserData = async (email) => {
        try {
            const res = await axios.get(`/api/client/data?email=${email}&action=profile`)

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
    const [confirmModalText, setConfirmModalText] = useState('')

    const [confirmModalAction, setConfirmModalAction] = useState('')

    const handlePasswordConfirm = () => {
        setConfirmModalAction('password')
        setConfirmModalText('¿Estás seguro de que deseas cambiar tu contraseña?')
        setInfoModalText(`Te enviamos un correo a ${email} para que puedas realizar el cambio de tu contraseña`)
        handleConfirmModal()
    }

    const handleCancelConfirm = () => {
        setConfirmModalAction('cancel')
        setConfirmModalText('¿Estás seguro de que deseas cancelar tu suscripción?')
        setInfoModalText(`Tu suscripción fue cancelada con exito, recuerda que puedes volver cuando quieras.`)
        handleConfirmModal()
    }

    const handleRenovateConfirm = () => {
        setConfirmModalAction('renew')
        setConfirmModalText('¿Estás seguro de que deseas reactivar tu suscripción?')
        setInfoModalText(`Tu suscripción fue reactivada con éxito.`)
        handleConfirmModal()
    }

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
        if (confirmModalAction === 'password') {
            handlePasswordChange()
        } else if (confirmModalAction === 'cancel') {
            handleCancelSubscription()
        } else if (confirmModalAction === 'renew') {
            handleRenewSubscription()
        }
    }

    const handlePasswordChange = async () => {
        try {

            const data = {
                email: email
            }

            const res = await axios.post('../api/auth/login/password', data)

            if (res.data.error) {
                setInfoModalText('Lo siento no pudimos completar el proceso, intenta más tarde.')
            }

        } catch (e) {
            setInfoModalText('Lo siento no pudimos completar el proceso, intenta más tarde.')
        } finally {
            setLoading(false)
            setInfoModal(true)
        }
    }

    const handleCancelSubscription = async () => {
        try {
            const res = await axios.post('/api/stripe/cancel-subscription', {
                email: email,
            });
            if (res.data.success) {
                /* Subscription will end */
            } else {
                setInfoModalText('No se pudo cancelar la suscripción. Intenta más tarde.');
            }
        } catch (e) {
            setInfoModalText('Ocurrió un error al cancelar la suscripción.');
            console.log(e);
        } finally {
            setLoading(false)
            setInfoModal(true)
        }
    }

    const handleRenewSubscription = async () => {
        try {
            const res = await axios.post('/api/stripe/renew-subscription', {
                email: email,
            });
            if (res.data.success) {
                /* Subscription will be renewed */
            } else {
                setInfoModalText('No se pudo reactivar la suscripción. Intenta más tarde.');
            }
        } catch (e) {
            setInfoModalText('Ocurrió un error al reactivar la suscripción.');
            console.log(e);
        } finally {
            setLoading(false);
            setInfoModal(true);
        }
    };

    useEffect(() => {
        const fetchCoursesInfo = async () => {
            if (!purchasedProducts.length) return;
            const infoObj = {};
            await Promise.all(
                purchasedProducts.map(async (purchase) => {
                    try {
                        const res = await axios.get(`/api/products/${purchase.product}`);
                        if (res.data && res.data.product) {
                            infoObj[purchase.product] = res.data.product;
                        }
                    } catch {
                        // handle error or leave empty
                    }
                })
            );
            setCoursesInfo(infoObj);
        };
        fetchCoursesInfo();
    }, [purchasedProducts]);

    useEffect(() => {
        const userData = async () => {
            if (status === 'authenticated') {
                try {
                    const isUser = await getUserData(session.user.email)
                    /* console.log(isUser) */
                    if (isUser) {
                        setName(isUser.name)
                        setEmail(isUser.email)
                        setVerify(isUser.emailVerified)
                        setSubscription(isUser.subscription)
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

    useEffect(() => {
        const openSubsModal = searchParams.get('openSubsModal')
        if (openSubsModal) {
            setSubsModal(true)
            router.replace('/client/profile');
        }
    }, [searchParams])

    useEffect(() => {
        if (!session?.user?.email) return;
        axios.get(`/api/client/data?email=${session.user.email}&action=purchases`)
            .then(res => {
                setPurchasedProducts(res.data?.purchasedProducts || []);
            })
            .catch(() => setPurchasedProducts([]))
            .finally(() => setLoadingPurchases(false));
    }, []);

    if (loading) {
        return (
            <div className="client-content-container">
                <div className='profile-wrap loading'>
                    <div className="card">

                    </div>
                    <div className="card fit">

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <ModalInfo mainText={infoModalText} active={infoModal} setActive={handleInfoModal} />
                <ModalSubs active={subsModal} setActive={handleSubsModal} />
                <ModalConfirm mainText={confirmModalText} active={confirmModal} setActive={handleConfirmModal} response={responseConfirmModal} />
                <div className="client-content-container">
                    <div className="profile-wrap">
                        <div className="card-row">
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
                                        <button onClick={() => handlePasswordConfirm()}>
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
                                            <div className="info-holder">
                                                <div className="info-row">
                                                    <span className='label'>
                                                        Tipo de Suscripción:
                                                    </span>
                                                    <span className='value'>
                                                        {subscription.subType === 'monthly' ? 'Mensual' : subscription.subType === 'quarterly' ? 'Trimestral' : subscription.subType === 'biannual' ? 'Semestral' : 'No disponible'}
                                                    </span>
                                                </div>
                                                <div className="info-row">
                                                    <span className='label'>
                                                        Tu suscripción se renueva:
                                                    </span>
                                                    <span className='value'>
                                                        {subscription.nextPaymentDate ? new Date(subscription.nextPaymentDate).toLocaleDateString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' }) : 'No se renovará'}
                                                    </span>
                                                </div>
                                                <div className="info-row">
                                                    <Link href={{ pathname: '/client/profile/paidshistory' }} className='label link'>
                                                        <span className='label link'>
                                                            Ver historial de pagos.
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="info-row">
                                                    {
                                                        subscription.nextPaymentDate ? (
                                                            <span className='label neg link' onClick={() => handleCancelConfirm()}>
                                                                Cancelar Suscripción
                                                            </span>
                                                        ) : (
                                                            <span className='label neg link' onClick={() => handleRenovateConfirm()}>
                                                                Volver a activar renovación automática
                                                            </span>
                                                        )
                                                    }
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
                        <div className="card-row">
                            {
                                subscription.isActive ? (
                                    <div className="card full explore">
                                        <div className="card-wrap">
                                            <div className="name-holder">
                                                <div className="icon">
                                                    <Image src={ProductsIcon} width={10} height={'auto'} alt='Icon' />
                                                </div>
                                                <div className="name">
                                                    <span>Mi Contenido</span>
                                                </div>
                                            </div>
                                            <div className="product-holder">
                                                <Link href={{ pathname: '/client' }} className='link'>
                                                    <p>
                                                        Con tu suscripción tienes acceso a todo el contenido, así que empieza a explorar libremente.
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                ) : (
                                    <>
                                        <div className="card full h-fit">
                                            <div className="card-wrap fit">
                                                <div className="name-holder">
                                                    <div className="icon">
                                                        <Image src={ProductsIcon} width={10} height={'auto'} alt='Icon' />
                                                    </div>
                                                    <div className="name">
                                                        <span>Mi Contenido</span>
                                                    </div>
                                                </div>
                                                <div className="separator"></div>
                                                <div className="product-holder ">

                                                    {
                                                        loadingPurchases ? (
                                                            <p>
                                                                Estamos cargando tu contenido, por favor espera un momento.
                                                            </p>
                                                        ) : (
                                                            <>
                                                                {
                                                                    purchasedProducts.length > 0 ? (
                                                                        purchasedProducts.map((purchase) => {
                                                                            const course = coursesInfo[purchase.product];
                                                                            return (
                                                                                <div key={purchase._id} className="product-card">
                                                                                    <div className="card-img">
                                                                                        <Image
                                                                                            src={'/assets/imgs/products/product-introadobe.jpg'}
                                                                                            width={100}
                                                                                            height={100}
                                                                                            alt='Cover'
                                                                                        />
                                                                                    </div>
                                                                                    <div className="card-row">
                                                                                        <div className="card-info">

                                                                                            <p className='tag'><b> {course?.name || 'No disponible'}</b></p>
                                                                                            <p><b>Fecha de compra:</b> {new Date(purchase.purchaseDate).toLocaleDateString('es-MX')}</p>
                                                                                        </div>
                                                                                        <div className='explore-btn'
                                                                                            onClick={() => course?.alias && router.push(`/client/${course.alias}/1/101`)}
                                                                                            disabled={!course?.alias}
                                                                                        >
                                                                                            Ir al curso
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            );
                                                                        })
                                                                    ) : (
                                                                        <p>
                                                                            Aún no has realizado ningúna compra, puedes hacerlo desde la página principal.
                                                                        </p>
                                                                    )
                                                                }
                                                            </>
                                                        )
                                                    }
                                                </div>

                                            </div>
                                        </div>

                                    </>

                                )
                            }
                        </div >

                    </div >
                </div >
            </>

        )
    }
}

export default Profile