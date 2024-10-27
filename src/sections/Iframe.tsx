"use client"

import React, { useEffect, useRef } from 'react';

const IframeEmbed = () => {
  const iframe1Ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe1 = iframe1Ref.current;

    // Append query parameters to iframe source if `to` and `from` exist in URL
    const urlParams = new URLSearchParams(window.location.search);
    const to = urlParams.get("to");
    const from = urlParams.get("from");

    if (to && from && iframe1) {
      iframe1.src = `https://app.jetlevel.com/?to=${to}&from=${from}`;
    }

    // Message handler to adjust iframe height or handle redirection
    const messageHandler = (event: MessageEvent) => {
      if (event.origin !== "https://app.jetlevel.com") return; // Security check

      if (event.data.type === "height" && iframe1) {
        iframe1.style.height = `${event.data.height}px`;
      } else if (event.data.type === "url") {
        window.location.href = event.data.url;
      }
    };

    window.addEventListener('message', messageHandler);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

  return (
    <iframe
      ref={iframe1Ref}
      id="my-iframe"
      src="https://app.jetlevel.com/"
      width="100%"
      style={{ border: 'none' }}
      scrolling="no"
    ></iframe>
  );
};

export default IframeEmbed;
