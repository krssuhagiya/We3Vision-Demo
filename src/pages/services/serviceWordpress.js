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
      title: "Requirements & Planning",
      desc: "We discuss your goals, target audience, and the features you need on your WordPress site.",
      checklist: [
        "Discuss your goals",
        "Define target audience",
        "Plan required features"
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "UI/UX Design",
      desc: "We create a layout and visual design that reflects your brand while keeping user experience simple and intuitive.",
      checklist: [
        "Create layout design",
        "Reflect your brand",
        "Keep UX simple"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "WordPress Development",
      desc: "We code your custom theme or modify an existing one, add plugins, and integrate all the required functionality.",
      checklist: [
        "Code custom theme",
        "Add plugins",
        "Integrate functionality"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Content Setup & Optimization",
      desc: "We help organize your pages, blog posts, products, and SEO content ensuring everything loads fast and ranks well.",
      checklist: [
        "Organize pages & content",
        "Optimize for SEO",
        "Ensure fast loading"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "QA & Responsiveness Testing",
      desc: "We test your site across browsers and devices to ensure perfect layout, speed, and performance.",
      checklist: [
        "Test across browsers",
        "Ensure perfect layout",
        "Validate performance"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch & Training",
      desc: "We go live and guide you on how to manage your WordPress dashboard, content, and updates with ease.",
      checklist: [
        "Go live",
        "Guide on dashboard",
        "Train on updates"
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: require("../../assest/img/technology/WordPress.png"), name: "WordPress" },
    { img: require("../../assest/img/technology/woocommerce-logo.png"), name: "WooCommerce" },
    { img: require("../../assest/img/technology/elementor.png"), name: "Elementor" },
    { img: require("../../assest/img/technology/PHP.png"), name: "PHP" },
    { img: require("../../assest/img/technology/Yoast.png"), name: "Yoast" },
    { img: require("../../assest/img/technology/HTML5.png"), name: "HTML5" },
    { img: require("../../assest/img/technology/CSS3.png"), name: "CSS3" },
    { img: require("../../assest/img/technology/wp.jpg"), name: "WP Rocket" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    { title: "Corporate & Business", desc: "Professional websites to showcase services, teams, and projects with lead generation tools." },
    { title: "E-commerce & Retail", desc: "WooCommerce stores with payment gateways, inventory systems, and product pages." },
    { title: "Health & Clinics", desc: "Medical websites with booking, patient forms, and service highlights." },
    { title: "Education & eLearning", desc: "Course listing, blog sections, and LMS integrations with easy navigation." },
    { title: "Real Estate", desc: "Property listings, filters, and inquiry forms for brokers and agencies." },
    { title: "Blogs & Personal Brands", desc: "Clean, content-focused sites with fast load speeds and engaging layouts." }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    { title: "Experienced WordPress Developers", desc: "We've built 100+ WordPress sites from single-page portfolios to enterprise-level platforms." },
    { title: "Tailor-Made Design for Your Brand", desc: "We design custom themes or modify premium ones to match your brand, not just copy-paste templates." },
    { title: "Optimized for SEO and Speed", desc: "Every site is optimized with clean code, image compression, and proper metadata for better Google rankings." },
    { title: "Easy to Manage and Update", desc: "No need for a developer every time — we ensure your admin panel is simple and intuitive." },
    { title: "Flexible & Scalable Architecture", desc: "Start small and grow big — we build with future updates, plugins, and traffic in mind." }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    { q: "How long does it take to build a WordPress website?", a: "Simple sites take 7–10 days. Bigger websites or WooCommerce stores may take 3–6 weeks." },
    { q: "Will I be able to edit my website myself after it's done?", a: "Yes! We provide training or documentation so you can easily manage your site without coding." },
    { q: "Can you redesign my existing WordPress site?", a: "Absolutely. We handle redesigns, speed upgrades, and full content restructuring." },
    { q: "Is WordPress secure?", a: "Yes, if maintained well. We add SSL, anti-spam, backups, and firewall plugins for extra protection." },
    { q: "Do you provide hosting and domain setup too?", a: "Yes. We help you choose, register, and set up everything or we can work with your existing hosting." }
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
                Build Powerful & Easy to Manage WordPress Websites <span className="mil-thin">That Captures Attention</span>
                </h2>
                <p className="hero-paragraph">We help businesses create fast, beautiful, and SEO ready websites using WordPress the world's most trusted CMS. Whether you need a personal blog, business site, portfolio, or full fledged E-commerce store, our WordPress development services are tailored to match your goals, style, and user needs.<br/>From custom themes and plugins to seamless integrations, we build responsive WordPress websites that are easy to manage and perform smoothly across all devices.</p>
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
          <h2 className="h1">Need a WordPress Website That Works for You?</h2>
                                
          <p className="mb-10">Share your idea or goal and we'll turn it into a website that looks great, runs fast, and helps your business grow.</p>
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
