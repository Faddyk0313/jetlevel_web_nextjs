import Image from 'next/image';

const MeetOwner = () => {
    return (
        <section className="blue-background p-7">
            <div className="flex flex-col gap-7 max-w-[1800px] mx-auto">
                <div className="flex bg-red-900 h-[800px] w-full md:w-6/12">
                    <Image
                        src='/src/public/blue-background.png'
                        alt="Owner Image"
                        width={600} // Adjust according to the image size
                        height={800} // Adjust according to the image size
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="flex-1 text-[white] w-6/12 ">
                    <h2 className='text-white mb-5'>MEET THE OWNER</h2>
                    <h3 className='font-bold mb-5'>Hi, I'm Ricky</h3>
                    <p className='mb-[15px] details'>
                        Working for over a decade in the private jet charter sector has helped me understand the problems that people are facing when looking for jets. Whether it’s hard to get a hold of someone, trouble finding flights, or frustrating hidden costs and fees, I’ve seen it and I feel your pain.
                    </p>
                    <p className='mb-[15px] details'>
                        That’s exactly why I created Jet Level — so that you can enjoy the comfort, luxury, and convenience of a private jet without the hassle. Our team is dedicated to getting you on a jet quickly with clear communication and transparent pricing.
                    </p>
                    <p className='mb-[15px] details'>
                        Whether you’re traveling for business or pleasure, we’re ready to get you from point A to B in style and luxury. So, please, relax and enjoy your flight.
                    </p>
                    <ul className=''>
                        <li>5,000+ world’s safest jets</li>
                        <li>15+ years in business</li>
                        <li>A+ BBB rating</li>
                        <li>1,000+ annual charters</li>
                    </ul>
                    <button >
                        <a href="#search-form">Book Your Flight</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MeetOwner;
