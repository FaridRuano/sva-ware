import React from 'react'
import LogoFooter from '@public/assets/icons/logo-footer.webp'
import Image from 'next/image'

const FooterHome = () => {
  return (
    <section className="footer">
        <div className="container">
          <Image src={LogoFooter} width={50} height={'auto'} alt='Logo'/>
          <span>
            Copyright © School of Visual Arts 2024 - Todos los derechos reservados
          </span>
        </div>
        <div className="container">
          <span>
            Revisa nuestras políticas <a href='/policy'>aquí.</a>
          </span>
        </div>
    </section>
  )
}

export default FooterHome