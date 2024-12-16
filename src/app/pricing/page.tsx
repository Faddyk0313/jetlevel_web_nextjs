import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Events from '@/components/Events'
import Table from '@/components/Table'
import TopCharteredCities from '@/components/TopCharteredCities'
import AvailableAircrafts from '@/sections/AvailableAircrafts'
import BrandNames from '@/sections/BrandNames'
import CompanyOverview from '@/sections/CompanyOverview'
import Hero from '@/sections/Hero'
import SmartTravelTools from '@/sections/SmartTravelTools'
import WhatOurClientsSay from '@/sections/WhatOurClientsSay'
import Image from 'next/image'
import React from 'react'

const EventsPage = () => {
  const data=[
    {
      route:{
        arrival:'Chicago',
        departure:'Orlando'
      },
      price:'$13,800',
      type:'LIGHT JET',
      seats:'6',
      time:'2h12'
    },
    {
      route:{
        arrival:'San Francisco',
        departure:'Miami'
      },
      price:'$46,500',
      type:'SUPER MIDSIZE JET',
      seats:'8',
      time:'4h55'
    },
    {
      route:{
        arrival:'Teterboro',
        departure:'Van Nuys'
      },
      price:'$38,900',
      type:'MID SIZE JET',
      seats:'7',
      time:'4h54'
    },
    {
      route:{
        arrival:'Miami',
        departure:'Nassau'
      },
      price:'$8,400',
      type:'VERY LIGHT JET',
      seats:'5',
      time:'0h50'
    },
    {
      route:{
        arrival:'New York',
        departure:'West Palm Beach'
      },
      price:'$22,500',
      type:'HEAVY JET',
      seats:'10',
      time:'1h58'
    },
    {
      route:{
        arrival:'Seattle',
        departure:'Las Vegas'
      },
      price:'$15,600',
      type:'LIGHT JET',
      seats:'8',
      time:'1h39'
    },
    {
      route:{
        arrival:'Chicago',
        departure:'Fort Lauderdale'
      },
      price:'$16,250',
      type:'LIGHT JET',
      seats:'6',
      time:'2h36'
    },
    {
      route:{
        arrival:'Dallas',
        departure:'Las Vegas'
      },
      price:'$16,750',
      type:'MID SIZE JET',
      seats:'7',
      time:'2h06'
    },
    {
      route:{
        arrival:'Austin',
        departure:'Washington D.C.'
      },
      price:'$16,200',
      type:'VERY LIGHT JET',
      seats:'5',
      time:'3h17'
    },
    {
      route:{
        arrival:'Teterboro',
        departure:'Opa-Locka'
      },
      price:'$23,820',
      type:'HEAVY JET',
      seats:'10',
      time:'2h05'
    },
  ]
  let column = [
		{
			heading:'Route',
			accessor: 'route',
			Cell: ({ row }: { row: Record<string, any> }) => 
      <div className='flex items-center gap-x-[80px]'>
        <Image 
          src='https://jetlevel.com/wp-content/uploads/2024/03/take-off.svg' 
          width={100} 
          height={100}
          alt='Plane' 
          className='w-[40px]'
        />
        <p className='w-[100px]'>{row.route.arrival}</p>
        <Image 
          src='https://jetlevel.com/wp-content/uploads/2024/03/Landing.svg' 
          width={100} 
          height={100}
          alt='Plane' 
          className='w-[40px]'
        />
        <p className='w-[100px]'>{row.route.departure}</p>
      </div>
		},
		{
			heading:'Price Est.',
			accessor: 'price',
		},
		{
			heading:'Aircraft Type',
			accessor: 'type',
		},
		{
			heading:'Seats',
			accessor: 'seats',
		},
    {
			heading:'Flight Time',
			accessor: 'time',
		},
    {
			heading:'',
			accessor: '',
      Cell: ({ row }: { row: Record<string, any> }) => <div className='font-bold'>
      <button>Enquire</button>
      </div>
		},
	]; 
  return (
    <div>
        <Hero image={"https://fly.jetlevel.com/assets/Private%20jet%20interior%20bg%20.webp"} title={"Cost of Chartering a Private Jet - Flights & Rates"} tagline={"Explore the cost of chartering a private jet flights, including breakdowns, factors, fees, and comparative analyses for informed decision-making"} hasCalculator={true} hasOverlay={false}/>
        <BrandNames />
        <Breadcrumb />
        <CompanyOverview />
        <AvailableAircrafts />
        <Table
          data={data}
          column={column}
				/>
        <SmartTravelTools />
        <WhatOurClientsSay />
    </div>
  )
}

export default EventsPage