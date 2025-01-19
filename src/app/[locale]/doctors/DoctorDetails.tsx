"use client";

import React from "react";
import { MdCheck } from "react-icons/md";

interface DoctorDetailsProps {
  name: string;
  description: string;
  languages: string;
  specialty: string;
  branches: string;
  credentials: string[];
  expertise: string[];
}

const DoctorDetails: React.FC<DoctorDetailsProps> = ({
  name,
  description,
  languages,
  specialty,
  branches,
  credentials,
  expertise,
}) => {
  return (
    <div className="p-6 md:p-8 flex-1">
      {/* Doctor Name and Description */}
      <h2 className="text-[#000000] text-[24px] md:text-[40px] font-[400]">
        {name}
      </h2>
      <p className="text-[#828282] text-[14px] md:text-[18px] mt-2">
        {description}
      </p>

      {/* Doctor Info */}
      <div className="grid grid-cols-1 gap-4 mt-4 md:mt-6">
        {/* Row Wrapper */}
        <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
          <h4 className="text-[#009B7B] text-[14px] md:text-[24px] font-[700]">
            Spoken Languages:
          </h4>
          <p className="text-[#828282]">{languages}</p>
        </div>

        <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
          <h4 className="text-[#009B7B] text-[14px] md:text-[24px] font-[700]">
            DHA License:
          </h4>
          <p className="text-[#828282]">{specialty}</p>
        </div>

        <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
          <h4 className="text-[#009B7B] text-[14px] md:text-[24px] font-[700]">
            Branches:
          </h4>
          <p className="text-[#828282]">{branches}</p>
        </div>
      </div>

      {/* Credentials */}
      <h4 className="text-[#009B7B] md:text-[24px] text-[20px] font-bold mt-6">
        Credentials:
      </h4>
      <ul className="list-none mt-2">
        {credentials.map((cred, index) => (
          <li key={index} className="flex gap-2 items-start mt-2">
            <MdCheck className="text-[#009B7B] text-xl" />
            <span className="text-[#828282] text-[14px] md:text-[16px]">
              {cred}
            </span>
          </li>
        ))}
      </ul>

      {/* Clinical Expertise */}
      <h4 className="text-[#009B7B] md:text-[24px] text-[20px] font-bold mt-6">
        Clinical Expertise & Services Offered:
      </h4>
      <ul className="list-none mt-2">
        {expertise.map((exp, index) => (
          <li key={index} className="flex gap-2 items-start mt-2">
            <MdCheck className="text-[#009B7B] text-xl" />
            <span className="text-[#828282] text-[14px] md:text-[16px]">
              {exp}
            </span>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <button className="w-full  border bg-[#21BCB8] text-white text-[14px] md:text-[15px] font-[700] py-[36px] px-[28px] rounded-md">
          Request An Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
