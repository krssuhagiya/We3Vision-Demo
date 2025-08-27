import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";

// Technology Images (update paths if needed)
import Unity from "../../assest/img/technology/Unity3D.png";
import Unreal from "../../assest/img/technology/UnrealEngine.png";
import CSharp from "../../assest/img/technology/C-sharp.png";
import Kotlin from "../../assest/img/technology/Kotlin.png";
import Java from "../../assest/img/technology/Java.png";
import Firebase from "../../assest/img/technology/Firebase.png";
import Photon from "../../assest/img/technology/Photon.png";
import PlayFab from "../../assest/img/technology/PlayFab.png";
import Blender from "../../assest/img/technology/Blender.png";
import Spine from "../../assest/img/technology/Spine.png";
import GooglePlayConsole from "../../assest/img/technology/GooglePlayConsole.png";
import AdMob from "../../assest/img/technology/AdMob.png";

const ServicesAndroid = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Exact Process Steps from your HTML
  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Game Concept & Market Research",
      desc: "We refine your game idea, analyze competitors, and plan features that stand out.",
      checklist: [
        "We refine your game idea, analyze competitors, and plan features that stand out."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Storyline & Game Mechanics",
      desc: "We map gameplay logic, progression systems, levels, scoring, and monetization strategies.",
      checklist: [
        "We map gameplay logic, progression systems, levels, scoring, and monetization strategies."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "UI/UX Design & Asset Creation",
      desc: "Our artists design game characters, environments, animations, and user interfaces for maximum engagement.",
      checklist: [
        "Our artists design game characters, environments, animations, and user interfaces for maximum engagement."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Game Development",
      desc: "We use powerful engines like Unity and Unreal to develop smooth, scalable Android games with fast load times and rich interactions.",
      checklist: [
        "We use powerful engines like Unity and Unreal to develop smooth, scalable Android games with fast load times and rich interactions."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Optimization",
      desc: "We test across multiple Android devices for bugs, performance, and gameplay balance.",
      checklist: [
        "We test across multiple Android devices for bugs, performance, and gameplay balance."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Publishing & Post-Launch Support",
      desc: "We help you launch on Google Play and provide updates, analytics, and monetization support.",
      checklist: [
        "We help you launch on Google Play and provide updates, analytics, and monetization support."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)",
    },
  ];
  

  // Tools from your HTML
  const techItems = [
    { img: Unity, name: "Unity 3D" },
    { img: Unreal, name: "Unreal Engine" },
    { img: CSharp, name: "C#" },
    { img: Java, name: "Java" },
    { img: Blender, name: "Blender" },
    { img: Kotlin, name: "Kotlin" },
    { img: Firebase, name: "Firebase" },
    { img: Photon, name: "Photon" },
    { img: PlayFab, name: "PlayFab" },
    { img: Spine, name: "Spine" },
    { img: GooglePlayConsole, name: "Google Play Console" },
    { img: AdMob, name: "AdMob" },
  ];

 // Game Types We Build
const industries = [
    { title: "Casual & Hyper-Casual Games", desc: "Fast paced, addictive mobile games with simple controls and quick rewards." },
    { title: "2D & 3D Arcade Games", desc: "Fun, skill-based games built for short or long sessions." },
    { title: "Multiplayer Battle Games", desc: "Real-time PvP or co-op games with matchmaking, ranking, and chat systems." },
    { title: "Simulation & Tycoon Games", desc: "Resource management games with deep systems and progression loops." },
    { title: "Educational & Gamified Apps", desc: "Learning apps, quiz-based games, or habit tracking platforms with gaming mechanics." },
    { title: "Branded Mini-Games", desc: "Lightweight games designed for brand engagement and user acquisition." },
  ];
  
  // Why Choose Us
  const whyChoose = [
    { title: "Creative Game Designers & Developers", desc: "Our team blends imagination with technical skills to bring fresh game concepts to life." },
    { title: "Optimized for Android Devices", desc: "We build games that run smoothly on a wide range of phones and tablets without lag or crashes." },
    { title: "Custom Gameplay & Monetization", desc: "Every game is built from scratch, with personalized gameplay, in app purchases, and ad strategies tailored to your audience." },
    { title: "Fast Development with Quality Focus", desc: "We work in agile sprints keeping development fast while ensuring tight control over bugs, polish, and balance." },
    { title: "Post-Launch Growth Support", desc: "Beyond development, we help you track user behavior, optimize monetization, and plan future updates." },
  ];
  
  // FAQs
  const faqs = [
    { q: "Can you help me finalize my game idea?", a: "Yes! We'll brainstorm with you, refine gameplay mechanics, and shape it into a marketable concept." },
    { q: "Do you support multiplayer Android games?", a: "Absolutely—we use Photon and Firebase to build real-time multiplayer features like battles, leaderboards, and chat." },
    { q: "Can I earn money from my game?", a: "Yes. We can add in-app purchases, reward ads, subscriptions, or paid versions depending on your monetization goals." },
    { q: "How long does it take to develop an Android game?", a: "Simple 2D games may take 3–4 weeks, while complex 3D or multiplayer games can take 8–12+ weeks." },
    { q: "Will the game work on all Android phones?", a: "We optimize games for different screen sizes, hardware levels, and OS versions to ensure maximum compatibility." },
  ];
  

  return (
    <div className="services-android-game">

      {/* Hero Section */}
      <section className="mil-banner hero-section-gradient" style={{ position: "relative", overflow: "hidden" }}>
        <HeroPolyhedron />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Container>
            <Row>
              <Col>
                <h2 className="hero-heading">
                Build Addictive, High Performance Android Games
                </h2>
                <p className="hero-paragraph">
                We3vision Private Limited helps you turn game ideas into exciting, immersive Android experiences built for performance, design, and user retention. Whether you're launching a casual game, a multiplayer battler, or a gamified app for learning or brand engagement, we create Android games that users love to download and keep playing From concept art to final code we deliver fun, functional, and future ready mobile games tailored to your goals.</p>
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
              We follow a proven development cycle to deliver top-quality Android games.
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
              <div key={index} className="tech-card mil-fade-in-up">
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
          <h2 className="h1">Ready to create your Android game?</h2>
          <p className="mb-10">Get in touch for a free quote and consultation today.</p>
          <div className="mil-button-group justify-content-center">
          <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Get a Free Quote</span>
                                <div className="mil-button-arrow">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                                </div>
                            </a>  <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Discuss Your Game</span>
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

export default ServicesAndroid;
