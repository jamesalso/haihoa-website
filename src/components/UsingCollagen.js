/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function UsingCollagen() {
    return (
        <section className="bg-[#FFF9FC]">
            <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 h-full lg:items-center lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl text-[#F45F97] font-semibold font-brandon text-center">
                        Cách sử dụng
                    </h2>
                    <div className="flex justify-center items-center">
                        <img
                            alt=""
                            src="/images/ingredient/divider.png"
                            className="w-48 ml-0.5 mt-1.5"
                        />
                    </div>
                    <div className="mt-5 text-lg text-center text-gray-600">
                        Duy trì đều đặn hàng ngày liệu trình 2-3 tháng để có
                        hiệu quả tốt nhất.
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8 mt-6">
                    <blockquote className="sm:p-2 md:p-6 sm:gap-y-8 flex flex-col items-center">
                        <img
                            src="/images/usingCollagen/usingImage1.png"
                            alt=""
                        />
                        <p className="text-center text-gray-600 text-lg">
                            Dung tích : 100ml*10 lọ/1 hộp
                        </p>
                    </blockquote>

                    <blockquote className="sm:p-2 md:p-6 sm:gap-y-8 flex flex-col items-center">
                        <img
                            src="/images/usingCollagen/usingImage2.png"
                            alt=""
                        />
                        <p className="text-center text-gray-600 text-lg">
                            Uống mỗi ngày 1 lọ
                        </p>
                    </blockquote>

                    <blockquote className="sm:p-2 md:p-6 sm:gap-y-8 flex flex-col items-center">
                        <img
                            src="/images/usingCollagen/usingImage3.png"
                            alt=""
                        />
                        <p className="text-center text-gray-600 text-lg">
                            Nên uống collagen vào buổi sáng hoặc buổi tối trước
                            khi đi ngủ
                        </p>
                    </blockquote>

                    <blockquote className="sm:p-2 md:p-6 sm:gap-y-8 flex flex-col items-center">
                        <img
                            src="/images/usingCollagen/usingImage4.png"
                            alt=""
                        />
                        <p className="text-center text-gray-600 text-lg">
                            Bảo quản ngăn mát tủ lạnh uống sẽ ngon hơn
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
