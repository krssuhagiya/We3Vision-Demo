import React from "react";
import "./technology.css"
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";
import vr from "../../assest/img/works/arvr.avif";
import d from "../../assest/img/works/xr-1.avif";
import ui from "../../assest/img/works/metaverse1.jpg";
import graphics from "../../assest/img/works/mr.jpg";

export default function Immersive() {
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
                            AR, VR, XR, Metaverse,Immersive Marketing</span>
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

                {/* Technology Sections */}
                <section id="technology" className="arkub-tech-sections py-16 mil-light-gradient nine pt-40">
                    <Container>
                        {/* AR */}
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
                                Augmented Reality (AR)</h3>
                                <p className="arkub-tech-summary mt-3">
                                Augmented Reality overlays digital content onto the real
                                world, enhancing user experiences with interactive and immersive elements through
                                smartphones, tablets, and smart glasses.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>ARKit / ARCore</li>
                                <li>Spark AR / Lens Studio</li>
                                <li>Unity 3D / Unreal Engine</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* Vr*/}
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
                                Virtual Reality (VR)</h3>
                                <p className="arkub-tech-summary mt-3">
                                Virtual Reality immerses users in a fully digital environment,
                                enabling simulated experiences for gaming, training, education, and more using VR
                                headsets and controllers.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Unity 3D / Unreal Engine</li>
                                <li>WebXR / A-Frame / Babylon.js</li>
                                <li>Three.js</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* Xr-1 */}
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
                                        src={graphics}
                                        alt="XR / MR"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-20"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">XR / MR</h3>
                                <p className="arkub-tech-summary mt-3">Extended Reality (XR) and Mixed Reality (MR) blend real
                                    and
                                    virtual worlds, allowing physical and digital objects to interact in real time for
                                    advanced simulations and collaboration.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Unity 3D / Unreal Engine</li>
                                <li>Blender / Maya</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* metaverse-1 */}
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
                                        src={ui}
                                        alt="Metaverse & NFT"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-10"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">Metaverse & NFT</h3>
                                <p className="arkub-tech-summary mt-3">
                                The Metaverse is a collective virtual space powered by
                                    blockchain and NFTs, enabling social interaction, commerce, and creativity in
                                    persistent
                                    digital worlds.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>OpenSea / Moralis / IPFS</li>
                                    <li>Ethereum / Polygon / Solana</li>
                                    <li>Spatial.io / Mozilla Hubs / Decentraland</li>
                                </ul>
                            </Col>
                        </Row>
                         {/* mr */}
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
                                        src={graphics}
                                        alt="XR / MR"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-20"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">Immersive Marketing</h3>
                                <p className="arkub-tech-summary mt-3">Immersive Marketing leverages AR, VR, and interactive
                                    technologies to create engaging brand experiences, driving deeper customer
                                    connection
                                    and memorable campaigns.</p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                <li>Interactive Campaigns</li>
                                    <li>3D/AR/VR Experiences</li>
                                    <li>Brand Engagement</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    );
}
