'use client'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ArrowLeft from '@public/assets/icons/arrow-left.webp'
import Logo from '@public/assets/icons/logo-navbar.webp'
import Image from 'next/image';
import axios from '@node_modules/axios';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true)
  const { status, data } = useSession()
  const router = useRouter()

  const verifyUserStillExists = async (email) => {
    try {
      const res = await axios.post(`/api/auth/login/email`, { email })
      if (res.data.exists) {
        return true
      } else {
        return false
      }

    } catch (e) {
      /* Hanlde Error Here */
    }
  }

  useEffect(() => {
    const checkUser = async () => {
      try {
        const isUser = await verifyUserStillExists(data.user.email)

        if (isUser) {
          router.push('/client')
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.error("Error verificando usuario:", error)
        setLoading(false)
      }
    }

    if (status === 'authenticated') {
      checkUser()
    } else {
      setLoading(status === 'loading')
    }

  }, [status, router])

  if (loading) {
    return (
      <div className='login-page'>
        <div className="return-btn" onClick={() => router.push('/')}>
          <Image src={ArrowLeft} width={9} height={'auto'} alt='Icon' />
          <span>
            Regresar
          </span>
        </div>
        <div className="login-wrap loading">
          <div className="login">
            <div className="logo">
              <Image src={Logo} width={80} height={'auto'} alt='Logo' />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <>
        {children}
      </>
    )
  }

}