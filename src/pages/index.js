import React, { useState } from 'react';

import Head from 'next/head';

import SplashScreen from '@/components/SplashScreen';
import Navigation from '@/components/Navigation';
import Banner from '@/components/Banner';
import Introduce from '@/components/Introduce';
import PeoplePleaser from '@/components/PeoplePleaser';
import About from '@/components/About';
import Adviser from '@/components/Adviser';
import Advisor from '@/components/Advisor';
import Story from '@/components/Story';
import Companion from '@/components/Companion';
import Contact from '@/components/Contact';
import Slide from '@/components/Slide';

export default function Home() {
    const [splashVisible, setSplashVisible] = useState(true);

    const handleIntro = () => {
        setSplashVisible(false);
    };

    return (
        <>
            <Head>
                <title>haihoa</title>
                <meta
                    name="description"
                    content="Dự án nâng cao nhận thức về hiện tượng 'people pleaser'"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    property="og:image"
                    content="/images/thumbnail/thumbnail-haihoa.png"
                />
                <link
                    rel="shortcut icon"
                    href="/images/slide/poster_preview_rev_1.png"
                    type="image/x-icon"
                />
            </Head>
            {splashVisible ? (
                <SplashScreen ended={handleIntro} />
            ) : (
                <main>
                    <Navigation />
                    <Banner />
                    <Introduce />
                    <PeoplePleaser />
                    <About />
                    <Adviser />
                    <Advisor />
                    <Story />
                    <Slide />
                    <Companion />
                    <Contact />
                </main>
            )}
        </>
    );
}
