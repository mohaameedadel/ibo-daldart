'use client'
import { useState } from 'react';
import { FaHeartbeat, FaDna, FaHospitalSymbol, FaStethoscope } from 'react-icons/fa';
import Image from 'next/image';
import service1 from '../../../../public/images/services/service1.png';
import service2 from '../../../../public/images/services/service2.png';
import service3 from '../../../../public/images/services/service3.png';
import service4 from '../../../../public/images/services/service4.png';

// Type for service data
interface ServiceData {
  title: string;
  description: string;
  image: string; // Image URL
}

const ServicesSection: React.FC = () => {
  // State to track the selected service
  const [selectedService, setSelectedService] = useState<string | null>('freeCheckup');

  // Data for the services
  const serviceData: Record<string, ServiceData> = {
    freeCheckup: {
      title: 'A Passion for Healing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: service1.src,
    },
    cardiogram: {
      title: '5-Star Care',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: service2.src,
    },
    dnaTesting: {
      title: 'Believe in Us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: service3.src,
    },
    bloodBank: {
      title: 'Always Caring',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: service4.src,
    },
  };

  // Function to handle service selection
  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className='container'>
      <div className='text-center md:text-[48px] text-[20px] font-[700] md:leading-[55.2px] leading-[23px] text-maintext py-4'>Our Services</div>
      <div className="flex md:flex-row flex-col px-4 gap-8">
        {/* Left Section: Services List */}
        <div className="w-full md:w-[154px] bg-white  shadow-md border h-[484px]">
          <div className="flex flex-col  w-full items-center">
            {/* Free Checkup */}
            <div
              className={`flex flex-col py-6 w-full items-center space-y-2 p-2  cursor-pointer ${selectedService === 'freeCheckup' ? 'bg-teal-500 text-white' : ''}`}
              onClick={() => handleServiceClick('freeCheckup')}
            >
              <FaStethoscope size={32} className={`${selectedService === 'freeCheckup' ? 'text-white' : 'text-teal-500'}`} />
              <p className={`${selectedService === 'freeCheckup' ? 'text-white' : 'text-teal-500'}`}>Free Checkup</p>
            </div>

            {/* Cardiogram */}
            <div
              className={`flex flex-col py-6 w-full items-center space-y-2 cursor-pointer p-2 text-teal-500 ${selectedService === 'cardiogram' ? 'bg-teal-500 text-white' : ''}`}
              onClick={() => handleServiceClick('cardiogram')}
            >
              <FaHeartbeat size={32} className={`${selectedService === 'cardiogram' ? 'text-white' : ''}`} />
              <p className={`${selectedService === 'cardiogram' ? 'text-white' : ''}`}>Cardiogram</p>
            </div>

            {/* DNA Testing */}
            <div
              className={`flex flex-col py-6 w-full items-center space-y-2 cursor-pointer p-2 ${selectedService === 'dnaTesting' ? 'bg-teal-500 text-white' : ''}`}
              onClick={() => handleServiceClick('dnaTesting')}
            >
              <FaDna size={32} className={`${selectedService === 'dnaTesting' ? 'text-white' : 'text-teal-500'}`} />
              <p className={`${selectedService === 'dnaTesting' ? 'text-white' : 'text-teal-500'}`}>DNA Testing</p>
            </div>

            {/* Blood Bank */}
            <div
              className={`flex flex-col py-6 w-full items-center space-y-2 cursor-pointer p-2 ${selectedService === 'bloodBank' ? 'bg-teal-500 text-white' : ''}`}
              onClick={() => handleServiceClick('bloodBank')}
            >
              <FaHospitalSymbol size={32} className={`${selectedService === 'bloodBank' ? 'text-white' : 'text-teal-500'}`} />
              <p className={`${selectedService === 'bloodBank' ? 'text-white' : 'text-teal-500'}`}>Blood Bank</p>
            </div>
          </div>
          <button className="bg-[#21BCB8] text-white py-2 px-4 rounded-b-md w-full">
            View All
          </button>
        </div>

        {/* Right Section: Display selected service details */}
        <div className="flex-1 w-full sm:w-auto h-[484px]">
          {selectedService ? (
            <div className="bg-white p-6 rounded-lg h-full shadow-md border">
              <h2 className="text-2xl font-semibold text-teal-500 mb-4">{serviceData[selectedService].title}</h2>
              <p className="text-gray-700 mb-4">{serviceData[selectedService].description}</p>
              <Image
                src={serviceData[selectedService].image}
                alt={selectedService}
                width={300}
                height={200}
                priority
               
              />
            </div>
          ) : (
            <div className="text-center text-gray-500">Select a service to see details</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
