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
      </div>
    )
  }
}

export default Client