/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "AI-Driven Systems",
    description: "Built real-time NPC systems powered by large language models, enabling immersive, research-based interactions in VR."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Cloud-Native Backends",
    description: "Designed and deployed secure, containerized chatbot systems using Node.js, JWT, AWS, and CI/CD pipelines."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Distributed Systems Engineering",
    description: "Architected high-performance mining systems in Go with RPC protocols and lock-free concurrency."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Human-Centered Design Thinking",
    description: "Bridging product design and software to craft intuitive, scalable tools with a user-first mindset."
  }
];



const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
  Hi, I'm <strong>Yiran Li</strong>—but everyone calls me <strong>Hazel</strong>, because it's way easier to spell in a coffee order.
  <p></p>
  I'm a software developer who lives at the intersection of technology, storytelling, and design. With a background in Product Design from the University of Hong Kong and currently pursuing my Master's in Entertainment Technology at Carnegie Mellon University, I build digital experiences that are as thoughtful as they are scalable.
</p>
<p>
  In past lives (and internships), I’ve built real-time LLM-powered NPCs for VRChat, shipped containerized chatbots to the App Store, and designed high-performance distributed systems in Go—all while trying to write code that my future self won't hate.
</p>
<p>
  I’m passionate about turning abstract ideas into delightful, working software—and I believe the best solutions come from blending empathy, engineering, and just a bit of stubborn optimism.
</p>



    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    

  </article>
  )
}

export default About