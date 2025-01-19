"use client";
import React, { useState, FormEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "@/styles/flightTracker.css";
import Modal from "../Modal";
/** 
 * Represents the main flight details object (data[0]).
 * Adjust properties to match your actual data shape.
 */
interface IFlightDetails {
  ident?: string;
  registration?: string;
  aircraft_type?: string;
  origin: {
    name?: string;
    code_icao?: string;
  };
  destination: {
    name?: string;
    code_icao?: string;
  };
  estimated_out?: string;
  scheduled_out?: string;
  estimated_off?: string;
  scheduled_off?: string;
  estimated_on?: string;
  scheduled_on?: string;
  estimated_in?: string;
  scheduled_in?: string;
  filed_airspeed?: number;
  route_distance?: number;
}



/** 
 * Represents the aircraft details (data[2]).
 * Adjust properties as needed.
 */
interface IAircraftDetails {
  manufacturer?: string;
  type?: string;
  description?: string;
}

/** 
 * Represents the weather data for origin/destination (data[3] & data[4]).
 */
interface IWeather {
  temp_perceived?: number;
  cloud_friendly?: string;
  wind_friendly?: string;
}

/** 
 * We aggregate both origin and destination weather in a single object
 * because you do: setWeatherData({ origin: data[3], destination: data[4] });
 */
interface IWeatherData {
  origin?: IWeather;
  destination?: IWeather;
}



const FlightTracker: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);

  const [image, setImage] = useState<string | undefined>(undefined);
  const [fightDetails, setFightDetails] = useState<IFlightDetails | undefined>(
    undefined
  );
  const [aircraftDetails, setAircraftDetails] = useState<
    IAircraftDetails | undefined
  >(undefined);
  const [weatherData, setWeatherData] = useState<IWeatherData | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [ident, setIdent] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!ident) return;
      setLoading(true);
      const response = await fetch(
        `/api/getFlightInfo?ident=${ident}`
      );
      const data = await response.json();
      setFightDetails(data[0]);
      setImage(data[1]?.map);
      setAircraftDetails(data[2]);
      setWeatherData({ origin: data[3], destination: data[4] });
      setLoading(false);

    } catch (err) {
      setLoading(false);
      console.log(err);
    }
    setOpenModal(true);
  }

  const closeModal = () => {
    // console.log("Modal closing...");
    setOpenModal(false);

    const currentUrl = new URL(window.location.href);
    const queryParams = currentUrl.search;

    // console.log("Current URL:", currentUrl.href);
    // console.log("Query Params:", queryParams);

    if (queryParams) {
      window.history.pushState({}, '', window.location.pathname); // Removes query parameters
      // console.log("Updated URL:", window.location.href);
    }
  };


  return (
    <>
      <div className="tracker-form-wrap tracker-form-wrap-form">
        <div id="tracker" className="form">
          <form acceptCharset="utf-8" id="flight-tracker-form" className="flight-tracker-form" onSubmit={(e) => handleSubmit(e)} >
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
                  onChange={(e) => setIdent(e.target.value)}
                />
                <button style={{ width: "40px", backgroundColor: "#4295CF", color: "white" }}>
                  {!loading ? (
                    <div className="img-search-flight-icon">
                      <SearchIcon />
                    </div>
                  ) : (
                    "..."
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        onClose={closeModal}
        modalWidth={1000}
        className='h-[600px]'
      >
        <div className='h-full overflow-auto overflow-design rounded-2xl py-10 px-5'>
          {fightDetails ? (
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
                  {image ? (
                    <div className="ft-map" >

                      <img src={`data:image/png;base64,${image}`} alt="map" />
                    </div>
                  ) : null}
                  <div className="ft-results-2 justify-between !flex-col md:!flex-row" style={{ marginTop: "10px" }}>
                    <div className="ft-results-2-left !max-w-full md:!max-w-[49%] !pr-0 md:pr-[25px]">
                      <h4 className="mb-0 pt-3">Flight Details</h4>

                      <p className="text-[rgb(33,33,33)] ft-results-highlight">Departure Times</p>
                      <div className="ft-results-col-inner">
                        <div className="ft-results-col pr-2">
                          <p>Gate Departure:</p>
                          <p className=" departure-time">
                            {fightDetails?.estimated_out ? (new Date(fightDetails?.estimated_out).toLocaleString(
                              "en-US",
                              {
                                timeZone: "America/New_York",
                              }
                            ).replace(/:\d{2} /, ' ')) + " EDT" : " -- "}
                          </p>
                          <p className="scheduled-text">
                            Scheduled{" "}
                            {fightDetails?.scheduled_out ? (new Date(fightDetails?.scheduled_out).toLocaleString(
                              "en-US",
                              {
                                timeZone: "America/New_York",
                              }
                            ).replace(/:\d{2} /, ' ')) + " EDT" : " -- "}
                          </p>
                        </div>
                        <div className="ft-results-col pl-2">
                          <p>Takeoff:</p>
                          <p className="departure-time">
                            {fightDetails?.estimated_off ? (new Date(fightDetails?.estimated_off).toLocaleString(
                              "en-US",
                              {
                                timeZone: "America/New_York",
                              }
                            ).replace(/:\d{2} /, ' ')) + " EDT" : " -- "}
                          </p>
                          <p className="scheduled-text">
                            Scheduled{" "}
                            {fightDetails?.scheduled_off ? (new Date(fightDetails?.scheduled_off).toLocaleString(
                              "en-US",
                              {
                                timeZone: "America/New_York",
                              }
                            ).replace(/:\d{2} /, ' ')) + " EDT" : " -- "}
                          </p>
                        </div>
                      </div>
                      <p className="text-[rgb(33,33,33)] ft-results-highlight">Arrival Times</p>
                      <div className="ft-results-col-inner">
                        <div className="ft-results-col">
                          <p>Landing:</p>
                          <p className="landing-time">
                            {fightDetails?.estimated_on ? (new Date(fightDetails?.estimated_on).toLocaleString(
                              "en-US",
                              {
                                timeZone: "America/New_York",
                              }
                            ).replace(/:\d{2} /, ' ')) + " EDT" : " -- "}
                          </p>
                          <p className="scheduled-text">
                            Scheduled{" "}
                            {fightDetails?.scheduled_on ? (new Date(fightDetails?.scheduled_on).toLocaleString(
                              "en-US",
                              {
                                timeZone: "America/New_York",
                              }
                            ).replace(/:\d{2} /, ' ')) + " EDT" : " -- "}
                          </p>
                        </div>
                        <div className="ft-results-col">
                          <p>Gate Arrival:</p>
                          <p className="landing-time">
                            {fightDetails?.estimated_in ? (new Date(fightDetails?.estimated_in).toLocaleString(
                              "en-US",
                              {
                                timeZone: "America/New_York",
                              }
                            ).replace(/:\d{2} /, ' ')) + " EDT" : " -- "}
                          </p>
                          <p className="scheduled-text">
                            Scheduled{" "}
                            {fightDetails?.scheduled_in ? (new Date(fightDetails?.scheduled_in).toLocaleString(
                              "en-US",
                              {
                                timeZone: "America/New_York",
                              }
                            ).replace(/:\d{2} /, ' ')) + " EDT" : " -- "}
                          </p>
                        </div>
                      </div>
                      <div style={{ marginTop: "10px" }}></div>
                      <h4 className="mb-0 pt-3">Weather Details</h4>
                      {weatherData ? (
                        <div>
                          <p className="text-[rgb(33,33,33)] ft-results-highlight">
                            {fightDetails?.origin?.name}
                          </p>
                          <div className="!pt-0 !mb-3  ft-results-2">
                            <div className="ft-results-2-left">
                              <div className="ft-results-col-inner">
                                <div className="ft-results-col">
                                  <p>Temperature:</p>
                                  <p className="departure-time">
                                    {weatherData?.origin?.temp_perceived} °F{" "}
                                  </p>
                                  <p className="scheduled-text">
                                    {weatherData?.origin?.cloud_friendly} and{" "}
                                    {weatherData?.origin?.wind_friendly}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-[rgb(33,33,33)] ft-results-highlight">
                            {fightDetails?.destination?.name}
                          </p>
                          <div className="!pt-0 !mb-3 ft-results-2">
                            <div className="ft-results-2-left">
                              <div className="ft-results-col-inner">
                                <div className="ft-results-col">
                                  <p>Temperature:</p>
                                  <p className="departure-time">
                                    {weatherData?.destination?.temp_perceived} °F{" "}
                                  </p>
                                  <p className="scheduled-text">
                                    {weatherData?.destination?.cloud_friendly} and{" "}
                                    {weatherData?.destination?.wind_friendly}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {aircraftDetails ? (
                      <div className="ft-results-2-right !max-w-full md:!max-w-[49%]">
                        <h4 className="mb-0 pt-3">Aircraft Details</h4>
                        <p className="text-[rgb(33,33,33)] ft-results-highlight">Aircraft Information</p>
                        <div className="ft-results-col-full">
                          <span>Aircraft Type:</span>
                          <span>
                            {fightDetails?.aircraft_type}{" "}
                            {aircraftDetails?.manufacturer} {aircraftDetails?.type}{" "}
                            {aircraftDetails?.description}
                          </span>
                        </div>
                        <p className="text-[rgb(33,33,33)] !mt-5 ft-results-highlight">Aircraft Route</p>
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

                        <p className="text-[rgb(33,33,33)] !mt-5  ft-results-highlight">Flight Data</p>
                        <div className="ft-results-col-full">
                          <span>Speed:</span>
                          <span>Filed {fightDetails?.filed_airspeed} mph</span>
                        </div>
                        <div className="ft-results-col-full">
                          <span>Distance:</span>
                          <span>Direct {fightDetails?.route_distance} mi</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

      </Modal>

    </>
  );
};

export default FlightTracker;
