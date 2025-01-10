import fs from "fs";
import path from "path";

const staticPages = [
    "/",
    "/empty-leg-flights/",
    "/request-a-quote/",
    "/faq/",
    "/cost-of-chartering-a-private-jet/",
    "/industry-specific-charter/corporate-jet-charter/",
    "/industry-specific-charter/film-industry-charter/",
    "/industry-specific-charter/government-air-charter/",
    "/industry-specific-charter/music-industry-charter/",
    "/charter-flights-cost-calculator/",
    "/private-jet-charter/",
    "/industry-specific-charter/sports-team-charter/",
    "/industry-specific-charter/oil-and-gas-industry-charter/",
    "/industry-specific-charter/events-private-jet-charter/",
    "/instant-private-jet-quotes/",
    "/aircraft-charters/",
    "/flight-tracker/",
    "/distance-calculator/",
    "/international-chartered-cities/",
    "/medical-flight-transport/",
    "/about-jet-level/",
    "/helicopter-charter-flight/",
    "/usa-airport-directory/",
    "/events/",
    "/industry-specific-charter/",
    "/our-team/",
    "/us-canada-chartered-cities/",
    "/popular-routes/",
    "/blog/",
    "/contact-us/",
    "/jetlevel-aviation-standard-terms-and-conditions/",
    "/privacy-policy/",
    "/group-charter-flight/",
];

const generateStaticSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
      .map(
          (page) => `
  <url>
    <loc>https://www.jetlevel.com${page}</loc>
  </url>`
      )
      .join("")}
</urlset>`;

    const outputPath = path.resolve(process.cwd(), "src/app/sitemap.xml");

    fs.mkdirSync(path.dirname(outputPath), { recursive: true }); // Ensure directory exists
    fs.writeFileSync(outputPath, sitemap, "utf8"); // Write the sitemap to the file
};

generateStaticSitemap();

// console.log("Static sitemap generated successfully!");
