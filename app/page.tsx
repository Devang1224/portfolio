import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import ContactMe from "@/components/sections/ContactMe";
import BottomNav from "@/components/ui/BottomNav";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className=" w-full max-w-[1500px] relative">
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
