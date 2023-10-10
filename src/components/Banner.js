/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Banner() {
    return (
        <section className="bg-[#3255A8]" id="ingredient">
            <div className="flex justify-center items-center h-[90vh] px-[450px]">
                <div className="text-center italic text-[35px] text-[#ffffff] font-[cormorant-garamond]">
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
