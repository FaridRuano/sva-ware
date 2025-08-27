'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from '@node_modules/next/image';
import ClientPt1Asset from '@public/assets/imgs/covers/cover-introadobe.jpg'
import ClientPt2Asset from '@public/assets/imgs/products/product-essentialsoundspack.jpg'
import { useSubscription } from '@libs/useSubscription';
import Link from '@node_modules/next/link';
import ModalSubs from '@public/components/client/modals/ModalSubs';
import axios from '@node_modules/axios';

const Client = () => {

  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const { data: session } = useSession()

  const { subscription, isLoading, isError } = useSubscription(session.user.email)

  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [loadingPurchases, setLoadingPurchases] = useState(true);

  /* Modal Subs */

  const [subsModal, setSubsModal] = useState(false)

  const handleSubsModal = () => {
    setSubsModal(current => !current)
  }

  const alreadyPurchased = (productId) => {
    return purchasedProducts.some(purchase => purchase.product === productId);
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
        <div className="page-header">
          <div className="title-container">
            <span>
              Explora todo el contenido
            </span>
          </div>
        </div>
        <div className="page-separator">
          <div className="subtitle-container">
            <span>
              Nuevo
            </span>
          </div>
        </div>
        <section className="client-pt1">
          <div className="feature-container">
            <div className="feature-img" onClick={() => router.push('/client/course/introadobe')}>
              <Image src={ClientPt1Asset} width={800} height={'auto'} alt='Course' />
            </div>
            <div className="feature-details">
              <div className="details-row">
                <div className="details-type">
                  <div className="type-container">
                    <span>
                      Curso
                    </span>
                  </div>
                </div>
                <div className="details-title">
                  <h1>
                    Introducción a la Suite de Adobe
                  </h1>
                </div>
              </div>
              <div className="details-row">
                <div className="details-type">
                  <div className="type-container">
                    <span>
                      Dscrp
                    </span>
                  </div>
                </div>
                <div className="details-descrip">
                  <p>
                    Un workshop creado para todos aquellos que quieren aprender y/o aumentar sus
                    conocimientos sobre las principales herramientas creativas de la Suite de Adobe
                    {' ('} Photoshop, Illustrator, Premiere Pro, After Effects {')'}.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-btns">
              <div className="feature-btn var" onClick={() => router.push('/client/course/introadobe')}>
                Conoce más
              </div>
              {
                subscription.isActive ? (
                  <div className="feature-btn explore" onClick={() => router.push('/client/introadobe/1/101')}>
                    Empezar
                  </div>
                ) : (

                  alreadyPurchased('6835b3c233e033e24646b523') ? (
                    <div className="feature-btn explore" onClick={() => router.push('/client/introadobe/1/101')}>
                      Empezar
                    </div>
                  ) : (
                    <div className="feature-btn" onClick={() => router.push('/client/payments/single/6835b3c233e033e24646b523')}>
                      Comprar
                    </div>
                  )
                )
              }
            </div>
          </div>
          {
            subscription.isActive ? (
              <div className="livesession-container">
                <div className="info">
                  <p>
                    Despeja tus dudas, recibe feedback y aprende en vivo, reserva una sesión en vivo aquí.
                  </p>
                </div>
                <div className="reserve-btn">
                  <Link href={{ pathname: '/client/liveclasses' }}>
                    <span>
                      Reserva tu Sesión
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="livesession-container">
                <div className="info">
                  <p>
                    ¿Dudas pendientes? Únete a la escuela y accede a una tutoría en vivo.
                  </p>
                </div>
                <div className="reserve-btn" onClick={handleSubsModal}>
                  <span>
                    Unirme a la Escuela
                  </span>
                </div>
              </div>
            )
          }
          <div className="products-container">
            <div className="product-container">
              <div className="product-img" onClick={() => router.push('/client/resource/essentialsoundspack')}>
                <Image src={ClientPt2Asset} width={400} height={400} alt='Course' />
              </div>
              <div className="feature-details">
                <div className="details-row">
                  <div className="details-type">
                    <div className="type-container">
                      <span>
                        Recurs
                      </span>
                    </div>
                  </div>
                  <div className="details-title">
                    <h1>
                      Paquete de Sonidos Esenciales
                    </h1>
                  </div>
                </div>
                <div className="details-row">
                  <div className="details-type">
                    <div className="type-container">
                      <span>
                        Dscrp
                      </span>
                    </div>
                  </div>
                  <div className="details-descrip">
                    <p>
                      El paquete indispensable para todo creador audiovisual. Incluye una selección de los
                      sonidos más utilizados para dar vida, dinamismo e inmersión a tus proyectos.
                      Con estos efectos tendrás la base perfecta para construir audios impactantes y profesionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* <div className="feature-container">
            <div className="feature-img" onClick={() => router.push('/client/course/introadobe')}>
              <Image src={ClientPt2Asset} width={800} height={'auto'} alt='Course' />
            </div>
            <div className="feature-details">
              <div className="details-row">
                <div className="details-type">
                  <div className="type-container">
                    <span>
                      Recurs
                    </span>
                  </div>
                </div>
                <div className="details-title">
                  <h1>
                    Paquete de Sonidos Esenciales
                  </h1>
                </div>
              </div>
              <div className="details-row">
                <div className="details-type">
                  <div className="type-container">
                    <span>
                      Dscrp
                    </span>
                  </div>
                </div>
                <div className="details-descrip">
                  <p>
                    El paquete indispensable para todo creador audiovisual. Incluye una selección de los
                    sonidos más utilizados para dar vida, dinamismo e inmersión a tus proyectos.
                    Con estos efectos tendrás la base perfecta para construir audios impactantes y profesionales.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-btns">
              <div className="feature-btn var" onClick={() => router.push('/client/course/introadobe')}>
                Conoce más
              </div>
              {
                subscription.isActive ? (
                  <div className="feature-btn explore" onClick={() => router.push('/client/introadobe/1/101')}>
                    Empezar
                  </div>
                ) : (

                  alreadyPurchased('6835b3c233e033e24646b523') ? (
                    <div className="feature-btn explore" onClick={() => router.push('/client/introadobe/1/101')}>
                      Empezar
                    </div>
                  ) : (
                    <div className="feature-btn" onClick={() => router.push('/client/payments/single/6835b3c233e033e24646b523')}>
                      Comprar
                    </div>
                  )
                )
              }
            </div>
          </div> */}

        </section>
      </div>
    </>

  )
}

export default Client