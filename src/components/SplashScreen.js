/* eslint-disable @next/next/no-img-element */
import React from 'react';
import IntroScreen from '@/assets/videos/hai-hoa-option-1.mp4';

export const SplashScreen = ({ ended }) => {
    return (
        <section className="flex justify-center items-center">
            <video muted autoPlay onEnded={ended}>
                <source src={IntroScreen} type="video/mp4" />
            </video>
        </section>
    );
};

export default SplashScreen;
