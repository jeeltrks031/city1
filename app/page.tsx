import About from "@/src/home/about/About";
import Amenities from "@/src/home/Amenities/Amenities";
import Hero from "@/src/home/HeroPage/Hero";
import Highlight from "@/src/home/Highlight/Highlight";
import Location from "@/src/home/Location/Location";
import OverView from "@/src/home/overview/OverView";
import ProjectConfiguration from "@/src/home/ProjectConfiguration/ProjectConfiguration";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <OverView />
      <Highlight />
      <About />
      <ProjectConfiguration />
      <Location />
      <Amenities />
    </div>
  );
}
