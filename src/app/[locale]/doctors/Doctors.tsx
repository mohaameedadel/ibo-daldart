"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsSliders } from "react-icons/bs";
import doctorImg from "../../../../public/images/doctors/doctorimage.svg";
import Select from "../components/Select";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DoctorDetails from "./DoctorDetails";

// Dummy doctors array
const doctors = [
  {
    id: 1,
    name: "Mohamed Salem",
    specialty: "Specialist Orthopedic Surgeon",
    languages: "Arabic, English",
    clinic: "IBD Clinics",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 2,
    name: "Salem Elshansy",
    specialty: "Specialist Orthopedic Surgeon",
    languages: "Arabic, English",
    clinic: "IBD Clinic",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 3,
    name: "Ramez Anwer",
    specialty: "Specialist Optometrist",
    languages: "Arabic, English",
    clinic: "IBD Clinic",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 4,
    name: "Mohamed Salem",
    specialty: "Specialist Orthopedic Surgeon",
    languages: "Arabic, English",
    clinic: "IBD Clinics",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 5,
    name: "Salem Elshansy",
    specialty: "Specialist Orthopedic Surgeon",
    languages: "Arabic, English",
    clinic: "IBD Clinic",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 6,
    name: "Ramez Anwer",
    specialty: "Specialist Optometrist",
    languages: "Arabic, English",
    clinic: "IBD Clinic",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 7,
    name: "Mohamed Salem",
    specialty: "Specialist Orthopedic Surgeon",
    languages: "Arabic, English",
    clinic: "IBD Clinics",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 8,
    name: "Salem Elshansy",
    specialty: "Specialist Orthopedic Surgeon",
    languages: "Arabic, English",
    clinic: "IBD Clinic",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 9,
    name: "Ramez Anwer",
    specialty: "Specialist Optometrist",
    languages: "Arabic, English",
    clinic: "IBD Clinic",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 10,
    name: "Mohamed Salem",
    specialty: "Specialist Orthopedic Surgeon",
    languages: "Arabic, English",
    clinic: "IBD Clinics",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 11,
    name: "Salem Elshansy",
    specialty: "Specialist Orthopedic Surgeon",
    languages: "Arabic, English",
    clinic: "IBD Clinic",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
  {
    id: 12,
    name: "Ramez Anwer",
    specialty: "Specialist Optometrist",
    languages: "Arabic, English",
    clinic: "IBD Clinic",
    image: doctorImg,
    branches: "Dubai Clinics",
    description:
      "Dr. Salem is an experienced optometrist specializing in eye health.",
    credentials: ["Optometry Degree"],
    expertise: ["Eye Surgery", "Vision Correction"],
  },
];

type FormValues = {
  specialty: string;
};
const DoctorSection: React.FC = () => {
  const { control, watch } = useForm<FormValues>();
  const router = useRouter();

  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(
    null
  );
  const [filteredDoctors, setFilteredDoctors] = useState<typeof doctors>([]);

  // Watch for specialty changes
  const specialty = watch("specialty");
  console.log("filterrrrrrrrrrrrrrrrrrrrrrrrrrred doctors", filteredDoctors);

  useEffect(() => {
    if (specialty) {
      setSelectedSpecialty(specialty);

      // Filter doctors based on selected specialty
      const filtered = doctors.filter(
        (doctor) => doctor.specialty.toLowerCase() === specialty.toLowerCase()
      );
      setFilteredDoctors(filtered);
    } else {
      setSelectedSpecialty(null);
      setFilteredDoctors([]);
    }
  }, [specialty]);

  return (
    <section className="container bg-white py-8 md:py-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-4 w-full mb-6">
        <span
          className="text-black text-lg md:text-2xl font-normal cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <MdOutlineArrowForwardIos className="text-black text-lg" />
        <span className="text-[#009B7B] text-lg md:text-2xl font-normal">
          Doctors
        </span>
      </div>

      {/* Filter Section */}
      <div className="flex flex-row items-center justify-center gap-4 md:gap-6 mb-8">
        <Select
          name="specialty"
          control={control}
          options={[
            { label: "Orthopedics", value: "Specialist Orthopedic Surgeon" },
            { label: "Optometry", value: "Specialist Optometrist" },
            { label: "Cardiology", value: "Cardiology" },
          ]}
          placeholder="Select Specialty"
          className="w-full"
        />
        <button className="flex justify-center items-center rounded-md">
          <BsSliders
            className="text-teal-500 m-0 w-[64px] h-[64px]"
            size={25}
          />
        </button>
      </div>

      {/* Conditional Rendering Based on Specialty */}
      {selectedSpecialty && filteredDoctors.length > 0 ? (
        <>
          {/* Render Doctor Details */}
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="md:flex gap-8 mb-8">
              <div className="flex flex-col">
                <div className="w-full md:w-[550px] h-[478px] md:h-[498px] relative rounded-lg border border-gray-100">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    layout="fill"
                    objectPosition="top"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-[16px] md:mt-[32px] mt-[24px] items-center w-full">
                  {/* Booking Button */}
                  <button
                    className="w-full h-[51px] border border-[#009B7B] rounded-[6px] text-[#828282] tracking-[0.1em] capitalize font-[400] 
        md:w-[550px] md:h-[51px] md:text-[18px] md:leading-[21px]
         text-[16px] leading-[18px] text-center"
                  >
                    Request an appointment
                  </button>

                  {/* Booking Option Button */}
                  <button
                    className="w-full h-[51px] border border-[#009B7B] rounded-[6px] text-[#828282] tracking-[0.1em] capitalize font-[400] 
        md:w-[550px] md:h-[51px] md:text-[18px] md:leading-[21px]
         text-[16px] leading-[18px] text-center"
                  >
                    Book A Telehealth Consultation
                  </button>
                </div>
              </div>
              <DoctorDetails {...doctor} />
            </div>
          ))}

          {/* Display First 3 Doctor Cards */}
          <div className="flex  justify-center md:text-[48px] text-[20px] text-maintext md:mb-[64px] mb-[56px]">
            {" "}
            IBO Clinics Panel Of Doctors
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[24px]">
            {doctors.slice(0, 3).map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white shadow-md h-[649px] md:h-[734px] rounded-xl overflow-hidden hover:shadow-lg transition w-full"
              >
                {/* Doctor Image */}
                <div className="w-full h-[478px] md:h-[559px] relative">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    objectPosition="top"
                    className="object-cover rounded-md"
                  />
                </div>

                {/* Doctor Details */}
                <div className="px-[16px] bg-white py-[16px] h-full">
                  <h3 className="text-[#00B194] md:text-[20px] text-[18px] font-[400]">
                    {doctor.name}
                  </h3>
                  <p className="text-[#828282] md:text-[20px] text-[18px] font-[400] mt-1">
                    {doctor.specialty}
                  </p>
                  <hr className="my-[19.5px] border-t border-gray-200" />
                  <p className="text-[#00B194] md:text-[16px] text-[14px] font-[400]">
                    Languages: {doctor.languages}
                  </p>
                  <p className="text-[#00B194] md:text-[16px] text-[14px] font-[400]">
                    Clinic: {doctor.clinic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Default Doctor Cards if No Specialty Selected
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[24px]">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white shadow-md h-[649px] md:h-[734px] rounded-xl overflow-hidden hover:shadow-lg transition w-full"
            >
              {/* Doctor Image */}
              <div className="w-full h-[478px] md:h-[559px] relative">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  objectPosition="top"
                  className="object-cover rounded-md"
                />
              </div>

              {/* Doctor Details */}
              <div className="px-[16px] bg-white py-[16px] h-full">
                <h3 className="text-[#00B194] md:text-[20px] text-[18px] font-[400]">
                  {doctor.name}
                </h3>
                <p className="text-[#828282] md:text-[20px] text-[18px] font-[400] mt-1">
                  {doctor.specialty}
                </p>
                <p className="text-[#00B194] md:text-[16px] text-[14px] font-[400]">
                  Languages: {doctor.languages}
                </p>
                <p className="text-[#00B194] md:text-[16px] text-[14px] font-[400]">
                  Clinic: {doctor.clinic}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DoctorSection;
