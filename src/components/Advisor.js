/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Advisor() {
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
                                Chị Nguyễn Hồng Trâm
                            </span>
                        </div>
                        <div className="bg-[#ee5b9f] w-[320px] mt-4 p-3 rounded-3xl shadow-2xl">
                            <span className="flex justify-center text-center font-[StingerFitTrial-Bold] text-[#ffffff] text-[20px]">
                                Giảng viên, Nghiên cứu sinh PhD ngành Tâm lý học
                            </span>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/images/adviser/Tram_Dec.jpg"
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
                                        Nghiên cứu sinh PhD Tâm lý học lâm sàng,
                                        Đại học Mississippi State (điểm quá
                                        trình GPA{' '}
                                        <span className="font-style">4.0</span>)
                                    </li>
                                    <li className="leading-[25px]">
                                        Thạc sĩ Khoa học Tâm lý, Đại học Công
                                        giáo Hoa Kỳ (GPA{' '}
                                        <span className="font-style">3.95</span>
                                        )
                                    </li>
                                    <li className="leading-[25px]">
                                        Sinh viên Xuất Sắc của năm{' '}
                                        <span className="font-style">
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
                            <div className="text-[18px] font-[StingerFitTrial-Bold]">
                                Quá trình công tác:
                                <ul className="text-[16px] font-[StingerFitTrial] ml-8">
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
