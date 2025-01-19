"use client";

import React, { useState } from 'react';
import CharterCity from './CharterCities';
import { Search } from '@/svg';
import Button from '@/components/Button';
import Link from 'next/link';

interface UsCanadaPageProps {
  title?: string,
  content: any; // Now expecting an array
}

export const metadata = {
  title: 'Explore Our Private Jet Charter Destinations in the US & Canada',
  description:
    'Discover top destinations across the US & Canada for private jet charters. Browse featured cities and inquire about a custom quote.',
};
// Define the UsCanadaPage component
const UsCanadaPage: React.FC<UsCanadaPageProps> = ({ title, content }) => {
  // console.log("------", content)

  // The content array is transformed into a cities array.
  const cities = content.map((item: any) => {
    return {
      heading: item.fields.page_name?.text || item.name,  // fallback to item.name if no fields.title
      link: `/${item.slug}`,
      img: `${title === "Routes" ? "/images/single routes img in directory.png" : item.fields.hero_image?.assets?.[0]?.asset?.url}` || '',
    };
  });
  // Stores the user’s search input.
  const [searchTerm, setSearchTerm] = useState('');

  // Tracks the cities that match the search criteria.
  const [filteredCities, setFilteredCities] = useState(cities);

  // Keeps track of the current page in pagination.
  const [currentPage, setCurrentPage] = useState(1);

  // Specifies the number of cities per page (set to 8).
  const citiesPerPage = 8;

  /*Filters the cities array to find cities whose heading matches the searchTerm (case-insensitive).
  Updates filteredCities and resets currentPage to 1.
  */
  const handleSearch = () => {
    const filtered = cities.filter((city: any) =>
      city.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
    setCurrentPage(1);
  };

  // indexOfLastCity: The index of the last city on the current page.
  const indexOfLastCity = currentPage * citiesPerPage;

  // indexOfFirstCity: The index of the first city on the current page.
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;

  // currentCities: The subset of filteredCities to display on the current page.
  const currentCities = filteredCities.slice(indexOfFirstCity, indexOfLastCity);

  // Updates currentPage to the clicked page number.
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // totalPages: Total number of pages based on filteredCities.
  const totalPages = Math.ceil(filteredCities && filteredCities.length / 8);

  // pageNumbers: Creates an array of page numbers. Example: If totalPages = 5, this generates [1, 2, 3, 4, 5].
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  /* maxVisiblePages limits the number of page numbers displayed at a time.
  Helps prevent overcrowding of the pagination UI when there are many pages.
  */
  const maxVisiblePages = 3;

  /* displayedPages:
    Limits the number of visible pages to maxVisiblePages (3 in this case).
    Adds ellipses (...) for skipped pages.
    Always includes the first and last pages.
   */

  let displayedPages = [];

  /*  Case 1: If the total number of pages (totalPages) is less than or equal to maxVisiblePages, display all page numbers. 
    Example: If totalPages = 2 and maxVisiblePages = 3, displayedPages = [1, 2].
  */
  if (totalPages <= maxVisiblePages) {
    displayedPages = pageNumbers;
  } 
  // Handling Large Numbers of Pages
  else {
    // Two pages before and two pages after the current page
    const startPage = Math.max(currentPage - 1, 1); // Start two pages before the current page, but not less than 1
    const endPage = Math.min(currentPage + 2, totalPages); // End two pages after the current page, but not more than total pages

    // Add the first page and ellipses if necessary
    if (startPage > 1) {
      displayedPages.push(1); // Always include the first page
      if (startPage > 2) {
        displayedPages.push('...'); // Add ellipses if there are skipped pages
      }
    }

    // Add the range of pages (two before, current, two after)
    for (let i = startPage; i <= endPage; i++) {
      displayedPages.push(i);
    }

    // Add the last page and ellipses if necessary
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        displayedPages.push('...'); // Add ellipses if there are skipped pages
      }
      displayedPages.push(totalPages); // Always include the last page
    }
  }

  return (
    <div>
      <section>
        <h2 className="text-center max-[700px]:text-[30px]">
          Explore our featured cities or Inquire about a quote for travel to/from any destination worldwide.
        </h2>
        <div className="text-center pt-8">
          <Link href="/request-a-quote">
            <Button
              text='Request a Quote'
              variant='primary'
            />
          </Link>

        </div>
      </section>

      <div className="shadow-[3px_4px_6px_3px_lightgray] flex justify-between rounded-full focus-within:outline focus-within:outline-blue">
        <input
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Browse your dream destination"
          className="pl-[20px] font-bold focus:outline-none w-[96%] max-[700px]:w-[90%] rounded-[30px_0px_0px_30px]"
          type="text"
        />
        <div className="cursor-pointer bg-[#0071BA] w-[4%] max-[700px]:w-[10%] p-3 rounded-[0px_40px_40px_0px] text-center">
          <Search onClick={handleSearch} />
        </div>
      </div>

      {/* Loops over currentCities and renders each city using the CharterCity component. */}
      <section className="flex gap-x-4 flex-wrap gap-y-4">
        {currentCities.map((city: any, index: number) => (
          <CharterCity img={city.img} heading={city.heading} link={city.link} key={index} />
        ))}
      </section>

      {/* Renders page numbers as buttons. Highlights the current page. */}
      <div className="flex justify-center pt-8">
        <ul className="flex space-x-4">
          {displayedPages.map((number, index) => (
            <li key={index}>
              {number === '...' ? (
                <span className="px-4 py-2 text-[#0071BA] rounded-full flex items-center justify-center pt-[14px]">
                  ...
                </span>
              ) : (
                <Button
                  text={number.toString()}
                  onClick={() => handlePageChange(Number(number))}
                  className={`${currentPage === number
                    ? 'bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] text-white'
                    : 'bg-white text-[#0071BA]'
                    } px-4 py-2 rounded-full flex items-center justify-center w-[43px] h-[43px]`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsCanadaPage;
