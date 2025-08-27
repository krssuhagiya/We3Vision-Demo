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
      title: "Discovery & Use Case Analysis",
      desc: "We start by understanding your goals and where VR can make the biggest impact for your business.",
      checklist: [
        "We start by understanding your goals and where VR can make the biggest impact for your business."
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)"
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Experience Design & Storyboarding",
      desc: "We map out the virtual environment, user flow, and interaction design.",
      checklist: [
        "We map out the virtual environment, user flow, and interaction design."
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)"
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Asset Creation & Environment Modeling",
      desc: "Our 3D artists and designers build high-quality models, textures, and VR-ready visuals.",
      checklist: [
        "Our 3D artists and designers build high-quality models, textures, and VR-ready visuals."
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)"
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "VR Development & Integration",
      desc: "We code and integrate the experience into VR platforms like Oculus, HTC Vive, and others.",
      checklist: [
        "We code and integrate the experience into VR platforms like Oculus, HTC Vive, and others."
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)"
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "QA & Device Testing",
      desc: "We test across VR headsets and devices to ensure smooth performance and comfort.",
      checklist: [
        "We test across VR headsets and devices to ensure smooth performance and comfort."
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)"
    },
    {
      num: "06.",
      color: "#5cffe6",
      title: "Deployment & Support",
      desc: "We launch your VR solution and offer continuous updates, support, and scaling options.",
      checklist: [
        "We launch your VR solution and offer continuous updates, support, and scaling options."
      ],
      gradient: "linear-gradient(135deg,#5cffe6,#e65cff)"
    }
  ];
  
  // =========================
  // Technologies We Use
  // =========================
  const techItems = [
    { img: require("../../assest/img/technology/Unity3D.png"), name: "Unity3D" },
    { img: require("../../assest/img/technology/UnrealEngine.png"), name: "Unreal Engine" },
    { img: require("../../assest/img/technology/oculus.png"), name: "Oculus SDK" },
    { img: require("../../assest/img/technology/webvr.png"), name: "WebVR" },
    { img: require("../../assest/img/technology/Blender.png"), name: "Blender" },
    { img: require("../../assest/img/technology/steamvr.png"), name: "SteamVR" },
    { img: require("../../assest/img/technology/maya.png"), name: "Maya" },
    { img: require("../../assest/img/technology/webxrlogo.webp"), name: "WebXR" }
  ];
  
  // =========================
  // Industries We Serve
  // =========================
  const industries = [
    { title: "Education & Training", desc: "VR classrooms and learning simulations for schools, universities, and job training programs." },
    { title: "Real Estate", desc: "Virtual tours of properties, architecture walkthroughs, and space planning in VR." },
    { title: "Healthcare", desc: "VR for surgery simulations, pain management, patient education, and therapist tools." },
    { title: "Gaming & Entertainment", desc: "Immersive VR games, interactive storytelling, and cinematic experiences." },
    { title: "Corporate Training", desc: "Employee onboarding, skill-based simulations, and soft skill training in controlled virtual environments." },
    { title: "Tourism & Travel", desc: "Virtual destination previews, hotel experiences, and cultural exploration in VR." }
  ];
  
  // =========================
  // Why Choose Us
  // =========================
  const whyChoose = [
    { title: "Experienced VR Developers & Designers", desc: "Our team blends technical expertise and creativity to build impactful, user centric VR experiences." },
    { title: "End-to-End VR Solutions", desc: "From initial concept to headset deployment, we manage the entire process with precision." },
    { title: "Multi-Platform Compatibility", desc: "We build for Oculus, HTC Vive, WebVR, and more ensuring a wider reach." },
    { title: "Scalable for Businesses of All Sizes", desc: "Whether you're building a proof of concept or a full production app, we offer tailored packages that grow with your needs." },
    { title: "Focus on User Comfort & Interaction", desc: "Our experiences are designed with comfort, usability, and immersion in mind reducing motion sickness and improving engagement." }
  ];
  
  // =========================
  // FAQs
  // =========================
  const faqs = [
    { q: "Do I need to provide VR headsets for my users?", a: "Yes, for full VR experiences, users typically need a compatible headset. We'll guide you on the best options." },
    { q: "Can VR help in corporate training?", a: "Absolutely! VR is widely used for soft skill development, equipment training, and scenario-based learning." },
    { q: "What platforms do you build VR for?", a: "We build for Oculus, HTC Vive, WebVR, and other major VR platforms." },
    { q: "Is VR expensive to build?", a: "We offer cost-effective solutions from basic demos to advanced environments, based on your needs and budget." },
    { q: "How long does it take to build a VR app?", a: "Depending on complexity, it can take 3–10 weeks. We'll give a clear timeline after discussing your requirements." }
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
                Step Into a New Reality with <span className="mil-thin">Custom VR Solutions</span>
                </h2>
                <p className="hero-paragraph">
                We build immersive Virtual Reality experiences that fully engage your audience whether it's through simulations, storytelling, product showcases, or training modules. Our VR development services are tailored for industries like education, real estate, gaming, healthcare, and enterprise training.<br/>From standalone VR apps to interactive 3D environments, we help you transport users into an entirely new world that informs, entertains, and inspires.</p>
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
          <h2 className="h1">Let's Build Your VR Experience</h2>
                              
          <p className="mb-10">Tell us your vision we'll help define the approach, timeline, and investment required.</p>
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
