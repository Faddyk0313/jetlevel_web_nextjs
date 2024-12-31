import React from 'react';

export const metadata = {
  title: 'Terms and Conditions - JetLevel Private Jet Charter',
  description: 'Terms and conditions for flight bookings with Jetlevel Aviation. For further information or private flight prices call 1-855-JetLevel.',
}

const TermOfUsePage = () => {
  const termConditions= [
    {
      heading:'AGREEMENT TO TERMS',
      content:[
        'These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and evojets, llc (“Company“, “we”, “us”, or “our”), concerning your access to and use of the evojets.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.',
        "Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted. The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.",
        'The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.'
      ]
    },
    {
      heading:'INTELLECTUAL PROPERTY RIGHTS',
      content:[
        'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.',
        "Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.",
      ]
    },
    {
      heading:'USER REPRESENTATIONS',
      content:[
        'By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use;  (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.',
        "If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).",
      ]
    },
    {
      heading:'PROHIBITED ACTIVITIES',
      content:[
        'You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.',
      ]
    },
    {
      heading:'As a user of the Site, you agree not to:',
      content:'',
      list:[
        'Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.',
        'Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.',
        'Use the Site to advertise or offer to sell goods and services.',
        'Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.',
        'Engage in unauthorized framing of or linking to the Site.',
        'Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.'
      ]
    }
  ]
  return (
    <div className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
      <div className="shadow-xl p-[70px_50px_70px_50px] rounded-lg">
        <h2>TERMS OF USE</h2>
        <p>Last updated June 10, 2019</p>

        {
          termConditions.map((terms, index) => (
          <section key={index} className="pb-0 pt-[30px]">
            <h2 className="pb-4">{terms.heading}</h2>
            {Array.isArray(terms.content) ? (
              terms.content.map((item, idx) => (
                <p key={idx} className="pb-6 leading-7 details">
                  {item}
                </p>
              ))
            ) : (
              <p className="pb-6 leading-7 details">{terms.content}</p>
            )}
            {terms.list && (
              <ul className="list-decimal pl-5">
                {terms.list.map((listItem, idx) => (
                  <li className='pb-4 text-[19px]' key={idx}>{listItem}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermOfUsePage;
