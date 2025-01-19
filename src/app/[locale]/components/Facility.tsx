'use client';
import { useState } from 'react';
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import facility from '../../../../public/images/facility-media/facility.png'
const facilityMedia = [
  { type: 'image', src: '/images/facility1.jpg', alt: 'Facility Image 1' },
  { type: 'video', src: '/videos/facility.mp4', alt: 'Facility Video' },
  { type: 'image', src: '/images/facility2.jpg', alt: 'Facility Image 2' }
];

const FacilitySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilityMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilityMedia.length) % facilityMedia.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-white mt-[65px]">
      <h2 className="text-center text-2xl font-bold text-teal-500 py-4">OUR FACILITY</h2>
      <div className="relative w-full h-[400px]">
        {facilityMedia[currentSlide].type === 'image' ? (
          <Image
            src={facility}
            alt={facilityMedia[currentSlide].alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        ) : (
          <video
            src={facilityMedia[currentSlide].src}
            autoPlay={isPlaying}
            controls
            loop
            className="w-full h-full object-cover"
          />
        )}
        <button
          onClick={prevSlide}
          className="absolute md:left-[13%] left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute md:right-[13%] right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md"
        >
          <FaChevronRight size={24} />
        </button>
        {facilityMedia[currentSlide].type === 'video' && (
          <button
            onClick={togglePlay}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md"
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
        )}
      </div>
    </section>
  );
};

export default FacilitySection;