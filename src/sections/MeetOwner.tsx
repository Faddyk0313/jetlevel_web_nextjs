import Image from 'next/image';
import Link from 'next/link';

const MeetOwner = () => {
    return (
        <section className="bg-blue-background px-[80px] flex items-center min-h-screen py-10 bg-no-repeat bg-cover ">
            <div className="flex flex-col md:flex-row items-center justify-center lg:items-start gap-5 max-w-[1800px] m-auto">
              {/*  <div className="mb-5 md:min-w-[400px]">
                  <Image
                        src='/images/ricky-photo.webp'
                        alt="Owner Image"
                        width={600} // Adjust according to the image size
                        height={800} // Adjust according to the image size
                        className="w-full h-full max-w-[570px] max-h-[780px] object-cover"
                    /> 
                </div>
*/}
                <div className="text-white md:max-w-[100%] md:pl-5 pt-5 md:pt-[5vh]">
                    <h4 className='mb-3'>MEET THE OWNER</h4>
                    <h2 className='mb-3 text-white'>Hi, I'm Ricky</h2>
                    <p className='mb-[10px] details leading-relaxed text-[#bbbbbb]'>
                        Working for over a decade in the private jet charter sector has helped me understand the problems that people are facing when looking for jets. Whether it's hard to get a hold of someone, trouble finding flights, or frustrating hidden costs and fees, I've seen it and I feel your pain.
                    </p>
                    <p className='mb-[10px] details leading-relaxed text-[#bbbbbb]'>
                        That's exactly why I created JetLevel Aviation— so that you can enjoy the comfort, luxury, and convenience of a private jet without the hassle. Our team is dedicated to getting you on a jet quickly with clear communication and transparent pricing.
                    </p>
                    <p className='mb-[10px] details leading-relaxed text-[#bbbbbb]'>
                        Whether you're traveling for business or pleasure, we're ready to get you from point A to B in style and luxury. So, please, relax and enjoy your flight.
                    </p>
                    <div className='my-3 details leading-relaxed'>
                        <p className='text-[#bbbbbb] pb-1'><span className='text-lightBlue'>✓&nbsp;</span> 5,000+ world's safest jets</p>
                        <p className='text-[#bbbbbb] pb-1'><span className='text-lightBlue'>✓&nbsp;</span> 15+ years in business</p>
                        <p className='text-[#bbbbbb] pb-1'><span className='text-lightBlue'>✓&nbsp;</span> A+ BBB rating</p>
                        <p className='text-[#bbbbbb] pb-1'><span className='text-lightBlue'>✓&nbsp;</span> 1,000+ annual charters</p>
                    </div>
                        <Link href="/request-a-qoute" className='text-white px-5 py-2 my-2 rounded-full text-lg bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow'>Book Your Flight</Link>
                </div>
            </div>
        </section>
    );
};

export default MeetOwner;
