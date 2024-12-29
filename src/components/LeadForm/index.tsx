"use client";
import React, { useEffect, useState } from "react";
import TourSelect from "./tourselect";

import "react-datepicker/dist/react-datepicker.css";
import "@/styles/leadForm.css"
import { getNext15Minutes } from "./helper";
import { useSearchParams } from "next/navigation";

type LeadFormProps ={
  widget?:boolean
}
export default function Index({ widget }:LeadFormProps) {
    const [formInfo, setFormInfo] = useState({
      fromLocation: "",
      toLocation: "",
      startDate: getNext15Minutes(),
      endDate: getNext15Minutes(),
      counter: 2,
      tourType: "oneWay",
      isErrorFrom:false,
    });

    const handleTourChange = (type:"roundTrip"|"oneWay") => {
      setFormInfo((prevForm:any) => ({ ...prevForm, tourType:type}));
  };
  const searchParams = useSearchParams();

  useEffect(() => {
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const tourType = searchParams.get('tourType');
    const startDate = searchParams.get('startDate') 
    const endDate =  searchParams.get('endDate')
    if(tourType == "roundTrip" && endDate) {
    
    setFormInfo((prevForm:any) => ({ ...prevForm,endDate:new Date(Number(endDate))}));
    } 
    const counter = searchParams.get('counter') as number | null;

    if (from && to && tourType && startDate  && counter) {
      setFormInfo((prevForm:any) => ({ ...prevForm,fromLocation:from, toLocation:to,startDate:new Date(Number(startDate)), tourType,counter}));
      
    }
  }, [searchParams]);


  return (
    <div className={`${widget ? 'widget-container main-container shadow-card_shadow': 'main-container'}`}>
      <div className="tour-input-container">
        <div className="tour-header">
          <div className="tour-tabs">
            <p
              className={
                formInfo.tourType === "oneWay"
                  ? "active-tab mr-10"
                  : "not-active-tab mr-10"
              }
              onClick={() => handleTourChange("oneWay")}
            >
              One Way
            </p>
            <p
              className={
                formInfo.tourType === "roundTrip"
                  ? "active-tab mr-10"
                  : "not-active-tab mr-10"
              }
              onClick={() => handleTourChange("roundTrip")}
            >
              Round Trip
            </p>
          </div>
        </div>

          <TourSelect widget={widget} formInfo={formInfo} setFormInfo={setFormInfo}/>
      </div>
   
    </div>
  );
}

