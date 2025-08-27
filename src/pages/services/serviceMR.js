import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import MRTK from "../../assest/img/technology/MRTK.png";
import Unity from "../../assest/img/technology/Unity.png";
import UnrealEngine from "../../assest/img/technology/UnrealEngine.png";
import AzureSpatialAnchors from "../../assest/img/technology/AzureSpatial-Anchors.png";
import MagicLeapSDK from "../../assest/img/technology/MagicLeap-SDK.png";
import OpenXR from "../../assest/img/technology/OpenXR.png";
import Blender from "../../assest/img/technology/Blender.png";
import Cinema4D from "../../assest/img/technology/Cinema4D.png";

const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // =========================
// Our Process
// =========================
// =========================
// Our Process (Timeline)
// =========================
const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Discovery & Ideation",
      desc: "We understand your business use case and recommend the best MR approach blending AR and VR.",
      checklist: [
        "We understand your business use case and recommend the best MR approach blending AR and VR."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Experience Mapping",
      desc: "We plan user flow, interaction logic, and the environment to make the experience intuitive.",
      checklist: [
        "We plan user flow, interaction logic, and the environment to make the experience intuitive."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "3D Design & Simulation",
      desc: "We design interactive 3D models, objects, and environments that respond to user actions and real-world surroundings.",
      checklist: [
        "We design interactive 3D models, objects, and environments that respond to user actions and real-world surroundings."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "MR App Development",
      desc: "Using advanced MR SDKs, we develop applications for HoloLens, Magic Leap, and other MR platforms.",
      checklist: [
        "Using advanced MR SDKs, we develop applications for HoloLens, Magic Leap, and other MR platforms."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Real-World Testing",
      desc: "We test the application in real environments with actual user movements and device interactions.",
      checklist: [
        "We test the application in real environments with actual user movements and device interactions."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Deployment & Optimization",
      desc: "Your app goes live with full documentation and post-launch monitoring for updates, analytics, and fixes.",
      checklist: [
        "Your app goes live with full documentation and post-launch monitoring for updates, analytics, and fixes."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: MRTK, name: "MRTK" },
    { img: Unity, name: "Unity" },
    { img: UnrealEngine, name: "Unreal Engine" },
    { img: AzureSpatialAnchors, name: "Azure Spatial Anchors" },
    { img: MagicLeapSDK, name: "Magic Leap SDK" },
    { img: OpenXR, name: "OpenXR" },
    { img: Blender, name: "Blender" },
    { img: Cinema4D, name: "Cinema 4D" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Healthcare & Medical Training",
      desc: "Hands-on MR based anatomy training, surgery prep, and patient simulations."
    },
    {
      title: "Manufacturing & Maintenance",
      desc: "Step-by-step MR guidance for equipment repair, assembly, and worker safety."
    },
    {
      title: "Architecture & Engineering",
      desc: "Real-scale 3D building walkthroughs and project collaboration in real-world locations."
    },
    {
      title: "Education & Learning",
      desc: "Interactive, engaging classroom content and virtual labs powered by MR."
    },
    {
      title: "Retail & Product Demos",
      desc: "Immersive in-store experiences with holographic product displays and live customization."
    },
    {
      title: "Military & Defense",
      desc: "Tactical training simulations with live spatial awareness and battlefield overlays."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "Deep Expertise in Mixed Reality Platforms",
      desc: "We build MR solutions using Microsoft HoloLens, Magic Leap, and advanced spatial computing SDKs."
    },
    {
      title: "Real World Interaction, Not Just Visuals",
      desc: "Our MR apps aren't just 3D—they respond to touch, voice, and your environment."
    },
    {
      title: "Business Centered MR Strategy",
      desc: "We focus on delivering measurable impact through practical, scalable MR solutions."
    },
    {
      title: "Custom Design & Rapid Prototyping",
      desc: "From MVPs to enterprise apps, we craft every detail to match your industry and brand."
    },
    {
      title: "Seamless Integration with Physical Workflows",
      desc: "We ensure that your MR experience fits naturally into your team's real-world tools and tasks."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "What's the difference between MR and AR?",
      a: "AR overlays digital content. MR allows digital content to interact with the real world—it's more immersive and responsive."
    },
    {
      q: "Which devices support MR apps?",
      a: "We develop for Microsoft HoloLens, Magic Leap, and MR-compatible Windows Mixed Reality headsets."
    },
    {
      q: "Can MR be used in factories or fieldwork?",
      a: "Yes. MR can assist in maintenance, worker training, and live data overlays in industrial environments."
    },
    {
      q: "Is MR development costly?",
      a: "MR projects vary in size—we offer flexible packages for startups and enterprise clients."
    },
    {
      q: "How long does it take to build a Mixed Reality app?",
      a: "A typical MR solution takes 4–10 weeks, depending on the level of interaction and hardware integration needed."
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
                Blend the Physical and Digital with <span className="mil-thin">Mixed Reality</span>
                                                              
                </h2>
                <p className="hero-paragraph">
                Mixed Reality (MR) combines the best of Augmented Reality and Virtual Reality allowing digital elements to interact with the real world in real time. At We3vision Private Limited, we build immersive MR solutions that go beyond visuals enabling smart collaboration, training, and visualization in ways that feel truly real.<br/>Whether you're a healthcare provider, manufacturer, or educator, our MR apps help you deliver hands-on experiences without physical limits.</p>
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
          <h2 className="h1">Ready to Build a Mixed Reality Experience?</h2>
                                       
          <p className="mb-10">Let's talk about how MR can solve your business challenge—whether for training, showcasing, or engaging customers in new ways.</p>
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
