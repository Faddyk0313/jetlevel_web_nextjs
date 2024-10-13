/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['jetlevel.com', 'fly.jetlevel.com'], // Add external domain here
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
      },
};

export default nextConfig;
