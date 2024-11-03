// app/components/Breadcrumb.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome } from "react-icons/fi";
import styles from './Breadcrumb.module.css';

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    const pathSegments: string[] = pathname?.split('/').filter(Boolean) || [];
    const startingZIndex = 9;

    // Rewrite mappings (mirror rewrites in next.config.js)
    const rewriteMapping: { [key: string]: string } = {
        '/jet-charter/us-canada': '/us-canada-chartered-cities',
        '/jet-charter/international': '/international-chartered-cities',
        '/jet-charter/popular-routes': '/popular-routes',
        '/jet-charter/empty-legs': '/empty-leg-flights',
    };

    // Function to handle rewrite matching
    const getRewritePath = (segments: string[]) => {
        const path = '/' + segments.join('/');
        
        // Check if path matches any rewrites
        for (const [dest, source] of Object.entries(rewriteMapping)) {
            if (path.startsWith(dest)) {
                // Replace destination with source in breadcrumb path
                return path.replace(dest, source);
            }
        }
        
        // Default to the actual path if no rewrite found
        return path;
    };

    return (
        <div className={`${styles.breadcrumbContainer} flex items-center w-fit gap-1`}>
            {/* Home Icon and Link */}
            <div className="rounded-lg">
                <Link href="/" className={`${styles.breadcrumbLink} rounded-l-md px-3 py-2 flex items-center h-10 text-xl gap-1 text-white z-10`}>
                    <FiHome />
                </Link>
            </div>

            {pathSegments.map((segment, index) => {
                const isJetCharter = segment === 'jet-charter';
                const currentSegments = isJetCharter 
                    ? [] 
                    : pathSegments.slice(0, index + 1);
                
                const href = isJetCharter 
                    ? '/' 
                    : getRewritePath(currentSegments);
                
                const segmentName = segment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
                const zIndex = startingZIndex - index;

                return (
                    <div key={href} className="flex items-center">
                        <Link
                            href={href}
                            className={`${styles.breadcrumbLink} py-2 pl-7 pr-3`}
                            style={{ zIndex }}
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
