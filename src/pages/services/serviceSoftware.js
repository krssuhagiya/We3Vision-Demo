import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images

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
      title: "Consultation & Requirement Gathering",
      desc: "We start with a detailed discussion to understand your business needs, technical goals, and user expectations.",
      checklist: [
        "Define business requirements",
        "Understand technical goals",
        "Gather user expectations"
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Solution Architecture & Planning",
      desc: "We define the system structure, features, and tech stack to build a scalable foundation.",
      checklist: [
        "Define system architecture",
        "Choose optimal tech stack",
        "Plan scalable foundation"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "UI/UX & Prototyping",
      desc: "We design wireframes and interactive prototypes to visualize the software and refine functionality.",
      checklist: [
        "Create wireframes and mockups",
        "Design interactive prototypes",
        "Refine user experience"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Coding",
      desc: "Our developers build the backend and frontend, integrating APIs and ensuring high performance.",
      checklist: [
        "Backend and frontend development",
        "API integration",
        "Performance optimization"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Quality Assurance & Testing",
      desc: "We conduct functional, security, and performance testing to ensure a flawless product.",
      checklist: [
        "Functional testing",
        "Security testing",
        "Performance validation"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Deployment & Support",
      desc: "Once approved, we launch your software and continue to provide updates, improvements, and support.",
      checklist: [
        "Software deployment",
        "Ongoing support",
        "Updates and improvements"
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: require("../../assest/img/technology/NET.png"), name: ".NET" },
    { img: require("../../assest/img/technology/React.png"), name: "React.js" },
    { img: require("../../assest/img/technology/NodeJS.png"), name: "Node.js" },
    { img: require("../../assest/img/technology/MySQL.png"), name: "MySQL" },
    { img: require("../../assest/img/technology/AWSAI.png"), name: "AWS" },
    { img: require("../../assest/img/technology/azure.png"), name: "Azure" },
    { img: require("../../assest/img/technology/GoogleCloudAI.png"), name: "Google Cloud" },
    { img: require("../../assest/img/technology/Git.png"), name: "Git" },
    { img: require("../../assest/img/technology/Docker.png"), name: "Docker" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Healthcare",
      desc: "Custom patient management systems, health portals, and telemedicine software."
    },
    {
      title: "Finance",
      desc: "Secure software for transactions, budgeting, lending, and accounting automation."
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Inventory, fleet tracking, and order management systems for efficient operations."
    },
    {
      title: "Manufacturing",
      desc: "ERP and production management tools to streamline manufacturing processes."
    },
    {
      title: "Education",
      desc: "Learning management systems (LMS), online classrooms, and assessment platforms."
    },
    {
      title: "Retail & E-commerce",
      desc: "POS systems, order tracking tools, and customer loyalty platforms."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "Experienced Software Engineers",
      desc: "Our team has deep expertise across languages, frameworks, and platforms. We build future-proof, high-performance systems tailored to your domain."
    },
    {
      title: "End-to-End Development Services",
      desc: "From idea to deployment—we handle planning, design, development, testing, and support under one roof."
    },
    {
      title: "Business-Centric Approach",
      desc: "We prioritize your business goals, user experience, and ROI, not just technical specs."
    },
    {
      title: "Secure & Scalable Architecture",
      desc: "All our software is designed to scale and meets top standards for security and compliance."
    },
    {
      title: "Dedicated Support & Maintenance",
      desc: "Our commitment doesn't stop at launch. We offer reliable support, upgrades, and performance improvements as your software evolves."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "What kind of software do you develop?",
      a: "We build everything from SaaS products and enterprise tools to automation solutions and custom platforms."
    },
    {
      q: "Do you help maintain and update the software?",
      a: "Yes, we provide ongoing maintenance, bug fixes, updates, and feature enhancements."
    },
    {
      q: "Can you integrate the software with my current systems?",
      a: "Absolutely. We specialize in API integration and legacy system compatibility."
    },
    {
      q: "How secure is the software you develop?",
      a: "We follow industry-standard practices, including encryption, secure coding, and regular audits."
    },
    {
      q: "What is the typical development timeline?",
      a: "It depends on the scope. Basic systems take 3–6 weeks; complex solutions can take 2–3 months or more."
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
                Custom Software That Powers Your Business <span className="mil-thin">That Captures Attention</span>
                </h2>
                <p className="hero-paragraph">
                We build robust, scalable, and efficient software solutions tailored to your unique business needs. Whether you're streamlining operations, building a product, or automating workflows, we develop software that's reliable and ready to grow with you.<br/>From enterprise-level systems to lightweight web apps, our team delivers secure and intuitive solutions designed to save time, reduce costs, and drive business efficiency.</p>
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
          <h2 className="h1">Have a software project in mind? Let's discuss.</h2>
                            
          <p className="mb-10">Get in touch with our team to explore ideas, discuss timelines, and get a transparent quote.</p>
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
