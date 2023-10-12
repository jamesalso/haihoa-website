/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Contact() {
    return (
        <section className="bg-[#3554A6]" id="ingredient">
            <div className="mx-auto max-w-screen-xl py-[80px] px-4">
                <div className="text-[#ffff] text-left text-[60px] leading-[70px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                    <div className="font-[StingerFitTrial-Bold]">
                        CONTACT US!
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 justify-center items-end lg:gap-24 px-18">
                    <div>
                        <div className="text-[#ffff]">
                            <div className="text-[20px] font-bold font-[CormorantGaramond]">
                                NUMBER
                            </div>
                            <div className="text-[18px] font-[CormorantGaramond-Light]">
                                +84 912716901 (Hoàng Trúc)
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="text-[20px] font-bold font-[CormorantGaramond] text-[#ffff]">
                                EMAIL
                            </div>
                            <a
                                href="mailto:haihoa.tuoisac@gmail.com"
                                target="_blank"
                                className="text-[#ffdd04] text-[18px] font-[CormorantGaramond-Light]"
                            >
                                haihoa.tuoisac@gmail.com
                            </a>
                        </div>
                        <div className="mt-3">
                            <div className="text-[20px] font-bold font-[CormorantGaramond] text-[#ffff]">
                                SOCIAL
                            </div>
                            <div className="mt-3 flex gap-5">
                                <a
                                    rel="noreferrer"
                                    href="https://www.facebook.com/haihoa.project"
                                    target="_blank"
                                >
                                    <img
                                        alt=""
                                        src="/images/contact/Facebook-Logo.svg"
                                        className="w-[50px] cursor-pointer"
                                    />
                                </a>
                                <a rel="noreferrer" href="/" target="_blank">
                                    <img
                                        alt=""
                                        src="/images/contact/Instagram-Logo.svg"
                                        className="w-[50px]"
                                    />
                                </a>
                                <a
                                    rel="noreferrer"
                                    href="https://www.tiktok.com/@haihoa.project?_t=8gSO3qyLFQo&_r=1"
                                    target="_blank"
                                >
                                    <img
                                        alt=""
                                        src="/images/contact/TikTok-Logo.png"
                                        className="w-[50px]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <img
                            alt=""
                            src="/images/contact/TikTok-QRcode.png"
                            className="w-[220px] animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
