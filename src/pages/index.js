import React from "react"
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Knowledge from "../components/Knowledge";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import ScrollTop from "../components/ScrollTop";


export default function Home() {

  return (
    <div>
      <ScrollTop />
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Knowledge/>
        <Projects />
        <Contact />
        <Footer />
      </Layout>
   
    </div>

  )

}
