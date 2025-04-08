'use client'
import React, { useState } from 'react'
import MuxPlayer from '@node_modules/@mux/mux-player-react';

const CourseWindow = ({ data, goToNextLesson }) => {

    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className='coursewindow-container'>
            <div className="content-wrap">
                <div className="content">
                    {
                        data.videoUrl && (
                            <div className={`video-wrap ${isPlaying ? 'video-playing' : ''}`}>
                                <MuxPlayer
                                    playbackId={data.videoUrl}
                                    loading="viewport"
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                    accent-color="#09e199" 
                                    className='video-player'
                                    poster={`https://image.mux.com/${data.videoUrl}/animated.webp?fit_mode=preserve&start=12.5&end=17.4`}
                                >
                                </MuxPlayer>
                            </div>
                        )
                    }
                    <div className="info-wrap">
                        <h2>
                            {data.title}
                        </h2>
                        {
                            data.content.map((parr, id) => (
                                <p key={id}>
                                    {parr}
                                </p>
                            ))
                        }
                    </div>
                    {
                        data.driveUrl && (
                            <div className="link-wrap">
                                <p>
                                    Descarga el material de esta leccion <a href={data.driveUrl} target='_blank'>aqui</a>
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="footer-wrap">
                <a onClick={() => goToNextLesson()}>
                    Pasar a la siguiente lección
                </a>
            </div>
        </div>
    )
}

export default CourseWindow