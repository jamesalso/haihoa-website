/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Certification() {
    return (
        <section className="bg-white" id="certificate">
            <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 h-full lg:items-center lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl text-[#F45F97] font-semibold font-brandon text-center">
                        Chứng nhận chất lượng
                    </h2>
                    <div className="flex justify-center items-center">
                        <img
                            alt=""
                            src="/images/ingredient/divider.png"
                            className="w-48 ml-0.5 mt-1.5"
                        />
                    </div>
                    <div className="mt-5 text-lg text-center text-gray-600">
                        Sản phẩm được chứng nhận an toàn cho sức khỏe. Sản phẩm
                        được chứng nhận an toàn cho sức khỏe Sản phẩm được chứng
                        nhận an toàn cho sức khỏe
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-8 mt-6">
                    <blockquote>
                        <img
                            src="/images/certification/certificationImage1.png"
                            alt=""
                        />
                    </blockquote>

                    <blockquote>
                        <img
                            src="/images/certification/certificationImage2.png"
                            alt=""
                        />
                    </blockquote>

                    <blockquote>
                        <img
                            src="/images/certification/certificationImage3.png"
                            alt=""
                        />
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
