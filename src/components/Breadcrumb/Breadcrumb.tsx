"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome } from "react-icons/fi";
import styles from './Breadcrumb.module.css';

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    const pathSegments: string[] = pathname?.split('/').filter(Boolean) || [];

    // Rewrite mappings (including dynamic routes)
    const rewriteMapping: { [key: string]: string } = {
        '/jet-charter/us-canada': '/us-canada-chartered-cities',
        '/jet-charter/us-canada/:location': '/private-jet-charter-flights-to-:location',
        '/jet-charter/international': '/international-chartered-cities',
        '/jet-charter/popular-routes': '/popular-routes',
        '/jet-charter/empty-legs': '/empty-leg-flights',
        '/jet-charter/empty-legs/:location': '/empty-leg-flights-:location',
    };

    // Helper function to apply rewrite rules based on dynamic segments
    // `reverse` flag indicates whether to map from actual path to rewrite path (normal) or reverse
    const applyRewrite = (path: string, reverse: boolean = false): string => {
        for (const [dest, source] of Object.entries(rewriteMapping)) {
            // Determine the mapping direction based on the reverse flag
            const from = reverse ? dest : source;
            const to = reverse ? source : dest;

            // Create regex pattern to match dynamic segments (e.g., ":location")
            const regex = new RegExp('^' + from.replace(/:([^/]+)/g, '([^/]+)') + '$');
            const match = path.match(regex);

            if (match) {
                // Replace dynamic segments with actual values from the matched URL
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

    // Get rewrite path for constructing breadcrumb segments
    const getRewritePath = (segments: string[]) => applyRewrite('/' + segments.join('/'));

    // Get the rewritten display URL for a given actual route path
    const getRewrittenHref = (actualPath: string) => applyRewrite(actualPath, true);

    const isJetCharter = pathSegments[0] === 'jet-charter';
    const href = isJetCharter ? '/' : getRewritePath(pathSegments.slice(0, 1));

    // Skip the first segment ("jet-charter") for rendering breadcrumbs
    const hrefArray = href.split("/").filter(Boolean).slice(1);

    return (
        <div className={`${styles.breadcrumbContainer} flex items-center w-fit gap-1`}>
            {/* Home icon linking to root */}
            <div className="rounded-lg">
                <Link href="/" className={`${styles.breadcrumbLink} rounded-l-md px-3 py-2 flex items-center h-10 text-xl gap-1 text-white z-10`}>
                    <FiHome />
                </Link>
            </div>
            {/* Map through each segment to generate breadcrumb links */}
            {hrefArray.map((segment, index) => {
                // Construct path up to the current segment for breadcrumb linking
                const hrefPath = `/${['jet-charter', ...hrefArray.slice(0, index + 1)].join("/")}`;

                // Get the rewritten URL (e.g., applying dynamic segments) for each breadcrumb
                const rewrittenHref = getRewrittenHref(hrefPath);

                // Format segment name for display (replacing hyphens and capitalizing)
                const segmentName = segment.replace(/-/g, ' ').toUpperCase();

                // z-index for overlapping visual styling, decreasing with each segment
                const zIndex = 8 - index;

                return (
                    <div key={`${hrefPath}-${index}`} className="flex items-center">
                        <Link
                            href={rewrittenHref}  // Use the rewritten URL here
                            className={`${styles.breadcrumbLink} py-2 pl-7 pr-3`}
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
