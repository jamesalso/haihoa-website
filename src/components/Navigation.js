/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

export default function Navigation() {
    const [toggle, setToggle] = useState(false);

    const _handleSCroll = (id) => {
        const section = document.getElementById(id);

        if (id && section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const url = window.location.href.split('/');
        const target = url[url.length - 1].toLowerCase();
        const element = document.getElementById(target);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <nav className="bg-[#D24B84] px-2 sm:px-4 py-2 dark:bg-pink-900 fixed w-full z-20 top-0 left-0 dark:border-pink-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto md:flex-row sm:flex-row-reverse">
                <div>
                    <img
                        src="/images/navigation/brandLogo.png"
                        className="h-4 sm:h-6 sm:mr-16 cursor-pointer"
                        alt=""
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                        }}
                    />
                </div>
                <div className="flex md:order-2">
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto"
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 mr-10 mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-base md:font-medium">
                            <li>
                                <a
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-white-400 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer font-brandon"
                                    onClick={() => _handleSCroll('ingredient')}
                                >
                                    THÀNH PHẦN
                                </a>
                            </li>

                            <li>
                                <a
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-white-400 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer font-brandon"
                                    onClick={() => _handleSCroll('uses')}
                                >
                                    CÔNG DỤNG
                                </a>
                            </li>

                            <li>
                                <a
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-white-400 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer font-brandon"
                                    onClick={() => _handleSCroll('certificate')}
                                >
                                    CHỨNG NHẬN
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button
                        type="button"
                        className="text-white bg-gradient-to-br from-pink-300 to-pink-600 focus:outline-none text-sm px-5 text-center mr-3 my-2 rounded hidden md:inline-block transition hover:scale-110 hover:shadow-xl"
                        onClick={() => _handleSCroll('contact')}
                    >
                        ĐẶT HÀNG NGAY
                    </button>
                </div>

                <button
                    onClick={() => setToggle(!toggle)}
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill={toggle ? 'currentColo' : 'white'}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                {toggle && (
                    <div className="md:hidden w-full">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    onClick={() => {
                                        setToggle(!toggle);
                                        _handleSCroll('ingredient');
                                    }}
                                    className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 font-brandon"
                                    aria-current="page"
                                >
                                    THÀNH PHẦN
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => {
                                        setToggle(!toggle);
                                        _handleSCroll('uses');
                                    }}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-brandon"
                                >
                                    CÔNG DỤNG
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => {
                                        setToggle(!toggle);
                                        _handleSCroll('certificate');
                                    }}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-brandon"
                                >
                                    CHỨNG NHẬN
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
