/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Introduce() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat py-[90px]`}
            id="ingredient"
        >
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="grid grid-cols-2 items-center lg:gap-24 px-18">
                    <div>
                        <div className="text-[#3255a8] text-left text-[70px] leading-[70px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <div className="font-[StingerFitTrial-Bold]">
                                HIỆN TƯỢNG
                            </div>
                            <div className="font-[StingerFitTrial]">
                                People Pleaser!
                            </div>
                        </div>

                        <div className="mt-10 text-[18px] font-[CormorantGaramond] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[3000ms]">
                            <span className="text-[#ee5b9f]">
                                People pleaser
                            </span>{' '}
                            là những người{' '}
                            <span className="text-[#ee5b9f]">
                                cố gắng thay đổi hành vi
                            </span>{' '}
                            của mình{' '}
                            <span className="text-[#ee5b9f]">
                                để làm hài lòng
                            </span>{' '}
                            người khác bằng cách làm những gì họ muốn, mà không
                            quan tâm đến những gì mình muốn hoặc cần. Họ thường
                            chỉ <span className="text-[#ee5b9f]">quan tâm</span>{' '}
                            đến việc{' '}
                            <span className="text-[#ee5b9f]">
                                đáp ứng nhu cầu của người khác
                            </span>{' '}
                            và <span className="text-[#ee5b9f]">khó khăn</span>{' '}
                            trong việc{' '}
                            <span className="text-[#ee5b9f]">
                                thể hiện quan điểm, cảm xúc
                            </span>{' '}
                            và{' '}
                            <span className="text-[#ee5b9f]">
                                nhu cầu của chính mình
                            </span>
                            . Họ thường không biết giới hạn của mình và không
                            dám từ chối khi được yêu cầu (Lcsw, 2020; Briggs et
                            al., 1980; Charlie, 2023)
                        </div>
                    </div>

                    <div>
                        <img
                            alt=""
                            src="/images/introduce/be-haihoa-introduce.png"
                            className="w-[477px] h-auto animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
