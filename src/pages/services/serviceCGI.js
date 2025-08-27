import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import AdobePremiere from "../../assest/img/technology/adobepremire.webp";
import AdobeAfterEffects from "../../assest/img/technology/Adobeeffect.png";
import Autodesk3dsMax from "../../assest/img/technology/auto3d.png";
import Blender from "../../assest/img/technology/Blender.png";
import Cinema4D from "../../assest/img/technology/Cinema4D.png";

const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

// Our Process (Timeline)
const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Discovery & Planning",
      desc: "We begin with a detailed discussion to understand your objectives, audience, and style preferences.",
      checklist: [
        "Clarify project goals and audience",
        "Discuss style and tone",
        "Identify key objectives"
      ],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Scripting & Concept Development",
      desc: "Our creative team crafts a script and storyboard that reflects your message and brand tone.",
      checklist: [
        "Scriptwriting and concept development",
        "Storyboard creation"
      ],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "CGI Creation & Filming",
      desc: "We build photorealistic CGI assets or film live action footage depending on your project needs.",
      checklist: [
        "CGI asset creation or live filming",
        "3D modeling and animation",
        "On-location or studio shoots"
      ],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Editing & Post-Production",
      desc: "Our editors and VFX artists enhance visuals with motion graphics, color grading, music, and more.",
      checklist: [
        "Editing and VFX",
        "Color grading and sound design",
        "Motion graphics and music"
      ],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Final Review & Delivery",
      desc: "We present the final cut for your feedback and deliver high-quality video files ready for all platforms.",
      checklist: [
        "Client review and feedback",
        "Final delivery in all required formats"
      ],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
  ];
  
  // Tools & Technologies
  const techItems = [
    { img: AdobePremiere, name: "Adobe Premiere Pro" },
    { img: AdobeAfterEffects, name: "Adobe After Effects" },
    { img: Autodesk3dsMax, name: "Autodesk 3ds Max" },
    { img: Blender, name: "Blender" },
    { img: Cinema4D, name: "Cinema 4D" },
  ];
  
  // Industries We Serve
  const industries = [
    { title: "E-commerce", desc: "Create product demo videos and 3D visualizations to boost online sales and customer trust." },
    { title: "Healthcare", desc: "Use medical CGI to explain complex procedures or showcase equipment clearly and simply." },
    { title: "Real Estate", desc: "Produce walkthroughs and CGI renderings that help buyers visualize properties better." },
    { title: "Automotive", desc: "Showcase vehicles with cinematic CGI videos that highlight design, features, and performance." },
    { title: "Education", desc: "Deliver engaging training, tutorial, or explainer videos using CGI enhanced visuals." },
    { title: "Corporate", desc: "Tell your brand story through interviews, event coverage, corporate explainers, and more." },
  ];
  
  // Why Choose Us
  const whyChoose = [
    { title: "Full Service Expertise", desc: "From creative scripting to CGI design and final video editing we handle every stage in-house for a smooth, stress-free experience." },
    { title: "Blending Creativity with Strategy", desc: "We don't just make things look good we make sure your videos serve a purpose: boosting engagement, explaining clearly, or converting viewers into customers." },
    { title: "Skilled CGI Artists & Video Editors", desc: "Our team includes experts in animation, visual effects, cinematography, and storytelling ensuring your content stands out from the crowd." },
    { title: "Custom Solutions for Every Brand", desc: "No cookie cutter templates. Every project is tailored to match your brand's tone, audience, and business goals." },
    { title: "Optimized for All Platforms", desc: "We deliver content that's ready to shine on websites, mobile apps, YouTube, social media, presentations, and more." },
    { title: "Reliable Timelines & Transparent Communication", desc: "We value your time. Our project managers keep everything on track and keep you in the loop, from day one to delivery." },
    { title: "Cost-Effective", desc: "You get premium quality visuals and storytelling without the bloated agency pricing." },
  ];
  
  // FAQs
  const faqs = [
    { q: "What types of videos do you produce?", a: "We produce everything from product videos and commercials to explainer videos and corporate films." },
    { q: "What's the difference between CGI and regular video?", a: "CGI involves creating visuals digitally, while regular videos use real-world footage. We often combine both for best results." },
    { q: "How long does it take to complete a project?", a: "Time varies based on complexity. A simple video can take a week, while detailed CGI may take 2-4 weeks." },
    { q: "Do you offer voiceover and scriptwriting?", a: "Yes! We offer full creative services including voiceovers, scripting, and editing." },
    { q: "Can I use these videos on social media and websites?", a: "Absolutely! We provide formats optimized for YouTube, Instagram, LinkedIn, and your website." },
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
                High Quality CGI & Video Production <span className="mil-thin">That Captures Attention</span>
                </h2>
                <p className="hero-paragraph">
                We help you tell your brand story through eye catching CGI visuals and professional video content. From product animations to corporate videos, we create content that leaves a lasting impression and connects with your audience.<br/>Whether you want a 3D product demo, a cinematic brand film, or social media ready videos, we've got the tools and talent to bring your vision to life. Our team works closely with you to understand your goals and deliver content that's not only beautiful but also strategic and results driven.</p>
                                
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
              Our Animation <span style={{ color: "#e65cff" }}>Process</span>
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
          <h2 className="h1">Let's Create Something <span className="mil-thin">Captivating</span></h2>
          <p className="mb-10">Tell us what you have in mind we'll guide you through options, pricing, and timelines.</p>
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
