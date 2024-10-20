import Image from 'next/image';

const MeetOwner = () => {
    return (
        <section className="bg-blue-background p-7 bg-no-repeat bg-cover">
            <div className="flex flex-col md:flex-row items-center max-w-[1800px] mx-auto gap-5 ">
                <div className="mb-5 md:w-1/2 ">
                    <Image
                        src='/images/ricky-photo.webp'
                        alt="Owner Image"
                        width={600} // Adjust according to the image size
                        height={800} // Adjust according to the image size
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="text-[white] md:w-1/2 ">
                    <h4 className='mb-4'>MEET THE OWNER</h4>
                    <h2 className='mb-5'>Hi, I'm Ricky</h2>
                    <p className='mb-[15px] details text-gray-300'>
                        Working for over a decade in the private jet charter sector has helped me understand the problems that people are facing when looking for jets. Whether it's hard to get a hold of someone, trouble finding flights, or frustrating hidden costs and fees, I've seen it and I feel your pain.
                    </p>
                    <p className='mb-[15px] details text-gray-300'>
                        That's exactly why I created Jet Level — so that you can enjoy the comfort, luxury, and convenience of a private jet without the hassle. Our team is dedicated to getting you on a jet quickly with clear communication and transparent pricing.
                    </p>
                    <p className='mb-[15px] details text-gray-300'>
                        Whether you're traveling for business or pleasure, we're ready to get you from point A to B in style and luxury. So, please, relax and enjoy your flight.
                    </p>
                    <p className='details'><span className='text-cyan-400'>✓&nbsp;</span> 5,000+ world's safest jets</p>
                    <p className='details'><span className='text-cyan-400'>✓&nbsp;</span> 15+ years in business</p>
                    <p className='details'><span className='text-cyan-400'>✓&nbsp;</span> A+ BBB rating</p>
                    <p className='details'><span className='text-cyan-400'>✓&nbsp;</span> 1,000+ annual charters</p>
                    <button className='text-white px-5 py-2 my-5 rounded-full text-lg bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1'>
                        <a href="" className='font-bold'>Book Your Flight</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MeetOwner;
