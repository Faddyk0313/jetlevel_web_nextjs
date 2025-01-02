import React from 'react';

export const metadata = {
  title: 'Privacy Policy - JetLevel Private Jet Charter',
  description: 'This Privacy Policy describes how JetLevel Aviation protect your data, What data breach procedures we have in place.',
}

const PrivacyPolicyPage = () => {
  const termConditions= [
    {
      content:[
        'Thank you for choosing to be part of our community at evojets, llc (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at rpalese@evojets.com.',
        "When you visit our website evojets.com, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.",
        'This privacy policy applies to all information collected through our website (such as evojets.com), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the “Sites“).',
        'Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.'
      ]
    },
    {
      heading:'TABLE OF CONTENTS ',
      list:[
        'WHAT INFORMATION DO WE COLLECT?',
        "HOW DO WE USE YOUR INFORMATION?",
        'WILL YOUR INFORMATION BE SHARED WITH ANYONE?',
        'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
        'HOW LONG DO WE KEEP YOUR INFORMATION?',
        'HOW DO WE KEEP YOUR INFORMATION SAFE?',
        'DO WE COLLECT INFORMATION FROM MINORS?',
        'WHAT ARE YOUR PRIVACY RIGHTS?',
        'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
        'DO WE MAKE UPDATES TO THIS POLICY?',
        'HOW CAN YOU CONTACT US ABOUT THIS POLICY?',
        'WHAT INFORMATION DO WE COLLECT?'
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
        <h2>PRIVACY POLICY</h2>
        <p className='details'>Last updated June 10, 2019</p>

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

export default PrivacyPolicyPage;
