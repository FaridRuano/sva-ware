'use client'
import NavBar from '@public/components/public/NavBar'
import Asset1 from '@public/assets/imgs/home-asset.webp'
import Asset2 from '@public/assets/imgs/home-asset2.webp'
import Asset3 from '@public/assets/imgs/home-asset3.webp'
import Asset4 from '@public/assets/imgs/home-asset4.webp'
import Asset5 from '@public/assets/imgs/home-asset5.webp'
import Asset6 from '@public/assets/imgs/home-asset6.webp'
import Asset7 from '@public/assets/imgs/home-asset7.webp'
import Asset8 from '@public/assets/imgs/home-asset8.webp'
import Asset9 from '@public/assets/imgs/home-asset9.webp'
import Instagram from '@public/assets/icons/instagram.webp'
import Facebook from '@public/assets/icons/facebook.webp'
import Twitter from '@public/assets/icons/twitter.webp'
import Youtube from '@public/assets/icons/youtube.webp'
import Tiktok from '@public/assets/icons/tiktok.webp'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import FooterHome from '@public/components/public/FooterHome'

const Home = () => {

  /*Info Slider */

  const [infoSlider, setInfoSlider] = useState(2)

  const activeInfoSlider = () => {
    switch (infoSlider) {
      case 1:
        return 'next';
      case 2:
        return '';
      case 3:
        return 'prev';
      default:
        return '';
    }
  }

  /* Courses Slider */

  const [courseSlider, setCourseSlider] = useState(1)

  const courses = [
    {id: 1, title: 'Introducción a la Suite de Adobe', descrip: 'Tu viaje empieza aqui, este curso esta diseñado para que cualquier persona desde 0 pueda empezar a utilizar los principales softwares de la Suite de Adobe.'},
    {id: 2, title: 'Creacion de posts mediáticos para redes sociales en Photoshop', descrip: 'Si lo tuyo es el marketing digital, este curso es para ti. Aquí aprenderás a crear diferentes publicaciones combinando técnicas que mezclan el uso de overlays, máscaras, fuentes e imágenes.'},
    {id: 3, title: 'Edición y composición avanzada con Premiere Pro y After Effects', descrip: 'El workflow perfecto entre dos software que permiten elevar tus posibilidades al momento de editar y componer una pieza audiovisual.'},
    {id: 4, title: 'Efectos visuales mediaticos en After Effects', descrip: 'Empieza a crear tu propio estilo de audiovisuales con After Effects, aprende a realizar distintos efectos que te permitirán crear una entidad en cada una de tus piezas audiovisuales.'},
  ]

  const courseSliderCurrent = () => {
    switch (courseSlider) {
      case 1:
        return 'one'
      case 2:
        return 'two'
      case 3:
        return 'three'
      case 4:
        return 'four'
      default:
        return 'one'
    }
  }

  /* NavBar */

  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className='app'>
      <NavBar activeSection={activeSection}/>
      <section className='intro' id='intro'>
        <div className="container">
          <div className="title">
            <div className="asset2"/>
            <div className="asset3"/>
            <Image className='asset' src={Asset1} width={340} height={'auto'} alt='Asset'/>
            <div className='asset4'>
              arte <br/> digital
            </div>
            <p>
              Bienvenido a la
            </p>
            <h1>ESCUELA</h1>
            <div className="sub">
              <h3>de</h3>
              <h2>ARTES VISUALES</h2>
            </div>
          </div>
          <div className="body">
            <p>
              Empieza o fortalece tu carrera artística <a>aquí.</a>
            </p>
            <p>
              Desarrolla con nosotros todas las habilidades que necesitas para empezar a plasmar tus ideas
              en visuales atractivos que todo el mundo podrá ver.
            </p>
          </div>
        </div>
      </section>
      <section className="skills" id='skills'>
        <div className="asset1">
          <Image src={Asset2} width={1392} height={'auto'} alt='Asset'/>
        </div>
        <div className="header">
          <div className='title'>
            <h2>
              Lo que <b>aprenderás</b>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className={`slider ${activeInfoSlider()}`}>
            <div className="slide-item" onClick={()=>setInfoSlider(1)}>
              <div className="info-container">
                <div className="text">
                  <h3>
                    Herramientas
                  </h3>
                  <p>
                    El principio del arte digital se basa en que esta construido de
                    la mano de la tecnologia por esto es muy importante conocer
                    las herramientas de software que nos permiten crear y
                    hacer realidad cada idea.
                  </p>
                  <p>
                    No necesitas tener un conocimiento previo puedes empezar de 0 y
                    con cada curso te podrás familiarizar mucho mas
                    con estas herramientas.
                  </p>
                </div>
                <div className="video-container">
                  
                </div>
              </div>
            </div>
            <div className="slide-item" onClick={()=>setInfoSlider(2)}>
              <div className="info-container">
                <div className="text">
                  <p>
                    Queremos ser directos: no existe una teoría explícita que
                    aplique para todo el arte por igual, es imposible intentar
                    comprender el arte por que cada persona tiene su propio concepto, 
                    esto lo hace tan especial. Por eso, todas las <b>habilidades y 
                    técnicas</b> que recibirás serán completamente prácticas y no teorícas. 
                  </p>
                  <p>
                    Queremos que desarrolles la capacidad de plasmar y crear cada una 
                    de tus ideas, sin importar cuán complejas sean.
                  </p>
                </div>
                <div className="video-container">

                </div>
              </div>
            </div>
            <div className="slide-item" onClick={()=>setInfoSlider(3)}>
              <div className="info-container">
                <div className="text">
                  <h3>
                    Técnicas
                  </h3>
                  <p>
                    Cada idea es diferente, ninguna se parece, y eso es lo que hace
                    que el arte sea tan especial. Por eso no intentamos venderte un
                    método rectilíneo que resolverá todos tus problemas al momento de
                    crear, porque no existe. 
                  </p>
                  <p>
                    Aquí aprenderás las técnicas que necesitas
                    entender para poder acercarte al resultado que ideaste en tu mente
                    y, junto a diferentes procesos creativos, desarrollarás la capacidad
                    que te permitirá conectar todas las habilidades y llegar a ese
                    resultado que solo tú tienes en tu mente.
                  </p>
                </div>
                <div className="video-container">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-controller">
          <div className={`controler ${infoSlider === 1 ? ('active'):('')}`} onClick={()=>setInfoSlider(1)}/>
          <div className={`controler ${infoSlider === 2 ? ('active'):('')}`} onClick={()=>setInfoSlider(2)}/>
          <div className={`controler ${infoSlider === 3 ? ('active'):('')}`} onClick={()=>setInfoSlider(3)}/>
        </div>
      </section>
      <div className="divider">
        <Image src={Asset3} alt='Asset'/>
        <div className="img-holder">
          <Image className='img' src={Asset4} width={1388} height={'auto'} alt='Asset'/>
        </div>
        <Image src={Asset5} alt='Asset'/>
      </div>
      <section className="courses" id='courses'>
        <div className="header">
          <div className='title'>
            <h2>
              <b>Cursos</b>
            </h2>
          </div>
        </div>
        <div className="descrip">
          <p>
            Encuentra una amplia variedad de conocimientos en los distintos
            cursos prácticos y talleres ya disponibles para que puedas empezar hoy mismo.
          </p>
        </div>
        <div className="slider-container">
          <div className={`slider ${courseSliderCurrent()}`}>
            {
              courses.map((course)=> {
                return(
                <div className="slider-item" key={course.id}>
                  <div className="video-holder">

                  </div>
                  <div className="info-holder">
                    <div className="info">
                      <h3>
                        {course.title}
                      </h3>
                      <p>
                        {course.descrip}
                      </p>
                    </div>
                    <div className="footer-btn">
                      <button>Empezar</button>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
        <div className="slider-controller">
          {
            courses.map((course)=>{
              return(
                <div key={course.id} className={`controler ${courseSlider === course.id ? ('active'):('')}`} onClick={()=>setCourseSlider(course.id)}/>
              )
            })
          }
        </div>
        <div className="asset2">
          <Image src={Asset6} width={1392} height={'auto'} alt='Asset'/>
        </div>
      </section>
      <section className="about" id='about'>
        <Image className='asset-ov' src={Asset8} width={482} height={'auto'} alt='Asset' id='ass-1'/>
        <Image className='asset-ov' src={Asset9} width={482} height={'auto'} alt='Asset' id='ass-2'/>
        <div className="container">
          <div className="title">
            <h2>
              Acerca de
            </h2>
          </div>
          <div className="profile">
            <div className="photo">
              <Image src={Asset7} width={65} height={'auto'} alt='Profile'/>
            </div>
            <div className="name">
              farid.ruano
            </div>
          </div>
          <div className="descrip">
            <p>
              Me considero un artista visual en constante aprendizaje.
              Llevo 5 años trabajando en la creación de contenido
              audiovisual para diferentes empresas. He logrado recopilar
              varias técnicas y estilos que me han permitido crear contenido
              original para cada empresa con la que he trabajado. Hoy
              en día, sigo trabajando en la creación audiovisual, pero
              tengo una inmensa pasión emergente por brindar una mano a 
              los nuevos artistas que se topan con la fuerte barrera de la
              educación, especialmente en Latinoamérica, donde es muy difícil
              tener la oportunidad de aprender habilidades que realmente te
              sirvan para hacer realidad cada una de nuestras ideas.
            </p>
          </div>
          <div className="links">
            <div className="social">
              <div className="name">
                Conoce más de mi trabajo
              </div>
              <div className="link">
                <a href="https://faridruano.com">
                  faridruano.com
                </a>
              </div>
            </div>
            <div className="social">
              <div className="name">
                Conoce más de mi vida
              </div>
              <div className="socials">
                <a href="https://x.com/farid__ruano" target='_blank'>
                  <Image src={Twitter} width={'auto'} height={20} alt='Twitter'/>
                </a>
                <a href="https://www.instagram.com/farid.ruano/" target='_blank'>
                  <Image src={Instagram} width={'auto'} height={20} alt='Instagram'/>
                </a>
                <a href="https://www.tiktok.com/@farid.ruano" target='_blank'>
                  <Image src={Tiktok} width={'auto'} height={20} alt='Tiktok'/>
                </a>
                <a href="https://www.facebook.com/withfarid" target='_blank'>
                  <Image src={Facebook} width={'auto'} height={20} alt='Facebook'/>
                </a>
                <a href="https://www.youtube.com/@farid_ruano" target='_blank'>
                  <Image src={Youtube} width={'auto'} height={20} alt='Youtube'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHome/>
    </div>
  )
}

export default Home
