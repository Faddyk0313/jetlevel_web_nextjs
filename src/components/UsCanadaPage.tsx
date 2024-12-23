"use client";

import React, { useState } from 'react';
import CharterCity from './CharterCities';
import { Search } from '@/svg';

const UsCanadaPage = () => {
  const usCities = [
    {
      heading: 'Addison Private Jet Charter',
      link: '/addison-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/07/Addison-TX-1.jpeg',
    },
    {
      heading: 'Albany Private Jet Charter',
      link: '/albany-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/08/Albany-NY.jpg',
    },
    {
      heading: 'Albuquerque Private Jet Charter',
      link: '/albuquerque-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Albuquerque-NM-jpg.webp',
    },
    {
      heading: 'Alexandria Private Jet Charter',
      link: '/alexandria-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Alexandria-Louisiana-jpg.webp',
    },
    {
      heading: 'Addison Private Jet Charter',
      link: '/addison-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/07/Addison-TX-1.jpeg',
    },
    {
      heading: 'Albany Private Jet Charter',
      link: '/albany-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/08/Albany-NY.jpg',
    },
    {
      heading: 'Albuquerque Private Jet Charter',
      link: '/albuquerque-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Albuquerque-NM-jpg.webp',
    },
    {
      heading: 'Alexandria Private Jet Charter',
      link: '/alexandria-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Alexandria-Louisiana-jpg.webp',
    },
    {
      heading: 'Addison Private Jet Charter',
      link: '/addison-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/07/Addison-TX-1.jpeg',
    },
    {
      heading: 'Albany Private Jet Charter',
      link: '/albany-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/08/Albany-NY.jpg',
    },
    {
      heading: 'Albuquerque Private Jet Charter',
      link: '/albuquerque-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Albuquerque-NM-jpg.webp',
    },
    {
      heading: 'Alexandria Private Jet Charter',
      link: '/alexandria-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Alexandria-Louisiana-jpg.webp',
    },
    {
      heading: 'Albany Private Jet Charter',
      link: '/albany-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/08/Albany-NY.jpg',
    },
    {
      heading: 'Albuquerque Private Jet Charter',
      link: '/albuquerque-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Albuquerque-NM-jpg.webp',
    },
    {
      heading: 'Alexandria Private Jet Charter',
      link: '/alexandria-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Alexandria-Louisiana-jpg.webp',
    },
    {
      heading: 'Albany Private Jet Charter',
      link: '/albany-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/08/Albany-NY.jpg',
    },
    {
      heading: 'Albuquerque Private Jet Charter',
      link: '/albuquerque-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Albuquerque-NM-jpg.webp',
    },
    {
      heading: 'Alexandria Private Jet Charter',
      link: '/alexandria-private-jet-charter',
      img: 'https://jetlevel.com/wp-content/uploads/2023/09/Alexandria-Louisiana-jpg.webp',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(usCities);
  const [currentPage, setCurrentPage] = useState(1);
  const citiesPerPage = 8; 

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setSearchTerm(searchQuery);

    const filtered = usCities.filter((city) =>
      city.heading.toLowerCase().includes(searchQuery.toLowerCase())
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

  const totalPages = Math.ceil(filteredCities.length / citiesPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <section>
        <h2 className="text-center max-[700px]:text-[30px]">
          Explore our featured cities or Inquire about a quote for travel to/from any destination worldwide.
        </h2>
        <div className="text-center pt-8">
          <button className="bg-[#0071BA] p-4 text-white">Request a Quote</button>
        </div>
      </section>

      <div className="shadow-[3px_4px_6px_3px_lightgray] flex justify-between rounded-full">
        <input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Browse your dream destination"
          className="pl-[20px] font-bold focus:outline-transparent w-[96%] max-[700px]:w-[90%] rounded-[30px_0px_0px_30px]"
          type="text"
        />
        <div className="bg-[#0071BA] w-[4%] max-[700px]:w-[10%] p-3 rounded-[0px_40px_40px_0px] text-center">
          <Search />
        </div>
      </div>

      <section className="flex gap-x-4 flex-wrap gap-y-4">
        {currentCities.map((city) => (
          <CharterCity img={city.img} heading={city.heading} link={city.link} key={city.link} />
        ))}
      </section>

      <div className="flex justify-center pt-8">
        <ul className="flex space-x-4">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => handlePageChange(number)}
                className={`${
                  currentPage === number
                    ? 'bg-[#0071BA] text-white'
                    : 'bg-white text-[#0071BA]'
                } px-4 py-2 rounded-full`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsCanadaPage;
