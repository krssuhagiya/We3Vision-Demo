import React from "react";
import "./technology.css"
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";
import vr from "../../assest/img/works/cgi & video.png";
import d from "../../assest/img/works/2d-3d.png";
import ui from "../../assest/img/works/ui-ux-design.png";
import graphics from "../../assest/img/works/graphics.png";

export default function Design() {
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
                                Creative Design, Animation, CGI, Branding & User Experience
                            </span>
                        </h3>
                        <p className="hero-desc mt-4 max-w-2xl mx-auto mb-10">
                            Explore how We3vision Private Limited transforms digital experiences
                            with cutting-edge solutions and creative technology.
                        </p>
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
                                        src={d}
                                        alt="2D-3D"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-10"
                                        width={400}
                                        height={300}

                                    />
                                </div>
                            </Col>

                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">
                                    2D & 3D Animation
                                </h3>
                                <p className="arkub-tech-summary mt-3">
                                    We create captivating 2D and 3D animations to bring your ideas to
                                    life, from explainer videos to product visualizations and character
                                    animation.
                                </p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>Adobe After Effects</li>
                                    <li>Blender</li>
                                    <li>Cinema 4D</li>
                                    <li>Autodesk Maya</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* CGI & Video Production */}
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
                                        src={vr}
                                        alt="Virtual Reality"
                                        className="arkub-tech-img rounded-xl shadow-lg mt-10"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </Col>
                            <Col md={6} as={motion.div} variants={itemVariants}>
                                <h3 className="arkub-tech-title text-2xl font-bold">
                                    CGI & Video Production
                                </h3>
                                <p className="arkub-tech-summary mt-3">
                                    Our team produces high-quality CGI and video content, including
                                    visual effects, motion graphics, and full-scale video production for
                                    marketing and storytelling.
                                </p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>Adobe After Effects</li>
                                    <li>Cinema 4D</li>
                                    <li>Autodesk Maya</li>
                                    <li>Premiere Pro</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* Graphics */}
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
                                <h3 className="arkub-tech-title text-2xl font-bold">Graphics</h3>
                                <p className="arkub-tech-summary mt-3">
                                    We design stunning graphics for digital and print, ensuring your
                                    brand stands out with creative visuals, illustrations, and branding
                                    assets.
                                </p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>Adobe Illustrator</li>
                                    <li>Photoshop</li>
                                    <li>CorelDRAW</li>
                                </ul>
                            </Col>
                        </Row>

                        {/* UI/UX Design */}
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
                                <h3 className="arkub-tech-title text-2xl font-bold">
                                    UI/UX Design
                                </h3>
                                <p className="arkub-tech-summary mt-3">
                                    We craft intuitive and engaging user interfaces and experiences,
                                    focusing on usability, accessibility, and modern design trends for
                                    web and mobile applications.
                                </p>
                                <p className="arkub-tech-desc font-bold mt-3">
                                    Technologies & Tools We Use:
                                </p>
                                <ul className="list-disc ml-6">
                                    <li>Figma</li>
                                    <li>Adobe XD</li>
                                    <li>Illustrator</li>
                                    <li>Photoshop</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    );
}
