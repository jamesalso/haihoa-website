/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Companion() {
    return (
        <section
            className={`bg-[url(/images/banner/haihoa-background.png)] bg-cover bg-center bg-no-repeat`}
            id="ingredient"
        >
            <div className="mx-auto max-w-screen-xl py-[200px] px-4">
                <div className="grid grid-cols-2 justify-center items-end lg:gap-24 px-18">
                    <div className="flex justify-center">
                        <img
                            alt=""
                            src="/images/companion/hem202.png"
                            className="w-[420px] animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms]"
                        />
                    </div>

                    <div>
                        <div className="text-left font-[StingerFitTrial-Bold] leading-[70px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <div className="text-[#ffdd04] text-[40px]">
                                ĐƠN VỊ ĐỒNG HÀNH!
                            </div>
                            <div className="mt-2 text-[#ee5b9f] text-[55px] leading-[60px]">
                                Phòng dịch vụ <br /> tư vấn tâm lý
                            </div>
                        </div>

                        <div className="mt-8 text-[20px] font-[CormorantGaramond] text-[#ffff] animate-fade-up animate-duration-1000 animate-delay-[3000ms]">
                            Hẻm 202 - Trang kết nối hỗ trợ tư vấn tâm lý dành{' '}
                            <br />
                            cho sinh viên Trường Đại Học FPT Hồ Chí Minh.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
