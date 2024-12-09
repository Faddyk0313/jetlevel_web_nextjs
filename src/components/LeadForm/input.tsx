"use client"
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import "@/styles/leadForm.css"

export default function Input(props:any) {
  const {form, handleSaveAirport, handleInputChange, searchResults } = props
  return (
    <>
      <div className="location-dropdown">
        <div
          className={
            form.isErrorFrom
              ? "location-field error-field"
              : "location-field"
          }
        >
          <PlaceIcon />
          <input
            type="text"
            placeholder="From"
            value={form.fromLocation}
            onChange={(e) => {
              // sendHeightToParent();
              handleInputChange(e);
            }}
            name="fromLocation"
            autoComplete="off"
          />
        </div>
        {form.isErrorFrom && (
          <p className="error-message staticDisplay">Departure Airport is required </p>
        )}
        {searchResults &&
          searchResults.fromLocationArray &&
          searchResults.fromLocationArray.length > 0 && (
            <div className="dropdown">
              {searchResults.fromLocationArray.slice(0, 5).map((list:any, index:number) => (
                  <p
                    key={index}
                    onClick={() => {
                      // sendHeightToParent();
                      handleSaveAirport(
                        list.codeIcaoAirport,
                        "fromLocation"
                      );
                      (document.querySelector('input[name="toLocation"]') as HTMLElement).focus();
                    }}
                  >
                    {list.codeIcaoAirport &&
                      list.codeIcaoAirport
                        .toLowerCase()
                        .includes(form.fromLocation.toLowerCase()) ? (
                      <span className="highlight-text">
                        {list.codeIcaoAirport}
                      </span>
                    ) : (
                      list.codeIcaoAirport
                    )}
                    /
                    {list.local_code &&
                      list.local_code
                        .toLowerCase()
                        .includes(form.fromLocation.toLowerCase()) ? (
                      <span className="highlight-text">
                        {list.local_code}
                      </span>
                    ) : (
                      list.local_code
                    )}
                    ,{" "}
                    {list.nameAirport &&
                      list.nameAirport
                        .toLowerCase()
                        .includes(form.fromLocation.toLowerCase()) ? (
                      <span className="highlight-text">
                        {list.nameAirport}
                      </span>
                    ) : (
                      list.nameAirport
                    )}
                    ,{" "}
                    {list.iso_region &&
                      list.iso_region
                        .toLowerCase()
                        .includes(form.fromLocation.toLowerCase()) ? (
                      <span className="highlight-text">
                        {list.iso_region}
                      </span>
                    ) : (
                      list.iso_region
                    )}
                  </p>
                ))}
            </div>
          )}
      </div>

      <div className="location-dropdown">
        <div
          className={
            form.isErrorTo ? "location-field error-field" : "location-field"
          }
        >
          <PlaceIcon />
          <input
            type="text"
            placeholder="To"
            value={form.toLocation}
            onChange={(e) => {
              // sendHeightToParent();
              handleInputChange(e);
            }}
            name="toLocation"
          />
        </div>
        {form.isErrorTo && (
          <p className="error-message staticDisplay">Arrival Airport is required </p>
        )}
        {searchResults &&
          searchResults.toLocationArray &&
          searchResults.toLocationArray.length > 0 && (
            <div className="dropdown">
              {searchResults.toLocationArray.slice(0, 5).map((list:any, index:number) => (
                  <p
                    key={index}
                    onClick={() => {
                      // sendHeightToParent();
                      handleSaveAirport(
                        list.codeIcaoAirport,
                        "toLocation"
                      );
                    }}
                  >
                    {list.codeIcaoAirport &&
                      list.codeIcaoAirport
                        .toLowerCase()
                        .includes(form.toLocation.toLowerCase()) ? (
                      <span className="highlight-text">
                        {list.codeIcaoAirport}
                      </span>
                    ) : (
                      list.codeIcaoAirport
                    )}
                    /
                    {list.local_code &&
                      list.local_code
                        .toLowerCase()
                        .includes(form.toLocation.toLowerCase()) ? (
                      <span className="highlight-text">
                        {list.local_code}
                      </span>
                    ) : (
                      list.local_code
                    )}
                    ,{" "}
                    {list.nameAirport &&
                      list.nameAirport
                        .toLowerCase()
                        .includes(form.toLocation.toLowerCase()) ? (
                      <span className="highlight-text">
                        {list.nameAirport}
                      </span>
                    ) : (
                      list.nameAirport
                    )}
                    ,{" "}
                    {list.iso_region &&
                      list.iso_region
                        .toLowerCase()
                        .includes(form.toLocation.toLowerCase()) ? (
                      <span className="highlight-text">
                        {list.iso_region}
                      </span>
                    ) : (
                      list.iso_region
                    )}
                  </p>
                ))}
            </div>
          )}
      </div>
    </>
  );
}
