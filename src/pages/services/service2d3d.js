import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import AfterEffects from "../../assest/img/technology/Adobeeffect.png";
import Illustrator from "../../assest/img/technology/Adobe-Illustrator.png";
import Blender from "../../assest/img/technology/Blender.png";
import Maya from "../../assest/img/technology/maya.png";
import Cinema4D from "../../assest/img/technology/Cinema4D.png";

const Services2D3D = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: "01.",
      color: "#e65cff",
      title: "Brief & Concept",
      desc: "We understand your goals, audience, and style preferences.",
      checklist: ["Clarify project goals", "Identify target audience", "Discuss style and tone"],
      gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
    },
    {
      num: "02.",
      color: "#ff5c8a",
      title: "Script & Storyboard",
      desc: "We develop a clear script and create a visual storyboard.",
      checklist: ["Write a clear script", "Create a visual storyboard"],
      gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
    },
    {
      num: "03.",
      color: "#5c9cff",
      title: "Design & Animation",
      desc: "Our team designs characters, environments, and brings everything to life with smooth animations.",
      checklist: ["Design characters and backgrounds", "Animate scenes and transitions"],
      gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
    },
    {
      num: "04.",
      color: "#5cffb0",
      title: "Voiceover & Sound",
      desc: "We add voiceovers, background music, and sound effects for an immersive experience.",
      checklist: ["Add voiceover", "Background music and sound effects"],
      gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
    },
    {
      num: "05.",
      color: "#ffd15c",
      title: "Review & Delivery",
      desc: "You review the animation, suggest changes, and we deliver the final video in your desired format.",
      checklist: ["Client review and feedback", "Final delivery in MP4/MOV or chosen format"],
      gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
    },
  ];

  const techItems = [
    { img: AfterEffects, name: "Adobe After Effects" },
    { img: Illustrator, name: "Adobe Illustrator" },
    { img: Blender, name: "Blender" },
    { img: Maya, name: "Autodesk Maya" },
    { img: Cinema4D, name: "Cinema 4D" },
  ];

  const industries = [
    { title: "Healthcare", desc: "Explaining treatments, procedures, and medical equipment through animated videos." },
    { title: "Education", desc: "Creating animated E-learning modules for better understanding and engagement." },
    { title: "Real Estate", desc: "3D walkthroughs and property animations for better client presentations." },
    { title: "E-commerce", desc: "Showcasing product features and benefits with animated demos." },
    { title: "Entertainment", desc: "Animated characters and scenes for games, shows, or social media content." },
    { title: "Corporate", desc: "Training videos, onboarding content, and brand explainers for internal use." },
  ];

  const whyChoose = [
    {
      title: "Skilled animators with years of experience",
      desc: "Our team brings deep industry experience across 2D and 3D animation, delivering polished and professional results.",
    },
    {
      title: "High-quality visuals with smooth transitions",
      desc: "Every project is crafted with attention to detail resulting in fluid, engaging, and visually rich animations.",
    },
    {
      title: "Custom design tailored to your brand",
      desc: "We align every visual element with your brand's tone, style, and audience for a cohesive and memorable experience.",
    },
    {
      title: "Affordable pricing for startups and enterprises",
      desc: "Flexible pricing models ensure quality animation fits your budget whether you're scaling or just starting out.",
    },
    {
      title: "Fast turnaround with revision support",
      desc: "We deliver on time and offer revision rounds so your final video is just right.",
    },
  ];

  const faqs = [
    { q: "What's the difference between 2D and 3D animation?", a: "2D animation is flat and best for explainer videos, while 3D animation gives depth and is ideal for realistic product or architectural visuals." },
    { q: "How long does it take to complete an animation project?", a: "It depends on the complexity. A simple 2D explainer can take 1-2 weeks, while a detailed 3D animation may take 3-4 weeks." },
    { q: "Can I provide my own script or voiceover?", a: "Yes, we can work with your script or voiceover, or help you create both." },
    { q: "Will I be able to suggest changes?", a: "Of course! We offer revision rounds so you're happy with the final output." },
    { q: "What formats will I receive the final animation in?", a: "You'll get high-quality MP4 or MOV files ready to use on websites, social media, or presentations." },
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
                  Bring Your Ideas to Life with <span className="mil-thin">Eye Catching 2D & 3D Animation</span>
                </h2>
                <p className="hero-paragraph">
                  We create simple, engaging animations that help people understand your message clearly. Whether you need an explainer video, product showcase, or a fun cartoon we turn your ideas into visuals that speak to your audience.<br /><br />
                  Our team uses modern tools to design smooth, colorful animations for websites, presentations, social media, training, and more. No technical talk—just great looking videos that get results.
                </p>
                <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                                <span> Free Consultancy</span>
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
          <h2 className="h1">Ready to bring your story to life?</h2>
          <p className="mb-10">Fill out the form or contact us directly to get a free consultation.</p>
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
