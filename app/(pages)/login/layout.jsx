'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ArrowLeft from '@public/assets/icons/arrow-left.webp'
import Logo from '@public/assets/icons/logo-navbar.webp'
import Image from 'next/image';

export default function RootLayout({ children }) {
    const [loading, setLoading] = useState(true)
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/client')
        }else{
          if (status === 'loading') {
            setLoading(true)
          }else{
            setLoading(false)
          }
        }
    }, [status, router])

    if(loading){
      return (
        <div className='login-page'>
          <div className="return-btn" onClick={()=>router.push('/')}>
            <Image src={ArrowLeft} width={9} height={'auto'} alt='Icon'/>
            <span>
              Regresar
            </span>
          </div>
          <div className="login-wrap loading">
            <div className="login">
              <div className="logo">
                <Image src={Logo} width={80} height={'auto'} alt='Logo'/>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return (
        <>
          {children}
        </>
      )
    }

}