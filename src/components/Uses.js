/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Uses() {
    return (
        <section
            className="bg-gradient-to-l from-pink-50 to-pink-300"
            id="uses"
        >
            <div className="mx-auto max-w-screen-xl md:px-4 py-6 md:py-0 md:px-8">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl text-[#F45F97] font-semibold text-center md:pt-14 font-brandon">
                        Công Dụng
                    </h2>
                    <div className="flex justify-center items-center">
                        <img
                            alt=""
                            src="/images/ingredient/divider.png"
                            className="w-44 ml-0.5 mt-1.5"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-20 sm:mt-10 sm:px-0 md:px-20 md:flex md:flex-row sm:flex sm:flex-col-reverse">
                    <img
                        alt=""
                        src="/images/uses/usesCollagen.png"
                        className=""
                    />

                    <div className="lg:py-20">
                        <div>
                            <span className="flex items-center gap-x-2.5 ml-10">
                                <img alt="" src="/images/uses/bottle.png" />

                                <p className="md:text-4xl sm:text-3xl text-pink-500 font-semibold ml-2 font-brandon">
                                    CHAI MỖI NGÀY ĐỂ
                                </p>
                            </span>

                            <div className="px-4 mt-6">
                                <span className="flex items-center gap-x-2.5 py-2">
                                    <img alt="" src="/images/uses/icon1.png" />

                                    <p className="text-gray-600 text-xl">
                                        Da trắng hồng, căng mướt
                                    </p>
                                </span>

                                <span className="flex items-center gap-x-2.5 py-2">
                                    <img alt="" src="/images/uses/icon2.png" />

                                    <p className="text-gray-600 text-xl">
                                        Chống oxi hóa, giảm nếp nhăn trên da
                                    </p>
                                </span>

                                <span className="flex items-center gap-x-2.5 py-2">
                                    <img alt="" src="/images/uses/icon3.png" />

                                    <p className="text-gray-600 text-xl">
                                        Tóc chắc khỏe, giảm gãy rụng
                                    </p>
                                </span>

                                <span className="flex items-center gap-x-2.5 py-2">
                                    <img alt="" src="/images/uses/icon4.png" />

                                    <p className="text-gray-600 text-xl">
                                        Giảm thoái hóa xương khớp
                                    </p>
                                </span>

                                <span className="flex items-center gap-x-2.5 py-2">
                                    <img alt="" src="/images/uses/icon5.png" />

                                    <p className="text-gray-600 text-xl">
                                        Tăng cường hệ miễn dịch
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
