import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React from 'react';
import InstantQuoteContent from '@/components/InstantQouteContent';

export const metadata = {
  title: 'Instant Private Jet Quotes - Fast & Accurate Charter Pricing',
  description: 'Get Instant Private Jet Quotes with no hidden fees. Experience fast, accurate, and reliable Charter Quotes services at JetLevel Aviation. Fly in luxury today!',
}

const RequestQuotePage = () => {
  return (
    <div>
      <Hero title="Instant Private Jet Quotes with JetLevel Aviation" description="Get Your Private Jet Quote Instantly and Fly in Ultimate Luxury" image="/images/Instant Qoute-jpg.webp" hasOverlay={true} hasCalculator={true} />
      <BrandNames />
      <InstantQuoteContent />     
    </div>
  );
};

export default RequestQuotePage;