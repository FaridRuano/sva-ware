'use client'
import ArrowUp from '@public/assets/icons/arrow-up.webp'
import ArrowDown from '@public/assets/icons/arrow-down.webp'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from '@node_modules/next/link';
import { useWindowSize } from '@libs/useWindowsSize';

const Sidebar = ({ course, title, chapters, activeChapter, activeLesson }) => {

  const router = useRouter()

  const handleChapterLink = (id) => {
    return id * 100 + 1
  }

  const findChapter = () => {
    const chapterFound = chapters.find(chapter => chapter._id === parseInt(activeChapter))

    if (!chapterFound) {
      console.warn(`No se encontró el capítulo con el id: ${id}`)
      return
    }

    return chapterFound
  }


  const findLesson = (id) => {
    const lessonFound = findChapter(activeChapter).lessons.find(lesson => lesson._id === parseInt(id))

    if (!lessonFound) {
      console.warn(`No se encontró la lección con el id: ${id}`)
      return
    }

    return lessonFound
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(current => !current)
  }

  const size = useWindowSize()

  if (size.width === undefined) {
    return (
      <>

      </>
    )
  }

  if (size.width > 800) {
    return (
      <div className='sidebar-container'>
        <div className="sidebar">
          <div className="course-title">
            <span>
              {title}
            </span>
          </div>
          <div className="separator" />
          <div className="items-list">
            {
              chapters.map((chapter, id) => (
                <div key={id} className={parseInt(activeChapter) === chapter._id ? 'chapter-wrap active' : 'chapter-wrap'}>
                  <div className="chapter-title" onClick={() => router.push(`/client/${course}/${chapter._id}/${handleChapterLink(chapter._id)}`)}>
                    <span>
                      {chapter.title}
                    </span>
                    <div className="arrow-holder">
                      {
                        parseInt(activeChapter) === chapter._id ? (
                          <Image src={ArrowUp} width={10} height={'auto'} alt='Icon' />
                        ) : (
                          <Image src={ArrowDown} width={10} height={'auto'} alt='Icon' />
                        )
                      }
                    </div>
                  </div>
                  <div className={parseInt(activeChapter) === chapter._id ? "lessons-wrap" : "lessons-wrap hide"}>
                    {
                      chapter.lessons.map((lesson, id) => (
                        <Link key={id} href={{ pathname: `/client/${course}/${chapter._id}/${lesson._id}` }}>
                          <div className={parseInt(activeLesson) === lesson._id ? " lesson active" : "lesson"}>
                            <span>
                              {lesson.title}
                            </span>
                          </div>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div >
    )
  } else {
    return (
      <>
        <div className='sidebar-container-mobile' onClick={() => toggleSidebar()}>
          <div className="sidebar-title">
            <span>
              {title}
            </span>
          </div>
          <div className="separator" />
          <div className="sidebar-current">
            <span className='chapter'>
              {findChapter().title}
            </span>
            <span className='lesson'>
              {findLesson(activeLesson).title}
            </span>
          </div>
        </div>
        {
          isOpen && (
            <div className="sidebar-container-full" onClick={() => toggleSidebar()}>
              <div className="content">
                <div className='sidebar-container full'>
                  <div className="sidebar">
                    <div className="course-title">
                      <span>
                        {title}
                      </span>
                    </div>
                    <div className="separator" />
                    <div className="items-list">
                      {
                        chapters.map((chapter, id) => (
                          <div key={id} className={parseInt(activeChapter) === chapter._id ? 'chapter-wrap active' : 'chapter-wrap'}>
                            <div className="chapter-title" onClick={() => router.push(`/client/${course}/${chapter._id}/${handleChapterLink(chapter._id)}`)}>
                              <span>
                                {chapter.title}
                              </span>
                              <div className="arrow-holder">
                                {
                                  parseInt(activeChapter) === chapter._id ? (
                                    <Image src={ArrowUp} width={10} height={'auto'} alt='Icon' />
                                  ) : (
                                    <Image src={ArrowDown} width={10} height={'auto'} alt='Icon' />
                                  )
                                }
                              </div>
                            </div>
                            <div className={parseInt(activeChapter) === chapter._id ? "lessons-wrap" : "lessons-wrap hide"}>
                              {
                                chapter.lessons.map((lesson, id) => (
                                  <Link key={id} href={{ pathname: `/client/${course}/${chapter._id}/${lesson._id}` }}>
                                    <div className={parseInt(activeLesson) === lesson._id ? " lesson active" : "lesson"}>
                                      <span>
                                        {lesson.title}
                                      </span>
                                    </div>
                                  </Link>
                                ))
                              }
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div >
              </div>
            </div>
          )
        }
      </>
    )
  }
}

export default Sidebar;
