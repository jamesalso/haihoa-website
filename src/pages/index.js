import React, { useState } from 'react';

import Head from 'next/head';

import SplashScreen from '@/components/SplashScreen';
import Logo from '@/components/Logo';
import Banner from '@/components/Banner';
import Introduce from '@/components/Introduce';
import PeoplePleaser from '@/components/PeoplePleaser';
import About from '@/components/About';
import Adviser from '@/components/Adviser';
import Advisor from '@/components/Advisor';
import Story from '@/components/Story';
import Companion from '@/components/Companion';
import Contact from '@/components/Contact';
import Comics from '@/components/Comics';
import Navigator from '@/components/Navigator';
import Poster from '@/components/Poster';
import Event from '@/components/Event';
import Recap from '@/components/Recap';
import Activity from '@/components/Activity';

export default function Home() {
    const [splashVisible, setSplashVisible] = useState(true);

    const handleIntro = () => {
        setSplashVisible(false);
    };

    return (
        <>
            <Head>
                <title>haihoa</title>
                <meta property="og:title" content="haihoa" />
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
                    <Logo />
                    <Banner />
                    <Navigator />
                    <Introduce />
                    <PeoplePleaser />
                    <About />
                    <Adviser />
                    <Advisor />
                    <Story />
                    <Comics />
                    <Poster />
                    <Event />
                    <Activity />
                    <Recap />
                    <Companion />
                    <Contact />
                </main>
            )}
        </>
    );
}
