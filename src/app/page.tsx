'use client';

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import Nav from "./component/Nav";
import { Hero } from "./Hero";
import About from "./component/About";
import Service from "./component/Service";
import Skils from "./component/Skils";
import Project from "./component/Project";
import Footer from "./component/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <Nav />

        {/* Hero section */}
        <Hero />

        {/* Main content */}
        <div className="relative z-30">
          <About />
          <Service />
          <Skils />
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
