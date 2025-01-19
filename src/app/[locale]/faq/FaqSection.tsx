'use client';

import React, { useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const FAQItem = ({ question, answer }:{question:string, answer:string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full container mx-auto p-4  border rounded-[14px] shadow-md border-[#00B194] bg-white">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="md:text-[22px] text-[12px] font-[400] text-[#000000]">{question}</h3>
        <div
          className={`md:w-[50.66px] w-[24px] md:h-[50.66px] h-[24px] flex items-center justify-center rounded-full border  }`}
        >
          <MdOutlineArrowBackIos
            className={`md:text-[16.51px] text-[10px] text-[#00B194] transform ${isOpen ? 'rotate-90' : ''}`}
         
          />
        </div>
      </div>
      {isOpen && (
        <p className="mt-4 md:text-[18px] text-[12px] text-[#828282] leading-[30px]">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase if it is in original condition.'
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order using the tracking link sent to your email after purchase.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription anytime from your account settings.'
    }
  ];

  return (
    <section className="w-full bg-white container py-12">
      {/* Title */}
      <h1 className="md:text-[48px] text-[20px] font-bold text-[#009B7B] text-center capitalize mb-4">
        Frequently Asked Questions
      </h1>
      {/* Subtitle */}
      <p className="md:text-[18px] text-[14px] font-[400] text-[#828282] text-center mb-8">
      We use only the best quality materials on the market in order to provide the best products to our patients.
      </p>
      {/* FAQ Items */}
      <div className="flex flex-col gap-6">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 