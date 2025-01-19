/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout:300,
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
        source: '/boston-private-jet-charter-flights',
        destination: '/jet-charter/cities/boston-ma',
      },
      {
        source: '/charter-flights-los-angeles',
        destination: '/jet-charter/cities/los-angeles',
      },
      {
        source: '/private-jet-charter-miami',
        destination: '/jet-charter/cities/miami',
      },
      {
        source: '/private-jet-charter-van-nuys',
        destination: '/jet-charter/cities/van-nuys',
      },
      {
        source: '/private-jet-charter-teterboro',
        destination: '/jet-charter/cities/teterboro',
      },
      {
        source: '/private-jet-charter-nashville',
        destination: '/jet-charter/cities/nashville',
      },
      {
        source: '/private-jet-charter-dallas',
        destination: '/jet-charter/cities/dallas',
      },
      {
        source: '/private-jet-charter-chicago',
        destination: '/jet-charter/cities/chicago',
      },
      {
        source: '/private-jet-charter-naples',
        destination: '/jet-charter/cities/naples',
      },
      {
        source: '/private-jet-charter-to-las-vegas',
        destination: '/jet-charter/cities/las-vegas',
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
        source: '/cost-of-chartering-a-private-jet',
        destination: '/pricing',
      },
      {
        source: '/request-a-quote',
        destination: '/request-quote',
      },
      {
        source: '/instant-private-jet-quotes',
        destination: '/instant-qoute',
      },
      {
        source: '/jetlevel-aviation-standard-terms-and-conditions',
        destination: '/terms-of-use',
      },
      {
        source: '/industry-specific-charter',
        destination: '/industory-charter',
      },
      {
        source: '/industry-specific-charter/:location',
        destination: '/industory-charter/:location',
      },
      {
        source: '/pages-sitemap.xml',
        destination: '/sitemaps/page-sitemap/sitemap.xml',
      },
      {
        source: '/airports-sitemap.xml',
        destination: '/sitemaps/airport-sitemap/sitemap.xml',
      },
      {
        source: '/aircrafts-sitemap.xml',
        destination: '/sitemaps/aircraft-sitemap/sitemap.xml',
      },
      {
        source: '/blogs-sitemap.xml',
        destination: '/sitemaps/blogs-sitemap/sitemap.xml',
      },
      {
        source: '/empty_leg_flights-sitemap.xml',
        destination: '/sitemaps/empty_leg_flights-sitemap/sitemap.xml',
      },
      {
        source: '/events-sitemap.xml',
        destination: '/sitemaps/events-sitemap/sitemap.xml',
      },
      {
        source: '/routes-sitemap.xml',
        destination: '/sitemaps/routes-sitemap/sitemap.xml',
      },
      {
        source: '/international_cities-sitemap.xml',
        destination: '/sitemaps/international_cities-sitemap/sitemap.xml',
      },
      {
        source: '/usa_cities-sitemap.xml',
        destination: '/sitemaps/usa_cities-sitemap/sitemap.xml',
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
