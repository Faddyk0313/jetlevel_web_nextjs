"use client";

import React, { useState } from 'react';
import CharterCity from './CharterCities';
import { Search } from '@/svg';
import Button from '@/components/Button';

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
  const cities = content.map((item: any) => {
    return {
      heading: item.fields.page_name?.text || item.name,  // fallback to item.name if no fields.title
      link: `/${item.slug}`,
      img: `${title === "Routes" ? "/images/single routes img in directory.png" : item.fields.hero_image?.assets?.[0]?.asset?.url}` || '',
    };
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [currentPage, setCurrentPage] = useState(1);
  const citiesPerPage = 8;

  const handleSearch = () => {
    const filtered = cities.filter((city: any) =>
      city.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
    setCurrentPage(1);
  };

  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCities = filteredCities.slice(indexOfFirstCity, indexOfLastCity);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredCities && filteredCities.length / 8);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages = 3;
  let displayedPages = [];
  if (totalPages <= maxVisiblePages) {
    displayedPages = pageNumbers;
  } else {
    const middleIndex = Math.floor(maxVisiblePages / 2);
    const minDisplayIndex = Math.max(currentPage - middleIndex, 0);
    const maxDisplayIndex = Math.min(minDisplayIndex + maxVisiblePages - 1, totalPages - 1);

    if (minDisplayIndex > 0) {
      displayedPages.push(1);
      if (minDisplayIndex > 1) {
        displayedPages.push('...');
      }
    }

    for (let i = minDisplayIndex; i <= maxDisplayIndex; i++) {
      displayedPages.push(i + 1);
    }

    if (maxDisplayIndex < totalPages - 1) {
      if (maxDisplayIndex < totalPages - 3) {
        displayedPages.push('...');
      }
      displayedPages.push(totalPages);
    }
  }
  return (
    <div>
      <section>
        <h2 className="text-center max-[700px]:text-[30px]">
          Explore our featured cities or Inquire about a quote for travel to/from any destination worldwide.
        </h2>
        <div className="text-center pt-8">
          <Button
            text='Request a Quote'
            variant='primary'
          />
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



      <section className="flex gap-x-4 flex-wrap gap-y-4">
        {currentCities.map((city: any, index: number) => (
          <CharterCity img={city.img} heading={city.heading} link={city.link} key={index} />
        ))}
      </section>

      <div className="flex justify-center pt-8">
        <ul className="flex space-x-4">
          {displayedPages.map((number) => (
            <li key={number}>
              <Button
                text={number}
                onClick={() => handlePageChange(Number(number))}
                className={`${
                  currentPage === number
                    ? 'bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] text-white'
                    : 'bg-white text-[#0071BA]'
                  } px-4 py-2 rounded-full flex items-center justify-center  w-[43px] h-[43px]`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsCanadaPage;
