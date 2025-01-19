"use client"
import React, { useState, useEffect } from "react";
import Input from "../LeadForm/input";
import {convertTimeFormat, getNext15Minutes} from "../LeadForm/helper"
const DistanceCalculator = () => {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [data, setData] = useState(0);
  const [form, setForm] = useState({
    fromLocation: "",
    toLocation: "",
    startDate: getNext15Minutes(),
    endDate: getNext15Minutes(),
    counter: 2,
    tourType: "oneWay",
    isErrorFrom:false,
    isErrorTo:false,
    fromMunicipality: "",
    toMunicipality: "",
    fromAirPort: "",
    toAirPort: "",
  });

  const [searchResults, setSearchResults] = useState({
    fromLocationArray: [],
    toLocationArray: [],
  });

  useEffect(() => {
    if (form.fromLocation.length === 0) {
      setSearchResults((prevSearc) => ({
        ...prevSearc,
        fromLocationArray: [],
      }));
    }
    if (form.toLocation.length === 0) {
      setSearchResults((prevSearc) => ({ ...prevSearc, toLocation: [] }));
    }
  }, [form.fromLocation, form.toLocation]);

  const handleInputChange = async (event:any) => {
    const { name, value } = event.target; 
    setForm({
      ...form,
      [name]: value,
    });

    if (name === "fromLocation") {
      if (value === "") {
        setSearchResults((prevSearc) => ({
          ...prevSearc,
          fromLocationArray: [],
        }));
        setForm((prevForm:any) => ({ ...prevForm, isErrorFrom: true }));
      } else {
        setForm((prevForm:any) => ({ ...prevForm, isErrorFrom: false }));
      }
      if (value.length >= 3) {
      
        const options = {
          method: "GET",
          params: { query: value },
         
        };
        try {
          const response = await fetch(
            `/api/search?` +
            new URLSearchParams({ query: value }),
            options
          );
          const data = await response.json();
          setSearchResults((prevSearc) => ({
            ...prevSearc,
            fromLocationArray: data && data.search,
          }));
        } catch (error) {
          console.error(error);
        }
      } else {
        setSearchResults((prevSearc) => ({
          ...prevSearc,
          fromLocationArray: [],
        }));
      }
    }

    if (name === "toLocation") {
      if (value === "") {
        setSearchResults((prevSearc) => ({
          ...prevSearc,
          ToLocationArray: [],
        }));
        setForm((prevForm:any) => ({ ...prevForm, isErrorTo: true }));
      } else {
        setForm((prevForm:any) => ({ ...prevForm, isErrorTo: false }));
      }
      if (value.length >= 3) {
        const options = {
          method: "GET",
          params: { query: value },
        };

        try {
          const response = await fetch(
            `/api/search?` +
            new URLSearchParams({ query: value }),
            options
          );
    if (!response.ok) {
     console.error(`Fetch error: ${response.statusText}`);
     return
    }
    const data = await response.json();

          setSearchResults((prevSearc:any) => ({
            ...prevSearc,
            toLocationArray: data && data.search,
          }));
        } catch (error) {
          console.error(error);
        }
      } else {
        setSearchResults((prevSearc) => ({
          ...prevSearc,
          toLocationArray: [],
        }));
      }
    }
  };


  const handleSubmit = async () => {
    try {
      if (form.fromLocation === "") {
        setForm((prevForm) => ({ ...prevForm, isErrorFrom: true }));
      } else {
        setForm((prevForm) => ({ ...prevForm, isErrorFrom: false }));
      }
      if (form.toLocation === "") {
        setForm((prevForm) => ({ ...prevForm, isErrorTo: true }));
      } else {
        setForm((prevForm) => ({ ...prevForm, isErrorTo: false }));
      }
      if (
        form.toLocation === "" ||
        form.fromLocation === "" ||
        Number(form.counter) === 0
      ) {
        return;
      }

      setLoading(true);
      const options = {
        method: "GET",
        
      };

      let response = await fetch(`/api/calculateDistance/${form.fromLocation}/${form.toLocation}`,options);
      const data = await response.json();
      // console.log(response);
      setData(data.data);
      setLoading(false);
    } catch (error) {
      // setError(error);
      setLoading(false);
    }
  };

  const handleSaveAirport = (name:string, municipality:string, nameAirport:string, type:string) => {
    if (type === "fromLocation") {
      setForm((prevForm) => ({
        ...prevForm,
        fromLocation: name,
        fromMunicipality: municipality,
        fromAirPort: nameAirport,
      }));
      setSearchResults((prevSearch) => ({
        ...prevSearch,
        fromLocationArray: [],
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        toLocation: name,
        toMunicipality: municipality,
        toAirPort: nameAirport,
      }));
      setSearchResults((prevSearch) => ({
        ...prevSearch,
        toLocationArray: [],
      }));
    }
  };



  return (
    <div className="main-container !w-fit mx-auto">
      <div className="tour-input-container">
        <div className="tour-select-fields">
          
        <Input 

       form={form}
      //  sendHeightToParent={sendHeightToParent}
       handleSaveAirport={handleSaveAirport}
       handleInputChange={handleInputChange}
       searchResults={searchResults}
       />

        </div>
        <div className="search-btn">
          <button
            className="btn search-btn"
            onClick={() => {
              // sendHeightToParent();
              handleSubmit();
            }}
          >
          {loading ? (<div className="search-form__loader"></div>) : "Search"}
          </button>
        </div>
        {data ? (
          <>
            <h2>✈️ Flight Information: </h2>
            <h3>
              from {form.fromAirPort} to {form.toAirPort} ({form.fromLocation} -{" "}
              {form.toLocation})
            </h3>
            <h4>Distance:</h4>
            <b>
              • From {form.fromMunicipality} ({form.fromLocation} ) to{" "}
              {form.toMunicipality} ({form.toLocation})
            </b>
            <div></div>
            <b>
              • Flight Distance:{" "}
              <span style={{ color: "#0071BA" }}>
                {(data * 0.621371).toFixed(1)} mi
              </span>{" "}
              or{" "}
              <span style={{ color: "#0071BA" }}>
                {data.toFixed(1)} km
              </span>{" "}
              or{" "}
              <span style={{ color: "#0071BA" }}>
                {(data * 0.539957).toFixed(1)} nm
              </span>
            </b>
            <div></div>
            <b>• Description:</b> This represents the direct flight distance or
            air distance between the two airports. It is the shortest path over
            the earth's surface.
            <h4 style={{ marginTop: "15px" }}>Duration:</h4>
            <b>
              • Estimated Flight Time:{" "}
              <span style={{ color: "#0071BA" }}>
                {convertTimeFormat((data / 676).toString())} 
              </span>
            </b>
            <div></div>
            <b>• Aircraft Type:</b> Mid-Size Jet
            <div></div>
            <b>
              • Average Speed:{" "}
              <span style={{ color: "#0071BA" }}>420 mph</span> or{" "}
              <span style={{ color: "#0071BA" }}>676 km/h</span>
            </b>
            <div></div>
            <b>• Note:</b> This is an estimated time under average conditions.
            Actual flight duration may vary due to factors like wind speeds and
            weather conditions.
          </>
        ) : null}
      </div>
    </div>
  );
};

export default DistanceCalculator;
