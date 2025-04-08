'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from '@node_modules/next/image';
import ClientPt1Asset from '@public/assets/imgs/covers/cover-introadobe.jpg'
import { useSubscription } from '@libs/useSubscription';

const Client = () => {

  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const { data: session } = useSession()

  const { subscription, isLoading, isError } = useSubscription(session.user.email)


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
              Conocé más
            </div>
            {
              subscription.isActive ? (
                <div className="feature-btn explore" onClick={() => router.push('/client/introadobe/1/101')}>
                  Empezar
                </div>
              ) : (
                <div className="feature-btn">
                  Comprar
                </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Client