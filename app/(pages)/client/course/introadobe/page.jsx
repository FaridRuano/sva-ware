'use client'

import MuxPlayer from '@node_modules/@mux/mux-player-react/'
import Image from '@node_modules/next/image'
import CheckBox from '@public/components/shared/CheckBox'
import { useState } from 'react'

const Course = () => {

  const [isPlaying, setIsPlaying] = useState(false)

  const [infoOption, setInfoOption] = useState(1)

  const displayInfo = () => {
    switch (infoOption) {
      case 1:
        return (

          <div className="info-display">
            <div className="course-descrip">
              <h2>¿De qué trata este Workshop?</h2>
              <p>
                En este workshop explorarás cuatro capítulos, cada uno dedicado a una herramienta creativa de la Suite de Adobe. Cada capítulo incluye ocho lecciones en las que aprenderás desde la interfaz y las herramientas básicas de cada software hasta la creación de efectos avanzados y composiciones creativas.
              </p>
              <br />
              <p>
                A lo largo del workshop, realizarás ejercicios prácticos diseñados para desarrollar tus habilidades y convertir tus ideas en proyectos concretos. No importa si estás comenzando o si ya tienes experiencia, el contenido está estructurado para que avances de manera progresiva, dominando cada técnica antes de pasar a la siguiente.
              </p>
              <br />
              <p>
                Además, te enseñaremos técnicas que te ahorrarán años de investigación, optimizando tu flujo de trabajo y permitiéndote trabajar de manera más eficiente. Descubrirás atajos, trucos profesionales y estrategias utilizadas por expertos para mejorar la calidad de tu trabajo y reducir el tiempo de producción.
              </p>
              <br />
              <p>
                Cada lección está diseñada para ser dinámica y enfocada en lo esencial, asegurando un aprendizaje sin rodeos ni pérdida de tiempo. Nuestro objetivo es que al finalizar el workshop no solo entiendas cómo funcionan las herramientas, sino que sepas aplicarlas de manera creativa y estratégica en tus propios proyectos.
              </p>
            </div>
            <div className="course-content">
              <h2>Contenido</h2>
              <div className="row">
                <div className="content-row">
                  <div className="tag">
                    Capítulos
                  </div>
                  <span>
                    4 en total {'('}6h{')'}.
                  </span>
                </div>
                <div className="content-row">
                  <div className="tag">
                    Lecciones
                  </div>
                  <span>
                    32 en total.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="content-row">
                  <div className="tag">
                    Ejercicios
                  </div>
                  <span>
                    25 en total {'('}apróx 6h{')'}.
                  </span>
                </div>
                <div className="content-row">
                  <div className="tag">
                    Material
                  </div>
                  <span>
                    Incluido para cada ejercicio.
                  </span>
                </div>
              </div>
            </div>
            <div className="course-requirements">
              <h2>
                Requisitos y materiales
              </h2>
              <ul>
                <li>
                  Necesitas acceso a una computadora.
                </li>
                <li>
                  Software Adobe con/sin licencia.
                </li>
                <li>
                  <b>No</b> necesitas ningún conocimiento previo.
                </li>
              </ul>
            </div>
          </div>
        )
      case 2:
        return (
          <div className='info-display'>
            <div className="course-chapter">
              <h2>
                Capítulo 1 - Photoshop
              </h2>
              <div className="chapter-lesson">
                <h3>
                  Lección 1 - Introducción <span>{'('}4m29s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 2 - Interfaz y herramientas <span>{'('}2m50s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 3 - Selección y máscaras <span>{'('}8m27s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 4 - Textos y Efectos <span>{'('}8m23s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 5 - Retoque Fotográfico <span>{'('}11m07s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 6 - Composición de Capas <span>{'('}12m19s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 7 - Efectos Avanzados <span>{'('}12m59s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 8 - Proyecto Final <span>{'('}13m13s{')'}</span>
                </h3>
              </div>
            </div>
            <div className="course-chapter">
              <h2>
                Capítulo 2 - Illustrator
              </h2>
              <div className="chapter-lesson">
                <h3>
                  Lección 1 - Introducción <span>{'('}2m44s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 2 - Interfaz y herramientas <span>{'('}4m54s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 3 - Vectores <span>{'('}17m41s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 4 - Ilustracion Digital <span>{'('}10m06s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 5 - Composición Gráfica <span>{'('}13m57s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 6 - Diseño Gráfico <span>{'('}18m36s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 7 - Diseño Gráfico pt. 2 <span>{'('}10m11s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 8 - Proyecto Final <span>{'('}15m41s{')'}</span>
                </h3>
              </div>
            </div>
            <div className="course-chapter">
              <h2>
                Capítulo 3 - Premiere Pro
              </h2>
              <div className="chapter-lesson">
                <h3>
                  Lección 1 - Introducción <span>{'('}4m19s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 2 - Interfaz y herramientas <span>{'('}5m24s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 3 - Efectos y Controles <span>{'('}6m15s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 4 - Textos, vectores y mascaras <span>{'('}6m26s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 5 - Subsecuencias y Color <span>{'('}6m43s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 6 - Composición de Audio <span>{'('}7m03s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 7 - Exportar, interpretación, estabilización, velocidad y subtítulos <span>{'('}5m34s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 8 - Proyecto Final <span>{'('}5m00s{')'}</span>
                </h3>
              </div>
            </div>
            <div className="course-chapter">
              <h2>
                Capítulo 4 - After Effects
              </h2>
              <div className="chapter-lesson">
                <h3>
                  Lección 1 - Introducción <span>{'('}2m32s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 2 - Interfaz y herramientas <span>{'('}10m13s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 3 - Keyframes <span>{'('}12m35s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 4 - Motion Graphics <span>{'('}30m52s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 5 - Efectos Visuales <span>{'('}24m42s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 6 - 3D Clásico <span>{'('}13m33s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 7 - Trackeo de Cámara <span>{'('}23m09s{')'}</span>
                </h3>
              </div>
              <div className="chapter-lesson">
                <h3>
                  Lección 8 - Proyecto Final <span>{'('}26m39s{')'}</span>
                </h3>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <>
          </>
        )

    }
  }


  return (
    <div className="client-content-container">
      <div className="course-tags">
        <div className="course-tag">
          WORKSHOP
        </div>
        <div className="course-tag purple">
          aftereffects
        </div>
        <div className="course-tag blue">
          photoshop
        </div>
        <div className="course-tag orange">
          illustrator
        </div>
        <div className="course-tag purple">
          premiere pro
        </div>
      </div>
      <div className="course-title">
        <h1>
          Introducción a la Suite de Adobe
        </h1>
      </div>
      <div className="course-shortdescrip">
        <p>
          Un workshop creado para todos aquellos que quieren aprender y/o aumentar sus
          conocimientos sobre las principales herramientas creativas de la Suite de Adobe
          {' ('} Photoshop, Illustrator, Premiere Pro, After Effects {')'}.
        </p>
      </div>
      <div className={`course-video ${isPlaying ? 'video-playing' : ''}`}>
        <MuxPlayer
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          minResolution='1080p'
          loading="viewport"
          poster='https://visualartsschool.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcover-introadobe.72c0d920.jpg&w=828&q=75'
          playbackId="6j6SgyATd3hKJY01w5J77U4D2GOHDkcrPBMWEetBcWjs"
          accent-color="#09e199"
        />
      </div>

      <div className="info-displayer">
        <div className={`option ${infoOption === 1 ? 'active' : ''}`} onClick={() => setInfoOption(1)}>
          Introducción
        </div>
        <div className={`option ${infoOption === 2 ? 'active' : ''}`} onClick={() => setInfoOption(2)}>
          Temario
        </div>
      </div>
      {
        displayInfo()
      }
      <div className="course-btns">
        <div className='option active'>
          Opciones de compra
        </div>
        <div className="btns-row">
          <div className="btn">
            <div className="btn-content">
              <div className="content-header">
                <h2>Compra directa</h2>
                <p>
                  Paga el precio completo por el workshop completo.
                </p>
              </div>
              <div className="content-body">
                <p>
                  ¿Qué incluye?
                </p>
                <ul>
                  <li>Acceso de por vida.</li>
                  <li>Material y recursos.</li>
                  <li>Actualizaciones futuras.</li>
                </ul>
                <div className="price">
                  <h2>$44.99</h2>
                  <p>
                    USD
                  </p>
                </div>
              </div>
              <div className="content-footer">
                <div className="pay-btn">
                  <h2>
                    Comprar
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="btn explore">
            <div className="btn-content">
              <div className="content-header">
                <h2>Únete a la escuela</h2>
                <p>
                  Suscríbete y forma parte de nuestra comunidad.
                </p>
              </div>
              <div className="content-body">
                <p>
                  ¿Qué incluye?
                </p>
                <ul>
                  <li>Acceso durante tu membresía.</li>
                  <li>Material y recursos.</li>
                  <li>Actualizaciones futuras.</li>
                  <li>Resuelve tus dudas con sesiones en vivo.</li>
                  <li>Recibe feedback de tu trabajo.</li>
                </ul>
              </div>
              <div className="content-footer">
                <div className="pay-btn">
                  <h2>
                    Explorar planes
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
