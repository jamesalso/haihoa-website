/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

const GOOGLE_SHEET_SCRIPT =
    'https://script.google.com/macros/s/AKfycbyTt-DaxXZHYdpqC2OwCBHF2X1I1MeVfNkWZ5OTSypmKb67noPdBg2nlbsaLWaiFMY9Fg/exec';

export default function Uses() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const _handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch(GOOGLE_SHEET_SCRIPT, {
            method: 'POST',
            body: new FormData(formRef.current),
        })
            .then((res) => {
                toast.success(
                    'Xin cám ơn. Chúng tôi sẽ liên hệ lại sớm nhất!',
                    {
                        position: toast.POSITION.TOP_CENTER,
                    }
                );

                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="bg-gradient-to-l from-pink-50 to-pink-300">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-0 lg:px-0">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 sm:px-0 md:px-20">
                    <div className="lg:py-16">
                        <div className="mx-auto max-w-screen-xl px-2 sm:px-0 lg:px-10">
                            <div className="mx-auto max-w-lg rounded-3xl bg-gradient-to-b from-pink-400 to-pink-900 shadow-lg px-4 py-4">
                                <form
                                    ref={formRef}
                                    onSubmit={_handleSubmit}
                                    className="mb-0 rounded-2xl space-y-4 border-white border py-10 md:px-14 sm:px-4"
                                >
                                    <h1 className="text-center md:text-4xl font-bold text-white sm:text-3xl px-2 font-brandon">
                                        Đăng kí thông tin để đặt hàng ngay
                                    </h1>

                                    <div className="relative">
                                        <input
                                            name="name"
                                            type="text"
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Họ và Tên"
                                        />
                                    </div>

                                    <div className="relative">
                                        <input
                                            name="phone"
                                            type="text"
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Điện thoại liên hệ"
                                        />
                                    </div>

                                    <div className="relative">
                                        <input
                                            name="address"
                                            type="text"
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Địa chỉ"
                                        />
                                    </div>

                                    <div className="relative">
                                        <input
                                            name="amount"
                                            type="number"
                                            min={0}
                                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Số lượng đặt"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="text-white bg-gradient-to-br from-pink-300 to-pink-600 focus:outline-none rounded-full text-lg px-5 h-11 mt-5 transition hover:scale-110 hover:shadow-xl"
                                        >
                                            {loading ? (
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentFill"
                                                    />
                                                </svg>
                                            ) : (
                                                'ĐẶT HÀNG NGAY'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="lg:py-24">
                        <img alt="" src="/images/register/registerImage.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}
