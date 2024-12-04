"use client";

import React, { useEffect, useRef } from "react";

type Airport = {
  fields: {
    name: { text: string };
    latitude: { number: string | number };
    longitude: { number: string | number };
  };
};

interface RouteGoogleMapsProps {
  airports: Airport[];
}

const RouteGoogleMaps: React.FC<RouteGoogleMapsProps> = ({ airports }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: {
        lat: Number(airports[0]?.fields.latitude.number),
        lng: Number(airports[0]?.fields.longitude.number),
      },
      zoom: 8,
      streetViewControl: false,
    });

    const bounds = new window.google.maps.LatLngBounds();

    const markers = airports.map((airport) => {
      const position = {
        lat: Number(airport.fields.latitude.number),
        lng: Number(airport.fields.longitude.number),
      };

      const marker = new window.google.maps.Marker({
        position,
        map,
        title: airport.fields.name.text,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div>
            <span style="font-size: 14px; font-weight: bold;">${airport.fields.name.text}</span><br />
            <a href="https://www.google.com/maps?q=${position.lat},${position.lng}" target="_blank" 
              style="color: blue; text-decoration: underline; font-size: 14px;">View on Google Maps</a>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      bounds.extend(position);
      return marker;
    });

    map.fitBounds(bounds);

    const boundsListener = map.addListener("bounds_changed", () => {
      if (map.getZoom() > 14) map.setZoom(14);
    });

    return () => {
      markers.forEach((marker) => marker.setMap(null));
      boundsListener.remove();
    };
  }, [airports]);

  return <div ref={mapRef} className="w-full h-[400px]" />;
};

export default RouteGoogleMaps;
