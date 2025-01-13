"use client";

import React, { useState, Suspense } from 'react';
import { createClient } from '@/lib/contento';
import { ContentData } from '@gocontento/client';
import LeadForm from '@/components/LeadForm';
import BrandNames from '@/sections/BrandNames';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

function getExcerpt(content: string, length: number = 100): string {
    if (!content) return "";
    if (content.length <= length) return content;
    return content.substring(0, length) + "…";
}

const BlogDirectoryPage: React.FC<{ content: any; }> = ({ content }) => {
    // 1) Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Show 5 blogs per page

    // 2) Determine total pages & slice content for the current page
    const totalPages = Math.ceil(content.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBlogs = content.slice(indexOfFirstItem, indexOfLastItem);

    // 3) We'll show: 1 page behind, 3 pages ahead
    const pagesBehind = 1;
    const pagesAhead = 3;

    // Convert 1-based page to a zero-based index for easier math
    const currentIndex = currentPage - 1;
    const minPageIndex = 0;             // zero-based index for page 1
    const maxPageIndex = totalPages - 1; // zero-based index for last page

    // Calculate the window we want to display
    let startIndex = currentIndex - pagesBehind;
    let endIndex = currentIndex + pagesAhead;

    // Clamp the startIndex and endIndex so they don't exceed boundaries
    if (startIndex < minPageIndex) startIndex = minPageIndex;
    if (endIndex > maxPageIndex) endIndex = maxPageIndex;

    // Build the pagination array, inserting "..." where appropriate
    let displayedPages: (number | string)[] = [];

    // If our window doesn't start at the very first page, show page 1 + maybe "..."
    if (startIndex > minPageIndex) {
        displayedPages.push(1);
        if (startIndex > minPageIndex + 1) {
            displayedPages.push("...");
        }
    }

    // Pages in our window
    for (let i = startIndex; i <= endIndex; i++) {
        displayedPages.push(i + 1); // convert zero-based back to 1-based
    }

    // If our window doesn't end at the last page, show "..." + last page
    if (endIndex < maxPageIndex) {
        if (endIndex < maxPageIndex - 1) {
            displayedPages.push("...");
        }
        displayedPages.push(totalPages);
    }

    // 4) Handle page change on click
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            {/* Hero Section */}
            <div className="bg-[url('/hero_images/5.png')] bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
                <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white">
                    Level Up Blog
                </h1>
            </div>

            <BrandNames />

            <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto">
                <div className="min-w-full md:min-w-[72%]">
                    <Breadcrumb />

                    {/* 5) Render only the current page of blogs */}
                    {currentBlogs.map((blogContent: any, index: number) => (
                        <div
                            key={index}
                            className="flex flex-col my-9 text-start shadow-card_shadow_blog transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow_blog2"
                        >
                            {blogContent.slug && blogContent.fields.hero_image?.assets[0]?.asset?.url && (
                                <Link href={blogContent.slug}>
                                    <Image
                                        src={blogContent.fields.hero_image.assets[0].asset.url}
                                        width={blogContent.fields.hero_image.assets[0].asset.width}
                                        height={blogContent.fields.hero_image.assets[0].asset.height}
                                        alt={blogContent.fields.hero_image.assets[0].asset.name}
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                            )}

                            <div className="flex flex-col gap-3 px-11 pb-9">
                                {blogContent.slug && (
                                    <Link href={blogContent.slug}>
                                        <h2 className="text-2xl md:text-[40px] md:leading-[54px] box-border pt-9">
                                            {blogContent.fields.title.text}
                                        </h2>
                                    </Link>
                                )}

                                <div className="blogCard">
                                    <Markdown
                                        options={{
                                            overrides: {
                                                a: {
                                                    props: {
                                                        className: 'text-blue',
                                                    },
                                                },
                                                span: {
                                                    props: {
                                                        className: '!text-white !font-normal',
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        {getExcerpt(blogContent.fields.all_sections_content.text) as string}
                                    </Markdown>
                                </div>

                                {blogContent.slug && (
                                    <Link
                                        href={blogContent.slug}
                                        className="w-fit text-white px-5 py-2 rounded-full bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow"
                                    >
                                        Continue Reading
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* 6) Ellipsis Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center pt-8">
                            <ul className="flex space-x-4">
                                {displayedPages.map((number, index) => (
                                    <li key={index}>
                                        {number === '...' ? (
                                            // Render the ellipsis
                                            <span className="px-4 py-2 text-[#0071BA] rounded-full flex items-center justify-center pt-[14px]">
                                                ...
                                            </span>
                                        ) : (
                                            // Render the page button
                                            <button
                                                onClick={() => handlePageChange(Number(number))}
                                                className={`${currentPage === number
                                                        ? 'bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] text-white'
                                                        : 'bg-white text-[#0071BA]'
                                                    } px-4 py-2 rounded-full flex items-center justify-center w-[43px] h-[43px] transition-colors`}
                                            >
                                                {number}
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="min-w-[24%] max-w-fit mt-[76px] max-[650px]:mt-0 sticky top-[90px] h-fit">
                    <Suspense fallback={<div className="search-form__loader"></div>}>
                        <LeadForm widget={true} />
                    </Suspense>
                </div>
            </section>
        </>
    );
};

export default BlogDirectoryPage;
