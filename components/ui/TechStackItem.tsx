import React from "react";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";


interface TechStackItemProps {
  name: string;
  label: string;
}

const TechStackItem = ({ name,label }: TechStackItemProps) => {

  const techStack = {
    reactjs: <FaReact size={20} className="text-blue-500" />,
    nodejs: <IoLogoNodejs size={20} className="text-green-500" />,
    express: <SiExpress size={20} className="text-gray-500" />,
    mongodb: <SiMongodb size={20} className="text-green-500" />,
    tailwindcss: <RiTailwindCssFill size={20} className="text-blue-500" />,
    socketio: <SiSocketdotio size={20} className="text-gray-500" />,
    typescript: <SiTypescript size={20} className="text-blue-500" />,
    firebase: <IoLogoFirebase size={20} className="text-orange-500" />,
    webrtc: "/assets/images/webrtc.png",
    nextjs: <RiNextjsFill size={20} className="text-white" />,
    redux: <TbBrandRedux size={20} className="text-purple-500" />,
    framermotion:"/assets/images/framermotion.png",
    fabricjs:"/assets/images/fabricjs.png",
    liveblocks:"/assets/images/liveblocks.png",
  };

  return (
    <div className="flex item-center gap-2 px-2 py-1 rounded-lg bg-background1 w-fit">
      {/* {name === "webrtc" ? (
          <img src={techStack[name as keyof typeof techStack]} alt="webrtc" className="w-[20px] h-[20px] object-cover" />
        ) : (
            techStack[name as keyof typeof techStack]
        )} */}
        {
          typeof techStack[name as keyof typeof techStack] === 'string' ? (
            <img src={techStack[name as keyof typeof techStack]} alt={name} className="w-[20px] h-[20px] object-contain" />
          ) : (
            techStack[name as keyof typeof techStack]
          )
        }
        <p className="text-[12px]">{label}</p>
    </div>
  );
};

export default TechStackItem;
