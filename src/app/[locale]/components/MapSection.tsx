'use client';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const MapSection = () => {
  return (
    <section className="relative bg-white py-12 px-4 md:px-0">
      {/* Section Title */}
      <h2 className="text-[#009B7B] text-center font-[700] md:text-[48px] text-[20px] uppercase mb-8">
        How to Reach Us
      </h2>

      {/* Map and Info Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        {/* Map Section */}
        <div className="w-full md:w-[880px] h-[492px] rounded-md overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509676!2d144.955651315316!3d-37.8173279797513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776a95b2a2f51e!2sGoogle!5e0!3m2!1sen!2sus!4v1622154004378!5m2!1sen!2sus"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </div>

        {/* Info Boxes */}
        <div className="flex w-full md:w-fit flex-col gap-6 md:gap-10">
          {/* Address Box */}
          <div className="flex items-center gap-4 shadow-md md:shadow-none w-full md:w-content py-[6px] pl-[9px] rounded-md md:rounded-none">
            <div className="w-16 h-16 bg-[#21BCB8] rounded-full flex items-center justify-center text-white text-[24px]">
              <FaMapMarkerAlt />
            </div>
            <span className="text-[#21BCB8] text-lg md:text-[24px] font-[700]">Clinic Address</span>
          </div>

          {/* Chat Box */}
          <div className="flex items-center gap-4 shadow-md md:shadow-none w-full md:w-content py-[6px] pl-[9px] rounded-md md:rounded-none">
            <div className="w-16 h-16 bg-[#21BCB8] rounded-full flex items-center justify-center text-white text-[24px]">
              <FaWhatsapp />
            </div>
            <span className="text-[#21BCB8] text-lg md:text-[24px] font-[700]">Chat With Us</span>
          </div>

          {/* Email Box */}
          <div className="flex items-center gap-4 shadow-md md:shadow-none w-full md:w-content py-[6px] pl-[9px] rounded-md md:rounded-none">
            <div className="w-16 h-16 bg-[#21BCB8] rounded-full flex items-center justify-center text-white text-[24px]">
              <FaEnvelope />
            </div>
            <span className="text-[#21BCB8] text-lg md:text-[24px] font-[700]">info@ibo.com</span>
          </div>

          {/* Phone Box */}
          <div className="flex items-center gap-4 shadow-md md:shadow-none w-full md:w-content py-[6px] pl-[9px] rounded-md md:rounded-none">
            <div className="w-16 h-16 bg-[#21BCB8] rounded-full flex items-center justify-center text-white text-[24px]">
              <FaPhone />
            </div>
            <span className="text-[#21BCB8] text-lg md:text-[24px] font-[700]">065180800</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
