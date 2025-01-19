'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormTextInput from '../components/text-input/TextInput';
import { MdOutlineMail, MdOutlineAccessTime, MdOutlinePhone, MdOutlineArrowBackIos } from 'react-icons/md';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {useRouter} from 'next/navigation'
// Google Map Configuration
const mapContainerStyle = {
    width: '100%',
    height: '325px',
    borderRadius: '12px',
    border: '2px solid #21BCB8',
  };
  
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };
  
  const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
  
  // Form Input Types
  type ContactFormInputs = {
    fullName: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
  
  const ContactUs = () => {
    const { control, handleSubmit, register, formState: { errors } } = useForm<ContactFormInputs>();
    const router = useRouter()
  
    const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
      console.log('Form Data:', data);
    };
  
    return (
      <section className="bg-white container w-full py-12 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 absolute top-12 left-0 md:top-[48px] container text-[16px] md:text-[28px]">
          <span className="text-black font-normal" onClick={()=>router.push('/')}>Home</span>
          <MdOutlineArrowBackIos className="rotate-180 text-black text-[20px]" />
          <span className="text-[#009B7B] font-normal">Contact Us</span>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-1 grid-cols-reverse md:grid-cols-2 gap-12  md:gap-16 mt-24">
          
          {/* Left Side - Contact Information */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            {/* Google Map */}
            <div className="w-full h-[325px] overflow-hidden rounded-[12px] border-2 border-[#21BCB8]">
              <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
  
            {/* Info Cards */}
            {[
              { icon: MdOutlineAccessTime, title: 'Clinic Timings', text: 'Mon-Sat (9:00am - 5:00pm)\nSunday Closed' },
              { icon: MdOutlineMail, title: 'Email Address', text: 'info@ibo.com' },
              { icon: MdOutlinePhone, title: 'Phone Number', text: '+971 23456-2123' },
            ].map((info, index) => (
                <div
                key={index}
                className="bg-white/50 shadow-lg backdrop-blur-md backdrop-saturate-150 p-4 flex gap-4 items-center border border-gray-100"
              >
                <div className="w-[53px] h-[53px] bg-[#21BCB8] rounded-full flex items-center justify-center">
                  <info.icon className="text-white text-[24px]" />
                </div>
                <div>
                  <h3 className="text-[#011632] text-[18px] font-[400]">{info.title}</h3>
                  <p className="text-[#3C4959] text-[16px] whitespace-pre-line">{info.text}</p>
                </div>
              </div>
              
            ))}
          </div>
  
          {/* Right Side - Contact Form */}
          <div className="flex flex-col border border-[#21BCB8] rounded-[12px] p-6 md:p-8 bg-white shadow-md order-1 md:order-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <FormTextInput
                name="fullName"
                control={control}
                label="Full Name"
                placeholder="Enter your name"
                rules={{ required: 'Full Name is required' }}
                error={errors.fullName?.message}
                fullWidth
                className="w-full border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#21BCB8]"
              />
  
              {/* Email */}
              <FormTextInput
                name="email"
                control={control}
                label="Email"
                placeholder="you@example.com"
                rules={{
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                }}
                error={errors.email?.message}
                fullWidth
                className="w-full border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#21BCB8]"
              />
  
              {/* Phone Number */}
              <FormTextInput
                name="phoneNumber"
                control={control}
                label="Phone Number"
                placeholder="+971 12345 6789"
                rules={{ required: 'Phone number is required' }}
                error={errors.phoneNumber?.message}
                fullWidth
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21BCB8]"
              />
  
              {/* Message */}
              <div>
              <label htmlFor="message" className="block text-[#011632] md:font-[400] font-[400] text-[18px]  mb-2">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md p-3 h-[171px] resize-none focus:outline-none focus:ring-2 focus:ring-[#21BCB8]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
  
              {/* Submit Button */}


              <button
                type="submit"
                className="w-[328px] mx-auto h-[73px] mt-4 bg-[#21BCB8] text-white font-bold text-[15px] uppercase tracking-[0.1em] rounded-[110px] hover:bg-[#1aa8a4] transition flex items-center justify-center gap-2"
                >
                Contact Us
                
              </button>
           
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  