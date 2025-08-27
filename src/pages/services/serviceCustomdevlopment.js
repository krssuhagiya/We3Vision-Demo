import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import ReactImg from "../../assest/img/technology/React.png";
import Angular from "../../assest/img/technology/Angular.png";
import VueJs from "../../assest/img/technology/VueJs.png";
import NodeJS from "../../assest/img/technology/NodeJS.png";
import Laravel from "../../assest/img/technology/Laravel.png";
import DotNet from "../../assest/img/technology/NET.png";
import Python from "../../assest/img/technology/Python.png";
import Java from "../../assest/img/technology/Java.png";
import PHP from "../../assest/img/technology/PHP.png";
import MySQL from "../../assest/img/technology/MySQL.png";
import PostgreSQL from "../../assest/img/technology/PostgreSQL.png";
import MongoDB from "../../assest/img/technology/MongoDB.png";
import AWSAI from "../../assest/img/technology/AWSAI.png";
import Azure from "../../assest/img/technology/azure.png";
import GoogleCloudAI from "../../assest/img/technology/GoogleCloudAI.png";
import Docker from "../../assest/img/technology/Docker.png";
import Kubernetes from "../../assest/img/technology/Kubernetes.png";
import GraphQL from "../../assest/img/technology/REST-GraphQL.png";
const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

