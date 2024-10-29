'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Client = () => {

  const router = useRouter()

  const { data: session, status } = useSession()

  useEffect(()=>{

  }, [session, router])

  if (status === 'loading') {
    return <p>Loading...</p>
  }else if(status === 'unauthenticated'){
    router.push('/login')
  }else{
    return (
      <div className='page-wrap'>
          <section className='home-title'>
            <h1>Bienvenido de vuelta, <br/>continua tus clases</h1>
          </section>
          <section className="client-courses">
            <span>
              Todos los cursos
            </span>
            <div className="courses-wrap">
              <div className="row">
                <div className="course">
                  <div className="img-holder">

                  </div>
                  <div className="title-holder">
                    <h3>
                      Introducción a la Suite de Adobe
                    </h3>
                  </div>
                </div>
                <div className="course">
                  <div className="img-holder">

                  </div>
                  <div className="title-holder">
                    <h3>
                      Creación de posts mediáticos para redes sociales en Photoshop
                    </h3>
                  </div>
                </div>
                <div className="course">
                  <div className="img-holder">

                  </div>
                  <div className="title-holder">
                    <h3>
                      Edición y composición avanzada con Premiere Pro y After Effects
                    </h3>
                  </div>
                </div>
                <div className="course">
                  <div className="img-holder">

                  </div>
                  <div className="title-holder">
                    <h3>
                      Efectos visuales mediaticos en After Effects
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    )
  }
}

export default Client