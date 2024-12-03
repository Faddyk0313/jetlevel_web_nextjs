"use client";

import React, { useEffect, useRef } from "react";

type Airport = {
  name: string;
  latitude: number;
  longitude: number;
};

interface RouteGoogleMapsProps {
  airports: Airport[];
}

const RouteGoogleMaps: React.FC<RouteGoogleMapsProps> = ({ airports }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: airports[0]?.latitude, lng: airports[0]?.longitude },
      zoom: 8, // Default zoom level
      streetViewControl: false, // Remove Pegman icon
    });

    // Create LatLngBounds to adjust the map to fit all markers
    const bounds = new window.google.maps.LatLngBounds();

    // Loop through airports and add markers
    const markers = airports.map((airport) => {
      const marker = new window.google.maps.Marker({
        position: { lat: airport.latitude, lng: airport.longitude },
        map,
        title: airport.name,
      });

      // Add InfoWindow to each marker
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div>
            <span style="font-size: 14px; font-weight: bold;">${airport.name}</span><br />
            <a href="https://www.google.com/maps?q=${airport.latitude},${airport.longitude}" target="_blank" 
              style="color: blue; text-decoration: underline; font-size: 14px;">View on Google Maps</a>
          </div>
        `,
      });

      // Attach click event to open InfoWindow
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      bounds.extend(marker.getPosition()!); // Add marker position to bounds
      return marker;
    });

    // Adjust map to fit all markers
    map.fitBounds(bounds);

    // Optional: Limit maximum zoom level to prevent too-close zoom
    const boundsListener = map.addListener("bounds_changed", () => {
      if (map.getZoom() > 14) map.setZoom(14); // Limit zoom to level 14
    });

    // Cleanup on component unmount
    return () => {
      markers.forEach((marker) => marker.setMap(null)); // Remove markers from the map
      boundsListener.remove(); // Remove event listener
    };
  }, [airports]); // Re-run effect if the airports array changes

  return <div ref={mapRef} className="w-full h-[500px]" />;
};

export default RouteGoogleMaps;
