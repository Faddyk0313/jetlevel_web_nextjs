"use client";
import { useEffect } from "react";

const AvinodeCalculator = () => {
  useEffect(() => {
    // Dynamically create and inject the script whenever this component mounts
    const script = document.createElement("script");
    script.id = "avinode-script-calculator";
    script.src = "https://apps.avinode.com/webapp/rest/bootstrap?Avinode-WEB-APP=eyJraWQiOiIxNkVBQkQ5RS1BRjYyLTQ4NTEtODk5Qi1BM0UwMThGRjYxNDciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIzYmI1YWFmZi1jNGVhLTQ0ZGItYjQ5My1kOWZjZjlkYjg5NmEiLCJhdmlkb21haW4iOiIuYXZpbm9kZS5jb20iLCJhdml0ZW5hbnQiOjEyODQwLCJpc3MiOiJhdmlub2RlIiwiYXZpdHlwZSI6MTAsImF2aW5vbmNlIjoiZWJlMWVjMDUtOTRmNy00NzNmLTljM2MtMmEzMTM5YTQzYTZlIn0.hLMp6vfJ7DM0gGUqHJ9i4EOKRchn77hZD7qtM6tXL2lvdSGHQCGadQHiRNFc1JG3CUGW3OnnWkjiMR__BbMiYq5vPNxafWOM2RHB1Txc41z5h-pJ_mbRohCgwbKDkaS61VhmdJ1mCLBcAtI3r2uQLBy8vte8TEonX9u-7Xkf8hPZWIdI1lfLrY-Y28wUxmUSCA-h0rx_OWMxudogK26djkVjYcJZn-fj7aSt84mcFgmyqjgvkdnDH2UYpSbhXhYHNa7UIqK20_epkrTInfuuDbpDNURibTTpvly5Ce72oylGbKW3t6zCOOdIf28IZ9RkvVkHYQjwSBGTERNxP93i2w&analyticsReferrer=https://www.jetlevel.com/";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      // Remove the script tag from the DOM
      script.remove();

      // Also clear out anything that Avinode injected into #avinodeApp
      const avinodeApp = document.getElementById("avinodeApp");
      if (avinodeApp) {
        avinodeApp.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="py-8">
      <div id="avinodeApp"></div>
    </div>
  );
};

export default AvinodeCalculator;
