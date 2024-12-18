'use client'
import Logo from '@public/assets/icons/logo-navbar.webp'
import Courses from '@public/assets/icons/courses.webp'
import Blog from '@public/assets/icons/blog.webp'
import ArrowDown from '@public/assets/icons/arrow-down.webp'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const NavBar = () => {

    const router = useRouter()

    const [username, setUsername] = useState('Student')

    const { data: session, status } = useSession()

    useEffect(()=>{
        if (status === 'authenticated') {
            setUsername(session.user.name)
        }else if(status === 'unauthenticated'){
            router.push('/login')
        }
    }, [status])

    if (status === 'loading') {
        return(
            <div className='client-navbar loading'>
              <div className="client-nav-container">
                  
              </div>
          </div>
        )
    }else{
        return (
          <div className='client-navbar'>
              <div className="client-nav-container">
                  <div className="nav-item logo" onClick={()=> router.push('/client')}>
                      <Image src={Logo} width={'auto'} height={30} alt='Logo'/>
                  </div>
                  <div className="nav-item">
                      <div className="item" onClick={()=> router.push('/client')}>
                          <Image src={Courses} width={'auto'} height={20} alt='Icon'/>
                          <span>Cursos</span>
                      </div>
                      <div className="item">
                          <Image src={Blog} width={'auto'} height={20} alt='Icon'/>
                          <span>Blog</span>
                      </div>
                  </div>
                  <div className="nav-item">
                      <div className="dropdown">
                          <span>
                              {username}
                          </span>
                          <div className="icon">
                              <Image src={ArrowDown} width={11} height={'auto'} alt='Icon'/>
                          </div>
                          <div className="dropdown-item">
                            <div className="dropdown-wrap">
                                <span>
                                    <a href='/client/profile'>
                                        Ver mi perfil
                                    </a>
                                </span>
                                <span>
                                    <a href='/client/subscription'>
                                        Unirme a la escuela
                                    </a>
                                </span>
                                <div className="separator"/>
                                <span className='logout' onClick={() => signOut({ callbackUrl: '/' })}>
                                    <a>
                                        Cerrar Sesión
                                    </a>
                                </span>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }

}

export default NavBar