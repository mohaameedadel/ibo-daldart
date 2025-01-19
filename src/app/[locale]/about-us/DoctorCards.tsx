'use client';

import React from 'react';
import Image from 'next/image';
import doctorImage1 from '../../../../public/images/about-us/doctor-image1.svg';
import doctorImage2 from '../../../../public/images/about-us/doctor-image2.svg';
import doctorImage3 from '../../../../public/images/about-us/doctor-image3.svg';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const DoctorCards = () => {
  const doctorData = [
    {
      image: doctorImage1,
      name: 'Dr. Naser',
      specialty: 'Cardiologist',
      description: 'With over 10 years of experience, Dr. John provides specialized cardiac care, ensuring every patient receives the highest quality treatment.'
    },
    {
      image: doctorImage2,
      name: 'Dr. Khaled',
      specialty: 'Dermatologist',
      description: 'A renowned dermatologist offering advanced skin care treatments with precision and dedication.'
    },
    {
      image: doctorImage3,
      name: 'Dr. Magdy',
      specialty: 'Orthopedic Specialist',
      description: "Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist."
    }
  ];

  return (
    <section className="bg-white relative w-full container py-4 md:py-12">

      {/* Section Title and Description */}
      <div className="text-center mt-12 md:mt-0">
        <h2 className="text-[#009B7B] text-[20px] md:text-[42px] font-bold capitalize">Meet Our Doctors</h2>
        <p className="text-[#828282] text-[16px] md:text-[18px] mt-4 max-w-[479px] mx-auto leading-[155%]">
          Our dedicated team of healthcare professionals ensures top-quality care for all patients.
        </p>
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-col h-full gap-8 md:gap-[48px] mt-[50px] md:mt-[100px] ">

        {doctorData.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg md:gap-12 flex flex-col md:flex-row items-center md:items-start overflow-hidden md:h-[397px] w-full mx-auto md:border md:border-gray-100"
          >
            {/* Image */}
            <div className="w-full md:w-[313px] h-[370px] md:h-[397px]  relative flex-shrink-0">
              <Image
                src={doctor.image}
                alt={doctor.name}
                layout="fill"
                objectFit="cover"
                objectPosition='top'
                className="rounded-t-lg md:rounded-l-lg"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col gap-4 md:bg-white bg-[#E6F6FE] ">
              <div className='flex flex-col md:flex-row md:gap-[46px] gap-[7px]'>
                <h3 className="text-[#009B7B] text-[24px] font-bold capitalize">{doctor.name}</h3>
                <p className="text-[#011632] text-[16px] w-[340px] md:text-center">{doctor.specialty}</p>
              </div>
              <p className="text-[#3C4959] text-[18px] leading-[155%] pt-4 font-[400]">
                {doctor.description}
              </p>

                     {/* Button */}
                     <button className="w-content md:w-[328px] py-[28px] px-[24px]  h-[73px] mt-4 bg-[#21BCB8] text-white font-[700] text-[15px] uppercase tracking-[0.1em] leading-[17.25px] rounded-md flex items-center justify-center gap-[30px]">
                <span>Book Appointment</span>
                <MdOutlineArrowForwardIos className="text-white " size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorCards;
