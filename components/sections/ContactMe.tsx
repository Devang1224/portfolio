import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="mt-20 md:mt-40 pb-32" id="contact">
      <div className="flex flex-col items-center justify-center gap-8 px-4">
        <p className="sectionHeading mb-2">Contact Me</p>
        <p className="text-center text-gray-300 max-w-xl text-sm md:text-base">
          Interested in collaborating or just want to say hi? <br />
          Connect with me on any of the platforms below!
        </p>
        <div className="flex gap-6 mt-4">
          <a
            href="https://x.com/Devang_Mehra24"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-white/10 via-white/5 to-white/20 hover:from-white/20 hover:to-white/40 transition-all duration-300 shadow-lg border border-white/10"
          >
            <FaTwitter className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/devang-mehra-9a8b47230/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14  rounded-full bg-gradient-to-tr from-white/10 via-white/5 to-white/20 hover:from-white/20 hover:to-white/40 transition-all duration-300 shadow-lg border border-white/10"
          >
           <FaLinkedin className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Devang1224"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-white/10 via-white/5 to-white/20 hover:from-white/20 hover:to-white/40 transition-all duration-300 shadow-lg border border-white/10"
          >
            <FaGithub className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="mailto:devangmehra12@gmail.com"
            className="group relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-white/10 via-white/5 to-white/20 hover:from-white/20 hover:to-white/40 transition-all duration-300 shadow-lg border border-white/10"
          >
            <MdOutlineEmail className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      
      </div>
    </div>
  )
}

export default ContactMe
