import AirCraftCharter from '@/components/AirCraftCharter'
import Hero from '@/sections/Hero'
import { colors } from '@mui/material'
import React from 'react'

const AircraftCharterPage = () => {
  const aircraftsCharters = [
    {
      colors:'',
      header:'TurboProp Aircraft',
      backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/bg-category-1.jpg',
      description:'Turboprop planes are the smallest class of aircraft JetLevel Aviation offers. Usually operating with two propellers and a small cabin, these planes are great options for shorter-range travel.',
      icons:[
        {
          title:'Seats',
          description:'6-9',
          icon:'https://jetlevel.com/wp-content/uploads/2022/09/seats-black.png?gk=dd'
        },
        {
          title:'Speed',
          description:'250-400 mph',
          icon:'https://jetlevel.com/wp-content/uploads/2022/09/speed-black.png?kf=dd'
        },
        {
          title:'Range',
          description:'1,070-1,700 nm',
          icon:'https://jetlevel.com/wp-content/uploads/2022/09/range-black.png?kt=dd'
        },
        {
          title:'Price per hour',
          description:'$1,700-$6,600',
          icon:'https://jetlevel.com/wp-content/uploads/2022/09/price-per-hour-black.png?kt=dd'
        },
      ],
      aircraftArray: [
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-king-air-250-thumbnail.jpg',
          title:'Citation Encore+'
        },
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-king-air-350-thumbnail.jpg',
          title:'King Air 350'
        },
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-pilatus-pc-12-1.jpg',
          title:'Pilatus PC12'
        },
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-cessna-caravan-thumbnail.jpg',
          title:'Cessna Caravan'
        },
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-tbm-socata-850-thumbnail.jpg',
          title:'TBM Socata 850'
        }
      ]
    },
    {
      colors:'text-white',
      header:'Very Light Jets',
      backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/bg-category-2.jpg',
      description:'The next step up from turboprops, very light jets are entry-level jets with lower operating costs and speeds than some heavier jet classes.',
      icons:[
        {
          title:'Seats',
          description:'4-7',
          icon:'https://jetlevel.com/wp-content/uploads/2022/09/seats.png'
        },
        {
          title:'Speed',
          description:'~400 mph',
          icon:'https://jetlevel.com/wp-content/uploads/2022/09/speed.png'
        },
        {
          title:'Range',
          description:'1,100-1,500 nm',
          icon:'https://jetlevel.com/wp-content/uploads/2022/09/range.png'
        },
        {
          title:'Price per hour',
          description:'$4,200-$6,900',
          icon:'https://jetlevel.com/wp-content/uploads/2022/09/price-per-hour.png'
        },
      ],
      aircraftArray: [
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-citation-M2-thumbnail.jpg',
          title:'Citation M2'
        },
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-honda-jet-thumbnail.jpg',
          title:'Honda Jet'
        },
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-phenom-100-thumbnail.jpg',
          title:'Phenom 100 '
        },
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-vision-jet-thumbnail.jpg',
          title:'Vision Jet'
        },
        {
          backgroundImage:'https://jetlevel.com/wp-content/uploads/2022/09/jet-charter-eclipse-500-thumbnail.jpg',
          title:'Eclipse 550 '
        }
      ]
    }
  ]
  return (
    <div>
      {
        aircraftsCharters.map((aircraft,index) =>(
          <div key={index}>
            <AirCraftCharter 
              contentColor={aircraft.colors}
              backgroundImage={aircraft.backgroundImage}
              header={aircraft.header} 
              description={aircraft.description}
              iconsArray={aircraft.icons}
              aircraftArray={aircraft.aircraftArray}
            />
          </div>
        ))
      }
    </div>
  )
}

export default AircraftCharterPage