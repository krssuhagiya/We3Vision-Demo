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
      title: "Requirement Discovery & Brand Understanding",
      desc: "We learn about your products, target audience, business model, and brand personality.",
      checklist: [
        "Understand your products",
        "Define target audience",
        "Analyze business model"
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Shopify Store Planning",
      desc: "We plan your store structure—navigation, collections, product types, and user flow.",
      checklist: [
        "Plan store structure",
        "Design navigation",
        "Define collections"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Design & Theme Customization",
      desc: "We either custom-design your storefront or modify premium Shopify themes to match your branding.",
      checklist: [
        "Custom design storefront",
        "Modify premium themes",
        "Match your branding"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Integration",
      desc: "We build out the backend, add products, integrate payment gateways, shipping, taxes, and apps.",
      checklist: [
        "Build backend",
        "Add products",
        "Integrate payment gateways"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "QA & Mobile Optimization",
      desc: "We test your site on all devices and browsers to ensure speed, usability, and security.",
      checklist: [
        "Test on all devices",
        "Ensure speed & usability",
        "Validate security"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch & Handoff",
      desc: "We launch your store, provide training if needed, and support your post-launch needs.",
      checklist: [
        "Launch your store",
        "Provide training",
        "Support post-launch needs"
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: require("../../assest/img/technology/Shopify.png"), name: "Shopify" },
    { img: require("../../assest/img/technology/HTML5.png"), name: "HTML5" },
    { img: require("../../assest/img/technology/CSS3.png"), name: "CSS3" },
    { img: require("../../assest/img/technology/javascript.png"), name: "JavaScript" },
    { img: require("../../assest/img/technology/Meta-Ads.png"), name: "Meta Pixel" },
    { img: require("../../assest/img/technology/googletag.png"), name: "Google Tag Manager" },
    { img: require("../../assest/img/technology/yotpo.png"), name: "Yotpo" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Fashion & Apparel",
      desc: "Trendy, mobile-first storefronts with size charts, lookbooks, and product variations."
    },
    {
      title: "Health & Wellness",
      desc: "Clean, compliant E-commerce with subscription models and customer reviews."
    },
    {
      title: "Home & Lifestyle",
      desc: "Immersive product pages, lifestyle content, and upsell functionality."
    },
    {
      title: "Beauty & Skincare",
      desc: "Elegant UI with bundles, subscriptions, and ingredient highlights."
    },
    {
      title: "Food & Beverage",
      desc: "Easy reordering, local delivery integration, and allergen info setup."
    },
    {
      title: "Digital Products & Services",
      desc: "Memberships, gated content, and instant product delivery via Shopify plugins."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "Shopify Experts, Not Just Developers",
      desc: "Our team understands both the platform and the psychology of online shopping. We build with performance and profit in mind."
    },
    {
      title: "Custom Design that Reflects Your Brand",
      desc: "We don't just tweak templates we design experiences that match your voice, visuals, and audience."
    },
    {
      title: "Conversion-Focused Approach",
      desc: "Every feature, layout, and app is chosen to improve user flow, engagement, and conversions."
    },
    {
      title: "App Integrations & Automation",
      desc: "From reviews and loyalty points to upsells and shipping tools we set up the best apps for your needs."
    },
    {
      title: "Ongoing Support & Growth Optimization",
      desc: "We offer post-launch support, performance audits, and store upgrades as your business scales."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "Do you build on Shopify or Shopify Plus?",
      a: "Both. We work with clients on standard Shopify as well as enterprise level Shopify Plus."
    },
    {
      q: "Can you migrate my store from WooCommerce or Wix?",
      a: "Yes, we offer full migration services—including product data, customers, orders, and SEO URLs."
    },
    {
      q: "Will I be able to manage the store after launch?",
      a: "Absolutely. Shopify is user friendly, and we'll provide a walkthrough or documentation if needed."
    },
    {
      q: "Do you help with product photography or branding?",
      a: "Yes. We offer add-on services like visual branding, photo editing, and basic product shoot consulting."
    },
    {
      q: "Can you improve an existing Shopify store instead of building from scratch?",
      a: "Of course. We offer audits, speed optimization, UX improvements, and app enhancements for live stores."
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
                Launch a High-Performing Shopify Store That Sells <span className="mil-thin">That Captures Attention</span>                                                     
                </h2>
                <p className="hero-paragraph">
                At We3vision Private Limited, we design and develop custom Shopify stores that are fast, user friendly, and conversion optimized. Whether you're launching a new E-commerce business, migrating from another platform, or scaling your existing Shopify store we help you build a seamless online shopping experience that turns visitors into customers.<br/>From theme customization to advanced Shopify apps, we cover it all so you can focus on growing your brand, not fixing your store.</p>
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
          <h2 className="h1">Let's Build Your Shopify Store the Right Way</h2>
                           
          <p className="mb-10">Tell us your product, your audience, and your vision. We'll help you launch, optimize, and grow your Shopify presence.</p>
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
