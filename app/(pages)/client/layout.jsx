'use client'
import axios from '@node_modules/axios';
import NavBar from '@public/components/client/NavBar';
import SessionWrapper from '@public/components/client/SessionWrapper';
import FooterHome from '@public/components/public/FooterHome';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true)

  const { data: session, status } = useSession()

  const router = useRouter()

  useEffect(() => {

    if (status === 'unauthenticated') {
      router.push('/login')
    } else {
      if (status === 'loading') {
        console.log(session, status)
        setLoading(true)
      } else {
        setLoading(false)
      }
    }
  }, [status])

  if (loading) {
    return (
      <>
        <NavBar className='loading' />
        <div className='page-wrap loading'>
        </div>
        <FooterHome />
      </>
    )
  } else {
    return (
      <>
        <NavBar />
        <SessionWrapper>
          {children}
        </SessionWrapper>
        <FooterHome />
      </>
    )
  }
}
