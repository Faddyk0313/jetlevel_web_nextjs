"use client";
import React, { useState } from "react";
import TourSelect from "./tourselect";

import "react-datepicker/dist/react-datepicker.css";
import "@/styles/leadForm.css"

export default function Index() {
  const [tourType, setTourType] = useState("oneWay");
  const handleTourChange = (type:"roundTrip"|"oneWay") => {
    setTourType(type);
  };



  return (
    <div className="main-container">
      <div className="tour-input-container">
        <div className="tour-header">
          <div className="tour-tabs">
            <p
              className={
                tourType === "oneWay"
                  ? "active-tab mr-10"
                  : "not-active-tab mr-10"
              }
              onClick={() => handleTourChange("oneWay")}
            >
              One Way
            </p>
            <p
              className={
                tourType === "roundTrip"
                  ? "active-tab mr-10"
                  : "not-active-tab mr-10"
              }
              onClick={() => handleTourChange("roundTrip")}
            >
              Round Trip
            </p>
          </div>
        </div>

          <TourSelect tourType={tourType}/>
      </div>
   
    </div>
  );
}

