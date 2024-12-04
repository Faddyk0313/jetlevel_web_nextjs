"use client";
import React, { useState, useEffect } from "react";
import TourSelect from "./tourselect";
// import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TextsmsIcon from "@mui/icons-material/Textsms";
import CloseIcon from "@mui/icons-material/Close";
import "react-datepicker/dist/react-datepicker.css";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';
import "@/styles/leadForm.css"
const getPrice = (amount:string) => {
  let decimalAmount = parseFloat(amount).toFixed(2);
  decimalAmount = parseFloat(decimalAmount);
  let finalAmount = decimalAmount.toLocaleString("en-US");
  return finalAmount;
};

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
const convertTimeFormat = (time:string) => {
  const floatTime = parseFloat(time);
  const hours = Math.floor(floatTime);
  const decimalPart = floatTime - hours;

  const minutes = Math.round(decimalPart * 60);

  return `${hours} hours ${minutes} minutes`;
};

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState([]);

  const getNext15Minutes = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 15) * 15;

    now.setMinutes(roundedMinutes);
    now.setSeconds(0); // Reset seconds to 0
    now.setMilliseconds(0); // Reset milliseconds to 0

    return now;
  };

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
    calenderCounter: 1,
    currency: "USD",
    showInquiryForm: -1,
    aircraft: 0,
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

  const [extraInfo, setExtraInfo] = useState({
    show: true,
    craftType: 0,
    about: 0,
    baggage: [],
    pet: false,
    child: false,
    time: "",
  });

  useEffect(() => {
    handlePreFilled();
  
  }, []);


  let aboutInfo = [
    "Booking For Personal Travel",
    "Booking For Business Travel",
    "Travel Agent / Conceirge /Personal Assist",
    "Other",
  ];
  let laggage = [
    "XL Suitcases",
    "Ski / Ski Bag",
    "Firearm",
    "Medical Equipement",
  ];
  let { tourType } = form;

  const handleInquiryForm = (index, aircraft) => {
    setForm((prevfrom) => ({
      ...prevfrom,
      aircraft: aircraft,
      showInquiryForm: prevfrom.showInquiryForm === index ? -1 : index,
    }));
  };

  const handleTourChange = (type) => {
    setForm((prevForm) => ({ ...prevForm, tourType: type }));
  };

  const handlePreFilled = async () => {
    let q = new URLSearchParams(window.location.search);
    let to = q.get("to");
    let from = q.get("from");

    try {
      if (to != null && from != null) {
        form.fromLocation = from;
        form.toLocation = to;
        form.tourType = "oneWay";
      } else {
        return;
      }
      setLoading(true);
      const options = {
        method: "GET",

      };
     
      let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllJetInfo/${form.fromLocation}/${form.toLocation}/${form.tourType}`, options);
      response = await response.json();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      // setError(error);
      setLoading(false);
    }
  };

  const handleInputChange = async (eventOrValue) => {
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
    // console.log("Hello", phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(inquiry.value)));

    if (inquiry.touchedPhone == false && name === "phone") {
      setInquiry((prevForm) => ({ ...prevForm }));
      return;
    }

    setInquiry((prevInquiry) => ({
      ...prevInquiry,
      [name]: value,
    }));

    // console.log("Hello", (isPhoneValid(value)));
    // console.log("hi", !(isPhoneValid(value)));

    if (name === "firstName") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorFirstName: value === "" }));
    }

    if (name === "lastName") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorLastName: value === "" }));
    }

    if (name === "email") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorEmail: value === "" }));
    }

    if (name === "phone") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorPhone: !(isPhoneValid(value)) }));
    }
    // console.log("Hola", inquiry.isErrorPhone);
  };

  const handleExtraInfo = (type, index) => {
    if (type === "baggage") {
      if (!extraInfo.baggage.includes(index)) {
        setExtraInfo((prevInfo) => ({
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


  const getTime = (time) => {
    const date = new Date(time);

    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const getUTCTime = (dateObj) => {
    const date = new Date(dateObj);
    // Get the UTC time as a string
    let utcTimeString = date.toUTCString();  // Fri, 20 Sep 2024 18:19:42 GMT

    // Extract only the hours and minutes
    let utcTimeWithoutSeconds = utcTimeString.split(' ')[4].slice(0, 5);  // 18:19
    return utcTimeWithoutSeconds;
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    let { lastName, firstName, email, phone, desc } = inquiry;

    if (firstName === "") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorFirstName: true }));
    } else {
      setInquiry((prevForm) => ({ ...prevForm, isErrorFirstName: false }));
    }
    if (lastName === "") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorLastName: true }));
    } else {
      setInquiry((prevForm) => ({ ...prevForm, isErrorLastName: false }));
    }
    if (email === "") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorEmail: true }));
    } else {
      setInquiry((prevForm) => ({ ...prevForm, isErrorEmail: false }));
    }
    if (!(isPhoneValid(inquiry.phone))) {
      setInquiry((prevForm) => ({ ...prevForm, isErrorPhone: true }));
    } else {
      setInquiry((prevForm) => ({ ...prevForm, isErrorPhone: false }));
    }

    if (lastName === "" || firstName === "" || email === "" || !(isPhoneValid(inquiry.phone))) {
      return;
    }
    setInquiry((prevInquiry) => ({ ...prevInquiry, quiryLoader: true }));



    try {
      let extraData = {
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
      let dataBody = {
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
      await fetch("https://hooks.zapier.com/hooks/catch/12611087/2hn9t6v/r.com/hooks/catch/19938427/2tolg6d", options1);


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

        window.location.href = response2?.redirectUri
      }

    } catch (error) {
      console.error("error", error);
    }
  };

  const showPrice = async (priceArr) => {
    let { email, lastName, firstName, phone, desc } = inquiry;
    if (email === "") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorEmail: true }));
    } else {
      setInquiry((prevForm) => ({ ...prevForm, isErrorEmail: false }));
    }
    if (firstName === "") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorFirstName: true }));
    } else {
      setInquiry((prevForm) => ({ ...prevForm, isErrorFirstName: false }));
    }
    if (lastName === "") {
      setInquiry((prevForm) => ({ ...prevForm, isErrorLastName: true }));
    } else {
      setInquiry((prevForm) => ({ ...prevForm, isErrorLastName: false }));
    }
    if (!(isPhoneValid(inquiry.phone))) {
      setInquiry((prevForm) => ({ ...prevForm, isErrorPhone: true }));
    } else {
      setInquiry((prevForm) => ({ ...prevForm, isErrorPhone: false }));
    }
    if (email === "" || lastName === "" || firstName === "" || !(isPhoneValid(inquiry.phone))) {
      return;
    }
    let extraData = {
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
      setLoading1(true);



      let dataBody = {
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
      await fetch("https://hooks.zapier.com/hooks/catch/12611087/2hn9t6v", options1);


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
      

      
      // Send event to GA4
      window.gtag('event', 'submit', {
        'event_category': 'Form',
        'event_label': 'Quote Form',
      });

      setLoading1(false);
    } catch (e) {
      setLoading1(false);
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

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone:string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
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
              onClick={() => {
                handleTourChange("oneWay");
              }}
            >
              One Way
            </p>
            <p
              className={
                tourType === "roundTrip"
                  ? "active-tab mr-10"
                  : "not-active-tab mr-10"
              }
              onClick={() => {
                // sendHeightToParent();
                handleTourChange("roundTrip");
              }}
            >
              Round Trip
            </p>
          </div>
        </div>

          <TourSelect
            form={form}
            setForm={setForm}
            loading={loading}
            setLoading={setLoading}
            data={data}
            setData={setData}
          />
      </div>
      {tourType !== "aiAssist" && (
        <div>
          {data &&
            data.map((item, index) => (
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
                          // sendHeightToParent();
                          handleInquiryForm(-1, -1);
                        }}
                      />
                    </div>
                    {/* <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) =>{
                return ( */}
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
                          {/* <PhoneAndroidIcon />
                          <input
                            type="tel"
                            required
                            placeholder="Phone(with country code if neccessary)"
                            value={inquiry.phone}
                            onChange={handleInputChange}
                            name="phone"
                          />  */}
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
                                    extraInfo.baggage.includes(info)
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
                          onClick={(e) => handleSubmitEmail(e)}
                        >
                          {inquiry.quiryLoader ? (<div className="search-form__loader"></div>) : ("")}
                          Send Inquiry
                        </button>
                        <button
                          disabled={inquiry.isErrorEmail || inquiry.isErrorPhone}
                          style={{ marginLeft: "5px" }}
                          className="btn search-btn"
                          onClick={() =>{
                            console.log("---------->",inquiry.isErrorPhone); 
                            showPrice(item.cost)
                          }
                          }
                        >
                          {" "}
                          {loading1 ? (<div className="search-form__loader"></div>) : ("")}{" "}
                          Show price
                        </button>
                      </div>
                    </>
                  </>
                )}
              </section>
            ))}
        </div>
      )}
    </div>
  );
}

