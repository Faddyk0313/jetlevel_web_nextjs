"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import styles from "./Breadcrumb.module.css";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments: string[] = pathname?.split("/").filter(Boolean) || [];

  // Rewrite mappings (including dynamic routes)
  const rewriteMapping: { [key: string]: string } = {
    "/jet-charter/us-canada": "/us-canada-chartered-cities",
    "/jet-charter/us-canada/:location":
      "/private-jet-charter-flights-to-:location",
    "/jet-charter/international": "/international-chartered-cities",
    "/jet-charter/popular-routes": "/popular-routes",
    "/jet-charter/popular-routes/:location": "/private-jet-charter-:location",
    "/jet-charter/empty-legs": "/empty-leg-flights",
    "/jet-charter/empty-legs/:location": "/empty-leg-flights-:location",
    "/charter-resources/private-jet-airports": "/usa-airport-directory",
    "/charter-resources/private-jet-airports/:location": "/:location",
  };

  // Helper function to apply rewrite rules based on dynamic segments
  const applyRewrite = (path: string, reverse: boolean = false): string => {
    for (const [dest, source] of Object.entries(rewriteMapping)) {
      const from = reverse ? dest : source;
      const to = reverse ? source : dest;

      const regex = new RegExp(
        "^" + from.replace(/:([^/]+)/g, "([^/]+)") + "$"
      );
      const match = path.match(regex);

      if (match) {
        let rewrittenPath = to;
        const dynamicParts = from.match(/:([^/]+)/g) || [];
        dynamicParts.forEach((part, index) => {
          const value = match[index + 1];
          rewrittenPath = rewrittenPath.replace(part, value);
        });
        return rewrittenPath;
      }
    }
    return path; // Return original path if no rewrite match is found
  };

  const getRewritePath = (segments: string[]) =>
    applyRewrite("/" + segments.join("/"));
  const getRewrittenHref = (actualPath: string) =>
    applyRewrite(actualPath, true);

  const href = getRewritePath(pathSegments.slice(0, 1));
  const segments = href.split("/").filter(Boolean); // Remove empty segments
  // Determine the base segment dynamically (e.g., 'jet-charter' or 'charter-resources')
  const baseSegment = segments[0]; // Get the first segment
  const hrefArray = segments.slice(1);

  return (
    <div
      className={`${styles.breadcrumbContainer} flex items-center w-fit gap-1 flex-wrap`}
    >
      <div className="rounded-lg">
        <Link
          href="/"
          className={`${styles.breadcrumbLink} rounded-l-md px-3 py-2 flex items-center h-10 text-xl gap-1 text-white z-10`}
        >
          <FiHome />
        </Link>
      </div>
      {hrefArray.map((segment, index) => {
        const hrefPath = `/${[
          baseSegment,
          ...hrefArray.slice(0, index + 1),
        ].join("/")}`;
        const rewrittenHref = getRewrittenHref(hrefPath);
        const segmentName = segment.replace(/-/g, " ").toUpperCase();
        const zIndex = 8 - index;

        return (
          <div key={`${hrefPath}-${index}`} className="flex items-center">
            <Link
              href={rewrittenHref}
              className={`${styles.breadcrumbLink} whitespace-nowrap py-2 pl-7 pr-3`}
              style={{ zIndex: zIndex }}
            >
              {segmentName}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
