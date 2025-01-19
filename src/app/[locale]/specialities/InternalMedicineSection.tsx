'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MdCheck } from 'react-icons/md';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import internalMedicineThumbnail from '../../../../public/images/specialities/dermatologyimage.svg';

const InternalMedicineSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <section className="container bg-white overflow-hidden py-8 md:py-16">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Text Block - Mobile Top */}
        <div className="w-full md:max-w-[650px] text-center md:text-left order-1 md:order-1">
          <h2 className="text-[#006A51] text-[20px] md:text-[40px] font-bold uppercase leading-tight">
            INTERNAL MEDICINE
          </h2>
          <p className="text-[#828282] text-[16px] md:text-[16px] leading-[24px] mt-4">
            Blandit at maecenas dui sed amet sit enim vitae. Amet purus dictum urna sagittis dignissim.
            At fermentum nisl ullamcorper orci.
          </p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-start gap-2">
              <MdCheck className="text-[#2F6B5A] text-xl md:text-2xl" />
              <span className="text-sm md:text-base text-black">Pellentesque ullamcorper erat diam volutpat arcu vel ac</span>
            </li>
            <li className="flex items-start gap-2">
              <MdCheck className="text-[#2F6B5A] text-xl md:text-2xl" />
              <span className="text-sm md:text-base text-black">Mauris pellentesque tortor ut pellentesque a in iaculis id egestas eleifend</span>
            </li>
            <li className="flex items-start gap-2">
              <MdCheck className="text-[#2F6B5A] text-xl md:text-2xl" />
              <span className="text-sm md:text-base text-black">Eu eu consequat morbi non mattis lacus iaculis accumsan</span>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-row gap-4 mt-[73px]">
            <button className="w-[198px] h-[73px] bg-[#21BCB8] text-white text-[15px] font-semibold uppercase rounded-md">
              Learn More
            </button>
            <button className="w-[328px] h-[73px] border border-[#21BCB8] text-[#21BCB8] text-[15px] font-semibold uppercase rounded-md flex items-center justify-center gap-2">
              Book an Appointment
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>

        {/* Video Block */}
        <div className="relative w-full md:w-[636px] h-[300px] md:h-[480px] rounded-lg overflow-hidden order-2 md:order-2">
          <Image
            src={internalMedicineThumbnail}
            alt="Internal Medicine Video Thumbnail"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={toggleVideoModal}
              className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <TbPlayerPlayFilled className="text-[#756F67] text-[52px]" />
            </button>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden flex-row gap-4 mt-6 justify-center w-full order-3">
          <button className="w-[129px] h-[42px] bg-[#21BCB8] text-white text-[12px] font-semibold uppercase rounded-md">
            Learn More
          </button>
          <button className="w-[239px] h-[42px] border border-[#21BCB8] text-[#21BCB8] text-[12px] font-semibold uppercase rounded-md flex items-center justify-center gap-2">
            Book an Appointment
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[70%] max-w-[960px]">
            <video
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              <source src="/videos/internal-medicine.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={toggleVideoModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default InternalMedicineSection;
