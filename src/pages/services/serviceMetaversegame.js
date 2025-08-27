import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import UnrealEngine from "../../assest/img/technology/UnrealEngine.png";
import Unity3D from "../../assest/img/technology/Unity3D.png";
import ThreeJS from "../../assest/img/technology/Three-js.png";
import BabylonJS from "../../assest/img/technology/Babylon-js.png";
import WebGL from "../../assest/img/technology/WebGL.png";
import DecentralandSDK from "../../assest/img/technology/Decentraland-SDK.png";
import SandboxGameMaker from "../../assest/img/technology/Sandbox-Game-Maker.png";
import Ethereum from "../../assest/img/technology/Ethereum.png";
import Polygon from "../../assest/img/technology/Polygon.png";
import Solana from "../../assest/img/technology/Solana.png";
import IPFS from "../../assest/img/technology/IPFS.png";
import Moralis from "../../assest/img/technology/Moralis.png";
import Chainlink from "../../assest/img/technology/Chainlink.png";
import Blender from "../../assest/img/technology/Blender.png";
import ZBrush from "../../assest/img/technology/ZBrush.png";
import Maya from "../../assest/img/technology/maya.png";
import WalletConnect from "../../assest/img/technology/WalletConnect.png";
import MetaMask from "../../assest/img/technology/MetaMask.png";


const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Ideation & Game Mechanics",
      desc: "We co-create your game's storyline, gameplay loops, asset systems, and interaction mechanics with the Metaverse in mind.",
      checklist: [
        "We co-create your game's storyline, gameplay loops, asset systems, and interaction mechanics with the Metaverse in mind."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Platform & Tech Planning",
      desc: "We define the right environment Decentraland, The Sandbox, Unreal-based custom world, or Web3-based platform.",
      checklist: [
        "We define the right environment Decentraland, The Sandbox, Unreal-based custom world, or Web3-based platform."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "3D Design & World Building",
      desc: "Our artists build immersive 3D environments, avatars, and gamified spaces aligned with your brand and audience.",
      checklist: [
        "Our artists build immersive 3D environments, avatars, and gamified spaces aligned with your brand and audience."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Game Development & Blockchain Integration",
      desc: "We develop cross-platform games with NFT, wallet, and smart contract support powered by secure, scalable code.",
      checklist: [
        "We develop cross-platform games with NFT, wallet, and smart contract support powered by secure, scalable code."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Interoperability Checks",
      desc: "We ensure seamless navigation, asset interactions, multiplayer syncing, and device/browser compatibility.",
      checklist: [
        "We ensure seamless navigation, asset interactions, multiplayer syncing, and device/browser compatibility."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch, DAO Governance & Support",
      desc: "We help with platform deployment, tokenomics rollout, and ongoing feature upgrades or governance features.",
      checklist: [
        "We help with platform deployment, tokenomics rollout, and ongoing feature upgrades or governance features."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];

  const techItems = [
    { img: UnrealEngine, name: "Unreal Engine" },
    { img: Unity3D, name: "Unity 3D" },
    { img: ThreeJS, name: "Three.js" },
    { img: BabylonJS, name: "Babylon.js" },
    { img: WebGL, name: "WebGL" },
    { img: DecentralandSDK, name: "Decentraland SDK" },
    { img: SandboxGameMaker, name: "Sandbox Game Maker" },
    { img: Ethereum, name: "Ethereum" },
    { img: Polygon, name: "Polygon" },
    { img: Solana, name: "Solana (Smart Contracts)" },
    { img: IPFS, name: "IPFS" },
    { img: Moralis, name: "Moralis" },
    { img: Chainlink, name: "Chainlink" },
    { img: Blender, name: "Blender" },
    { img: ZBrush, name: "ZBrush" },
    { img: Maya, name: "Maya" },
    { img: WalletConnect, name: "WalletConnect" },
    { img: MetaMask, name: "MetaMask Integration" }
  ];
  
  
  // =========================
  // Channels We Specialize In
  // =========================
  const industries = [
    {
      title: "Open-World Exploration Games",
      desc: "Large-scale virtual environments with missions, collectibles, and avatars."
    },
    {
      title: "Play-to-Earn (P2E) Games",
      desc: "Blockchain-integrated games that reward users through tokens, NFTs, and quests."
    },
    {
      title: "Virtual Social & Hangout Worlds",
      desc: "Branded 3D spaces for users to meet, chat, and explore with gamified elements."
    },
    {
      title: "Branded Mini-Games & Campaigns",
      desc: "Custom games built for marketing, events, or virtual product launches."
    },
    {
      title: "Simulation & Real-Estate Games",
      desc: "Metaverse platforms for buying, selling, and building virtual real estate or experiences."
    },
    {
      title: "Educational Metaverse Games",
      desc: "Interactive learning platforms inside metaverse-style environments with badges, quests, and AR/VR elements."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "End-to-End Metaverse Game Studio",
      desc: "From tokenomics to 3D design, we handle every piece so you don't have to juggle multiple vendors."
    },
    {
      title: "Web3 & Gaming Experts",
      desc: "Our team blends deep gaming experience with blockchain development and smart contract engineering."
    },
    {
      title: "Custom Avatars & Digital Assets",
      desc: "We design unique NFTs, wearables, and characters with full interoperability for cross-platform use."
    },
    {
      title: "Scalable, Secure, Future-Ready",
      desc: "Whether it's a single game or a multi-zone metaverse, our code is optimized for growth, security, and performance."
    },
    {
      title: "Interactive, Social-First Design",
      desc: "We build for community integrating chat, multiplayer logic, and real-time sync for immersive social play."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "What platforms can you build Metaverse games on?",
      a: "We develop for Decentraland, The Sandbox, Spatial, WebXR, and custom Unreal/Unity-based metaverse platforms."
    },
    {
      q: "Can I monetize my Metaverse game?",
      a: "Yes—we support in-game NFT sales, land ownership, token-based rewards, and smart contract-powered economies."
    },
    {
      q: "Do I need to use blockchain?",
      a: "Not necessarily. While many Metaverse games include Web3 features, we can also build non-blockchain metaverse experiences depending on your use case."
    },
    {
      q: "What makes Metaverse games different from traditional games?",
      a: "They're immersive, persistent, social, and often decentralized—blending gaming with commerce, identity, and community."
    },
    {
      q: "How long does it take to build a Metaverse game?",
      a: "Smaller games or branded worlds may take 4–8 weeks. Full open-world games with Web3 layers typically take 12–20+ weeks."
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
                Design the Future of Play in the Metaverse  
                </h2>
                <p className="hero-paragraph">
                At We3vision Private Limited, we build immersive, boundary-breaking games designed for the Metaverse where users don digital avatars, own virtual assets, and explore shared 3D worlds in real time. Whether you're a startup or an enterprise, we help you build gamified metaverse platforms that combine storytelling, blockchain, and next-gen engagement.<br/>From social hangouts and play-to-earn economies to branded virtual worlds we turn your idea into a functional, scalable metaverse gaming experience.</p>
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
          <h2 className="h1">Build Your Metaverse Game Today</h2>
                                
          <p className="mb-10">Got a bold idea for the next breakout Web3 game? We'll help you turn it into a playable metaverse with NFT integration, smart economies, and social interaction at the core.</p>
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
                                <span>Let's Talk Metaverse</span>
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
