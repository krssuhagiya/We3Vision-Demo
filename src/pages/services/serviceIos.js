import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Swift from "../../assest/img/technology/Swift.png";
import SwiftUI from "../../assest/img/technology/SwiftUI.png";
import Unity from "../../assest/img/technology/Unity.png";
import UnrealEngine from "../../assest/img/technology/UnrealEngine.png";
import SceneKit from "../../assest/img/technology/SceneKit.png";
import SpriteKit from "../../assest/img/technology/SpriteKit.png";
import Metal from "../../assest/img/technology/Metal.png";
import XcodeTestFlight from "../../assest/img/technology/Xcode-TestFlight.png";
import CoreMotion from "../../assest/img/technology/CoreMotion.png";
import ARKit from "../../assest/img/technology/ARKit.png";
import Firebase from "../../assest/img/technology/Firebase.png";
import GameCenter from "../../assest/img/technology/GameCenter.png";
import Blender from "../../assest/img/technology/Blender.png";
import Spine from "../../assest/img/technology/Spine.png";
import AfterEffects from "../../assest/img/technology/After-Effects.png";


const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Game Planning & Strategy",
      desc: "We define your game idea, target audience, and monetization goals—so your game hits the mark.",
      checklist: ["We define your game idea, target audience, and monetization goals so your game hits the mark."],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Storyboarding & Mechanics Design",
      desc: "We craft engaging gameplay loops, level designs, scoring logic, and in-game economies.",
      checklist: ["We craft engaging gameplay loops, level designs, scoring logic, and in-game economies."],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Design & Asset Creation",
      desc: "Our creative team builds the characters, UI/UX, animations, and environments that define the game's look and feel.",
      checklist: ["Our creative team builds the characters, UI/UX, animations, and environments that define the game's look and feel."],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Native iOS Game Development",
      desc: "Using Swift, Metal, or Unity, we develop a smooth, responsive game that's optimized for iPhones and iPads.",
      checklist: ["Using Swift, Metal, or Unity, we develop a smooth, responsive game that's optimized for iPhones and iPads."],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "QA Testing & Performance Tuning",
      desc: "We run intensive testing across iOS devices—fine tuning gameplay balance, fixing bugs, and boosting FPS.",
      checklist: ["We run intensive testing across iOS devices—fine tuning gameplay balance, fixing bugs, and boosting FPS."],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "App Store Launch & Support",
      desc: "We assist with Apple App Store publishing, metadata, icon design, and updates post-launch.",
      checklist: ["We assist with Apple App Store publishing, metadata, icon design, and updates post-launch."],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Tech Stack & Tools
  // =========================
  const techItems = [
    { img: Swift, name: "Swift" },
    { img: SwiftUI, name: "SwiftUI" },
    { img: Unity, name: "Unity" },
    { img: UnrealEngine, name: "Unreal Engine" },
    { img: SceneKit, name: "SceneKit" },
    { img: SpriteKit, name: "SpriteKit" },
    { img: Metal, name: "Metal" },
    { img: XcodeTestFlight, name: "Xcode & TestFlight" },
    { img: CoreMotion, name: "CoreMotion" },
    { img: ARKit, name: "ARKit" },
    { img: Firebase, name: "Firebase" },
    { img: GameCenter, name: "Game Center" },
    { img: Blender, name: "Blender" },
    { img: Spine, name: "Spine" },
    { img: AfterEffects, name: "After Effects" }
  ];
  
  // =========================
  // Game Types We Build
  // =========================
  const industries = [
    { title: "Puzzle & Strategy Games", desc: "Engaging logic games with smart UI and addictive replay value." },
    { title: "Arcade & Endless Runners", desc: "Fast paced fun with intuitive swipe/tap mechanics and leaderboard systems." },
    { title: "Augmented Reality Games (ARKit)", desc: "Interactive AR based games using real-world environments." },
    { title: "3D Adventure & Story Games", desc: "Immersive iOS games with cinematic storylines and stunning visuals." },
    { title: "Gamified Brand Apps", desc: "Mini-games built around campaigns or product promotions." },
    { title: "Kids' Educational Games", desc: "Age-appropriate, skill based learning games with engaging visuals and sounds." }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    { title: "iOS-First Game Development", desc: "We specialize in crafting games tailored for Apple's ecosystem ensuring smooth performance, retina quality visuals, and seamless App Store integration." },
    { title: "Design Meets Engineering", desc: "We fuse creative storytelling, game design principles, and native coding to build memorable gameplay experiences." },
    { title: "Optimized for iPhone & iPad", desc: "We test on multiple iOS devices to ensure your game looks great and plays smoothly across the board." },
    { title: "Custom Features & Monetization", desc: "From in app purchases to subscriptions and ads, we build the systems that support your game's growth." },
    { title: "Long-Term Growth Support", desc: "After launch, we provide analytics, retention insights, feature updates, and performance improvements." }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    { q: "What's the difference between iOS and Android game development?", a: "iOS requires more specific optimization for Apple hardware and guidelines. We build natively or cross platform depending on your needs." },
    { q: "Can you develop for both iPhone and iPad?", a: "Yes, we make sure your game runs smoothly across all iOS devices with adaptive UI and responsive controls." },
    { q: "Can I earn revenue from my iOS game?", a: "Definitely. We implement in-app purchases, ad integrations, and even subscription models based on your monetization plan." },
    { q: "How long does it take to launch a game on the App Store?", a: "It depends on game complexity—2D casual games take 3–4 weeks; advanced games with 3D, AR, or multiplayer can take 6–12+ weeks." },
    { q: "Do you help with App Store publishing?", a: "Yes we handle app submission, metadata, compliance checks, and prepare your store visuals." }
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
                Level Up Your Game with Premium ios Development          
                </h2>
                <p className="hero-paragraph">
                We design and develop iOS games that feel sleek, fast, and addictive built to shine on Apple devices. Whether you're creating a casual puzzle, a high end 3D game, or a gamified brand experience, We3vision Private Limited delivers visually polished, high performance games that users keep coming back to.<br/>From idea to App Store, we handle the full journey so you can focus on the fun.</p>
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
          <h2 className="h1">Let's Build Your ios Game the Right Way</h2>
          <p className="mb-10">Whether you've got a polished concept or just a spark of an idea, we'll help you bring it to life ready for the App Store and built to succeed.</p>
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
