/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Adviser() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat py-[100px]`}
            id="certificate"
        >
            <div className="mx-auto max-w-screen-xl px-8 py-14 h-full">
                <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-8">
                    <div className="mt-16">
                        <div className="text-[#3255a8] text-left text-[55px] leading-[55px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <span className="font-[StingerFitTrial-Bold]">
                                Thầy Cliff McKinney
                            </span>
                        </div>
                        <div className="bg-[#ee5b9f] w-[320px] mt-4 p-3 rounded-3xl shadow-2xl">
                            <span className="flex justify-center font-[StingerFitTrial-Bold] text-[#ffffff] text-[20px]">
                                Giáo sư nghành Tâm lý học
                            </span>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/images/adviser/McKinney-teacher.jpg"
                            alt=""
                            className="border-radius-ellipse w-[400px] h-[550px]"
                        />
                    </div>

                    <div>
                        <div className="text-[#3255a8] text-left text-[32px] leading-[55px] w-auto">
                            <span className="font-[StingerFitTrial-Bold]">
                                CỐ VẤN CHUYÊN MÔN!
                            </span>
                        </div>
                        <div className="text-[#3255a8] text-left leading-[55px]">
                            <div className="text-[18px] font-[StingerFitTrial-Bold]">
                                Trình độ học vấn:
                                <ul className="text-[16px] font-[StingerFitTrial] ml-8">
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
                            <div className="text-[18px] font-[StingerFitTrial-Bold]">
                                Quá trình công tác:
                                <ul className="text-[16px] font-[StingerFitTrial] ml-8">
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
