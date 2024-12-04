"use client";
declare global {
    interface Window {
        __weatherwidget_init?: () => void;
    }
}

import Markdown from "markdown-to-jsx";
import { useEffect, useRef } from "react";

interface WeatherWidgetProps {
    widgetHtml: string | undefined; // Accept the HTML string as a prop
}

const WeatherWidget = ({ widgetHtml }: WeatherWidgetProps) => {
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadWidgetScript = () => {
            if (!document.getElementById("weatherwidget-io-js")) {
                const script = document.createElement("script");
                script.id = "weatherwidget-io-js";
                script.src = "https://weatherwidget.io/js/widget.min.js";
                script.async = true;
                document.body.appendChild(script);
            } else {
                // Reinitialize the widget if the script is already present
                window.__weatherwidget_init && window.__weatherwidget_init();
            }
        };

        // Set up an observer to load the script when the widget enters the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadWidgetScript();
                    observer.disconnect(); // Only trigger once
                }
            },
            { threshold: 0.1 }
        );

        if (widgetContainerRef.current) observer.observe(widgetContainerRef.current);

        // Clean up: remove the script on unmount
        return () => {
            const script = document.getElementById("weatherwidget-io-js");
            if (script) {
                script.remove();
            }
        };
    }, []);

    return (
        <div ref={widgetContainerRef}>
            {/* Render the widget HTML string */}
            <Markdown>
                {widgetHtml as string}
            </Markdown>
        </div>
    );
};

export default WeatherWidget;

