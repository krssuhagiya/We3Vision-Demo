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
      title: "Strategy & Planning",
      desc: "We understand your business goals and suggest the best XR blend (AR, VR, MR) based on your needs.",
      checklist: [
        "We understand your business goals and suggest the best XR blend (AR, VR, MR) based on your needs."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Creative Concept & User Flow",
      desc: "We design how users will experience the virtual space and interact within it.",
      checklist: [
        "We design how users will experience the virtual space and interact within it."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "3D Modeling & Content Creation",
      desc: "Our artists and designers build XR-ready environments, animations, and objects.",
      checklist: [
        "Our artists and designers build XR-ready environments, animations, and objects."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "XR App Development",
      desc: "We develop custom XR apps that run on mobile, desktop, headset, or web platforms.",
      checklist: [
        "We develop custom XR apps that run on mobile, desktop, headset, or web platforms."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Testing on Devices",
      desc: "We test the experience on real devices (Oculus, HoloLens, WebXR-supported browsers, etc.) for smooth performance.",
      checklist: [
        "We test the experience on real devices (Oculus, HoloLens, WebXR-supported browsers, etc.) for smooth performance."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Launch & Support",
      desc: "We deploy your XR solution and provide ongoing updates, analytics tracking, and tech support.",
      checklist: [
        "We deploy your XR solution and provide ongoing updates, analytics tracking, and tech support."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: require("../../assest/img/technology/Unity.png"), name: "Unity" },
    { img: require("../../assest/img/technology/UnrealEngine.png"), name: "Unreal Engine" },
    { img: require("../../assest/img/technology/webxrlogo.webp"), name: "WebXR" },
    { img: require("../../assest/img/technology/oculus.png"), name: "Oculus SDK" },
    { img: require("../../assest/img/technology/vuforia.png"), name: "Vuforia" },
    { img: require("../../assest/img/technology/ARKit.webp"), name: "ARKit" },
    { img: require("../../assest/img/technology/ARcore.png"), name: "ARCore" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    { title: "Education & Learning", desc: "Blended learning environments using XR for schools, colleges, and corporate training." },
    { title: "Healthcare", desc: "XR for patient education, surgical planning, and virtual anatomy simulations." },
    { title: "Architecture & Real Estate", desc: "Virtual site visits, collaborative building design reviews, and walkthroughs." },
    { title: "Retail & E-commerce", desc: "Interactive product visualization and virtual fitting rooms." },
    { title: "Manufacturing & Engineering", desc: "Equipment simulations, digital twin environments, and XR maintenance guides." },
    { title: "Events & Marketing", desc: "Immersive product launches, XR booths, and brand storytelling in virtual spaces." }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    { title: "Experts in AR, VR, and MR Development", desc: "We specialize in all components of XR, ensuring you get the right mix of technologies for your project." },
    { title: "Cross-Platform, Scalable Experiences", desc: "From mobile devices to high-end headsets, we build XR that works everywhere—and grows with your business." },
    { title: "Creative + Technical Execution", desc: "Our team combines design storytelling with technical skills to build stunning, functional XR environments." },
    { title: "Business Focused Approach", desc: "We focus on outcomes: engagement, efficiency, and brand impact—not just flashy tech." },
    { title: "Agile Delivery with Post Launch Support", desc: "You'll get quick turnaround, clear timelines, and continuous updates after launch." }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    { q: "What's the difference between XR, AR, VR, and MR?", a: "XR is the umbrella term. AR adds digital objects to the real world. VR is fully virtual. MR blends both—XR covers them all." },
    { q: "What devices can run XR experiences?", a: "We develop for Oculus, HoloLens, Android/iOS phones, and web based XR platforms." },
    { q: "Can XR be used for team collaboration?", a: "Yes, XR enables virtual meetings, product reviews, and remote training with real time interaction." },
    { q: "Is XR expensive?", a: "We offer flexible pricing from lightweight experiences to full scale enterprise solutions based on your goals and budget." },
    { q: "How long does it take to build an XR solution?", a: "On average, it takes 3 to 8 weeks. It depends on how complex and interactive the experience is." }
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
                One Reality, Many Possibilities Power Up with <span className="mil-thin">Extended Reality</span>
                </h2>
                <p className="hero-paragraph">We build immersive XR (Extended Reality) solutions that combine AR, VR, and MR technologies into seamless, interactive experiences. Whether it's for product visualization, virtual collaboration, or employee training, our XR development services help your brand stay ahead of the curve.<br/>From headset based simulations to browser based XR tools, we turn ideas into powerful digital experiences that connect people, places, and information like never before.</p>
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
          <h2 className="h1">Ready to Explore the Extended Reality Space?</h2>
                                  
          <p className="mb-10">Tell us your idea, and we'll help you choose the right XR path AR, VR, MR, or a mix.</p>
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
