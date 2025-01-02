import React from 'react';

export const metadata = {
    title: 'Thank You - JetLevel Private Jet Charter',
    description: '1. A charter sales rep will contact you to go over your trip details.',
  }

const page = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="w-full max-w-4xl bg-blue text-white text-center py-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    Thank you, your request has been received and a member of our team will be in touch shortly.
                </h1>
            </div>
            <div className="w-full max-w-4xl mt-8 px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What happens next?</h2>
                <ol className="list-decimal list-inside text-lg md:text-xl">
                    <li className="mb-2">A charter sales rep will contact you to go over your trip details.</li>
                    <li className="mb-2">If we can’t reach you, we will email you quotes on a range of aircraft.</li>
                    <li className="mb-2">Next steps for booking will be included in the email. Payment terms will vary by trip.</li>
                    <li className="mb-2">Have questions? Read about these costs in our Jet Charter Pricing section.</li>
                    <li className="mb-2">We may contact you from time to time with useful articles, great deals on charter flights and other interesting stuff. It will be very easy to unsubscribe and we won’t take it personally.</li>
                </ol>
            </div>
        </div>
    );
};

export default page;
