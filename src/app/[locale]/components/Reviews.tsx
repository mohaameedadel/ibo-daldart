'use client';
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import person1 from '../../../../public/images/reviews/person1.svg';
import person2 from '../../../../public/images/reviews/person2.svg';

interface Review {
  id: number;
  userImage: string;
  username: string;
  time: string;
  rating: number;
  reviewText: string;
}

const reviews: Review[] = [
  {
    id: 1,
    userImage: person1.src,
    username: 'Samantha Johnson',
    time: 'One month ago',
    rating: 5,
    reviewText:
      "I ordered the development of an online store from the guys. What can I say, I am very satisfied, they made the store turnkey with basic SEO settings (I don't plan to promote it yet) but there will already be an opportunity to do so. I recommend it, price, quality, and communication are top-notch.",
  },
  {
    id: 2,
    userImage: person2.src,
    username: 'Alex Brown',
    time: 'Two weeks ago',
    rating: 5,
    reviewText:
      "I ordered the development of an online store from the guys. What can I say, I am very satisfied, they made the store turnkey with basic SEO settings (I don't plan to promote it yet) but there will already be an opportunity to do so. I recommend it, price, quality, and communication are top-notch.",
  },
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="container pt-[56px] relative overflow-hidden">
      {/* Section Title */}
      <h2 className="text-center text-[#009B7B] md:text-[48px] text-[20px] font-bold mb-8">Reviews</h2>

      {/* Reviews Slider */}
      <div className="flex items-center justify-center gap-4 md:gap-[46px] relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Review"
          className="p-2 bg-[#009B7B] rounded-full hover:bg-[#007A63] transition-colors"
        >
          <FaChevronLeft className="text-white" />
        </button>

        {/* Slider Wrapper */}
        <div
          ref={sliderRef}
          className="flex w-full overflow-hidden snap-x snap-mandatory gap-6 md:gap-[24px] scroll-smooth"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="snap-center shrink-0 w-[90%] md:w-[550px] h-[210px] bg-white shadow-md rounded-md border border-gray-100 p-4"
            >
              <div className="flex gap-4 items-start">
                {/* User Avatar */}
                <div className="w-[50px] h-[50px] flex-shrink-0">
                  <Image
                    src={review.userImage}
                    alt={review.username}
                    width={50}
                    height={50}
                    priority
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Review Content */}
                <div className="flex flex-col gap-[6.3px]">
                  <h3 className="font-bold text-[15px] text-black leading-[17px]">{review.username}</h3>
                  <p className="text-[#676767] text-sm">{review.time}</p>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <span key={index} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-[14px] font-normal text-[#828282] leading-[16.1px] mt-2">
                    {review.reviewText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Review"
          className="p-2 bg-[#009B7B] rounded-full hover:bg-[#007A63] transition-colors"
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center gap-[12px] mt-6 absolute left-1/2 transform -translate-x-1/2 bottom-0">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-[32px] h-[4px] rounded-md transition-all ${
              currentIndex === index
                ? 'bg-[#21BCB8]'
                : 'bg-[rgba(33,188,184,0.3)]'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
