"use client";

import { useEffect } from "react";

const AvinodeSearchApp = () => {
  useEffect(() => {
    // Check if the script already exists to prevent duplicate script loading
    if (!document.querySelector("#avinode-script-two")) {
      const script = document.createElement("script");
      script.id = "avinode-script-two";
      script.src =
        "https://apps.avinode.com/webapp/rest/bootstrap?Avinode-WEB-APP=eyJraWQiOiIxNkVBQkQ5RS1BRjYyLTQ4NTEtODk5Qi1BM0UwMThGRjYxNDciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI4OGIzNjI0Zi04YjE1LTQxMzQtOWMzYy05ZWM2Y2U2YTI0YjciLCJhdmlkb21haW4iOiIuYXZpbm9kZS5jb20iLCJhdml0ZW5hbnQiOjEyODQwLCJpc3MiOiJhdmlub2RlIiwiYXZpdHlwZSI6MTAsImF2aW5vbmNlIjoiYzQ4NjMzOGYtNzhhMC00YTFkLTkyMjktZjMwZGI5NTNmNGMyIn0.KsGdA1UNsmRr7GSQ5ThsQOCD-CxEKv-TlmnRNr_aDmsmnQdvDxoCghmE8QyvvQNfosLCtJ1X1ZXB1BtWtSqElowBuG4TB2of9OJk4C6vCN7iVxlq8t7fObqvILWcD0kPGrZX4EUjZK-Yu3s0qBSyp-oNLUS4XTnlV4PH_vqNu-d5eJWXQtV9JycuPIIPWGQX9Sj8lpa84SwQ0QNxuKNkMq9aj_wypoKT4nS08FhZyGig68a49IvTxySlpJz8rv9PjkRT_owz154-svcYx0ngv_CmEWUIA672HJPRpx9ngNjjtjlVBX66pSlwMMw8QOfE2Z6B2k46KdYfHc4aVtbp5w&analyticsReferrer=https://www.jetlevel.com/";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="py-8">
      {/* Styling container with Tailwind CSS */}
      <div id="avinodeApp"></div>
    </div>
  );
};

export default AvinodeSearchApp;
