'use client'
import React, { useState } from 'react'
import MuxPlayer from '@node_modules/@mux/mux-player-react';
import Link from '@node_modules/next/link';

const CourseWindow = ({ data, goToNextLesson }) => {

    const [loading, setLoading] = useState(true)

    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayerReady = () => {
        setLoading(false)
    }

    return (
        <div className='coursewindow-container'>
            <div className="content-wrap">
                <div className="content">
                    {
                        data.videoUrl && (
                            <div className={`video-wrap ${isPlaying ? 'video-playing' : ''} ${loading ? 'video-loading' : ''}`}>
                                <MuxPlayer
                                    playbackId={data.videoUrl}
                                    loading="viewport"
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                    accent-color="#09e199"
                                    className='video-player'
                                    poster={data.posterUrl}
                                    onReady={handlePlayerReady}
                                    onLoadedData={handlePlayerReady}
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
                <Link href={{ pathname: goToNextLesson()}} className='next-lesson'>
                    Pasar a la siguiente lección
                </Link>
            </div>
        </div>
    )
}

export default CourseWindow