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
    </section>
  )
}

export default FooterHome