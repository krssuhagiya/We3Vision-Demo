import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Unity from "../../assest/img/technology/Unity.png";
import UnrealEngine from "../../assest/img/technology/UnrealEngine.png";
import ARKit from "../../assest/img/technology/ARKit.webp";
import ARCore from "../../assest/img/technology/ARcore.png";
import EighthWall from "../../assest/img/technology/thwall.png";
import WebAR from "../../assest/img/technology/webAR.png";
import WebXR from "../../assest/img/technology/WebXR.png";
import ThreeJS from "../../assest/img/technology/Three-js.png";
import BabylonJS from "../../assest/img/technology/Babylon-js.png";
import Blender from "../../assest/img/technology/Blender.png";
import Maya from "../../assest/img/technology/maya.png";
import Cinema4D from "../../assest/img/technology/Cinema4D.png";
import SparkAR from "../../assest/img/technology/SparkAR.png";
import LensStudio from "../../assest/img/technology/LensStudio.png";
const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Discovery & Campaign Goals",
      desc: "We understand your brand, campaign objectives, and audience expectations.",
      checklist: [
        "We understand your brand, campaign objectives, and audience expectations."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Creative Concept & Storyboarding",
      desc: "We shape bold ideas into visual storylines—designed to captivate and convert.",
      checklist: [
        "We shape bold ideas into visual storylines—designed to captivate and convert."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Tech Planning & Asset Design",
      desc: "From 3D modeling to AR filters or VR environments, we build custom assets that match your campaign tone.",
      checklist: [
        "From 3D modeling to AR filters or VR environments, we build custom assets that match your campaign tone."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Integration",
      desc: "We develop and deploy immersive content across your preferred platforms—web, mobile, or headset-based.",
      checklist: [
        "We develop and deploy immersive content across your preferred platforms—web, mobile, or headset-based."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Launch",
      desc: "We test for performance and usability across devices, then launch with full marketing support.",
      checklist: [
        "We test for performance and usability across devices, then launch with full marketing support."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Analytics & Optimization",
      desc: "Track user engagement and improve campaign performance with real-time feedback and A/B testing.",
      checklist: [
        "Track user engagement and improve campaign performance with real-time feedback and A/B testing."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Tech Stack & Tools
  // =========================
 const techItems = [
    { img: Unity, name: "Unity" },
    { img: UnrealEngine, name: "Unreal Engine" },
    { img: ARKit, name: "ARKit" },
    { img: ARCore, name: "ARCore" },
    { img: EighthWall, name: "8thWall" },
    { img: WebAR, name: "WebAR" },
    { img: WebXR, name: "WebXR" },
    { img: ThreeJS, name: "Three.js" },
    { img: BabylonJS, name: "Babylon.js" },
    { img: Blender, name: "Blender" },
    { img: Maya, name: "Maya" },
    { img: Cinema4D, name: "Cinema 4D" },
    { img: SparkAR, name: "Spark AR" },
    { img: LensStudio, name: "Lens Studio" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
 const industries = [
    { title: "Retail & Fashion", desc: "Try-on AR, virtual stores, and interactive product launches." },
    { title: "Real Estate", desc: "Immersive 3D property walkthroughs and AR overlays for listings." },
    { title: "Automotive", desc: "Virtual test drives, car customizers, and experiential showrooms." },
    { title: "Entertainment & Events", desc: "Gamified campaigns, VR concerts, and branded AR filters." },
    { title: "Tourism & Travel", desc: "Virtual tours, destination previews, and cultural experiences." },
    { title: "Healthcare & Wellness", desc: "Interactive education, mental wellness apps, and patient engagement tools." }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
 const whyChoose = [
    {
      title: "Creative Meets Technology",
      desc: "We combine design thinking with emerging tech to deliver campaigns that leave a lasting impression."
    },
    {
      title: "Multi-Platform Reach",
      desc: "From social filters to headset VR to WebAR we make sure your audience can access your campaign anywhere."
    },
    {
      title: "Custom Strategies for Every Brand",
      desc: "Whether you're launching a product or building long term brand affinity, we design immersive journeys to match your business goals."
    },
    {
      title: "Analytics-Driven Improvements",
      desc: "We provide detailed reports and engagement data to help you measure impact and improve performance."
    },
    {
      title: "Collaborative Process, Start to Finish",
      desc: "You're part of every creative and technical decision—ensuring the final result reflects your brand perfectly."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
 const faqs = [
    {
      q: "What is immersive marketing exactly?",
      a: "Immersive marketing uses technologies like AR, VR, and 3D to create interactive and memorable brand experiences."
    },
    {
      q: "Is it suitable for small businesses or only big brands?",
      a: "It's for everyone! We offer scalable solutions based on your budget and audience."
    },
    {
      q: "Do users need special devices to experience it?",
      a: "Not always. We also build WebAR or mobile experiences that run on regular smartphones."
    },
    {
      q: "Can immersive marketing increase conversions?",
      a: "Yes—studies show that interactive content boosts engagement and conversion rates significantly."
    },
    {
      q: "How long does it take to launch a campaign?",
      a: "Depending on complexity, it can take anywhere from 2 to 8 weeks. We'll give you a clear timeline upfront."
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
                Make Your Brand Unforgettable with Immersive Marketing            
                </h2>
                <p className="hero-paragraph">
                Step into the future of marketing with experiences that don't just tell your story they let your audience live it. We create immersive campaigns using AR, VR, 3D visuals, and interactive content that grab attention, spark emotion, and drive real engagement.<br/>Whether it's a virtual product launch, branded AR filter, or interactive showroom, our immersive marketing strategies help brands break through the noise and connect on a deeper level.</p>
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
          <h2 className="h1">Let's Make Your Marketing Memorable</h2>
          <p className="mb-10">Tell us your campaign idea or challenge. We'll brainstorm immersive solutions and get back with a timeline and quote.</p>
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
