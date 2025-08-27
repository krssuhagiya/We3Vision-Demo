import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import Webflow from "../../assest/img/technology/Webflow.png";
import Bubble from "../../assest/img/technology/Bubble.png";
import Glide from "../../assest/img/technology/Spine.png"; // Named Glide but using provided img
import FlutterFlow from "../../assest/img/technology/FlutterFlow.png";
import Softr from "../../assest/img/technology/Softr.png";
import Make from "../../assest/img/technology/Make.png";
import Zapier from "../../assest/img/technology/Zapier.png";
import Airtable from "../../assest/img/technology/Airtable.png";
import Xano from "../../assest/img/technology/Xano.png";
import OutSystems from "../../assest/img/technology/OutSystems.png";
import Adalo from "../../assest/img/technology/Adalo.png";
import Notion from "../../assest/img/technology/Notion.png";
import Coda from "../../assest/img/technology/Coda.png";
import Integromat from "../../assest/img/technology/Integromat.png";
import Integrations from "../../assest/img/technology/Integrations.png";


const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Requirements & Platform Suggestion",
      desc: "We discuss your goals, then suggest the best-fit low-code or no-code platform for your needs.",
      checklist: [
        "Discuss project goals",
        "Suggest optimal platform",
        "Define project scope"
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "App & Workflow Planning",
      desc: "We design the user journey, define workflows, and plan how everything works—visually.",
      checklist: [
        "Design user journey",
        "Define workflows",
        "Plan visual structure"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "UI Design & Prototyping",
      desc: "We design sleek interfaces using drag-and-drop tools that reflect your brand.",
      checklist: [
        "Design sleek interfaces",
        "Use drag-and-drop tools",
        "Reflect brand identity"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Development & Integration",
      desc: "We build the app or workflow, integrate third-party services, and set up automations.",
      checklist: [
        "Build app or workflow",
        "Integrate third-party services",
        "Set up automations"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing & Launch",
      desc: "We test the platform across devices and ensure a smooth launch experience.",
      checklist: [
        "Test across devices",
        "Ensure smooth launch",
        "Validate functionality"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Support & Training",
      desc: "We hand over the system and train your team to manage, update, or scale it easily.",
      checklist: [
        "Hand over system",
        "Train your team",
        "Provide ongoing support"
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Tools & Technologies
  // =========================
  const techItems = [
    { img: Webflow, name: "Webflow" },
    { img: Bubble, name: "Bubble" },
    { img: Glide, name: "Glide" },
    { img: FlutterFlow, name: "FlutterFlow" },
    { img: Softr, name: "Softr" },
    { img: Make, name: "Make" },
    { img: Zapier, name: "Zapier" },
    { img: Airtable, name: "Airtable" },
    { img: Xano, name: "Xano" },
    { img: OutSystems, name: "OutSystems" },
    { img: Adalo, name: "Adalo" },
    { img: Notion, name: "Notion" },
    { img: Coda, name: "Coda" },
    { img: Integromat, name: "Integromat" },
    { img: Integrations, name: "Integrations" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    { title: "Startups & Entrepreneurs", desc: "Launch MVPs, landing pages, or full platforms with limited budget and quick timelines." },
    { title: "E-commerce & Retail", desc: "Create custom storefronts, product databases, and automated order flows without coding." },
    { title: "Healthcare", desc: "Build internal dashboards, patient intake systems, or data tracking apps securely." },
    { title: "Education", desc: "Develop learning platforms, student portals, and content management systems easily." },
    { title: "Event Management & Communities", desc: "Create ticketing systems, member directories, and community platforms using no-code tools." },
    { title: "Corporate & Enterprise Teams", desc: "Automate repetitive tasks, internal tools, and HR dashboards using low-code platforms." }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    { title: "Platform Experts Across Tools", desc: "We work with a wide range of low code and no code platforms, so we pick the one that suits your project best not just what's trendy." },
    { title: "Fast Turnaround Without Sacrificing Quality", desc: "Projects that used to take months can now be done in weeks without compromising design or performance." },
    { title: "Budget-Friendly for Startups & SMBs", desc: "No need to hire a full dev team. Get powerful apps built at a fraction of the usual cost." },
    { title: "Custom Design + Functionality", desc: "We don't use templates blindly. Your solution is tailor made with custom UI/UX and logic." },
    { title: "Future-Ready & Scalable", desc: "Our builds are modular, so you can update, extend, or scale them as your business grows." }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    { q: "What's the difference between low-code and no-code?", a: "Low code uses some coding for customization. No code needs zero programming knowledge. We offer both, based on your project needs." },
    { q: "Is no code reliable for long term business use?", a: "Absolutely. Many successful startups and companies run fully on no code platforms." },
    { q: "Will I be able to update my app after launch?", a: "Yes. We build in tools that are easy to manage—plus, we offer training and ongoing support." },
    { q: "Can you integrate third-party services like payment or CRM?", a: "Definitely. We connect apps with tools like Stripe, HubSpot, Airtable, WhatsApp, and more." },
    { q: "Do I own the app after it's built?", a: "Yes. You fully own the accounts, data, and platform—we just help you build and set it up." }
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
                Build Apps Faster Without Heavy Coding <span className="mil-thin">That Captures Attention</span>
                                      
                </h2>
                <p className="hero-paragraph">
                We3vision Private Limited helps businesses build websites, apps, and workflows using powerful low code and no code platforms. Whether you're a startup launching your MVP or an enterprise automating internal processes, our experts use tools like Bubble, Webflow, and Make to bring your ideas to life quickly, affordably, and without long dev cycles.<br/>No more waiting months for an app or tool. With low code and no code development, you get fast, flexible, and cost-effective solutions that grow with your business.</p>
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
          <h2 className="h1">Want to Build a Product Without Code?</h2>                   
          <p className="mb-10">Whether you have an idea or an internal tool in mind we can help you build it smarter and faster.</p>
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
