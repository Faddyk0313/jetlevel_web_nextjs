import FaqList from '@/components/FaqList';
import Image from 'next/image';

const Faqs = () => {
    return (
        <section className="max-w-[1800px] mx-auto p-6">
            <h4 className='text-center text-[#6cc4e9] font-bold mb-2'>GET ANSWERS</h4>
            <h2 className="text-center font-bold mb-8">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col lg:justify-center md:flex-row">
                <div className="md:w-1/2 min-w-[50%] md:my-auto">
                    <Image
                        src="/images/FaqImage.webp"
                        alt="Interior of a luxury private jet with a table set with champagne glasses and a bottle"
                        layout="responsive"
                        width={700} // Adjust according to the image size
                        height={475}
                        className='w-auto h-auto md:w-1/2 '
                    />
                </div>
                <FaqList />
            </div>
        </section >
    );
};

export default Faqs;
