'use client'
import { useEffect, Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import NavLogo from '@public/assets/icons/logo-navbar.webp'
import Image from 'next/image'

function Verify() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') // Obtén el token de la URL

  const [err, setError] = useState(false)

  const [suc, setSucess] = useState(false)

  useEffect(() => {
    const verifyEmail = async () => {
      if (token) {

        const data = {
          userId: token
        }

        try {
          const res = await fetch(`/api/auth/verify`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })

          const responseData = await res.json()

          if (responseData.data) {
            setSucess(true)
            setTimeout(() => {
              router.push('/login')
            }, 2500)
          } else {
            setError(true)
            router.push('/')
          }

        } catch (e) {
          console.log('Error:' + e)
        }
      } else {
        setError(true)

        setTimeout(() => {
          router.push('/')
        }, 3000)
      }


    }

    verifyEmail()
  }, [token])

  return (
    <div className="full-page">
      <div className="verify-container">
        <div className="logo-container">
          <Image src={NavLogo} width={40} height={'auto'} alt='Logo' />
        </div>
        <div className="msg-container">
          <h1>Verificando tu correo electrónico...</h1>
        </div>
      </div>
      <div className={`res-container ${err ? 'show' : ''} ${suc ? 'show positive' : ''}`}>
        {
          err ? (
            <p>
              No pudimos verificar tu correo vuelve a intentarlo más tarde.
            </p>

          ) : (
            <p>
              Se ha verificado tu correo.
            </p>
          )
        }
      </div>
    </div>
  )
}

const VerifyEmail = () => {
  return (
    <Suspense>
      <Verify />
    </Suspense>
  )
}

export default VerifyEmail
