/* eslint-disable @next/next/no-img-element */
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
    key: Math.random(),
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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

export default function Event() {
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
            className={`bg-[url(/images/introduce/haihoa-background-white.png)] bg-cover bg-center bg-no-repeat sm:py-[45px]`}
            id="event"
        >
            <div className="lg:flex-col sm:flex sm:flex-col">
                <div className="lg:mx-auto lg:mt-4 sm:mt-6 max-w-screen-xl lg:pl-[20px] lg:px-[35px]">
                    <Slider
                        {...settings}
                        className="lg:pl-[20px] sm:text-center"
                    >
                        <div className="lg:p-4 sm:p-2 border-[6px] border-[#ee5b9f] rounded-[35px] lg:!w-[900px] sm:!w-[400px]">
                            <div className="text-[#2954ad] text-center lg:text-[24px] sm:text-[20px] font-[SVN-Brice-SemiBold]">
                                EVENT: HÀI HÒA LAND
                            </div>
                            <hr className="border-[#ee5b9f] lg:border-2 sm:border border-dashed mx-auto mt-2" />
                            <div className="px-3 mt-3 text-[#ee5b9f] text-center lg:text-[18px] sm:text-[15px] font-[SVN-Brice-SemiBold]">
                                SỰ KIỆN TRẢI NGHIỆM “HÀI HOÀ LAND” - CÙNG bé
                                haihoa ĐẢO QUANH XỨ HÀI HOÀ
                            </div>
                            <div className="mx-2 text-[#2954ad] text-left">
                                <div className="lg:text-[18px] sm:text-[15px] font-[SVN-Brice-SemiBold]">
                                    Chào mừng bạn đến với Hài Hòa Land!
                                </div>
                                <div className="font-[SVN-Brice] text-[16px]">
                                    Chắc chắn bạn đã từng nghe về bé haihoa,
                                    người đến từ xứ sở Hài Hòa, nơi mà mọi người
                                    sống hài hòa và yêu thương. Chúng mình tự
                                    hào giới thiệu sự kiện trải nghiệm `Hài Hòa
                                    Land` - một chuỗi hoạt động tương tác và
                                    không gian trưng bày độc đáo, sẽ đưa bạn đến
                                    với cuộc phiêu lưu thú vị của bé haihoa và
                                    những bài học quý giá về việc được thể hiện
                                    được nhu cầu và mong muốn của bản thân nhưng
                                    vẫn duy trì được sự hài hòa, hòa thuận trong
                                    cuộc sống.
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                {/* <div className="mt-7 flex justify-center items-center gap-2">
                    <img
                        alt=""
                        src="/images/slide/9165417_swipe_left_icon.svg"
                        className="!w-[25px] lg:hidden sm:block"
                    />
                    <div className="text-[#ee5b9f] text-[14px] font-[SVN-Brice] lg:hidden sm:block">
                        Swipe
                    </div>
                </div> */}

                <div className="mx-10 sm:mt-5 flex lg:justify-start sm:justify-center">
                    <img
                        alt=""
                        src="/images/poster/Nuthantudo.png"
                        className="lg:w-[250px] sm:w-[180px]"
                    />
                </div>
            </div>
        </section>
    );
}
