import React from "react";
import { SiDocker, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";

const TechStack = () => {
  const techStack = [
    {
      name: "React",
      icon: FaReact,
      iconColor: "text-blue-400",
      gradientColor: "#2563eb", // blue-600
      gradientColorLight: "#1e40af", // blue-800
    },
    {
      name: "Nodejs",
      icon: IoLogoNodejs,
      iconColor: "text-green-400",
      gradientColor: "#15803d", // green-700
      gradientColorLight: "#166534", // green-800
    },
    {
      name: "Express",
      icon: SiExpress,
      iconColor: "text-gray-400",
      gradientColor: "#4b5563", // gray-600
      gradientColorLight: "#374151", // gray-700
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      iconColor: "text-emerald-400",
      gradientColor: "#059669", // emerald-600
      gradientColorLight: "#047857", // emerald-700
    },
    {
      name: "TailwindCSS",
      icon: RiTailwindCssFill,
      iconColor: "text-sky-400",
      gradientColor: "#0284c7", // sky-600
      gradientColorLight: "#0369a1", // sky-700
    },
    {
      name: "Socket.io",
      icon: SiSocketdotio,
      iconColor: "text-gray-400",
      gradientColor: "#4b5563",
      gradientColorLight: "#374151",
    },
    {
      name: "Typescript",
      icon: SiTypescript,
      iconColor: "text-blue-400",
      gradientColor: "#1d4ed8", // blue-700
      gradientColorLight: "#1e3a8a", // blue-900
    },
    {
      name: "Firebase",
      icon: IoLogoFirebase,
      iconColor: "text-orange-400",
      gradientColor: "#ea580c", // orange-600
      gradientColorLight: "#c2410c", // orange-700
    },
    {
      name: "Nextjs",
      icon: RiNextjsFill,
      iconColor: "text-white",
      gradientColor: "#111827",
      gradientColorLight: "#1f2937",
    },
    {
      name: "Redux",
      icon: TbBrandRedux,
      iconColor: "text-purple-400",
      gradientColor: "#7c3aed", // violet-600
      gradientColorLight: "#6d28d9", // violet-700
    },
    {
      name: "Framer Motion",
      icon: "/assets/images/framermotion.png",
      iconColor: "text-black",
      gradientColor: "#0f0f0f", // dark grayish
      gradientColorLight: "#1c1c1c",
    },
    {
      name: "Postgres",
      icon: BiLogoPostgresql,
      iconColor: "text-blue-400",
      gradientColor: "#2563eb",
      gradientColorLight: "#1e3a8a",
    },
    {
      name: "HTML",
      icon: FaHtml5,
      iconColor: "text-orange-400",
      gradientColor: "#c2410c",
      gradientColorLight: "#9a3412",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      iconColor: "text-blue-400",
      gradientColor: "#1e40af",
      gradientColorLight: "#1e3a8a",
    },
    {
      name: "Javascript",
      icon: IoLogoJavascript,
      iconColor: "text-yellow-400",
      gradientColor: "#ca8a04", // yellow-600
      gradientColorLight: "#a16207", // yellow-700
    },
    {
      name: "Git",
      icon: FaGitAlt,
      iconColor: "text-red-400",
      gradientColor: "#b91c1c", // red-700
      gradientColorLight: "#7f1d1d", // red-800
    },
    {
      name: "Docker",
      icon: IoLogoDocker,
      iconColor: "text-blue-400",
      gradientColor: "#2563eb",
      gradientColorLight: "#1e40af",
    },
  ];

  return (
    <div className="flex flex-col items-center  mt-20 ">
      <div className="w-full py-20">
        <p className="sectionHeading">Tech Stack</p>
      </div>

      <div className="grid grid-cols-3  sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStack?.map((item, index) => (
          <div
            key={index}
            className={`p-2 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-center gap-3 border  border-gray-500/70 rounded-lg relative overflow-hidden select-none group`}
          >
            <div
              className="absolute w-[150%] h-[150%] inset-0  transition-all duration-300 pointer-events-none z-[-1] group-hover:translate-x-[-20%] "
              style={{
                background: `linear-gradient(to top right, ${item.gradientColor}, ${item.gradientColorLight}, transparent)`,
              }}
            />
            <div>
              {typeof item.icon === "string" ? (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] object-contain"
                />
              ) : (
                React.createElement(item.icon, {
                  className: `${item.iconColor} w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]`,
                })
              )}
            </div>
            <p className="text-white font-medium text-center text-[10px] sm:text-[14px] md:text-[16px]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
