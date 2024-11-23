import FaqList from '@/components/FaqList';
import Image from 'next/image';

const Faqs = () => {
    return (
        <section className="max-w-[1800px] mx-auto min-h-screen flex flex-col justify-center px-5 md:px-10 lg:px-20">
            <h4 className='text-center text-lightBlue font-bold mb-2'>GET ANSWERS</h4>
            <h2 className="text-center font-bold mb-8">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col lg:flex-row relative">
                <div className="lg:w-1/2 w-full md:min-w-[600px] md:my-auto">
                    <Image
                        src="/images/FaqImage.webp"
                        alt="Interior of a luxury private jet with a table set with champagne glasses and a bottle"
                        width={700} // Adjust according to the image size
                        height={475}
                        className='w-full h-full'
                    />
                </div>
                <FaqList />
            </div>
        </section >
    );
};

export default Faqs;
