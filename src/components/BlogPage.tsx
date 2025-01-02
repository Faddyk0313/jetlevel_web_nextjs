"use client";
import React from "react";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import TopCharteredCities from "./TopCharteredCities";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

interface BlogPageProps {
  fields: any;
  date: string;
}

const BlogPage = ({ fields, date }: BlogPageProps) => {
  // console.log("Fields----------------------", fields);
  return (
    <>
      <div className="px-5 md:px-10 lg:px-20 pt-10 max-w-[1800px] mx-auto ">
        <h1 className="w-full md:max-w-[800px] pb-1">{fields.title.text} </h1>
        <span className="text-xs pb-7 text-gray-700 block">updated {date}</span>
        <hr />
      </div>
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto">
        <div className="min-w-full md:min-w-[72%]">
          <Breadcrumb />
          <Image
            className="my-9 w-full"
            src={fields.hero_image?.assets[0]?.asset?.url}
            width={fields.hero_image?.assets[0]?.asset?.width}
            height={fields.hero_image?.assets[0]?.asset?.height}
            alt={fields.hero_image?.assets[0]?.asset?.name}
          />
          <div className="pb-8">
            <Markdown
              options={{
                overrides: {
                  h2: {
                    props: {
                      className: "pb-2",
                    },
                  },
                  p: {
                    props: {
                      className: "leading-7",
                    },
                  },
                  li: {
                    props: {
                      className: "py-1",
                    },
                  },
                  blockquote: {
                    props: {
                      className: "not-italic",
                    },
                  },
                  a: {
                    props: {
                      className: " text-blue",
                    },
                  },
                },
              }}
            >
              {fields.all_sections_content.text as string}
            </Markdown>
          </div>
        </div>
        <div className="min-w-[24%]  max-w-fit mt-[76px]">
          <TopCharteredCities
            title="Airports For"
            cities={[
              { name: "New York, NY", link: "#" },
              { name: "Aspen, CO", link: "#" },
              { name: "Los Angeles, CA", link: "#" },
              { name: "San Francisco, CA", link: "#" },
              { name: "Miami, FL", link: "#" },
              { name: "Chicago, IL", link: "#" },
              { name: "Houston, TX", link: "#" },
              { name: "Dallas, TX", link: "#" },
              { name: "Las Vegas, NV", link: "#" },
              { name: "Denver, CO", link: "#" },
            ]}
            buttonLink="#"
          />
        </div>
      </section>
      <div
        id="next-post"
        className="relative object-cover overflow-hidden text-center group"
      >
        <Image
          className="object-cover w-full h-auto min-h-72 left-0 sm:-top-[60px] md:-top-[140px] lg:-top-[220px] xl:-top-[300px] opacity-100 absolute group-hover:scale-110 transition-all duration-&lsqb;0.4s&rsqb; ease-&lsqb;cubic-bezier(0.05,0.2,0.1,1)&rsqb; delay-&lsqb;0s&rsqb; -z-10"
          src={fields.next_post_image.assets[0]?.asset?.url}
          width={fields.next_post_image.assets[0]?.asset?.width}
          height={fields.next_post_image.assets[0]?.asset?.height}
          alt={fields.next_post_image.assets[0]?.asset?.name}
        />
        <div className="flex flex-col justify-center items-center h-72 border-l border-l-white transition-all duration-&lsqb;0.4s&rsqb; ease-&lsqb;cubic-bezier(0.05,0.2,0.1,1)&rsqb; delay-&lsqb;0s&rsqb; z-10">
          <span
            className="block mb-2 text-lg text-white italic"
            style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)" }}
          >
            Next Post
          </span>
          <h4
            className="text-xl leading-8 text-white italic font-bold"
            style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}
          >
            {fields.next_post_heading.text}
          </h4>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
