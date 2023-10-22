/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Introduce() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[160px] sm:py-2`}
            id="ingredient"
        >
            <div className="mx-auto max-w-screen-xl lg:px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center lg:gap-24 px-18">
                    <div>
                        <div className="sm:mt-8 text-[#3255a8] lg:text-left sm:text-center lg:text-[70px] sm:text-[36px] lg:leading-[70px] sm:leading-[40px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <div className="font-[SVN-Brice-SemiBold]">
                                HIỆN TƯỢNG
                            </div>
                            <div className="font-[StingerFitTrial]">
                                People Pleaser!
                            </div>
                        </div>

                        <div className="mt-10 text-[22px] font-[CormorantGaramond] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[3000ms]">
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
                            dám từ chối khi được yêu cầu{' '}
                            <span className="text-[21px]">
                                {' '}
                                (Lcsw, 2020; Briggs et al., 1980; Charlie, 2023)
                            </span>
                        </div>
                    </div>

                    <div className="sm:flex sm:justify-center sm:items-center">
                        <img
                            alt=""
                            src="/images/introduce/haihoa-introduce.png"
                            className="sm:mt-8 lg:w-[477px] h-auto sm:w-[300px] animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
