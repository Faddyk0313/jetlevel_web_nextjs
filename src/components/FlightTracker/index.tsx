"use client"
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "@/styles/flightTracker.css"
const FlightTracker = () => {
  const [image, setImage] = useState();
  const [fightDetails, setFightDetails] = useState();
  const [aircraftDetails, setAircraftDetails] = useState();
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault()
    try{
    let ident = document.getElementById("ident").value;
    if (!ident) return;
    setLoading(true);
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getFlightInfo?ident=${ident}`
    );
    let data = await response.json()
    setFightDetails(data[0]);
    setImage(data[1]?.map);
    setAircraftDetails(data[2]);
    setWeatherData({ origin: data[3], destination: data[4] });
    setLoading(false);
   
    }catch(err){
      setLoading(false);
      console.log(err.message)
    }
  }


  return (
      <>
      <div className="tracker-form-wrap tracker-form-wrap-form">
        <div id="tracker" className="form">
          <form acceptCharset="utf-8" id="flight-tracker-form" className="flight-tracker-form" onSubmit={(e)=>handleSubmit(e)} >
            <div className="flight-tracker-form-left">
              <h4>Track any flight instantly</h4>
              <p>Enter Aircraft Tail Number</p>
            </div>
            <div className="flight-tracker-form-right">
              <label htmlFor="ident">Aircraft Tail Number</label>
              <div className="flight-tracker-form-input">
                <input
                  type="text"
                  name="ident"
                  id="ident"
                  placeholder="ENY3755"
                />
                <button style={{ width: "40px" , backgroundColor: "#4295CF",color:"white"}}>
                 {!loading?(
                 <div className="img-search-flight-icon">
                 <SearchIcon/>
                 </div>
                 ):(
                    "..."
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {image && fightDetails && aircraftDetails && weatherData? (
        <div className="page-template page-template-page-flight-tracker-v2 page-template-page-flight-tracker-v2-php page page-id-3875 locked go-version0">
          <div className="flight-tracker-results">
            <div className="flight-tracker-results-inner">
              <div className="ft-results-1">
                <div className="ft-results-1-left">
                  <h4>
                    {fightDetails?.ident} / {fightDetails?.registration}
                  </h4>
                </div>
              </div>
              <div className="ft-map" >
                
                <img src={`data:image/png;base64,${image}`} alt="map" />
              </div>
              <div className="ft-results-2" style={{marginTop:"10px"}}>
                <div className="ft-results-2-left">
                  <h4>Flight Details</h4>

                  <p className="ft-results-highlight">Departure Times</p>
                  <div className="ft-results-col-inner">
                    <div className="ft-results-col">
                      <p>Gate Departure:</p>
                      <p className="departure-time">
                        {fightDetails?.estimated_out ?(new Date(fightDetails?.estimated_out).toLocaleString(
                          "en-US",
                          {
                            timeZone: "America/New_York",
                          }
                        ).replace(/:\d{2} /, ' '))+" EDT":" -- "}
                      </p>
                      <p className="scheduled-text">
                        Scheduled{" "}
                        {fightDetails?.scheduled_out?(new Date(fightDetails?.scheduled_out).toLocaleString(
                          "en-US",
                          {
                            timeZone: "America/New_York",
                          }
                          ).replace(/:\d{2} /, ' '))+" EDT":" -- "}
                          </p>
                    </div>
                    <div className="ft-results-col">
                      <p>Takeoff:</p>
                      <p className="departure-time">
                        {fightDetails?.estimated_off?(new Date(fightDetails?.estimated_off).toLocaleString(
                          "en-US",
                          {
                            timeZone: "America/New_York",
                          }
                          ).replace(/:\d{2} /, ' '))+" EDT":" -- "}
                          </p>
                      <p className="scheduled-text">
                        Scheduled{" "}
                        {fightDetails?.scheduled_off?(new Date(fightDetails?.scheduled_off).toLocaleString(
                          "en-US",
                          {
                            timeZone: "America/New_York",
                          }
                          ).replace(/:\d{2} /, ' '))+" EDT":" -- "}
                          </p>
                    </div>
                  </div>
                  <p className="ft-results-highlight">Arrival Times</p>
                  <div className="ft-results-col-inner">
                    <div className="ft-results-col">
                      <p>Landing:</p>
                      <p className="landing-time">
                        {fightDetails?.estimated_on?(new Date(fightDetails?.estimated_on).toLocaleString(
                          "en-US",
                          {
                            timeZone: "America/New_York",
                          }
                          ).replace(/:\d{2} /, ' '))+" EDT":" -- "}
                          </p>
                      <p className="scheduled-text">
                        Scheduled{" "}
                        {fightDetails?.scheduled_on?(new Date(fightDetails?.scheduled_on).toLocaleString(
                          "en-US",
                          {
                            timeZone: "America/New_York",
                          }
                          ).replace(/:\d{2} /, ' '))+" EDT":" -- "}
                          </p>
                    </div>
                    <div className="ft-results-col">
                      <p>Gate Arrival:</p>
                      <p className="landing-time">
                        {fightDetails?.estimated_in?(new Date(fightDetails?.estimated_in).toLocaleString(
                          "en-US",
                          {
                            timeZone: "America/New_York",
                          }
                          ).replace(/:\d{2} /, ' '))+" EDT":" -- "}
                          </p>
                      <p className="scheduled-text">
                        Scheduled{" "}
                        {fightDetails?.scheduled_in?(new Date(fightDetails?.scheduled_in).toLocaleString(
                          "en-US",
                          {
                            timeZone: "America/New_York",
                          }
                          ).replace(/:\d{2} /, ' '))+" EDT":" -- "}
                          </p>
                    </div>
                  </div>
                  <div style={{ marginTop: "10px" }}></div>
                  <h4>Weather Details</h4>
                  <div>
                    <p className="ft-results-highlight">
                      {fightDetails?.origin?.name}
                    </p>
                    <div className="ft-results-2">
                      <div className="ft-results-2-left">
                        <div className="ft-results-col-inner">
                          <div className="ft-results-col">
                            <p>Temperature:</p>
                            <p className="departure-time">
                              {weatherData?.origin.temp_perceived} °F{" "}
                            </p>
                            <p className="scheduled-text">
                              {weatherData?.origin.cloud_friendly} and{" "}
                              {weatherData?.origin.wind_friendly}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="ft-results-highlight">
                      {fightDetails?.destination?.name}
                    </p>
                    <div className="ft-results-2">
                      <div className="ft-results-2-left">
                        <div className="ft-results-col-inner">
                          <div className="ft-results-col">
                            <p>Temperature:</p>
                            <p className="departure-time">
                              {weatherData?.destination.temp_perceived} °F{" "}
                            </p>
                            <p className="scheduled-text">
                              {weatherData?.destination.cloud_friendly} and{" "}
                              {weatherData?.destination.wind_friendly}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ft-results-2-right">
                  <h4>Aircraft Details</h4>
                  <p className="ft-results-highlight">Aircraft Information</p>
                  <div className="ft-results-col-full">
                    <span>Aircraft Type:</span>
                    <span>
                      {fightDetails?.aircraft_type}{" "}
                      {aircraftDetails?.manufacturer} {aircraftDetails?.type}{" "}
                      {aircraftDetails?.description}
                    </span>
                  </div>
                  <p className="ft-results-highlight">Aircraft Route</p>
                  <div className="ft-results-col-full">
                    <span>Origin: </span>
                    <span>
                      {fightDetails?.origin.name} (
                      {fightDetails?.origin.code_icao})
                    </span>
                  </div>
                  <div className="ft-results-col-full">
                    <span>Destination: </span>
                    <span>
                      {fightDetails?.destination.name} (
                      {fightDetails?.destination.code_icao})
                    </span>
                  </div>

                  <p className="ft-results-highlight">Flight Data</p>
                  <div className="ft-results-col-full">
                    <span>Speed:</span>
                    <span>Filed {fightDetails?.filed_airspeed} mph</span>
                  </div>
                  <div className="ft-results-col-full">
                    <span>Distance:</span>
                    <span>Direct {fightDetails?.route_distance} mi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) :null}
    </>
  );
};

export default FlightTracker;
