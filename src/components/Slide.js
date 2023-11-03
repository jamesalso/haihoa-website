/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <div className="w-[45px]">
                <img
                    alt=""
                    src="/images/slide/9004839_arrow_direction_right_next_icon.svg"
                    className="mt-[-25px]"
                />
            </div>
        </button>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <div className="w-[45px]">
                <img
                    alt=""
                    src="/images/slide/9004860_arrow_direction_left_back_icon.svg"
                    className="mt-[-25px]"
                />
            </div>
        </button>
    );
};

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
    ],
};

export default function Slide() {
    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[80px] sm:py-[45px]`}
        >
            <div className="lg:flex-col sm:flex sm:flex-col-reverse">
                <div className="lg:mx-auto max-w-screen-xl sm:pl-[70px] lg:pl-[20px] lg:px-[35px]">
                    <Slider {...settings} className="mt-16 lg:pl-[50px]">
                        <div className="bg-[#2954ad] rounded-[35px] !w-[280px] h-[280px] cursor-pointer">
                            <a
                                href="https://www.facebook.com/61551521627995/posts/pfbid0SR35h4gkWccdrxDPVLpcj8aJUwWKPXu4Pa7CiFK2nSwXmBdp6dX67wLv8bJeJuWwl/?_rdc=1&_rdr"
                                target="blank"
                            >
                                <div className="bg-[#ffffff] rounded-[40px] !w-[260px] h-[260px] mx-auto mt-[10px]">
                                    <div className="pt-5 text-[#ee5b9f] text-center text-[11px] font-[StingerFitTrial]">
                                        haihoa ĐI ĐÂU ĐÓ?
                                    </div>
                                    <div className="mt-12 flex flex-col gap-2">
                                        <div className="text-[#2954ad] text-center text-[22px] font-[SVN-Brice]">
                                            Tập 1:
                                            <br /> Em là haihoa
                                        </div>
                                        <div className="flex justify-center">
                                            <img
                                                alt=""
                                                src="/images/slide/342786_arrow_right_icon.svg"
                                                className="!h-[55px] animate-fade-right animate-infinite animate-duration-[2000ms] animate-delay-[2000ms]"
                                            />
                                        </div>
                                        <div className="flex justify-center gap-1">
                                            <img
                                                alt=""
                                                src="/images/slide/317752_facebook_social media_social_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/5335781_camera_instagram_social media_instagram logo_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/8547041_tiktok_icon.svg"
                                                className="w-[11px]"
                                            />
                                            <div className="text-[#ee5b9f] text-center text-[10px] font-[StingerFitTrial]">
                                                haihoa.project
                                            </div>
                                            <img
                                                alt=""
                                                src="/images/slide/haihoa_preview_rev_1.png"
                                                className="w-[20px] h-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bg-[#2954ad] rounded-[35px] !w-[280px] h-[280px] cursor-pointer">
                            <a
                                href="https://www.facebook.com/61551521627995/posts/pfbid0SttJJk9HFDfNJVuwnep4dryJh8AwU8F3kzZiU1LQP892qaiAvYAE1a1h7EhjyFusl/?_rdc=1&_rdr"
                                target="blank"
                            >
                                <div className="bg-[#ffffff] rounded-[40px] !w-[260px] h-[260px] mx-auto mt-[10px]">
                                    <div className="pt-5 text-[#ee5b9f] text-center text-[11px] font-[StingerFitTrial]">
                                        haihoa ĐI ĐÂU ĐÓ?
                                    </div>
                                    <div className="mt-12 flex flex-col gap-2">
                                        <div className="text-[#2954ad] text-center text-[22px] font-[SVN-Brice]">
                                            Tập 2: <br />
                                            bé sống hài hoà
                                        </div>
                                        <div className="flex justify-center">
                                            <img
                                                alt=""
                                                src="/images/slide/342786_arrow_right_icon.svg"
                                                className="!h-[55px] animate-fade-right animate-infinite animate-duration-[2000ms] animate-delay-[2000ms]"
                                            />
                                        </div>
                                        <div className="flex justify-center gap-1">
                                            <img
                                                alt=""
                                                src="/images/slide/317752_facebook_social media_social_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/5335781_camera_instagram_social media_instagram logo_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/8547041_tiktok_icon.svg"
                                                className="w-[11px]"
                                            />
                                            <div className="text-[#ee5b9f] text-center text-[10px] font-[StingerFitTrial]">
                                                haihoa.project
                                            </div>
                                            <img
                                                alt=""
                                                src="/images/slide/haihoa_preview_rev_1.png"
                                                className="w-[20px] h-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bg-[#2954ad] rounded-[35px] !w-[280px] h-[280px] cursor-pointer">
                            <a
                                href="https://www.facebook.com/61551521627995/posts/pfbid0311nmHPsc6m6rWVuvhqUMRuyBKBx2MEyXpsSVXbxcHfQqTLJo4KCGeW22hqZaHuhDl/?_rdc=1&_rdr"
                                target="blank"
                            >
                                <div className="bg-[#ffffff] rounded-[40px] !w-[260px] h-[260px] mx-auto mt-[10px]">
                                    <div className="pt-5 text-[#ee5b9f] text-center text-[11px] font-[StingerFitTrial]">
                                        haihoa ĐI ĐÂU ĐÓ?
                                    </div>
                                    <div className="mt-12 flex flex-col gap-2">
                                        <div className="text-[#2954ad] text-center text-[22px] font-[SVN-Brice]">
                                            Tập 3:
                                            <br /> Sao cũng được
                                        </div>
                                        <div className="flex justify-center">
                                            <img
                                                alt=""
                                                src="/images/slide/342786_arrow_right_icon.svg"
                                                className="!h-[55px] animate-fade-right animate-infinite animate-duration-[2000ms] animate-delay-[2000ms]"
                                            />
                                        </div>
                                        <div className="flex justify-center gap-1">
                                            <img
                                                alt=""
                                                src="/images/slide/317752_facebook_social media_social_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/5335781_camera_instagram_social media_instagram logo_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/8547041_tiktok_icon.svg"
                                                className="w-[11px]"
                                            />
                                            <div className="text-[#ee5b9f] text-center text-[10px] font-[StingerFitTrial]">
                                                haihoa.project
                                            </div>
                                            <img
                                                alt=""
                                                src="/images/slide/haihoa_preview_rev_1.png"
                                                className="w-[20px] h-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bg-[#2954ad] rounded-[35px] !w-[280px] h-[280px] cursor-pointer">
                            <a
                                href="https://www.facebook.com/61551521627995/posts/pfbid02eGqj8F7Bx4g5rVHndGqsxXao9BK7Hxszw9vBUBGeUEjfLodzcx1c8onYgoRs37dwl/?_rdc=1&_rdr"
                                target="blank"
                            >
                                <div className="bg-[#ffffff] rounded-[40px] !w-[260px] h-[260px] mx-auto mt-[10px]">
                                    <div className="pt-5 text-[#ee5b9f] text-center text-[11px] font-[StingerFitTrial]">
                                        haihoa ĐI ĐÂU ĐÓ?
                                    </div>
                                    <div className="mt-12 flex flex-col gap-2">
                                        <div className="text-[#2954ad] text-center text-[22px] font-[SVN-Brice]">
                                            Tập 4:
                                            <br /> haihoa-pleaser
                                        </div>
                                        <div className="flex justify-center">
                                            <img
                                                alt=""
                                                src="/images/slide/342786_arrow_right_icon.svg"
                                                className="!h-[55px] animate-fade-right animate-infinite animate-duration-[2000ms] animate-delay-[2000ms]"
                                            />
                                        </div>
                                        <div className="flex justify-center gap-1">
                                            <img
                                                alt=""
                                                src="/images/slide/317752_facebook_social media_social_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/5335781_camera_instagram_social media_instagram logo_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/8547041_tiktok_icon.svg"
                                                className="w-[11px]"
                                            />
                                            <div className="text-[#ee5b9f] text-center text-[10px] font-[StingerFitTrial]">
                                                haihoa.project
                                            </div>
                                            <img
                                                alt=""
                                                src="/images/slide/haihoa_preview_rev_1.png"
                                                className="w-[20px] h-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bg-[#2954ad] rounded-[35px] !w-[280px] h-[280px] cursor-pointer">
                            <a
                                href="https://www.facebook.com/61551521627995/posts/pfbid02Dq5J7yVt1sPeU5BgsAJyLa9JBea5MUigUHmqtgAmgQRe8Mf7oRjxEsXcaNFaK1HJl/?_rdc=1&_rdr"
                                target="blank"
                            >
                                <div className="bg-[#ffffff] rounded-[40px] !w-[260px] h-[260px] mx-auto mt-[10px]">
                                    <div className="pt-5 text-[#ee5b9f] text-center text-[11px] font-[StingerFitTrial]">
                                        haihoa ĐI ĐÂU ĐÓ?
                                    </div>
                                    <div className="mt-12 flex flex-col gap-2">
                                        <div className="text-[#2954ad] text-center text-[22px] font-[SVN-Brice]">
                                            Tập 5:
                                            <br /> Bình Đẳng
                                        </div>
                                        <div className="flex justify-center">
                                            <img
                                                alt=""
                                                src="/images/slide/342786_arrow_right_icon.svg"
                                                className="!h-[55px] animate-fade-right animate-infinite animate-duration-[2000ms] animate-delay-[2000ms]"
                                            />
                                        </div>
                                        <div className="flex justify-center gap-1">
                                            <img
                                                alt=""
                                                src="/images/slide/317752_facebook_social media_social_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/5335781_camera_instagram_social media_instagram logo_icon.svg"
                                                className="w-[13px]"
                                            />
                                            <img
                                                alt=""
                                                src="/images/slide/8547041_tiktok_icon.svg"
                                                className="w-[11px]"
                                            />
                                            <div className="text-[#ee5b9f] text-center text-[10px] font-[StingerFitTrial]">
                                                haihoa.project
                                            </div>
                                            <img
                                                alt=""
                                                src="/images/slide/haihoa_preview_rev_1.png"
                                                className="w-[20px] h-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Slider>
                </div>

                <div className="mx-10 lg:mt-8 lg:flex items-center gap-6">
                    <img
                        alt=""
                        src="/images/slide/poster_preview_rev_1.png"
                        className="w-[300px] lg:animate-bounce lg:animate-infinite lg:animate-duration-[1500ms] lg:animate-delay-[2000ms]"
                    />
                    <img
                        alt=""
                        src="/images/slide/9165363_arrow_right_icon.svg"
                        className="mt-5 w-[40px] lg:block sm:hidden"
                    />
                    <div className="sm:mt-5 text-[#2954ad] text-center text-[18px] font-[SVN-Brice]">
                        Mời các bạn đón xem truyện tại page ‘haihoa’
                    </div>
                </div>
            </div>
            <div className="mt-7 flex justify-center items-center gap-2">
                <img
                    alt=""
                    src="/images/slide/9165417_swipe_left_icon.svg"
                    className="!w-[25px] lg:hidden sm:block"
                />
                <div className="text-[#ee5b9f] text-[14px] font-[SVN-Brice] lg:hidden sm:block">
                    Swipe
                </div>
            </div>
        </section>
    );
}
