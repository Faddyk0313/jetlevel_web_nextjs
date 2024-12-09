import AirCraftList from '@/components/LeadForm/AirCraftList'
import React, { Suspense } from 'react'
import "@/styles/leadForm.css"


function page() {
  
  return (
    <Suspense fallback={<p>Loading...</p>}>

    <AirCraftList/>
    </Suspense>

  )
}

export default page