// Our Process (Timeline)
const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Understanding Your Requirements",
      desc: "We take time to learn your business goals, challenges, and what exactly you need from your software.",
      checklist: [
        "We take time to learn your business goals, challenges, and what exactly you need from your software."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Planning & Architecture Design",
      desc: "We map out the software structure, features, and user flow for a seamless and intuitive experience.",
      checklist: [
        "We map out the software structure, features, and user flow for a seamless and intuitive experience."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "UI/UX Design",
      desc: "Clean, functional designs that are easy to use and match your brand identity.",
      checklist: [
        "Clean, functional designs that are easy to use and match your brand identity."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Coding",
      desc: "We use the best technologies to build strong, flexible, and secure code.",
      checklist: [
        "We use the best technologies to build strong, flexible, and secure code."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Quality Assurance",
      desc: "We run detailed tests to ensure your software is bug-free and works well across devices.",
      checklist: [
        "We run detailed tests to ensure your software is bug free and works well across devices."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch & Support",
      desc: "We deploy your software, train your team (if needed), and provide long term support.",
      checklist: [
        "We deploy your software, train your team (if needed), and provide long term support."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)",
    },
  ];
  
  // Tools & Technologies
  const techItems = [
    { img: ReactImg, name: "React" },
    { img: Angular, name: "Angular" },
    { img: VueJs, name: "Vue.js" },
    { img: NodeJS, name: "Node.js" },
    { img: Laravel, name: "Laravel" },
    { img: DotNet, name: ".NET" },
    { img: Python, name: "Python" },
    { img: Java, name: "Java" },
    { img: PHP, name: "PHP" },
    { img: MySQL, name: "MySQL" },
    { img: PostgreSQL, name: "PostgreSQL" },
    { img: MongoDB, name: "MongoDB" },
    { img: AWSAI, name: "AWS" },
    { img: Azure, name: "Azure" },
    { img: GoogleCloudAI, name: "Google Cloud" },
    { img: Docker, name: "Docker" },
    { img: Kubernetes, name: "Kubernetes" },
    { img: GraphQL, name: "GraphQL APIs" },
  ];
  
  // =========================
  // Industries We Serve
  // =========================
 const industries = [
    {
      title: "Healthcare",
      desc: "Secure patient data management, appointment scheduling, and telemedicine solutions.",
    },
    {
      title: "Finance",
      desc: "Custom billing platforms, dashboards, KYC/AML automation, and secure financial tools.",
    },
    {
      title: "Retail & E-commerce",
      desc: "Order management systems, inventory solutions, and smart POS integrations.",
    },
    {
      title: "Education",
      desc: "E-learning platforms, student management systems, and online assessment tools.",
    },
    {
      title: "Logistics & Transportation",
      desc: "Real-time tracking, fleet management, and route optimization software.",
    },
    {
      title: "Manufacturing",
      desc: "Production tracking, supply chain automation, and ERP integrations.",
    },
  ];
  
  // =========================
  // Why Choose Us
  // =========================
 const whyChoose = [
    {
      title: "Tailor-Made Solutions",
      desc: "We don't use templates. Everything is designed around your exact business workflow and needs.",
    },
    {
      title: "End-to-End Development",
      desc: "From planning and design to deployment and post-launch support we handle it all in-house.",
    },
    {
      title: "Secure & Scalable Architecture",
      desc: "We use the latest best practices to keep your software safe and ready to scale as your business grows.",
    },
    {
      title: "Agile and Transparent Process",
      desc: "We work in sprints, share regular updates, and involve you at every step.",
    },
    {
      title: "Dedicated Support Team",
      desc: "After launch, we stick around to maintain, upgrade, and improve your software when needed.",
    },
  ];
  
  // =========================
  // FAQs
  // =========================
const faqs = [
    {
      q: "How is custom software different from off the shelf software?",
      a: "Custom software is built specifically for your business needs, while off the shelf software is generic and may not fit all your workflows.",
    },
    {
      q: "How long does it take to build custom software?",
      a: "It depends on the complexity — simple tools can take 4–6 weeks, larger systems might take 3–6 months.",
    },
    {
      q: "Will I own the software?",
      a: "Yes. Once developed, you fully own the software, including the source code.",
    },
    {
      q: "Can the software be updated in the future?",
      a: "Absolutely. We build with scalability in mind, so you can add features or make changes later.",
    },
    {
      q: "Do you provide ongoing support and maintenance?",
      a: "Yes, we offer long term support packages for bug fixes, updates, and new feature additions.",
    },
  ];
  
  

  return (
    <div className="services-2d3d">

      {/* Hero Section */}
      <section className="mil-banner hero-section-gradient" style={{ position: "relative", overflow: "hidden" }}>
        <HeroPolyhedron />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Container>
            <Row>
              <Col>
                <h2 className="hero-heading">
                Tailored Software Built Just for Your Business
                </h2>
                <p className="hero-paragraph">
                We build custom software solutions that perfectly fit your unique business needs no unnecessary features, no bloated code. Whether you're a startup, SME, or enterprise, our custom software helps you work smarter, faster, and more efficiently.<br/>From simple workflow automation tools to full scale enterprise platforms—we develop reliable, secure, and scalable solutions to help your business grow and stay ahead of the competition.</p>
                 <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Get a Free Quote</span>
                                <div className="mil-button-arrow">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                                </div>
                            </a>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mil-dark-bg pb-10 pt-10">
        <div className="mi-invert-fix">
          <Container className="mil-p-120-90">
            <h2 className="h2 mil-mb-60 text-center" style={{ color: "white" }}>
              Our Animation <span style={{ color: "#e65cff" }}>Process</span>
            </h2>
            <p className="text-center" style={{ color: "#bdbdd7", maxWidth: "700px", margin: "0 auto 48px auto" }}>
              We follow a simple, collaborative process to bring your animation to life step by step.
            </p>
            <div className="ar-timeline-v2">
              {processSteps.map((step, idx) => (
                <div key={idx} className={`ar-timeline-v2-row ${idx % 2 === 0 ? "left" : "right"}`}>
                  {idx % 2 !== 0 && (
                    <div className="ar-timeline-v2-checklist">
                      <ul>{step.checklist.map((c, i) => <li key={i}>{c}</li>)}</ul>
                    </div>
                  )}
                  <div className="ar-timeline-v2-marker">
                    <div className="ar-marker-circle" style={{ background: step.gradient }}></div>
                  </div>
                  <div className="ar-timeline-v2-content">
                    <div className="ar-step-title-v2">
                      <span className="ar-step-num-v2" style={{ color: step.color }}>{step.num}</span>{" "}
                      <span className="ar-step-main">{step.title}</span>
                    </div>
                    <div className="ar-step-desc-v2">{step.desc}</div>
                  </div>
                  {idx % 2 === 0 && (
                    <div className="ar-timeline-v2-checklist">
                      <ul>{step.checklist.map((c, i) => <li key={i}>{c}</li>)}</ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section mil-p-120-90">
        <Container>
          <h2 className="ar-tech-title">
            <span style={{ color: "#000", fontWeight: 700 }}>Tools &</span>{" "}
            <span style={{ color: "#e65cff", fontWeight: 700 }}>Technologies</span>
          </h2>
          <div className="tech-card-grid">
            {techItems.map((item, index) => (
              <div key={index} className="tech-card mil-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <img src={item.img} alt={item.name} />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="mil-dark-gradient mil-p-120-90 px-5 py-5">
        <Container>
          <h2 className="text-center mb-5 tech-heading h1">Industries <span className="mil-thin">We Serve</span></h2>
          <Row className="g-4">
            {industries.map((ind, idx) => (
              <Col md={4} sm={6} key={idx}>
                <div className="industries-card h-100">
                  <div className="industries-title">{ind.title}</div>
                  <div className="industries-desc">{ind.desc}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <Container>
          <h2 className="mil-up text-center mb-5 h1">Why <span className="mil-thin">Choose Us?</span></h2>
          <Row className="g-4">
            {whyChoose.map((w, idx) => (
              <Col md={4} key={idx}>
                <div className="why-card h-100">
                  <h4 className="why-title">{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Quote */}
      <section className="mil-dark-gradient p-20 justify-content-center">
        <Container className="text-center">
          <h2 className="h1">Have a software idea or challenge? Let's solve it.</h2>
          <p className="mb-10">Tell us what you need we'll offer the best fit solution with timelines, cost estimates, and expert advice.</p>
          <div className="mil-button-group justify-content-center">
          <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Request a Custom Software</span>
                                <div className="mil-button-arrow">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                                </div>
                            </a>
                             <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Contact Us Now</span>
                                <div className="mil-button-arrow">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                                </div>
                            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="pt-20 pb-20">
        <Container className="mil-p-120-90">
          <h2 className="mil-up mil-mb-60 text-center">Frequently Asked <span className="mil-thin">Questions</span></h2>
          {faqs.map((faq, index) => (
            <div key={index} className={`mil-accordion-group mil-up ${openIndex === index ? "active" : ""}`}>
              <div className="mil-accordion-menu" onClick={() => toggleFAQ(index)} style={{ cursor: "pointer" }}>
                <p className="mil-accordion-head">{faq.q}</p>
                <div className="mil-symbol mil-h3">
                  <div className="mil-plus">+</div>
                  <div className="mil-minus">-</div>
                </div>
              </div>
              {openIndex === index && <div className="mil-accordion-content"><p>{faq.a}</p></div>}
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
};

export default Services2D3D;
