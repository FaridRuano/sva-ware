'use client'
import React from 'react'
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css'

const CourseWindow = ({data, goToNextLesson}) => {
  return (
    <div className='coursewindow-container'>
        <div className="content-wrap">
            <div className="content">
                {
                    data.videoUrl && (
                        <div className="video-wrap">
                            <CldVideoPlayer
                            width='1920'
                            height='1080'
                            src={data.videoUrl}
                            />
                        </div>
                    )
                }
                <div className="info-wrap">
                    <h2>
                        {data.title}
                    </h2>
                    {
                        data.content.map((parr, id)=>(
                            <p key={id}>
                                {parr}
                            </p>
                        ))
                    }
                </div>
                
            </div>
        </div>
        <div className="footer-wrap">
            <a onClick={()=>goToNextLesson()}>
                Pasar a la siguiente lección
            </a>
        </div>
    </div>
  )
}

export default CourseWindow