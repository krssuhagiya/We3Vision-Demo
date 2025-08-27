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
      title: "SEO Audit & Competitor Analysis",
      desc: "We review your website's current performance and research what your top competitors are doing.",
      checklist: [
        "We review your website's current performance and research what your top competitors are doing."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Keyword Research & Strategy",
      desc: "We find the best keywords your customers are searching for and build a plan to rank for them.",
      checklist: [
        "We find the best keywords your customers are searching for and build a plan to rank for them."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "On-Page SEO Optimization",
      desc: "We optimize meta titles, descriptions, headers, URLs, and site structure to align with search engine best practices.",
      checklist: [
        "We optimize meta titles, descriptions, headers, URLs, and site structure to align with search engine best practices."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Technical SEO Fixes",
      desc: "We fix issues like page speed, mobile friendliness, broken links, indexing, and more to boost performance.",
      checklist: [
        "We fix issues like page speed, mobile friendliness, broken links, indexing, and more to boost performance."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Content Optimization & Blog Strategy",
      desc: "We update your website content and create SEO friendly blogs that target relevant keywords and search intent.",
      checklist: [
        "We update your website content and create SEO friendly blogs that target relevant keywords and search intent."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Off-Page SEO & Backlink Building",
      desc: "We build high-quality backlinks, local citations, and online presence to improve domain authority and rankings.",
      checklist: [
        "We build high-quality backlinks, local citations, and online presence to improve domain authority and rankings."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    },
    {
      num: "07.",
      color: "#e65cff",
      title: "Monitoring, Reporting & Iteration",
      desc: "We track results, share monthly reports, and refine the strategy based on performance data.",
      checklist: [
        "We track results, share monthly reports, and refine the strategy based on performance data."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: require("../../assest/img/technology/GooglePlayConsole.png"), name: "Google Search" },
    { img: require("../../assest/img/technology/ahrefs.png"), name: "Ahrefs" },
    { img: require("../../assest/img/technology/semrush.png"), name: "SEMrush" },
    { img: require("../../assest/img/technology/screming frog.png"), name: "Screaming Frog" },
    { img: require("../../assest/img/technology/Yoast.png"), name: "Yoast SEO" },
    { img: require("../../assest/img/technology/moz.png"), name: "Moz" },
    { img: require("../../assest/img/technology/GTmetrix.png"), name: "GTmetrix" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Healthcare",
      desc: "Rank for treatments, doctor profiles, and location based searches to get more patient inquiries."
    },
    {
      title: "Tech & SaaS",
      desc: "Drive organic traffic to your product pages and rank for high intent software queries."
    },
    {
      title: "E-Commerce",
      desc: "Boost visibility for product pages, category listings, and branded keywords."
    },
    {
      title: "Education & Training",
      desc: "Appear in front of students searching for online courses or learning programs."
    },
    {
      title: "Real Estate",
      desc: "Capture location specific traffic for property listings, builders, and agents."
    },
    {
      title: "Finance & Legal",
      desc: "Show up for critical search terms like loan help, legal advice, or tax consulting."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "Proven SEO Track Record",
      desc: "We've helped startups and established brands climb the rankings and increase leads organically."
    },
    {
      title: "Custom SEO Strategies",
      desc: "No copy-paste plans here. We build your strategy around your industry, audience, and goals."
    },
    {
      title: "White Hat SEO Only",
      desc: "We follow Google's best practices—no shady tactics, no penalties, just clean, long-term results."
    },
    {
      title: "Content + Technical Balance",
      desc: "We focus on both high quality content and a technically sound website for a complete SEO solution."
    },
    {
      title: "Transparent Reporting",
      desc: "You'll always know what's happening with clear, regular updates and data backed insights."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "How long does SEO take to show results?",
      a: "SEO is a long term strategy. You may start seeing results in 2–3 months, with strong improvements over 6–12 months."
    },
    {
      q: "Do you guarantee top rankings?",
      a: "No ethical SEO company can guarantee #1 rankings. We focus on real growth, quality traffic, and sustainable progress."
    },
    {
      q: "Can you do SEO for multilingual or global websites?",
      a: "Yes. We have experience with international SEO and multilingual site optimization."
    },
    {
      q: "What's included in your monthly SEO package?",
      a: "It includes audits, keyword research, content updates, technical fixes, backlink outreach, and monthly reporting."
    },
    {
      q: "Will you help with local SEO for my business?",
      a: "Absolutely. We can optimize your Google Business Profile and location pages to drive foot traffic and local leads."
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
                Get Found on Google, Grow Organically.                                                       
                </h2>
                <p className="hero-paragraph">
                Struggling to appear on search engines? We can help. At We3vision, our SEO services are designed to put your website in front of the right audience without paid ads. From keyword research to content optimization and technical audits, we make sure your site ranks higher, loads faster, and attracts more traffic that actually converts.<br/>Whether you're a local business, a startup, or a global brand we create custom SEO strategies that drive long-term growth and visibility on Google and beyond.</p>
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
          <h2 className="h1">Want to Rank Higher on Google?</h2>
                             
          <p className="mb-10">Let's audit your site and discuss the best way to bring you more organic traffic, leads, and visibility.</p>
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
