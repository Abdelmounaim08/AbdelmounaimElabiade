"use client";
import { useEffect } from "react";
import Nav from "./component/Nav";
import { Hero } from "./Hero";
import About from "./component/About";
import Service from "./component/Service";
import Skils from "./component/Skils";
import Project from "./component/Project";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) { elements.forEach((element) => element.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: "0px 0px -48px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <div className="site-shell overflow-x-hidden"><Nav /><main><Hero /><About /><Service /><Skils /><Project /><ContactSection /></main><Footer /></div>;
}
