import React, { useRef, useEffect } from 'react';
import './index.css';

const VideoBanner = ({ videoUrl = "https://res.cloudinary.com/dogdjv2al/video/upload/v1710965982/videos/pexels-max-fischer-5889074_2160p_rabtya.webm" }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleScroll = () => {
            if (isInViewport(video)) {
                video.play();
            } else {
                video.pause();
            }
        };

        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <video
            ref={videoRef}
            src={videoUrl}
            className='videoBanner__container'
            muted
            loop
        />
    );
};

export default VideoBanner;
