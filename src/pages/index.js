import React, { useState } from 'react';

import Head from 'next/head';

import SplashScreen from '@/components/SplashScreen';
import Navigation from '@/components/Navigation';
import Banner from '@/components/Banner';
import Introduce from '@/components/Introduce';
import About from '@/components/About';
import Adviser from '@/components/Adviser';
import Advisor from '@/components/Advisor';
import Story from '@/components/Story';
import Companion from '@/components/Companion';
import Contact from '@/components/Contact';

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
                    content="../../public/images/banner/bannerCollagen.png"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {splashVisible ? (
                <SplashScreen ended={handleIntro} />
            ) : (
                <main>
                    <Navigation />
                    <Banner />
                    <Introduce />
                    <About />
                    <Adviser />
                    <Advisor />
                    <Story />
                    <Companion />
                    <Contact />
                </main>
            )}
        </>
    );
}
