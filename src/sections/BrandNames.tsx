import React from 'react';
import Image from 'next/image';

const BrandNames = () => {
    return (
        <section className="flex flex-col md:flex-row lg:flex-col xl:flex-row min-h-[15vh] justify-center xl:justify-start items-center lg:items-start xl:items-center max-w-[1800px] mx-auto pt-7 pb-2 px-5 md:px-10 xl:px-20">
            <h4 className='text-center text-xs tracking-[1px] text-[#476679] whitespace-nowrap lg:self-center xl:self-auto md:mr-3 xl:mr-6 mb-2 md:mb-0'>AS SEEN ON</h4>
            <div className="grid grid-cols-3 lg:flex  gap-1 justify-between items-center w-full xl:w-[90%]">
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src='/brandNamesImages/Yahoo Logo.png' alt='Yahoo Logo' />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="/brandNamesImages/USA Today Logo.png" alt="USA Today Logo" />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="/brandNamesImages/The Mercury News Logo.png" alt="The Mercury News Logo" />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="/brandNamesImages/GO BankingRates Logo.png" alt="GO BankingRates Logo" />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="/brandNamesImages/Techopedia Logo.png" alt="Techopedia Logo" />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="/brandNamesImages/NewsBreak Logo.png" alt="NewsBreak Logo" />
            </div>
        </section>
    );
};

export default BrandNames;
