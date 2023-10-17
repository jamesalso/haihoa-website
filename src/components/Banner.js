/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Banner() {
    return (
        <section
            className={`bg-[url(/images/banner/haihoa-background.png)] bg-cover bg-center bg-no-repeat`}
            id="ingredient"
        >
            <div className="flex justify-center items-center lg:h-[100vh] sm:py-[180px] lg:px-80 sm:px-6">
                <div className="text-center italic lg:text-[35px] sm:text-[22px] text-[#ffffff] font-[CormorantGaramond] animate-fade-up animate-duration-[1000ms] animate-delay-[1000ms]">
                    “ <span className="text-[#ffdd04]">haihoa</span> là một
                    chiến dịch truyền thông tăng nhận thức cho những người trẻ
                    về hiện tượng `
                    <span className="text-[#ee5b9f]">people pleaser</span>` -
                    những người thích làm hài lòng người khác và khuyến khích
                    tinh thần tôn trọng bản thân. ”
                </div>
            </div>
        </section>
    );
}
