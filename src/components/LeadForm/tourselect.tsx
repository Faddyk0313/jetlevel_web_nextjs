"use client"
import React, { useState, useEffect, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DatePicker from "react-datepicker";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import Modal from '../../components/Modal';
import Input from "./input";
import "@/styles/leadForm.css"
import {AirportResponse} from "./types"
import {filterPassedTime} from "./helper"
import { useRouter } from 'next/navigation';
import ReactDatePicker from "react-datepicker";
import Button from '../Button';
import AirCraftList from './AirCraftList';
export default function TourSelect (props:any) {
  const {formInfo,setFormInfo, widget } = props
  const router = useRouter();

  const [openModal,setOpenModal] = useState(false);

  const [searchResults, setSearchResults] = useState({
    fromLocationArray: [],
    toLocationArray: [],
  });
  const [showTime, setShowTime] = useState(false); // State to toggle between date and time picker
  const [isMobile, setIsMobile] = useState(false); // State to track screen width

  const datePickerRef1 = useRef<ReactDatePicker>(null);
  const datePickerRef2 = useRef<ReactDatePicker>(null);

  
  useEffect(() => {
    if (formInfo.fromLocation.length === 0) {
      setSearchResults((prevSearc) => ({
        ...prevSearc,
        fromLocationArray: [],
      }));
    }
    if (formInfo.toLocation.length === 0) {
      setSearchResults((prevSearc) => ({ ...prevSearc, toLocation: [] }));
    }
  }, [formInfo.fromLocation, formInfo.toLocation]);



  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateIsMobile = () => {
        setIsMobile(window.innerWidth < 340);
      };

      // Initial check
      updateIsMobile();

      // Add resize listener
      window.addEventListener("resize", updateIsMobile);

      return () => {
        window.removeEventListener("resize", updateIsMobile);
      };
    }
  }, []);

  useEffect(() => {
    const updatePopperStyle = () => {
      const popper: HTMLElement|null = document.querySelector(".react-datepicker-popper");
      if (popper) {
        popper.style.display = showTime ? "block" : "none";
      }
    };

    // Update style when `showTime` changes
    updatePopperStyle();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 340);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check the initial width

  }, [showTime]);


  const handleInputChange = async (event:any) => {
    const { name, value } = event.target; 
    setFormInfo({
      ...formInfo,
      [name]: value,
    });

    if (name === "fromLocation") {
      if (value === "") {
        setSearchResults((prevSearc) => ({
          ...prevSearc,
          fromLocationArray: [],
        }));
        setFormInfo((prevForm:any) => ({ ...prevForm, isErrorFrom: true }));
      } else {
        setFormInfo((prevForm:any) => ({ ...prevForm, isErrorFrom: false }));
      }
      if (value.length >= 3) {
      
        const options = {
          method: "GET",
          params: { query: value },
         
        };
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/search?` +
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
        setFormInfo((prevForm:any) => ({ ...prevForm, isErrorTo: true }));
      } else {
        setFormInfo((prevForm:any) => ({ ...prevForm, isErrorTo: false }));
      }
      if (value.length >= 3) {
        const options = {
          method: "GET",
          params: { query: value },
        };

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/search?` +
            new URLSearchParams({ query: value }),
            options
          );
    if (!response.ok) {
     console.error(`Fetch error: ${response.statusText}`);
     return
    }
    const data: AirportResponse = await response.json();

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

  const handleCounter = (type:string) => {
    if (type === "add") {
      setFormInfo((prevForm:any) => ({
          ...prevForm,
          counter: Number(prevForm.counter) + 1,
        }))
       
    } else {
      if (formInfo.counter > 0) {
           setFormInfo((prevForm:any) => ({
            ...prevForm,
            counter: Number(prevForm.counter) - 1,
          }))
         
      }
    }
  };


  const handleSaveAirport = (name:any, type:any) => {
    if (type === "fromLocation") {
      setFormInfo((prevForm:any) => ({
        ...prevForm,
        fromLocation: name,
      }));
      setSearchResults((prevSearch) => ({
        ...prevSearch,
        fromLocationArray: [],
      }));
    } else {
      setFormInfo((prevForm:any) => ({
        ...prevForm,
        toLocation: name,
      }));
      setSearchResults((prevSearch) => ({
        ...prevSearch,
        toLocationArray: [],
      }));
      datePickerRef1.current!.setOpen(true);
    }
  };
  // Handle date and time selection
  const handleChange = () => {
    if (isMobile) {
      if (!showTime) {
        setShowTime(true); // Switch to time picker after selecting the date
        // To show timeBox on right side of datepicker input 
        (document.querySelector(".react-datepicker-popper") as HTMLElement).style.cssText += " left: calc(100% - 87px) !important;";
      } else {
        setShowTime(false); // After selecting time, close the picker
      }
    }
  };

  const handleDatePicker1Close = () => {
    if (formInfo.tourType === "roundTrip") {
      datePickerRef2.current!.setOpen(true); // Open the second DatePicker
    }
  };

  const handleSearch = () => {  
    const currentUrl = new URL(window.location.href);
  
    currentUrl.searchParams.set('from', formInfo.fromLocation);
    currentUrl.searchParams.set('to', formInfo.toLocation);
    currentUrl.searchParams.set('tourType', formInfo.tourType);
    currentUrl.searchParams.set('counter', formInfo.counter.toString());
    currentUrl.searchParams.set('startDate', new Date(formInfo.startDate).getTime().toString());
  
    if (formInfo.tourType === 'roundTrip') {
      currentUrl.searchParams.set('endDate', new Date(formInfo.endDate).getTime().toString());
    }
  
    window.history.pushState(null, '', currentUrl.toString());
  
    setOpenModal(true);
  };
  

  const CustomInput = React.forwardRef((arg:any, ref:any) => (
    <div className="custom-input" onClick={arg.onClick} ref={ref}>
      <div className="icon">
        <DateRangeRoundedIcon />
      </div>
      <div className="date-input">
        <div className="date">{arg.value.split("|")[0]}</div>
        <div className="time">{arg.value.split("|")[1]}</div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="p-0">
        <div className={`${widget ? 'tour-select-fields widget-fields' : 'tour-select-fields'}`}>
          <Input
            form={formInfo}
            handleSaveAirport={handleSaveAirport}
            handleInputChange={handleInputChange}
            searchResults={searchResults}
          />
          <div className="date-time-picker">
            <DatePicker
              selected={formInfo.startDate}
              ref={datePickerRef1}
              onCalendarClose={handleDatePicker1Close} 
              onChange={(date) => {
                setFormInfo((prevForm:any) => ({ ...prevForm, startDate: date }));
                handleChange();
              }}
              name="startDate"
              showTimeSelect={isMobile ? showTime : true} // Toggle time picker visibility based on state
              timeFormat="HH:mm"
              className="date-picker-format"
              timeIntervals={15}
              customInput={<CustomInput />}
              timeInputLabel="Time:"
              dateFormat="yyyy-MM-dd|HH:mm"
              minDate={new Date()}
              // popperPlacement="bottom-end"
              filterTime={filterPassedTime}
              shouldCloseOnSelect={!isMobile} // Close when selecting the date if not mobile
              showTimeSelectOnly={isMobile ? showTime : false} // Show only time picker when time is being selected on mobile
              onClickOutside={() => {
                if (isMobile) {
                  setShowTime(false);
                }
              }}
            />
          </div>
          {formInfo.tourType === "roundTrip" && (
            <div
              id="roundTripDatePicker"
              className="date-time-picker"
            >
              <DatePicker
                selected={formInfo.endDate}
                ref={datePickerRef2}
                onChange={(date) => {
                  setFormInfo((prevForm:any) => ({ ...prevForm, endDate: date }));
                  handleChange();
                }}
                name="endDate"
                showTimeSelect={isMobile ? showTime : true} // Toggle time picker visibility based on state
                timeFormat="HH:mm"
                className="date-picker-format"
                timeIntervals={15}
                customInput={<CustomInput />}
                timeInputLabel="Time:"
                dateFormat="yyyy-MM-dd|HH:mm"
                minDate={new Date()}
                filterTime={filterPassedTime}
                shouldCloseOnSelect={!isMobile} // Close when selecting the date if not mobile
                showTimeSelectOnly={isMobile ? showTime : false} // Show only time picker when time is being selected on mobile
                onClickOutside={() => {
                  if (isMobile) {
                    setShowTime(false);
                  }
                }}
              />
            </div>
          )}

          <div className="person-counter">
            <PersonIcon />
            <div className="counter">
              <RemoveIcon onClick={() => handleCounter("sub")} />
              <p>{formInfo.counter}</p>
              <AddIcon onClick={() => handleCounter("add")} />
            </div>
          </div>
        </div>
      </section>
      <div className="search-btn">
        {
          widget ? 
          <Button
            text={'Search'}
            variant={'primary'}
            className='w-full'
            onClick={handleSearch}
          />
        :
        <button
          className={"btn"}
          onClick={handleSearch}
        >
           Search{" "}
        </button>
        }

        <Modal 
          isOpen={openModal} 
          onClose={() => setOpenModal((prevModal) => !prevModal)}
          modalWidth={1000}
          className='h-[600px]' 
        >
          <div className='h-full overflow-auto overflow-design'>
            <AirCraftList setOpenModal={setOpenModal} />
          </div>
        </Modal>
      </div>

      {/* <Modalp */}
    </>
  );
};

