'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import videoBackground from '../../../../../public/images/patient-experience/reviewimage.svg';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const VideoPlayerSection = () => {
  const router = useRouter();
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const toggleVideo = () => {
    setIsVideoVisible((prev) => !prev);
  };

  return (
    <section className=" relative bg-white overflow-hidden">
      {/* Breadcrumb Section */}
      <div className="flex container items-center w-full md:py-12 py-8 ">
        <nav className="text-[16px] md:text-[28px] font-[400] text-black flex gap-2">
          <span onClick={() => router.push('/')} className="hover:cursor-pointer">
            Home
          </span>
          <div className="flex items-center">
            <MdOutlineArrowForwardIos />
          </div>
          <span className="text-[#009B7B] ">Patient Experience</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="w-full text-center py-6">
        <h1 className="text-[20px] md:text-[48px] font-bold text-[#009B7B]">PATIENT EXPERIENCE</h1>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[399px] md:h-[706px]">
        {!isVideoVisible ? (
          <>
            {/* Background Image */}
            <Image
              src={videoBackground}
              alt="Patient Experience Video"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Text Content */}
            <div className="absolute top-[20%] md:top-[64px] left-[10%] md:left-[312px] text-white max-w-[336px] md:max-w-[967px]">
              <h2 className="text-[20px] md:text-[48px] font-normal mb-2">Patients Share their Review</h2>
              <div className="w-[87px] md:w-[302px] border-t-2 md:border-t-[3px] border-[#00B194] mb-4"></div>
              <p className="text-[12px] md:text-[20px] leading-[20px] md:leading-[34px]">
                Renowned philanthropist, Dr. Elena Nwosu, 78 years old, former Minister of Health and Social Services
                in Ghana, expresses her gratitude to the Tokyo Medical Center for the exceptional healthcare services
                and compassionate support provided during her stay.
              </p>
            </div>
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={toggleVideo}
                className="w-[32px] md:w-[100px] h-[32px] md:h-[100px] flex items-center justify-center bg-white rounded-full shadow-lg"
              >
                <TbPlayerPlayFilled className="text-[#1C5F4E] text-[16px] md:text-[52px] text-center" />
              </button>
            </div>
          </>
        ) : (
          // Video Player
          <video
            src="/videos/patient-experience.mp4"
            controls
            autoPlay
            className="w-full h-full rounded-lg"
          />
        )}
      </div>
    </section>
  );
};

export default VideoPlayerSection;
