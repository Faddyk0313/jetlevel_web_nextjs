import AboutUsPage from '@/components/AboutUsPage';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ContactUsPage from '@/components/ContactUsPage';
import TopCharteredCities from "@/components/TopCharteredCities";
import { createClient } from "@/lib/contento";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: {
    subOption: string;
  };
};

// Define page content based on `subOption`
const pageContent: Record<string, { title: string; }> = {
  'about-us': { title: 'About Us' },
  'contact-us': { title: 'Contact Us' },
  'blogs': { title: 'Level Up Blog' },
  'charter-faqs': { title: 'Charter FAQs' },
  'our-team': { title: 'Out Team' },
};

// This function generates static parameters for known paths
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({ subOption }));
}

const JetCharter = async ({ params }: PageProps) => {
  const { subOption } = params;

  // Get content based on `subOption`, with fallback for 404 content
  const { title } = pageContent[subOption] || {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
  };


  const client = createClient();
  const limit = 20; // Set to a reasonable high limit
  let response = await client.getContentByType({
    contentType: subOption,
    sortBy: "published_at",
    sortDirection: "desc",
    limit,
  });

  let content = [...response.content];

  while (response.nextPage) {
    response = await response.nextPage();
    content = content.concat(response.content);
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
      <div className="bg-[url('/images/blog-hero-image.jpg')] bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white ">{title}</h1>
      </div>
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto">
        <div className="min-w-full md:min-w-[72%]">
          <Breadcrumb />
          {
            content.map((blogContent, index) => (
              <div className="flex flex-col my-9 text-start shadow-card_shadow_blog transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow_blog2">
                {blogContent.slug ? <Link href={blogContent.slug}><Image src={blogContent.fields.hero_image.assets[0].asset.url} width={blogContent.fields.hero_image.assets[0].asset.width} height={blogContent.fields.hero_image.assets[0].asset.height} alt={blogContent.fields.hero_image.assets[0].asset.name} className="max-h-dvh w-auto h-auto" /></Link> : ""}
                <div className="flex flex-col gap-3 px-11 pb-9 ">
                  {blogContent.slug ?  <Link href={blogContent.slug}><h2 className="text-2xl md:text-[40px] md:leading-[54px] box-border pt-9" >{blogContent.fields.title.text}</h2></Link> : ""}
                  <Markdown
                    options={{
                      overrides: {
                        a: {
                          props: {
                            className: " text-blue",
                          },
                        },
                      },
                    }}
                  >
                    {getExcerpt(blogContent.fields.all_sections_content.text) as string}
                  </Markdown>
                  {blogContent.slug ? <Link href={blogContent.slug} className='w-fit text-white px-5 py-2 rounded-full bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow'>Continue Reading</Link> : ""}
                </div>
              </div>
            ))
          }
          {
            title === 'About Us'?
            <AboutUsPage />:
            <ContactUsPage />
          }
        </div>
        <div className="min-w-[24%] max-w-fit  mt-[76px] max-[650px]:mt-0">
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
    </>
  );
};

export default JetCharter;
