/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Contact() {
    return (
        <section className="bg-[#D24B84]" id="contact">
            <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 h-full lg:items-center lg:px-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
                    <div className="flex gap-x-4 items-center">
                        <img src="/images/contact/egaoLogo.png" alt="" />
                        <p className="text-white text-lg">
                            CÔNG TY TNHH THƯƠNG MẠI EGAO VIỆT NAM
                        </p>
                    </div>

                    <div className="md:px-10 sm:px-2 flex flex-col gap-y-2">
                        <span className="flex gap-x-4 items-center">
                            <img alt="" src="/images/contact/iconAddress.png" />
                            <p className="text-white">
                                19 Bà Triệu , Hoàn Kiếm , Hà Nội
                            </p>
                        </span>

                        <span className="flex gap-x-4 items-center">
                            <img alt="" src="/images/contact/iconPhone.png" />
                            <a
                                className="text-white cursor-pointer"
                                href="tel:19008958"
                            >
                                19008958
                            </a>
                        </span>

                        <span className="flex gap-x-4 items-center">
                            <img alt="" src="/images/contact/iconEmail.png" />
                            <a
                                className="text-white cursor-pointer"
                                href="mailto:sales@egao.vn"
                            >
                                sales@egao.vn
                            </a>
                        </span>
                    </div>

                    <div className="md:px-10 sm:px-2 flex flex-col gap-y-2">
                        <span className="flex gap-x-4 items-center">
                            <img
                                alt=""
                                src="/images/contact/iconFacebook.png"
                            />
                            <a
                                className="text-white cursor-pointer"
                                href="https://www.facebook.com/EgaoVN"
                                target="_blank"
                            >
                                www.fb.com/EgaoVN
                            </a>
                        </span>

                        <span className="flex gap-x-4 items-center">
                            <img
                                alt=""
                                src="/images/contact/iconFacebook.png"
                            />
                            <a
                                className="text-white cursor-pointer"
                                href="https://www.facebook.com/collagenkoja"
                                target="_blank"
                            >
                                www.fb.com/collagenkoja
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 p-4">
                <p className="md:text-sm sm:text-xs sm:px-4 text-white text-center">
                    Bản quyền thuộc về CÔNG TY TNHH THƯƠNG MẠI EGAO VIỆT NAM
                </p>
            </div>
        </section>
    );
}
