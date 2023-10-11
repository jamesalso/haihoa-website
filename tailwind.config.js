/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/**/*.html',
        './node_modules/flowbite/**/*.js',
        './node_modules/flowbite-react/**/*.js',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/assets/images/**/*.{jpg,png,svg}',
    ],
    theme: {
        extend: {
            fontFamily: {
                brandon: ['Iciel Brandon'],
                sfProText: ['SF PRO DISPLAY'],
            },
        },

        screens: {
            xs: '480px',
            sm: '390px',
            md: '896px',
            lg: '1024px',
            xl: '1280px',
        },
    },
    plugins: [require('flowbite/plugin'), require('tailwindcss-animated')],
};
