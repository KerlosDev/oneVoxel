import Image from "next/image";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Blogs from "./components/Blogs";
import LogoLoop from "./components/ui/LogoLoop";
import LogoRev from "./components/LogoRev";
import Footer from "./components/Form";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Form from "./components/Form";
import Footerr from "./components/Footerr";
export default function Home() {
  return (

    <div className="">
      <Hero></Hero>
      <Content></Content>
      <LogoRev></LogoRev>
      <Blogs></Blogs>
      <Aboutus></Aboutus>
      <Services></Services>
      <Form></Form> 
      <Footerr></Footerr>
     </div>
  );
}
