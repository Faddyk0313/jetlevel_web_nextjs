"use client";
import React, { useState } from "react";
import { Button } from './ui/button';

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
    numberValue:''
  });

  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formValues);
      setFormValues({ name: "", email: "", message: "",numberValue:"" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-[25px] items-start'>
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

      <div className='flex flex w-full items-center gap-x-2'>
        <label htmlFor="message">12+ 48 =</label>
        <input
          type="text"
          id="email"
          name="numberValue"
          value={formValues.numberValue}
          onChange={handleChange}
          className='border border-[lightgray] p-2 rounded-md w-[40%]'
        />
        {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
      </div>
      <button className='bg-[#0071BA] p-3 text-lg text-white font-bold w-[30%]'>Send</button>
    </form>
  );
};

export default ContactUsForm;
