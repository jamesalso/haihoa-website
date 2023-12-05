import { ToastContainer } from 'react-toastify';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '@/assets/styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    );
}
