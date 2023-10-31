/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Story() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[100px] sm:py-[60px]`}
            id="ingredient"
        >
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center lg:gap-44 lg:px-18 sm:px-3">
                    <div>
                        <div className="lg:text-left sm:text-center font-[StingerFitTrial-Bold] lg:leading-[70px] sm:leading-[45px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <div className="lg:text-[36px] sm:text-[28px] text-[#3255a8]">
                                haihoa đi đâu đó?
                            </div>
                            <div className="lg:text-[42px] sm:text-[32px] text-[#ee5b9f]">
                                HÀNH TRÌNH haihoa <br /> ĐI THẬT XA
                            </div>
                        </div>

                        <div className="lg:w-[570px] mt-8 lg:text-[18px] font-[StingerFitTrial] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[3000ms]">
                            <span className="text-[#ee5b9f]">bé haihoa</span> là
                            một bạn nhỏ luôn tươi cười, yêu hoà bình. Bé haihoa
                            đến từ{' '}
                            <span className="text-[#ee5b9f]">
                                xứ sở hàihòa,
                            </span>{' '}
                            nơi đây là một vùng đất vô cùng bình yên, người dân
                            chung sống yêu thương và hoà thuận. Vì vậy, niềm vui
                            nhỏ của haihoa là những người thân xung quanh sẽ
                            luôn được vui vẻ, hạnh phúc.
                        </div>

                        <div className="lg:w-[570px] mt-6 lg:text-[18px] font-[StingerFitTrial] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[3000ms]">
                            Ngoài yêu hòa bình, bé haihoa cũng là một bạn nhỏ
                            ham học hỏi, luôn muốn được bước ra ngoài và khám
                            phá thế giới li kì ngoài kia. Vậy là, một ngày nọ,
                            bé haihoa quyết định{' '}
                            <span className="text-[#ee5b9f]">
                                tạm xa xứ sở hàihòa.
                            </span>{' '}
                            Điểm đến đầu tiên của bé haihoa là một thành phố
                            nhộn nhịp ở phía Nam, và từ đây, haihoa dần biết
                            thêm thật nhiều điều mới mẻ thú vị…
                        </div>
                    </div>

                    <div className="flex lg:justify-end">
                        <img
                            alt=""
                            src="/images/haihoaStory/Behaihoa-Story.jpg"
                            className="sm:mt-8 w-[514px] animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md border-2 border-black"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
