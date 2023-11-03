/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function About() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[130px] sm:py-16`}
        >
            <div className="mx-auto max-w-screen-xl lg:px-6 sm:px-6">
                <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col-reverse justify-center items-center lg:gap-24 px-18">
                    <div>
                        <img
                            alt=""
                            src="/images/about/Behaihoa-Introduce.png"
                            className="sm:mt-10 lg:w-[477px] sm:w-[300px] animate-fade-up animate-duration-[1000ms] animate-delay-[5000ms]"
                        />
                    </div>

                    <div>
                        <div className="text-[#3255a8] lg:text-left sm:text-center lg:text-[60px] sm:text-[36px] lg:leading-[70px] sm:leading-[40px] animate-fade animate-duration-1000 animate-delay-[4000ms]">
                            <div className="font-[SVN-Brice-SemiBold]">
                                XIN CHÀO!
                            </div>
                            <div className="font-[StingerFitTrial]">
                                Mình là haihoa
                            </div>
                        </div>

                        <div className="mt-10 lg:text-[19px] font-[CormorantGaramond] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[4000ms] sm:text-[16px]">
                            Giữa muôn vàn hoa, có một bông hoa đặc biệt -{' '}
                            <span className="text-[#ee5b9f]">‘bé haihoa’</span>.
                            Mình là hình ảnh của những người trẻ luôn cố gắng
                            giữ bầu không khí hòa thuận, để mọi người xung quanh
                            hạnh phúc và yêu mến. ‘bé haihoa’ luôn mỉm cười, cho
                            dù đôi khi nụ cười ấy chứa đựng bao nỗi lòng.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
