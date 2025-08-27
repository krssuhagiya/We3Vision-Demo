import React from "react";
import "./technology.css"
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";
import vr from "../../assest/img/works/android.jpg";
import d from "../../assest/img/works/ios.avif";
import ui from "../../assest/img/works/metaverse1.jpg";

export default function Game() {
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
                        Unleash Creativity with {" "}
                            <span className="font-bold">
                            Android, iOS & Metaverse Game Development</span>
                        </h3>
                        <p className="hero-desc mt-4 max-w-2xl mx-auto mb-10">
                        Explore how We3vision Private Limited transforms digital experiences with
                            cutting-edge
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

                {/* Android  */}
                <section id="technology" className="arkub-tech-sections py-16 mil-light-gradient nine pt-40">
                    <Container>
                        {/* 2D & 3D Animation */}
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
                                Android Game Dev
                                </h3>
                                <p className="arkub-tech-summary mt-3">
                                Developing immersive and high-performance games for Android
                                devices using industry-leading engines and technologies.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Unity 2D & 3D</li>
                                <li>Unreal Engine</li>
                                <li>C# / C++ / Java</li>
                                <li>Firebase (Real-time DB)</li>
                                <li>WebGL / Three.js</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* ios */}
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
                                iOS Game Dev</h3>
                                <p className="arkub-tech-summary mt-3">
                                Creating engaging and visually stunning games for iOS
                                platforms, leveraging advanced frameworks and native capabilities.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Unity 2D & 3D</li>
                                <li>Unreal Engine</li>
                                <li>C# / C++ / Swift</li>
                                <li>Firebase (Real-time DB)</li>
                                <li>WebGL / Three.js</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* Metaverse */}
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
                                <h3 className="arkub-tech-title text-2xl font-bold">Metaverse Game Dev</h3>
                                <p className="arkub-tech-summary mt-3">
                                Building next-generation metaverse and NFT-enabled games with
                                real-time multiplayer, blockchain integration, and 3D experiences.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Unity 2D & 3D</li>
                                <li>Unreal Engine</li>
                                <li>C# / C++</li>
                                <li>Firebase (Real-time DB)</li>
                                <li>WebGL / Three.js</li>
                                <li>Blockchain Game SDKs (for NFT/Metaverse games)</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    );
}
