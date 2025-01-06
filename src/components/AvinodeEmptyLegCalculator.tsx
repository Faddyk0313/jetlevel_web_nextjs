"use client"
import { useEffect } from 'react';

const AvinodeCalculator = () => {
  useEffect(() => {
    // Check if the script already exists to prevent duplicate script loading
    if (!document.querySelector('#avinode-script')) {
      const script = document.createElement('script');
      script.id = 'avinode-script';
      script.src = 'https://apps.avinode.com/webapp/rest/bootstrap?Avinode-WEB-APP=eyJraWQiOiIxNkVBQkQ5RS1BRjYyLTQ4NTEtODk5Qi1BM0UwMThGRjYxNDciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIzYmI1YWFmZi1jNGVhLTQ0ZGItYjQ5My1kOWZjZjlkYjg5NmEiLCJhdmlkb21haW4iOiIuYXZpbm9kZS5jb20iLCJhdml0ZW5hbnQiOjEyODQwLCJpc3MiOiJhdmlub2RlIiwiYXZpdHlwZSI6MTAsImF2aW5vbmNlIjoiZWJlMWVjMDUtOTRmNy00NzNmLTljM2MtMmEzMTM5YTQzYTZlIn0.hLMp6vfJ7DM0gGUqHJ9i4EOKRchn77hZD7qtM6tXL2lvdSGHQCGadQHiRNFc1JG3CUGW3OnnWkjiMR__BbMiYq5vPNxafWOM2RHB1Txc41z5h-pJ_mbRohCgwbKDkaS61VhmdJ1mCLBcAtI3r2uQLBy8vte8TEonX9u-7Xkf8hPZWIdI1lfLrY-Y28wUxmUSCA-h0rx_OWMxudogK26djkVjYcJZn-fj7aSt84mcFgmyqjgvkdnDH2UYpSbhXhYHNa7UIqK20_epkrTInfuuDbpDNURibTTpvly5Ce72oylGbKW3t6zCOOdIf28IZ9RkvVkHYQjwSBGTERNxP93i2w&analyticsReferrer=https://www.jetlevel.com/';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className='py-8'>
      {/* Styling container with Tailwind CSS */}
      <div id="avinodeApp"></div>
    </div>
  );
};

export default AvinodeCalculator;
