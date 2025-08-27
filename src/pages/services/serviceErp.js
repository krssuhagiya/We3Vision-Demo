import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import NET from "../../assest/img/technology/NET.png";
import Java from "../../assest/img/technology/Java.png";
import Python from "../../assest/img/technology/Python.png";
import PHP from "../../assest/img/technology/PHP.png";
import Angular from "../../assest/img/technology/Angular.png";
import ReactImg from "../../assest/img/technology/React.png";
import VueJs from "../../assest/img/technology/VueJs.png";
import MySQL from "../../assest/img/technology/MySQL.png";
import PostgreSQL from "../../assest/img/technology/PostgreSQL.png";
import MSSQL from "../../assest/img/technology/MS-SQL-Server.png";
import Odoo from "../../assest/img/technology/Odoo1.png";
import ERPNext from "../../assest/img/technology/ERPNext.png";
import CustomERPStack from "../../assest/img/technology/CustomERP-Stack.png";
import RestAPIsL from "../../assest/img/technology/REST-APIsL.png";
import SOAP from "../../assest/img/technology/SOAP.png";
import GraphQL from "../../assest/img/technology/REST-GraphQL.png";
import AWS from "../../assest/img/technology/AWSAI.png";
import Azure from "../../assest/img/technology/azureai.png";
import OnPremise from "../../assest/img/technology/On-Premis.png";


const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

// Our Process (Timeline)
// =========================
// Process Steps
// =========================
const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Business Analysis & Module Planning",
      desc: "We study your current processes, identify pain points, and plan a modular ERP that fits your structure and goals.",
      checklist: [
        "We study your current processes, identify pain points, and plan a modular ERP that fits your structure and goals."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "UI/UX Design for Usability",
      desc: "We craft intuitive dashboards and workflows so your team can adopt the ERP quickly—no confusion, just clarity.",
      checklist: [
        "We craft intuitive dashboards and workflows so your team can adopt the ERP quickly—no confusion, just clarity."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Custom ERP Development",
      desc: "We build the backend engine with secure databases, role-based access, and real-time tracking across all modules.",
      checklist: [
        "We build the backend engine with secure databases, role-based access, and real-time tracking across all modules."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Integration with Existing Tools",
      desc: "From accounting software to inventory systems—we connect your existing tools into one seamless ERP ecosystem.",
      checklist: [
        "From accounting software to inventory systems—we connect your existing tools into one seamless ERP ecosystem."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "QA, Security & Load Testing",
      desc: "Before launch, we run heavy testing to make sure everything is stable, fast, and secure under real-world loads.",
      checklist: [
        "Before launch, we run heavy testing to make sure everything is stable, fast, and secure under real-world loads."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch, Training & Support",
      desc: "We deploy your ERP, train your staff, and provide long-term support to keep your system updated and scalable.",
      checklist: [
        "We deploy your ERP, train your staff, and provide long-term support to keep your system updated and scalable."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)",
    },
  ];
  
  // =========================
  // Tools & Technologies
  // =========================
  const techItems = [
    { img: NET, name: ".NET" },
    { img: Java, name: "Java" },
    { img: Python, name: "Python" },
    { img: PHP, name: "PHP" },
    { img: Angular, name: "Angular" },
    { img: ReactImg, name: "React" },
    { img: VueJs, name: "Vue.js" },
    { img: MySQL, name: "MySQL" },
    { img: PostgreSQL, name: "PostgreSQL" },
    { img: MSSQL, name: "MS SQL Server" },
    { img: Odoo, name: "Odoo" },
    { img: ERPNext, name: "ERPNext" },
    { img: CustomERPStack, name: "Custom ERP Stack" },
    { img: RestAPIsL, name: "REST APIsL" },
    { img: SOAP, name: "SOAP" },
    { img: GraphQL, name: "GraphQL" },
    { img: AWS, name: "AWS" },
    { img: Azure, name: "Azure" },
    { img: OnPremise, name: "On-Premise Deployments" },
  ];
  
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Manufacturing",
      desc: "Track production, inventory, supply chain, and quality control all in one place.",
    },
    {
      title: "Retail & E-Commerce",
      desc: "Manage orders, stock, billing, customers, and real-time insights from multiple locations.",
    },
    {
      title: "Healthcare & Clinics",
      desc: "Centralized patient records, billing, HR, and appointment scheduling HIPAA ready.",
    },
    {
      title: "Construction & Real Estate",
      desc: "Control budgets, contracts, site progress, procurement, and workforce.",
    },
    {
      title: "Education & Institutions",
      desc: "Student records, admissions, exam management, staff HR, fees, and reporting all centralized.",
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Real-time tracking, vendor management, invoicing, warehouse management, and dispatch.",
    },
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "End-to-End Customization",
      desc: "We don't just install a template we build your ERP from scratch around your exact needs and goals.",
    },
    {
      title: "Modular & Scalable Architecture",
      desc: "Start small and add features as you grow. We make sure your ERP grows with your business.",
    },
    {
      title: "User Centric Design",
      desc: "Our UI/UX is clean, modern, and easy to use ensuring your team adopts the system quickly.",
    },
    {
      title: "Seamless Integrations",
      desc: "We connect with tools you already use accounting, CRM, inventory, or HR to make your ERP the single source of truth.",
    },
    {
      title: "Ongoing Support & Optimization",
      desc: "After launch, we monitor and improve performance, train your team, and roll out new features as needed.",
    },
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "What's the difference between ERP and CRM?",
      a: "CRM focuses on customer relationships. ERP handles your entire business HR, inventory, sales, finance, etc. under one roof.",
    },
    {
      q: "Do you build industry-specific ERP systems?",
      a: "Yes, we tailor each ERP to your industry's processes whether it's manufacturing, healthcare, retail, or education.",
    },
    {
      q: "Can I integrate my existing software into the ERP?",
      a: "Absolutely. We can integrate accounting software, HR tools, POS systems, and more into one platform.",
    },
    {
      q: "Is the ERP cloud-based or on-premise?",
      a: "We offer both. Choose cloud for flexibility and remote access, or on premise for full internal control.",
    },
    {
      q: "How long does ERP development take?",
      a: "It depends on the size and modules basic ERPs may take 4–6 weeks, while complex, multi module systems may take 8–16 weeks.",
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
                Simplify, Automate & Scale with Custom ERP Solutions
                </h2>
                <p className="hero-paragraph">
                At We3vision Private Limited, we build intelligent ERP systems that bring all your business operations sales, HR, inventory, finance, production, and more into one smart, central platform. No more juggling spreadsheets or disconnected tools. Our ERP systems help you track, manage, and grow every part of your business with ease.<br/>Whether you're a manufacturer, a retail chain, or a service provider we design ERP solutions tailored to your industry and internal workflows, so you can run smoother, faster, and smarter.</p>
                           
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
          <h2 className="h1">Ready to Streamline Your Business?</h2>
          <p className="mb-10">Tell us how your operations work we'll map out a custom ERP solution that makes it easier to grow and manage.</p>
          <div className="mil-button-group justify-content-center">
          <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Request a Free
                                Demo</span>
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
