import React, { useEffect, useRef } from 'react';
import './index.css';

const VideoBanner = ({ videoUrl = "https://res.cloudinary.com/dogdjv2al/video/upload/v1710965982/videos/pexels-max-fischer-5889074_2160p_rabtya.webm" }) => {
    const videoRef = useRef(null);

    const handlePlay = () => {
        const video = videoRef.current;
        if (video) { video.play() }
    };

    useEffect(() => {
        handlePlay()
    }, [])

    return (
        <video ref={videoRef} src={videoUrl} className='videoBanner__container' muted loop />
    );
};

export default VideoBanner;
