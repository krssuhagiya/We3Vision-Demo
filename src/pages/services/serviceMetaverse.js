import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Unity from "../../assest/img/technology/Unity.png";
import UnrealEngine from "../../assest/img/technology/UnrealEngine.png";
import WebGL from "../../assest/img/technology/WebGL.png";
import ThreeJS from "../../assest/img/technology/Three-js.png";
import WebXR from "../../assest/img/technology/WebXR.png";
import AFrame from "../../assest/img/technology/A-Frame.png";
import Blender from "../../assest/img/technology/Blender.png";
import Cinema4D from "../../assest/img/technology/Cinema4D.png";
import Ethereum from "../../assest/img/technology/Ethereum.png";
import Polygon from "../../assest/img/technology/Polygon.png";
import IPFS from "../../assest/img/technology/IPFS.png";
import NFTStorage from "../../assest/img/technology/NFT-Storage.png";
import SpatialIO from "../../assest/img/technology/Spatial-io.png";
import MozillaHubs from "../../assest/img/technology/Mozilla-Hubs.png";
import DecentralandSDK from "../../assest/img/technology/Decentraland-SDK.png";


const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Strategy & Platform Selection",
      desc: "We define your Metaverse goals and help choose the right platform Web3-based, custom-built, or hosted on existing virtual worlds.",
      checklist: [
        "We define your Metaverse goals and help choose the right platform Web3-based, custom-built, or hosted on existing virtual worlds."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "3D Environment Design",
      desc: "We create immersive virtual spaces like offices, showrooms, campuses, and arenas styled for your brand.",
      checklist: [
        "We create immersive virtual spaces like offices, showrooms, campuses, and arenas styled for your brand."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Avatar & Interaction Features",
      desc: "From customizable avatars to live chat, gestures, and voice users can interact naturally in real time.",
      checklist: [
        "From customizable avatars to live chat, gestures, and voice users can interact naturally in real time."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Blockchain Integration",
      desc: "We develop the Metaverse app with options for NFTs, crypto wallets, token systems, and smart contracts.",
      checklist: [
        "We develop the Metaverse app with options for NFTs, crypto wallets, token systems, and smart contracts."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Device Compatibility",
      desc: "We test performance across browsers, mobile devices, and headsets like Oculus or HTC Vive.",
      checklist: [
        "We test performance across browsers, mobile devices, and headsets like Oculus or HTC Vive."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch & Scale",
      desc: "We help you go live and scale your virtual world with analytics, events, user onboarding, and support.",
      checklist: [
        "We help you go live and scale your virtual world with analytics, events, user onboarding, and support."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  // =========================
  // Channels We Specialize In
  // =========================
  const techItems = [
    { img: Unity, name: "Unity" },
    { img: UnrealEngine, name: "Unreal Engine" },
    { img: WebGL, name: "WebGL" },
    { img: ThreeJS, name: "Three.js" },
    { img: WebXR, name: "WebXR" },
    { img: AFrame, name: "A-Frame" },
    { img: Blender, name: "Blender" },
    { img: Cinema4D, name: "Cinema 4D" },
    { img: Ethereum, name: "Ethereum" },
    { img: Polygon, name: "Polygon Blockchain" },
    { img: IPFS, name: "IPFS" },
    { img: NFTStorage, name: "NFT.Storage" },
    { img: SpatialIO, name: "Spatial.io" },
    { img: MozillaHubs, name: "Mozilla Hubs" },
    { img: DecentralandSDK, name: "Decentraland SDK" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Retail & E-commerce",
      desc: "Virtual stores, metaverse showrooms, and interactive product launches."
    },
    {
      title: "Education & eLearning",
      desc: "Virtual campuses, classrooms, and learning simulations for schools and training institutes."
    },
    {
      title: "Real Estate",
      desc: "3D virtual tours, digital property launches, and investor presentations."
    },
    {
      title: "Healthcare & Wellness",
      desc: "Mental health zones, patient education environments, and wellness workshops in the Metaverse."
    },
    {
      title: "Events & Entertainment",
      desc: "Virtual concerts, conferences, expos, and branded experiences."
    },
    {
      title: "NFT / Web3 Projects",
      desc: "Token-gated communities, NFT art galleries, and play-to-earn gaming zones."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "End-to-End Metaverse Creators",
      desc: "We handle everything from strategy and 3D design to blockchain integration and user experience."
    },
    {
      title: "Cross-Platform Metaverse Builds",
      desc: "Our solutions work on web, mobile, and VR headsets reaching your users wherever they are."
    },
    {
      title: "Custom Worlds, Not Templates",
      desc: "Every Metaverse space we build is designed from scratch to match your brand and business goals."
    },
    {
      title: "Web3 + UX Expertise",
      desc: "We blend blockchain technology with intuitive design to make your Metaverse both secure and user-friendly."
    },
    {
      title: "Scalable & Future-Proof Solutions",
      desc: "Whether you're launching a small test world or a full ecosystem, we design for growth, updates, and real-world impact."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "What platforms can my Metaverse project run on?",
      a: "We build Metaverse spaces for web browsers, VR headsets, and mobile apps—depending on your audience and budget."
    },
    {
      q: "Can I add NFTs and crypto payments to my Metaverse?",
      a: "Yes, we can integrate NFT minting, crypto wallets, and smart contracts using Ethereum or Polygon."
    },
    {
      q: "How long does it take to build a Metaverse experience?",
      a: "A simple virtual room takes 3–4 weeks. Larger, feature-rich worlds can take 6–10+ weeks depending on complexity."
    },
    {
      q: "Is Metaverse only for gaming?",
      a: "Not at all. Businesses use the Metaverse for marketing, learning, remote work, and digital commerce."
    },
    {
      q: "What's the difference between AR/VR and the Metaverse?",
      a: "AR/VR are technologies. The Metaverse is the connected space or platform where these technologies come alive interactively."
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
                Enter the Metaverse where Digital Becomes Real         
                </h2>
                <p className="hero-paragraph">
                We build custom Metaverse spaces where people can meet, shop, learn, work, and explore fully immersed in 3D virtual environments. From branded virtual stores and NFT galleries to training hubs and event platforms, our Metaverse development services help you engage audiences in powerful, future-ready ways.<br/>Whether you're a startup or enterprise, we turn your vision into a functional and interactive virtual world accessible from web, mobile, or VR headsets.</p>
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
          <h2 className="h1">Ready to Launch Your Metaverse Experience?</h2>
          <p className="mb-10">Tell us your idea, and we'll help you plan, build, and launch a virtual space your audience will love to explore.</p>
             <div className="mil-button-group justify-content-center">
          <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Book a Free Strategy Call</span>
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
