/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Ingredient() {
    return (
        <section className="bg-white" id="ingredient">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 px-18">
                    <div>
                        <div className="lg:py-32">
                            <h2 className="md:text-4xl md:text-left sm:text-center sm:text-4xl text-[#F45F97] font-semibold">
                                Thành Phần
                            </h2>
                            <div className="sm:flex sm:justify-center sm:items-center md:inline-block">
                                <img
                                    alt=""
                                    src="/images/ingredient/divider.png"
                                    className="w-48 ml-0.5 mt-1.5"
                                />
                            </div>

                            <div className="mt-4 text-gray-600">
                                Với 4 thành phần “ vàng” xuất hiện trong những
                                sản phẩm chăm sóc da, chống lão hoá đắt đỏ nhất
                                thế giới như Hyaluronic Acid , L-Arginine,
                                Betaine và Collagen , khi bộ tứ quyền năng này
                                hội tụ đầy đủ trong KOJA BEAUTIFUL đảm bảo đây
                                sẽ là sản phẩm không thể thiếu của bất cứ chị em
                                nào trong hành trình lưu giữ tuổi thanh xuân.
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg lg:order-last h-full md:w-[45vw] sm:w-[90vw]">
                        <img
                            alt=""
                            src="/images/ingredient/collagenImage.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
