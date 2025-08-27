import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import AdobeXD from "../../assest/img/technology/AdobeXD.png";
import Figma from "../../assest/img/technology/Figma.png";
import Sketch from "../../assest/img/technology/Sketch.png";
import AdobeIllustrator from "../../assest/img/technology/Adobe-Illustrator.png";
import Photoshop from "../../assest/img/technology/Photoshop1.png";
import InVision from "../../assest/img/technology/InVision.png";
import Zeplin from "../../assest/img/technology/Zeplin.png";
import AfterEffects from "../../assest/img/technology/Adobeeffect.png";

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
      title: "Understand Your Brand & Audience",
      desc: "We learn about your goals, audience, and style so the designs match your business.",
      checklist: [
        "Clarify project goals and audience",
        "Discuss style and tone",
        "Identify key objectives"
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Research & Moodboarding",
      desc: "We gather inspiration, check competitors, and create moodboards for visual direction.",
      checklist: [
        "Gather inspiration and references",
        "Check competitors and trends"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Wireframing & UI Concepts",
      desc: "We build wireframes and design mockups that focus on user journey and layout.",
      checklist: [
        "Wireframe creation and user flow",
        "UI mockups and prototypes",
        "User journey mapping"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Visual Design & Branding",
      desc: "We apply brand colors, fonts, and images to create final visuals that are clean and modern.",
      checklist: [
        "Brand colors and typography",
        "Visual design and imagery",
        "Final mockups and assets"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Handoff or Implementation",
      desc: "We export final assets or work with developers to bring your UI to life.",
      checklist: [
        "Export final design assets",
        "Developer handoff and support"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    }
  ];
  
  // =========================
  // Tech Stack & Tools
  // =========================
 const techItems = [
    { img: AdobeXD, name: "Adobe XD" },
    { img: Figma, name: "Figma" },
    { img: Sketch, name: "Sketch" },
    { img: AdobeIllustrator, name: "Adobe Illustrator" },
    { img: Photoshop, name: "Adobe Photoshop" },
    { img: InVision, name: "InVision" },
    { img: Zeplin, name: "Zeplin" },
    { img: AfterEffects, name: "After Effects" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "E-commerce",
      desc: "Boost your product sales with attractive product cards, banners, and shopping-friendly layouts."
    },
    {
      title: "Healthcare",
      desc: "Design clean, accessible portals and apps for patients and providers."
    },
    {
      title: "Education",
      desc: "Make learning platforms easy and engaging with smart UX and bold visuals."
    },
    {
      title: "Real Estate",
      desc: "Create polished brochures, listings, and portals that help users explore properties clearly."
    },
    {
      title: "Finance",
      desc: "Design user dashboards and mobile apps that are secure, intuitive, and easy to navigate."
    },
    {
      title: "Startups",
      desc: "From pitch decks to landing pages, we help startups make a lasting impression."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
 const whyChoose = [
    {
      title: "Creative designers with real world UI/UX experience",
      desc: "Our team blends creativity with usability to craft designs that look good and work well."
    },
    {
      title: "Pixel-perfect visuals across all devices",
      desc: "We ensure your design stays sharp and consistent on mobile, desktop, and tablets."
    },
    {
      title: "Tailored branding that fits your voice",
      desc: "We help shape or refine your brand style for a modern and consistent look."
    },
    {
      title: "Affordable design packages",
      desc: "Whether you're a startup or enterprise, our flexible pricing works with your goals."
    },
    {
      title: "Collaboration first process",
      desc: "We involve you at every stage so you're never in the dark and always in control."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
 const faqs = [
    {
      q: "What types of design services do you offer?",
      a: "We offer logo design, website UI/UX, mobile app design, branding kits, pitch decks, and more."
    },
    {
      q: "Can you redesign an existing app or website?",
      a: "Absolutely. We specialize in revamping outdated designs to modern, user-friendly interfaces."
    },
    {
      q: "What tools do you use for design and prototyping?",
      a: "We use Figma, Adobe XD, Illustrator, Photoshop, and other industry-standard tools."
    },
    {
      q: "How long does a typical UI/UX design take?",
      a: "It depends on project size, but a basic web UI/UX takes 1–2 weeks. Larger systems may take more."
    },
    {
      q: "Will I get design files and assets at the end?",
      a: "Yes, you'll receive all design source files, prototypes, and style guides ready for development."
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
                Designs That Speak to Your Audience <span className="mil-thin">That Captures Attention</span>
                                
                </h2>
                <p className="hero-paragraph">
                We design eye catching graphics and user friendly interfaces that improve how people interact with your brand. Whether it's a logo, a website, or a full UI/UX project, we keep things clear, simple, and effective.<br/>From wireframes to final visuals, we make sure everything looks great and works even better. Our design process focuses on your goals and your users so you get designs that not only look professional but also perform.</p>
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
          <h2 className="h1">Ready to Design Something <span className="mil-thin">Exceptional?</span></h2>
          <p className="mb-10">Tell us what you need our team will provide a quick quote and a solid plan.</p>
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
