'use client'

import React, { useEffect, useState } from 'react'
import NavLogo from '@public/assets/icons/logo-navbar.webp'
import Menu from '@public/assets/icons/menu.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useWindowSize } from '@libs/useWindowsSize'

const NavBar = ({ activeSection = null }) => {

    const router = useRouter()

    const size = useWindowSize()

    const [isMenu, setMenu] = useState(true)

    const handleMenu = () => {
        setMenu(current => !current)
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const sectionTitle = () => {
        var title = ''
        switch (activeSection) {
            case 'learning':
                title = '¿Qué aprenderé?'
                break
            case 'content':
                title = 'Contenido'
                break
            case 'prices':
                title = 'Precios'
                break
            default:
                title = 'Escuela de Artes Visuales'
                break
        }
        return title
    }

    if (size.width === undefined) {
        return (
            <>

            </>
        )
    }

    if (size.width > 800) {
        return (
            <div className="nav-container">
                <nav className='public-navbar'>

                    <ul className='nav-items'>
                        <li className={`nav-item ${activeSection === 'learning' ? 'active' : ''}`} onClick={() => scrollToSection('learning')}>
                            ¿Qué aprenderé?
                        </li>
                        <li className={`nav-item ${activeSection === 'content' ? 'active' : ''}`} onClick={() => scrollToSection('content')}>
                            Contenido
                        </li>
                    </ul>
                    <div className="logo-holder" onClick={() => scrollToSection('intro')}>
                        <Image src={NavLogo} width={45} height={'auto'} alt='Visual Arts School Logo' />
                    </div>
                    <ul className='nav-items'>
                        <li className={`nav-item ${activeSection === 'prices' ? 'active' : ''}`} onClick={() => scrollToSection('prices')}>
                            Precios
                        </li>
                        <li className='sbtn cp-hs' onClick={() => router.push('/login')}>
                            Ingresar
                        </li>
                    </ul>
                </nav>
            </div>
        )
    } else {
        return (
            <>
                <div className='nav-container'>
                    <nav className='public-navbar mobile'>
                        <div className="nav-items">
                            <Image src={Menu} width={'auto'} height={15} alt='Menu' onClick={() => handleMenu()} />
                        </div>
                        <div className="nav-items">
                            <div className="nav-item" style={{ opacity: isMenu ? 1 : 0 }}>

                                {sectionTitle()}
                            </div>
                        </div>
                        <div className="logo-holder" onClick={() => scrollToSection('intro')}>
                            <Image src={NavLogo} width={'auto'} height={28} alt='Visual Arts School Logo' />
                        </div>

                        <ul className={isMenu ? 'nav-items-dis hidden' : 'nav-items-dis'}>
                            <li className='nav-item' onClick={() => {
                                scrollToSection('learning')
                                handleMenu()
                            }}>
                                ¿Qué aprenderé?
                            </li>
                            <li className='nav-item' onClick={() => {
                                scrollToSection('content')
                                handleMenu()
                            }}>
                                Contenido
                            </li>
                            <li className='nav-item' onClick={() => {
                                scrollToSection('prices')
                                handleMenu()
                            }}>
                                Precios
                            </li>
                            <li className='nav-item' onClick={() => router.push('/login')}>
                                Ingresar
                            </li>
                        </ul>
                    </nav>
                </div>
            </>

        )
    }
}

export default NavBar