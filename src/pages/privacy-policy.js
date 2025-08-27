import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaChevronDown } from "react-icons/fa6";

import {
    FaDatabase,
    FaCogs,
    FaShieldAlt,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";
import "./privacy-policy.css";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">

            {/* Hero Section */}
            <section className=" mil-light-gradient py-20 pt-40">
                <Container className="twelve">
                    <h2 className="mb-10 " style={{ color: "#2A2BC7" }}>
                        Your Privacy is Our <span className="mil-thin">Priority</span>
                    </h2>
                    <p className="mil-text-xl mil-mb-30" style={{ color: "#2A2BC7",textAlign:"justify" }}>
                        At We3vision Private Limited, we are committed to protecting your privacy and ensuring the
                        security of your personal information. This comprehensive privacy policy outlines how we
                        collect, use, and safeguard your data across all our services and platforms.
                        <br /><br />
                        We believe in transparency and have never sold your information to any third party for
                        advertising or monetary purposes. Our commitment to your privacy has been steadfast for
                        nearly 20 years and continues unchanged.
                    </p>
                    <a className="mil-button mil-quick-enquiry mil-arrow-place"
                        onClick={() => {
                            document.getElementById("policy-sections").scrollIntoView({
                                behavior: "smooth"
                            });
                        }}>
                        <span>Read Our Policy</span>
                        <div className="mil-button-arrow">
                            <svg viewBox="0 0 24 24">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                        </div>
                    </a>
                </Container>
            </section>

            {/* Policy Sections */}
            <section className="tech-section1 mil-dark-bg" id="policy-sections">
                <Container>
                    <h2 className="ar-tech-title1">
                        <span style={{ fontWeight: 700 }}>Privacy</span>{" "}
                        <span style={{ color: "#e65cff", fontWeight: 700 }}>Policy</span> Sections
                    </h2>

                    <Row className="g-4">
                        <Col md={6} lg={3}>
                            <div className="info-card" onClick={() => {
                                document.getElementById("part-one").scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}>
                                <i className="fas fa-database info-card-icon icon-purple"></i>
                                <div className="info-card-title">Part I – Information Collection</div>
                            </div>
                        </Col>

                        <Col md={6} lg={3}>
                            <div className="info-card" onClick={() => {
                                document.getElementById("part-two").scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}>
                                <i className="fas fa-cogs info-card-icon icon-pink"></i>
                                <div className="info-card-title">Part II – Information Processing</div>
                            </div>
                        </Col>

                        <Col md={6} lg={3}>
                            <div className="info-card" onClick={() => {
                                document.getElementById("part-three").scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}>
                                <i className="fas fa-shield-alt info-card-icon icon-blue"></i>
                                <div className="info-card-title">Part III – General Information</div>
                            </div>
                        </Col>

                        <Col md={6} lg={3}>
                            <div className="info-card" onClick={() => {
                                document.getElementById("part-four").scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}>
                                <i className="fas fa-envelope info-card-icon icon-green"></i>
                                <div className="info-card-title">Contact Information</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

<div className="mil-light-bg">
            {/* Part I */}
            <section id="part-one" className=" pt-20 " >
                <Container>
                    <div className="section-header1">
                        <div className="section-icon1">
                            <FaDatabase />
                        </div>
                        <h2 className="section-title1">Part I – Information We3vision Private Limited
                            collects and controls</h2>
                    </div>
                    <div className="section-content1">
                        <p>At We3vision Private Limited, we only collect necessary information
                            essential for providing our services to you. This includes details
                            you voluntarily provide through email, contact forms, or when
                            requesting our services or making purchases. We store your name,
                            contact information such as phone numbers, social profiles, address,
                            and project-related details.</p>

                        <p>When you visit our websites or use our services, we automatically log
                            basic information like your site navigation, location, accessed
                            features, and settings. This helps us enhance our websites, improve
                            services, and better serve you.</p>

                        <p>At times, we receive information indirectly. For instance, if you
                            inquire about our services through referral programs or reselling
                            partners, or authenticate via services like LinkedIn, Google, or
                            Facebook, they may share your contact details with us. We use this
                            information to fulfill your requests. If you interact with our brand
                            on social media (e.g., liking, commenting, retweeting, mentioning,
                            or following us), we may access your profile information and
                            interactions, retaining this data even if you later delete it from
                            social media platforms.</p>

                        <div className="info-highlight1">
                            <h4><FaCogs /> &nbsp; What we do with your information</h4>
                            <p>We use your information to provide the services you've requested
                                and to manage your accounts. This includes communicating with
                                you about the services you use, handling customer support
                                requests, informing you about new services, opportunities for
                                feedbacks, and updates to our policies. We analyse collected
                                information to better understand user needs and enhance our
                                websites and services.</p>
                        </div>

                        <p>We are obligated to have a legal basis for collecting and processing
                            your information. Typically, this is either your consent or the
                            necessity to provide the service you've requested. If neither
                            applies, we must justify our actions under another legal basis, such
                            as our legitimate business interests.</p>

                        <p>You can opt out of certain uses of your information by not providing
                            it initially or by later opting out. You can also disable cookies in
                            your browser, though this may affect certain website
                            functionalities. We disable all third-party cookies across We3vision
                            Private Limited websites.</p>

                    </div>
                </Container>
            </section>

            {/* Part II */}
            <section id="part-two" className=" pt-20" >
                <Container>
                    <div className="section-header1">
                        <div className="section-icon1">
                            <FaCogs />
                        </div>
                        <h2 className="section-title1">Part II – Information that We3vision Private
                            Limited processes on your behalf</h2>
                    </div>
                    <div className="section-content1">
                        <p>If you use We3vision Private Limited services to handle third-party
                            data, such as information about your customers or employees, you are
                            entrusting that data to us for processing.</p>

                        <p>As a service provider, you may share data related to your customers,
                            employees, or vendors as part of project development. You retain
                            ownership of this service data. We protect it, restrict access to
                            it, and process it solely according to your instructions. You have
                            the right to access, share via third-party integrations, and request
                            exportation or deletion of this data.</p>

                        <p>We retain this data for as long as you use We3vision Private Limited
                            services. After you terminate your contract, with your consent, we
                            may retain data backups for a specified period. Your data will be
                            deleted from our development and backup servers upon your request.
                        </p>

                        <p>If you are in the European Economic Area and believe that someone has
                            entrusted your information to us for processing (e.g., your
                            employer, employee, or a company whose services you use), you can
                            request actions regarding your data. To exercise these rights,
                            please contact the entity that entrusted us with your data, and we
                            will collaborate with them to address your request.</p>
                    </div>
                </Container>
            </section>

            {/* Part III */}
            <section id="part-three" className=" pt-20" >
                <Container>
                    <div className="section-header1">
                        <div className="section-icon1">
                            <FaShieldAlt />
                        </div>
                        <h2 className="section-title1">Part III – General</h2>
                    </div>
                    <div className="section-content1">
                        <p>There are some limitations to the privacy we can promise. We will
                            disclose personal information if necessary to comply with a legal
                            obligation, prevent fraud, enforce an agreement, or protect our
                            users' safety. We do not currently honour Do Not Track signals from
                            internet browsers; when a universal standard for processing them
                            emerges, we will follow it.</p>

                        <p>Third-party websites and social media widgets have their own separate
                            privacy policies. Always check the relevant privacy policy before
                            sharing personal information with third parties.</p>

                        <p>You can contact us to ask questions about our privacy practices,
                            request a GDPR-compliant Data Processing Addendum, notify us if you
                            believe we have collected personal data from a minor, or request the
                            removal of your personal information from our blogs or forums. You
                            can also review our Security Policy and Privacy Policy.</p>

                        <p>We will notify you if we make any significant changes to our privacy
                            policy or if we decide to sell our services.</p>
                    </div>
                </Container>
            </section>

            {/* Contact Section */}
            <section id="part-four" className=" pb-20 pt-20" >
                <Container>
                    <div className="section-header1">
                        <div className="section-icon1">
                            <FaEnvelope />
                        </div>
                        <h2 className="section-title1">Contact Us</h2>
                    </div>
                    <div className="contact-cards1">
                        <div className="contact-card1">
                            <div className="contact-icon1">
                                <FaEnvelope />
                            </div>
                            <h4>Email Us</h4>
                            <a href="mailto:info@we3visioninfotech.com" style={{ color: "gray" }}>info@we3visioninfotech.com</a>
                        </div>
                        <div className="contact-card1">
                            <div className="contact-icon1">
                                <FaPhone />
                            </div>
                            <h4>Call Us</h4>
                            <a href="tel:+917383216096" style={{ color: "gray" }}>+91 7383216096</a>
                        </div>
                        <div className="contact-card1" style={{ width: "900px" }}>
                            <div className="contact-icon1">
                                <FaMapMarkerAlt />
                            </div>
                            <h4>Visit Us</h4>
                            <p>936 A, Ishwar Darshan, Bhim Kachchhi Mohallo, Nanpura,
                                Surat-305003, Gujarat, India</p>
                        </div>
                    </div>
                </Container>
            </section>
                    </div>
        </div>
    );
};

export default PrivacyPolicy;
