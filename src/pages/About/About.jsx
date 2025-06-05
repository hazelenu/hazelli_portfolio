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
  <p>👋 Hi! I'm <strong>Yiran Li</strong> – an SDE who makes short films, shoots <em>Vogue</em>-featured photos, and hosts a podcast.</p>

  <br />
  <p>🎓 Master's in Entertainment Technology @ Carnegie Mellon University (2024–2026)</p>
  <p>🎨 BASc in Product Design, Minor in CS @ The University of Hong Kong (2019–2024)</p>

  <br />
  <p>🛠️ Things I’ve built:</p>
  <ul>
    <li>• Real-time, LLM-powered NPCs in VRChat</li>
    <li>• Containerized chatbots shipped to the App Store</li>
    <li>• High-performance distributed systems in Go</li>
  </ul>

  <br />
  <p>💡 I turn abstract ideas into thoughtful, scalable, and (hopefully) future-proof software.</p>
  <p>🌱 I believe in empathy-driven engineering—with a dash of stubborn optimism.</p>

  <br />
  <p>🎨 Curious about my art? <a href="https://hazelyr.artstation.com" target="_blank" rel="noopener noreferrer">hazelyr.artstation.com</a></p>
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