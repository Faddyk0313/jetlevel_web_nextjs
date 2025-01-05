"use client";

import { Airplane, Broker, Terminal, Charter, Price, Service } from "@/svg";
import React, { useState } from "react";
import Collapsible from "@/components/Collapsible";
import Markdown from "markdown-to-jsx";

interface FaqContentProps {
    content: any;
}

interface Fields {
    answer: {
        text: any;
    };
    category: {
        text: string;
    };
    question: {
        text: string;
    };
}

interface FetchedContent {
    id: string;
    fields: Fields;
}

interface GroupedContent {
    category: string;
    id: string;
    content: Array<{
        question: string;
        id: string;
        answer: any;
    }>;
}

function groupContentByCategory(
    fetchedContentArray: FetchedContent[]
): GroupedContent[] {
    const groupedContent: GroupedContent[] = [];

    // Helper function to find or create a category group
    const findOrCreateCategoryGroup = (
        category: string,
        id: string
    ): GroupedContent => {
        let group = groupedContent.find((g) => g.category === category);
        if (!group) {
            group = { category, id, content: [] };
            groupedContent.push(group);
        }
        return group;
    };

    // Iterate over each content object
    fetchedContentArray.forEach((content) => {
        const category = content.fields.category.text;
        const question = content.fields.question.text;
        let answer = content.fields.answer.text;
        const questionId = content.id;

        // Find or create a category group
        const categoryGroup = findOrCreateCategoryGroup(
            category,
            category.toLowerCase()
        );

        answer = (
            <Markdown
                options={{
                    overrides: {
                        a: {
                            props: {
                                className: " text-blue",
                            },
                        },
                        span: {
                            props: {
                                className: "!text-white !font-normal",
                            },
                        },
                    },
                }}
            >
                {answer as string}
            </Markdown>
        );

        // Add the question, id, and answer to the content array of the group
        categoryGroup.content.push({
            question,
            id: questionId,
            answer,
        });
    });

    // Sort the grouped content alphabetically by category
    groupedContent.sort((a, b) => a.category.localeCompare(b.category));

    return groupedContent;
}

const FaqContent: React.FC<FaqContentProps> = ({ content }) => {
    const faqData = groupContentByCategory(content);
    // console.log("--------", faqData);

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const sidebar = [
        {
            name: "Aircraft",
            icon: <Airplane />,
            id: "aircraft",
        },
        {
            name: "Airport",
            icon: <Terminal />,
            id: "airport",
        },
        {
            name: "Broker",
            icon: <Broker />,
            id: "broker",
        },
        {
            name: "Charter",
            icon: <Charter />,
            id: "charter",
        },
        {
            name: "Price",
            icon: <Price />,
            id: "price",
        },
        {
            name: "Service",
            icon: <Service />,
            id: "service",
        },
    ];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        const headerOffset = 80;
        if (section) {
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.scrollY - headerOffset;

            const hash = window.location.hash.slice(1);
            if (hash && hash === id) {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
                return;
            }

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex relative mt-10 max-[700px]:w-full max-[700px]:flex-col">
            <div className="flex flex-col gap-y-8 gap-x-8 max-[700px]:overflow-y-hidden max-[700px]:overflow-x-auto  w-[20%] max-[700px]:w-full max-[700px]:flex-row items-start max-[700px]:relative sticky max-[700px]:top-0 top-[105px] max-[700px]:h-[80px] h-[400px]">
                {sidebar.map((item, index) => (
                    <div
                        key={index}
                        className="flex max-[700px]:flex-col max-[700px]:gap-x-[10px] max-[700px]:justify-between items-center gap-x-4 gap-y-4 cursor-pointer"
                        onClick={() => scrollToSection(item.id)}
                    >
                        <div className="w-[30%] h-[40px]">{item.icon}</div>
                        <div className="w-[68%]">
                            <p className="text-[18px] font-bold">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-[80%] max-[700px]:w-full max-[700px]:mt-[50px]">
                {faqData.map((faq, index) => (
                    <div key={index} id={faq.id} className="pb-8">
                        <h2 className="bg-[#F9F9F9] p-3 mb-6">
                            {faq.category}
                        </h2>
                        {faq.content.map((content, index) => (
                            <Collapsible
                                key={index}
                                question={content.question}
                                answer={content.answer}
                                iconStyle="caret"
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                                isfaq={true}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqContent;
