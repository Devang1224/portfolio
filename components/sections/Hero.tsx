import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeaderButton from "../ui/HeaderButton";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      <div className="mt-20 flex justify-center">
        <div className="text-center text-[8px] font-bold rounded-[20px] px-4 py-1 w-fit bgRainbow relative bg-background group flex items-center gap-2 cursor-pointer md:text-[12px]">
          <p> Available for Freelancing Projects</p>
          <span className="group-hover:translate-x-1 transition-all duration-300">
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
      <div className=" mx-[10px] mt-20 flex justify-center items-center gap-5 flex-col lg:flex-row  md:mx-[100px] md:mt-32 ">
        <div className=" w-[50vw] flex flex-col items-center">
          <p className="text-4xl font-bold whitespace-nowrap md:text-7xl xsm:text-5xl">
            Hi I'm Devang
          </p>
          <div className=" w-[120%] text-[10px] text-justify mt-16 md:text-sm xsm:text-[12px] lg:w-[65%]">
            <p>
              A Full Stack Developer and B.Tech graduate with 1 year of
              experience as a Frontend Developer. I have hands-on experience
              with modern web technologies including React, Next.js, Tailwind
              CSS, Node.js, Express, and MongoDB. I enjoy building scalable,
              user-friendly applications and continuously improving my skills
              across the full development stack.{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fill="#F2F4F8"
                d="M55.8,-18.4C64,7.1,56.6,37.3,36.9,51.9C17.3,66.4,-14.6,65.1,-37.9,48.9C-61.3,32.7,-76.2,1.6,-68.5,-23.2C-60.7,-48,-30.4,-66.5,-3.3,-65.4C23.8,-64.4,47.7,-43.8,55.8,-18.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 gap-5 items-center">
        <HeaderButton
          className="relative bg-background px-4 py-3 rounded-[15px] border border-borderGrey1 z-1 bgGlare overflow-hidden "
          url="https://drive.google.com/file/d/1J3tdoxTRtVSdDzMOr_DvAXx6FpmfD5hi/view?usp=sharing"
        >
          <p className="text-[10px] sm:text-[12px] md:text-sm">Download CV</p>
        </HeaderButton>

        <HeaderButton className="relative bg-background px-4 py-1 h-[40px] rounded-[15px] bgRainbow z-1 ">
          <p className="text-[10px] sm:text-[12px] md:text-sm">Hire Me</p>
        </HeaderButton>
      </div>
    </div>
  );
};

export default Hero;
