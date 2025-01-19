'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import oncology from '../../../../public/images/specialities/oncology.svg';
import endocrinology from '../../../../public/images/specialities/edocrinology.svg';
import infertility from '../../../../public/images/specialities/infertility.svg';
import mentalHealth from '../../../../public/images/specialities/mental-health.svg';
import surrogacy from '../../../../public/images/specialities/surrogacy.svg';
import dentist from '../../../../public/images/specialities/dentist.svg';
import rheumatology from '../../../../public/images/specialities/rheumatology.svg';
import plasticSurgery from '../../../../public/images/specialities/plastic-surgery.svg';
import rareDiseases from '../../../../public/images/specialities/rare-diseases.svg';
import cardiology from '../../../../public/images/specialities/cardiology.svg';
import { useRouter } from 'next/navigation';

const specialties = [
  { id: 1, name: 'Oncology', icon: oncology },
  { id: 2, name: 'Endocrinology', icon: endocrinology },
  { id: 3, name: 'Infertility', icon: infertility },
  { id: 4, name: 'Mental Health', icon: mentalHealth },
  { id: 5, name: 'Surrogacy', icon: surrogacy },
  { id: 6, name: 'Dentist', icon: dentist },
  { id: 7, name: 'Rheumatology', icon: rheumatology },
  { id: 8, name: 'Plastic Surgery', icon: plasticSurgery },
  { id: 9, name: 'Rare Diseases', icon: rareDiseases },
  { id: 10, name: 'Cardiology', icon: cardiology },
];

const SpecialtiesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  // Show all specialties on desktop, limit to 6 on mobile
  const visibleSpecialties =
    typeof window !== 'undefined' && window.innerWidth < 768 && !showAll
      ? specialties.slice(0, 6)
      : specialties;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="container relative bg-white py-6">
      {/* Breadcrumb */}
      <div className="flex items-center w-full py-4 ">
        <nav className="text-[16px] md:text-[28px] font-[400] text-black flex gap-2">
          <span onClick={() => router.push('/')} className="hover:cursor-pointer">
            Home
          </span>
          <div className="flex items-center">
            <MdOutlineArrowForwardIos />
          </div>
          <span className="text-[#009B7B]">Specialties</span>
        </nav>
      </div>

      {/* Section Title */}
      <div className="w-full text-left md:text-center px-6 md:px-[312px]">
        <h1 className="text-[20px] md:text-[48px] font-bold text-[#009B7B]">Specialties</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-[24px] mt-6">
        {visibleSpecialties.map((specialty) => (
          <div
            key={specialty.id}
            className="flex flex-col items-center justify-center bg-[#F9F9F9] rounded-[30px] h-[152px] md:h-[218px] p-4 hover:shadow-lg transition"
          >
            <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] mb-4">
              <Image
                src={specialty.icon}
                alt={specialty.name}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <h3 className="text-[#009B7B] text-[16px] md:text-[24px] font-bold">{specialty.name}</h3>
          </div>
        ))}
      </div>

      {/* View All Button for Mobile */}
      <div className="md:hidden flex justify-end items-center mt-4 px-6">
        <button
          onClick={toggleShowAll}
          className="text-[#828282] text-[16px] font-medium flex items-center gap-1"
        >
          {showAll ? 'Show Less' : 'View All'}
          <MdOutlineArrowForwardIos
            className={`transform ${showAll ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
