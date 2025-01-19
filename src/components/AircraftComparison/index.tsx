"use client";
import React, {
  useEffect,
  useState,
  MouseEvent as ReactMouseEvent,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import "./aircraft.css";

/** 
 * Define interfaces for your data structures.
 * Adjust the fields as needed to match your backend responses.
 */
interface Aircraft {
  _id: string;
  Aircraft_name: string;
}

interface AircraftData {
  Aircraft_name: string;
  RANGE: string;
  MAX_PASSENGERS: number;
  CRUISE_SPEED: string;
  RENTAL_RATE: string;
  MANUFACTURER: string;
  BAG_CAPACITY: string;
  CABIN_LENGTH: string;
  CABIN_WIDTH: string;
  CABIN_HEIGHT: string;
  PRICE_PER_HOUR: string;
  _id?: string; // If needed
}

const AircraftComparison: React.FC = () => {
  const [aircraftList, setAircraftList] = useState<Aircraft[]>([]);
  /** 
   * For demonstration, an array of 3 placeholders (like [1,2,3]). 
   * If you have a different source, adjust accordingly.
   */
  const aircraftData = [1, 2, 3];

  /**
   * Fetch all aircraft on mount
   */
  useEffect(() => {
    async function init() {
      const res = await fetch(
        `/api/getAllAircraft`
      );
      const data = await res.json();
      // data.data should be an array of aircraft objects
      setAircraftList(data.data);
    }
    init();
  }, []);

  /**
   * Attach a window click handler to close the dropdowns if the user clicks outside them.
   * We remove the listener on component unmount to avoid memory leaks.
   */
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement;
      const classesToIgnore = [
        "compare-item__select",
        "multiselect",
        "multiselect__select",
        "multiselect__single_span",
        "multiselect__tags",
        "multiselect__input",
        "multiselect__single",
        "multiselect__content-wrapper",
      ];

      // If the clicked element is not one of these, close all.
      if (!classesToIgnore.includes(target.className)) {
        const allElement = document.querySelectorAll(".multiselect");
        allElement.forEach((e) => {
          e.classList.remove("multiselect--active");
        });

        const inputs = document.querySelectorAll<HTMLInputElement>(
          ".multiselect__input"
        );
        inputs.forEach((e) => {
          e.style.width = "0px";
          e.style.position = "absolute";
          e.style.padding = "0px";
        });

        const allPlaceholders = document.querySelectorAll<HTMLSpanElement>(
          ".multiselect__single"
        );
        allPlaceholders.forEach((e) => {
          e.style.display = "";
        });

        const allElem = document.querySelectorAll<HTMLDivElement>(
          ".multiselect__content-wrapper"
        );
        allElem.forEach((e) => {
          e.style.display = "none";
        });
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

/** 
 * Props for the child component
 */
interface AircraftItemProps {
  id: number;
  data: Aircraft[];
}

const AircraftItem: React.FC<AircraftItemProps> = ({ id, data }) => {
  const router = useRouter();

  /**
   * Default state for selected aircraft data. 
   * This will update once the user picks an aircraft from the list.
   */
  const [aircraftData, setAircraftData] = useState<AircraftData>({
    Aircraft_name: "Aerospatiale ATR42-300",
    RANGE: "1700 nm",
    MAX_PASSENGERS: 50,
    CRUISE_SPEED: "255 KTAS",
    RENTAL_RATE: "20,400 USD",
    MANUFACTURER: "Aerospaitiale",
    BAG_CAPACITY: "175 ft³",
    CABIN_LENGTH: "63 ft",
    CABIN_WIDTH: "8.4 ft",
    CABIN_HEIGHT: "6.3 ft",
    PRICE_PER_HOUR: "20,400 USD",
  });

  const [aircraftName, setAircraftName] = useState<Pick<AircraftData, "Aircraft_name" | "_id">>({
    Aircraft_name: "Aerospatiale ATR42-300",
    _id: "",
  });

  /**
   * A separate list to filter as the user types in the input.
   * Initially, it shows all aircraft from props.data.
   */
  const [allAircraft, setAllAircraft] = useState<Aircraft[]>([]);

  useEffect(() => {
    setAllAircraft(data);
  }, [data]);

  /**
   * When user selects an aircraft from the dropdown
   */
  const handleSaveName = useCallback(
    async (airData: Aircraft) => {
      setAircraftName({
        Aircraft_name: airData.Aircraft_name,
        _id: airData._id,
      });

      const res = await fetch(
        `/api/getAircraft/${airData._id}`
      );
      const fetchedData = await res.json();
      setAircraftData(fetchedData.data);
    },
    []
  );

  /**
   * Expand/collapse the dropdown
   */
  const handleClick = useCallback(
    (clickedId: number) => {
      const allMultiselect = document.querySelectorAll(".multiselect");
      allMultiselect.forEach((e) => {
        if (e.id !== `multiselect-${clickedId}`) {
          e.classList.remove("multiselect--active");
        }
      });

      const _inputs = document.querySelectorAll<HTMLInputElement>(
        ".multiselect__input"
      );
      _inputs.forEach((e) => {
        if (e.id !== `multiselect__input-${clickedId}`) {
          e.style.width = "0px";
          e.style.position = "absolute";
          e.style.padding = "0px";
        }
      });

      const allMultiSingle = document.querySelectorAll<HTMLSpanElement>(
        ".multiselect__single"
      );
      allMultiSingle.forEach((e) => {
        if (e.id !== `multiselect__single-${clickedId}`) {
          e.style.display = "";
        }
      });

      const allMultiSelectWrapper =
        document.querySelectorAll<HTMLDivElement>(".multiselect__content-wrapper");
      allMultiSelectWrapper.forEach((e) => {
        if (e.id !== `multiselect__content-wrapper-${clickedId}`) {
          e.style.display = "none";
        }
      });

      const element = document.querySelector<HTMLDivElement>(
        `#multiselect-${clickedId}`
      );

      if (!element) return;

      if (element.classList.contains("multiselect--active")) {
        element.classList.remove("multiselect--active");

        const input = document.querySelector<HTMLInputElement>(
          "#multiselect__input-" + clickedId
        );
        if (input) {
          input.style.width = "0px";
          input.style.position = "absolute";
          input.style.padding = "0px";
        }

        const singleSpan = document.querySelector<HTMLSpanElement>(
          "#multiselect__single-" + clickedId
        );
        if (singleSpan) {
          singleSpan.style.display = "";
        }

        const contentWrapper = document.querySelector<HTMLDivElement>(
          "#multiselect__content-wrapper-" + clickedId
        );
        if (contentWrapper) {
          contentWrapper.style.display = "none";
        }
      } else {
        element.classList.add("multiselect--active");

        const input = document.querySelector<HTMLInputElement>(
          "#multiselect__input-" + clickedId
        );
        if (input) {
          input.removeAttribute("style");
          input.style.outline = "none";
          input.style.border = "none";
          input.focus();
        }

        const singleSpan = document.querySelector<HTMLSpanElement>(
          "#multiselect__single-" + clickedId
        );
        if (singleSpan) {
          singleSpan.style.display = "none";
        }

        const contentWrapper = document.querySelector<HTMLDivElement>(
          "#multiselect__content-wrapper-" + clickedId
        );
        if (contentWrapper) {
          contentWrapper.style.display = "";
        }
      }
    },
    []
  );

  /**
   * Filter logic for the dropdown items
   */
  const handleChange = useCallback(
    (word: string) => {
      const result = data.filter((item) =>
        item.Aircraft_name.toLowerCase().includes(word.toLowerCase())
      );
      setAllAircraft(result);
    },
    [data]
  );

  return (
    <div className="compare-item">
      <div className="compare-item__select" onClick={() => handleClick(id)}>
        <div className="multiselect" id={"multiselect-" + id} tabIndex={-1}>
          <div className="multiselect__select" />
          <div className="multiselect__tags">
            <input
              name=""
              id={"multiselect__input-" + id}
              type="text"
              autoComplete="off"
              placeholder=""
              tabIndex={0}
              style={{
                width: "0px",
                position: "absolute",
                padding: "0px",
              }}
              className="multiselect__input"
              onChange={(e) => handleChange(e.target.value)}
            />
            <span
              className="multiselect__single"
              id={"multiselect__single-" + id}
            >
              <span className="multiselect__single_span">
                {aircraftName.Aircraft_name}
              </span>
            </span>
          </div>
          <div
            className="multiselect__content-wrapper"
            tabIndex={-1}
            id={"multiselect__content-wrapper-" + id}
            style={{ display: "none", maxHeight: "264.8px" }}
          >
            <ul className="multiselect__content">
              {allAircraft &&
                allAircraft.map((item, index) => (
                  <li
                    className="multiselect__element"
                    key={item._id || index}
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
      {aircraftData ? (
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
                <span>Manufacturer</span>
                <span>{aircraftData.MANUFACTURER}</span>
              </li>
            </ul>
          </div>
          <div className="compare-item__group">
            <h3>Aircraft Size</h3>
            <ul>
              <li>
                <span>Bag. Capacity</span>
                <span>{aircraftData.BAG_CAPACITY}</span>
              </li>
            </ul>
          </div>

          <div className="compare-item__group">
            <h3>Cabin Size</h3>
            <ul>
              <li>
                <span>Cabin Length</span>
                <span>{aircraftData.CABIN_LENGTH}</span>
              </li>
              <li>
                <span>Cabin Width</span>
                <span>{aircraftData.CABIN_WIDTH}</span>
              </li>
              <li>
                <span>Cabin Height</span>
                <span>{aircraftData.CABIN_HEIGHT}</span>
              </li>
            </ul>
          </div>

          <div className="compare-item__group compare-item__group--price">
            <ul>
              <li>
                <span>Price per Hour</span>
                <span>{aircraftData.PRICE_PER_HOUR}</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              router.push("/request-a-quote");
              return;
            }}
            className="btn-compair btn--border compare-item__cta"
          >
            Quote for {aircraftData.Aircraft_name}
          </button>
        </div>
      ) : null}
    </div>
  );
};
