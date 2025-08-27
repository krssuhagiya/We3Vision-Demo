import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Python from "../../assest/img/technology/Python.png";
import Laravel from "../../assest/img/technology/Laravel.png";
import NodeJS from "../../assest/img/technology/NodeJS.png";
import MySQL from "../../assest/img/technology/MySQL.png";
import ReactImg from "../../assest/img/technology/React.png";
import PostgreSQL from "../../assest/img/technology/PostgreSQL.png";
import Odoo from "../../assest/img/technology/Odoo1.png";

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
      title: "Business Analysis",
      desc: "We learn about your current workflows, pain points, and ERP requirements.",
      checklist: [
        "Analyze current workflows",
        "Identify pain points",
        "Define ERP requirements",
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "System Planning & Architecture",
      desc: "We design the ideal ERP structure to align with your business model and team needs.",
      checklist: [
        "Design ERP structure",
        "Align with business model",
        "Plan team needs",
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Custom Module Design",
      desc: "We create specific modules (HR, Finance, Sales, etc.) based on your priorities.",
      checklist: [
        "Create HR modules",
        "Design Finance modules",
        "Build Sales modules",
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Integration",
      desc: "We build the platform and integrate it with existing tools (CRM, accounting, etc.).",
      checklist: [
        "Build ERP platform",
        "Integrate existing tools",
        "Connect CRM & accounting",
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Deployment",
      desc: "We perform real-world testing to ensure your ERP system runs smoothly and accurately.",
      checklist: [
        "Real-world testing",
        "Ensure smooth operation",
        "Validate accuracy",
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Training & Support",
      desc: "We onboard your team and offer ongoing support to keep your ERP updated and secure.",
      checklist: [
        "Onboard your team",
        "Provide training",
        "Offer ongoing support",
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)",
    },
  ];
  // Tools & Technologies
  const techItems = [
    { img: Python, name: "Python" },
    { img: Laravel, name: "Laravel" },
    { img: NodeJS, name: "Node.js" },
    { img: MySQL, name: "MySQL" },
    { img: ReactImg, name: "React" },
    { img: PostgreSQL, name: "PostgreSQL" },
    { img: Odoo, name: "Odoo" },
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Manufacturing & Supply Chain",
      desc: "Track production, inventory, and logistics in real-time with smart ERP modules.",
    },
    {
      title: "Retail & Wholesale",
      desc: "Manage stock, orders, and customer data across multiple locations or online stores.",
    },
    {
      title: "Healthcare",
      desc: "Streamline hospital operations appointments, billing, inventory, and patient records.",
    },
    {
      title: "Education",
      desc: "Handle admissions, attendance, exams, and finance through one smart ERP platform.",
    },
    {
      title: "Construction & Real Estate",
      desc: "Control project timelines, workforce, budgets, and vendor interactions from a single dashboard.",
    },
    {
      title: "Finance & Accounting",
      desc: "Simplify invoicing, payroll, compliance, and financial reporting with automation.",
    },
  ];
  
  // =========================
  // Why Choose Us
  // =========================
const whyChoose = [
    {
      title: "Tailored to Your Business, Not Generic",
      desc: "We don't offer one-size-fits-all ERP. Every solution is crafted to match your company's workflows and culture.",
    },
    {
      title: "Modular and Scalable",
      desc: "Start with core features and add more modules as your business grows—without needing a rebuild.",
    },
    {
      title: "Seamless Integrations",
      desc: "Connect with popular tools like Tally, Salesforce, SAP, QuickBooks, Zoho, and more.",
    },
    {
      title: "User-Friendly Dashboards",
      desc: "We prioritize ease of use, so your team can manage operations with minimal training.",
    },
    {
      title: "Strong Post-Launch Support",
      desc: "From updates to troubleshooting we're always here to ensure your ERP runs perfectly.",
    },
  ];
  
  // =========================
  // FAQs
  // =========================
const faqs = [
    {
      q: "How long does ERP development take?",
      a: "Typically 6–12 weeks depending on complexity and number of modules.",
    },
    {
      q: "Can you migrate data from our old system?",
      a: "Yes, we handle secure data migration from Excel, legacy systems, or third-party platforms.",
    },
    {
      q: "Is your ERP cloud-based or on-premise?",
      a: "We offer both options—cloud for flexibility or on-premise for strict data control.",
    },
    {
      q: "What about user training?",
      a: "We provide step-by-step training and manuals to make onboarding smooth for your team.",
    },
    {
      q: "Can you add new modules later?",
      a: "Absolutely. We build with future scaling in mind, so new features can be added easily.",
    },
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
                Streamline Your Business Operations with  <span
                  className="mil-thin">Smart ERP Solutions</span>
                </h2>
                <p className="hero-paragraph">
                At We3vision Private Limited , we build custom ERP (Enterprise Resource Planning)
                software that connects and automates all your key business functions from HR, finance, and inventory to
                sales, CRM, and supply chain. Whether you're a startup or an enterprise, our ERP solutions are tailored
                to your processes, not the other way around.<br/>Say goodbye to scattered data and manual tasks. With
                a centralized ERP system, you gain better control, faster decisions, and improved efficiency across
                departments all in one place.</p>
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
          <h2 className="h1">Need an ERP System Built Around Your Business?</h2>
          <p className="mb-10">Tell us your challenges we'll create a custom ERP
          solution that simplifies operations and boosts productivity.</p>
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
