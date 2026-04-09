'use client'

import { useSubscription } from '@libs/useSubscription'
import MuxPlayer from '@node_modules/@mux/mux-player-react/'
import axios from '@node_modules/axios'
import { useSession } from '@node_modules/next-auth/react'
import Link from '@node_modules/next/link'
import { useRouter } from '@node_modules/next/navigation'
import ModalSubs from '@components/client/modals/ModalSubs'
import { useEffect, useState } from 'react'

const Resource = () => {

    const router = useRouter()

    const [loading, setLoading] = useState(true)

    const [loadingVideo, setLoadingVideo] = useState(true)

    const { data: session } = useSession()

    const [purchasedProducts, setPurchasedProducts] = useState([]);
    const [loadingPurchases, setLoadingPurchases] = useState(true);

    const alreadyPurchased = (productId) => {
        return purchasedProducts.some(purchase => purchase.product === productId);
    }

    const { subscription, isLoading, isError } = useSubscription(session.user.email)

    const [isPlaying, setIsPlaying] = useState(false)

    const [infoOption, setInfoOption] = useState(1)

    const displayInfo = () => {
        switch (infoOption) {
            case 1:
                return (
                    <div className="info-display">
                        <div className="course-descrip">
                            <h2>¿Qué incluye este paquete de recursos?</h2>
                            <p>
                                Descubre una colección cuidadosamente seleccionada de 259 efectos de sonido únicos que llevarán tus proyectos audiovisuales al siguiente nivel. Desde explosivos impacts, whooshes y hits, hasta sonidos cotidianos como aplausos, pasos, teclados, alarmas, risas o notificaciones. Cada archivo está diseñado para aportar dinamismo, realismo e inmersión en cualquier tipo de producción.
                            </p>
                            <br />
                            <p>
                                Este paquete ha sido creado para integrarse sin problemas en todos los programas de edición de video y audio, tanto en computadoras como en dispositivos móviles. Funciona perfectamente con herramientas profesionales como Premiere Pro, After Effects, Final Cut, DaVinci Resolve, Audition, Pro Tools, Logic Pro, FL Studio y también con apps móviles de edición. Su formato universal asegura compatibilidad total en cualquier flujo de trabajo creativo.
                            </p>
                            <br />
                            <p>
                                Uno de los grandes beneficios de este paquete es que agiliza tu workflow: en lugar de perder tiempo buscando sonidos dispersos en internet, tendrás a la mano una biblioteca organizada y lista para usar. Los efectos están clasificados en carpetas temáticas {'('}applause, footsteps, notifications, swooshes, cinematic trailer pack, risers, impacts, gunshots, y muchos más{' )'}, lo que te permitirá
                            </p>
                            <br />
                            <p>
                                Ya sea que estés editando un cortometraje, creando contenido para redes sociales, produciendo un podcast o diseñando un spot publicitario, este Paquete de Sonidos Esenciales se convertirá en tu aliado creativo. Todo lo que necesitas para dar vida, impacto y emoción a tus proyectos está aquí, en una sola colección profesional lista para descargar.
                            </p>
                        </div>
                        <div className="course-content">
                            <h2>Contenido</h2>
                            <div className="row">
                                <div className="content-row">
                                    <div className="tag">
                                        Recursos
                                    </div>
                                    <span>
                                        259 en total.
                                    </span>
                                </div>
                                <div className="content-row">
                                    <div className="tag">
                                        Material
                                    </div>
                                    <span>
                                        Guía de uso.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="course-requirements">
                            <h2>
                                Requisitos y materiales
                            </h2>
                            <ul>
                                <li>
                                    Necesitas acceso a una computadora.
                                </li>
                                <li>
                                    <b>No</b> se requieren conocimientos avanzados previos, este paquete es fácil de integrar en cualquier flujo de trabajo.
                                </li>
                            </ul>

                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className='info-display'>
                        <div className="course-chapter">
                            <h2>
                                Sonidos
                            </h2>

                            <div className="chapter-lesson">
                                <h3>808-basssound <span>{'('}15{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Alarma <span>{'('}6{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Alerta <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Aplausos <span>{'('}4{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Avión <span>{'('}2{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Bebe <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Beso <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Build Up <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Cámara <span>{'('}5{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Car <span>{'('}4{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Chasquido <span>{'('}10{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Cinematic Trailer <span>{'('}15{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Click <span>{'('}3{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Cleeeen <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Descargas eléctricas <span>{'('}4{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Detent <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Digital Text <span>{'('}2{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Dinero <span>{'('}4{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Ding <span>{'('}10{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Disparos <span>{'('}2{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Drink & pouring soda <span>{'('}3{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Elastico <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Error <span>{'('}3{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Flashlight <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Freidora <span>{'('}3{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Fuegos artificiales <span>{'('}5{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Golpe <span>{'('}2{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Grillo <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Hit <span>{'('}5{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Impacto <span>{'('}4{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Interfaz <span>{'('}14{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Iphone <span>{'('}5{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Lapíz <span>{'('}6{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Lata de Soda <span>{'('}4{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Pisadas <span>{'('}5{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Relampagos <span>{'('}6{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Reloj <span>{'('}2{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Risers <span>{'('}7{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Ritmo Cardíaco <span>{'('}4{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Ruido <span>{'('}3{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Swooshes <span>{'('}79{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Teclado <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Vintage <span>{'('}1{')'}</span></h3>
                            </div>
                            <div className="chapter-lesson">
                                <h3>Voces <span>{'('}2{')'}</span></h3>
                            </div>

                        </div>
                    </div>
                )

            default:
                return (
                    <>
                    </>
                )

        }
    }

    /* Subscription Modal */

    const [subsModal, setSubsModal] = useState(false)

    const handleSubsModal = () => {
        setSubsModal(current => !current)
    }

    useEffect(() => {
        if (!session?.user?.email) return;
        axios.get(`/api/client/data?email=${session.user.email}&action=purchases`)
            .then(res => {
                setPurchasedProducts(res.data?.purchasedProducts || []);
            })
            .catch(() => setPurchasedProducts([]))
            .finally(() => setLoadingPurchases(false));
    }, []);

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
            </div>
        )
    }

    return (
        <>
            <ModalSubs active={subsModal} setActive={handleSubsModal} />
            <div className="client-content-container">
                <div className="course-tags">
                    <div className="course-tag">
                        RECURSOS
                    </div>
                    <div className="course-tag purple">
                        audio
                    </div>
                </div>
                <div className="course-title">
                    <h1>
                        Paquete de Sonidos Esenciales
                    </h1>
                </div>
                <div className="course-shortdescrip">
                    <p>
                        El paquete indispensable para todo creador audiovisual. Incluye una selección de los
                        sonidos más utilizados para dar vida, dinamismo e inmersión a tus proyectos.
                        Con estos efectos tendrás la base perfecta para construir audios impactantes y profesionales.
                    </p>
                </div>
                <div className={`course-video ${isPlaying ? 'video-playing' : ''} ${loadingVideo ? 'video-loading' : ''}`}>
                    <MuxPlayer
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        minResolution='1080p'
                        loading="viewport"
                        poster='https://visualartsschool.com/assets/imgs/covers/cover-essentialsoundspack.jpg'
                        playbackId="6j6SgyATd3hKJY01w5J77U4D2GOHDkcrPBMWEetBcWjs"
                        accent-color="#09e199"
                        onReady={() => setLoadingVideo(false)}
                        onLoadedData={() => setLoadingVideo(false)}
                    />
                </div>

                <div className="info-displayer">
                    <div className={`option ${infoOption === 1 ? 'active' : ''}`} onClick={() => setInfoOption(1)}>
                        Introducción
                    </div>
                    <div className={`option ${infoOption === 2 ? 'active' : ''}`} onClick={() => setInfoOption(2)}>
                        Contenido
                    </div>
                </div>
                {
                    displayInfo()
                }

                {
                    subscription.isActive ? (
                        <div className="course-btns">
                            <div className='option active'>
                                Ya tienes acceso a este workshop
                            </div>
                            <div className="btn-access explore" onClick={() => router.push('/client/introadobe/1/101')}>
                                <h2>
                                    Ir al Workshop
                                </h2>
                            </div>
                        </div>
                    ) : (
                        <div className="course-btns">
                            <div className='option active'>
                                Opciones de compra
                            </div>
                            {
                                alreadyPurchased('6835b3c233e033e24646b523') ? (
                                    <>
                                        <div className="btn-access explore" onClick={() => router.push('/client/introadobe/1/101')}>
                                            <h2 className='h2-text-responsive'>
                                                Ya compraste este workshop - Ir al Workshop
                                            </h2>
                                        </div>
                                    </>
                                ) : (
                                    <div className="btns-row">
                                        <div className="btn">
                                            <div className="btn-content">
                                                <div className="content-header">
                                                    <h2>Compra directa</h2>
                                                    <p>
                                                        Paga el precio completo por el workshop completo.
                                                    </p>
                                                </div>
                                                <div className="content-body">
                                                    <p>
                                                        ¿Qué incluye?
                                                    </p>
                                                    <ul>
                                                        <li>Acceso de por vida.</li>
                                                        <li>Material y recursos.</li>
                                                        <li>Actualizaciones futuras.</li>
                                                    </ul>
                                                    <div className="price">
                                                        <h2>$44.99</h2>
                                                        <p>
                                                            USD
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="content-footer">
                                                    <div className="pay-btn" onClick={() => router.push('/client/payments/single/6835b3c233e033e24646b523')}>
                                                        <h2>
                                                            Comprar
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn explore">
                                            <div className="btn-content">
                                                <div className="content-header">
                                                    <h2>Únete a la escuela</h2>
                                                    <p>
                                                        Suscríbete y forma parte de nuestra comunidad.
                                                    </p>
                                                </div>
                                                <div className="content-body">
                                                    <p>
                                                        ¿Qué incluye?
                                                    </p>
                                                    <ul>
                                                        <li>Acceso durante tu membresía.</li>
                                                        <li>Material y recursos.</li>
                                                        <li>Actualizaciones futuras.</li>
                                                        <li>Resuelve tus dudas con sesiones en vivo.</li>
                                                        <li>Recibe feedback de tu trabajo.</li>
                                                    </ul>
                                                </div>
                                                <div className="content-footer">
                                                    <div className="pay-btn" onClick={() => handleSubsModal()}>
                                                        <h2>
                                                            Explorar planes
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </>

    )
}

export default Resource
