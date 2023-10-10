/* eslint-disable @next/next/no-img-element */
import React from 'react';
import IntroScreen from '@/assets/videos/4k-blue-background.mp4';

export const SplashScreen = ({ ended }) => {
    return (
        <div>
            <video muted autoPlay onEnded={ended}>
                <source src={IntroScreen} type="video/mp4" />
            </video>
        </div>
    );
};

export default SplashScreen;
