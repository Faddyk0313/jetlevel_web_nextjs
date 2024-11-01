// app/components/Breadcrumb.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome } from "react-icons/fi";
import styles from './Breadcrumb.module.css'; // Import the CSS module

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    const pathSegments: string[] = pathname?.split('/').filter(Boolean) || [];

    // Set the starting z-index
    const startingZIndex = 9;

    return (
        <div className={`${styles.breadcrumbContainer} flex items-center w-fit gap-1`}>
            {/* Home Icon and Link */}
            <div className="rounded-lg">
                <Link href="/" className={`${styles.breadcrumbLink} rounded-l-md px-3 py-2 flex items-center h-10 text-xl gap-1 text-white z-10`}>
                    <FiHome />
                </Link>
            </div>

            {pathSegments.map((segment, index) => {
                // Redirect `/jet-charter` to `/`
                const isJetCharter = segment === 'jet-charter';
                const href = isJetCharter
                    ? '/'  // Redirect path for `jet-charter`
                    : '/' + pathSegments.slice(0, index + 1).join('/');
                const segmentName = segment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

                // Calculate z-index by starting from `startingZIndex` and decreasing by `index`
                const zIndex = startingZIndex - index;

                return (
                    <div key={href} className="flex items-center">
                        <Link
                            href={href}
                            className={`${styles.breadcrumbLink} py-2 pl-7 pr-3`}
                            style={{ zIndex }} // Apply dynamic z-index
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
