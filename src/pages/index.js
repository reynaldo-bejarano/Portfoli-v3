import React from "react"
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Knowledge from "../components/Knowledge";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";


export default function Home() {

  return (
    <div>
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Knowledge/>
        <Projects />
        <Contact />
      </Layout>
   
    </div>

  )

}
