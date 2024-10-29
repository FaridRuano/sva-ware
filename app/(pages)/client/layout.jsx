'use client'
import NavBar from '@public/components/client/NavBar';
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
  }, [status, router])

  if(loading){
    return (
      <>

      </>
    )
  }else{
    return (
      <>
      <NavBar/>
      {children}
    </>
    )
  }
}
