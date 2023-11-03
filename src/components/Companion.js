/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Companion() {
    return (
        <section
            className={`bg-[url(/images/banner/haihoa-background.png)] bg-cover bg-center bg-no-repeat`}
        >
            <div className="mx-auto lg:max-w-max sm:max-w-screen-xl lg:py-[200px] sm:py-[60px] lg:px-[20px] sm:px-6">
                <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col-reverse justify-center items-end lg:gap-14 px-18">
                    <div className="sm:mt-6 lg:flex lg:justify-center sm:mx-auto">
                        <img
                            alt=""
                            src="/images/companion/hem202.png"
                            className="lg:w-[380px] sm:w-[250px] animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms]"
                        />
                    </div>

                    <div>
                        <div className="font-[SVN-Brice-SemiBold] lg:leading-[70px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <div className="text-[#ffdd04] lg:text-[40px] sm:text-[25px] lg:text-left">
                                HỖ TRỢ TRUYỀN THÔNG
                            </div>
                            <div className="mt-2 text-[#ee5b9f] text-[34px] lg:leading-[60px] lg:pr-0 sm:pr-[60px]">
                                Phòng dịch vụ tư vấn tâm lý
                            </div>
                        </div>

                        <div className="mt-8 lg:text-[20px] sm:text-[18px] font-[CormorantGaramond] text-[#ffff] animate-fade-up animate-duration-1000 animate-delay-[3000ms] lg:w-[650px]">
                            Hẻm 202 - Trang kết nối hỗ trợ tư vấn tâm lý dành{' '}
                            cho sinh viên Trường Đại Học FPT Hồ Chí Minh.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
