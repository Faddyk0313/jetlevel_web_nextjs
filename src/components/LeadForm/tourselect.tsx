"use client"
import React, { useState, useEffect, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DatePicker from "react-datepicker";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import Input from "./input";
import "@/styles/leadForm.css"

const TourSelect = ({ form, setForm, loading, setLoading, data, setData }) => {
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

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (event.target.name === "fromLocation") {
      if (value === "") {
        setSearchResults((prevSearc) => ({
          ...prevSearc,
          fromLocationArray: [],
        }));
        setForm((prevForm) => ({ ...prevForm, isErrorFrom: true }));
      } else {
        setForm((prevForm) => ({ ...prevForm, isErrorFrom: false }));
      }
      if (value.length >= 3) {
      
        const options = {
          method: "GET",
          params: { query: value },
         
        };
        try {
          let response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/search?` +
            new URLSearchParams({ query: value }),
            options
          );
          response = await response.json();
          setSearchResults((prevSearc) => ({
            ...prevSearc,
            fromLocationArray: response && response.search,
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

    if (event.target.name === "toLocation") {
      if (value === "") {
        setSearchResults((prevSearc) => ({
          ...prevSearc,
          ToLocationArray: [],
        }));
        setForm((prevForm) => ({ ...prevForm, isErrorTo: true }));
      } else {
        setForm((prevForm) => ({ ...prevForm, isErrorTo: false }));
      }
      if (value.length >= 3) {
        const options = {
          method: "GET",
          params: { query: value },
          // headers: {
          //   "X-RapidAPI-Key":
          //     "146d1310aemsh0f446201add2996p1f7627jsn8a05e29a1300",
          //   "X-RapidAPI-Host": "flight-time-estimation1.p.rapidapi.com",
          // },
        };

        try {
          let response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/search?` +
            new URLSearchParams({ query: value }),
            options
          );
          response = await response.json();
          console.log(response);
          setSearchResults((prevSearc) => ({
            ...prevSearc,
            toLocationArray: response && response.search,
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

  const handleCounter = (type, counterType) => {
    if (type === "add") {
      counterType === "counter"
        ? setForm((prevForm) => ({
          ...prevForm,
          counter: prevForm.counter + 1,
        }))
        : setForm((prevForm) => ({
          ...prevForm,
          calenderCounter: prevForm.calenderCounter + 1,
        }));
    } else {
      if (form.counter > 0) {
        counterType === "counter"
          ? setForm((prevForm) => ({
            ...prevForm,
            counter: prevForm.counter - 1,
          }))
          : setForm((prevForm) => ({
            ...prevForm,
            calenderCounter: prevForm.calenderCounter - 1,
          }));
      }
    }
  };
  const datePickerRef1 = useRef(null);
  const datePickerRef2 = useRef(null);


  const handleSaveAirport = (name, municipality, nameAirport, type) => {
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
      datePickerRef1.current.setOpen(true);
    }
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="custom-input" onClick={onClick} ref={ref}>
      <div className="icon">
        <DateRangeRoundedIcon />
      </div>
      <div className="date-input">
        <div className="date">{value.split("|")[0]}</div>
        <div className="time">{value.split("|")[1]}</div>
      </div>
    </div>
  ));

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
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllJetInfo/${form.fromLocation}/${form.toLocation}/${form.tourType}`,
        options
      );
      response = await response.json();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      // setError(error);
      setLoading(false);
    }
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };


  const [showTime, setShowTime] = useState(false); // State to toggle between date and time picker
  const [isMobile, setIsMobile] = useState(false); // State to track screen width


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
      const popper = document.querySelector(".react-datepicker-popper");
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

  // Handle date and time selection
  const handleChange = () => {
    if (isMobile) {
      if (!showTime) {
        setShowTime(true); // Switch to time picker after selecting the date
        // To show timeBox on right side of datepicker input 
        document.querySelector(".react-datepicker-popper").style.cssText += " left: calc(100% - 87px) !important;";
      } else {
        setShowTime(false); // After selecting time, close the picker
      }
    }
  };

  const handleDatePicker1Close = () => {
    if (form.tourType === "roundTrip") {
      datePickerRef2.current.setOpen(true); // Open the second DatePicker
    }
  };

  return (
    <>
      <section className="p-0">
        <div className="tour-select-fields">
          <Input
            form={form}
            handleSaveAirport={handleSaveAirport}
            handleInputChange={handleInputChange}
            searchResults={searchResults}
          />
          <div className="date-time-picker">
            <DatePicker
              selected={form.startDate}
              ref={datePickerRef1}
              onCalendarClose={handleDatePicker1Close} 
              onChange={(date) => {
                setForm((prevForm) => ({ ...prevForm, startDate: date }));
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
          {form.tourType === "roundTrip" && (
            <div
              id="roundTripDatePicker"
              className="date-time-picker"
            >
              <DatePicker
                selected={form.endDate}
                ref={datePickerRef2}
                onChange={(date) => {
                  setForm((prevForm) => ({ ...prevForm, endDate: date }));
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
              <RemoveIcon onClick={() => handleCounter("sub", "counter")} />
              <p>{form.counter}</p>
              <AddIcon onClick={() => handleCounter("add", "counter")} />
            </div>
          </div>
        </div>
      </section>
      <div className="search-btn">
        <button
          className="btn"
          onClick={() => {
            handleSubmit();
          }}
        >
          {loading ? <div className="search-form__loader"></div> : ""} Search{" "}
        </button>
      </div>
    </>
  );
};

export default TourSelect;
