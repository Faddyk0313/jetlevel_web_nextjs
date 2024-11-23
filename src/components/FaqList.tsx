"use client"; // This ensures the component runs on the client side
import { useState, useRef, useEffect } from 'react';
import { FaCaretDown } from "react-icons/fa";

interface FAQ {
    question: string;
    answer: string;
}

const faqData: FAQ[] = [
    {
        question: 'How quickly can I book a flight?',
        answer:
            `With JetLevel Aviation, you can book a flight in as little as a few hours, depending on aircraft availability and your desired departure location. Our streamlined booking process, dedicated flight coordinators, and expansive network of aircraft mean you can be airborne faster than you think—often within 4 to 6 hours. Whether it's a last-minute business trip or an urgent personal matter, we're here to get you in the air on your schedule.`,
    },
    {
        question: 'How does JetLevel ensure safety?',
        answer:
            `Safety is our top priority at JetLevel Aviation. We adhere to the highest industry standards, partnering exclusively with operators who meet rigorous FAA Part 135 regulations and are ARG/US certified. Our aircraft undergo frequent maintenance checks, and all pilots are highly trained with thousands of flight hours. From pre-flight inspections to real-time monitoring, we leave nothing to chance, ensuring that every flight meets or exceeds the strictest safety protocols.`,
    },
    {
        question: 'What amenities are available on board?',
        answer:
            `JetLevel Aviation redefines luxury in the sky with an array of personalized amenities. From plush seating and private cabins to gourmet catering tailored to your preferences, every detail is designed to elevate your journey. Onboard Wi-Fi, entertainment systems, and conference facilities allow you to work or relax at your discretion. It's not just about getting from point A to B—it's about enjoying every moment in between, tailored to your tastes.`,
    },
    {
        question: 'Are there any hidden fees?',
        answer:
            `Transparency is key at JetLevel Aviation—what you see is what you get. Our pricing is all-inclusive, covering everything from crew fees to landing permits, with no hidden costs or surprise charges. We believe in clear, upfront communication, so you'll know exactly what you're paying for, every time. Your journey should be stress-free, from booking to landing, and that includes understanding your investment.`,
    },
];

const FaqList: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // To track which FAQ is open
    const faqRefs = useRef<Array<HTMLDivElement | null>>([]); // To track the height of each FAQ

    // Dynamically adjust the height for smooth transitions
    useEffect(() => {
        if (openIndex !== null && faqRefs.current[openIndex]) {
            faqRefs.current[openIndex]!.style.height = `${faqRefs.current[openIndex]!.scrollHeight}px`;
        }
        faqRefs.current.forEach((faq, idx) => {
            if (idx !== openIndex && faq) {
                faq.style.height = '0px'; // Close all other FAQs
            }
        });
    }, [openIndex]);

    const toggleFaq = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle the FAQ open/close
    };

    return (
        <div className=" lg:absolute mt-5 lg:mt-0 left-[40%] top-10">
            {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-100 px-3 py-1 mb-3">
                    <h3
                        className="flex items-center justify-between font-bold text-darkBlue cursor-pointer mb-2"
                        onClick={() => toggleFaq(index)}
                    >
                        {faq.question} <FaCaretDown />
                    </h3>
                    <div
                        ref={(el) => {
                            faqRefs.current[index] = el;
                        }}
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ height: '0px' }} // Default height is 0 for closed FAQs
                    >
                        <p className="text-gray-800">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqList;
