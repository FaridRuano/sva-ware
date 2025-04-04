'use client'
import NavBar from '@public/components/client/NavBar';
import FooterHome from '@public/components/public/FooterHome';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true)
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
      if (status === 'unauthenticated') {
          router.push('/login')
      }else{
        if (status === 'loading') {
          setLoading(true)
        }else{
          setLoading(false)
        }
      }
  }, [status])

  if(loading){
    return (
      <>
        <NavBar className='loading'/>
        <div className='page-wrap loading'>
        </div>
        <FooterHome/>
      </>
    )
  }else{
    return (
      <>
        <NavBar/>
        <div className='page-wrap'>
          {children}
        </div>
        <FooterHome/>
      </>
    )
  }
}
