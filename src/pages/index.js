import Head from 'next/head';

import Navigation from '@/components/Navigation';
import Banner from '@/components/Banner';
import Ingredient from '@/components/Ingredient';
import Uses from '@/components/Uses';
import UsingCollagen from '@/components/UsingCollagen';
import Certification from '@/components/Certification';
import Register from '@/components/Register';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <>
            <Head>
                <title>KOJA BEAUTY</title>
                <meta
                    name="description"
                    content="Nước uống giúp sáng da, ngừa lão hoá"
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
            <main>
                <Navigation />
                <Banner />
                <Ingredient />
                <Uses />
                <UsingCollagen />
                <Certification />
                <Register />
                <Contact />
            </main>
        </>
    );
}
