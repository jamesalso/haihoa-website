/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Adviser() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[60px]`}
            id="certificate"
        >
            <div className="mx-auto max-w-screen-xl lg:px-8 lg:py-14 sm:px-6">
                <div className="grid lg:grid-cols-3 sm:lg:grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
                    <div className="mt-16">
                        <div className="text-[#3255a8] lg:text-left sm:text-center lg:text-[55px] sm:text-[32px] leading-[55px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <span className="font-[StingerFitTrial-Bold]">
                                Thầy Cliff McKinney
                            </span>
                        </div>
                        <div className="flex sm:justify-center lg:justify-start">
                            <div className="bg-[#ee5b9f] lg:w-[320px] sm:w-[250px] lg:mt-4 sm:mt-2 p-3 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                                <span className="flex lg:justify-center sm:justify-start font-[StingerFitTrial-Bold] text-[#ffffff] lg:text-[20px] sm:text-[17px]">
                                    Giáo sư nghành Tâm lý học
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:mt-4 sm:flex sm:justify-center">
                        <img
                            src="/images/adviser/McKinney-teacher.jpg"
                            alt=""
                            className="border-radius-ellipse lg:w-[400px] lg:h-[550px] sm:h-[300px]"
                        />
                    </div>

                    <div className="sm:mt-5 lg:rounded-none sm:rounded-md lg:border-none sm:border-2 sm:border-black sm:bg-[#fff] lg:bg-inherit lg:p-0 sm:p-3 lg:shadow-none sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="text-[#3255a8] lg:text-left sm:text-center lg:text-[32px] sm:text-[24px] leading-[55px] w-auto lg:border-none sm:border-b-2 sm:border-black">
                            <span className="font-[StingerFitTrial-Bold]">
                                CỐ VẤN CHUYÊN MÔN!
                            </span>
                        </div>
                        <div className="text-[#3255a8] text-left leading-[55px]">
                            <div className="text-[20px] font-[StingerFitTrial-Bold]">
                                Trình độ học vấn:
                                <ul className="text-[18px] font-[StingerFitTrial] ml-8">
                                    <li className="leading-[25px]">
                                        Tiến sĩ Tâm lý học lâm sàng, Đại học
                                        Central Florida{' '}
                                        <span className="font-style">
                                            (2004 - 2009)
                                        </span>
                                    </li>
                                    <li className="leading-[25px]">
                                        Thạc sĩ Khoa học Tâm lý học lâm sàng,
                                        Đại học Central Florida{' '}
                                        <span className="font-style">
                                            (2002 - 2004)
                                        </span>
                                    </li>
                                    <li className="leading-[25px]">
                                        Tốt nghiệp thủ khoa khoa Tâm lý học tại
                                        Học viện Công nghệ Florida{' '}
                                        <span className="font-style">
                                            (2000 - 2002)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-[#3255a8] text-left leading-[55px]">
                            <div className="text-[20px] font-[StingerFitTrial-Bold]">
                                Quá trình công tác:
                                <ul className="text-[18px] font-[StingerFitTrial] ml-8">
                                    <li className="leading-[25px]">
                                        Giáo sư Tâm lý học, Đại học Mississippi{' '}
                                        <span className="font-style">
                                            (2021 - Hiện tại)
                                        </span>
                                    </li>
                                    <li className="leading-[25px]">
                                        Phó Giáo sư Tâm lý học, Đại học
                                        Mississippi{' '}
                                        <span className="font-style">
                                            (2015 - 2021)
                                        </span>
                                    </li>
                                    <li className="leading-[25px]">
                                        Trợ lý Giáo sư Tâm lý học, Đại học
                                        Mississippi{' '}
                                        <span className="font-style">
                                            (2009 - 2015)
                                        </span>
                                    </li>
                                    <li className="leading-[25px]">
                                        Giám đốc Phòng khám Tâm lý MSU, Đại học
                                        Mississippi{' '}
                                        <span className="font-style">
                                            (2012 - 2014, 2016 - 2017)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
