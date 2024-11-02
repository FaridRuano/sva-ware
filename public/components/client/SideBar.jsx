'use client'
import ArrowUp from '@public/assets/icons/arrow-up.webp'
import ArrowDown from '@public/assets/icons/arrow-down.webp'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = ({ course, title, chapters, activeChapter, activeLesson }) => {
  
  const router = useRouter()

  const handleChapterLink = (id) => {
    return id * 100 + 1
  }



  return (
    <div className='sidebar-container'>
      <div className="sidebar">
        <div className="course-title">
          <span>
            {title}
          </span>
        </div>
        <div className="separator"/>
        <div className="items-list">
          {
            chapters.map((chapter, id)=> (
              <div key={id} className={parseInt(activeChapter) === chapter._id ? 'chapter-wrap active':'chapter-wrap'}>
                <div className="chapter-title" onClick={()=>router.push(`/client/${course}/${chapter._id}/${handleChapterLink(chapter._id)}`)}>
                  <span>
                    {chapter.title}
                  </span>
                  <div className="arrow-holder">
                    {
                      activeChapter === chapter._id ? (
                        <Image src={ArrowUp} width={10} height={'auto'} alt='Icon'/>
                      ):(
                        <Image src={ArrowDown} width={10} height={'auto'} alt='Icon'/>
                      )
                    }
                  </div>
                </div>
                <div className="lessons-wrap">
                  {
                    chapter.lessons.map((lesson, id)=>(
                      <div key={id} className={parseInt(activeLesson) === lesson._id ? "lesson active" : "lesson"} onClick={()=>router.push(`/client/${course}/${chapter._id}/${lesson._id}`)}>
                        <span>
                          {lesson.title}
                        </span>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
