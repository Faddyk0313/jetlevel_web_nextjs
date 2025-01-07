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
import BlogDirectoryPage from "@/components/BlogDirectoryPage";

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
  
  if(title ===  "Blog - JetLevel Private Jet Charter") {
    let content: ContentData[] | null = null;
    const client = createClient();
    const limit = 20; // Set to a reasonable high limit
    let response = await client.getContentByType({
      contentType: subOption,
      sortBy: "name",
      sortDirection: "asc",
      limit,
    });

    content = [...response.content];

    while (response.nextPage) {
      response = await response.nextPage();
      content = content.concat(response.content);
    }

    return (
      <BlogDirectoryPage content={content} />
    )
  }
  
  return (
          <div className="w-full">
            {title === "About Our Company - JetLevel Aviation" ? (
              <AboutUsPage />
            ) : title === "Our Team - JetLevel Private Jet Charter" ? (
              <OurTeamPage />
            ) : (
              <ContactUsPage />
            )}
          </div>
  );
};

export default CompanyPage;
