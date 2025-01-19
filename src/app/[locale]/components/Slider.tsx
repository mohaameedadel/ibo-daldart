'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import doctorImage from '../../../../public/images/Image Container.png';
import whatsappIcon from '../../../../public/images/contact/whatsapp.svg';
import phoneIcon from '../../../../public/images/contact/phone.svg';

interface Slide {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

const slides: Slide[] = [
  { type: 'image', src: doctorImage.src, alt: 'Doctor smiling' },
  { type: 'video', src: '/intro-video.mp4' },
  { type: 'image', src: '/doctor2.jpg', alt: 'Doctor with equipment' }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full md:h-[1420px] h-[361px] overflow-hidden">
      {/* Slide Content */}
      {slides[currentSlide].type === 'image' ? (
        <Image
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt || 'Slide Image'}
          layout="fill"
          objectPosition="top"
          objectFit="cover"
          priority
        />
      ) : (
        <video
          src={slides[currentSlide].src}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      )}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute md:left-[13%] left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute md:right-[13%] right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Social Icons - Mobile */}
      <div className="absolute bottom-[20px] right-[16px] flex flex-col gap-4 md:hidden">
        {/* WhatsApp Icon */}
        <div className="w-8 h-8 bg-[#21BCB8] rounded-full flex items-center justify-center shadow-md">
          <Image
            src={whatsappIcon}
            alt="WhatsApp Icon"
            width={15}
            height={15}
            className="object-contain"
          />
        </div>

        {/* Phone Icon */}
        <div className="w-8 h-8 bg-[#21BCB8] rounded-full flex items-center justify-center shadow-md">
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

export default Slider;
