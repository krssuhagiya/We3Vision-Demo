import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Ethereum from "../../assest/img/technology/Ethereum.png";
import Polygon from "../../assest/img/technology/Polygon.png";
import Solana from "../../assest/img/technology/Solana.png";
import BNBChain from "../../assest/img/technology/BNBChain.png";
import IPFS from "../../assest/img/technology/IPFS.png";
import Pinata from "../../assest/img/technology/Pinata1.png";
import ERC721 from "../../assest/img/technology/ERC-721.png";
import ERC1155 from "../../assest/img/technology/ERC-1155.png";
import Web3js from "../../assest/img/technology/Web3-js.png";
import Ethersjs from "../../assest/img/technology/Ethers-js1.png";
import MetaMask from "../../assest/img/technology/MetaMask.png";
import CoinbaseWallet from "../../assest/img/technology/Coinbase-Wallet.png";
import WalletConnect from "../../assest/img/technology/WalletConnect.png";
import NodeJS from "../../assest/img/technology/NodeJS.png";
import ReactJS from "../../assest/img/technology/React.png";
import NextJS from "../../assest/img/technology/nextjs.png";
import OpenZeppelin from "../../assest/img/technology/OpenZeppelin.png";
import Firebase from "../../assest/img/technology/Firebase.png";
import AWS from "../../assest/img/technology/AWS-scalable-backend.png";


const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Discovery & Project Scoping",
      desc: "We understand your goals, target users, NFT categories, and preferred blockchain for development.",
      checklist: [
        "We understand your goals, target users, NFT categories, and preferred blockchain for development."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Wireframes & UI/UX Design",
      desc: "Our team creates intuitive, modern interfaces with clean navigation and wallet integration in mind.",
      checklist: [
        "Our team creates intuitive, modern interfaces with clean navigation and wallet integration in mind."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Smart Contract Development",
      desc: "We build and audit custom smart contracts for minting, transactions, royalties, and ownership tracking.",
      checklist: [
        "We build and audit custom smart contracts for minting, transactions, royalties, and ownership tracking."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Marketplace Development",
      desc: "We develop backend infrastructure, front-end features, and ensure seamless performance across devices.",
      checklist: [
        "We develop backend infrastructure, front-end features, and ensure seamless performance across devices."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Wallet & Blockchain Integration",
      desc: "We integrate popular crypto wallets (like MetaMask, WalletConnect) and support blockchain standards (ERC-721, ERC-1155, etc.).",
      checklist: [
        "We integrate popular crypto wallets (like MetaMask, WalletConnect) and support blockchain standards (ERC-721, ERC-1155, etc.)."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Testing & Deployment",
      desc: "Rigorous testing for security, gas optimization, and user experience. Then we deploy to mainnet.",
      checklist: [
        "Rigorous testing for security, gas optimization, and user experience. Then we deploy to mainnet."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    },
    {
      num: "07.",
      color: "#e65cff",
      title: "Ongoing Support & Upgrades",
      desc: "Post-launch maintenance, feature enhancements, and technical support to keep your platform thriving.",
      checklist: [
        "Post-launch maintenance, feature enhancements, and technical support to keep your platform thriving."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    }
  ];
  // =========================
  // Channels We Specialize In
  // =========================
  const techItems = [
    { img: Ethereum, name: "Ethereum" },
    { img: Polygon, name: "Polygon" },
    { img: Solana, name: "Solana" },
    { img: BNBChain, name: "BNB Chain" },
    { img: IPFS, name: "IPFS" },
    { img: Pinata, name: "Pinata " },
    { img: ERC721, name: "ERC-721" },
    { img: ERC1155, name: "ERC-1155" },
    { img: Web3js, name: "Web3.js" },
    { img: Ethersjs, name: "Ethers.js" },
    { img: MetaMask, name: "MetaMask" },
    { img: CoinbaseWallet, name: "Coinbase Wallet" },
    { img: WalletConnect, name: "WalletConnect" },
    { img: NodeJS, name: "Node.js" },
    { img: ReactJS, name: "React.js" },
    { img: NextJS, name: "Next.js" },
    { img: OpenZeppelin, name: "OpenZeppelin" },
    { img: Firebase, name: "Firebase" },
    { img: AWS, name: "AWS " }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Art & Digital Collectibles",
      desc: "NFT marketplaces for artists, photographers, and collectors with auction and royalty features."
    },
    {
      title: "Gaming & Metaverse Assets",
      desc: "Tokenized in-game assets, skins, wearables, and virtual land for metaverse platforms."
    },
    {
      title: "Music & Entertainment",
      desc: "Platforms to sell music, albums, concert passes, and exclusive content as NFTs."
    },
    {
      title: "Real Estate & Tokenized Assets",
      desc: "NFTs for property deeds, virtual real estate, and fractional asset ownership."
    },
    {
      title: "Sports & Events",
      desc: "Fan tokens, collectible highlights, ticket NFTs, and athlete-backed assets."
    },
    {
      title: "Fashion & Luxury Goods",
      desc: "NFTs for digital wearables, designer drops, and product authentication."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "Blockchain-Ready Experts",
      desc: "Our devs understand the nuances of NFT protocols, gas fees, and wallet compatibility across ecosystems."
    },
    {
      title: "Custom-Built for Your Use Case",
      desc: "From visual design to feature sets (like auctions, bidding, royalties), everything is tailored to your niche."
    },
    {
      title: "Secure, Audited Smart Contracts",
      desc: "We follow best practices for smart contract development, with optional third-party audits for added trust."
    },
    {
      title: "Seamless Wallet & Crypto Integrations",
      desc: "We ensure smooth onboarding for users with one-click wallet connections and crypto payments."
    },
    {
      title: "Scalable, Future-Ready Architecture",
      desc: "Built to handle growth with modular features like NFT staking, royalties, creator dashboards, and more."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "How long does it take to build an NFT marketplace?",
      a: "Basic platforms take 4–6 weeks. Advanced features like auctions, multi-chain support, or creator tools can take 8–12+ weeks."
    },
    {
      q: "Can I choose which blockchain my platform runs on?",
      a: "Absolutely. We support Ethereum, Polygon, BNB Chain, Solana, and others based on your budget, speed, and ecosystem goals."
    },
    {
      q: "Will users need crypto to interact with the platform?",
      a: "We can integrate fiat gateways (like Stripe or MoonPay) for easier onboarding, or go crypto-only depending on your model."
    },
    {
      q: "Do you provide white-label NFT marketplace solutions?",
      a: "Yes, we offer both custom development and fast-launch white-label options with branding flexibility."
    },
    {
      q: "Can you help with post-launch marketing or NFT drops?",
      a: "Yes. Our Web3 marketing team can support with campaign strategy, creator outreach, social media, and influencer activations."
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
                Launch Your Own NFT Marketplace with Confidence           
                </h2>
                <p className="hero-paragraph">
                We3vision Private Limited helps you build scalable, secure, and feature rich NFT marketplaces that empower users to mint, buy, sell, and trade digital assets whether it's art, collectibles, music, gaming assets, or real estate. Our end-to-end development approach ensures your platform is blockchain ready, user friendly, and future proof.<br/>Whether you're building a niche platform for creators or a large scale NFT ecosystem, we deliver custom NFT marketplaces tailored to your brand, audience, and monetization goals.</p>
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
          <h2 className="h1">Ready to Build the Next OpenSea or Foundation?</h2>
          <p className="mb-10">Let's bring your NFT marketplace vision to life from the blockchain up.</p>
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
