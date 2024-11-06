// app/components/Breadcrumb.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome } from "react-icons/fi";
import styles from './Breadcrumb.module.css';

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    const pathSegments: string[] = pathname?.split('/').filter(Boolean) || [];

    // Rewrite mappings (mirror rewrites in next.config.js)
    const rewriteMapping: { [key: string]: string; } = {
        '/jet-charter/us-canada/': '/us-canada-chartered-cities',
        '/jet-charter/us-canada/addison': '/us-canada-chartered-cities',
        '/jet-charter/international/': '/international-chartered-cities',
        '/jet-charter/popular-routes/': '/popular-routes',
        '/jet-charter/empty-legs/': '/empty-leg-flights-',
    };

    // Function to handle rewrite matching
    const getRewritePath = (segments: string[]) => {
        const path = '/' + segments.join('/'); // '/empty-leg-flights-:location'
        // Check if path matches any rewrites
        for (const [dest, source] of Object.entries(rewriteMapping)) {
            if (path.startsWith(source)) {
                // Replace destination with source in breadcrumb path
                return path.replace(source, dest);
            }
        }
        return path;
    };

    const isJetCharter = pathSegments[0] === 'jet-charter';
    const href = isJetCharter
        ? '/'
        : getRewritePath(pathSegments.slice(0, 1));
    const hrefArray = href.split("/").filter(Boolean);
    console.log("hrefArray", hrefArray)

    return (
        <div className={`${styles.breadcrumbContainer} flex flex-wrap items-center w-fit gap-1`}>
            {/* Home Icon and Link */}
            <div className="rounded-lg h-10">
                <Link href="/" className={`${styles.breadcrumbLink} h-10  rounded-l-md px-3 py-2 flex items-center text-xl gap-1 text-white z-10`}>
                    <FiHome />
                </Link>
            </div>
            {hrefArray.map((segment, index) => {
                // Build incremental href path
                const hrefPath = `/${hrefArray.slice(0, index + 1).join("/")}`;
                const linkHref = hrefPath === '/jet-charter' ? '/' : hrefPath;

                // Generate segment name by replacing "-" with space and capitalizing
                const segmentName = segment.replace(/-/g, ' ').toUpperCase();

                // Calculate z-index, with the first link getting the highest value
                const zIndex = 8 - index;
                console.log("hrefPath", hrefPath)
                
                return (
                    <div key={`${hrefPath}-${index}`} className="flex items-center h-10 ">
                        <Link
                            href={linkHref}
                            className={`${styles.breadcrumbLink} h-10  text-xs md:text-base py-2 pl-7 pr-3`}
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
