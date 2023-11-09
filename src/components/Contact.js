/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Contact() {
    return (
        <section className="bg-[#3554A6]" id="contact">
            <div className="mx-auto max-w-screen-xl lg:py-[80px] sm:py-[40px] lg:px-4 sm:px-6">
                <div className="text-[#ffff] text-left lg:text-[60px] sm:text-[35px] leading-[70px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                    <div className="font-[StingerFitTrial-Bold]">
                        CONTACT US!
                    </div>
                </div>

                <div className="lg:mt-16 sm:mt-8 grid grid-cols-2 justify-center items-end lg:gap-24 lg:px-18">
                    <div>
                        <div className="text-[#ffff] sm:w-[200px]">
                            <div className="text-[20px] font-bold font-[CormorantGaramond]">
                                NUMBER
                            </div>
                            <a href="tel:+84 912716901">
                                <div className="text-[18px] font-[CormorantGaramond-Light]">
                                    +84 912716901 (Hoàng Trúc)
                                </div>
                            </a>
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
                                        className="lg:w-[50px] sm:w-[35px]"
                                    />
                                </a>
                                <a rel="noreferrer" href="/" target="_blank">
                                    <img
                                        alt=""
                                        src="/images/contact/Instagram-Logo.svg"
                                        className="lg:w-[50px] sm:w-[35px]"
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
                                        className="lg:w-[50px] sm:w-[35px]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <img
                            alt=""
                            src="/images/contact/QRCode.png"
                            className="lg:w-[180px] sm:w-[80px] animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms] border p-2 bg-[#ffff] rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
