import React, { useState, useEffect } from 'react';
import './index.css';
import HeroPolyhedron from "../components/HeroPolyhedron";
// import { Container, Row, Col, Button } from 'react-bootstrap';
import icon3 from '../assest/img/icons/construction.png';
import icon7 from '../assest/img/icons/corporate.png';
import icon2 from '../assest/img/icons/education.png';
import icon1 from '../assest/img/icons/healthcare.png';
import icon5 from '../assest/img/icons/gaming.png';
import icon6 from '../assest/img/icons/retail.png';
import icon4 from '../assest/img/icons/e-commerce.png';
import rutvi from '../assest/img/works/rutvvi.png';
import unic from '../assest/img/photo/unic.webp';
import blog1 from '../assest/img/blog/NFT.png';
import blog2 from '../assest/img/blog/image-1755752858710-567195959.png';
import AI from "../assest/img/blog/AI.png";
import web from "../assest/img/blog/web & app Development.png";
import Metaverse from "../assest/img/blog/Metaverse.png";
import branding from "../assest/img/blog/Branding.png";
import { Meta } from 'react-router-dom';

const Index = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeService, setActiveService] = useState(0);

  // Auto-advance reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reviews data
  const reviews = [
    {
      title: "Healthcare",
      subtitle: "WE3VISION PRIVATE LIMITED",
      content: "We3vision Private Limited contribution to the healthcare industry is significant. We have developed innovative solutions that enhance patient care, improve efficiency, and drive innovation in the healthcare sector. Our expertise in AR/VR development, AI-ML app development, and custom web and CRM development has enabled us to create solutions that are not only effective but also user-friendly and scalable."
    },
    {
      title: "Education",
      subtitle: "WE3VISION PRIVATE LIMITED",
      content: "We3vision Private Limited contribution to the education and e-learning industry is significant. We have developed innovative solutions that enhance learning, improve efficiency, and drive innovation in the education sector. Our expertise in AR/VR development, AI-ML app development, and custom web and CRM development has enabled us to create solutions that are not only effective but also user-friendly and scalable."
    },
    {
      title: "Construction",
      subtitle: "WE3VISION PRIVATE LIMITED",
      content: "We3vision Private Limited contribution to the construction and real estate industry is significant. We have developed innovative solutions that enhance construction, improve efficiency, and drive innovation in the construction sector. Our expertise in AR/VR development, AI-ML app development, and custom web and CRM development has enabled us to create solutions that are not only effective but also user-friendly and scalable."
    },
    {
      title: "E-Commerce",
      subtitle: "WE3VISION PRIVATE LIMITED",
      content: "We3vision Private Limited contribution to the retail and e-commerce industry is significant. We have developed innovative solutions that enhance retail, improve efficiency, and drive innovation in the retail sector. Our expertise in AR/VR development, AI-ML app development, and custom web and CRM development has enabled us to create solutions that are not only effective but also user-friendly and scalable."
    },
    {
      title: "Gaming",
      subtitle: "WE3VISION PRIVATE LIMITED",
      content: "We3vision Private Limited contribution to the gaming and entertainment industry is significant. We have developed innovative solutions that enhance gaming, improve efficiency, and drive innovation in the gaming sector. Our expertise in AR/VR development, AI-ML app development, and custom web and CRM development has enabled us to create solutions that are not only effective but also user-friendly and scalable."
    },
    {
      title: "Marketing ",
      subtitle: "WE3VISION PRIVATE LIMITED",
      content: "We3vision Private Limited contribution to the marketing and branding agencies industry is significant. We have developed innovative solutions that enhance marketing, improve efficiency, and drive innovation in the marketing sector. Our expertise in AR/VR development, AI-ML app development, and custom web and CRM development has enabled us to create solutions that are not only effective but also user-friendly and scalable."
    },
    {
      title: "Corporate",
      subtitle: "WE3VISION PRIVATE LIMITED",
      content: "We3vision Private Limited contribution to the corporate and enterprise industry is significant. We have developed innovative solutions that enhance corporate, improve efficiency, and drive innovation in the corporate sector. Our expertise in AR/VR development, AI-ML app development, and custom web and CRM development has enabled us to create solutions that are not only effective but also user-friendly and scalable."
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Responsive, modern websites that are fast, SEO-optimized, and built for results — from business portfolios to E-commerce to custom admin portals.",
      link: "/Webdev"
    },
    {
      title: "Mobile App Development",
      description: "Feature rich Android & iOS apps designed to deliver great performance and seamless user experiences — from MVPs to full-scale platforms.",
      link: "/Mobile"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, visually stunning interfaces. From wireframes to final prototypes — we focus on usability, user flow and aesthetic impact.",
      link: "/graphics"
    },
    {
      title: "AR/VR Development",
      description: "Immersive augmented and virtual reality experiences — ideal for virtual showrooms, simulations, training, and next-gen storytelling.",
      link: "/ar"
    },
    {
      title: "Metaverse Solutions",
      description: "Step into Web3 with metaverse platforms and virtual spaces where users can shop, interact, and explore in fully customized 3D worlds.",
      link: "/metaverse-games"
    },
    {
      title: "2D-3D Animation CGI",
      description: "High-quality animations, walkthroughs, and CGI visuals for real estate, marketing, explainer videos, and digital product showcases.",
      link: "/animation"
    },
    {
      title: "CRM Development",
      description: "Custom CRMs that streamline your sales, lead tracking, inventory, and support.",
      link: "/crm"
    },
    {
      title: "Graphic Design & Branding",
      description: "From logos and brochures to complete visual identities — we help you build a brand that speaks loud and looks unforgettable.",
      link: "/graphics"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: icon1, active: currentReview === 0 },
    { name: "Education", icon: icon2, active: currentReview === 1 },
    { name: "Construction", icon: icon3, active: currentReview === 2 },
    { name: "E-Commerce", icon: icon4, active: currentReview === 3 },
    { name: "Gaming", icon: icon5, active: currentReview === 4 },
    { name: "Marketing", icon: icon6, active: currentReview === 5 },
    { name: "Corporate", icon: icon7, active: currentReview === 6 }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleIndustryClick = (index) => {
    setCurrentReview(index);
  };

  return (
    <div className="mil-wrapper" id="top">
      {/* Content */}
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          {/* Banner */}
          <section
            className="mil-banner mil-dark-gradient"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <HeroPolyhedron />
            <div className="container" style={{ position: "relative", zIndex: 1 }}>
              <div className="mil-banner-content mil-up one">
                <h1 className="mil-muted mil-mb-60 text-responsive">
                  Leading Best <span className="mil-thin">Virtual Reality </span><br />
                  <span className="mil-thin">Development</span><br />
                  Services in India <span className="mil-thin">Today</span>
                </h1>
                <div className="row">
                  <div className="col-md-7 col-lg-5 col-sm-12">
                    <p className="mil-light-soft mil-mb-60 text-responsive-p">
                      We3vision Private Limited offers exceptional Virtual reality (VR) development services, delivering innovative and immersive solutions to satisfy various corporate requirements in different sectors.
                    </p>
                  </div>
                </div>
                <div className="mil-button-group">
                  <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                    <span>What We Do</span>
                    <div className="mil-button-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                  <a href="/contact" className="mil-button1 mil-quick-enquiry mil-arrow-place justify-content-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <span style={{color:"white"}}>VIEW WORKS</span>
                    <div className="mil-button-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Scroll Down Indicator */}
            <div className="scroll-down-indicator">
              <svg viewBox="0 0 200 200" width="120" height="120" className='svg1'>
                <defs>
                  <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fontSize="14" fill="rgba(255,255,255,0.6)" letterSpacing="3">
                  <textPath href="#circlePath">
                    - SCROLL DOWN - SCROLL DOWN - SCROLL DOWN -
                  </textPath>
                </text>
              </svg>
              <div className="circle-center">
                <div className='circle'>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" fill="none" />
                  </svg></div>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mil-light-gradient">
            <div className="container py-5">
              <div className="row justify-content-between align-items-center">

                {/* Left Text Section */}
                <div className="col-lg-6 col-xl-5 col-md-12 col-sm-12 mb-4 mb-lg-0">
                  <div className="second">
                    <h2 className="mil-up mb-12 text-responsive-h2">
                      Building <br />your <span className="mil-thin">Vision</span>
                    </h2>
                    <p className="mil-up mb-3 text-responsive-p">
                      At We3vision Private Limited, we turn your ideas into powerful digital experiences. Our expert team made up of AR/VR developers, app creators, designers, and 3D artists works together to understand your goals and bring them to life. Whether you need a website, mobile app, virtual tour, or animation, we build solutions that match your vision and help your business grow. We keep things simple, clear, and focused on results so you always know what to expect.
                    </p>
                    <p className="mil-up mb-4 text-responsive-p">
                      We combine creative design with smart technology to create work that stands out. Every project we build is easy to use, visually appealing, and designed to keep users engaged. From clean layouts and smooth navigation to strong messaging and clear calls-to-action, we make sure your digital product leaves a lasting impression. Let's create something meaningful designed for success and built to perform.
                    </p>
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="col-lg-5 col-md-12 col-sm-12 text-center">
                  <div className="mil-about-photo">
                    <div className="mil-up mil-img-frame">
                      <img
                        src={rutvi}
                        alt="About We3vision"
                        className="img-fluid rounded mx-auto d-block"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mil-dark-gradient pb-20">
            <div className="mi-invert-fix">
              <div className="container mil-p-120-0">
                <div className="mil-mb-120">
                  <div className="row" style={{ marginBottom: '20px' }}>
                    <div className="col-lg-10">
                      {/* <span className="mil-suptitle mil-light-soft ">
                        Professionals focused on helping your brand grow and move forward.
                      </span> */}
                    </div>
                  </div>
                  <div className="mil-complex-text justify-content-center mil-up " >
                    <span className="mil-text-image1">
                      <img src={unic} alt="team" />
                    </span>
                    <h2 className="mil-h1 mil-muted mil-center">
                      Unique <span className="mil-thin">Ideas</span>
                    </h2>
                  </div>
                  <div className="mil-complex-text justify-content-center mil-up">
                    <h2 className="mil-h1 mil-muted mil-center">
                      For Your <span className="mil-thin">Business.&nbsp;</span>
                    </h2>
                    <div>
                      <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place three">
                        <span>What We Do</span>
                        <div className="mil-button-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row g-4" style={{ marginTop: '20px' }}>
                  {services.map((service, index) => (
                    <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className={`mil-service-card-new mil-up ${index === activeService ? 'active' : ''}`} onClick={() => setActiveService(index)}>
                        <div className="mil-service-card-header">
                          <h5 className="mil-service-title">{service.title}</h5>
                        </div>
                        <div className="mil-service-card-body">
                          <p className="mil-service-description">{service.description}</p>
                        </div>
                        <div className="mil-service-card-footer">
                          <a href={service.link} className="mil-service-link">
                            <span>Learn More</span>
                            <div className="mil-arrow-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="mil-light-gradient">
            <div className="container mil-up mil-p-120-0">
              <div className="row ">
                <div className="col-lg-5 four" >
                  <div className="mil-mb-90 second">
                    <h2 className="mil-up mil-mb-30 text-responsive-h2">
                      About <br /> <span className="mil-thin">We3vision</span>
                    </h2>
                    <p className="mil-up mil-mb-30 text-responsive-p">
                      We3vision Private Limited is Surat based technology studio building immersive and high performance digital solutions. From responsive websites and custom software to AR/VR experiences and CGI content we help brands innovate, stand out and grow in digital space.
                    </p>
                    <p className="mil-up mil-mb-60 text-responsive-p">
                      Our team combines creativity, strategy and technology to turn ideas into experiences whether it's through cutting edge development, clean UI/UX or immersive media that engages users across platforms.
                    </p>
                    <div className="mil-about-cta mil-mb-30">
                      <a href="/about" className="mil-button mil-quick-enquiry mil-arrow-place">
                        <span>Read More</span>
                        <div className="mil-button-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                        </div>
                      </a>
                    </div>
                    <h4 className="mil-up"><span className="mil-thin">We</span> delivering <br /><span className="mil-thin">exceptional</span> results.</h4>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="row g-4 justify-content-center">
                    <div className="col-6 col-sm-5">
                      <div className="about-card mil-card-1 text-center">
                        <img
                          src={AI}
                          alt="Artificial Intellegence"
                          className="img-fluid rounded"
                          style={{ height: "300px", width: "100%" }}
                        />
                        <div className="overlay">Artificial Intellegence</div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-5">
                      <div className="about-card mil-card-2 text-center">
                        <img
                          src={web}
                          alt="Web devlopment"
                          className="img-fluid rounded"
                          style={{ height: "300px", width: "100%" }}
                        />
                        <div className="overlay">Web devlopment</div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-5">
                      <div className="about-card mil-card-3 text-center">
                        <img
                          src={branding}
                          alt="Digital Solutions"
                          className="img-fluid rounded"
                          style={{ height: "300px", width: "100%" }}
                        />
                        <div className="overlay">Branding</div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-5">
                      <div className="about-card mil-card-4 text-center">
                        <img
                          src={Metaverse}
                          alt="Innovation"
                          className="img-fluid rounded"
                          style={{ height: "300px", width: "100%" }}
                        />
                        <div className="overlay">Metaverse</div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="mil-dark-gradient">
            <div className="container mil-p-120-120">
              {/* <span className="mil-suptitle mil-light-soft " >
                Our industry-focused solutions bring real change across sectors using Metaverse, AR, and 3D technologies.
              </span> */}
              <h2 className="mil-center mil-mb-60" >
                Industries <span className="mil-thin">We Transform:</span><br />
                Our Solutions <span className="mil-thin" >Across Industries!</span>
              </h2>

              {/* Industry Icons */}
              <div className="mil-industries-section-new-3">
                <div className="mil-industries-icons-row">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`mil-industry-icon-new-3 ${industry.active ? 'active' : ''}`}
                      onClick={() => handleIndustryClick(index)}
                    >
                      <div className="mil-icon-circle">
                        <img src={industry.icon} alt={industry.name} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mil-industry-content-area">
                  <h3 className="mil-active-industry">{reviews[currentReview].title}</h3>
                  <p className="mil-industry-subtitle">{reviews[currentReview].subtitle}</p>
                  <p className="mil-industry-description">{reviews[currentReview].content}</p>
                </div>
              </div>

              <div className="row mil-relative justify-content-center">
                <div className="col-lg-8">
                  <div className="mil-slider-nav mil-soft mil-reviews-nav mil-up">
                    <div className="mil-slider-arrow mil-prev mil-revi-prev mil-arrow-place" onClick={prevReview}></div>
                    <div className="mil-slider-arrow mil-revi-next mil-arrow-place" onClick={nextReview}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="mil-publications-section mil-light-gradient">
            <div className="container">
              <div className="row align-items-center mil-mb-60">
                <div className="col-lg-6">
                  <h2 className="mil-up h1">Popular Blogs:</h2>
                </div>
                <div className="col-lg-6">
                  <div className="mil-publications-header-right">
                    <a href="/blog" className="mil-view-all-btn">
                      <span>VIEW ALL</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="mil-publication-card">
                    <div className="mil-publication-image">
                      <img src={blog1} alt="Graphic Designer" />
                    </div>
                    <div className="mil-publication-content">
                      <div className="mil-publication-meta">
                        <span className="mil-publication-category">TECHNOLOGY</span>
                        <span className="mil-publication-date">MAY 24 2023</span>
                      </div>
                      <h4 className="mil-publication-title">
                      Launching Our First NFT Game Project - Behind the Scenes
                      </h4>
                      <p className="mil-publication-excerpt">
                      Launching our very first NFT-based game a dynamic,...
                      </p>
                      <div className="mil-publication-cta">
                        <a href="/blog/launching-our-first-nft-game-project-behind-the-scenes" className="mil-read-more-btn">
                          <span>READ MORE</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mil-publication-card">
                    <div className="mil-publication-image">
                      <img src={blog2} alt="Graphic Design Courses"/>
                    </div>
                    <div className="mil-publication-content">
                      <div className="mil-publication-meta">
                        <span className="mil-publication-category">TECHNOLOGY</span>
                        <span className="mil-publication-date">MAY 24 2023</span>
                      </div>
                      <h4 className="mil-publication-title">
                      Web 1.0 vs Web 2.0 vs Web 3.0
                      </h4>
                      <p className="mil-publication-excerpt">
                      The internet has changed a lot over the years. We now hear terms like Web 1.0, Web 2.0, and Web 3.0.
                      </p>
                      <div className="mil-publication-cta">
                        <a href="/blog/web-10-vs-web-20-vs-web-30" className="mil-read-more-btn">
                          <span>READ MORE</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;