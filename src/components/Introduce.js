/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Introduce() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[100px] sm:py-2`}
        >
            <div className="mx-auto lg:max-w-max sm:max-w-screen-xl lg:px-[150px] sm:px-6">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center lg:gap-18 px-18">
                    <div>
                        <div className="sm:mt-8 text-[#3255a8] lg:text-left sm:text-center lg:text-[60px] sm:text-[36px] lg:leading-[70px] sm:leading-[40px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <div className="font-[SVN-Brice-SemiBold]">
                                HIỆN TƯỢNG
                            </div>
                            <div className="font-[StingerFitTrial]">
                                People Pleaser!
                            </div>
                        </div>

                        <div className="mt-10 text-[19px] font-[CormorantGaramond] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[3000ms]">
                            <div>
                                <span className="text-[#ee5b9f]">
                                    People pleaser
                                </span>{' '}
                                là những người{' '}
                                <span className="text-[#ee5b9f]">
                                    cố gắng thay đổi hành vi của mình để làm
                                    người khác hài lòng
                                </span>{' '}
                                bằng cách làm những điều mà người khác mong muốn
                                mà{' '}
                                <span className="text-[#ee5b9f]">
                                    không quan tâm đến những gì bản thân muốn
                                    hoặc cần
                                </span>{' '}
                                <span className="font-[CormorantGaramond-Bold] italic">
                                    (Kaufman SB và Jauk E, 2020)
                                </span>
                            </div>
                            <div className="mt-6">
                                Một người luôn muốn làm hài lòng người khác là
                                người{' '}
                                <span className="text-[#ee5b9f]">
                                    quan tâm nhiều về cách người khác nghĩ về
                                    mình
                                </span>
                                , nó thường dẫn đến việc họ{' '}
                                <span className="text-[#ee5b9f]">
                                    muốn người khác để ý đến mình
                                </span>{' '}
                                và{' '}
                                <span className="text-[#ee5b9f]">
                                    chấp nhận những hành động của mình hơn
                                </span>{' '}
                                <span className="font-[CormorantGaramond-Bold] italic">
                                    (Cambridge Dictionary)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:flex sm:justify-center sm:items-center lg:flex lg:justify-end lg:lg:items-center">
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
