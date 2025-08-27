import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import GoogleAds from "../../assest/img/technology/Google-Ads.png";
import MetaAds from "../../assest/img/technology/Meta-Ads.png";
import LinkedInMarketing from "../../assest/img/technology/LinkedIn-Marketing.png";
import ContentMarketing from "../../assest/img/technology/Content-Marketing.png";
import EmailMarketing from "../../assest/img/technology/Email-Marketing.png";
import InfluencerMarketing from "../../assest/img/technology/Influencer_marketing.png";


const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Discovery & Audit",
      desc: "We dive deep into your brand, competitors, audience, and current marketing efforts to find gaps and opportunities.",
      checklist: [
        "We dive deep into your brand, competitors, audience, and current marketing efforts to find gaps and opportunities."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Channel & Audience Mapping",
      desc: "We identify where your target audience lives online and what channels are best suited to reach them—social, search, email, or all of the above.",
      checklist: [
        "We identify where your target audience lives online and what channels are best suited to reach them—social, search, email, or all of the above."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Strategy Planning",
      desc: "We create a custom marketing plan with clear goals, timelines, and channel-specific tactics—from content calendars to ad funnels.",
      checklist: [
        "We create a custom marketing plan with clear goals, timelines, and channel-specific tactics—from content calendars to ad funnels."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Creative & Content Direction",
      desc: "We define your messaging, tone of voice, and campaign ideas that will resonate and convert.",
      checklist: [
        "We define your messaging, tone of voice, and campaign ideas that will resonate and convert."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Campaign Setup & Execution",
      desc: "From ad creatives to landing pages and email flows—we build everything needed to launch campaigns that perform.",
      checklist: [
        "From ad creatives to landing pages and email flows—we build everything needed to launch campaigns that perform."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Analytics, Reporting & Optimization",
      desc: "We track KPIs across channels, monitor campaign performance, and constantly refine strategies to improve ROI.",
      checklist: [
        "We track KPIs across channels, monitor campaign performance, and constantly refine strategies to improve ROI."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Channels We Specialize In
  // =========================
  const techItems = [
    { img: GoogleAds, name: "Google Search" },
    { img: MetaAds, name: "Meta Ads" },
    { img: LinkedInMarketing, name: "LinkedIn Marketing" },
    { img: ContentMarketing, name: "Content Marketing" },
    { img: EmailMarketing, name: "Email Marketing" },
    { img: InfluencerMarketing, name: "Influencer" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    {
      title: "Healthcare",
      desc: "Patient acquisition, location targeting, and content marketing that builds trust and credibility."
    },
    {
      title: "Tech & SaaS",
      desc: "We craft B2B lead generation funnels, demo booking flows, and content strategies for high-ticket SaaS products."
    },
    {
      title: "E-Commerce",
      desc: "ROI-focused product ads, abandoned cart flows, and influencer collaborations to drive sales."
    },
    {
      title: "Real Estate & Construction",
      desc: "Hyper-local SEO, paid campaigns, and landing pages that convert property viewers into buyers."
    },
    {
      title: "Education & EdTech",
      desc: "Student lead nurturing via email, webinars, social proof, and learning-centered content strategy."
    },
    {
      title: "Hospitality & Travel",
      desc: "Visual-first marketing, booking flows, Google reviews strategy, and seasonal campaigns."
    }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    {
      title: "Full-Funnel Thinking",
      desc: "We go beyond vanity metrics and build strategies that cover every stage—awareness to retention."
    },
    {
      title: "Custom Strategy, Not Copy-Paste",
      desc: "Every plan is tailored to your business model, industry, audience, and growth goals."
    },
    {
      title: "Creative Meets Analytical",
      desc: "Our blend of creative direction and performance marketing ensures ideas that look good and convert."
    },
    {
      title: "Data Driven Decision Making",
      desc: "We don't guess. Every campaign is optimized with real-time insights and tracked KPIs."
    },
    {
      title: "Cross-Channel Expertise",
      desc: "From social to search, email to influencers—we know how to connect the dots for maximum ROI."
    }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    {
      q: "What's included in a digital marketing strategy?",
      a: "Everything from audience research and channel planning to campaign goals, creative direction, and analytics setup."
    },
    {
      q: "Do you also run and manage the campaigns?",
      a: "Yes! We don't just plan—we execute, manage, and optimize every campaign if you want end-to-end support."
    },
    {
      q: "Can you help with personal branding or influencer strategy?",
      a: "Absolutely. We create influencer outreach campaigns, personal branding roadmaps, and niche authority building plans."
    },
    {
      q: "How long does it take to see results?",
      a: "Some channels (like paid ads) show results within weeks. Others (like SEO or content marketing) are long-term but sustainable."
    },
    {
      q: "What if I already have an in-house marketing team?",
      a: "No problem. We can collaborate with your team to fill gaps, provide strategy, or consult on performance."
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
                Smart Strategies That Turn Clicks into Customers                  
                </h2>
                <p className="hero-paragraph">
                Marketing without a plan is just noise. At We3vision, we craft powerful digital marketing strategies that align with your business goals, audience behavior, and industry trends. Whether you're launching a new product, scaling your brand, or dominating a niche we give you the blueprint and execution to get results.<br/>From social media and paid ads to content and email marketing, our approach is data-backed, conversion focused, and tailored for impact.</p>
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
          <h2 className="h1">Let's Build Your Growth Game Plan</h2>
                                              
          <p className="mb-10">Whether you're starting fresh or scaling up—we'll design a digital marketing roadmap built for your brand and your budget.</p>
          <div className="mil-button-group justify-content-center">
          <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span>Book a Free Strategy Call</span>
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
