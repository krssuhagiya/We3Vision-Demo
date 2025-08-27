import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import WordPress from "../../assest/img/technology/WordPress.png";
  import Webflow from "../../assest/img/technology/Webflow.png";
  import Shopify from "../../assest/img/technology/Shopify.png";
  import HTML5 from "../../assest/img/technology/HTML5.png";
  import CSS3 from "../../assest/img/technology/CSS3.png";
  import JavaScriptImg from "../../assest/img/technology/javascript.png";
  import ReactImg from "../../assest/img/technology/React.png";
  import NextJS from "../../assest/img/technology/nextjs.png";
  import VueJs from "../../assest/img/technology/VueJs.png";
  import FigmaImg from "../../assest/img/technology/Figma.png";
  import AdobeXDImg from "../../assest/img/technology/AdobeXD.png";
  import Canva from "../../assest/img/technology/Canva.png";
  import GSAPImg from "../../assest/img/technology/GSAP.png";
  import FramerMotionImg from "../../assest/img/technology/FramerMotion.png";
  import GTmetrix from "../../assest/img/technology/GTmetrix.png";
  import Lighthouse from "../../assest/img/technology/lighthouse.png";
  import GooglePageSpeed from "../../assest/img/technology/GooglePageSpeed.png";
  import Yoast from "../../assest/img/technology/Yoast.png";
  import RankMath from "../../assest/img/technology/RankM.png";
  import ScreamingFrog from "../../assest/img/technology/ScreamingFrog.png";

const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
// =========================
// Our Process
// =========================
const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Website Audit",
      desc: "We assess your current website what's working, what's outdated, and where users drop off.",
      checklist: [
        "We assess your current website what's working, what's outdated, and where users drop off."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Strategy & Wireframing",
      desc: "We plan the new structure, navigation, content layout, and user journey for better flow.",
      checklist: [
        "We plan the new structure, navigation, content layout, and user journey for better flow."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "UI/UX Design",
      desc: "We redesign visuals, typography, and page layouts for a clean and engaging user experience.",
      checklist: [
        "We redesign visuals, typography, and page layouts for a clean and engaging user experience."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Migration",
      desc: "We rebuild your site on a modern tech stack (or CMS) and migrate content carefully.",
      checklist: [
        "We rebuild your site on a modern tech stack (or CMS) and migrate content carefully."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Mobile Optimization",
      desc: "We test across browsers, screen sizes, and devices to ensure everything works flawlessly.",
      checklist: [
        "We test across browsers, screen sizes, and devices to ensure everything works flawlessly."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "SEO & Launch",
      desc: "We optimize meta tags, site speed, and structure to preserve (or boost) your Google rankings.",
      checklist: [
        "We optimize meta tags, site speed, and structure to preserve (or boost) your Google rankings."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  
  const techItems = [
    { img: WordPress, name: "WordPress" },
    { img: Webflow, name: "Webflow" },
    { img: Shopify, name: "Shopify" },
    { img: HTML5, name: "HTML5" },
    { img: CSS3, name: "CSS3" },
    { img: JavaScriptImg, name: "JavaScript" },
    { img: ReactImg, name: "React" },
    { img: NextJS, name: "Next.js" },
    { img: VueJs, name: "Vue" },
    { img: FigmaImg, name: "Figma" },
    { img: AdobeXDImg, name: "Adobe XD" },
    { img: Canva, name: "Canva" },
    { img: GSAPImg, name: "GSAP" },
    { img: FramerMotionImg, name: "Framer Motion" },
    { img: GTmetrix, name: "GTmetrix" },
    { img: Lighthouse, name: "Lighthouse" },
    { img: GooglePageSpeed, name: "Google PageSpeed" },
    { img: Yoast, name: "Yoast" },
    { img: RankMath, name: "RankMath" },
    { img: ScreamingFrog, name: "Screaming Frog" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Corporate & Consulting",
      desc: "Professional redesigns for law firms, finance, and B2B companies."
    },
    {
      title: "E-commerce & Retail",
      desc: "Custom storefronts with conversion focused design and better checkout UX."
    },
    {
      title: "Healthcare & Clinics",
      desc: "Clean, credible websites that build trust and guide users to book appointments."
    },
    {
      title: "Education & EdTech",
      desc: "Modern redesigns for schools, LMS platforms, and online course websites."
    },
    {
      title: "Real Estate & Property",
      desc: "Visual redesigns with better property listings, filters, and mobile performance."
    },
    {
      title: "Startups & SaaS",
      desc: "Fast, scalable, and aesthetic redesigns for product-led growth."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "UI/UX Driven Approach",
      desc: "We focus on user behavior and journeys not just 'design looks' to improve engagement and flow."
    },
    {
      title: "SEO-Safe Redesigns",
      desc: "We ensure your site structure and rankings aren't lost during the redesign. In fact, we aim to improve them."
    },
    {
      title: "Custom Design, Not Templates",
      desc: "Every redesign is crafted from scratch, based on your brand goals not a pre-made theme."
    },
    {
      title: "Conversion-Focused Thinking",
      desc: "We structure pages to increase inquiries, sign-ups, and purchases whatever your KPIs are."
    },
    {
      title: "Speed + Mobile Optimization",
      desc: "Your redesigned site will load fast, work on all devices, and rank better in search engines."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "Will I lose my SEO rankings after redesigning?",
      a: "No. We follow SEO safe practices to maintain and improve your rankings."
    },
    {
      q: "How long does a website redesign take?",
      a: "Typically 2–6 weeks depending on the size and features of your current site."
    },
    {
      q: "Can I keep my existing domain and hosting?",
      a: "Yes. We can redesign your site while keeping your current domain and host, or recommend better ones."
    },
    {
      q: "What CMS or platform will you use?",
      a: "We use WordPress, Webflow, Shopify, or custom code depending on your goals and scale."
    },
    {
      q: "Will my site work on phones and tablets?",
      a: "Yes. We deliver fully mobile responsive designs that look and work great on all devices."
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
                Redesign Your Website for Better Performance, Better Conversions                                          
                </h2>
                <p className="hero-paragraph">
                Your website is your digital storefront if it looks outdated or loads slow, you're losing business. At We3vision Private Limited, we redesign websites to make them modern, user friendly, mobile responsive, and SEO optimized.<br/>Whether you need a design refresh or a complete transformation, our team will give your site a clean look, faster speed, better content flow, and a structure that actually converts visitors into leads or sales.</p>
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
          <h2 className="h1">Let's Give Your Website the Redesign It Deserves.</h2>
                                       
          <p className="mb-10">Tell us about your current site, goals, and audience we'll redesign it to look better, load faster, and convert stronger.</p>
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
