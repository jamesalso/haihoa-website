/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Advisor() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[80px]`}
            id="certificate"
        >
            <div className="mx-auto max-w-screen-xl lg:px-8 sm:px-4 lg:py-14">
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2 md:gap-8">
                    <div className="mt-16">
                        <div className="text-[#3255a8] lg:text-left sm:text-center lg:text-[55px] sm:text-[32px] lg:leading-[55px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <span className="font-[StingerFitTrial-Bold]">
                                Chị Nguyễn Hồng Trâm
                            </span>
                        </div>
                        <div className="flex sm:justify-center lg:justify-start sm:items-center">
                            <div className="bg-[#ee5b9f] lg:w-[320px] sm:w-[260px] mt-4 p-3 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                                <span className="flex text-center font-[StingerFitTrial-Bold] text-[#ffffff] lg:text-[20px] sm:text-[17px]">
                                    Giảng viên, Nghiên cứu sinh PhD ngành Tâm lý
                                    học
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:mt-4 sm:flex sm:justify-center">
                        <img
                            src="/images/adviser/Tram_Dec.jpg"
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
                                <ul className="text-[15px] font-[StingerFitTrial] ml-6">
                                    <li className="leading-[25px]">
                                        Nghiên cứu sinh PhD Tâm lý học lâm sàng,
                                        Đại học Mississippi State (điểm quá
                                        trình GPA{' '}
                                        <span className="font-[SVN-Brice]">
                                            4.0
                                        </span>
                                        )
                                    </li>
                                    <li className="leading-[25px]">
                                        Thạc sĩ Khoa học Tâm lý, Đại học Công
                                        giáo Hoa Kỳ (GPA{' '}
                                        <span className="font-[SVN-Brice]">
                                            3.95
                                        </span>
                                        )
                                    </li>
                                    <li className="leading-[25px]">
                                        Sinh viên Xuất Sắc của năm{' '}
                                        <span className="font-[SVN-Brice]">
                                            (2019)
                                        </span>{' '}
                                        - Khoa Tâm lý học, Đại học Liberty
                                    </li>
                                    <li className="leading-[25px]">
                                        Giải Nhất Hạng mục Nghiên cứu ứng dụng
                                        tại Hội nghị chuyên đề đại học Big South
                                        (BigSURS)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-[#3255a8] text-left leading-[55px]">
                            <div className="text-[20px] font-[StingerFitTrial-Bold]">
                                Quá trình công tác:
                                <ul className="text-[15px] font-[StingerFitTrial] ml-6">
                                    <li className="leading-[25px]">
                                        Giảng viên ngành Tâm lý học, Đại học
                                        Mississippi.
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
