import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import ContactMe from "@/components/sections/ContactMe";
import BottomNav from "@/components/ui/BottomNav";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center relative">
       <div className="absolute min-w-[50px] w-[10vw] max-w-[150px] min-h-[400px] 
         top-[80px] left-[-100px] lg:left-[-40px] lg:top-[0] h-[50vw] pointer-events-none z-99 sunlight-rays
          md:blur-[40px] blur-[20px]
         "  />

      <div className=" w-full max-w-[1500px]">
      <Hero/>
      <Projects/>
      <Experience/>
      <TechStack/>
      <ContactMe/>
      <BottomNav/>
      </div>
    </div>
  );
}
