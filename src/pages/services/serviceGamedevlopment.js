import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Unity from "../../assest/img/technology/Unity.png";
import UnrealEngine from "../../assest/img/technology/UnrealEngine.png";
import Ethereum from "../../assest/img/technology/Ethereum.png";
import Polygon from "../../assest/img/technology/Polygon.png";
import BNBChain from "../../assest/img/technology/BNBChain.png";
import Web3js from "../../assest/img/technology/Web3-js.png";
import Ethersjs from "../../assest/img/technology/Ethers-js1.png";
import Moralis from "../../assest/img/technology/Moralis.png";
import IPFS from "../../assest/img/technology/IPFS.png";
import Pinata from "../../assest/img/technology/Pinata1.png";
import MetaMask from "../../assest/img/technology/MetaMask.png";
import WalletConnect from "../../assest/img/technology/WalletConnect.png";
import CoinbaseWallet from "../../assest/img/technology/Coinbase-Wallet.png";
import ERC721 from "../../assest/img/technology/ERC-721.png";
import ERC1155 from "../../assest/img/technology/ERC-1155.png";
import OpenSea from "../../assest/img/technology/OpenSea.png";

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
      title: "Game Concept & Token Economy Planning",
      desc: "We align on your game's core loop, asset types, play-to-earn model, and NFT structure.",
      checklist: [
        "We align on your game's core loop, asset types, play-to-earn model, and NFT structure."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Game Design & Storyboarding",
      desc: "We design characters, environments, gameplay mechanics, and reward systems.",
      checklist: [
        "We design characters, environments, gameplay mechanics, and reward systems."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Blockchain & Smart Contract Setup",
      desc: "We develop custom smart contracts to mint, trade, and manage NFTs on chains like Ethereum, BSC, or Polygon.",
      checklist: [
        "We develop custom smart contracts to mint, trade, and manage NFTs on chains like Ethereum, BSC, or Polygon."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Game Development & Integration",
      desc: "Our devs build your game using engines like Unity or Unreal, then integrate blockchain layers, wallets, and marketplaces.",
      checklist: [
        "Our devs build your game using engines like Unity or Unreal, then integrate blockchain layers, wallets, and marketplaces."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Auditing",
      desc: "We test gameplay performance, NFT mechanics, and smart contracts for fairness and security.",
      checklist: [
        "We test gameplay performance, NFT mechanics, and smart contracts for fairness and security."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch & Player Onboarding",
      desc: "We deploy your game, set up onboarding flows, and help with marketing and community tools (Discord, staking, etc.).",
      checklist: [
        "We deploy your game, set up onboarding flows, and help with marketing and community tools (Discord, staking, etc.)."
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
    { img: Ethereum, name: "Ethereum" },
    { img: Polygon, name: "Polygon" },
    { img: BNBChain, name: "BNB Chain" },
    { img: Web3js, name: "Web3.js" },
    { img: Ethersjs, name: "Ethers.js" },
    { img: Moralis, name: "Moralis" },
    { img: IPFS, name: "IPFS" },
    { img: Pinata, name: "Pinata " },
    { img: MetaMask, name: "MetaMask" },
    { img: WalletConnect, name: "WalletConnect" },
    { img: CoinbaseWallet, name: "Coinbase Wallet" },
    { img: ERC721, name: "ERC-721" },
    { img: ERC1155, name: "ERC-1155 " },
    { img: OpenSea, name: "OpenSea " }
  ];
  
  // =========================
  // Game Types We Build
  // =========================
 const industries = [
    {
      title: "Play-to-Earn Games",
      desc: "Reward players with real crypto tokens and tradable NFTs for in game achievements."
    },
    {
      title: "Metaverse Games",
      desc: "Virtual 3D worlds where players can explore, build, and own assets or land."
    },
    {
      title: "Strategy & Card Games",
      desc: "Deck-building and battle-based games powered by NFT characters and items."
    },
    {
      title: "Fantasy Sports & eSports Games",
      desc: "NFT-based fantasy leagues, teams, and digital collectibles."
    },
    {
      title: "Idle & Simulation Games",
      desc: "Auto-farming or tycoon-style games with real asset ownership."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
 const whyChoose = [
    {
      title: "Full-Suite NFT Game Development",
      desc: "From concept and art to blockchain and gameplay we cover the entire ecosystem under one roof."
    },
    {
      title: "Experienced in Web3, Not Just Gaming",
      desc: "Our team understands wallet UX, DeFi mechanics, tokenomics, and the fast-evolving crypto space."
    },
    {
      title: "Secure, Audited Smart Contracts",
      desc: "We write and test all contracts rigorously to protect your players and project from exploits."
    },
    {
      title: "Cross-Platform Gaming Experiences",
      desc: "We build for web, desktop, and mobile platforms with Web3 integrations that work across devices."
    },
    {
      title: "Community-Driven Game Mechanics",
      desc: "We help you integrate DAO features, reward pools, and staking to engage your players and investors."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
 const faqs = [
    {
      q: "What blockchains do you support for NFT games?",
      a: "We build on Ethereum, Polygon, BNB Chain, Avalanche, and Solana—based on your goals and budget."
    },
    {
      q: "Can you help design the token economy?",
      a: "Yes, we assist with full tokenomics planning including rewards, staking, burn mechanics, and liquidity models."
    },
    {
      q: "Will the game be mobile-friendly?",
      a: "Definitely. We can develop mobile-native games or responsive browser-based games with wallet support."
    },
    {
      q: "Do you help with launching on marketplaces like OpenSea?",
      a: "Yes. We can integrate your NFT assets directly into OpenSea or help build your own marketplace."
    },
    {
      q: "How long does NFT game development take?",
      a: "Simple games may take 6–10 weeks; complex projects (with multiplayer, DAO, or metaverse layers) can take 3–6 months."
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
                Build Play to Earn Games with Real Digital Ownership
                </h2>
                <p className="hero-paragraph">
                We help game studios, Web3 startups, and creators develop NFT-based games where players truly own in game assets. From strategy games and RPGs to card battlers and metaverse experiences, our NFT game development services cover everything from smart contracts to tokenomics to immersive gameplay.<br/>Whether you're building a blockchain-based game from scratch or upgrading an existing one with NFT functionality, we'll help you create a secure, engaging, and monetizable gaming ecosystem.</p>
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
          <h2 className="h1">Let's Build the Next Big NFT Game</h2>
          <p className="mb-10">Whether you have a prototype or just an idea we'll help you turn it into a playable, scalable NFT game that makes noise in the Web3 world.</p>
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
