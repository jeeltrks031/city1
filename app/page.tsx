import About from "@/src/home/about/About";
import Amenities from "@/src/home/Amenities/Amenities";
import Footer from "@/src/home/Footer/Footer";
import Gallery from "@/src/home/Gallery/Gallery";
import Hero from "@/src/home/HeroPage/Hero";
// import Highlight from "@/src/home/Highlight/Highlight";
import Location from "@/src/home/Location/Location";
// import OverView from "@/src/home/overview/OverView";
import ProjectConfiguration from "@/src/home/ProjectConfiguration/ProjectConfiguration";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProjectConfiguration />
      <Amenities />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}
