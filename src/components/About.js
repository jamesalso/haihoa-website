/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function About() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat py-[220px]`}
            id="ingredient"
        >
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="grid grid-cols-2 justify-center items-center lg:gap-24 px-18">
                    <div>
                        <img
                            alt=""
                            src="/images/about/Behaihoa.png"
                            className="w-[477px] animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms]"
                        />
                    </div>

                    <div>
                        <div className="text-[#3255a8] text-left text-[70px] leading-[70px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <div className="font-[StingerFitTrial-Bold]">
                                XIN CHÀO!
                            </div>
                            <div className="font-[StingerFitTrial]">
                                Mình là haihoa
                            </div>
                        </div>

                        <div className="mt-10 text-[18px] font-[CormorantGaramond] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[3000ms]">
                            Giữa muôn vàn hoa, có một bông hoa đặc biệt -{' '}
                            <span className="text-[#ee5b9f]">‘bé haihoa’</span>.
                            Mình là hình ảnh của những người trẻ luôn cố gắng
                            giữ bầu không khí hòa thuận, để mọi người xung quanh
                            hạnh phúc và yêu mến.{' '}
                            <span className="text-[#ee5b9f]">‘bé haihoa’</span>{' '}
                            luôn mỉm cười, cho dù đôi khi nụ cười ấy chứa đựng
                            bao nỗi lòng.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
