import React, { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./career.css"; // Your original careers.css or style.css
import { FaChevronDown } from "react-icons/fa6";
import api from "../services/api"; 
import { Link } from "react-router-dom";

const Careers = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const res = await api.get('/job?active=true&limit=100');
        setRoles(res.data.data);
      } catch (e) {
        console.error('Failed to load jobs', e);
        // Fallback to mock data if API fails
        const mockRoles = [
          {
            _id: '1',
            title: 'Frontend Developer',
            experience: '2+ years',
            location: 'Surat',
            isRemote: true,
            shortDescription: 'We are looking for a skilled Frontend Developer to join our team and help build amazing user experiences.',
            applyLink: 'https://example.com/apply'
          },
          {
            _id: '2',
            title: 'UI/UX Designer',
            experience: '1+ years',
            location: 'Surat',
            isRemote: false,
            shortDescription: 'Creative UI/UX Designer needed to design beautiful and functional interfaces for web and mobile applications.',
            applyEmail: 'hr@we3visioninfotech.com'
          },
          {
            _id: '3',
            title: 'Full Stack Developer',
            experience: '3+ years',
            location: 'Surat',
            isRemote: true,
            shortDescription: 'Experienced Full Stack Developer to work on cutting-edge projects using modern technologies.',
            applyLink: 'https://example.com/apply'
          }
        ];
        setRoles(mockRoles);
      }
    };
    loadJobs();
  }, []);

    const faqs = [
      {
        question: "Can I work remotely?",
        answer: "Yes, most of our roles offer flexible remote or hybrid options.",
      },
      {
        question: "Do you hire interns or freshers?",
        answer:
          "Absolutely! We love mentoring talent. Watch for intern roles or send us your portfolio.",
      },
      {
        question: "What’s the work timing?",
        answer: "Flexible—focus is on delivery, not just clocking hours.",
      },
      {
        question: "Will I get to work on international projects?",
        answer:
          "Yes. Our projects are global, across the US, UK, UAE, and beyond.",
      },
    ];
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  // Life at We3vision data
  const lifeFeatures = [
    {
      icon: "🤗",
      title: "Friendly Environment",
      desc: "We keep things positive, open, and supportive. No corporate pressure or office politics just teamwork, learning, and mutual respect.",
    },
    {
      icon: "🎨",
      title: "Creative Freedom",
      desc: "We trust our team. Whether you’re a designer, developer, or digital marketer, your ideas matter.",
    },
    {
      icon: "🌍",
      title: "Meaningful Projects",
      desc: "We work with clients from around the world from startups to big brands building projects that involve Metaverse, AR/VR, UI/UX, animation, and more.",
    },
    {
      icon: "📈",
      title: "Learning & Growth",
      desc: "We invest in our people. Training, mentorship, online courses, and opportunities to take on leadership roles.",
    },
    {
      icon: "🧘‍♂️",
      title: "Work-Life Balance",
      desc: "Flexible timing, remote options, and mental wellness matter to us. We don’t believe in burnout.",
    },
    {
      icon: "🎉",
      title: "Celebrations & Culture",
      desc: "From casual Fridays and virtual games to project success parties and festival celebrations, we love to have fun as a team.",
    },
  ];

  // Why Work With Us data
  const whyWorkWithUs = [
    {
      title: "Innovative Projects",
      desc: "Work on cutting-edge technologies — from Metaverse and 3D Animation to AI and immersive marketing.",
    },
    {
      title: "Creative Freedom",
      desc: "Share your ideas, try new tools, and challenge the status quo. We value originality and out-of-the-box thinking.",
    },
    {
      title: "Growth Opportunities",
      desc: "Get mentorship, upskilling sessions, and opportunities to grow into leadership roles.",
    },
    {
      title: "Friendly Work Culture",
      desc: "We’re flexible, collaborative, and always ready to support each other—no office politics, no micromanagement.",
    },
  ];

  // Open Project Roles data
  const jobRoles = [
    {
      title: "Web Development",
      exp: "1+ years",
      loc: "Surat",
      desc: "Responsive, modern websites that are fast, SEO-optimized, and built for results.",
    },
    {
      title: "Mobile App Development",
      exp: "1+ years",
      loc: "Surat",
      desc: "Feature-rich Android & iOS apps designed to deliver great performance and seamless user experiences.",
    },
    {
      title: "UI/UX Design",
      exp: "1+ years",
      loc: "Surat",
      desc: "Intuitive, visually stunning interfaces.From wireframes to final prototypes with functionality.",
    },
    {
      title: "AR/VR Development",
      exp: "1+ years",
      loc: "Surat",
      desc: "Immersive augmented and virtual reality experiences for virtual showrooms, simulations, and training.",
    },
    {
      title: "Metaverse Solutions",
      exp: "1+ years",
      loc: "Surat",
      desc: "Step into Web3 with metaverse platforms and virtual spaces in fully customized 3D worlds.",
    },
    {
      title: "2D-3D Animation CGI",
      exp: "1+ years",
      loc: "Surat",
      desc: "High-quality animations, walkthroughs, and CGI visuals for various industries.",
    },
    {
      title: "CRM Development",
      exp: "1+ years",
      loc: "Surat",
      desc: "Custom CRMs that streamline your sales, lead tracking, inventory, and support.",
    },
    {
      title: "Graphic Design & Branding",
      exp: "1+ years",
      loc: "Surat",
      desc: "From logos and brochures to complete visual identities for strong branding.",
    },
  ];

  return (
    <div className="mil-wrapper">
      {/* Banner */}
      <section className=" mil-dark-bg justify-content-center text-center">
            <Container>
              <div className="mil-banner-content mil-up ten">
                <h2 className="mil-muted mil-mb-30">Join a Team <span className='mil-thin'>That’s Building <br/> the</span> {" "}<span className="mil-thin" >Future</span>
                </h2>
                <div className="mil-button-group justify-content-center">
                <a className="mil-button mil-quick-enquiry mil-arrow-place"
                    onClick={() => {
                      document.getElementById("about").scrollIntoView({
                        behavior: "smooth"
                      });
                    }}>
                    <span>Explore Open Roles</span>
                    <div className="mil-button-arrow">
                      <svg viewBox="0 0 24 24">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                    </div>
                  </a>
                    <a href="/contact" className="mil-button1 mil-quick-enquiry mil-arrow-place justify-content-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <span>Apply Now</span>
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

      {/* Life at We3vision */}
      <section id="life-at-We3vision" className="py-20">
  <Container>
    <h2 className="life-heading">
      <strong>Life at</strong> <span>We3vision Private Limited</span>
    </h2>

    <Row>
      {lifeFeatures.map((item, index) => (
        <Col md={6} key={index} className="life-item">
          <div className="life-icon">{item.icon}</div>
          <div>
            <h5 className="life-title">{item.title}</h5>
            <p className="life-desc" style={{textAlign:"justify"}}>{item.desc}</p>
          </div>
        </Col>
      ))}
    </Row>

    <blockquote className="life-quote">
      “Working at We3vision Private Limited has helped me grow not just as
      a developer but also as a thinker.”
      <br />
      <span className="life-quote-author">– Team Member</span>
    </blockquote>
  </Container>
</section>


      {/* Why Work With Us */}
      <section className="why-choose-us-section">
        <h2 className="why-choose-us-title text-center">
          Why <span className="mil-thin">Work With Us</span>
        </h2>
        <Container className="pt-20">
          <Row className="justify-content-center">
            {whyWorkWithUs.map((item, index) => (
              <Col md={3} key={index}>
                <div className="mil-feature-card mil-up mil-mb-30 mil-center">
                  <h5 className="mil-muted mil-mb-20">{item.title}</h5>
                  <p className="mil-light-soft">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Open Project Roles */}
      <section className="h1 py-5 px-5" id="about">
        <Container>
          <h2 style={{textAlign:"center",color:" #2A2BC7"}} className="mb-5">
            Open <span className="mil-thin">Project Roles</span>
          </h2>
          <Row className="g-4">
            {roles.map((job) => (
              <Col md={6} lg={4} key={job._id}>
                <div className="role-card">
                <h5 className="job-title">
                <Link to={`/job/${job.slug}`}>{job.title}</Link>
</h5>
                  
                  {/* Department and Employment Type */}
                  <div className="job-meta mb-3">
                    {job.department && (
                      <span className="job-tag job-department">{job.department}</span>
                    )}
                    {job.employmentType && (
                      <span className="job-tag job-employment-type">{job.employmentType}</span>
                    )}
                  </div>
                  
                  {/* Experience and Location */}
                  <p><strong>Experience:</strong> {job.experience}</p>
                  <p><strong>Location:</strong> {job.location}{job.isRemote ? ' (Remote)' : ''}</p>
                  
                  {/* Salary Range */}
                  {job.salary && (job.salary.min || job.salary.max) && (
                    <p><strong>Salary:</strong> {job.salaryRange}</p>
                  )}
                  
                  {/* Description */}
                  <p className="job-description mb-3">{job.shortDescription}</p>
                  
                  
                  {/* Apply Button */}
                  {job.applyLink ? (
                    <a className="btn btn-outline-primary" href={job.applyLink} target="_blank" rel="noreferrer">Apply</a>
                  ) : job.applyEmail ? (
                    <a className="btn btn-outline-primary" href={`mailto:${job.applyEmail}?subject=Application%20for%20${encodeURIComponent(job.title)}`}>Apply</a>
                  ) : (
                    <button className="btn btn-outline-primary" disabled>Apply</button>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact / Quote */}
      <section className="career-cta mil-dark-gradient">
  <Container className="text-center">
    <p className="career-cta-text">
      Did you find a position that matches your skills?
      <br />
      Send your resume to{" "}
      <a href="mailto:hr@we3visioninfotech.com" className="career-cta-email">
        hr@we3visioninfotech.com
      </a>{" "}
      or apply below.
    </p>
    <a href="/contact" className="mil-button mil-quick-enquiry mil-arrow-place">
                      <span>Apply Now</span>
                      <div className="mil-button-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                      </div>
                    </a>
  </Container>
</section>


      <section id="faq" className="pt-20 pb-20">
      <Container className="mil-p-120-90">
        <h2 className="mil-up mil-mb-60 text-center">
          Frequently Asked <span className="mil-thin">Questions</span>
        </h2>
        {faqs.map((faq, index) => (
          <div
            className={`mil-accordion-group mil-up ${
              openIndex === index ? "active" : ""
            }`}
            key={index}
          >
            <div
              className="mil-accordion-menu"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
            >
              <p className="mil-accordion-head">{faq.question}</p>
              <div className="mil-symbol mil-h3">
                <div className="mil-plus">+</div>
                <div className="mil-minus">-</div>
              </div>
            </div>
            {openIndex === index && (
              <div className="mil-accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </Container>
    </section>
    </div>
  );
};

export default Careers;
