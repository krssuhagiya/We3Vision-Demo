import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPolyhedron from "../../components/poluhedron";
import "./services.css";

// Technology images
import AfterEffects from "../../assest/img/technology/Python.png";
import Illustrator from "../../assest/img/technology/Tensorflow.png";
import Blender from "../../assest/img/technology/OpenAI.png";
import Maya from "../../assest/img/technology/Scikit_learn.png";
import Cinema4D from "../../assest/img/technology/PyTorch.png";
import GoogleCloudAI from "../../assest/img/technology/GoogleCloudAI.png";
import AWSAI from "../../assest/img/technology/AWSAI.png";
import azureai from "../../assest/img/technology/azureai.png";
import Pandas from "../../assest/img/technology/Pandas.png";
import NumPy from "../../assest/img/technology/NumPy.png";
import Flask from "../../assest/img/technology/Flask.png";

const ServicesAI = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const processSteps = [
        {
          num: "01.",
          color: "#e65cff",
          title: "Consultation & Requirements",
          desc: "We understand your business problem, goals, data, and what kind of AI model will work best.",
          checklist: [
            "Understand business problem",
            "Define AI model requirements",
            "Assess data availability",
          ],
          gradient: "linear-gradient(135deg,#e65cff,#ff5c8a)",
        },
        {
          num: "02.",
          color: "#ff5c8a",
          title: "Data Collection & Preparation",
          desc: "We collect, clean, and structure your data — the fuel for any successful AI system.",
          checklist: [
            "Collect relevant data",
            "Clean and structure data",
            "Prepare training datasets",
          ],
          gradient: "linear-gradient(135deg,#ff5c8a,#5c9cff)",
        },
        {
          num: "03.",
          color: "#5c9cff",
          title: "Model Selection & Development",
          desc: "Our team chooses the right AI/ML model and starts training using your data.",
          checklist: [
            "Choose optimal AI model",
            "Train with your data",
            "Optimize performance",
          ],
          gradient: "linear-gradient(135deg,#5c9cff,#5cffb0)",
        },
        {
          num: "04.",
          color: "#5cffb0",
          title: "Testing & Accuracy Improvement",
          desc: "We test the model, improve accuracy, and make sure it gives the right output consistently.",
          checklist: [
            "Test model accuracy",
            "Improve performance",
            "Validate outputs",
          ],
          gradient: "linear-gradient(135deg,#5cffb0,#ffd15c)",
        },
        {
          num: "05.",
          color: "#ffd15c",
          title: "Integration & Deployment",
          desc: "Once tested, we integrate the AI model into your app, website, CRM, or software.",
          checklist: [
            "Integrate with your systems",
            "Deploy to production",
            "Ensure smooth operation",
          ],
          gradient: "linear-gradient(135deg,#ffd15c,#5cffe6)",
        },
        {
          num: "06.",
          color: "#5cffe6",
          title: "Monitoring & Updates",
          desc: "We track performance and keep improving the model with new data and feedback.",
          checklist: [
            "Monitor performance",
            "Update models",
            "Provide ongoing support",
          ],
          gradient: "linear-gradient(135deg,#5cffe6,#e65cff)",
        },
      ];
      

    const techItems = [
        { img: AfterEffects, name: "Adobe After Effects" },
        { img: Illustrator, name: "Adobe Illustrator" },
        { img: Blender, name: "Blender" },
        { img: Maya, name: "Autodesk Maya" },
        { img: Cinema4D, name: "Cinema 4D" },
        { img: GoogleCloudAI, name: "Google Cloud AI" },
        { img: AWSAI, name: "AWS AI" },
        { img: azureai, name: "Azure AI" },
        { img: Pandas, name: "Pandas" },
        { img: NumPy, name: "NumPy" },
        { img: Flask, name: "Flask" },
    ];

    const industries = [
        { title: "Healthcare", desc: "AI-powered medical image analysis, symptom checkers, and patient prediction models." },
        { title: "E-commerce & Retail", desc: "Recommendation engines, customer behavior prediction, and AI chatbots for sales." },
        { title: "Finance & Insurance", desc: "Fraud detection, credit risk analysis, and automation of data-heavy tasks." },
        { title: "Real Estate", desc: "Price estimation tools, image recognition for property listings, and lead qualification bots." },
        { title: "Education", desc: "AI tutors, smart content creation, and personalized learning paths." },
        { title: "Logistics & Transport", desc: "Route optimization, demand forecasting, and real-time tracking with predictive AI." },
    ];

    const whyChoose = [
        {
            title: "AI Experts + Business Thinkers",
            desc: "We combine data science with domain knowledge to build AI that actually solves problems.",
        },
        {
            title: "Custom AI Solutions No Templates",
            desc: "Every project is built from scratch to fit your needs, goals, and tech stack.",
        },
        {
            title: "Ethical & Secure AI Development",
            desc: "We follow best practices in data privacy, model transparency, and ethical AI design.",
        },
        {
            title: "Scalable & Future-Ready Code",
            desc: "Our AI systems are designed to grow with your business flexible and easy to update.",
        },
        {
            title: "Ongoing Support & Model Tuning",
            desc: "AI needs updates we monitor, retrain, and keep your model sharp over time.",
        },
    ];

    const faqs = [
        {
            q: "What type of AI solutions do you build?",
            a: "We build chatbots, recommendation systems, AI search, computer vision, predictive models, and custom ML tools.",
        },
        {
            q: "Do I need to have my own data?",
            a: "If you have data, great! If not, we help gather or use open-source/public data to train your model.",
        },
        {
            q: "How much time does an AI project take?",
            a: "It depends. Simple bots can be done in 2–3 weeks. Complex models take 1–3 months.",
        },
        {
            q: "Can your AI integrate with our current systems?",
            a: "Yes! We build APIs or plugins that connect with your website, CRM, mobile app, or ERP.",
        },
        {
            q: "Will I need a developer to maintain it later?",
            a: "Not always. We can automate monitoring and even offer ongoing support packages.",
        },
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
                                    Build Smarter Applications with <span className="mil-thin">Custom AI Development</span>
                                </h2>
                                <p className="hero-paragraph">
                                    We help businesses unlock the power of Artificial Intelligence by creating custom AI tools and integrations. From chatbots and recommendation systems to image recognition and predictive analytics, we turn your ideas into smart, scalable solutions.<br />Whether you're a startup or an enterprise, our AI development services are tailored to solve real problems and improve your business efficiency. We use machine learning, natural language processing, and deep learning to build intelligent systems that grow with you.</p>
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
      </section >

    {/* Process */ }
    < section id = "process" className = "mil-dark-bg pb-10 pt-10" >
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
      </section >

    {/* Tech Stack */ }
    < section className = "tech-section mil-p-120-90" >
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
      </section >

    {/* Industries */ }
    < section className = "mil-dark-gradient mil-p-120-90 px-5 py-5" >
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
      </section >

    {/* Why Choose Us */ }
    < section className = "py-5" >
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
      </section >

    {/* Contact Quote */ }
    < section className = "mil-dark-gradient p-20 justify-content-center" >
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
      </section >

    {/* FAQ */ }
    < section id = "faq" className = "pt-20 pb-20" >
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
      </section >
    </div >
  );
};

export default ServicesAI;
