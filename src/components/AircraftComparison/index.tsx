import "./aircraft.css";
import React, { useEffect, useState } from "react";

const AircraftComparison = () => {
  const aircraftData = [1, 2, 3];

  const [aircraftList, setAircraftList] = useState([]);
  useEffect(() => {
    async function init() {
      let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllAircraft`);
      res = await res.json();
      setAircraftList(res.data);
    }
    init();
  }, []);
 




  window.onclick = function(event) {
    let arr = ["compare-item__select", "multiselect", "multiselect__select", "multiselect__single_span","multiselect__tags", "multiselect__input","multiselect__single","multiselect__content-wrapper"]
    if (!arr.includes(event.target.className)) {
      
      let allElement = document.querySelectorAll(`.multiselect`);
      allElement.forEach((e) => {
      e.classList.remove("multiselect--active");
      })


      let input = document.querySelectorAll(".multiselect__input");
      input.forEach((e) => {
      e.style.width = "0px";
      e.style.position = "absolute";
      e.style.padding = "0px";
      })


      let allPlaceHolders = document.querySelectorAll(".multiselect__single")
      allPlaceHolders.forEach((e)=>{
      e.style.display = ""; // display placeholder
      })

      let allElem = document.querySelectorAll(".multiselect__content-wrapper")
      allElem.forEach((e) => {
      e.style.display = "none"; // disappear aircraft list
      })
  }
}

  return (
        <div className="compare-row">
          {aircraftList &&
            aircraftData.map((_, index) => (
              <AircraftItem key={index} id={index + 1} data={aircraftList} />
            ))}
        </div>
  );
};

export default AircraftComparison;

const AircraftItem = ({ id, data }) => {
  const [aircraftData, setAircraftData] = useState({
    "Aircraft_name": "Aerospatiale ATR42-300",
  "RANGE": "1700 nm",
  "MAX_PASSENGERS": 50,
  "CRUISE_SPEED": "255 KTAS",
  "RENTAL_RATE": "20,400 USD",
  "MANUFACTURER": "Aerospaitiale",
  "BAG_CAPACITY": "175 ft³",
  "CABIN_LENGTH": "63 ft",
  "CABIN_WIDTH": "8.4 ft",
  "CABIN_HEIGHT": "6.3 ft",
  "PRICE_PER_HOUR": "20,400 USD"
}
  );
  const [aircraftName, setAircraftName] = useState({
    Aircraft_name: "Aerospatiale ATR42-300",
  });
  const [allAirCraft,setAllAircraft] = useState([])
  useEffect(()=>{
    setAllAircraft(data)
  },[data])
async function handleSaveName(airData) {
  setAircraftName({Aircraft_name:airData.Aircraft_name,_id:airData._id})
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getAircraft/${airData._id}`
    );
    res = await res.json();
    setAircraftData(res.data);
    
}

async function handleClick(id) {
  let elementAll = document.querySelectorAll(".multiselect")
 elementAll.forEach((e)=>{
  if(e.id != `multiselect-${id}`){
    e.classList.remove("multiselect--active");
    
   
  }
 })
 let _inputs = document.querySelectorAll(".multiselect__input");
 _inputs.forEach((e)=>{
  if(e.id != `multiselect__input-${id}`){
    e.style.width = "0px";
    e.style.position = "absolute";
    e.style.padding = "0px";
  }
 })





    let allMultiSingle = document.querySelectorAll(".multiselect__single")
    allMultiSingle.forEach((e)=>{
      if(e.id!= `multiselect__single-${id}`){
        e.style.display = ""; // display placeholder
      }
    })
    

     let allMultiSelect = document.querySelectorAll(
      ".multiselect__content-wrapper"
    )
    allMultiSelect.forEach((e)=>{
      if(e.id!= `multiselect__content-wrapper-${id}`){
        e.style.display = "none"; // disappear aircraft list
      }
    })




  let element = document.querySelector(`#multiselect-${id}`);
  
  if (element.classList.contains("multiselect--active")) {
    element.classList.remove("multiselect--active");
    
    let input = document.querySelector("#multiselect__input-" + id);
    input.style.width = "0px";
    input.style.position = "absolute";
    input.style.padding = "0px";
    
    document.querySelector("#multiselect__single-" + id).style.display = ""; // display placeholder

     document.querySelector(
      "#multiselect__content-wrapper-" + id
    ).style.display = "none"; // disappear aircraft list
  } else {
    element.classList.add("multiselect--active");

    let input = document.querySelector("#multiselect__input-" + id);
    input.removeAttribute("style");
    input.style.outline = "none";
    input.style.border = "none";
    input.focus()

    document.querySelector("#multiselect__single-" + id).style.display = "none"; // disappear placeholder
    
     document.querySelector(
      "#multiselect__content-wrapper-" + id
    ).style.display = ""; // display aircraft list
  }

}

  function handleChange(word){
    let result = data.filter((item)=>item.Aircraft_name.toLowerCase().includes(word.toLowerCase()))
    setAllAircraft(result)
  }
  return (
    <div className="compare-item" >
      <div className="compare-item__select" onClick={() => handleClick(id)}>
        <div tabIndex="-1" className="multiselect" id={"multiselect-" + id} >
          <div className="multiselect__select">

          </div>
          <div className="multiselect__tags">
            {/* <div className="multiselect__tags-wrap"></div> */}
            {/* <div className="multiselect__spinner"></div> */}
            <input
              name=""
              id={"multiselect__input-" + id}
              type="text"
              autoComplete="nope"
              placeholder=""
              tabIndex="0"
              style={{
                width: "0px",
                position: "absolute",
                padding: "0px",
              }}
              className="multiselect__input"
              onChange={(e)=>handleChange(e.target.value)}
            />
            <span
              className="multiselect__single"
              id={"multiselect__single-" + id}
            >
              <span className="multiselect__single_span">{aircraftName.Aircraft_name}</span>
            </span>
          </div>
          <div className="multiselect__content-wrapper"
            tabIndex="-1"
            id={"multiselect__content-wrapper-" + id}
            style={{ display: "none", maxHeight: "264.8px" }}
          >
            <ul className="multiselect__content">
              {allAirCraft && allAirCraft.map((item, index) => (
                <li
                  className="multiselect__element"
                  key={index}
                  onClick={() => handleSaveName(item)}
                >
                  <span
                    data-select=""
                    data-selected=""
                    data-deselect=""
                    className="multiselect__option"
                  >
                    <span>{item.Aircraft_name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {aircraftData?(
      <div className="compare-item__body">
      
        <div className="compare-item__group compare-item__group--featured">
        <h3>Key Features</h3>

          <ul>
            <li>
              <span>Range</span>
              <span>{aircraftData.RANGE}</span>
            </li>
            <li>
              <span>Max Passengers</span>
              <span>{aircraftData.MAX_PASSENGERS}</span>
            </li>
            <li>
              <span>Cruise Speed</span>
              <span>{aircraftData.CRUISE_SPEED}</span>
            </li>
            <li>
              <span>Rental Rate</span>
              <span>{aircraftData.RENTAL_RATE}</span>
            </li>
          </ul>
        </div>
        <div className="compare-item__group">
          <h3>Manufacturing Details</h3>
          <ul>
            <li>
              <span>Manufacturer</span> <span>{aircraftData.MANUFACTURER}</span>
            </li>
          </ul>
        </div>
        <div className="compare-item__group">
          <h3>Aircraft Size</h3>
          <ul>
            <li>
              <span>Bag. Capacity</span> <span>{aircraftData.BAG_CAPACITY}</span>
            </li>
          </ul>
        </div>

        <div className="compare-item__group">
          <h3>Cabin Size</h3>
          <ul>
            <li>
              <span>Cabin Length</span> <span>{aircraftData.CABIN_LENGTH}</span>
            </li>
            <li>
              <span>Cabin Width</span> <span>7{aircraftData.CABIN_WIDTH}</span>
            </li>
            <li>
              <span>Cabin Height</span> <span>{aircraftData.CABIN_HEIGHT}</span>
            </li>
          </ul>
        </div>

        <div className="compare-item__group compare-item__group--price">
          <ul>
            <li>
              <span>Price per Hour</span> <span>{aircraftData.PRICE_PER_HOUR}</span>
            </li>
          </ul>
        </div>
        <button  onClick={()=>{
          window.parent.postMessage(
            {
              url: "/request-a-quote/",
              type: "url",
            },
            "*"
          );
        }} className="btn-compair btn--border compare-item__cta">
          Quote for {aircraftData.Aircraft_name}
        </button>
      </div>
      ):null}
    </div>
  );
};



