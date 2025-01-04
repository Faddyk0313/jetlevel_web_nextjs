"use client";

import React, { useEffect, useState } from 'react';
import CharterCity from './CharterCities';
import { NextIcon, Search } from '@/svg';
import Button from '@/components/Button';
import { createClient } from '@/lib/contento';
import Spinner from '@/components/Spinner';

interface UsCanadaPageProps {
  title?: string,
  subOption?:any;
}

export const metadata = {
  title: 'Explore Our Private Jet Charter Destinations in the US & Canada',
  description:
    'Discover top destinations across the US & Canada for private jet charters. Browse featured cities and inquire about a custom quote.',
};

type SubOptions = 
"us-canada"|
"international"|
"popular-routes"|
"empty-legs"

type City = {
  heading: string;
  link: string;
  img: string;
}

type Response = {
  nextPage: () => Promise<Response>;
  content: any[];
}

// Define the UsCanadaPage component
const UsCanadaPage: React.FC<UsCanadaPageProps> = ({ title ,subOption }) => {
  const [loader,setLoader] = useState(false);
  const [response, setResponse] = useState<Response | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCitites] = useState([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreData,setLoadMoreData] = useState(false);

  const citiesPerPage = 8;

  const handleSearch = () => {
    const filtered = cities?.filter((city: any) =>
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

  useEffect(()=>{
    if(!subOption) return
    fetchContent();
  },[subOption]);

  const fetchContent = async () => {
    try{
      setLoader(true);
      const client = createClient();
      const contentType = {
        "us-canada": "usa_city_pages",
        "international": "international_city_pages",
        "popular-routes": "route_pages",
        "empty-legs": "empty_leg_flights",
      }
      
      const limit = 16;
      let contentoResponse:any = await client.getContentByType({
        contentType:contentType[subOption as SubOptions],
        sortBy: "published_at",
        sortDirection: "desc",
        limit,
      });

      if(contentoResponse.content){
        const filterCities:any = contentoResponse.content.map((item: any) => {
          return {
            heading: item.fields.page_name?.text || item.name,
            link: `/${item.slug}`,
            img: `${title === "Routes" ? "/images/single routes img in directory.png" : item.fields.hero_image?.assets?.[0]?.asset?.url}` || '',
          };
        });
        setCitites(filterCities);
        setFilteredCities(filterCities);
        setResponse(contentoResponse);
        setLoader(false);
      }
    }catch (err) {
      setLoader(false);
      console.log('err',err);
    }
  }

  const loadMore = async () => {
    try{
      if (!response) {
        setLoadMoreData(false);
        return
      };
      setLoadMoreData(true);
  
      let ResponseData;
      if(response.nextPage){
        ResponseData = await response?.nextPage();
      }else{
        setLoadMoreData(false);
      }
      if(ResponseData){
        const updateResponse = ResponseData?.content?.map((item: any) => {
          return {
            heading: item.fields.page_name?.text || item.name, 
            link: `/${item.slug}`,
            img: `${title === "Routes" ? "/images/single routes img in directory.png" : item.fields.hero_image?.assets?.[0]?.asset?.url}` || '',
          };
        });
        setFilteredCities((prevCities) => [...prevCities,...updateResponse]);
        setResponse(ResponseData);
        setLoadMoreData(false);
      }
    }catch(err){
      setLoadMoreData(false);
      console.log('err',err);
    }
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

      <div className="shadow-[3px_4px_6px_3px_lightgray] flex justify-between rounded-full">
        <input
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Browse your dream destination"
          className="pl-[20px] font-bold focus:outline-transparent w-[96%] max-[700px]:w-[90%] rounded-[30px_0px_0px_30px]"
          type="text"
        />
        <div className="cursor-pointer bg-[#0071BA] w-[4%] max-[1000px]:w-[9%] max-[700px]:w-[10%] p-3 rounded-[0px_40px_40px_0px] text-center">
          <Search onClick={handleSearch} className='w-[80%] max-[900px]:w-[100%]' />
        </div>
      </div>

      <div className='min-h-[400px] relative'>
      {
        loader ?
        <Spinner style={{position:'absolute'}} />
        :
        <div>
         <section className="flex gap-x-4 flex-wrap gap-y-4 gap-x-[17px]">
          {
            currentCities.map((city:any,index: number) => (
            <CharterCity img={city.img} heading={city.heading} link={city.link} key={index} />
            ))
          }
        </section>
        
        <div className='relative'>
        {
          (loadMoreData && currentCities?.length > 0) ?
          <Spinner style={{position:'absolute'}} />
          :
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
                    } px-4 py-2 rounded-full flex items-center justify-center w-[43px] h-[43px]`}
                />
              </li>
            ))}
              {
                (displayedPages?.length > 0 && response) &&
                <NextIcon 
                  className='text-white cursor-pointer w-[43px] h-[43px] bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] px-4 py-2 my-2 rounded-full text-lg transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow' 
                  onClick={loadMore}
                />
              }
          </ul>
          </div>
        }
        </div>
        </div>
      }
      </div>
     
    </div>
  );
};

export default React.memo(UsCanadaPage);
