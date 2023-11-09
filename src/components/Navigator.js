/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import React from 'react';
import Slider from 'react-slick';
import HaihoaVideo from '@/assets/videos/haihoa-video.mp4';

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

export default function Menu() {
    const [navigator, setNavigator] = useState([]);
    const [loading, setLoading] = useState(true);

    const getNavigator = () => {
        setLoading(true);
        fetch('https://654d172577200d6ba859f9b5.mockapi.io/navigator', {
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
                setNavigator(result);
                // Do something with the list of tasks
            })
            .catch((error) => {
                // handle error
            });
    };

    useEffect(() => {
        getNavigator();
    }, []);

    useEffect(() => {
        if (navigator.length > 0) {
            setLoading(false);
        }
    }, [navigator]);

    return (
        <section
            className={`bg-[url(/images/banner/haihoa-background.png)] bg-cover bg-center bg-no-repeat`}
        >
            <div className="max-w-screen-xl lg:py-[200px] sm:py-[60px] lg:px-[20px] sm:px-6">
                <div className="lg:flex-col sm:flex sm:flex-col-reverse">
                    <div className="lg:mt-14 sm:mt-6 max-w-screen-xl lg:pl-[20px] lg:px-[35px]">
                        {!loading && navigator?.length > 0 && (
                            <Slider
                                {...settings}
                                className="lg:pl-[20px] sm:text-center"
                            >
                                {navigator.map((item) => (
                                    <div
                                        key={item?.id}
                                        className="!w-[280px] h-[280px] cursor-pointer"
                                    >
                                        <a href={`#${item?.link}`}>
                                            <div className="bg-[#ffffff] rounded-[40px] !w-[260px] h-[260px] mx-auto mt-[10px]">
                                                <div className="mt-12 flex flex-col gap-2">
                                                    <div
                                                        className="text-[#ee5b9f] text-center text-[22px] font-[SVN-Brice]"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item?.title,
                                                        }}
                                                    />
                                                    <div
                                                        className="text-[#2954ad] text-center font-[SVN-Brice]"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item?.description,
                                                        }}
                                                    />
                                                    <div className="flex justify-center">
                                                        <img
                                                            alt=""
                                                            src="/images/slide/342786_arrow_right_icon.svg"
                                                            className="!h-[55px] animate-fade-right animate-infinite animate-duration-[2000ms] animate-delay-[2000ms]"
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
                </div>
                <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col-reverse justify-center items-end lg:gap-14">
                    <div className="flex items-end gap-16">
                        <div>
                            <div className="mt-8 text-[12px] font-[SVN-Brice] text-[#ffdd04] leading-5">
                                <div>EMAIL: haihoa.tuoisac@gmail.com</div>
                                <div>PHONE: +84 9127169001 (Hoàng Trúc)</div>
                            </div>
                            <div className="mt-3">
                                <div className="mt-3 flex gap-6">
                                    <a
                                        rel="noreferrer"
                                        href="https://www.facebook.com/haihoa.project"
                                        target="_blank"
                                    >
                                        <img
                                            alt=""
                                            src="/images/contact/Facebook-Logo.svg"
                                            className="lg:w-[50px] sm:w-[35px]"
                                        />
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        href="/"
                                        target="_blank"
                                    >
                                        <img
                                            alt=""
                                            src="/images/contact/Instagram-Logo.svg"
                                            className="lg:w-[50px] sm:w-[35px]"
                                        />
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        href="https://www.tiktok.com/@haihoa.project?_t=8gSO3qyLFQo&_r=1"
                                        target="_blank"
                                    >
                                        <img
                                            alt=""
                                            src="/images/contact/TikTok-Logo.png"
                                            className="lg:w-[50px] sm:w-[35px]"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mt-8 text-[12px] font-[SVN-Brice] text-[#ffdd04] leading-5">
                                <div>Đơn vị đồng hành</div>
                            </div>
                            <img
                                alt=""
                                src="/images/companion/hem202.png"
                                className="mt-2 lg:w-[50px] sm:w-[35px]"
                            />
                        </div>
                    </div>
                    <div className="sm:mt-6 lg:flex lg:justify-center sm:mx-auto">
                        <video
                            playsInline
                            muted
                            autoPlay
                            controls
                            loop
                            preload="auto"
                            className="w-[300px] rounded-[50px]"
                        >
                            <source src={HaihoaVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
