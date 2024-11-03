/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      
      {
        source: '/us-canada-chartered-cities',
        destination: '/jet-charter/us-canada',
      },
      {
        source: '/private-jet-charter-flights-to-:location',
        destination: '/jet-charter/us-canada/:location',
      },
      {
        source: '/international-chartered-cities',
        destination: '/jet-charter/international',
      },
      {
        source: '/popular-routes',
        destination: '/jet-charter/popular-routes',
      },
      {
        source: '/empty-leg-flights',
        destination: '/jet-charter/empty-legs',
      },
      {
        source: '/empty-leg-flights-:location',
        destination: '/jet-charter/empty-legs/:location',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jetlevel.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fly.jetlevel.com',
        pathname: '**',
      },
    ],
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
