/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        });

        return config;
    },
    env: {
        API_URL: "http://localhost:4000/",
    },
};

export default nextConfig;
