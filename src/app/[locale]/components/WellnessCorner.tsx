'use client';
import Image from 'next/image';
import wellness1 from '../../../../public/images/wellness/wellness1.svg'
import wellness2 from '../../../../public/images/wellness/wellness2.svg'
import wellness3 from '../../../../public/images/wellness/wellness3.svg'
const wellnessItems = [
  { src: wellness1.src, alt: 'Wellness 1', text: 'Is the doctor attentive and responsive to the patient’s concerns?' },
  { src: wellness2.src, alt: 'Wellness 2', text: 'Does the dentist doctor pay close attention and promptly address the patient’s concerns?' },
  { src: wellness3.src, alt: 'Wellness 3', text: 'Does the dentist doctor pay close attention and promptly address the patient’s concerns?' }
];

const WellnessCorner = () => (
  <section className="container mx-auto">
    <h2 className="text-center  text-maintext md:text-[48px] text-[20px] font-[700] md:leading-[55.2px] leading-[23px] mb-6 mt-[56px]">WELLNESS CORNER</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {wellnessItems.map((item, index) => (
        <div key={index} className="bg-white w-full shadow-md rounded-md overflow-hidden">
           <Image src={item.src} alt={item.alt} width={417} height={552} className="w-full object-cover" priority/>
          <p className="text-center mx-[23px] mt-[23px] mb-[11px] text-[16px] p-0 font-[400] leading-[18.36px]">
            {item.text}
          </p>
          <div className="w-[122px] h-1 bg-maintext mx-auto mb-[23px]"></div>
        </div>
      ))}
    </div>
  </section>
);

export default WellnessCorner;