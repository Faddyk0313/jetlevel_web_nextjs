
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React from 'react';
import events from '../../../../events.json';
import AvailableAircrafts from '@/sections/AvailableAircrafts';
import Collapsible from '@/components/Collapsible';
import { ContentData } from '@gocontento/client';
import { createClient } from '@/lib/contento';
import Markdown from 'markdown-to-jsx';
import { Suspense } from "react";
import LeadForm from '@/components/LeadForm';

type PageProps = {
  params: {
    subOption: string;
  };
};


// Shared function to fetch content
async function fetchContent(subOption: string) {
  let content: ContentData | null = null;
  try {
    content = await createClient().getContentBySlug(
      `${subOption}`, 'events_single_page'
    );
  } catch (err) {
    console.error("Error fetching content:", err);
  }

  return { content };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: PageProps) {
  const { subOption } = params;
  const { content } = await fetchContent(subOption);

  if (content && content.seo) {
    const title = content.seo.title;
    const description = content.seo.description;

    return {
      title: title || "Events - JetLevel Aviation",
      description: description || "Events Single Page",
    };
  }

  // Fallback metadata
  return {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  };
}


const EventDetailPage = async ({ params }: PageProps) => {
  const { subOption } = params;
  // console.log('singleEvent',singleEvent);

  const { content } = await fetchContent(subOption);
  // console.log('content ----------------', content.fields.hero_content.blocks[0].fields.title.text);
  if (!content) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h2 className="font-bold my-4">Page Not Found</h2>
      </div>
    );
  }
  // const [openIndex, setOpenIndex] = useState<number | null>(null);

  // const handleToggle = (index: number) => {
  //   setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  // };
  return (
    <div>
      <Hero title={content.fields.hero_content.blocks[0].fields.title.text} description={content.fields.hero_content.blocks[0].fields.paragraph.text || ""} image={content.fields.hero_image.assets[0].asset.url} hasOverlay={true} hasCalculator={true} />
      <BrandNames />
      <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <Breadcrumb />
        <div className='flex justify-between'>
          <div className='w-[73%] max-[650px]:w-full'>
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
                {content.fields.all_sections.text as string}
              </Markdown>
            </div>

          </div>

          <div className="min-w-[24%] max-w-fit  max-[650px]:mt-0 sticky top-[90px] h-fit">
            <Suspense fallback={<div className="search-form__loader"></div>}>
              <LeadForm widget={true} />
            </Suspense>
          </div>
        </div>

        <div>
          <AvailableAircrafts sectionClass={'pt-20 !pr-0 !pl-0 '} heading='Available Private Jets' subHeading='We Offer Hundreds of Private Jets to Choose from in various Jet Sizes, Explore some of them below.' />
        </div>
      </section>
    </div>
  );
};

export default EventDetailPage;