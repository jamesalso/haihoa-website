/* eslint-disable @next/next/no-img-element */
import React from 'react';
import HaihoaFirstDay from '@/assets/videos/haihoa_ngay_23_fix.mp4';

export default function Recap() {
    return (
        <section
            className={`bg-[url(/images/banner/haihoa-background.png)] bg-cover bg-center bg-no-repeat`}
            id="companion"
        >
            <div className="mx-auto lg:px-10 lg:py-[100px] sm:py-[60px]">
                <div className="lg:rounded-[50px] lg:border-2 lg:border-black lg:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <video
                        playsInline
                        muted
                        autoPlay
                        controls
                        loop
                        preload="auto"
                        className="rounded-[50px]"
                    >
                        <source src={HaihoaFirstDay} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
}
