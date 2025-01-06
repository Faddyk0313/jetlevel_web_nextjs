import React, { useState } from 'react';
import Button from '@/components/Button';

const SubscribeUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Name:', name);
    // console.log('Email:', email);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div 
      className="relative w-full h-[550px] bg-fixed bg-cover bg-center" 
      style={{ backgroundImage: 'url(/images/private-jet-charter-services.jpg)' }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
        <div className="z-10 text-center w-[63%]">
          <h2 className="text-4xl text-white font-bold mb-4">Flights straight to your inbox          </h2>
          <p className="mb-6 mt-8">Sign up to receive weekly empty leg flights deals.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-x-[10px] pt-6 rounded-lg justify-center">
            <div className="mb-4 w-[32%] max-[700px]:w-full">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-3 border border-gray-300 focus:outline-transparent text-black"
                required 
              />
            </div>
            <div className="mb-4 w-[32%] max-[700px]:w-full">
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full p-3 border border-gray-300 focus:outline-transparent text-black"
                required 
              />
            </div>
            <div>
             
              <Button 
                text="Subscribe Now" 
                className="w-full bg-[#222222] rounded-lg mt-0 mb-0 p-[20px_30px_20px_30px] text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
