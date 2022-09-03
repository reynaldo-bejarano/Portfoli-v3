import React from "react"
import About from "../components/About";
import Hero from "../components/Hero";
import Knowledge from "../components/Knowledge";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";


export default function Home() {

  return (
    <div>
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Knowledge/>
      </Layout>
   
    </div>

  )

}
