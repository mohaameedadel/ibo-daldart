"use client";
import Image from 'next/image'
import logo from '../../../../public/images/logo.svg'

import {
  FaInstagram,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa";

const Footer = () => {
  return (
  <div className='w-full bg-[#F9F8FB]'>

    <footer className="bg-[#F9F8FB] pt-10 pb-6 text-gray-600 text-sm container">
      {/* Row 1: Logo & Social Media */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-8 px-4">
        {/* Logo */}
        <div>
          <Image
            src={logo}
            alt="IBO Logo"
            width={128} // Width for mobile screens (w-24)
            height={128}
            className="md:w-32 md:h-32 w-24 h-24"
            priority
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-[#006A51] text-2xl">
          <FaInstagram />
          <FaFacebook />
          <FaGoogle />
          <FaLinkedin />
          <FaTiktok />
          <FaSnapchat />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-8" />

      {/* Row 2: Columns */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-8">
        {/* Column 1: Specialities */}
        <div>
          <h3 className="text-[#006A51] text-lg font-bold mb-4">
            SPECIALITIES
          </h3>
          <ul className="space-y-2">
            <li>Dermatology & Aesthetics</li>
            <li>Dental Care</li>
            <li>Mental Health</li>
            <li>Women & Child</li>
            <li>Men&apos;s Health</li>
            <li>Diagnostics</li>
            <li>Family Medicine</li>
            <li>Internal Medicine</li>
            <li>Nutrition</li>
            <li>Orthopaedics</li>
          </ul>
        </div>

        {/* Column 2: Doctors */}
        <div>
          <h3 className="text-[#006A51] text-lg font-bold mb-4">DOCTORS</h3>
          <ul className="space-y-2">
            <li>Dr. Walaa Abdelfattah</li>
            <li>Dr. Yasmeen Khan</li>
            <li>Dr. Asmaa Khoder Taleb</li>
            <li>Dr. Rahmaa Araar</li>
            <li>Dr. Hanan Helmy</li>
            <li>Dr. Maha Al-Azzawi</li>
            <li>Dr. Sokaina Hydar</li>
            <li>Dr. Abida Wasim Khan</li>
            <li>Dr. Mohamad Daqaq</li>
            <li>Dr. Irshad Mohiuddin</li>
          </ul>
        </div>

        {/* Column 3: Insurances */}
        <div>
          <h3 className="text-[#006A51] text-lg font-bold mb-4">INSURANCES</h3>
          <ul className="space-y-2 text-[#828282] text-[16px] font-[400] ">
            <li>Almadallah</li>
            <li>Albuheira</li>
            <li>Adnic</li>
            <li>FMC</li>
            <li>MetLife</li>
            <li>NAS</li>
            <li>Nextcare</li>
            <li>Neuron</li>
            <li>NGI</li>
            <li>Oman</li>
          </ul>
        </div>

        {/* Column 4: About */}
        <div>
          <h3 className="text-[#006A51] text-lg font-bold mb-4">ABOUT</h3>
          <ul className="space-y-2 text-[#828282] text-[16px] font-[400] ">
            <li>IBO</li>
            <li>Contact</li>
            <li>WhatsApp</li>
            <li>Location</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-4" />

      {/* Row 3: Copyright & Links */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 text-center md:text-left">
        <p>
          © BO Medical Center L.L.C. 2023. All Rights Reserved. 
        </p>
        <p>
        MOH License: 9000226363839
        </p>
        <div className="flex gap-[36px] text-[#006A51]  text-[16] font-[400]">
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQs</a>
          <a href="#">Careers</a>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
