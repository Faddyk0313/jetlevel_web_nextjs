import React from 'react';
import Image from 'next/image';

const BrandNames = () => {
    return (
        <section className="flex flex-col md:flex-row md:min-h-[15vh] justify-center items-center max-w-[1800px] mx-auto pt-7 pb-2 md:p-0">
            <h4 className='text-center text-xs tracking-[1px] text-[rgba(26,65,89,0.84)] whitespace-nowrap md:mr-3 lg:mr-6 mb-2 md:mb-0'>AS SEEN ON</h4>
            <div className="grid grid-cols-3 lg:flex  gap-1 justify-between items-center w-[85%]">
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src='https://fly.jetlevel.com/assets/logo%20asset/Yahoo!.png' alt='Yahoo Logo' />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/USA%20Today.png" alt="USA Today Logo" />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/The%20Mercury%20News.png" alt="The Mercury News Logo" />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/GO%20BankingRates.png" alt="GO BankingRates Logo" />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/Techopedia.png" alt="Techopedia Logo" />
                <Image className="opacity-80  lg:min-w-36 lg:max-w-40" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/NewsBreak.png" alt="NewsBreak Logo" />
            </div>
        </section>
    );
};

export default BrandNames;
