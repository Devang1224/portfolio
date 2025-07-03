import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className=" w-full max-w-[1500px]">
      <Hero/>
      <Projects/>
      <Experience/>
      {/* <TechStack/> */}
      </div>
    </div>
  );
}
