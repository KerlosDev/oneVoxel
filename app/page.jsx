import Image from "next/image";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Blogs from "./components/Blogs";
import LogoLoop from "./components/ui/LogoLoop";
import LogoRev from "./components/LogoRev";
import Footer from "./components/Footer";
export default function Home() {
  return (

    <div>
      <Hero></Hero>
      <Content></Content>
      <LogoRev></LogoRev>

      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}
