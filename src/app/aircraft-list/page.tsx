import AirCraftList from '@/components/LeadForm/AirCraftList'
import React, { Suspense } from 'react'
import "@/styles/leadForm.css"


function page() {
  return (
    <Suspense fallback={<div className="search-form__loader"></div>}>
      <AirCraftList />
    </Suspense>
  )
}

export default page