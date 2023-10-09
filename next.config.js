/** @type {import('next').NextConfig} */
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const withVideos = require('next-videos');

const nextConfig = {
    webpack: (config) => {
        config.plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(
                            __dirname,
                            'node_modules/flowbite/dist/flowbite.min.js'
                        ),
                        to: path.resolve(__dirname, 'public/flowbite'),
                    },
                    {
                        from: path.resolve(
                            __dirname,
                            'node_modules/flowbite/dist/flowbite.min.js.map'
                        ),
                        to: path.resolve(__dirname, 'public/flowbite'),
                    },
                ],
            })
        );

        return config;
    },
    reactStrictMode: true,
};

module.exports = withVideos(nextConfig);
