/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/private-jet-charter',
        destination: '/our-services/on-demand-charter',
      },
      {
        source: '/group-charter-flight',
        destination: '/our-services/group-charter',
      },
      {
        source: '/medical-flight-transport',
        destination: '/our-services/air-ambulance',
      },
      {
        source: '/Helicopter-Charter-Flight',
        destination: '/our-services/helicopter',
      },
      {
        source: '/us-canada-chartered-cities',
        destination: '/jet-charter/us-canada',
      },
      {
        source: '/private-jet-charter-flights-to-:location',
        destination: '/jet-charter/cities/:location',
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
        source: '/private-jet-charter-:location',
        destination: '/jet-charter/popular-routes/:location',
      },
      {
        source: '/empty-leg-flights',
        destination: '/jet-charter/empty-legs',
      },
      {
        source: '/empty-leg-flights-:location',
        destination: '/jet-charter/empty-legs/:location',
      },
      {
        source: '/usa-airport-directory',
        destination: '/charter-resources/private-jet-airports',
      },
      {
        source: '/aircraft-charters',
        destination: '/charter-resources/aircraft-types',
      },
      {
        source: '/charter-flights-cost-calculator',
        destination: '/charter-resources/cost-estimator',
      },
      {
        source: '/flight-tracker',
        destination: '/charter-resources/flight-tracker',
      },
      {
        source: '/distance-calculator',
        destination: '/charter-resources/distance-calculator',
      },
      {
        source: "/about-jet-level",
        destination: "/company/about-us",
      },
      {
        source: "/contact-us",
        destination: "/company/contact-us",
      },
      {
        source: '/blog',
        destination: '/company/blogs',
      },
      {
        source: '/private-jet-frequently-asked-questions',
        destination: '/faq',
      },
      {
        source: "/our-team",
        destination: "/company/our-team",
      },
      
      {
        source: '/:location',
        destination: '/charter-resources/private-jet-airports/:location',
      },
      {
        source: '/:location',
        destination: '/charter-resources/aircraft-types/:location',
      },
      {
        source: '/:location',
        destination: '/company/blogs/:location',
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
      {
        protocol: 'https',
        hostname: 'assets.contento.io', // Added this hostname
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
