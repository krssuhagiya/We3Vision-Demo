import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Fluttert from "../../assest/img/technology/Fluttert.png";
import ReactNative from "../../assest/img/technology/ReactNative.png";
import Kotlin from "../../assest/img/technology/Kotlin.png";
import Swift from "../../assest/img/technology/Swift.png";
import Firebase from "../../assest/img/technology/Firebase.png";
import MongoDB from "../../assest/img/technology/MongoDB.png";
import MySQL from "../../assest/img/technology/MySQL.png";
import NodeJS from "../../assest/img/technology/NodeJS.png";
import ExpressJS from "../../assest/img/technology/Express-js.png";
import Laravel from "../../assest/img/technology/Laravel.png";
import AWSAI from "../../assest/img/technology/AWSAI.png";
import GoogleCloudAI from "../../assest/img/technology/GoogleCloudAI.png";
import Azure from "../../assest/img/technology/azure.png";
import RESTfulAPIs from "../../assest/img/technology/RESTful-APIs.png";
import GraphQL from "../../assest/img/technology/REST-GraphQL.png";
import Figma from "../../assest/img/technology/Figma.png";
import AdobeXD from "../../assest/img/technology/AdobeXD.png";
import Zeplin from "../../assest/img/technology/Zeplin.png";


const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // =========================
// Our Process
// =========================
const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Idea Discussion & Planning",
      desc: "We understand your business needs and define the app's core features, user flow, and platform preferences.",
      checklist: [
        "Define core features and user flow",
        "Choose platform preferences",
        "Plan app architecture"
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "UI/UX Design",
      desc: "Our designers create clean, intuitive interfaces that offer smooth experiences for your users.",
      checklist: [
        "Create clean, intuitive interfaces",
        "Design smooth user experiences"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "App Development",
      desc: "We code the app using the latest frameworks, ensuring performance, stability, and scalability.",
      checklist: [
        "Latest framework implementation",
        "Performance optimization",
        "Scalable architecture"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Testing & QA",
      desc: "Each app goes through rigorous testing to make sure it's bug-free, fast, and secure.",
      checklist: [
        "Rigorous testing procedures",
        "Bug-free and secure apps",
        "Performance validation"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "App Store Launch",
      desc: "We assist in publishing your app on Google Play and Apple App Store with optimized metadata.",
      checklist: [
        "Google Play Store submission",
        "Apple App Store submission"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Maintenance & Updates",
      desc: "After launch, we provide updates, new features, and support as your business grows.",
      checklist: [
        "Regular updates and new features",
        "Ongoing support and maintenance"
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: Fluttert, name: "Fluttert" },
    { img: ReactNative, name: "React Native" },
    { img: Kotlin, name: "Kotlin" },
    { img: Swift, name: "Swift" },
    { img: Firebase, name: "Firebase" },
    { img: MongoDB, name: "MongoDB" },
    { img: MySQL, name: "MySQL" },
    { img: NodeJS, name: "Node.js" },
    { img: ExpressJS, name: "Express.js" },
    { img: Laravel, name: "Laravel" },
    { img: AWSAI, name: "AWS" },
    { img: GoogleCloudAI, name: "Google Cloud" },
    { img: Azure, name: "Azure" },
    { img: RESTfulAPIs, name: "RESTful APIs" },
    { img: GraphQL, name: "GraphQL" },
    { img: Figma, name: "Figma" },
    { img: AdobeXD, name: "Adobe XD" },
    { img: Zeplin, name: "Zeplin" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Healthcare",
      desc: "Appointment booking, health tracking, and doctor-patient communication apps."
    },
    {
      title: "E-commerce",
      desc: "Shopping apps with secure payments, inventory sync, and push notifications."
    },
    {
      title: "Finance",
      desc: "Secure banking, investment tracking, and wallet-based mobile solutions."
    },
    {
      title: "Education",
      desc: "Learning apps with video content, quizzes, and student dashboards."
    },
    {
      title: "Logistics",
      desc: "Real-time tracking, route optimization, and fleet management solutions."
    },
    {
      title: "On-Demand Services",
      desc: "From food delivery to salon services, we build user-friendly on-demand apps."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "Experienced Mobile Developers",
      desc: "Our team has hands-on experience building apps for startups, SMEs, and enterprise clients across various domains."
    },
    {
      title: "Custom Solutions, Not Templates",
      desc: "We create fully tailored mobile apps that solve real user problems and reflect your brand identity."
    },
    {
      title: "Cross-Platform & Native Expertise",
      desc: "Whether you want native iOS, Android, or hybrid apps—we pick the right tech for your goals and budget."
    },
    {
      title: "Performance-Focused Development",
      desc: "Speed, stability, and scalability are at the core of every app we develop."
    },
    {
      title: "Ongoing Support & Optimization",
      desc: "We don't stop at launch. We offer updates, new features, and performance improvements as your app scales."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "Do you build both Android and iOS apps?",
      a: "Yes, we develop native and cross-platform apps for Android and iOS."
    },
    {
      q: "Can I see progress during development?",
      a: "Absolutely! We share regular updates, test builds, and collect your feedback."
    },
    {
      q: "Do you help with publishing on app stores?",
      a: "Yes, we assist with Play Store and App Store submissions, compliance, and metadata."
    },
    {
      q: "How secure will my app be?",
      a: "Security is a top priority. We use encryption, secure APIs, and best practices for data protection."
    },
    {
      q: "Can you maintain and update my app post-launch?",
      a: "Yes, we offer app maintenance, bug fixes, and feature enhancements after launch."
    }
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
                Custom Mobile Apps Built for Performance and Growth <span className="mil-thin">That Captures Attention</span>
                                                
                </h2>
                <p className="hero-paragraph">
                We design and develop mobile applications that are fast, user-friendly, and built to scale. Whether you need an app for Android, iOS, or a hybrid solution we create mobile experiences that help your business stand out in a competitive app market. From food delivery apps to fitness trackers and enterprise tools, our team builds apps tailored to your goals, your users, and your industry. Expect high performance, beautiful design, and reliable functionality across every device.</p>
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
              Our <span style={{ color: "#e65cff" }}>Process</span>
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
          <h2 className="h1">Have an app idea? Let's bring it to life.</h2>
                                     
          <p className="mb-10">Share your concept with us, and we'll guide you on the tech, timeline, and cost.</p>
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
