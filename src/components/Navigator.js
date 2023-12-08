/* eslint-disable @next/next/no-img-element */
import HaihoaVideo from '@/assets/videos/haihoa-video.mp4';
import { useEffect, useState } from 'react';
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

export default function Navigator() {
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
            <div className="mx-auto max-w-screen-xl lg:py-[60px] sm:py-[40px] lg:px-[20px] sm:px-6">
                <div className="sm:flex sm:justify-center">
                    <video
                        playsInline
                        muted
                        autoPlay
                        controls
                        loop
                        preload="auto"
                        className="lg:hidden sm:block w-[300px] rounded-[50px]"
                    >
                        <source src={HaihoaVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="sm:mt-12 max-w-screen-xl lg:pl-[20px] lg:px-[35px]">
                    {!loading && navigator?.length > 0 && (
                        <Slider
                            {...settings}
                            className="lg:pl-[20px] sm:text-center"
                        >
                            {navigator.map((item) => (
                                <div key={item?.id} className="cursor-pointer">
                                    <a href={`#${item?.link}`}>
                                        <div className="bg-[#ffffff] rounded-[40px] !w-[260px] h-[260px] mx-auto mt-[10px]">
                                            <div className="flex flex-col gap-2">
                                                <div
                                                    className="mt-4 text-[#ee5b9f] text-[15px] text-center font-[SVN-Brice] min-h-[72px] px-4"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.title,
                                                    }}
                                                />
                                                <div class="divider div-transparent"></div>
                                                <div
                                                    className="mt-3 text-[#2954ad] text-left text-[10px] font-[SVN-Brice] px-5 min-h-[90px]"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.description,
                                                    }}
                                                />
                                                <div className="flex justify-center">
                                                    <img
                                                        alt=""
                                                        src="/images/slide/7808886_click_cursor_pointer_arrow_icon.svg"
                                                        className="!h-[33px]"
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
                <hr className="lg:block sm:hidden line mt-12 mx-12" />
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

                <div className="lg:mt-10 sm:mt-14 lg:mx-auto lg:flex lg:justify-between lg:items-end lg:gap-14 lg:px-12">
                    <div className="lg:flex lg:items-end lg:gap-16">
                        <div>
                            <div className="mt-8 lg:text-[12px] sm:text-[10px] font-[SVN-Brice] text-[#ffdd04] leading-5">
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
                        <div className="sm:mt-8 sm:flex sm:justify-between lg:gap-10">
                            <div className="lg:flex lg:flex-col lg:items-center">
                                <div className="lg:text-[12px] sm:text-[10px] font-[SVN-Brice] text-[#ffdd04] leading-5">
                                    <div>Đơn vị đồng tổ chức</div>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        alt=""
                                        src="/images/companion/the-little-bean.png"
                                        className="mt-2 lg:w-[90px] lg:h-[35px] sm:w-[75px]"
                                    />
                                </div>
                            </div>
                            <div className="lg:flex lg:flex-col lg:items-center">
                                <div className="lg:text-[12px] sm:text-[10px] font-[SVN-Brice] text-[#ffdd04] leading-5">
                                    <div>Đơn vị đồng hành</div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <img
                                        alt=""
                                        src="/images/companion/hem202.png"
                                        className="mt-2 lg:w-[50px] sm:w-[35px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:rounded-[50px] lg:border-2 lg:border-black lg:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <video
                            playsInline
                            muted
                            autoPlay
                            controls
                            loop
                            preload="auto"
                            className="lg:block sm:hidden lg:w-[300px] sm:w-[250px] rounded-[50px]"
                        >
                            <source src={HaihoaVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
