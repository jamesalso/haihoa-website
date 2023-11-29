/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Companion() {
    return (
        <section
            className={`bg-[url(/images/banner/haihoa-background.png)] bg-cover bg-center bg-no-repeat`}
            id="companion"
        >
            <div className="mx-auto max-w-screen-xl lg:py-[200px] sm:py-[60px] lg:px-[20px] sm:px-6">
                <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col-reverse justify-center items-center lg:gap-14 px-18">
                    <div className="sm:mt-6 lg:flex lg:justify-center sm:mx-auto">
                        <img
                            alt=""
                            src="/images/companion/the-little-bean.png"
                            className="lg:w-[280px] sm:w-[180px]"
                        />
                    </div>

                    <div>
                        <div className="font-[SVN-Brice-SemiBold] lg:leading-[40px]">
                            <div className="text-[#ffdd04] lg:text-[30px] sm:text-[26px] lg:text-left sm:text-center">
                                ĐƠN VỊ ĐỒNG HÀNH!
                            </div>
                            <div className="sm:mt-6 text-[#ee5b9f] lg:text-[28px] sm:text-[22px] lg:leading-[60px] lg:pr-0 sm:pr-[60px]">
                                The Little Bean Coffee
                            </div>
                        </div>

                        <div className="mt-3 lg:text-[20px] sm:text-[18px] font-[CormorantGaramond] text-[#ffff]">
                            Nơi bạn có thể là chính mình. <br />
                            Bean có Cà phê ngon - Trà đặc sản. Đặc biệt hơn nữa
                            là có rất nhiều cây.
                        </div>
                    </div>
                </div>
                <hr className="mt-10 lg:hidden sm:block" />
                <div className="lg:mt-5 sm:mt-8 lg:grid lg:grid-cols-2 sm:flex sm:flex-col-reverse justify-center items-end lg:gap-14 px-18">
                    <div className="sm:mt-6 lg:flex lg:justify-center sm:mx-auto">
                        <img
                            alt=""
                            src="/images/companion/hem202.png"
                            className="lg:w-[230px] sm:w-[150px]"
                        />
                    </div>

                    <div>
                        <div className="font-[SVN-Brice-SemiBold] lg:leading-[40px]">
                            <div className="lg:block sm:hidden text-[#ffdd04] lg:text-[30px] sm:text-[20px] lg:text-left">
                                ĐƠN VỊ ĐỒNG HÀNH!
                            </div>
                            <div className="text-[#ee5b9f] lg:text-[28px] sm:text-[22px] lg:leading-[60px] lg:pr-0 sm:pr-[60px]">
                                Phòng tư vấn tâm lý
                            </div>
                        </div>

                        <div className="mt-3 lg:text-[20px] sm:text-[18px] font-[CormorantGaramond] text-[#ffff]">
                            Hẻm 202 - Trang kết nối hỗ trợ tư vấn tâm lý dành{' '}
                            cho sinh viên Trường Đại Học FPT Hồ Chí Minh.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
