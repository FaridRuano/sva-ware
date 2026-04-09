'use client'
import Logo from '@public/assets/icons/logo-navbar.webp'
import ArrowDown from '@public/assets/icons/arrow-down.webp'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from '@node_modules/axios'
import Link from '@node_modules/next/link'

const NavBar = () => {

    const router = useRouter()

    const [loading, setLoading] = useState(true)

    const [username, setUsername] = useState('Student')

    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null);

    const { data: session, status } = useSession()

    const [user, setUser] = useState({
        subscription: {
            isActive: false
        }
    })

    const verifySubscription = (date) => {
        setLoading(true)
        const currentDate = new Date()
        const endDate = new Date(date)

        if (currentDate > endDate) {
            return false
        } else {
            return true
        }
    }

    const verifyUserStillExists = async (email) => {
        try {
            setLoading(true)
            const res = await axios.post(`/api/auth/login/email`, { email })

            if (res.data.exists) {
                setUser(res.data.user)
                if (res.data.user.subscription.isActive) {
                    if (!verifySubscription(res.data.user.subscription.endDate)) {
                        const res2 = await axios.post(`/api/client/subs`, { email, action: 'subexpired' })
                        setUser(res2.data.userData)
                    }
                }

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
            if (status === 'authenticated') {

                try {
                    const isUser = await verifyUserStillExists(session.user.email)

                    if (isUser) {
                        setUsername(session.user.name)
                        setLoading(false)
                    } else {
                        signOut({ callbackUrl: '/login' })
                    }

                } catch (error) {
                    console.error("Error at verifying user:", error)
                }
            } else if (status === 'unauthenticated') {
                router.push('/login')
            }
        }

        checkUser()

    }, [status, router])

    useEffect(() => {
        function handleClickOutside(event) {
            // Si el click no ocurre dentro de dropdownRef, lo cerramos
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    if (status === 'loading' || loading) {
        return (
            <div className='client-navbar loading'>
                <div className="client-nav-container">

                </div>
            </div>
        )
    } else {
        return (
            <>
                <div className='client-navbar'>
                    <div className="client-nav-container">
                        <div className="nav-item logo" onClick={() => router.push('/client')}>
                            <Image src={Logo} width={'auto'} height={30} alt='Logo' />
                        </div>
                        {/* <div className="nav-item">
                        <div className="item" onClick={() => router.push('/client/mycourses')}>
                            <Image src={Courses} width={'auto'} height={20} alt='Icon' />
                            <span>Mis cursos</span>
                        </div>
                        <div className="item">
                            <Image src={Blog} width={'auto'} height={20} alt='Icon' />
                            <span>Blog</span>
                        </div>
                    </div> */}
                        <div className="nav-item">
                            <div className={`dropdown ${showDropdown ? 'active' : ''}`} onClick={() => {
                                setShowDropdown(current => !current)
                            }
                            }>
                                <div className="name-dropdown">
                                    <span>
                                        {username}
                                    </span>
                                </div>
                                <div className="icon">
                                    <Image src={ArrowDown} width={11} height={'auto'} alt='Icon' />
                                </div>
                                <div className='dropdown-item' ref={dropdownRef}>
                                    <div className="dropdown-wrap">
                                        <span>
                                            <Link href={{ pathname: '/client/profile' }}>
                                                Ver mi perfil
                                            </Link>
                                        </span>
                                        {
                                            !user.subscription.isActive && (
                                                <span>
                                                    <Link href={{ pathname: '/client/profile', query: { openSubsModal: true } }}>
                                                        Unirme a la escuela
                                                    </Link>
                                                </span>
                                            )
                                        }
                                        <div className="separator" />
                                        <span className='logout' onClick={() => signOut({ callbackUrl: '/' })}>
                                            <a>
                                                Cerrar Sesión
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </>

        )
    }

}

export default NavBar