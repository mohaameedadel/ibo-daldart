'use client';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import logo from '../../../../public/images/logo.svg';
import english from '../../../../public/images/english-language.svg';
import { PiSquaresFour } from "react-icons/pi";
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router = useRouter()
 
return (
  <div className='container'>
    <header className="flex md:py-[25px] py-10 justify-between items-center w-full  bg-white">
      {/* Logo */}
      <div>
        <Image src={logo} alt="IBO Logo" width={50} height={50} priority/>
      </div>

      {/* Language and Button */}
      <div className=" hidden md:flex items-center gap-[32]">
        <div className="flex items-center gap-6">
          <div onClick={()=>router.push('/')} className='hover:cursor-pointer'>
              <Image src={english} alt="language icon" width={32} height={32} priority/>
          </div>
          <span className='text-xs md:text-sm font-semibold' >English</span>
        </div>
        <button className=" w-[183px] font-[700] text-xs md:text-sm bg-[#21bcb8] text-white md:px-[40px] px-2 py-1 md:py-[13px] rounded-full">
          BOOK NOW
        </button>
        <button className="md:hidden">
          <FaBars size={24} />
        </button>
      </div>

        {/* Language and Button */}
        <div className='md:hidden p-[13px] rounded-md flex items-center justify-center bg-[#21BCB8]'>
            <PiSquaresFour className='text-white ' size={25}/>
         
      </div>
    
    </header>
  </div>)
}

export default Navbar;