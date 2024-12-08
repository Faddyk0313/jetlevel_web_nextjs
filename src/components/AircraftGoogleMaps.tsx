"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

interface AircraftGoogleMapsProps {
  rangeDistance: number; // rangeDistance in kilometers
}

const AircraftGoogleMaps: React.FC<AircraftGoogleMapsProps> = ({ rangeDistance }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    const center = { lat: 39.702213, lng: -101.404249 }; // Central USA coordinates

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 3,
      streetViewControl: false,
    });

    // Convert rangeDistance (nm) to meters for the Google Maps Circle
    const radiusInMeters = rangeDistance * 1852; //

    // Draw Circle
    new window.google.maps.Circle({
      strokeColor: "#0071BA",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#0071BA",
      fillOpacity: 0.35,
      map,
      center,
      radius: radiusInMeters, // Use radius in meters
    });
  }, [rangeDistance]);

  return (
    <>
      <div ref={mapRef} className="w-full h-[400px]" />
    </>
  );
};

export default AircraftGoogleMaps;
