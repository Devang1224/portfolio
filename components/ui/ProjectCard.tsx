"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import TechStackItem from "./TechStackItem";
import Image from "next/image";

interface item {
  item: {
    name: string;
    image: string;
    description: string;
    projectUrl: string;
    githubUrl: string;
    techStack: string[];
    moreImages: string[];
  };
}

const ProjectCard = ({ item }: item) => {
  return (
    <div className="rounded-[20px] bg-background border border-borderGrey1 w-[340px] overflow-hidden 
      cursor-pointer group/card hover:[box-shadow:0_0_40px_10px_rgba(255,255,255,0.086)] transition-all duration-300" onClick={()=>window.open(item?.projectUrl,'_blank')}>
      <div className="w-[100%] h-[200px] relative " >
        <Image
          src={item?.image}
          alt={item?.name}
          width={200}
          height={200}
          className="w-full h-full group-hover/card:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 [background-image:linear-gradient(to_top,_rgba(0,0,0,0.5)_0%,_transparent_60%)] group-hover/card:scale-110 transition-all duration-500" />
      </div>
      <div className="p-4 bg-background">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">{item?.name}</p>
          <div className="flex gap-3 items-center">
            <button
              className="group/link hover:scale-110 transition-all duration-300"
              onClick={() => window.open(item?.githubUrl, "_blank")}
            >
              <FaGithub
                className="text-textGrey1 group-hover/link:text-blue-400"
                size={20}
              />
            </button>
            <button
              className="group/link hover:scale-110 transition-all duration-300"
              onClick={() => window.open(item?.projectUrl, "_blank")}
            >
              <FaExternalLinkAlt className="text-textGrey1 group-hover/link:text-blue-400" />
            </button>
          </div>
        </div>
        <div className="text-textGrey1 text-sm mt-4">{item?.description}</div>
        <div className="flex gap-2 flex-wrap mt-3 ">
          {/* <TechStackItem name="reactjs" label="React"/>
          <TechStackItem name="nodejs" label="Nodejs"/>
          <TechStackItem name="express" label="Express"/>
          <TechStackItem name="mongodb" label="MongoDB"/>
          <TechStackItem name="tailwindcss" label="TailwindCSS"/>
          <TechStackItem name="socketio" label="Socket.io"/>
          <TechStackItem name="webrtc" label="WebRTC"/>
          <TechStackItem name="typescript" label="Typescript"/>
          <TechStackItem name="firebase" label="Firebase"/>
          <TechStackItem name="redux" label="Redux"/>
          <TechStackItem name="framermotion" label="Framer Motion"/>
          <TechStackItem name="fabricjs" label="Fabric.js"/>
          <TechStackItem name="nextjs" label="Nextjs"/> */}
          {item?.techStack?.map((item, index) => (
            <TechStackItem key={index} name={item?.name} label={item?.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
