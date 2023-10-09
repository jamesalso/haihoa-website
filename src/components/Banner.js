/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Banner() {
    return (
        <section
            className={`bg-[url(/images/banner/bannerCollagen.png)] bg-cover bg-center bg-no-repeat`}
        >
            <div className="sm:mt-10 px-4 py-32 sm:px-6 lg:h-screen lg:items-center lg:px-8"></div>
        </section>
    );
}
