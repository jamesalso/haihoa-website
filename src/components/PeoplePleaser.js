/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function PeoplePleaser() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[100px] sm:py-[60px]`}
        >
            <div className="mx-auto lg:max-w-max sm:max-w-screen-xl lg:px-[150px] sm:px-4">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center lg:gap-44 lg:px-18 sm:px-3">
                    <div>
                        <div className="lg:text-left sm:text-center text-[#3255a8] font-[StingerFitTrial] lg:leading-[70px] sm:leading-[45px] animate-fade animate-duration-1000 animate-delay-[3000ms]">
                            <div className="lg:text-[55px] sm:text-[32px]">
                                People Pleaser
                            </div>
                            <div className="lg:w-[580px] font-[SVN-Brice-SemiBold] lg:text-[36px] sm:text-[22px]">
                                Không phải là một căn bệnh
                            </div>
                        </div>

                        <div className="mt-8 lg:text-[19px] sm:text-[17px] font-[CormorantGaramond] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[3000ms] lg:w-[630px]">
                            <span className="text-[#ee5b9f]">
                                Những người làm hài lòng người khác
                            </span>{' '}
                            muốn mọi người xung quanh họ được hạnh phúc và họ sẽ
                            làm mọi cách để giữ mọi người luôn vui vẻ. Họ thường{' '}
                            <span className="text-[#ee5b9f]">
                                không biết được giới hạn của mình
                            </span>{' '}
                            và đối với một số người{' '}
                            <span className="text-[#ee5b9f]">
                                việc nói đồng ý với những yêu cầu của người khác
                            </span>{' '}
                            dường như là một thói quen của họ{' '}
                            <span className="font-[CormorantGaramond-Bold]">
                                (𝘚𝘶𝘴𝘢𝘯 𝘕𝘦𝘸𝘮𝘢𝘯 𝘗𝘩.𝘋, 2020).
                            </span>
                        </div>

                        <div className="mt-6 lg:text-[19px] sm:text-[17px] font-[CormorantGaramond] text-[#3255a8] animate-fade-up animate-duration-1000 animate-delay-[3000ms] lg:w-[630px]">
                            Theo trang Medical News Today,{' '}
                            <span className="text-[#ee5b9f]">
                                “people pleaser” không phải là bệnh
                            </span>
                            , đó chỉ là{' '}
                            <span className="text-[#ee5b9f]">
                                hiện tượng tâm lý khi một người cố gắng điều
                                chỉnh hành vi của bản thân nhằm duy trì sự tương
                                tác tích cực với những người xung quanh
                            </span>
                            . Bởi vì đối với con người, được yêu mến và đánh giá
                            cao là mong muốn chung, nhất là trong những mối quan
                            hệ gắn bó với nhau.
                            <br /> Cho nên nhiều người đôi khi điều chỉnh hành
                            vi của mình để tạo ra sự hòa hợp và thân thiện trong
                            giao tiếp với mọi người{' '}
                            <span className="font-[CormorantGaramond-Bold]">
                                (𝘝𝘪𝘭𝘭𝘪𝘯𝘦𝘴, 𝘡., 2023).
                            </span>
                        </div>
                    </div>

                    <div className="flex lg:justify-end">
                        <img
                            alt=""
                            src="/images/peoplePleaser/People_Pleasur.png"
                            className="sm:mt-8 w-[514px] animate-fade-up animate-duration-[1000ms] animate-delay-[2500ms] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md border-2 border-black"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
