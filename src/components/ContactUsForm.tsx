"use client";
import React, { useEffect, useState } from "react";
import Button from '@/components/Button';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  numberValue: string;
}

const ContactUsForm: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
    numberValue:""
  });

  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

 // Generate random numbers for the quiz when the component mounts
 useEffect(() => {
  setNum1(Math.floor(Math.random() * 50) + 1); // Random number between 1 and 50
  setNum2(Math.floor(Math.random() * 50) + 1); // Random number between 1 and 50
}, []);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormValues> = {};
    if (!formValues.name) newErrors.name = "Name is required.";
    if (!formValues.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formValues.message) newErrors.message = "Message is required.";

    if (Number(formValues.numberValue) !== Number(num1)+Number(num2)){ 
      newErrors.numberValue = "Wrong Answer."
    }
    console.log(Number(formValues.numberValue), Number(num1),Number(num2),Number(num1)+Number(num2))
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e: React.FormEvent) => {
    try{
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formValues);
      
      
      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:formValues.name,email:formValues.email,message:formValues.message}),
      };
      setFormValues({ name: "", email: "", message: "",numberValue:"" });
      let response = await fetch(
        `/api/contactUs`,
        options,
      );
      if (!response.ok) {
        console.error(`Fetch error: ${response}`);
        return
      }
    }
  }catch(error){
    console.error(`Fetch error: ${error}`);
  }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-[25px] '>
      <div className='flex-col flex w-full'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className='border border-[lightgray] p-2 rounded-md'
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>

      <div className='flex-col flex w-full'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className='border border-[lightgray] p-2 rounded-md'
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div className='flex-col flex w-full'>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows={5}
           className='border border-[lightgray] p-2 rounded-md'
        ></textarea>
        {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
      </div>

      <div className='flex w-full items-center gap-x-2'>
        <label htmlFor="message">{num1} + {num2} =</label>
        <input
          type="text"
          id="email"
          name="numberValue"
          value={formValues.numberValue}
          onChange={handleChange}
          className='border border-[lightgray] p-2 rounded-md w-[40%]'
        />
        {errors.numberValue && <span style={{ color: "red" }}>{errors.numberValue}</span>}
      </div>
      <Button
        text='Send'
        variant='primary'
        className='w-[30%]'
      />
    </form>
  );
};

export default ContactUsForm;
