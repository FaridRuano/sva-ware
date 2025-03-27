'use client'
import React, { useState } from 'react'
import Logo from '@public/assets/icons/logo-navbar.webp'
import ArrowLeft from '@public/assets/icons/arrow-left.webp'
import Error from '@public/assets/icons/error.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react';

const Login = () => {

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [currentStep, setCurrentStep] = useState(0)

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [coPassword, setCoPassword] = useState('')

  const [fullname, setFullName] = useState('')

  const [errEmail, setErrEmail] = useState(false)
  const [errPassword, setErrPassword] = useState(false)
  const [errName, setErrName] = useState(false)

  const { data: session, status } = useSession()

  const handleSubmitEmail = async (e) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(email.length < 1) {
      setErrEmail(true)
      return
    }

    if (!emailRegex.test(email)) {
      setErrEmail(true)
    } else {
      setErrEmail(false)
      try{
        setLoading(true)

        const res = await axios.post(`/api/auth/login/email`,{email})
        if(res.data.exists){
          setCurrentStep(1)
        }else{
          setCurrentStep(2)
        }

        setLoading(false)
      }catch(e){
        console.log(e)
      }
    }
  }
  
  const handleSubmitPassword = async (e) => {
    e.preventDefault()


    if(password.length < 1) {
      return
    }

    try{
      setLoading(true)

      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
  
      if (res?.error) {
        setErrPassword(true);
        setLoading(false)
      }else{
        router.push('/client')
      }
    }catch(e){
      console.log(e)
    }
  }

  const handleConfirmPassword = async (e) => {
    e.preventDefault()

    if(password.length < 10 || coPassword.length < 10) {
      setErrPassword(true)
      return
    }

    setLoading(true)

    if(password === coPassword){
      setErrPassword(false)
      setCurrentStep(3)
    }else{
      setErrPassword(true)
    }

    setLoading(false)
  }

  const capitalizeWords = (str) => {
    return str
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
      .join(' ')
  }

  const handleRegisterUser = async (e) => {
    e.preventDefault()

    if(fullname.length < 1) {
      setErrName(true)
      return
    }

    setLoading(true)
    const userData = {
      name: capitalizeWords(fullname),
      email: email,
      password: password,
    }

    try{
      const res = await axios.post('api/auth//login/register', userData)
      if(res.data.error){
        alert(errorData.error)
      }else{
        await signIn('credentials', {
          redirect: true,
          email,
          password,
          callbackUrl: '/client',
        })
        setEmail('')
        setPassword('')
        setCoPassword('')
        setFullName('')
      }
    }catch(e){
      console.log(e)
    }
  }



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
      <div className='login-page'>
        <div className="return-btn" onClick={()=>router.push('/')}>
          <Image src={ArrowLeft} width={9} height={'auto'}  alt='Icon'/>
          <span>
            Regresar al inicio
          </span>
        </div>
        <div className="login-wrap">
          <div className="login">
            <div className="logo">
              <Image src={Logo} width={80} height={'auto'} alt='Logo'/>
            </div>
            {
              currentStep === 0 && (
              <>                
                <div className="step">
                  <span>
                    Ingresa o crea una cuenta:
                  </span>
                  <p>
      
                  </p>
                </div>
                <form className="data-form" onSubmit={handleSubmitEmail}>
                  <div className={`form-input ${errEmail?'err':''}`}>
                    <input type='text' className='input-field' id='email' name='email' placeholder='Correo Electrónico' autoComplete='false'
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="email" className='label-field'>Correo Electrónico</label>
                  </div>
                  {
                    errEmail && (
                      <div className="form-error">
                        <Image src={Error} width={13} height={'auto'} alt='Error'/>
                        <div>
                          Asegurate de que tu correo cumpla con el siguiente formato: ejemplo@gmail.com
                        </div>
                      </div>
                    )
                  }
                  <div className="form-btn">
                    <button className='button-field' type='submit'>Continuar</button>
                  </div>
                </form>
                <div className="separate-o">
                  <div className="line"/>
                  o
                  <div className="line"/>
                </div>
                <div className="data-form">
                  <div className="form-btn outline">
                    <button className='button-field dis' type='button'>Con Google, Apple o Facebook</button>
                  </div>
                </div>
              </>
              )
            }
            {
              currentStep === 1 && (
              <>
                <div className="back" onClick={()=>setCurrentStep(0)}>
                  <Image src={ArrowLeft} width={9} height={'auto'} alt='Icon'/>
                  <span>
                    Regresar
                  </span>
                </div>
                <div className="step">
                  <span>
                    Bienvenido de vuelta
                  </span>
                  <p>
                    Ingresa tu contraseña de <b>{email}</b>
                  </p>
                </div>
                <form className="data-form" onSubmit={handleSubmitPassword}>
                  <div className={`form-input ${errPassword?'err':''}`}>
                    <input type='password' className='input-field' id='password' name='password' placeholder='Contraseña' autoComplete='false'
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="password" className='label-field'>Contraseña</label>
                  </div>
                  {
                    errPassword && (
                      <div className="form-error">
                        <Image src={Error} width={13} height={'auto'} alt='Error'/>
                        <div>
                          Asegurate de que la contraseña sea la correcta.
                        </div>
                      </div>
                    )
                  }
                  <div className="form-btn">
                    <button className='button-field' type='submit'>Iniciar sesión</button>
                  </div>
                </form>
                <div className="forgot">
                  <span>
                    ¿Olvidaste la contraseña?
                  </span>
                </div>
              </>
              )
            }
            {
              currentStep === 2 && (
              <>
                <div className="back" onClick={()=>setCurrentStep(0)}>
                  <Image src={ArrowLeft} width={9} height={'auto'} alt='Icon'/>
                  <span>
                    Regresar
                  </span>
                </div>
                <div className="step">
                  <span>
                    Crea una contraseña
                  </span>
                  <p>
                    Debe tener al menos 10 caracteres.
                  </p>
                </div>
                <form className="data-form" onSubmit={handleConfirmPassword}>
                  <div className={`form-input ${errPassword?'err':''}`}>
                    <input type='password' className='input-field' id='password' name='password' placeholder='Contraseña' autoComplete='false'
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="password" className='label-field'>Contraseña</label>
                  </div>
                  <div className={`form-input ${errPassword?'err':''}`}>
                    <input type='password' className='input-field' id='copassword' name='copassword' placeholder='Confirmar Contraseña' autoComplete='false'
                    value={coPassword} onChange={(e)=>setCoPassword(e.target.value)}/>
                    <label htmlFor="copassword" className='label-field'>Confirmar Contraseña</label>
                  </div>
                  {
                    errPassword && (
                      <div className="form-error">
                        <Image src={Error} width={13} height={'auto'} alt='Error'/>
                        <div>
                          Asegurate de que las contraseñas coincidan y tengan almenos 10 carácteres.
                        </div>
                      </div>
                    )
                  }
                  <div className="form-btn">
                    <button className='button-field' type='submit'>Continuar</button>
                  </div>
                </form>
                <div className="terms">
                  <span>
                    Al crear una cuenta en Visual Arts School, aceptas los <a><b>Términos de
                    Servicio y Políticas de privacidad.</b></a>
                  </span>
                </div>
              </>
              )
            }
            {
              currentStep === 3 && (
              <>
                <div className="back" onClick={()=>setCurrentStep(2)}>
                  <Image src={ArrowLeft} width={9} height={'auto'} alt='Icon'/>
                  <span>
                    Regresar
                  </span>
                </div>
                <div className="step">
                  <span>
                    Escribe tu nombre
                  </span>
                  <p>
                    El último paso es decirnos quien eres.
                  </p>
                </div>
                <form className="data-form" onSubmit={handleRegisterUser}>
                  <div className={`form-input ${errName?'err':''}`}>
                    <input type='text' className='input-field' id='fullname' name='fullname' placeholder='Nombre completo' autoComplete='false'
                    value={fullname} onChange={(e)=>setFullName(e.target.value)}/>
                    <label htmlFor="fullname" className='label-field'>Nombre completo</label>
                  </div>
                  {
                    errName && (
                      <div className="form-error">
                        <Image src={Error} width={13} height={'auto'} alt='Error'/>
                        <div>
                          Asegurate de ingresar un nombre y apellido.
                        </div>
                      </div>
                    )
                  }
                  <div className="form-btn">
                    <button className='button-field' type='submit'>Crear Cuenta</button>
                  </div>
                </form>
              </>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Login