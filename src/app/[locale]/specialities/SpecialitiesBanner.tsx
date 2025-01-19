'use client';

import React from 'react';
import Image from 'next/image';
import specialitiesbanner from '../../../../public/images/specialities/hero-image.svg';


const SpecialitiesBanner = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-lg md:rounded-none">
      {/* Background Image */}
      <div className="relative w-full h-[189px] md:h-[588px]">
        <Image
          src={specialitiesbanner}
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
            SPECIALITIES
        </h2>
      </div>




  

  

    </section>
  );
};

export default SpecialitiesBanner;
