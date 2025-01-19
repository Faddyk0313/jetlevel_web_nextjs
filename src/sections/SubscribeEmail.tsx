"use client"
import React, { useState } from "react";


const SubscribeEmail = () => {
    const [email,setEmail] = useState(""); 
    async function handleSubmit(e:any) {
        e.preventDefault();
        // try {

        //     const response = await fetch("/api/subscribe", {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ email }),
        //       });
        
        //       const result = await response.json();
        //     if (!result.ok) {
        //         return
        //     }
        // } catch (error) {
        //     console.error("Error:", error);
        // }
    }



    return (
        
        <form
            method="post"
            className="flex max-w-72 h-14 p-2 border-[#858585] border rounded-2xl"
            onSubmit={handleSubmit}
        >

            <input
                type="email"
                placeholder="Enter your email"
                className="w-full text-sm placeholder-[#858585] bg-black outline-none"
                required
                onChange={(e)=>(setEmail(e.target.value))}
            />
            <button
                type="submit"
                className="cursor-pointer text-xl pr-4 text-[#858585] hover:text-white transition-all duration-150"
                
            >
                →
            </button>
        </form>


/**
 * 
 * <>
<div className="klaviyo-form-TAXCik">sdadss</div>
<Script type="text/javascript" async src="https://static.klaviyo.com/onsite/js/Yvi8Rv/klaviyo.js"></Script>
</>
 * 
 */
    )
}

export default SubscribeEmail;
