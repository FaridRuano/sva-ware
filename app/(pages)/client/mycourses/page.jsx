'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react';
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
      <>
          <section className='home-title'>
            <h1>Bienvenido de vuelta, <br/>continua tus clases</h1>
          </section>
          <div className="client-courses">
            <span>
              Todos los cursos
            </span>
            <div className="courses-wrap">
              <div className="row">
                <div className="course" onClick={()=>router.push('/client/introductiontoadobe/1/101')}>
                  <div className="img-holder">
                  </div>
                  <div className="title-holder">
                    <h3>
                      Introducción a la Suite de Adobe
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default Client