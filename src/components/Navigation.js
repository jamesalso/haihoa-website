/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';

export default function Navigation() {
    useEffect(() => {
        const url = window.location.href.split('/');
        const target = url[url.length - 1].toLowerCase();
        const element = document.getElementById(target);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <nav className="bg-transparent fixed w-full z-50 sm:py-[20px]">
            <div className="flex items-center justify-center">
                <img
                    src="/images/navigation/haihoa-logo.png"
                    className="lg:w-[150px] sm:w-[100px] cursor-pointer animate-fade-down"
                    alt=""
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}
                />
            </div>
        </nav>
    );
}
