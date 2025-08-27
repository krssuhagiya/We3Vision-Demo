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
// =========================
// Our Process
// =========================
const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Product Discovery & Strategy",
      desc: "We understand your SaaS idea, user needs, and business goals to define a clear roadmap.",
      checklist: [
        "Understand SaaS idea",
        "Define user needs",
        "Create clear roadmap"
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "UI/UX Design & Wireframing",
      desc: "We design a clean, intuitive user interface that offers a seamless experience.",
      checklist: [
        "Design clean interface",
        "Create intuitive UX",
        "Plan seamless experience"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "MVP Development",
      desc: "We build a functional prototype to test your core idea quickly and gather feedback.",
      checklist: [
        "Build functional prototype",
        "Test core idea quickly",
        "Gather user feedback"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Full-Scale Development",
      desc: "We code and develop the complete SaaS solution with all required features and backend systems.",
      checklist: [
        "Code complete solution",
        "Develop backend systems",
        "Implement all features"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Optimization",
      desc: "We run detailed QA checks for performance, usability, and data security.",
      checklist: [
        "Run detailed QA checks",
        "Test performance",
        "Ensure data security"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch & Support",
      desc: "We deploy the app to the cloud, monitor performance, and offer long-term support.",
      checklist: [
        "Deploy to cloud",
        "Monitor performance",
        "Offer long-term support"
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: require("../../assest/img/technology/React.png"), name: "React" },
    { img: require("../../assest/img/technology/Angular.png"), name: "Angular" },
    { img: require("../../assest/img/technology/VueJs.png"), name: "Vue.js" },
    { img: require("../../assest/img/technology/NodeJS.png"), name: "Node.js" },
    { img: require("../../assest/img/technology/Laravel.png"), name: "Laravel" },
    { img: require("../../assest/img/technology/Django.png"), name: "Django" },
    { img: require("../../assest/img/technology/PostgreSQL.png"), name: "PostgreSQL" },
    { img: require("../../assest/img/technology/MongoDB.png"), name: "MongoDB" },
    { img: require("../../assest/img/technology/MySQL.png"), name: "MySQL" },
    { img: require("../../assest/img/technology/AWSAI.png"), name: "AWS" },
    { img: require("../../assest/img/technology/GoogleCloudAI.png"), name: "Google Cloud" },
    { img: require("../../assest/img/technology/azure.png"), name: "Azure" },
    { img: require("../../assest/img/technology/Docker.png"), name: "Docker" },
    { img: require("../../assest/img/technology/Kubernetes.png"), name: "Kubernetes" },
    { img: require("../../assest/img/technology/Firebase.png"), name: "Firebase" },
    { img: require("../../assest/img/technology/supabase.png"), name: "Supabase" },
    { img: require("../../assest/img/technology/Github.png"), name: "GitHub" },
    { img: require("../../assest/img/technology/Gitlab.png"), name: "GitLab" },
    { img: require("../../assest/img/technology/CI-CD-Pipelines.png"), name: "CI/CD Pipelines" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "EdTech",
      desc: "Build LMS platforms, virtual classrooms, and e-learning tools with secure content delivery."
    },
    {
      title: "Healthcare",
      desc: "SaaS apps for patient records, appointment management, and telehealth services."
    },
    {
      title: "FinTech",
      desc: "Custom dashboards, automated billing, and financial management tools."
    },
    {
      title: "E-commerce & Retail",
      desc: "Inventory, CRM, and order management apps with multi-user access."
    },
    {
      title: "Marketing & Agencies",
      desc: "Campaign tracking platforms, analytics dashboards, and SaaS CRMs."
    },
    {
      title: "Real Estate & Construction",
      desc: "Property management SaaS, booking platforms, and agent coordination tools."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "Built for Scale from Day One",
      desc: "Our SaaS architecture is future-ready, allowing your app to scale smoothly as your user base grows."
    },
    {
      title: "User-Centric Product Design",
      desc: "We focus on designing clean, intuitive interfaces that improve user experience and retention."
    },
    {
      title: "End-to-End Development",
      desc: "From idea to launch, we handle everything UI, backend, APIs, payments, admin panels, and security."
    },
    {
      title: "Flexible Engagement Models",
      desc: "Choose fixed-cost MVPs or agile based development you stay in control of time and budget."
    },
    {
      title: "Data Security & Compliance",
      desc: "We follow best practices for encryption, GDPR, HIPAA, and other compliance standards."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "How long does it take to build a SaaS product?",
      a: "Basic MVPs take 4–8 weeks. Full platforms may take 3–6 months depending on complexity."
    },
    {
      q: "Can I add features later after launch?",
      a: "Absolutely. We build modular systems that can be upgraded easily."
    },
    {
      q: "Will I get admin controls and dashboards?",
      a: "Yes. We include user management, analytics, and full admin dashboards."
    },
    {
      q: "Do you support multi-tenancy?",
      a: "Yes, we develop SaaS with multi-tenant architecture when needed."
    },
    {
      q: "What if I need ongoing support after launch?",
      a: "We offer post launch maintenance plans to fix bugs, update features, and improve performance."
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
                Turn Your Idea Into a Scalable SaaS Product <span className="mil-thin">That Captures Attention</span>
                                                                       
                </h2>
                <p className="hero-paragraph">
                We3vision Private Limited builds custom SaaS applications that are fast, secure, scalable and designed to grow with your business. Whether you're launching a new startup or transforming a legacy product, we help you build cloud based software that users can access anytime, from anywhere.<br/>From subscription based tools to full-fledged SaaS platforms, we offer complete development from planning and UI/UX to coding, testing, and deployment. With us, you get a product that works smoothly, looks great, and solves real user problems.</p>
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
          <h2 className="h1">Have a SaaS Idea? Let's Make It Real.</h2>
                                 
          <p className="mb-10">Tell us about your concept, features, or even just a rough idea we'll help shape it into a successful product.</p>
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
