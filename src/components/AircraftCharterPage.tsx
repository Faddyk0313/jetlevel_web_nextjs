import AirCraftCharter from '@/components/AirCraftCharter'
import BrandNames from '@/sections/BrandNames'
import Hero from '@/sections/Hero'
import React from 'react'
import Breadcrumb from './Breadcrumb/Breadcrumb'

const AircraftCharterPage = () => {
  const aircraftsCharters = [
  {
    colors: '',
    header: 'TurboProp Aircraft',
    backgroundImage: '/aircraftImages/bg-category-1.jpeg',
    description: 'Turboprop planes are the smallest class of aircraft JetLevel Aviation offers. Usually operating with two propellers and a small cabin, these planes are great options for shorter-range travel.',
    icons: [
      {
        title: 'Seats',
        description: '5-11',
        icon: '/aircraftImages/seats icon.svg'
      },
      {
        title: 'Speed',
        description: '250-400 MPH',
        icon: '/aircraftImages/speed icon.svg'
      },
      {
        title: 'Range',
        description: '1,070-1,700 NM',
        icon: '/aircraftImages/range icon.svg'
      },
      {
        title: 'Price per hour',
        description: '$1,700-$6,600',
        icon: '/aircraftImages/price-per-hour icon.svg'
      }
    ],
    aircraftArray: [
      {
        backgroundImage: '/aircraftImages/jet-charter-king-air-250-thumbnail.jpeg',
        title: 'King Air 250',
        url: `/king-air-250`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-king-air-350-thumbnail.jpeg',
        title: 'King Air 350',
        url: `/king-air-350`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-pilatus-pc-12-1.jpeg',
        title: 'Pilatus PC12',
        url: `/pilatus-pc12`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-cessna-caravan-thumbnail.jpeg',
        title: 'Cessna Caravan',
        url: `/cessna-caravan`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-tbm-socata-850-thumbnail.jpeg',
        title: 'TBM Socata 850',
        url: `/socata-tbm-850`
      }
    ]
  },
  {
    colors: 'text-white',
    header: 'Very Light Jets',
    backgroundImage: '/aircraftImages/bg-category-2.jpeg',
    description: 'The next step up from turboprops, very light jets are entry-level jets with lower operating costs and speeds than some heavier jet classes.',
    icons: [
      {
        title: 'Seats',
        description: '4-7',
        icon: '/aircraftImages/seats icon.svg'
      },
      {
        title: 'Speed',
        description: '~400 MPH',
        icon: '/aircraftImages/speed icon.svg'
      },
      {
        title: 'Range',
        description: '1,100-1,500 NM',
        icon: '/aircraftImages/range icon.svg'
      },
      {
        title: 'Price per hour',
        description: '$4,200-$6,900',
        icon: '/aircraftImages/price-per-hour icon.svg'
      }
    ],
    aircraftArray: [
      {
        backgroundImage: '/aircraftImages/jet-charter-citation-M2-thumbnail.jpeg',
        title: 'Citation M2',
        url: `/citation-m2`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-honda-jet-thumbnail.jpeg',
        title: 'Honda Jet',
        url: `/honda-jet`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-phenom-100-thumbnail.jpeg',
        title: 'Phenom 100',
        url: `/embraer-phenom-100`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-vision-jet-thumbnail.jpeg',
        title: 'Vision Jet',
        url: `/vision-jet`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-eclipse-500-thumbnail.jpeg',
        title: 'Eclipse 550',
        url: `/eclipse-550`
      }
    ]
  },
  {
    colors: '',
    header: 'Light Jets',
    backgroundImage: '/aircraftImages/bg-category-3.jpeg',
    description: 'In between very light jets and midsize jets, light jets have more room than smaller classes but do not offer the extended ranges of heavier jet classes.',
    icons: [
      {
        title: 'Seats',
        description: '6-9',
        icon: '/aircraftImages/seats icon.svg'
      },
      {
        title: 'Speed',
        description: '~450 MPH',
        icon: '/aircraftImages/speed icon.svg'
      },
      {
        title: 'Range',
        description: '1,700-2,300 NM',
        icon: '/aircraftImages/range icon.svg'
      },
      {
        title: 'Price per hour',
        description: '$5,400-$8,400',
        icon: '/aircraftImages/price-per-hour icon.svg'
      }
    ],
    aircraftArray: [
      {
        backgroundImage: '/aircraftImages/jet-charter-citation-encore-thumbnail.jpeg',
        title: 'Citation Encore+',
        url: `/citation-encore`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-citation-cj3-thumbnail.jpeg',
        title: 'Citation CJ3',
        url: `/citation-cj3`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-embraer-phenom-300-thumbnail.jpg',
        title: 'Phenom 300',
        url: `/embraer-phenom-300`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-nextant-400xti-thumbnail.jpeg',
        title: 'Nextant 400XTi',
        url: `/nextant-400xti`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-lear-jet-45-thumbnail.jpeg',
        title: 'Lear 45XR',
        url: `/lear-45xr`
      }
    ]
  },
  {
    colors: 'text-white',
    header: 'Mid Jets',
    backgroundImage: '/aircraftImages/bg-category-4.jpeg',
    description: 'Mid jets provide longer range than smaller jets while also offering more room within cabins and baggage compartments than lighter jets.',
    icons: [
      {
        title: 'Seats',
        description: '6-9',
        icon: '/aircraftImages/seats icon.svg'
      },
      {
        title: 'Speed',
        description: '~500 MPH',
        icon: '/aircraftImages/speed icon.svg'
      },
      {
        title: 'Range',
        description: '2,100-3,200 NM',
        icon: '/aircraftImages/range icon.svg'
      },
      {
        title: 'Price per hour',
        description: '$6,400-$9,400',
        icon: '/aircraftImages/price-per-hour icon.svg'
      }
    ],
    aircraftArray: [
      {
        backgroundImage: '/aircraftImages/jet-charter-hawker-800xp-thumbnail.jpeg',
        title: 'Hawker 800XP',
        url: `/hawker-800xp`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-hawker-900XP-thumbnail.jpeg',
        title: 'Hawker 900XP',
        url: `/hawker-900xp`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-citation-XLS-thumbnail.jpeg',
        title: 'Citation XLS',
        url: `/citation-xls`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-lear-jet-60-thumbnail.jpeg',
        title: 'Lear 60',
        url: `/lear-60`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-lear-jet-75-thumbnail.jpeg',
        title: 'Lear 75',
        url: `/lear-75`
      }
    ]
  },
  {
    colors: '',
    header: 'Super Mid Jets',
    backgroundImage: '/aircraftImages/bg-category-5.jpeg',
    description: 'Super mid jets offer more seating than midsize jets while also providing longer ranges and flight times, usually around 6 hours.',
    icons: [
      {
        title: 'Seats',
        description: '8-10',
        icon: '/aircraftImages/seats icon.svg'
      },
      {
        title: 'Speed',
        description: '~525 MPH',
        icon: '/aircraftImages/speed icon.svg'
      },
      {
        title: 'Range',
        description: '2,800-3,400 NM',
        icon: '/aircraftImages/range icon.svg'
      },
      {
        title: 'Price per hour',
        description: '$7,900-$12,900',
        icon: '/aircraftImages/price-per-hour icon.svg'
      }
    ],
    aircraftArray: [
      {
        backgroundImage: '/aircraftImages/jet-charter-cessna-citation-X-thumbnail.jpeg',
        title: 'Citation X',
        url: `/citation-x`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-citation-sovereign-thumbnail.jpg',
        title: 'Citation Sovereign',
        url: `/citation-sovereign`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-falcon-50-ex-thumbnail.jpeg',
        title: 'Falcon 50EX',
        url: `/falcon-50ex`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-challenger-300-thumbnail.jpeg',
        title: 'Challenger 300',
        url: `/challenger-300`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-gulfstream-g200-thumbnail.jpeg',
        title: 'Gulfstream G200',
        url: `/gulfstream-g200`
      }
    ]
  },
  {
    colors: 'text-white',
    header: 'Heavy Jets',
    backgroundImage: '/aircraftImages/bg-category-6.jpeg',
    description: 'The largest flight class offered for charter flights, heavy jets have ample seating and incredibly long ranges for luxurious travel.',
    icons: [
      {
        title: 'Seats',
        description: '8-16',
        icon: '/aircraftImages/seats icon.svg'
      },
      {
        title: 'Speed',
        description: '~525 MPH',
        icon: '/aircraftImages/speed icon.svg'
      },
      {
        title: 'Range',
        description: '3,000-6,000 NM',
        icon: '/aircraftImages/range icon.svg'
      },
      {
        title: 'Price per hour',
        description: '$8,000-$16,000',
        icon: '/aircraftImages/price-per-hour icon.svg'
      }
    ],
    aircraftArray: [
      {
        backgroundImage: '/aircraftImages/jet-charter-gulfstream-GIV-thumbnail.jpeg',
        title: 'Gulfstream GIVSP',
        url: `/gulfstream-givsp`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-gulfstream-GV-thumbnail.jpeg',
        title: 'Gulfstream GV',
        url: `/gulfstream-gv`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-falcon-2000-thumbnail.jpeg',
        title: 'Falcon 2000',
        url: `/falcon-2000`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-falcon-900-thumbnail.jpeg',
        title: 'Falcon 900',
        url: `/falcon-900`
      },
      {
        backgroundImage: '/aircraftImages/jet-charter-challenger-605-thumbnail.jpeg',
        title: 'Challenger 605',
        url: `/challenger-605`
      }
    ]
  }
];

  return (
    <div>
      <Hero title="Private Jet Charter Aircraft Flights & Costs" description='Explore JetLevel Aviation’s private jet aircraft charters options tailored to your needs. From light jets to long-range aircraft, we offer competitive costs and flexible solutions. Get a customized quote today for your next luxurious and efficient flight.' image="/images2/bg-hero.jpg" hasCalculator={false} />
      <BrandNames />
      <div className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <Breadcrumb />
      </div>
      {
        aircraftsCharters.map((aircraft,index) =>(
          <section key={index} style={{ backgroundImage:`url(${aircraft.backgroundImage})` }} className='px-5 md:px-10 lg:px-20 bg-cover bg-center' >
            <AirCraftCharter 
              contentColor={aircraft.colors}
              backgroundImage={aircraft.backgroundImage}
              header={aircraft.header} 
              description={aircraft.description}
              iconsArray={aircraft.icons}
              aircraftArray={aircraft.aircraftArray}
            />
          </section>
        ))
      }
    </div>
  )
}

export default AircraftCharterPage