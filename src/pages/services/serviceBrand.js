import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";
// Technology images
import AdobeIllustrator from "../../assest/img/technology/Adobe-Illustrator.png";
import Photoshop from "../../assest/img/technology/Photoshop1.png";
import InDesign from "../../assest/img/technology/InDesign.png";
import Figma from "../../assest/img/technology/Figma.png";
import Canva from "../../assest/img/technology/Canva.png";
import GoogleFonts from "../../assest/img/technology/GoogleFonts.png";
import Typekit from "../../assest/img/technology/Typekit.png";
import Notion from "../../assest/img/technology/Notion1.png";
import Miro from "../../assest/img/technology/Miro.png";
import Loom from "../../assest/img/technology/Loom.png";
import Pitch from "../../assest/img/technology/Pitch.png";

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
      title: "Brand Audit & Research",
      desc: "We study your current brand assets, audience perception, and industry positioning.",
      checklist: [
        "We study your current brand assets, audience perception, and industry positioning."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Strategy & Positioning",
      desc: "We define your brand's tone, values, and future direction with clear messaging guidelines.",
      checklist: [
        "We define your brand's tone, values, and future direction with clear messaging guidelines."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Visual Identity Redesign",
      desc: "We redesign your logo, typography, color palette, and supporting visuals to create a modern and cohesive look.",
      checklist: [
        "We redesign your logo, typography, color palette, and supporting visuals to create a modern and cohesive look."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Brand Voice & Copy",
      desc: "We refine your tone of voice, taglines, and messaging for digital, print, and product use.",
      checklist: [
        "We refine your tone of voice, taglines, and messaging for digital, print, and product use."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Brand Guidelines & Assets",
      desc: "We deliver a complete brand style guide along with all assets—ready for use across all platforms.",
      checklist: [
        "We deliver a complete brand style guide along with all assets—ready for use across all platforms."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Rollout Support",
      desc: "We assist with updating your website, social media, print material, and more using the refreshed identity.",
      checklist: [
        "We assist with updating your website, social media, print material, and more using the refreshed identity."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)",
    },
  ];
  
  // Tools & Technologies
  const techItems = [
    { img: AdobeIllustrator, name: "Adobe Illustrator" },
    { img: Photoshop, name: "Photoshop" },
    { img: InDesign, name: "InDesign" },
    { img: Figma, name: "Figma" },
    { img: Canva, name: "Canva" },
    { img: GoogleFonts, name: "Google Fonts" },
    { img: Typekit, name: "Typekit" },
    { img: Notion, name: "Notion" },
    { img: Miro, name: "Miro" },
    { img: Loom, name: "Loom" },
    { img: Pitch, name: "Pitch" },
  ];
  
  // Industries We Serve
  const industries = [
    { title: "Corporate & Consulting", desc: "Professional redesigns for law firms, finance, and B2B companies." },
    { title: "E-commerce & Retail", desc: "Custom storefronts with conversion focused design and better checkout UX." },
    { title: "Healthcare & Clinics", desc: "Trustworthy, clean branding aligned with medical ethics and professionalism." },
    { title: "Education & EdTech", desc: "Fresh identity systems built to attract learners, parents, and educators alike." },
    { title: "Real Estate & Construction", desc: "Modern branding that communicates trust, scale, and premium positioning." },
    { title: "Hospitality & Food", desc: "Vibrant, tasteful branding that connects emotionally with your audience." },
    { title: "Startups & Tech Brands", desc: "Launch ready brand visuals and voice that stand out in crowded digital markets." },
  ];
  
  // Why Choose Us
  const whyChoose = [
    { title: "Strategic Branding, Not Just Visuals", desc: "We go beyond logos we build identity systems with purpose, meaning, and positioning." },
    { title: "Brand Consistency Across All Channels", desc: "From websites to packaging, we ensure your brand feels aligned everywhere." },
    { title: "Custom Design with No Templates", desc: "Every refresh is tailored to your goals, values, and audience built from scratch." },
    { title: "In House Designers + Brand Strategists", desc: "You'll work with a team that understands both visual creativity and strategic branding." },
    { title: "Flexible for Startups & Enterprises", desc: "Whether you need a light refresh or a complete rebrand, we scale to match your needs and budget." },
  ];
  
  // FAQs
  const faqs = [
    { q: "What's the difference between a brand refresh and a full rebrand?", a: "A refresh updates visuals and tone while keeping your core identity. A rebrand changes everything—name, voice, positioning, etc." },
    { q: "Do I need to redesign my logo?", a: "Not always. We can modernize or clean up your logo without changing it completely—unless you want a full redesign." },
    { q: "Will my customers still recognize my brand?", a: "Yes. We refresh your brand in a way that enhances recognition, not replaces it—unless you're targeting a new audience." },
    { q: "How long does a brand refresh take?", a: "Typically 2–4 weeks depending on your scope (visuals, voice, strategy, etc.)." },
    { q: "Can you also update my website and social media?", a: "Absolutely. We offer rollout support for applying the new identity across all platforms." },
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
                Refresh Your Brand Identity Stay Relevant, Recognizable, and Memorable
                </h2>
                <p className="hero-paragraph">
                Is your brand starting to feel outdated or inconsistent across platforms? At We3vision Private Limited, we help you refresh your brand identity to better reflect who you are today and where you're headed tomorrow. From your logo and colors to typography, tone of voice, and design system we create a cohesive, modern brand that connects with your target audience.<br/>Whether you're rebranding after growth, pivoting your market, or just evolving visually we'll help you stay competitive, consistent, and unforgettable.</p>
        
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
          <h2 className="h1">Time for a Brand Refresh? Let's Redesign with Purpose.</h2>
          <p className="mb-10">Share your current brand, vision, and goals we'll help you modernize your identity and make a bigger impact.</p>
          <div className="mil-button-group justify-content-center">
          <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Request Brand Audit</span>
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
