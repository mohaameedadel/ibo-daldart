'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import packages1 from '../../../../public/images/healthcare-packages/packages1.svg';
import packages2 from '../../../../public/images/healthcare-packages/packages2.svg';
import packages3 from '../../../../public/images/healthcare-packages/packages3.svg';
import { useRouter } from 'next/navigation';

const HealthCarePackages: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const cards = [
    { image: packages1, title: 'Care of your Teeth', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { image: packages2, title: 'Care of your Teeth', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { image: packages3, title: 'Care of your Teeth', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { image: packages3, title: 'Care of your Teeth', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { image: packages3, title: 'Care of your Teeth', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { image: packages3, title: 'Care of your Teeth', description: 'Lorem ipsum dolor sit amet consectetur.' },
  ];

  // Detect screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll Navigation for Desktop
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Pixels to scroll per click
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Pagination Navigation for Mobile
  const handlePaginationClick = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <section className="bg-white container flex flex-col items-center py-8 md:py-12 relative overflow-hidden">
      {/* Breadcrumb */}
      <div className="flex items-center container gap-4 top-4 md:top-12">
        <span className="text-black text-sm md:text-2xl font-normal cursor-pointer" onClick={() => router.push('/')}>
          Home
        </span>
        <MdOutlineArrowForwardIos className="text-black text-sm md:text-lg" />
        <span className="text-[#009B7B] text-sm md:text-2xl font-normal">Health Care Packages</span>
      </div>

      {/* Description */}
      <p className="text-[#828282] text-[14px] md:text-[20px] font-[400] md:text-center max-w-[90%] md:max-w-[1296px] mt-12  leading-snug">
        At IBO Medical Center, we pride ourselves on offering exceptional healthcare services. Collaborating with local
        insurance providers, we ensure seamless billing and claims processing for a hassle-free experience. Whether you
        need a regular check-up or specialized treatment, our insurance partners are here to support you throughout your
        journey.
      </p>

      {/* Cards Wrapper with Arrows */}
      <div className="relative w-full mt-12 ">
        {/* Navigation Arrows (Desktop Only) */}
        {!isMobile && (
          <>
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center bg-[#00B194] rounded-full z-10"
            >
              <MdOutlineArrowBackIos className="text-white text-xl" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center bg-[#00B194] rounded-full z-10"
            >
              <MdOutlineArrowForwardIos className="text-white text-xl" />
            </button>
          </>
        )}

        {/* Cards Section */}
        <div 
          ref={scrollRef}
          className={`${
            isMobile ? 'grid grid-cols-1' : 'flex overflow-x-auto whitespace-nowrap scroll-smooth'
          } gap-4 md:gap-[24px] px-[20px] md:px-[50px] `}
          style={{ scrollbarWidth: 'none' }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-[#F2F3F3] rounded-lg min-w-[90%] md:min-w-[30%] h-fit p-[20px] flex-shrink-0 shadow-lg ${
                isMobile && index !== activeCardIndex ? 'hidden' : 'block'
              }`}
            >
              <div className="w-full h-[264px] md:h-[240px] relative rounded-lg overflow-hidden">
                <Image src={card.image} alt="Healthcare Service" fill objectFit="cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#011632] text-lg md:text-xl font-bold mb-2 mt-[20px]">{card.title}</h3>
                <p className="text-[#828282] text-sm md:text-md mb-4">{card.description}</p>
                <div className="flex gap-[16px]">
                  <button className="w-[35%] h-10 bg-[#21BCB8] text-white rounded-md text-[14px] font-[400]">
                    Call Us Now
                  </button>
                  <button className="w-[60%] h-10 bg-[#21BCB8] text-white rounded-md text-[14px] font-[400] px-[11px] py-[9px]">
                    WhatsApp Us Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination (Mobile Only) */}
      {isMobile && (
        <div className="flex gap-2 mt-8 md:mt-12">
          {cards.map((_, index) => (
            <div
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`w-8 h-1 rounded-full cursor-pointer ${
                index === activeCardIndex ? 'bg-[#21BCB8]' : 'bg-[#21BCB8] opacity-30'
              }`}
            ></div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HealthCarePackages;
