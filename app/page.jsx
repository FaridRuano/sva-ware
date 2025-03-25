'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import FooterHome from "@public/components/public/FooterHome";
import NavBar from "@public/components/public/NavBar";
import Image from '@node_modules/next/image';
import PT2Asset from '@public/assets/imgs/home-pt2-asset.webp'
import PT2Asset2 from '@public/assets/imgs/home-pt2-asset-2.webp'
import PT11Asset from '@public/assets/imgs/home-asset7.webp'
import MuxPlayer from '@node_modules/@mux/mux-player-react';
import MuxVideo from '@node_modules/@mux/mux-video-react';

const Home = () => {

  const router = useRouter()

  const [activeSec, setActiveSec] = useState('')

  const sections = useMemo(() => ["intro", "learning", "content", "prices"], [])

  useEffect(() => {
    const observerOptions = {
      root: null, // Observa el viewport
      rootMargin: "0px",
      threshold: 0.5, // Se activa cuando el 50% de la sección está visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSec(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observa todas las secciones
    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    });

    return () => observer.disconnect()
  }, [sections])

  return (
    <>
      <NavBar activeSection={activeSec} />
      <div className="pages">
        <div className='home-page'>
          <section className='home-pt1' id='intro'>
            <div className="video-background">
              <MuxVideo
                playbackId="K1KlYUJdOLUsVLsu4N6I2jRcAcFv4SKsuYwARx00MooU"
                autoPlay muted loop
                hls-config='{
                  "maxBufferLength": 30,
                  "maxMaxBufferLength": 60,
                  "backBufferLength": 15,
                  "nudgeMaxRetry": 5
                }'>
              </MuxVideo>
            </div>
            <div className="signin-btn" onClick={() => router.push('/login')}>
              <p>
                Empieza Ya
              </p>
            </div>
            <div className="titles-container">
              <div className="titles">
                <h4>Bienvenido a la</h4>
                <h2>Escuela de</h2>
                <h1>Artes Visuales</h1>
              </div>
              <div className="info">
                <p>
                  Aprende nuevas técnicas, habilidades y formas creativas de crear contenido.
                </p>
              </div>
            </div>
          </section>
          <section className="home-pt2">
            <div className="assets-background">
              <div id="pt2-asset">
                <Image src={PT2Asset} width={1504} height={'auto'} alt='asset' />
              </div>
              <div id="pt2-asset2">
                <Image src={PT2Asset2} width={215} height={'auto'} alt='asset' />
              </div>
            </div>
            <div className="content-container">
              <div className="title-pt2">
                <h1>
                  No sigas a la multitud
                </h1>
                <h2>
                  crea tu propio <b>camino</b> con tu talento visual.
                </h2>
              </div>
              <div className="separator-0"></div>
              <div className="info-pt2">
                <p>
                  Desarrolla todas las habilidades que necesitas para empezar un
                  camino propio en el mundo audiovisual, explorando tu creatividad,
                  dominando las herramientas digitales y llevando tus ideas a la realidad.
                </p>
              </div>
            </div>
          </section>
          <section className="home-pt3" id='learning'>
            <div className="content-container2">
              <div className="title-pt3">
                <h1>
                  ¿Qué aprenderé?
                </h1>
              </div>
              <div className="pt3-containers">
                <div className="pt3-col">
                  <MuxVideo
                    playbackId="Kqt5ki3YSvfrBselh1024haITJbzkQUzZ77027dmav7Zw"
                    autoPlay muted loop
                    hls-config='{
                      "maxBufferLength": 30,
                      "maxMaxBufferLength": 60,
                      "backBufferLength": 15,
                      "nudgeMaxRetry": 5
                    }'>
                  </MuxVideo>
                </div>
                <div className="pt3-col-bg">
                  <div className="col-titles">
                    <h1>Domina los Softwares <b>Creativos</b></h1>
                    <p>
                      Para empezar en el mundo audiovisual, necesitas introducirte en las herramientas
                      que te permitirán plasmar tu creatividad en una pantalla.
                    </p>
                    <p>
                      Aquí aprenderás <b>técnicas y habilidades</b>, además,
                      recibirás material práctico para que puedas realizar cada ejercicio desde cero.
                    </p>
                    <p>
                      El <b>90%</b> del conocimiento lo recibirás a través de la práctica, ejercicios y desafíos
                      adicionales que te permitirán desarrollarte de la mejor forma.
                    </p>
                  </div>
                </div>
              </div>
              <div className="title2-pt3">
                <h1>
                  Nosotros vamos más allá
                </h1>
              </div>
              <div className="pt3-containers">
                <div className="pt3-row explore-btn">
                  <p>
                    Descubre los <b>secretos</b> mejor guardados de los efectos visuales y lleva tu creatividad al
                    siguiente nivel.
                  </p>
                  <br />
                  <p>
                    <b>Nada de rodeos ni teoría aburrida</b>, aquí vamos directo a lo que realmente
                    importa: cómo se crean los efectos más impactantes, tanto en diseño como en producción
                    audiovisual.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="home-pt4">
            <div className="video-background">
              <MuxVideo
                playbackId="xz00RZN59TsxMEpQjuv02VhrzxiyI9dxRqZcLjW00NOJzY"
                autoPlay muted loop
                hls-config='{
                  "maxBufferLength": 30,
                  "maxMaxBufferLength": 60,
                  "backBufferLength": 15,
                  "nudgeMaxRetry": 5
                }'>
              </MuxVideo>
            </div>
            <div className="content-container">
              <div className="info-container">
                <h1 className='pt4-title'>
                  NO IMPORTA TU NIVEL <br /><b>SI NO TUS GANAS DE APRENDER</b>
                </h1>
                <div className="separator-0"></div>
                <div className="info">
                  <p>
                    Tenemos contenido tanto para principiantes como para quienes ya tienen experiencia,
                    porque en el mundo creativo siempre hay nuevos efectos y técnicas por descubrir.
                    <br />
                    <b>
                      Nunca lo sabremos todo, pero siempre podemos seguir mejorando.
                    </b>
                  </p>

                </div>
              </div>
            </div>
          </section>
          <section className="home-pt5" id='content'>
            <div className="content-container">
              <div className="title-pt3">
                <h1>
                  Contenido
                </h1>
              </div>
              <div className="pt5-containers">
                <div className="pt5-square">
                  <div className="square-title">
                    <h1>Workshops</h1>
                    <p>
                      Descubre una serie de talleres intensivos diseñados para que practiques
                      con ejercicios reales y adquieras habilidades de forma dinámica y efectiva.
                    </p>
                  </div>
                  <div className="video-background">
                    <MuxVideo
                      playbackId="uif2o4bUYjZ5iAdEtEYF1B2qNCpVXeUeJODaFAaaHOc"
                      autoPlay muted loop
                      hls-config='{
                        "maxBufferLength": 30,
                        "maxMaxBufferLength": 60,
                        "backBufferLength": 15,
                        "nudgeMaxRetry": 5
                      }'>
                    </MuxVideo>
                  </div>
                </div>
                <div className="pt5-square">
                  <div className="square-title">
                    <h1>Masterclasses</h1>
                    <p>
                      Encuentra exactamente lo que necesitas en nuestras masterclasses sobre
                      técnicas y efectos específicos, donde podrás llevar a cabo justo lo que estabas buscando.
                    </p>
                  </div>
                  <div className="video-background">
                    <MuxVideo
                      playbackId="NgNk01lxfl2hI0002VA1mQs5PRy01fmZK02BFthRiPWw02NMs"
                      autoPlay muted loop
                      hls-config='{
                        "maxBufferLength": 30,
                        "maxMaxBufferLength": 60,
                        "backBufferLength": 15,
                        "nudgeMaxRetry": 5
                      }'>
                    </MuxVideo>
                  </div>
                </div>
              </div>
              <div className="pt5-containers">
                <div className="pt5-square">
                  <div className="square-title">
                    <h1>VFX & SFX Assets</h1>
                    <p>
                      Mejora tu eficiencia en la edición con nuestros paquetes de recursos, diseñados para
                      optimizar tu flujo de trabajo y elevar la calidad de tus proyectos visuales.
                    </p>
                  </div>
                  <div className="video-background">
                    <MuxVideo
                      playbackId="oTThTZCYHRo02dB1aVeKODizo9V2V3KH02uw88uvBIdwY"
                      autoPlay muted loop
                      hls-config='{
                        "maxBufferLength": 30,
                        "maxMaxBufferLength": 60,
                        "backBufferLength": 15,
                        "nudgeMaxRetry": 5
                      }'>
                    </MuxVideo>
                  </div>
                </div>
                <div className="pt5-square">
                  <div className="square-title">
                    <h1>Live classes</h1>
                    <p>
                      Accede a sesiones en vivo con un artista visual profesional y despeja todas tus dudas o
                      recibe feedback sobre tus proyectos.
                    </p>
                  </div>
                  <div className="video-background">
                    <MuxVideo
                      playbackId="02007oMj01gxsZVMBc01vUCrca00As9JiPbO5llCM00Lonwwc"
                      autoPlay muted loop
                      hls-config='{
                        "maxBufferLength": 30,
                        "maxMaxBufferLength": 60,
                        "backBufferLength": 15,
                        "nudgeMaxRetry": 5
                      }'>
                    </MuxVideo>
                  </div>
                </div>
              </div>
              <div className="title-pt5" onClick={() => router.push('/login')}>
                <h1>
                  Ingresa y revisa todo el contenido
                </h1>
              </div>
            </div>
          </section>
          <section className="home-pt6">
            <div className="content-container">
              <div className="title-pt6">
                <h1>Contenido <b>NUEVO</b> cada semana</h1>
              </div>
              <div className="separator-0"></div>
              <div className="info">
                <p>
                  Todas las semanas habrá nuevo contenido para explorar,
                  masterclasses y workshops, todo para seguir mejorando tus habilidades.
                </p>
              </div>
              <div className="video-background">
                <MuxVideo
                  playbackId="gcMbL018NURKr88ZTl4LoQRGlwsCIEtEeAx9BCFu14Mw"
                  autoPlay muted loop
                  hls-config='{
                    "maxBufferLength": 30,
                    "maxMaxBufferLength": 60,
                    "backBufferLength": 15,
                    "nudgeMaxRetry": 5
                  }'>
                </MuxVideo>
              </div>
            </div>
          </section>
          <section className="home-pt7" id='prices'>
            <div className="content-container">
              <div className="title-pt3">
                <h1>
                  Precios
                </h1>
              </div>
              <div className="info bg">
                <p>
                  <b>Vamos al grano:</b> no te venderemos una 'promoción' ni te diremos nada engañoso.
                </p>
                <p>
                  Nuestros precios reflejan el verdadero valor del contenido que ofrecemos, manteniendo
                  la accesibilidad para que cualquiera pueda aprender sin barreras.
                </p>
              </div>

              <div className="info">
                <p>
                  Y estos precios nos permiten seguir creando nuevo contenido de calidad y a
                  crecer esta comunidad de artistas visuales, <b>somos algo mucho más grande que cursos online.</b>

                </p>
              </div>
            </div>
          </section>
          <section className="home-pt8">
            <div className="content-container">
              <div className="info">
                <p>
                  <b>
                    Puedes comprar unicamente lo que buscas por separado
                  </b>
                </p>
              </div>
              <div className="cols-container">
                <div className="col">
                  <div className="content">
                    <div className="title">Workshops</div>
                    <ul className='advantages'>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>6 horas </b>de contenido audiovisual.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>4-6 horas </b>de actividades prácticas.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>Material </b>para desarrollar cada práctica.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>Acceso </b>de por vida.
                        </p>
                      </li>
                    </ul>
                    <div className="cost">
                      <p>desde</p>
                      <h1>
                        $44.99
                      </h1>
                      <p>USD</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="content">
                    <div className="title">Masterclasses</div>
                    <ul className='advantages'>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>1-2 horas </b>de contenido audiovisual.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>2-3 horas </b>de actividades prácticas.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>Material </b>para desarrollar cada práctica.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>Acceso </b>de por vida.
                        </p>
                      </li>
                    </ul>
                    <div className="cost">
                      <p>desde</p>

                      <h1>
                        $22.99
                      </h1>
                      <p>USD</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="content">
                    <div className="title">Resources Packs</div>
                    <ul className='advantages'>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>+100 </b>recursos audiovisuales.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>Fácil </b>edición y uso.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>Compatibilidad </b>con todos los softwares.
                        </p>
                      </li>
                      <li>
                        <div className="list-0"></div>
                        <p>
                          <b>Acceso </b>de por vida.
                        </p>
                      </li>
                    </ul>
                    <div className="cost">
                      <p>desde</p>
                      <h1>
                        $13.99
                      </h1>
                      <p>USD</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-pt5" onClick={() => router.push('/login')}>
                <h1>
                  Explora todo el contenido gratis
                </h1>
              </div>
            </div>
          </section>
          <section className="home-pt9">
            <div className="content-container">
              <div className="info">
                <div className='info-col'>
                  <p>
                    O puedes unirte a nuestra
                  </p>
                  <div className='creative'>comunidad creativa</div>
                  <p>
                    y tener ACCESO TOTAL
                  </p>
                </div>
              </div>
              <div className="separator-0"></div>
              <div className="content">
                <div className="advantage">
                  <div className="separator-1"></div>
                  <p>
                    Accede a todo el contenido de nuestra plataforma, antiguo y nuevo.
                  </p>
                </div>
                <div className="advantage">
                  <div className="separator-1"></div>
                  <p>
                    Recibe las últimas novedades y tendencias directamente en tu correo.
                  </p>
                </div>
                <div className="advantage">
                  <div className="separator-1"></div>
                  <p>
                    Conviertete en un miembro de nuestra comunidad y conecta con artistas como tú.
                  </p>
                </div>
                <div className="advantage detail">
                  <div className="separator-1"></div>
                  <p>
                    Obtén acceso directo a un tutor que te guiará en cada paso de tu aprendizaje.
                  </p>
                </div>
                <div className="advantage detail">
                  <div className="separator-1"></div>
                  <p>
                    Aclara todas tus dudas con sesiones en vivo 1 a 1 con un artista profesional.
                  </p>
                </div>
              </div>
              <div className="video-background">
                <MuxVideo
                  playbackId="FZQMlHIaRS1NMkdYodtuydq3Eg02XjP7M7KSZIFJoC4M"
                  autoPlay muted loop
                  hls-config='{
                    "maxBufferLength": 30,
                    "maxMaxBufferLength": 60,
                    "backBufferLength": 15,
                    "nudgeMaxRetry": 5
                  }'>
                </MuxVideo>
              </div>
            </div>
          </section>
          <section className="home-pt10">
            <div className="content-contianer">
              <div className="content-row">
                <div className="col ">
                  <div className="title">
                    <h1>
                      Mensual
                    </h1>
                    <p>
                      Se renueva cada mes
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="price tier-btn" onClick={() => router.push('/login')}>
                    <h1>
                      $29.99
                    </h1>
                    <p>USD</p>
                  </div>
                </div>
              </div>
              <div className="content-row" id='row2'>
                <div className="col">
                  <div className="title">
                    <h1>
                      Trimestral
                    </h1>
                    <p>
                      Se renueva cada 3 meses
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="save">
                    Paga <b>$24.33</b> por mes
                  </div>
                  <div className="price tier2-btn" onClick={() => router.push('/login')}>
                    <h1>
                      $72.99
                    </h1>
                    <p>USD</p>
                  </div>
                </div>
              </div>
              <div className="content-row" id='row3'>
                <div className="col">
                  <div className="title">
                    <h1>
                      Semestral
                    </h1>
                    <p>
                      Se renueva cada 6 meses
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="save">
                    Paga <b>$21.16</b> por mes
                  </div>
                  <div className="price tier3-btn" onClick={() => router.push('/login')}>
                    <h1>
                      $126.99
                    </h1>
                    <p>USD</p>
                  </div>
                </div>
              </div>
              <div className="info">
                <p>
                  Puedes cancelar en cualquier momento tu suscripción, sin recargos.
                </p>
              </div>
              <div className="footer-sec">
                <div className="title-pt5" onClick={() => router.push('/login')}>
                  <h1>
                    Crear tu cuenta es gratis
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="home-pt11">
            <div className="content-container">
              <div className="title">
                <h1>¿Quién está detrás de esto?</h1>
              </div>
              <div className="separator-0"></div>
              <div className="ig-id">
                <div className="img-holder">
                  <Image src={PT11Asset} width={65} height={'auto'} alt='profile' />
                </div>
                <div className="tag-holder">
                  <a href="https://www.instagram.com/farid.ruano/" target='_blank'>
                    @farid.ruano
                  </a>
                </div>
              </div>
              <div className="info">
                <p>
                  Soy un artista visual de 23 años con más de 5 años de experiencia en edición de video,
                  postproducción y diseño gráfico. No estudié en una universidad; soy completamente autodidacta.
                  A lo largo de mi trayectoria, nadie me ha pedido un título o certificado, porque las
                  oportunidades que he tenido han sido gracias a la calidad de mi trabajo. Me apasiona
                  crear piezas audiovisuales disruptivas y visualmente impactantes, siempre imprimiendo
                  mi toque personal en cada proyecto.
                </p>
                <p>
                  ¿Por qué estoy creando esta plataforma? Porque aprendí, a través de mi propia experiencia,
                  que no puedo aceptar todos los proyectos que me llegan. No porque no quiera, sino porque
                  soy solo una persona. No tengo equipo, socios ni compañeros que compartan mi visión creativa
                  y estilo. Esto me ha puesto en una posición complicada a la hora de trabajar a gran escala.
                </p>
                <p>
                  Además, me di cuenta de que la educación en este campo es limitada y poco accesible. En Latinoamérica,
                  la educación en arte digital es costosa y, en muchos casos, no ofrece el conocimiento necesario para
                  empezar. ¿Vale la pena invertir años en una carrera que difícilmente te preparará para la industria?
                  El mundo avanza rápido, y no estamos para perder el tiempo.
                </p>
                <p>
                  Por eso decidí crear este espacio: para enseñar, aprender y apoyar a quienes quieren dedicarse al
                  arte digital. Quiero brindar una oportunidad real para que plasmen sus ideas en la pantalla sin
                  depender de años de estudios en una institución tradicional, sino aprendiendo en el mundo real,
                  de manera práctica y efectiva.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FooterHome />

    </>
  )
}

export default Home
