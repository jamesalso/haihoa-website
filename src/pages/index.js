import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import Navigation from '@/components/Navigation';
import Banner from '@/components/Banner';
import Introduce from '@/components/Introduce';
import About from '@/components/About';
import UsingCollagen from '@/components/UsingCollagen';
import Certification from '@/components/Certification';
import Register from '@/components/Register';
import Contact from '@/components/Contact';
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
    const [splashVisible, setSplashVisible] = useState(true);

    const handleIntro = () => {
        setSplashVisible(false);
    };

    return (
        <div>
            <Head>
                <title>Haihoa</title>
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
                    <UsingCollagen />
                    <Certification />
                    <Register />
                    <Contact />
                </main>
            )}
        </div>
    );
}
