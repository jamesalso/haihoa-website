/* eslint-disable @next/next/no-img-element */
import React from 'react';
import IntroScreen from '@/assets/videos/4k-blue-background.mp4';

export const SplashScreen = ({ ended }) => {
    return (
        <div className="bg-[#3255A8]">
            <video
                playsInline
                muted
                autoPlay
                preload="auto"
                onEnded={ended}
                className="h-[100vh]"
            >
                <source src={IntroScreen} type="video/mp4" />
            </video>
        </div>
    );
};

export default SplashScreen;
