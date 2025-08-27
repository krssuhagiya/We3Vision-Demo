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
      title: "Requirement Analysis",
      desc: "We begin by understanding your business goals, audience, and functional requirements.",
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
      title: "Planning & Wireframing",
      desc: "We create a structure and layout plan that aligns with your content and user flow.",
      checklist: [
        "Create structure and layout plan",
        "Align with content and user flow"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Design & UI Creation",
      desc: "Our UI/UX designers craft a user-friendly interface that matches your brand identity.",
      checklist: [
        "UI/UX design creation",
        "Brand identity integration",
        "User-friendly interface design"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Integration",
      desc: "Our developers turn designs into functional, responsive websites using the latest tech.",
      checklist: [
        "Frontend and backend development",
        "Responsive design implementation",
        "Latest technology integration"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Launch",
      desc: "We test your website on multiple devices and browsers before going live.",
      checklist: [
        "Cross-browser testing",
        "Mobile responsiveness testing"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Post-Launch Support",
      desc: "We offer ongoing support and updates to keep your website secure and up-to-date.",
      checklist: [
        "Ongoing support and updates",
        "Security maintenance"
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: require("../../assest/img/technology/HTML5.png"), name: "HTML5" },
    { img: require("../../assest/img/technology/CSS3.png"), name: "CSS3" },
    { img: require("../../assest/img/technology/javascript.png"), name: "JavaScript" },
    { img: require("../../assest/img/technology/React.png"), name: "React.js" },
    { img: require("../../assest/img/technology/VueJs.png"), name: "Vue.js" },
    { img: require("../../assest/img/technology/Angular.png"), name: "Angular" },
    { img: require("../../assest/img/technology/NodeJS.png"), name: "Node.js" },
    { img: require("../../assest/img/technology/Laravel.png"), name: "Laravel" },
    { img: require("../../assest/img/technology/Django.png"), name: "Django" },
    { img: require("../../assest/img/technology/MySQL.png"), name: "MySQL" },
    { img: require("../../assest/img/technology/PostgreSQL.png"), name: "PostgreSQL" },
    { img: require("../../assest/img/technology/MongoDB.png"), name: "MongoDB" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    { title: "E-commerce", desc: "Fast and conversion optimized online stores to help grow your sales." },
    { title: "Healthcare", desc: "Secure and user friendly portals for clinics, hospitals, and health startups." },
    { title: "Real Estate", desc: "Listing platforms with advanced filters, maps, and booking capabilities." },
    { title: "Education", desc: "Online learning websites, course portals, and student management systems." },
    { title: "Finance", desc: "Web apps for banking, fintech, and secure transaction platforms." },
    { title: "Travel & Hospitality", desc: "Booking systems, tour showcase websites, and itinerary planners." }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    { title: "Experienced Team of Developers", desc: "Our developers are highly skilled and experienced in building websites across diverse industries, ensuring your platform is both technically sound and strategically built." },
    { title: "Tailored Solutions for Every Business", desc: "We don't use generic templates. Every project is custom developed to reflect your brand's identity and specific business goals." },
    { title: "Optimised for All Devices & Search Engines", desc: "Our websites are mobile-first, fully responsive, and built with clean, SEO-optimized code to maximize visibility." },
    { title: "Scalable & Future-Ready Architecture", desc: "Whether you're launching small or scaling up, our development ensures your site can grow with your business." },
    { title: "Transparent Communication & Support", desc: "You'll always know where your project stands. We offer clear timelines, open communication, and dedicated post-launch support." }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    { q: "Do you only work with specific industries?", a: "No, we develop websites for all industries including education, health, real estate, and more." },
    { q: "Will my website work on all devices?", a: "Yes, we create fully responsive websites that look great on desktop, tablet, and mobile." },
    { q: "Do you provide hosting and domain help?", a: "Yes, we can help you purchase and set up domain, hosting, and SSL." },
    { q: "Can I manage the website after launch?", a: "Absolutely! We build websites with easy-to-use CMS options like WordPress." },
    { q: "How long will it take to develop a website?", a: "Basic websites can be ready in 1–2 weeks. More complex ones may take 3–6 weeks." }
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
                Professional, Scalable Websites That Drive Results <span className="mil-thin">That Captures Attention</span>
                </h2>
                <p className="hero-paragraph">
                We create modern, responsive, and SEO friendly websites tailored to your business needs. Whether you're a startup, a growing brand, or an established enterprise, we develop websites that are fast, secure, and easy to manage.<br/>Our web development services are designed to help you attract more visitors, improve user experience, and increase conversions. From landing pages to complex web portals we build everything with clean code and a focus on performance.</p>
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
          <h2 className="h1">Ready to Build Your Next Website?</h2>
                               
          <p className="mb-10">Tell us your idea, and we'll suggest the best approach, timeline, and cost.</p>
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
