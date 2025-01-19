'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import logo1 from '../../../../public/images/insurance/logo1.svg';
import logo2 from '../../../../public/images/insurance/logo2.svg';
import logo3 from '../../../../public/images/insurance/logo3.svg';
import logo4 from '../../../../public/images/insurance/logo4.svg';
import logo5 from '../../../../public/images/insurance/logo5.svg';
import logo6 from '../../../../public/images/insurance/logo6.svg';
import logo7 from '../../../../public/images/insurance/logo7.svg';
import logo8 from '../../../../public/images/insurance/logo8.svg';
import { useRouter } from 'next/navigation';

const InsuranceList = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos = [
    { src: logo1, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
    { src: logo6, alt: 'Logo 6' },
    { src: logo7, alt: 'Logo 7' },
    { src: logo8, alt: 'Logo 8' },
  ];

  // Scroll Handler for Mobile Arrows
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden container mx-auto  py-8 md:py-12">
      {/* Breadcrumb Navigation */}
      <div className="absolute  container top-12 left-0 flex gap-4 items-center">
        <span className="text-black text-sm md:text-2xl font-normal cursor-pointer" onClick={() => router.push('/')}>
          Home
        </span>
        <MdOutlineArrowForwardIos className="text-black text-sm md:text-lg" />
        <span className="text-[#009B7B] text-sm md:text-2xl font-normal">Quality Care</span>
      </div>

      {/* Description */}
      <p className="absolute top-[95px] md:top-[128px] left-1/2 transform -translate-x-1/2 md:text-center text-[#828282] text-[14px] md:text-[20px] container leading-snug">
        At IBO Medical Center, we offer exceptional healthcare services. Collaborating with local insurance providers,
        we ensure seamless billing and claims processing for a hassle-free experience.
      </p>

      {/* Logos Section */}
      {isMobile ? (
        // Mobile View - Scrollable Row with Arrows
        <div className="relative mt-[220px] ">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="w-[152px] h-[152px] flex-shrink-0 flex justify-center items-center rounded-lg overflow-hidden"
              >
                <Image src={logo.src} alt={logo.alt} width={152} height={152} objectFit="contain" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-4 px-4">
            <button
              onClick={() => scroll('left')}
              className="w-[32px] h-[32px] flex items-center justify-center bg-[#00B194] rounded-full"
            >
              <MdOutlineArrowBackIos className="text-white text-lg" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-[32px] h-[32px] flex items-center justify-center bg-[#00B194] rounded-full"
            >
              <MdOutlineArrowForwardIos className="text-white text-lg" />
            </button>
          </div>
        </div>
      ) : (
        // Desktop View - Two Rows Layout
        <div className="grid grid-cols-5 md:grid-rows-2 gap-8 mt-[200px] w-full px-[50px]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-full h-[150px] md:h-[180px] flex justify-center items-center rounded-lg overflow-hidden"
            >
              <Image src={logo.src} alt={logo.alt} width={180} height={150} objectFit="contain" />
            </div>
          ))}
        </div>
      )}

      {/* Hide scrollbar globally for the logos container */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* Internet Explorer and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
};

export default InsuranceList;
