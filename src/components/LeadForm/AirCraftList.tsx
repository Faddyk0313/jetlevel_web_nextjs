"use client"
import React, { useState,useEffect } from 'react'

import 'react-international-phone/style.css';
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import TextsmsIcon from "@mui/icons-material/Textsms";
import CloseIcon from "@mui/icons-material/Close";
import { PhoneInput } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();
import { useSearchParams } from 'next/navigation';
import LeadForm from '@/components/LeadForm'
import {convertTimeFormat,getTime,getCurrentTime,getPrice,getUTCTime,getNext15Minutes} from "./helper"

// global.d.ts
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
const laggage = [
  "XL Suitcases",
  "Ski / Ski Bag",
  "Firearm",
  "Medical Equipement",
];
const aboutInfo = [
  "Booking For Personal Travel",
  "Booking For Business Travel",
  "Travel Agent / Conceirge /Personal Assist",
  "Other",
];

export default function AirCraftList({setOpenModal}:any) {
  const [form, setForm] = useState({
    fromLocation: "",
    toLocation: "",
    fromMunicipality: "",
    toMunicipality: "",
    fromAirPort: "",
    toAirPort: "",
    isErrorFrom: false,
    isErrorTo: false,
    startDate: getNext15Minutes(),
    endDate: getNext15Minutes(),
    counter: 2,
    tourType: "oneWay",
    currency: "USD",
    showInquiryForm: -1,
    aircraft: "",
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [extraInfo, setExtraInfo] = useState({
    show: true,
    craftType: 0,
    about: 0,
    baggage: [],
    pet: false,
    child: false,
    time: "",
  });
  const [inquiry, setInquiry] = useState({
    firstName: "",
    isErrorFirstName: false,
    isErrorLastName: false,
    isErrorEmail: false,
    isErrorPhone: false,
    touchedPhone: false,
    isEmailInvalid:false,
    lastName: "",
    email: "",
    phone: "",
    desc: "",
    time: getCurrentTime(),
    quiryLoader: false,
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const tourType = searchParams.get('tourType');
    const startDate = searchParams.get('startDate') as Date|null;
    
    const counter = searchParams.get('counter') as number | null;

    if (from && to && tourType && startDate  && counter) {
      setOpenModal(true);
      handleSubmit(from, to, tourType,counter,startDate);
    }
  }, [searchParams]);

  const handleSubmit = async (from:string, to:string, tourType:string,counter:number,startDate:Date) => {
    try {
      setForm((prevForm:any) => ({ ...prevForm, tourType,fromLocation:from,toLocation:to,startDate,counter }));
      if(tourType == "roundTrip" ){
        const endDate = searchParams.get('endDate') 
        setForm((prevForm:any) => ({ ...prevForm, endDate}))
      }

      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllJetInfo/${from}/${to}/${tourType}`
      );
      if(!response.ok){
        setLoading(false);
        return
      }
      const data = await response.json();
      setData(data.data);
      setLoading(false);
    } catch (error) {
      // setError(error);
      setLoading(false);
    }
  };

  const handleEmailValidation = (e:React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
      setInquiry({ ...inquiry, isErrorEmail: true, isEmailInvalid: false });
    } else if (!emailPattern.test(email)) {
      setInquiry({ ...inquiry, isErrorEmail: true, isEmailInvalid: true });
    } else {
      setInquiry({ ...inquiry, isErrorEmail: false, isEmailInvalid: false });
    }
  };

  const handleInputChange = async (eventOrValue:React.ChangeEvent<HTMLInputElement> | string) => {
    if (!eventOrValue) return;

    let name, value;

    if (typeof eventOrValue === 'string' || typeof eventOrValue === 'number') {
      name = "phone";
      value = eventOrValue;
    } else {
      const { name: inputName, value: inputValue } = eventOrValue.target;
      name = inputName;
      value = inputValue;
    }

    if (inquiry.touchedPhone == false && name === "phone") {
      setInquiry((prevForm:any) => ({ ...prevForm }));
      return;
    }

    setInquiry((prevInquiry) => ({
      ...prevInquiry,
      [name]: value,
    }));


    if (name === "firstName") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorFirstName: value === "" }));
    }

    if (name === "lastName") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorLastName: value === "" }));
    }

    if (name === "email") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorEmail: value === "" }));
    }

    if (name === "phone") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorPhone: !(isPhoneValid(value)) }));
    }
  };

  const handleSubmitEmail = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let { lastName, firstName, email, phone, desc } = inquiry;

    if (firstName === "") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorFirstName: true }));
    } else {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorFirstName: false }));
    }
    if (lastName === "") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorLastName: true }));
    } else {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorLastName: false }));
    }
    if (email === "") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorEmail: true }));
    } else {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorEmail: false }));
    }
    if (!(isPhoneValid(inquiry.phone))) {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorPhone: true }));
    } else {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorPhone: false }));
    }

    if (lastName === "" || firstName === "" || email === "" || !(isPhoneValid(inquiry.phone))) {
      return;
    }
    setInquiry((prevInquiry) => ({ ...prevInquiry, quiryLoader: true }));

    try {
      let extraData:{
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        tourType: string;
        from: string;
        to: string;
        person: number;
        craftType: string;
        startDate: {
            time: string;
            date: string;
        };
        endDate?:{
          time: string;
          date: string;
      };
      endTimeInUTC?:string;
        startTimeInUTC: string;
        isExtraData: boolean;
        isPet?:boolean;
      isChild?:boolean;
      baggage?:string[];
      youself?:string;
      requirement?:string
    } = {
        firstName,
        lastName,
        email,
        phone,
        tourType: form.tourType,
        from: form.fromLocation,
        to: form.toLocation,
        person: form.counter,
        craftType: form.aircraft,
        startDate: {
          time: getTime(form.startDate),
          date: new Date(form.startDate).toLocaleDateString(),
        },
        startTimeInUTC: getUTCTime(form.startDate),
        isExtraData: extraInfo.show,
      };

      if (form.tourType === "roundTrip") {
        extraData.endDate = {
          time: getTime(form.endDate),
          date: new Date(form.endDate).toLocaleDateString(),
        };


        extraData.endTimeInUTC = getUTCTime(form.endDate);
      }
      let dataBody:{
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        custom_properties: {
            trip_purpose: string | null;
            baggage: string | null;
            travelling_with_pets: string | null;
            travel_with_children_under_3: string | null; 
        };
    } = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phone": phone,
        custom_properties: {
          "trip_purpose": null,
          "baggage": null,
          "travelling_with_pets": null,
          "travel_with_children_under_3": null
        }
      };


      if (extraInfo.show) {
        extraData.isPet = extraInfo.pet;
        extraData.isChild = extraInfo.child;
        extraData.baggage = extraInfo.baggage;
        extraData.youself = aboutInfo[extraInfo.about];
        extraData.requirement = desc;

        dataBody.custom_properties = {
          "trip_purpose": aboutInfo[extraInfo.about] == "Other" ? desc : aboutInfo[extraInfo.about],
          "baggage": extraInfo.baggage ? "Yes" : "No",
          "travelling_with_pets": extraInfo.pet ? "Yes" : "No",
          "travel_with_children_under_3": extraInfo.child ? "Yes" : "No"
        };
      }


      const options1 = {
        method: "POST",

        body: JSON.stringify(dataBody),
      };
      if(!process.env.NEXT_PUBLIC_ZAPIER_SEND_INQUIRY) return

      await fetch(process.env.NEXT_PUBLIC_ZAPIER_SEND_INQUIRY, options1);


      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(extraData),
      };
      let response2 = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sendEmail`, options);
      response2 = await response2.json();
      if (response2) {
        setInquiry((prevInquiry) => ({ ...prevInquiry, quiryLoader: false }));

        // Send event to GA4
        window.gtag('event', 'submit', {
          'event_category': 'Form',
          'event_label': 'Quote Form',
        });

        window.location.href = "https://jetlevel.com/thank-you/"
      }

    } catch (error) {
      console.error("error", error);
    }
  };

  const showPrice = async (priceArr:any) => {
    let { email, lastName, firstName, phone, desc } = inquiry;
    if (email === "") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorEmail: true }));
    } else {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorEmail: false }));
    }
    if (firstName === "") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorFirstName: true }));
    } else {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorFirstName: false }));
    }
    if (lastName === "") {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorLastName: true }));
    } else {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorLastName: false }));
    }
    if (!(isPhoneValid(inquiry.phone))) {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorPhone: true }));
    } else {
      setInquiry((prevForm:any) => ({ ...prevForm, isErrorPhone: false }));
    }
    if (email === "" || lastName === "" || firstName === "" || !(isPhoneValid(inquiry.phone))) {
      return;
    }
    
    let extraData:{
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      tourType: string;
      from: string;
      to: string;
      person: number;
      craftType: string;
      startDate: {
          time: string;
          date: string;
      };
      endDate?:{
        time: string;
        date: string;
    };
    price:string;
    endTimeInUTC?:string;
      startTimeInUTC: string;
      isExtraData: boolean;
      isPet?:boolean;
    isChild?:boolean;
    baggage?:string[];
    youself?:string;
    requirement?:string
  } = {
      firstName,
      lastName,
      email,
      phone,
      tourType: form.tourType,
      from: form.fromLocation,
      to: form.toLocation,
      person: form.counter,
      craftType: form.aircraft,
      price: `${getPrice(priceArr[0])} - ${getPrice(priceArr[1])} USD *`,
      startDate: {
        time: getTime(form.startDate),
        date: new Date(form.startDate).toLocaleDateString(),
      },
      startTimeInUTC: getUTCTime(form.startDate),

      isExtraData: extraInfo.show,

    };

    if (form.tourType === "roundTrip") {
      extraData.endDate = {
        time: getTime(form.endDate),
        date: new Date(form.endDate).toLocaleDateString(),
      };
      extraData.endTimeInUTC = getUTCTime(form.endDate);
    }
    try {
      setLoading(true);

      let dataBody:{
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        custom_properties: {
            trip_purpose: string | null;
            baggage: string | null;
            travelling_with_pets: string | null;
            travel_with_children_under_3: string | null; 
        };
    }  = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phone": phone,
        custom_properties: {
          "trip_purpose": null,
          "baggage": null,
          "travelling_with_pets": null,
          "travel_with_children_under_3": null
        }
      };

      if (extraInfo.show) {
        extraData.isPet = extraInfo.pet;
        extraData.isChild = extraInfo.child;
        extraData.baggage = extraInfo.baggage;
        extraData.youself = aboutInfo[extraInfo.about];
        extraData.requirement = desc;

        dataBody.custom_properties = {
          "trip_purpose": aboutInfo[extraInfo.about] == "Other" ? desc : aboutInfo[extraInfo.about],
          "baggage": extraInfo.baggage ? "Yes" : "No",
          "travelling_with_pets": extraInfo.pet ? "Yes" : "No",
          "travel_with_children_under_3": extraInfo.child ? "Yes" : "No"
        };
      }

      const options1 = {
        method: "POST",
        
        body: JSON.stringify(dataBody),
      };
      if(!process.env.NEXT_PUBLIC_ZAPIER_SHOW_PRICE) {return}
      await fetch(process.env.NEXT_PUBLIC_ZAPIER_SHOW_PRICE, options1);

      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(extraData),
      };
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/sendPriceEmail`,
        options,
      );
      response = await response.json();
      if (response) {
        let allElem = document.querySelectorAll(".price-btn");
        allElem.forEach((e) => {
          (e as HTMLElement).style.filter = "blur(0px)";
        });
      }
      
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'submit', {
          event_category: 'Form',
          event_label: 'Quote Form',
        });
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleInquiryForm = (index:number, aircraft:string) => {
    setForm((prevfrom) => ({
      ...prevfrom,
      aircraft: aircraft,
      showInquiryForm: prevfrom.showInquiryForm === index ? -1 : index,
    }));
  };

  const handleExtraInfo = (type:string, index:string|number) => {
    if (type === "baggage" ) {
      if (!extraInfo.baggage.includes(index as never)) {
        setExtraInfo((prevInfo:any) => ({
          ...prevInfo,
          baggage: [...prevInfo.baggage, index],
        }));
      } else {
        setExtraInfo((prevInfo) => ({
          ...prevInfo,
          baggage: extraInfo.baggage.filter((item) => item !== index),
        }));
      }
    } else {
     
      setExtraInfo((prevInfo) => ({ ...prevInfo, [type]: index }));
    }
  };

  const isPhoneValid = (phone:string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };
    
  return (
    <>
      {/* <LeadForm /> */}
        <div className="aircraft-list-container">
          <div>
            <h3>Your Estimates Are Below</h3>
            <p><span>Please Note:</span> These are not formal quotes.Dec 31 2024</p>
            <p>({searchParams.get('from')}) to ({searchParams.get('to')}) {searchParams.get('counter')} passengers</p>
          </div>
          {data &&
            data.map((item:any, index:any) => (
              <section key={index} className="jet-section">
                <div className="jet-card">
                  <div>
                    <img src={item.img1} alt="jet" />
                  </div>
                  <div>
                    <img src={item.img2} alt="jet" />
                  </div>
                  <div className="content">
                    <h3>{item.type}</h3>
                    <p className="person greay-text">
                      <PersonIcon /> {item.capacity}
                    </p>
                    <p className="greay-text">
                      Est. flight time: {convertTimeFormat(item.time)}
                    </p>
                    <p className="greay-text">
                      {form.fromLocation} - {form.toLocation}
                    </p>
                  </div>
                  <div className="price-btn-box">
                    <button
                      disabled={form.showInquiryForm === index}
                      onClick={() => {
                        // sendHeightToParent();
                        handleInquiryForm(index, item.type);
                      }}
                      className="btn price-btn"
                    >
                      {item.cost && (
                        <span>
                          {getPrice(item.cost[0])} - {getPrice(item.cost[1])}{" "}
                          USD *
                        </span>
                      )}
                      Inquiry
                    </button>
                    <p className="greay-text">
                      * Estimated Price before taxes & fees
                    </p>
                  </div>
                </div>
                {form.showInquiryForm === index && (
                  <>
                    <div className="inquiry-header">
                      <p>Please provide your contact details here.</p>
                      <CloseIcon
                        className="close-icon"
                        onClick={() => {
                          handleInquiryForm(-1, "");
                        }}
                      />
                    </div>
                 
                    <>
                      <div className="inqiury-form">
                        <div
                          className={
                            inquiry.isErrorFirstName
                              ? "location-field inqiury error-field"
                              : "location-field inqiury"
                          }
                        >
                          <PersonIcon />
                          <input
                            type="text"
                            placeholder="First Name"
                            value={inquiry.firstName}
                            onChange={handleInputChange}
                            name="firstName"
                          />
                          {inquiry.isErrorFirstName && (
                            <p className="error-message inquiry-error">
                              First Name is required{" "}
                            </p>
                          )}
                        </div>

                        <div
                          className={
                            inquiry.isErrorLastName
                              ? "location-field inqiury error-field"
                              : "location-field inqiury"
                          }
                        >
                          <PersonIcon />
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={inquiry.lastName}
                            onChange={handleInputChange}
                            name="lastName"
                          />
                          {inquiry.isErrorLastName && (
                            <p className="error-message inquiry-error">
                              Last Name is required{" "}
                            </p>
                          )}
                        </div>
                        <div
                          className={
                            inquiry.isErrorEmail
                              ? "location-field inqiury error-field"
                              : "location-field inqiury"
                          }
                        >
                          <EmailIcon />
                          <input
                            type="email"
                            required
                            placeholder="Email"
                            value={inquiry.email}
                            onChange={handleInputChange}
                            onBlur={handleEmailValidation}
                            name="email"
                          />
                          {inquiry.isErrorEmail && (
                            <p className="error-message inquiry-error">
                              {inquiry.isEmailInvalid ? "Invalid email format" : "Email is required"}
                            </p>
                          )}
                        </div>
                        <div
                          onClick={() => {
                            setInquiry((prevInquiry) => ({ ...prevInquiry, touchedPhone: true }));
                          }} // Set touchedPhone to true on click
                          className={
                            inquiry.isErrorPhone
                              ? "inqiury error-field"
                              : "inqiury"
                          }
                        >
                        
                          <PhoneInput
                            required
                            name="phone"
                            defaultCountry="us"
                            value={inquiry.phone}
                            onChange={handleInputChange}
                            className="phoneNumber"
                            preferredCountries={["us", "gb"]}
                          />

                          {inquiry.isErrorPhone && (
                            <p className="error-message inquiry-error">
                              Invalid Phone Number
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-left">
                        <h2>Additional Details (Optional)</h2>
                        <p style={{ marginTop: "15px", marginBottom: "15px" }}>
                          Help us streamline your booking experince
                        </p>
                        <button
                          onClick={() => {
                            // sendHeightToParent();
                            setExtraInfo((prevInfo) => ({
                              ...prevInfo,
                              show: false,
                            }));
                          }}
                          className={
                            !extraInfo.show
                              ? "active mr-10"
                              : "not-active mr-10"
                          }
                        >
                          Hide
                        </button>
                        <button
                          onClick={() => {
                            // sendHeightToParent();
                            setExtraInfo((prevInfo) => ({
                              ...prevInfo,
                              show: true,
                            }));
                          }}
                          className={extraInfo.show ? "active" : "not-active"}
                        >
                          Show
                        </button>
                        {extraInfo.show && (
                          <div className="extra-info-fields">
                            <p>Tell Us About Yourself</p>
                            <div className="craft-types">
                              {aboutInfo.map((info, index) => (
                                <p
                                  key={index}
                                  className={
                                    extraInfo.about === index
                                      ? "active"
                                      : "not-active"
                                  }
                                  onClick={() =>
                                    handleExtraInfo("about", index)
                                  }
                                >
                                  {info}
                                </p>
                              ))}
                            </div>
                            <p>Baggage (Check all that apply)</p>
                            <div className="craft-types">
                              {laggage.map((info, index) => (
                                <p
                                  key={index}
                                  className={
                                    extraInfo.baggage.includes(info as never)
                                      ? "active"
                                      : "not-active"
                                  }
                                  onClick={() =>
                                    handleExtraInfo("baggage", info)
                                  }
                                >
                                  {info}
                                </p>
                              ))}
                            </div>
                            <p>Travelling with pets</p>
                            <button
                              onClick={() =>
                                setExtraInfo((prevInfo) => ({
                                  ...prevInfo,
                                  pet: true,
                                }))
                              }
                              className={
                                extraInfo.pet
                                  ? "active mr-10"
                                  : "not-active mr-10"
                              }
                            >
                              Yes
                            </button>
                            <button
                              onClick={() =>
                                setExtraInfo((prevInfo) => ({
                                  ...prevInfo,
                                  pet: false,
                                }))
                              }
                              className={
                                !extraInfo.pet ? "active" : "not-active"
                              }
                            >
                              No
                            </button>

                            <p>Travel with children under 3 years old?</p>
                            <button
                              onClick={() =>
                                setExtraInfo((prevInfo) => ({
                                  ...prevInfo,
                                  child: true,
                                }))
                              }
                              className={
                                extraInfo.child
                                  ? "active mr-10"
                                  : "not-active mr-10"
                              }
                            >
                              Yes
                            </button>
                            <button
                              onClick={() =>
                                setExtraInfo((prevInfo) => ({
                                  ...prevInfo,
                                  child: false,
                                }))
                              }
                              className={
                                !extraInfo.child ? "active" : "not-active"
                              }
                            >
                              No
                            </button>

                            <div
                              style={{
                                marginTop: "15px",
                                marginBottom: "15px",
                              }}
                              className="location-field inqiury"
                            >
                              <TextsmsIcon />
                              <input
                                type="text"
                                placeholder="Any special request or requirements?"
                                value={inquiry.desc}
                                onChange={handleInputChange}
                                name="desc"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="inquir-btn">
                        <button
                          disabled={inquiry.isErrorEmail || inquiry.isErrorPhone}
                          className="btn search-btn"
                          onClick={handleSubmitEmail}
                        >
                          {inquiry.quiryLoader ? (<div className="search-form__loader"></div>) : ("")}
                          Send Inquiry
                        </button>
                        <button
                          disabled={inquiry.isErrorEmail || inquiry.isErrorPhone}
                          style={{ marginLeft: "5px" }}
                          className="btn search-btn"
                          onClick={() =>{
                            showPrice(item.cost)
                          }
                          }
                        >
                          {" "}
                          {loading ? (<div className="search-form__loader"></div>) : ("")}{" "}
                          Show price
                        </button>
                      </div>
                    </>
                  </>
                )}
              </section>
            ))}
        </div>
        </>
  )    
}


