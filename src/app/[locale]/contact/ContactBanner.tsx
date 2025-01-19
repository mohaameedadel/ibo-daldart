"use client";

import React from "react";
import Image from "next/image";

import whatsappIcon from "../../../../public/images/contact/whatsapp.svg";
import phoneIcon from "../../../../public/images/contact/phone.svg";
import contactbanner from "../../../../public/images/contact/contactbanner.svg";
const ContactBanner = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-lg md:rounded-none">
      {/* Background Image */}
      <div className="relative w-full h-[189px] md:h-[588px]">
        <Image
          src={contactbanner}
          alt="Patient Experience"
          layout="fill"
          objectFit="cover"
          className="rounded-lg md:rounded-none"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-lg md:rounded-none"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-4 md:bottom-14 left-4 md:left-[150px] text-white">
        <h2 className="text-lg md:text-[56px] font-medium md:font-normal">
          CONTACT US
        </h2>
      </div>

      {/* Social Icons - Mobile */}
      <div className="absolute top-[105px] right-4 flex flex-col gap-4 md:hidden">
        {/* WhatsApp Icon */}
        <div className="w-8 h-8 bg-[#21BCB8] rounded-full flex items-center justify-center">
          <Image
            src={whatsappIcon}
            alt="WhatsApp Icon"
            width={15}
            height={15}
            className="object-contain"
          />
        </div>

        {/* Phone Icon */}
        <div className="w-8 h-8 bg-[#21BCB8] rounded-full flex items-center justify-center">
          <Image
            src={phoneIcon}
            alt="Phone Icon"
            width={15}
            height={15}
            className="object-contain"
          />
        </div>
      </div>

      {/* Social Buttons - Desktop */}
      <div className="hidden md:flex absolute bottom-[56px] right-[160px] flex-col gap-6">
        {/* WhatsApp Button */}
        <button className="flex flex-row-reverse items-center justify-center gap-[9.5px] bg-[#21BCB8] text-white px-4 py-2 w-[257px] h-[69px] rounded-full text-[18px] font-[700] shadow-lg">
          <div>Chat with us</div>
          <Image
            src={whatsappIcon}
            alt="WhatsApp Icon"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>

        {/* Phone Button */}
        <button className="flex flex-row-reverse items-center justify-center gap-[9.5px] bg-[#21BCB8] text-white px-4 py-2 w-[257px] h-[69px] rounded-full text-[18px] font-[700] shadow-lg">
          <div>065180800</div>
          <Image
            src={phoneIcon}
            alt="Phone Icon"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>
      </div>
    </section>
  );
};

export default ContactBanner;
