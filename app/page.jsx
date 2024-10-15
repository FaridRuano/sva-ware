import NavBar from '@public/components/public/NavBar'
import Asset1 from '@public/assets/imgs/home-asset.webp'
import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='app'>
      <NavBar/>
      <section className='intro'>
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
      <section className="skills">

      </section>
    </div>
  )
}

export default Home