import AboutUsPage from "@/components/AboutUsPage";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ContactUsPage from "@/components/ContactUsPage";
import OurTeamPage from "@/components/OurTeamPage";
import { createClient } from "@/lib/contento";
import BrandNames from '@/sections/BrandNames';
import { ContentData } from "@gocontento/client";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import LeadForm from '@/components/LeadForm';

type PageProps = {
  params: {
    subOption: string;
  };
};

const pageContent: Record<string, { title: string; description?: string; }> = {
  "about-us": { title: "About Our Company - JetLevel Aviation", description: "JetLevel Aviation was founded by a team of industry professionals with over 10 years experience in the Private Jet Charter Industry." },
  "contact-us": { title: "Contact Us", description: "Get in touch with us today." },
  blogs: { title: "Blog - JetLevel Private Jet Charter", description: "Our Level Up Blog contains informative articles and topics on Private Jet Charters to multiple destinations." },
  "charter-faqs": { title: "Charter FAQs", description: "Frequently asked questions about chartering." },
  "our-team": { title: "Our Team - JetLevel Private Jet Charter", description: "At JetLevel Aviation, our expert team is devoted to setting the gold standard in private jet travel. From your initial inquiry to your final destination, each" },
};

// Generate metadata dynamically based on `subOption`
export async function generateMetadata({ params }: PageProps) {
  const { subOption } = params;

  // Fallback for unknown `subOption`
  const content = pageContent[subOption] || {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  };

  return {
    title: content.title,
    description: content.description,
  };
}


// This function generates static parameters for known paths
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({ subOption }));
}

const CompanyPage = async ({ params }: PageProps) => {
  const { subOption } = params;

  // Get content based on `subOption`, with fallback for 404 content
  const { title } = pageContent[subOption] || {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  };
  let content: ContentData[] | null = null;
  if (title === "Blog - JetLevel Private Jet Charter") {
    const client = createClient();
    const limit = 20; // Set to a reasonable high limit
    let response = await client.getContentByType({
      contentType: subOption,
      sortBy: "published_at",
      sortDirection: "desc",
      limit,
    });

    content = [...response.content];

    while (response.nextPage) {
      response = await response.nextPage();
      content = content.concat(response.content);
    }
  }

  // console.log("Content:--------------------", content[0].fields.all_sections_content.text);

  // utils/getExcerpt.ts
  function getExcerpt(content: string, length: number = 100): string {
    if (!content) return "";
    if (content.length <= length) return content;
    return content.substring(0, length) + "…";
  }

  return (
    <>
      {title === "Blog - JetLevel Private Jet Charter" ? (
        <>
          <div className="bg-[url('/images/blog-hero-image.jpg')] bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
            <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white ">
              {title}
            </h1>
          </div>

          <BrandNames />
          <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto">
            <div className="min-w-full md:min-w-[72%]">
              <Breadcrumb />
              {content ? content.map((blogContent, index) => (
                <div
                  key={index}
                  className="flex flex-col my-9 text-start shadow-card_shadow_blog transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow_blog2"
                >
                  {blogContent.slug ? (
                    <Link href={blogContent.slug}>
                      {
                        blogContent.fields.hero_image?.assets[0]?.asset?.url ?
                          <Image
                            src={blogContent.fields.hero_image?.assets[0]?.asset?.url}
                            width={
                              blogContent.fields.hero_image?.assets[0]?.asset?.width
                            }
                            height={
                              blogContent.fields.hero_image?.assets[0]?.asset?.height
                            }
                            alt={blogContent.fields.hero_image?.assets[0]?.asset?.name}
                            className="w-full h-full object-cover"
                          /> : ""
                      }

                    </Link>
                  ) : (
                    ""
                  )}
                  <div className="flex flex-col gap-3 px-11 pb-9 ">
                    {blogContent.slug ? (
                      <Link href={blogContent.slug}>
                        <h2 className="text-2xl md:text-[40px] md:leading-[54px] box-border pt-9">
                          {blogContent.fields.title.text}
                        </h2>
                      </Link>
                    ) : (
                      ""
                    )}
                    <div className="blogCard">
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
                        {
                          getExcerpt(
                            blogContent.fields.all_sections_content.text
                          ) as string
                        }
                      </Markdown>
                    </div>
                    {blogContent.slug ? (
                      <Link
                        href={blogContent.slug}
                        className="w-fit text-white px-5 py-2 rounded-full bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow"
                      >
                        Continue Reading
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )) : ""}
            </div>
            <div className="min-w-[24%] max-w-fit  mt-[76px] max-[650px]:mt-0 sticky top-[90px] h-fit">
              <Suspense fallback={<div className="search-form__loader"></div>}>
                <LeadForm widget={true} />
              </Suspense>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className="w-full">
            {title === "About Our Company - JetLevel Aviation" ? (
              <AboutUsPage />
            ) : title === "Our Team - JetLevel Private Jet Charter" ? (
              <OurTeamPage />
            ) : (
              <ContactUsPage />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CompanyPage;
