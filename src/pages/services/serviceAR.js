import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import ARKit from "../../assest/img/technology/ARKit.webp";
import ARcore from "../../assest/img/technology/ARcore.png";
import UnityVuforia from "../../assest/img/technology/UnityVuforia.png";
import WebAR from "../../assest/img/technology/webAR.png";
import thWall from "../../assest/img/technology/thwall.png";
import SparkAR from "../../assest/img/technology/SparkAR.png";
import Blender from "../../assest/img/technology/Blender.png";
import maya from "../../assest/img/technology/maya.png";
import Cinema4D from "../../assest/img/technology/Cinema4D.png";

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
      title: "Discovery & Concept Planning",
      desc: "We explore your goals, audience, and potential use cases for AR integration.",
      checklist: ["We explore your goals, audience, and potential use cases for AR integration."],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Storyboarding & Wireframes",
      desc: "We sketch the interaction flow and visuals to align with your vision.",
      checklist: ["We sketch the interaction flow and visuals to align with your vision."],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Design & 3D Modeling",
      desc: "Our team creates immersive UI/UX and 3D assets that bring your concept to life.",
      checklist: ["Our team creates immersive UI/UX and 3D assets that bring your concept to life."],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "AR Development",
      desc: "We use cutting edge AR SDKs and frameworks to build functional, smooth AR applications.",
      checklist: ["We use cutting edge AR SDKs and frameworks to build functional, smooth AR applications."],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing Across Devices",
      desc: "We test on real-world environments and across platforms for performance and accuracy.",
      checklist: ["We test on real-world environments and across platforms for performance and accuracy."],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch & Optimization",
      desc: "We deploy and monitor your AR experience while offering updates and improvements.",
      checklist: ["We deploy and monitor your AR experience while offering updates and improvements."],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)",
    },
  ];
  
  // Tools & Technologies
  const techItems = [
    { img: ARKit, name: "ARkit (iOS)" },
    { img: ARcore, name: "ARcore (Android)" },
    { img: UnityVuforia, name: "Unity + Vuforia" },
    { img: WebAR, name: "WebAR" },
    { img: thWall, name: "8thWall" },
    { img: SparkAR, name: "SparkAR" },
    { img: Blender, name: "Blender" },
    { img: maya, name: "Maya" },
    { img: Cinema4D, name: "Cinema4D" },
  ];
  
  // Industries We Serve
  const industries = [
    { title: "Retail & E-commerce", desc: "Try-before-you-buy features, AR shopping, and virtual product visualization." },
    { title: "Real Estate", desc: "Virtual property walkthroughs and location based AR tours for realtors." },
    { title: "Education & Training", desc: "Immersive learning tools and simulation based AR for schools and workforce training." },
    { title: "Marketing & Advertising", desc: "Interactive brand campaigns using filters, experiences, and gamification." },
    { title: "Healthcare", desc: "AR assisted surgery planning, anatomy visualization, and medical training." },
    { title: "Manufacturing & Automotive", desc: "Maintenance visualization, AR manuals, and design reviews." },
  ];
  
  // Why Choose Us
  const whyChoose = [
    { title: "AR Experts with Creative Vision", desc: "Our developers and designers bring a balance of tech skills and creative thinking to craft meaningful AR solutions." },
    { title: "Custom Tailored AR Experiences", desc: "We build every experience based on your brand, use case, and audience behavior ensuring relevance and impact." },
    { title: "Cross Platform Compatibility", desc: "We develop AR for iOS, Android, and WebAR to reach users on any device." },
    { title: "Affordable and Scalable Solutions", desc: "Whether you're launching a simple AR campaign or a full scale app, we provide cost effective, future ready solutions." },
    { title: "Speedy Development with Quality Control", desc: "Our agile process ensures rapid delivery without compromising quality or user experience." },
  ];
  
  // FAQs
  const faqs = [
    { q: "Do users need to download an app for AR experiences?", a: "Not always. We also offer WebAR solutions that work directly in mobile browsers." },
    { q: "How long does it take to develop an AR solution?", a: "Simple filters may take 1–2 weeks, while advanced apps can take 4–8 weeks depending on features." },
    { q: "Can AR be used for E-commerce?", a: "Yes! AR helps customers preview products in real environments before purchasing." },
    { q: "Is AR development expensive?", a: "We offer scalable AR solutions to fit different budgets—from startups to enterprises." },
    { q: "What devices will the AR experience support?", a: "We build AR compatible with Android, iOS, and WebAR-supported browsers." },
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
                Bring Your Brand to Life with <span className="mil-thin">Augmented Reality</span>
                </h2>
                <p className="hero-paragraph">
                We create interactive AR experiences that blend the digital and physical world to captivate your audience. Whether it's for retail, real estate, education, or marketing our AR development services turn ideas into engaging, real time experiences your users can touch, see, and interact with.<br/>From mobile based AR filters to enterprise level AR applications, we help businesses deliver futuristic experiences that drive more engagement and customer satisfaction.</p>
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
          <h2 className="h1">Want to Build Your AR Experience?</h2>
          <p className="mb-10">Share your concept and goals we'll help you shape the strategy, estimate cost, and bring your AR idea to life.</p>
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
