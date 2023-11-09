/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
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
    key: Math.random(),
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

export default function Comics() {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);

    const getComics = () => {
        setLoading(true);
        fetch('https://654d172577200d6ba859f9b5.mockapi.io/comics', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
            })
            .then((result) => {
                setComics(result);
                // Do something with the list of tasks
            })
            .catch((error) => {
                // handle error
            });
    };

    useEffect(() => {
        getComics();
    }, []);

    useEffect(() => {
        if (comics.length > 0) {
            setLoading(false);
        }
    }, [comics]);

    return (
        <section
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat lg:py-[80px] sm:py-[45px]`}
        >
            <div className="lg:flex-col sm:flex sm:flex-col-reverse">
                <div className="lg:mx-auto lg:mt-14 sm:mt-6 max-w-screen-xl lg:pl-[20px] lg:px-[35px]">
                    {!loading && comics.length > 0 && (
                        <Slider
                            {...settings}
                            className="lg:pl-[20px] sm:text-center"
                        >
                            {comics.map((comic) => (
                                <div
                                    key={comic?.id}
                                    className="bg-[#2954ad] rounded-[35px] !w-[280px] h-[280px] cursor-pointer"
                                >
                                    <a href={comic?.link} target="blank">
                                        <div className="bg-[#ffffff] rounded-[40px] !w-[260px] h-[260px] mx-auto mt-[10px]">
                                            <div className="pt-5 text-[#ee5b9f] text-center text-[11px] font-[StingerFitTrial]">
                                                haihoa ĐI ĐÂU ĐÓ?
                                            </div>
                                            <div className="mt-12 flex flex-col gap-2">
                                                <div
                                                    className="text-[#2954ad] text-center text-[22px] font-[SVN-Brice]"
                                                    dangerouslySetInnerHTML={{
                                                        __html: comic?.title,
                                                    }}
                                                />
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
                            ))}
                        </Slider>
                    )}
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
