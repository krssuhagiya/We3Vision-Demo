import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Laravel from "../../assest/img/technology/Laravel.png";
import NodeJS from "../../assest/img/technology/NodeJS.png";
import Django from "../../assest/img/technology/Django.png";
import ReactImg from "../../assest/img/technology/React.png";
import Angular from "../../assest/img/technology/Angular.png";
import VueJs from "../../assest/img/technology/VueJs.png";
import MySQL from "../../assest/img/technology/MySQL.png";
import MongoDB from "../../assest/img/technology/MongoDB.png";
import PostgreSQL from "../../assest/img/technology/PostgreSQL.png";
import Firebase from "../../assest/img/technology/Firebase.png";
import AWSAI from "../../assest/img/technology/AWSAI.png";
import RestGraphQL from "../../assest/img/technology/REST-GraphQL.png";
import Zapier from "../../assest/img/technology/Zapier.png";
import HubSpotAPIs from "../../assest/img/technology/HubSpotAPIs.png";
import Docker from "../../assest/img/technology/Docker.png";
import Git from "../../assest/img/technology/Git.png";
import CICD from "../../assest/img/technology/CI-CD-Pipelines.png";

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
      title: "Discovery & Requirements Mapping",
      desc: "We evaluate your current workflow, sales cycle, and data silos to design a CRM structure that solves the right problems.",
      checklist: [
        "We evaluate your current workflow, sales cycle, and data silos to design a CRM structure that solves the right problems."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "UI/UX & Information Architecture",
      desc: "We wireframe a user-friendly dashboard, modules, and data hierarchies that make your CRM intuitive and productive.",
      checklist: [
        "We wireframe a user-friendly dashboard, modules, and data hierarchies that make your CRM intuitive and productive."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Custom CRM Development",
      desc: "Using scalable backend frameworks and front-end tools, we develop the core CRM engine with automation logic, custom fields, and user roles.",
      checklist: [
        "Using scalable backend frameworks and front-end tools, we develop the core CRM engine with automation logic, custom fields, and user roles."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Integration & Automation Setup",
      desc: "We connect third-party tools (email, SMS, support, lead gen, etc.) and set up automation flows to boost efficiency and minimize manual work.",
      checklist: [
        "We connect third-party tools (email, SMS, support, lead gen, etc.) and set up automation flows to boost efficiency and minimize manual work."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "QA Testing & Security Hardening",
      desc: "We test for bugs, permissions, data flows, and ensure your CRM is secure and GDPR-compliant.",
      checklist: [
        "We test for bugs, permissions, data flows, and ensure your CRM is secure and GDPR-compliant."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Deployment, Training & Support",
      desc: "We launch your CRM, onboard your team, and provide ongoing support and updates as your needs evolve.",
      checklist: [
        "We launch your CRM, onboard your team, and provide ongoing support and updates as your needs evolve."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)",
    },
  ];
  // Tools & Technologies
  const techItems = [
    { img: Laravel, name: "Laravel" },
    { img: NodeJS, name: "Node.js" },
    { img: Django, name: "Django" },
    { img: ReactImg, name: "React" },
    { img: Angular, name: "Angular" },
    { img: VueJs, name: "Vue.js" },
    { img: MySQL, name: "MySQL" },
    { img: MongoDB, name: "MongoDB" },
    { img: PostgreSQL, name: "PostgreSQL" },
    { img: Firebase, name: "Firebase" },
    { img: AWSAI, name: "AWS" },
    { img: RestGraphQL, name: "REST & GraphQL APIs" },
    { img: Zapier, name: "Zapier" },
    { img: HubSpotAPIs, name: "HubSpot APIs" },
    { img: Docker, name: "Docker" },
    { img: Git, name: "Git" },
    { img: CICD, name: "CI-CD Pipelines" },
  ];
  
 const industries = [
    { title: "Sales CRM", desc: "Manage leads, track pipelines, forecast deals, and close more efficiently." },
    { title: "Marketing CRM", desc: "Automate campaigns, track engagement, segment users, and improve conversions." },
    { title: "Customer Support CRM", desc: "Centralize tickets, manage SLAs, chat integrations, and feedback loops." },
    { title: "Project-Based CRM", desc: "Integrate tasks, time-tracking, file sharing, and client communication." },
    { title: "Healthcare/Clinic CRM", desc: "Patient management, scheduling, reports, and secure data handling (HIPAA-ready)." },
    { title: "Real Estate CRM", desc: "Property listings, lead scoring, appointment management, and CRM-to-website sync." },
  ];
  
 
  // Why Choose Us
  const whyChoose = [
    { title: "Built from the Ground Up", desc: "We don't believe in one-size-fits-all. Your CRM is tailored exactly to your workflows, teams, and business model." },
    { title: "User-Centric Design", desc: "We design clean, modern dashboards that reduce learning curves and increase user adoption across your organization." },
    { title: "Modular & Scalable", desc: "Add features, integrations, and automations as you grow—your CRM evolves with your business." },
    { title: "Automation First Approach", desc: "We help you eliminate repetitive tasks, reduce human error, and scale faster with smart workflows and triggers." },
    { title: "Security & Compliance Ready", desc: "Your data is protected with enterprise grade encryption, access control, and audit logs GDPR & HIPAA compliant." },
  ];
  
 const faqs = [
    { q: "Why not use existing CRMs like HubSpot or Salesforce?", a: "They're great—but they can be overkill, expensive, and hard to customize. We build CRMs tailored exactly to your business needs, workflows, and goals." },
    { q: "Can you migrate data from our old system?", a: "Yes, we handle data migration from spreadsheets, legacy CRMs, and third-party apps with minimal downtime." },
    { q: "Can I integrate email, SMS, or WhatsApp into the CRM?", a: "Absolutely. We integrate your preferred communication tools and automate messages, follow-ups, and workflows." },
    { q: "Is the CRM cloud-based?", a: "Yes, we build secure, scalable, cloud-based CRMs accessible anytime from desktop or mobile." },
    { q: "What does CRM development typically cost?", a: "Pricing depends on features, integrations, and scale. We offer transparent pricing for startups, SMBs, and enterprises." },
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
                Smart CRM Solutions That Grow With Your Business
                </h2>
                <p className="hero-paragraph">
                We3vision Private Limited builds custom CRM systems that streamline your customer relationships, automate workflows, and centralize your data so your team can sell smarter, support better, and scale faster.<br/>Whether you need a lightweight CRM for a growing startup or a full-scale enterprise system with API integrations, we architect CRM platforms that align perfectly with your operations, goals, and customer journey.</p>               
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
          <h2 className="h1">Let's Build a CRM That Works the Way You Do</h2>
          <p className="mb-10">Tell us how you run your business we'll build a CRM that makes it faster, smarter, and more profitable.</p>
          <div className="mil-button-group justify-content-center">
          <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Get a Free Quote</span>
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
