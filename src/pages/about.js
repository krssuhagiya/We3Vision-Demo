import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './about.css';
import company from "../assest/img/works/company.jpg";
import logo from "../assest/img/logo/logo_transparent.png";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import HeroPolyhedron from "../components/HeroPolyhedron";


const About = () => {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Responsive, fast, and beautiful websites tailored to your business goals, built with modern frameworks."
    },
    {
      title: "Application Design & Development",
      description:
        "High-performance mobile and web applications for seamless user experiences."
    },
    {
      title: "AR/VR & Metaverse",
      description:
        "Immersive virtual environments and experiences for real estate, events, training, and brand engagement."
    },
    {
      title: "Game Development",
      description:
        "Engaging and interactive games for web, mobile, and emerging platforms, blending creativity and technology."
    },
    {
      title: "UI/UX & Branding",
      description:
        "Beautiful, intuitive interfaces and strong brand identities that leave a lasting impression."
    }
  ];
  return (
    <div className="mil-content">
      <div className="mil-main-transition">
        {/* Hero Section */}
        <section
          className="mil-banner mil-dark-gradient"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <HeroPolyhedron />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <Container>
              <div className="mil-banner-content mil-up">
                <h1 className="mil-muted mil-mb-60">Empowering Digital <span className='mil-thin'>Transformation </span> Through <span className="mil-thin" >Innovation</span></h1>
                <Row>
                  <Col md={7} lg={5}>
                    <p className="mil-light-soft mil-mb-60">
                      We3vision Private Limited is dedicated to transforming how people live digitally. Since 2019, we have been at the forefront of digital innovation, delivering cutting-edge solutions that empower businesses and individuals alike.
                    </p>
                  </Col>
                </Row>
                <div className="mil-button-group">
                  <a className="mil-button mil-quick-enquiry mil-arrow-place"
                    onClick={() => {
                      document.getElementById("about").scrollIntoView({
                        behavior: "smooth"
                      });
                    }}>
                    <span>Discover Our Story</span>
                    <div className="mil-button-arrow">
                    <svg viewBox="0 0 24 24">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                    </div>
                  </a>
                  <a href="/contact" className="mil-button1 mil-quick-enquiry mil-arrow-place justify-content-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <span > Our Services</span>
                    <div className="mil-button-arrow">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </Container>
          </div>
          {/* Scroll Down Indicator */}
          <div className="scroll-down-indicator" onClick={() => {
                      document.getElementById("about").scrollIntoView({
                        behavior: "smooth"
                      });
                    }}>
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

        {/* Company Story */}
        <section id="about" >
          <div className="container py-5">
            <div className="row justify-content-between align-items-center">

              {/* Left Text Section */}
              <div className="col-lg-6 col-xl-5 col-md-12 col-sm-12 mb-4 mb-lg-0">
                <div className="second">
                  <h2 className="mil-up mb-12 text-responsive-h2">
                    Our <span className="mil-thin">Story</span>
                  </h2>
                  <p className="mil-up mb-3 text-responsive-p">
                    We3vision Private Limited is a leading IT service company, founded in 2019 and based in India. We blend technology, design, and strategy to deliver high performance solutions across Web Development, App Development, AR/VR/XR, CGI & 3D Animation, CRM, ERP, and Digital Branding.
                  </p>
                  <p className="mil-up mb-4 text-responsive-p">
                    Our mission: <span className="mil-quote">"With a skilled team, strong values, and a vision for innovation, we have delivered custom digital solutions for companies across India and the globe. Whether it's building a dynamic website or creating immersive virtual experiences, we're here to turn your ideas into impactful realities."</span>
                  </p>
                </div>

                {/* Company Details List */}
                <ul className="mil-list mil-up mb-3">
                  <li><strong>Founder & CEO:</strong> Parth Ramoliya</li>
                  <li><strong>Headquarters:</strong> Surat, Gujarat</li>
                  <li><strong>Development Office:</strong> Surat, Gujarat</li>
                  <li><strong>Company Size:</strong> 11–50 Employees</li>
                </ul>
              </div>

              {/* Right Image Section */}
              <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                <div className="mil-about-photo">
                  <div className="mil-up mil-img-frame">
                    <img
                      src={company}
                      alt="Our Company"
                      className="img-fluid rounded mx-auto d-block"
                      style={{ Width: "400px", height: "600px" }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="mil-dark-bg ">
          <div className="mi-invert-fix">
            <Container className='pt-20 pb-20'>
              <div className="mil-mb-120 one">
                <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
                  <h2 className="mil-h1 mil-muted mil-center mb-5">
                    Services <span className="mil-thin">We Offer</span>
                  </h2>
                </div>
              </div>

              <Row className="g-4" style={{ paddingLeft: "10px" }}>
                {services.map((service, index) => (
                  <Col xs={12} sm={6} lg={4} key={index}>
                    <div className="mil-service-card-sm h-100">
                      <h5 className="mil-muted mil-mb-30">{service.title}</h5>
                      <p className="mil-light-soft">{service.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>

            </Container>
          </div>
        </section>



        {/* Milestones Timeline */}
        <section className="mil-light-gradiant mil-p-120-60 six timeline-desktop">
          <h1 className="mil-up mil-mb-60 mil-center" style={{ fontWeight: 800 }}>Our Journey:<span className='mil-thin'> Milestones</span></h1>
          <div className="container mil-p-120-30 seven">
            <div className="row justify-content-between align-items-center">
              <Col lg={12}>
                <div className="mil-timeline-horizontal-cards">
                  <div className="mil-timeline-horizontal-cards-line"></div>
                  <div className="mil-timeline-horizontal-cards-items">
                    <div className="mil-timeline-horizontal-cards-item">
                      <div className="mil-timeline-horizontal-cards-card top">
                        <div className="mil-timeline-horizontal-cards-date">2019</div>
                        <div className="mil-timeline-horizontal-cards-content">Founded in Surat, Gujrat, with a vision to deliver innovative and customer-focused IT solutions.</div>
                      </div>
                    </div>
                    <div className="mil-timeline-horizontal-cards-item">
                      <div className="mil-timeline-horizontal-cards-card top">
                        <div className="mil-timeline-horizontal-cards-date">2020</div>
                        <div className="mil-timeline-horizontal-cards-content">Expanded core services to include web Design, Web Devlopment, Application Design and Application Devlopment.</div>
                      </div>
                    </div>
                    <div className="mil-timeline-horizontal-cards-item">
                      <div className="mil-timeline-horizontal-cards-card top">
                        <div className="mil-timeline-horizontal-cards-date">2021</div>
                        <div className="mil-timeline-horizontal-cards-content">Introduced Augmented Reality(AR) and Virtual Reality(VR) solutions, stepping into immersive technology.</div>
                      </div>
                    </div>
                    <div className="mil-timeline-horizontal-cards-item">
                      <div className="mil-timeline-horizontal-cards-card top">
                        <div className="mil-timeline-horizontal-cards-date">2022</div>
                        <div className="mil-timeline-horizontal-cards-content">Launched Metaverse solutions and grew the team with specialized proffesionals.</div>
                      </div>
                    </div>
                    <div className="mil-timeline-horizontal-cards-item">
                      <div className="mil-timeline-horizontal-cards-card bottom">
                        <div className="mil-timeline-horizontal-cards-date">2023</div>
                        <div className="mil-timeline-horizontal-cards-content">Scaled AR/VR pilots and boosted UI/UX in web & app design. Deepened Metaverse R&D with new prototypes.</div>
                      </div>
                    </div>
                    <div className="mil-timeline-horizontal-cards-item">
                      <div className="mil-timeline-horizontal-cards-card bottom">
                        <div className="mil-timeline-horizontal-cards-date">2024</div>
                        <div className="mil-timeline-horizontal-cards-content">Delivered diverse VR projects in road Construction, real estate, and coal open-cast mining.</div>
                      </div>
                    </div>
                    <div className="mil-timeline-horizontal-cards-item">
                      <div className="mil-timeline-horizontal-cards-card bottom">
                        <div className="mil-timeline-horizontal-cards-date">2025</div>
                        <div className="mil-timeline-horizontal-cards-content">Focused on Metaverse, Game Devlopment, Graphic Design and Animation to drive global digital transformation.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </section>
        {/* Mobile Timeline */}
<section className="timeline-mobile">
<h1 className="mil-up mil-mb-60 mil-center pt-10" style={{ fontWeight: 800 ,fontSize:"2rem"}}>Our Journey:<span className='mil-thin'> Milestones</span></h1>
  <div className="mobile-timeline-item">
    <span className="year">2019</span>
    <p>Founded in Surat, Gujrat, with a vision to deliver innovative and customer-focused IT solutions.</p>
  </div>
  <div className="mobile-timeline-item">
    <span className="year">2020</span>
    <p>Expanded core services to include web Design, Web Devlopment, Application Design and Application Devlopment.</p>
  </div>
  <div className="mobile-timeline-item">
    <span className="year">2021</span>
    <p>Introduced Augmented Reality(AR) and Virtual Reality(VR) solutions, stepping into immersive technology.</p>
  </div>
  <div className="mobile-timeline-item">
    <span className="year">2022</span>
    <p>Launched Metaverse solutions and grew the team with specialized proffesionals.</p>
  </div>
  <div className="mobile-timeline-item">
    <span className="year">2023</span>
    <p>Scaled AR/VR pilots and boosted UI/UX in web & app design. Deepened Metaverse R&D with new prototypes.</p>
  </div>
  <div className="mobile-timeline-item">
    <span className="year">2024</span>
    <p>Delivered diverse VR projects in road Construction, real estate, and coal open-cast mining.</p>
  </div>
  <div className="mobile-timeline-item">
    <span className="year">2025</span>
    <p>Focused on Metaverse, Game Devlopment, Graphic Design and Animation to drive global digital transformation.</p>
  </div>
</section>

        {/* Why Choose Us */}
        <section className="why-choose-us-section">
          <h2 className="why-choose-us-title">Why <span className="mil-thin">Choose Us</span></h2>
          <Container className='pt-20'>
            <Row className="justify-content-center">
              <Col md={3}>
                <div className="mil-feature-card mil-up mil-mb-30 mil-center">
                  <h5 className="mil-muted mil-mb-20">Client-Centric Approach</h5>
                  <p className="mil-light-soft">We put your needs first, ensuring every solution is tailored to your goals.</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="mil-feature-card mil-up mil-mb-30 mil-center">
                  <h5 className="mil-muted mil-mb-20">Scalable Solutions</h5>
                  <p className="mil-light-soft">Our services grow with your business, adapting to new challenges and opportunities.</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="mil-feature-card mil-up mil-mb-30 mil-center">
                  <h5 className="mil-muted mil-mb-20">Creative Thinking</h5>
                  <p className="mil-light-soft">We bring fresh ideas and innovative strategies to every project.</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="mil-feature-card mil-up mil-mb-30 mil-center">
                  <h5 className="mil-muted mil-mb-20">On-Time Delivery</h5>
                  <p className="mil-light-soft">We respect your deadlines and deliver quality work, every time.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="cta-future-section six">
          <Container className="mil-p-120-30">
            {/* Mindmap Section Heading (Premium UI) */}
            <div className="mindmap-premium-heading-wrap ">
              <h2 className="mindmap-premium-title" style={{ color: '#2A2BC7' }}>Our Expertise, Your Success</h2>
              <div className="mindmap-premium-desc">We think big and have hands in all leading technology platforms to provide you wide array of services.</div>
            </div>

            <section>
              <Container className="mindmap-premium-flex">
                {/* Problems Column */}
                <Col className="mindmap-premium-col slide-in-left">
                  <div className="mindmap-premium-heading">PROBLEMS</div>
                  <div className="mindmap-premium-subheading">WITH TRADITIONAL WAY</div>
                  <ul className="mindmap-premium-list">
                    <li className="mindmap-animate-problem premium-row">
                      <span className="icon-circle icon-x"><RxCross2 /></span>
                      <span className="premium-text">Sorting through <span className="highlight-red">countless</span> applicants</span>
                    </li>
                    <li className="mindmap-animate-problem premium-row">
                      <span className="icon-circle icon-x"><RxCross2 /></span>
                      <span className="premium-text">Spending precious time in <span className="highlight-red">lengthy</span> interviews.</span>
                    </li>
                    <li className="mindmap-animate-problem premium-row">
                      <span className="icon-circle icon-x"><RxCross2 /></span>
                      <span className="premium-text"><span className="highlight-red">Anticipating</span> candidates' arrival on the agreed date.</span>
                    </li>
                    <li className="mindmap-animate-problem premium-row">
                      <span className="icon-circle icon-x"><RxCross2 /></span>
                      <span className="premium-text">Worries about work standards and meeting <span className="highlight-red">deadlines.</span></span>
                    </li>
                    <li className="mindmap-animate-problem premium-row">
                      <span className="icon-circle icon-x"><RxCross2 /></span>
                      <span className="premium-text">Managing <span className="highlight-red">fluctuations</span> in team size.</span>
                    </li>
                  </ul>
                </Col>

                {/* Center Circle */}
                <Col className="mindmap-premium-center">
                  <div className="mindmap-premium-circle mindmap-animate-center pulse-glow circle-rotate">
                    <div className="mindmap-premium-circle-text">We fix this.<br />Fast and smart.</div>
                    <div >
                      <img src={logo} alt="" height="40px" width="45px" />
                    </div>
                  </div>
                </Col>

                {/* Solutions Column */}
                <Col className="mindmap-premium-col slide-in-right">
                  <div className="mindmap-premium-heading mindmap-premium-blue">SOLUTIONS</div>
                  <div className="mindmap-premium-subheading" style={{ color: '#057999' }}>THE Web N Soft Solution WAY</div>
                  <ul className="mindmap-premium-list">
                    <li className="mindmap-animate-solution premium-row">
                      <span className="icon-circle icon-check"><FaCheck /></span>
                      <span className="premium-text">Presenting <span className="highlight-blue">top 5</span> matching profiles in 24–48 hours.</span>
                    </li>
                    <li className="mindmap-animate-solution premium-row">
                      <span className="icon-circle icon-check"><FaCheck /></span>
                      <span className="premium-text">Conducting <span className="highlight-blue">minimal</span> interviews for selected candidates.</span>
                    </li>
                    <li className="mindmap-animate-solution premium-row">
                      <span className="icon-circle icon-check"><FaCheck /></span>
                      <span className="premium-text">Our developers are primed for immediate <span className="highlight-blue">onboarding.</span></span>
                    </li>
                    <li className="mindmap-animate-solution premium-row">
                      <span className="icon-circle icon-check"><FaCheck /></span>
                      <span className="premium-text"><span className="highlight-blue">experts</span> in your industry, ready to deliver.</span>
                    </li>
                    <li className="mindmap-animate-solution premium-row">
                      <span className="icon-circle icon-check"><FaCheck /></span>
                      <span className="premium-text">Your <span className="highlight-blue">dedicated</span> account manager is always reachable via email/WhatsApp.</span>
                    </li>
                  </ul>
                </Col>
              </Container>
            </section>

            <Row>
              <Col lg={12}>
                <span className="cta-suptitle">Ready to start your digital transformation journey?</span>
              </Col>
            </Row>
            <div className="mil-center">
              <h2 className="cta-main-heading">Let's build the future <span className="mil-thin">together</span></h2>
              <div className="cta-btn-wrap">
              <a href="/about" className="mil-button mil-quick-enquiry mil-arrow-place">
                        <span>Contact Us</span>
                        <div className="mil-button-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                        </div>
                      </a>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default About;