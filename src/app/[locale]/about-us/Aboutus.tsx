'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import doctorImage from '../../../../public/images/about-us/doctor.svg'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative container bg-white w-full  py-10 md:py-16">
      {/* Breadcrumb */}
      <div className="flex gap-4 items-center absolute  left-0 container ">
        <span className="text-black text-sm md:text-2xl font-normal cursor-pointer">Home</span>
        <MdOutlineArrowForwardIos className="text-black text-sm md:text-lg" />
        <span className="text-[#009B7B] text-sm md:text-2xl font-normal">About Us</span>
      </div>

      {/* Mobile Layout */}
      {isMobile ? (
        <>
          {/* Highlight Section 1 */}
          <div className="mt-[56px] md:mt-[88px] text-[#3C4959]">
            <h2 className="text-[#009B7B] text-[20px] font-bold mb-2">Our Mission</h2>
            <p className="text-[16px] leading-[155%]">
              At IBO Clinics, patients are our top priority. We assist each individual in attaining peak wellness and health
              through a comprehensive approach to oral health. This involves more than just addressing cavities.
            </p>
          </div>

          {/* Highlight Section 2 */}
          <div className="mt-[40px] text-[#3C4959]">
            <h2 className="text-[#009B7B] text-[20px] font-bold mb-2">We Love Creating Happy Smiles.</h2>
            <p className="text-[16px] leading-[155%]">
              We work hard to stay up to date with the most advanced techniques and technologies to ensure that our
              patients receive the best care possible.
            </p>
          </div>

          {/* Mobile Image */}
          <div className="mt-[40px] w-full h-[517px] rounded-lg overflow-hidden">
            <Image src={doctorImage} alt="Doctor" layout="responsive" width={388} height={517} objectFit="cover" />
          </div>
        </>
      ) : (
        // Desktop Layout
        <div className="grid grid-cols-2 gap-[40px] mt-[128px] w-full">
          {/* Text Section */}
          <div className="">
            <h2 className="text-[#009B7B] text-[28px] font-bold mb-4">Our Mission</h2>
            <p className="text-[#828282] text-[18px] leading-[155%] mb-8">
              At IBO Clinics, patients are our top priority. We assist each individual in attaining peak wellness and
              health through a comprehensive approach to oral health. This involves more than just addressing cavities; we
              also consider cranio-facial development, bite and joint balance, oral flora, muscle balance, and
              compatibility of dental materials.
            </p>

            <h2 className="text-[#009B7B] text-[28px] font-bold mb-4">We Love Creating Happy Smiles.</h2>
            <p className="text-[#828282] text-[18px] leading-[155%]">
              We work hard to stay up to date with the most advanced techniques and technologies to ensure that our
              patients receive the best care possible. Our office utilizes 3D CBCT radiographs for guided surgical and
              endodontic protocols.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-[453px] h-[603px] rounded-lg overflow-hidden mx-auto">
            <Image src={doctorImage} alt="Doctor" layout="fill" objectFit="cover" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
