'use client'
import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const VerifyEmail = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') // Obtén el token de la URL

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) return

      try{
        const res = await fetch(`/api/auth/verify/${token}`, {
          method: 'POST',
        })

        router.push('/login')
      }catch(e){
        console.log('Error:'+ e)
      }
      
    }

    verifyEmail()
  }, [token])

  return (
    <Suspense>
      <div>
        <h1>Verificando tu correo electrónico...</h1>
        {token || 0}
      </div>
    </Suspense>
  )
}

export default VerifyEmail
