'use client'
import { useEffect, Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import NavLogo from '@public/assets/icons/logo-navbar.webp'
import Image from 'next/image'
import axios from '@node_modules/axios';

function FormPassword() {

    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get('token') // Obtén el token de la URL

    const [err, setError] = useState(true)

    const [newpassword, setNewPassword] = useState('')
    const [conpassword, setConPassword] = useState('')
    const [newPasswordError, setNewPasswordError] = useState('')
    const [conPasswordError, setConPasswordError] = useState('')
    const [pasValid, setPasValid] = useState(false)
    const [success, setSuccess] = useState(false)

    const validateNewPassword = (value) => {
        if (value.length <= 10) {
            setNewPasswordError('La contraseña debe tener más de 10 caracteres.')
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            setNewPasswordError('La contraseña debe contener al menos un caracter especial.')
        } else {
            setNewPasswordError('')
        }
    }

    const validateConPassword = (value) => {
        if (value.length <= 10) {
            setConPasswordError('La contraseña debe tener más de 10 caracteres.')
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            setConPasswordError('La contraseña debe contener al menos un caracter especial.')
        } else if (value !== newpassword) {
            setConPasswordError('Las contraseñas no coinciden.')
        } else {
            setConPasswordError('')
        }
    }

    const handlePasswords = (e) => {
        const { name, value } = e.target;
        if (name === 'newpassword') {
            setNewPassword(value)
            validateNewPassword(value)
            if (conpassword) {
                validateConPassword(conpassword)
            }
        } else if (name === 'conpassword') {
            setConPassword(value)
            validateConPassword(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (pasValid) {
            setLoading(true)
            try {
                const data = {
                    token: token,
                    newpassword: newpassword,
                }

                const res = await axios.put('../../api/auth/login/password', data)

                if(res.data.error){
                    setError(true)
                }else{
                    setSuccess(true)

                    setTimeout(() => {
                        router.push('/client/profile')
                    }, 2000)
                }

            } catch (e) {
                console.log(e)
            }
        } else {
            /* Handle Error Form */
        }
    }

    useEffect(() => {
        if (
            newPasswordError === '' &&
            conPasswordError === '' &&
            newpassword &&
            conpassword
        ) {
            setPasValid(true)
        } else {
            setPasValid(false)
        }
    }, [newpassword, conpassword])

    useEffect(() => {
        const verifyToken = async () => {
            if (token) {

                try {
                    const res = await axios(`/api/auth/login/password?token=${token}`)

                    setLoading(false)
                    if (res.data.error) {
                        setError(true)
                        setTimeout(() => {
                            router.push('/login')
                        }, 1000)
                    } else {
                        setError(false)
                    }

                } catch (e) {
                    console.log('Error:' + e)
                }
            } else {
                setLoading(false)
                setError(true)
                setTimeout(() => {
                    router.push('/')
                }, 1000)
            }
        }

        verifyToken()
    }, [token])

    if (loading) {
        return (
            <div className="full-page loading">
                <div className="password-change-container">
                    {
                        success && (
                            <div className='success-msg-change-password'>
                                ¡Contraseña actualizada
                                <br/> con exito!
                            </div>
                        )
                    }
                </div>
            </div>
        )
    } else {

        if (err) {
            return (
                <div className="full-page">
                    <div className="error-container">
                        <h3>
                            Hubo un problema, intenta más tarde!
                        </h3>
                    </div>
                </div>

            )
        } else {
            return (
                <div className="full-page">
                    <div className="password-change-container">
                        <h2>
                            Cambio de Contraseña
                        </h2>
                        <p>
                            La nueva contraseña debe contener al menos 10 carácteres e incluir carácteres especiales.
                        </p>
                        <form action="submit" className='data-form' onSubmit={handleSubmit}>
                            <div className={`form-input ${newPasswordError !== '' ? 'err' : ''}`}>
                                <input type='password' className='input-field' id='newpassword' name='newpassword' placeholder='Nueva Contraseña' autoComplete='false'
                                    value={newpassword} onChange={handlePasswords} />
                                <label htmlFor="newpassword" className='label-field'>Nueva Contraseña</label>
                            </div>
                            <p className='form-error'>{newPasswordError}</p>
                            <div className={`form-input ${conPasswordError !== '' ? 'err' : ''}`}>
                                <input type='password' className='input-field' id='conpassword' name='conpassword' placeholder='Confirma Contraseña' autoComplete='false'
                                    value={conpassword} onChange={handlePasswords} />
                                <label htmlFor="conpassword" className='label-field'>Confirma Contraseña</label>
                            </div>
                            <p className='form-error'>{conPasswordError}</p>
                            <div className="form-btn">
                                <button className={`button-field ${pasValid ? '' : 'dis'}`} type='submit'>Cambiar Contraseña</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }


}

const ChangePassword = () => {
    return (
        <Suspense>
            <FormPassword />
        </Suspense>
    )
}

export default ChangePassword
