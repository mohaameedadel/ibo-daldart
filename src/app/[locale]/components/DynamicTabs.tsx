'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BsSliders } from 'react-icons/bs';
import Image from 'next/image';
import Select from './Select';
import { Control, useForm } from 'react-hook-form';

import insurance1 from '../../../../public/images/insurance/insurance1.png';
import insurance2 from '../../../../public/images/insurance/insurance2.png';
import insurance3 from '../../../../public/images/insurance/insurance3.png';
import insurance4 from '../../../../public/images/insurance/insurance4.png';
import insurance5 from '../../../../public/images/insurance/insurance5.png';
import insurance6 from '../../../../public/images/insurance/insurance6.png';

interface FormValues {
  service: string;
  specialty: string;
}

const DynamicTabs = () => {
  const [activeTab, setActiveTab] = useState<'physician' | 'appointment' | 'insurance'>('physician');
  const { control } = useForm<FormValues>();

  return (
    <section className="relative container mx-auto bg-white mt-8 md:mt-12">
      {/* Tabs Section */}
      <div className="flex flex-row items-center justify-center md:justify-between bg-white shadow-md rounded-lg overflow-hidden border">
        {/* Tab Buttons */}
        <button
          onClick={() => setActiveTab('physician')}
          className={`flex-1 px-4 py-2 h-[92px] text-center transition-all ${
            activeTab === 'physician'
              ? 'border-b-0 border-teal-500 text-teal-500 font-semibold'
              : 'text-gray-500 border-gray-100'
          }`}
        >
          <span className="text-sm md:text-xl">Find a Physician</span>
        </button>

        <button
          onClick={() => setActiveTab('appointment')}
          className={`flex-1 px-4 py-2 h-[92px] text-center transition-all ${
            activeTab === 'appointment'
              ? 'border-b-0 border-teal-500 text-teal-500 font-semibold'
              : 'text-gray-500 border-gray-100'
          }`}
        >
          <span className="text-sm md:text-xl">Request an Appointment</span>
        </button>

        <button
          onClick={() => setActiveTab('insurance')}
          className={`flex-1 px-4 py-2 h-[92px] text-center transition-all ${
            activeTab === 'insurance'
              ? 'border-b-0 border-teal-500 text-teal-500 font-semibold'
              : 'text-gray-500 border-gray-100'
          }`}
        >
          <span className="text-sm md:text-xl">Insurance Coverage</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 px-4 md:px-8">
        {/* Physician Tab */}
        {activeTab === 'physician' && (
          <div className="flex   gap-6 justify-between">
            <Select
              name="service"
              control={control as Control<FormValues>}
              options={[
                { label: 'Service 1', value: 'service1' },
                { label: 'Service 2', value: 'service2' },
              ]}
              placeholder="Select Service"
              className='w-1/2'
           

            />
            <Select
              name="specialty"
              control={control as Control<FormValues>}
              options={[
                { label: 'Specialty 1', value: 'specialty1' },
                { label: 'Specialty 2', value: 'specialty2' },
              ]}
              placeholder="Select Specialty"
              className='w-1/2'
            />
          </div>
        )}

        {/* Appointment Tab */}
        {activeTab === 'appointment' && (
          <div className="flex justify-center mt-4">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        )}

        {/* Insurance Tab */}
        {activeTab === 'insurance' && (
          <div className="w-full">
            {/* Dropdown and Filter */}
            <div className="flex w-full gap-[58px] items-center justify-center">
              <Select
                name="specialty"
                control={control as Control<FormValues>}
                options={[
                  { label: 'Specialty 1', value: 'specialty1' },
                  { label: 'Specialty 2', value: 'specialty2' },
                ]}
                placeholder="Select Specialty"
                className="w-full"
              />
              <button className="  flex justify-center items-center rounded-md">
                <BsSliders className="text-teal-500 m-0 w-[64px] h-[64px]" size={25} />
              </button>
            </div>

            {/* Insurance Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 items-center">
              {[insurance1, insurance2, insurance3, insurance4, insurance5, insurance6].map(
                (img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Insurance ${index + 1}`}
                    width={150}
                    height={75}
                    priority
                    className="object-contain mx-auto"
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicTabs;
