import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* EDUCATION */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Carnegie Mellon University"
            date="Master of Entertainment Technology, School of Computer Science"
            description="Sep 2024 — May 2026"
          />
          <TimelineItem
            title="The University of Hong Kong "
            date="Bachelor of Product Design, Minor in Computer Science"
            description="Sep 2019 — May 2024"
          />
        </ol>
      </div>

      {/* INTERNSHIP */}
      <div className="timeline">
  <div className="title-wrapper">
    <div className="icon-box">
      <FaRegBookmark />
    </div>
    <h3 className="h3">Internship</h3>
  </div>
  <ol className="timeline-list">
    <TimelineItem
      title="Software Developer Intern — Studio for Narrative Spaces"
      date="Jun 2024 — Sep 2024 · Hong Kong"
      description={
        <ul>
          <li>
            • Architected a real-time conversational NPC system by integrating a GPT-based large language model with VRChat, enabling immersive, AI-driven dialogue grounded in qualitative user research.
          </li>
          <li>
            • Engineered a conversational log database using MongoDB for player-NPC interactions, enabling personalized NPC memory and dialogue replays, enhancing user experience in VRChat by 35%.
          </li>
          <li>
            • Deployed backend infrastructure with Docker and Kubernetes, enabling dynamic load balancing and auto-scaling of inference requests during peak gameplay sessions.
          </li>
          <li>
            • Presented the project at Chinese Computer Human Interaction Conference 2024.
          </li>
        </ul>
      }
    />
    <TimelineItem
      title="Software Developer Intern — Global AI Corporation"
      date="Jun 2023 — Sep 2023 · New York, NY"
      description={
        <ul>
          <li>
            • Designed a modular AI chatbot featuring JWT-based session handling and a RESTful API, providing secure real-time user interactions while reducing average user wait times by 50% using Node.js.
          </li>
          <li>
            • Managed a microservice architecture with horizontal scalability via AWS Application Load Balancer (ALB), enabling concurrent processing of chat requests across stateless backend containers.
          </li>
          <li>
            • Orchestrated a CI/CD pipeline utilizing GitHub Actions and Docker for automated testing, linting, and zero-downtime deployment to AWS ECS Fargate; accelerating the release cycle by 40%.
          </li>
          <li>
            • Integrated Prometheus and Grafana into the chatbot system, visualizing key performance indicators, and enabling early detection of anomalies, ensuring optimal user experience for over 500 users on App Store.
          </li>
        </ul>
      }
    />
  </ol>
</div>


      {/* SKILLS（你如果想保留这块可以继续自定义） */}
      <div className="skill">
  <h3 className="h3 skills-title">My Skills</h3>

  <ul className="skills-list content-card">
    <li><strong>Languages:</strong> C/C++, Python, Java, Go, JavaScript, HTML/CSS</li>
    <li><strong>Backend:</strong> MySQL, MongoDB, Kubernetes, Docker, RESTful API, Kafka, Nginx</li>
    <li><strong>Frontend:</strong> React, Node.js, Express.js, Vue.js, Jest.js</li>
    <li><strong>Tools:</strong> Git, GitHub, Linux/Unix, AWS, Unity, Unreal Engine</li>
  </ul>
</div>

    </section>
  );
};

export default Resume;
