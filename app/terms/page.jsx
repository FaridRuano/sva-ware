'use client'
import FooterHome from '@public/components/public/FooterHome'
import React from 'react'
import NavLogo from '@public/assets/icons/logo-navbar.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Terms = () => {

    const router = useRouter()


    return (
        <>
            <div className='policy-page'>
                <div className="content-wrap">
                    <div className="return" onClick={() => router.push('/')}>
                        <Image src={NavLogo} width={50} height={'auto'} alt='Logo' />
                        <span> Regresar al Inicio</span>
                    </div>
                    <h1>Términos de Uso - Escuela de Artes Visuales</h1>

                    <h2>1. Aceptación de los Términos de Uso</h2>
                    <p>Estos Términos de Uso rigen su uso del sitio web ubicado en <a href="https://visualartsschool.com/" target="_blank">visualartsschool.com</a> y los servicios relacionados proporcionados por la Escuela de Artes Visuales.</p>
                    <p>Al acceder y utilizar el sitio web de la Escuela de Artes Visuales, usted acepta cumplir con estos Términos de Uso y con todas las leyes y regulaciones aplicables. Si no está de acuerdo con estos Términos de Uso, no debe utilizar ni acceder a este sitio web ni utilizar ninguno de los servicios proporcionados.</p>
                    <p>La Escuela de Artes Visuales se reserva el derecho de revisar y modificar estos Términos de Uso a su exclusiva discreción. Cualquier cambio será publicado en esta página y entrará en vigor de inmediato desde la fecha de publicación.</p>

                    <h2>2. Descripción del Servicio</h2>
                    <p>La Escuela de Artes Visuales es una plataforma de aprendizaje en línea basada en suscripción y compra de productos digitales. Nuestro servicio ofrece acceso a una extensa biblioteca de tutoriales en video, archivos de proyectos y cursos centrados en diseño gráfico, software 3D y Efectos Visuales (VFX). Tenga en cuenta que nuestra política no permite reembolsos y que el contenido no debe ser redistribuido.</p>

                    <h2>3. Limitaciones de Uso</h2>
                    <p>Al utilizar este sitio web, usted garantiza, por su parte y en nombre de sus usuarios y otras partes que representa, que no:</p>
                    <ul>
                        <li>Modificará, copiará, preparará trabajos derivados, descompilará ni realizará ingeniería inversa de los materiales y software contenidos en este sitio web;</li>
                        <li>Eliminará cualquier notación de derechos de autor u otras notaciones de propiedad de los materiales y software de este sitio web;</li>
                        <li>Transferirá los materiales a otra persona o “duplicará” los materiales en cualquier otro servidor;</li>
                        <li>Utilizará este sitio web de manera que abuse o interrumpa nuestras redes o cualquier otro servicio que proporcionemos;</li>
                        <li>Publicará materiales ofensivos, fraudulentos o ilegales;</li>
                        <li>Usará este sitio en violación de cualquier ley o regulación aplicable;</li>
                        <li>Enviará publicidad no autorizada o spam;</li>
                        <li>Recolectará datos de los usuarios sin su consentimiento;</li>
                        <li>Infringirá los derechos de propiedad intelectual o la privacidad de terceros.</li>
                    </ul>

                    <h2>4. Propiedad Intelectual</h2>
                    <p>Los derechos de propiedad intelectual sobre los materiales contenidos en este sitio web son propiedad de la Escuela de Artes Visuales o están licenciados para ella y están protegidos por la legislación aplicable sobre derechos de autor y marcas registradas.</p>
                    <p>Le otorgamos una licencia para usar los materiales de la plataforma solo para fines educativos personales. No está autorizado para compartir, vender ni distribuir el contenido de los cursos, tutoriales, archivos de proyectos ni otros materiales proporcionados en nuestra plataforma sin nuestro permiso explícito.</p>

                    <h2>5. Registro y Pagos</h2>
                    <p>Para utilizar nuestros servicios, debe crear una cuenta. La información proporcionada debe ser precisa y mantenerse actualizada. Los clientes son responsables de mantener la seguridad de sus cuentas y de todas las actividades realizadas bajo su cuenta. Si alguien obtiene acceso no autorizado a su cuenta, debe notificarnos inmediatamente.</p>
                    <p>Los pagos realizados en nuestra plataforma se procesarán a través de PayPal o Stripe. No nos hacemos responsables del procesamiento o retención de su información financiera, ya que PayPal o Stripe gestionan su información conforme a sus propios Términos de Servicio.</p>

                    <h2>6. Suscripción y Política de Cancelación</h2>
                    <p>Al comprar nuestros servicios, obtiene acceso completo a la biblioteca de cursos de la Escuela de Artes Visuales. En caso de que desee cancelar su suscripción, tendrá acceso al contenido hasta que se realice el siguiente pago, por ejemplo, si cancela su suscripción el 11 de un mes, pero pagó el 10, podrá acceder al contenido hasta el 10 del mes siguiente.</p>
                    <p>Tenga en cuenta que operamos con una política estricta de no reembolsos. Todas las compras son finales, independientemente del uso del servicio.</p>

                    <h2>7. Exoneración de Responsabilidad y Limitaciones de Responsabilidad</h2>
                    <p>El sitio web y los materiales disponibles en él se proporcionan &quot;tal cual&quot;. En la medida permitida por la ley, la Escuela de Artes Visuales no ofrece garantías, explícitas o implícitas, y renuncia a todas las garantías, incluidas las garantías implícitas de comerciabilidad, idoneidad para un propósito particular o no infracción.</p>
                    <p>La Escuela de Artes Visuales no será responsable de ningún daño directo o indirecto derivado del uso o la imposibilidad de uso de este sitio web o los materiales disponibles en él.</p>

                    <h2>8. Política de Uso del Contenido</h2>
                    <p>El contenido disponible en nuestra plataforma es exclusivamente para uso educativo individual. Queda estrictamente prohibida su redistribución, ya sea con fines comerciales o no comerciales. El incumplimiento de esta política puede dar lugar a la terminación inmediata del servicio y a acciones legales.</p>

                    <h2>9. Precisión de los Materiales</h2>
                    <p>Los materiales en nuestro sitio web se proporcionan solo para fines informativos generales. La Escuela de Artes Visuales no garantiza la precisión, los resultados o la fiabilidad del uso de los materiales en este sitio web. Usted es responsable de consultar otras fuentes de información más completas antes de tomar decisiones basadas en los materiales de nuestro sitio.</p>

                    <h2>10. Derecho a Terminar</h2>
                    <p>Podemos suspender o terminar su derecho a usar nuestro sitio web y estos Términos de Uso en cualquier momento y de forma inmediata si incumple cualquier parte de estos Términos de Uso.</p>

                    <h2>11. Ley Aplicable</h2>
                    <p>Estos Términos de Uso se rigen por las leyes del país en el que la Escuela de Artes Visuales tiene su sede. Usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales de ese país.</p>

                </div>
            </div>
            <FooterHome />
        </>

    )
}

export default Terms