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
      title: "System Audit & Migration Plan",
      desc: "We evaluate your existing tech stack, business workflows, and potential risks.",
      checklist: [
        "We assess your current website—what's working, what's outdated, and where users drop off."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Data Backup & Mapping",
      desc: "We securely back up your systems and map data structure for a seamless transition.",
      checklist: [
        "We plan the new structure, navigation, content layout, and user journey for better flow."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Technology Selection",
      desc: "Based on your goals, we recommend the best platforms, frameworks, or architecture.",
      checklist: [
        "We redesign visuals, typography, and page layouts for a clean and engaging user experience."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Migration Execution",
      desc: "We handle backend/frontend migration with zero or minimal disruption to live systems.",
      checklist: [
        "We rebuild your site on a modern tech stack (or CMS) and migrate content carefully."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & QA",
      desc: "We test the new environment for performance, compatibility, and data integrity.",
      checklist: [
        "We test across browsers, screen sizes, and devices to ensure everything works flawlessly."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Support & Optimization",
      desc: "We monitor post-migration systems and provide support, updates, and optimization.",
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
    { img: require("../../assest/img/technology/AWSAI.png"), name: "AWS" },
    { img: require("../../assest/img/technology/azure.png"), name: "Azure" },
    { img: require("../../assest/img/technology/GoogleCloudAI.png"), name: "Google Cloud" },
    { img: require("../../assest/img/technology/Docker.png"), name: "Docker" },
    { img: require("../../assest/img/technology/NodeJS.png"), name: "Node.js" },
    { img: require("../../assest/img/technology/Python.png"), name: "Python" },
    { img: require("../../assest/img/technology/PHP.png"), name: "PHP" },
    { img: require("../../assest/img/technology/React.png"), name: "React" },
    { img: require("../../assest/img/technology/MySQL.png"), name: "MySQL" },
    { img: require("../../assest/img/technology/Git.png"), name: "Git" },
    { img: require("../../assest/img/technology/CI-CD-Pipelines.png"), name: "CI-CD Tools" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    { title: "Corporate & Consulting", desc: "Professional redesigns for law firms, finance, and B2B companies." },
    { title: "E-commerce & Retail", desc: "Custom storefronts with conversion focused design and better checkout UX." },
    { title: "Healthcare & Clinics", desc: "Clean, credible websites that build trust and guide users to book appointments." },
    { title: "Education & EdTech", desc: "Modern redesigns for schools, LMS platforms, and online course websites." },
    { title: "Real Estate & Property", desc: "Visual redesigns with better property listings, filters, and mobile performance." },
    { title: "Startups & SaaS", desc: "Fast, scalable, and aesthetic redesigns for product led growth." },
    { title: "Finance & Banking", desc: "Move legacy systems to secure cloud infrastructure with compliance ready frameworks." },
    { title: "Healthcare", desc: "Migrate patient data and health systems while maintaining full data protection." },
    { title: "E-commerce & Retail", desc: "Transition your store to scalable platforms for better performance and sales." },
    { title: "Education & eLearning", desc: "Upgrade LMS and content delivery systems for a smoother learning experience." },
    { title: "Enterprise SaaS & IT", desc: "Move complex enterprise apps to microservices, cloud native stacks, or new architectures." },
    { title: "Logistics & Manufacturing", desc: "Modernize ERP and inventory systems without affecting daily operations." }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    { title: "UI/UX-Driven Approach", desc: "We focus on user behavior and journeys not just 'design looks' to improve engagement and flow." },
    { title: "SEO-Safe Redesigns", desc: "We ensure your site structure and rankings aren't lost during the redesign. In fact, we aim to improve them." },
    { title: "Custom Design, Not Templates", desc: "Every redesign is crafted from scratch, based on your brand goals not a pre-made theme." },
    { title: "Conversion-Focused Thinking", desc: "We structure pages to increase inquiries, sign-ups, and purchases whatever your KPIs are." },
    { title: "Speed + Mobile Optimization", desc: "Your redesigned site will load fast, work on all devices, and rank better in search engines." },
    { title: "Migration Experts Across Technologies", desc: "Whether it's cloud, database, or software, we've successfully migrated across dozens of tech stacks." },
    { title: "Zero Data Loss, Minimal Downtime", desc: "We use proven processes and tools to ensure smooth transitions without breaking your workflows." },
    { title: "Customized Solutions, Not Cookie-Cutter", desc: "Every migration is tailored to your business logic, systems, and future scalability." },
    { title: "End-to-End Support", desc: "From planning to post-launch support we stay with you throughout the journey." },
    { title: "Cost-Efficient and Scalable", desc: "We keep migration lean and value-focused designed to support your growth, not slow it." }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    { q: "Will I lose my SEO rankings after redesigning?", a: "No. We follow SEO-safe practices to maintain and improve your rankings." },
    { q: "How long does a website redesign take?", a: "Typically 2–6 weeks depending on the size and features of your current site." },
    { q: "Can I keep my existing domain and hosting?", a: "Yes. We can redesign your site while keeping your current domain and host, or recommend better ones." },
    { q: "What CMS or platform will you use?", a: "We use WordPress, Webflow, Shopify, or custom code—depending on your goals and scale." },
    { q: "Will my site work on phones and tablets?", a: "Yes. We deliver fully mobile-responsive designs that look and work great on all devices." },
    { q: "What can you migrate—only apps or also servers and databases?", a: "We can migrate everything—apps, codebases, servers, databases, and even third-party integrations." },
    { q: "How long does a typical migration take?", a: "It depends on the size and complexity—simple migrations take 1–2 weeks, larger systems may take 4–8 weeks." },
    { q: "Will my existing data and users be safe?", a: "Yes. We follow strict backup and rollback procedures to ensure 100% data safety and continuity." },
    { q: "Do I need to pause my business operations during migration?", a: "Not necessarily. We often migrate systems in phases to avoid any downtime." },
    { q: "Can you help after the migration too?", a: "Absolutely—we offer ongoing support, performance tuning, and security monitoring post-migration." }
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
                Move to Better, Faster, and More Secure Technology Without Losing What Matters
                </h2>
                <p className="hero-paragraph">
                Is your current tech stack holding you back? We3vision Private Limited helps businesses move from outdated systems to modern, high performing technologies without data loss, downtime, or disruption. Whether you're upgrading legacy software, shifting to cloud platforms, or changing programming frameworks, we ensure your migration is smooth, secure, and scalable.<br/>From small codebase transitions to full infrastructure shifts, we've got you covered so your business can grow faster, safer, and smarter.</p>
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
          <h2 className="h1">Ready to Migrate? Let's Make Your Tech Work for the Future</h2>
                     
          <p className="mb-10">Tell us what you're using today, and we'll show you how to move forward faster, smarter, and stress-free.</p>
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
