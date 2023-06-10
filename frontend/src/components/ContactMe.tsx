"use client";
import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

const ContactMe = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    window.location.href = `mailto:sarvar.bek.790@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name} ${data.message}`
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3
        className="flex-[0.2] flex items-end justify-center uppercase tracking-[20px] ml-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex-1 flex flex-col justify-center space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have just got what you need.{` `}
          <span className="decoration-[#F7AB0A]/50 underline">Lets talk!</span>
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl ">sarvarbekabdullaev2002@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl ">Tallimarjon 1A</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput" type="text"/>
            <input {...register("email")} placeholder="Email" className="contactInput" type="email"/>
          </div>
          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text"/>
          <textarea {...register("message")} placeholder="Message" className="contactInput"/>
          <button type="submit" className="bg-[#F7Ab0A] py-5 px-10 rounded-md text-black font-bold text-lg uppercase">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;