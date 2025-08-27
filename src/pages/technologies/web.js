import React from "react";
import "./technology.css"
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";
import vr from "../../assest/img/works/webdevlopment.png";
import d from "../../assest/img/works/mobile.png";
import ui from "../../assest/img/works/software.png";
import graphics from "../../assest/img/works/lowcode.png";
import erp from "../../assest/img/works/erp.png";
import shopify from "../../assest/img/works/shopify.png";
import wordpress from "../../assest/img/works/wordpress.jpg";
import AI from "../../assest/img/works/AI devlopment.jpg";

export default function Web() {
    // Animation settings
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div className="mil-content">
            <div id="swupMain" className="mil-main-transition">
                {/* Hero Section */}
                <section className="hero-arkub  mil-dark-gradient container2 p-40">
                    <div className="hero-content text-center px-4 md:px-0">
                        <h3 className="hero-title text-2xl md:text-4xl font-small mb-10">
                            Step Into the Future of{" "}
                            <span className="font-bold">
                            Web Technologies, Frontend & Backend Frameworks, Cloud, DevOps, and More
                            </span>
                        </h3>
                        <p className="hero-desc mt-4 max-w-2xl mx-auto mb-10">
                        Explore how We3vision Private Limited transforms digital experiences with cutting-edge
                        solutions and creative technology.</p>
                        <a className="mil-button mil-quick-enquiry mil-arrow-place"
                            onClick={() => {
                                document.getElementById("technology").scrollIntoView({
                                    behavior: "smooth"
                                });
                            }}>
                            <span>Explore Our Technologies</span>
                            <div className="mil-button-arrow">
                                <svg viewBox="0 0 24 24">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                            </div>
                        </a>
                    </div>
                </section>

                {/* Technology Sections */}
                <section id="technology" className="arkub-tech-sections py-16 mil-light-gradient nine pt-40">
                    <Container>
                        {/* webdevlopment */}
                        <Row
                            className="items-center mb-16"
                            as={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" // Trigger on scroll
                            viewport={{ once: true, amount: 0.6 }} // Trigger when 60% visible
                        >
                            <Col md={5} as={motion.div} variants={itemVariants}>
                                <div className="arkub-tech-img-wrap mb-10">
                                    <img
                                        src={vr}
                                        alt="2D-3D"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-10"
                                        width={400}
                                        height={300}

                                    />
                                </div>
                            </Col>

                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">
                                Web Development</h3>
                                <p className="arkub-tech-summary mt-3">
                                Building responsive, modern websites and web applications
                                tailored to your business needs.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>HTML5 / CSS3 / JavaScript</li>
                                <li>React.js / Vue.js / Angular</li>
                                <li>Node.js / Express.js / Laravel</li>
                                <li>PHP / Python / Java / .NET</li>
                                <li>MySQL / PostgreSQL / MongoDB</li>
                                <li>Firebase / AWS / Azure</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* mobile */}
                        <Row  className="items-center flex-row-reverse"
                            as={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" // Trigger on scroll
                            viewport={{ once: true, amount: 0.6 }} // Trigger when 80% visible
                        >
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <div className="arkub-tech-img-wrap mb-20">
                                    <img
                                        src={d}
                                        alt="Virtual Reality"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-10"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">
                                Mobile App Development</h3>
                                <p className="arkub-tech-summary mt-3">
                                Creating high-performance mobile apps for iOS and Android
                                platforms.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Flutter / React Native / Kotlin</li>
                                <li>Swift / Objective-C (iOS)</li>
                                <li>Java / Kotlin (Android)</li>
                                <li>Firebase / AWS / Azure</li>
                                <li>REST APIs / GraphQL</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* software */}
                        <Row  className="items-center mb-16"
                            as={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" // Trigger on scroll
                            viewport={{ once: true, amount: 0.6 }} // Trigger when 80% visible
                        >
                            <Col md={5} as={motion.div} variants={itemVariants}>
                                <div className="arkub-tech-img-wrap mb-20">
                                    <img
                                        src={ui}
                                        alt="XR / MR"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-20"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">Software Development</h3>
                                <p className="arkub-tech-summary mt-3">
                                Custom software solutions to streamline operations and drive
                                innovation.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Python / Java / .NET / C#</li>
                                <li>Node.js / Express.js</li>
                                <li>Electron / Qt</li>
                                <li>Docker / Kubernetes</li>
                                <li>MySQL / PostgreSQL / MongoDB</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* lowcode */}
                        <Row  className="items-center flex-row-reverse"
                            as={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" // Trigger on scroll
                            viewport={{ once: true, amount: 0.6 }} // Trigger when 80% visible
                        >
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <div className="arkub-tech-img-wrap mb-20">
                                    <img
                                        src={graphics}
                                        alt="Metaverse & NFT"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-10"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">
                                Low Code/No Code</h3>
                                <p className="arkub-tech-summary mt-3">
                                Rapid application development using low-code and no-code
                                platforms for faster delivery.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Bubble</li>
                                <li>Webflow</li>
                                <li>OutSystems</li>
                                <li>Microsoft Power Apps</li>
                                <li>Zapier / Integromat</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* erp */}
                        <Row  className="items-center mb-16"
                            as={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" // Trigger on scroll
                            viewport={{ once: true, amount: 0.6 }} // Trigger when 80% visible
                        >
                            <Col md={5} as={motion.div} variants={itemVariants}>
                                <div className="arkub-tech-img-wrap mb-20">
                                    <img
                                        src={erp}
                                        alt="XR / MR"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-20"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">ERP & SaaS</h3>
                                <p className="arkub-tech-summary mt-3">
                                Enterprise Resource Planning and SaaS solutions for scalable
                                business management.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Odoo / SAP / Oracle ERP</li>
                                <li>Salesforce</li>
                                <li>Zoho</li>
                                <li>AWS / Azure / Google Cloud</li>
                                <li>REST APIs / Webhooks</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* shopify */}
                        <Row  className="items-center flex-row-reverse"
                            as={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" // Trigger on scroll
                            viewport={{ once: true, amount: 0.6 }} // Trigger when 80% visible
                        >
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <div className="arkub-tech-img-wrap mb-20">
                                    <img
                                        src={shopify}
                                        alt="Metaverse & NFT"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-10"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">
                                Shopify</h3>
                                <p className="arkub-tech-summary mt-3">
                                E-commerce store setup, customization, and management using
                                Shopify.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Shopify / Shopify Plus</li>
                                <li>Liquid (Shopify templating)</li>
                                <li>Shopify Apps</li>
                                <li>HTML5 / CSS3 / JavaScript</li>
                                <li>Klaviyo / Mailchimp</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* wordpress */}
                        <Row  className="items-center mb-16"
                            as={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" // Trigger on scroll
                            viewport={{ once: true, amount: 0.6 }} // Trigger when 80% visible
                        >
                            <Col md={5} as={motion.div} variants={itemVariants}>
                                <div className="arkub-tech-img-wrap mb-20">
                                    <img
                                        src={wordpress}
                                        alt="XR / MR"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-20"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">WordPress</h3>
                                <p className="arkub-tech-summary mt-3">
                                Flexible website development and content management with
                                WordPress and WooCommerce.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>WordPress / WooCommerce</li>
                                <li>PHP / MySQL</li>
                                <li>Elementor / WPBakery</li>
                                <li>HTML5 / CSS3 / JavaScript</li>
                                <li>Yoast SEO / WPForms</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* AIdevlopment */}
                        <Row  className="items-center flex-row-reverse"
                            as={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" // Trigger on scroll
                            viewport={{ once: true, amount: 0.6 }} // Trigger when 80% visible
                        >
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <div className="arkub-tech-img-wrap mb-20">
                                    <img
                                        src={AI}
                                        alt="Metaverse & NFT"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-10"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">
                                AI Development</h3>
                                <p className="arkub-tech-summary mt-3">
                                Integrating artificial intelligence and machine learning to
                                power smart solutions.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>TensorFlow / PyTorch</li>
                                <li>OpenAI / GPT / LLMs</li>
                                <li>Python / R</li>
                                <li>Scikit-learn / Keras</li>
                                <li>Google Cloud AI / AWS AI / Azure AI</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    );
}
