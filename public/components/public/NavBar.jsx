'use client'

import React, { useEffect, useState } from 'react'
import NavLogo from '@public/assets/icons/logo-navbar.webp'
import Menu from '@public/assets/icons/menu.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
  
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return windowSize
}

const NavBar = ({activeSection}) => {

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

    const [isNearFooter, setIsNearFooter] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            const scrollY = window.scrollY; // How far the user has scrolled
            const windowHeight = window.innerHeight; // Viewport height
            const documentHeight = document.documentElement.scrollHeight; // Full page height
            const footerHeight = 155; // Height of your footer
            const distanceFromBottom = documentHeight - (scrollY + windowHeight)
      
            if (distanceFromBottom <= footerHeight) {
              setIsNearFooter(true)
            } else {
              setIsNearFooter(false)
            }
          }
      
          window.addEventListener('scroll', handleScroll)
          
          return () => {
            window.removeEventListener('scroll', handleScroll)
          }
    },[])

    if(size.width === undefined){
        return(
            <>

            </>
        )
    }

    if(size.width > 800){
        return(
            <div className="nav-container">
                <nav className='public-navbar'>

                    <ul className='nav-items'>
                        <li className={`nav-item ${activeSection === 'skills' ? 'active':''}`} onClick={() => scrollToSection('skills')}>
                            ¿Qué aprenderé?
                        </li>
                        <li className={`nav-item ${activeSection === 'courses' ? 'active':''}`} onClick={() => scrollToSection('courses')}>
                            Cursos
                        </li>
                    </ul>
                    <div className="logo-holder" onClick={() => scrollToSection('intro')}>
                        <Image src={NavLogo} width={70} height={'auto'} alt='Visual Arts School Logo' />
                    </div>
                    <ul className='nav-items'>
                        <li className={`nav-item ${activeSection === 'about' ? 'active':''}`} onClick={() => scrollToSection('about')}>
                            Acerca de
                        </li>
                        <li className='sbtn cp-hs' onClick={()=>router.push('/login')}>
                            Empieza Ya
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }else{
        return (
            <>
            <div className='nav-container'>
                <nav className='public-navbar mobile'>
                    <div className="nav-items">
                        <Image src={Menu} width={'auto'} height={20} alt='Menu' onClick={()=>handleMenu()}/>
                    </div>
                    <div className="logo-holder" onClick={() => scrollToSection('intro')}>
                        <Image src={NavLogo} width={'auto'} height={35} alt='Visual Arts School Logo'/>
                    </div>
                    
                    <ul className={isMenu?'nav-items-dis hidden':'nav-items-dis'}>
                        <li className='nav-item' onClick={() => {
                            scrollToSection('skills')
                            handleMenu()
                            }}>
                            ¿Qué aprenderé?
                        </li>
                        <li className='nav-item' onClick={() => {
                            scrollToSection('courses')
                            handleMenu()
                            }}>
                            Cursos
                        </li>
                        <li className='nav-item' onClick={() => {
                            scrollToSection('about')
                            handleMenu()
                            }}>
                            Acerca de
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={`overbtn ${isNearFooter? 'end':''}`}>
                <div onClick={()=>router.push('/login')}>
                    Empieza Ya
                </div>
            </div>
            </>

        )
    }
}

export default NavBar