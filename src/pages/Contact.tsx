import React, { useRef } from "react";
import emailjs from "emailjs-com";
import cellphone from "/mobile.png";
import email from "/email.jpg";


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        SERVICE_ID,  
        TEMPLATE_ID,  
        form.current,
        PUBLIC_KEY    
      )
      .then(
        () => {
          alert("Message sent successfully! 🎉");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message 😢 " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-16"
    >
      <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 ">
        Leave a message, sit back and relax 
      </h2>
      <p className="mb-8 text-center text-gray-600 ">
        I’ll get back to you as soon as possible.
      </p>

     
<div className="flex flex-col w-full max-w-lg gap-5 mb-10 text-gray-700 md:flex-row md:items-center md:justify-center">

  <div className="flex items-center justify-center w-full p-3 space-x-2 bg-pink-100 border md:p-2 rounded-xl">
    <img
      src={email}
      alt="Email Icon"
      className="w-8 h-8"
    />
    <a
      href="mailto:varshinireddy119@gmail.com"
      className="text-sm break-all hover:underline"
    >
      varshinireddy119@gmail.com
    </a>
  </div>

 
  <div className="flex items-center justify-center w-full p-3 space-x-2 text-sm bg-blue-100 border md:p-2 rounded-xl">
    <img
      src={cellphone}
      alt="Phone Icon"
      className="w-8 h-8"
    />
    <span>+1 (940) 344-4360</span>
  </div>
</div>


      
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-6 shadow-xl rounded-xl"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2 text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-[#D9D9D9]"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="p-3 border rounded-lg bg-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="p-3 border rounded-lg resize-none bg-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-offset-blue-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-3 font-semibold border border-[#D9D9D9] text-black transition bg-[] rounded-lg hover:bg-blue-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
