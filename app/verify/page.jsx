'use client'
import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function Verify(){
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') // Obtén el token de la URL

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) return

      try{
        await fetch(`/api/auth/verify/${token}`, {
          method: 'POST',
        })

        router.push('/login')
      }catch(e){
        console.log('Error:'+ e)
      }
      
    }

    verifyEmail()
  }, [token])

  return <>
            <h1>Verificando tu correo electrónico...</h1>
            {token || 0}
        </>
}

const VerifyEmail = () => {
  return (
        <Verify/>
  )
}

export default VerifyEmail
