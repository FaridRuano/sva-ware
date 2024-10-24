'use client'
import FooterHome from '@public/components/public/FooterHome'
import React from 'react'
import NavLogo from '@public/assets/icons/logo-navbar.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Policy = () => {

    const router = useRouter()


  return (
    <>
        <div className='policy-page'>
            <div className="content-wrap">
                <div className="return" onClick={()=>router.push('/')}>
                    <Image src={NavLogo} width={50} height={'auto'} alt='Logo'/>
                    <span> Regresar al Inicio</span>
                </div>
                <h1>Política de Cookies</h1>
                <p><strong>¿Qué son las cookies?</strong></p>
                <p>
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
                    Estos archivos permiten que nuestro sitio recuerde tus preferencias y te proporcione una experiencia personalizada.
                </p>

                <p><strong>¿Para qué usamos cookies?</strong></p>
                <p>
                    En nuestra web dedicada a enseñar técnicas de arte digital, utilizamos cookies para mejorar tu experiencia de navegación.
                    Esto incluye recordar tus datos de inicio de sesión y personalizar ciertos aspectos del sitio para ti. No utilizamos
                    cookies para recopilar información personal adicional ni para fines de marketing.
                </p>

                <p><strong>Cookies que utilizamos</strong></p>
                <ul>
                    <li><strong>Cookies esenciales:</strong> Son necesarias para que el sitio funcione correctamente. Permiten que inicies sesión y accedas a los cursos.</li>
                    <li><strong>Cookies de rendimiento:</strong> Usamos cookies para analizar cómo interactúas con nuestro sitio y mejorar su funcionalidad.</li>
                </ul>

                <p><strong>Cookies de terceros</strong></p>
                <p>
                    Utilizamos servicios de terceros, como Stripe, para procesar pagos de manera segura. Stripe puede utilizar cookies para garantizar el
                    funcionamiento seguro del pago.
                </p>

                <p><strong>Cómo gestionar tus cookies</strong></p>
                <p>
                    Puedes configurar tu navegador para bloquear o eliminar cookies, pero esto puede afectar la funcionalidad del sitio,
                    como el inicio de sesión o el acceso a los cursos.
                </p>
                <h1>Política de Privacidad</h1>
                <p><strong>Información que recolectamos</strong></p>
                <p>
                    En nuestro sitio web, solicitamos solo la información estrictamente necesaria para brindarte nuestros servicios de enseñanza en arte digital.
                    La información personal que recolectamos incluye:
                </p>
                <ul>
                    <li><strong>Nombre:</strong> Lo utilizamos para personalizar las interacciones contigo dentro del sitio.</li>
                    <li><strong>Correo electrónico:</strong> Lo utilizamos para comunicarnos contigo sobre actualizaciones del curso y soporte técnico.</li>
                    <li><strong>Contraseña:</strong> Es necesaria para que puedas acceder de forma segura a tu cuenta.</li>
                </ul>

                <p><strong>Finalidad del uso de tu información</strong></p>
                <ul>
                    <li><strong>Gestión de cuentas:</strong> Usamos tu nombre y correo electrónico para gestionar tu cuenta.</li>
                    <li><strong>Comunicación:</strong> Utilizamos tu correo electrónico para enviarte notificaciones importantes y actualizaciones.</li>
                    <li><strong>Seguridad:</strong> Tu contraseña es encriptada para proteger tu cuenta.</li>
                </ul>

                <p><strong>Pagos y terceros</strong></p>
                <p>
                    Utilizamos Stripe para procesar los pagos de manera segura. No accedemos a la información de tu tarjeta de crédito.
                    Stripe tiene su propia política de privacidad que puedes consultar <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">aquí</a>.
                </p>

                <p><strong>Compartición de datos</strong></p>
                <p>
                    No compartimos tu información personal con terceros, excepto para los servicios que hacen funcionar nuestro sitio, como Stripe.
                </p>

                <p><strong>Seguridad de tus datos</strong></p>
                <p>
                    Nos esforzamos para proteger tu información personal mediante medidas de seguridad. Recomendamos que utilices contraseñas seguras y únicas.
                </p>

                <p><strong>Derechos del usuario</strong></p>
                <p>
                    Puedes acceder, corregir o eliminar tu información personal en cualquier momento. Contáctanos en <a href="mailto:fruanocm2777@gmail.com">fruanocm2777@gmail.com</a> para cualquier solicitud.
                </p>

                <p><strong>Cambios en la política de privacidad</strong></p>
                <p>
                    Nos reservamos el derecho de modificar esta política de privacidad cuando sea necesario. Cualquier cambio será notificado a través de tu correo electrónico o publicado en esta página.
                </p>
            </div>
        </div>
        <FooterHome/>
    </>

  )
}

export default Policy