import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo from '../assest/img/logo/logo_transparent.png';
import Account from './Account';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleShowMobileMenu = () => setShowMobileMenu(true);

  const toggleMobileDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    setActiveSubDropdown(null); // Close sub-dropdowns when main dropdown changes
  };

  const toggleSubDropdown = (subDropdownName) => {
    setActiveSubDropdown(activeSubDropdown === subDropdownName ? null : subDropdownName);
  };

  return (
    <>
      {/* Main Header */}
      <Navbar
        expand="lg"
        className={`fixed-top header-navbar ${isScrolled ? 'scrolled' : 'not-scrolled'
          }`}
      >
        <Container fluid className="header-container px-4 ">
          {/* Logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center header-logo">
            <div className="logo-container">
              <img src={logo} alt="logo" height={40} width={50} />
            </div>
          </Navbar.Brand>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-block">
            <Nav className="me-auto align-items-center">
              <Nav.Link href="/" className="header-nav-link px-3 py-2">
                Home
              </Nav.Link>

              <Nav.Link href="/about" className="header-nav-link px-3 py-2">
                About Us
              </Nav.Link>

              {/* Services Dropdown */}
              <NavDropdown
                title={
                  <span className="header-nav-link px-3 py-2">
                    Services
                  </span>
                }
                id="services-dropdown"
                  className="mega-menu-dropdown"

              >
                <div className="mega-menu-container" >
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="mega-menu-title">REBRANDING</h6>
                      <ul className="mega-menu-list">
                        <li className="mega-menu-item"><a href="/redesign" className="mega-menu-link">Website Redesign</a></li>
                        <li className="mega-menu-item"><a href="/brand-identity" className="mega-menu-link">Brand Identity</a></li>
                        <li className="mega-menu-item"><a href="/tech-migration" className="mega-menu-link">Tech Migration</a></li>
                      </ul>
                      <h6 className="mega-menu-title mt-3">DESIGN & ANIMATION</h6>
                      <ul className="mega-menu-list">
                        <li className="mega-menu-item"><a href="/animation" className="mega-menu-link">2D & 3D Animation</a></li>
                        <li className="mega-menu-item"><a href="/cgi" className="mega-menu-link">CGI & Video Production</a></li>
                        <li className="mega-menu-item"><a href="/graphics" className="mega-menu-link">Graphics & UI/UX Design</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mega-menu-title">METAVERSE TECH</h6>
                      <ul className="mega-menu-list">
                        <li className="mega-menu-item"><a href="/ar" className="mega-menu-link">AR (Augmented Reality)</a></li>
                        <li className="mega-menu-item"><a href="/vr" className="mega-menu-link">VR (Virtual Reality)</a></li>
                        <li className="mega-menu-item"><a href="/xr" className="mega-menu-link">XR (Extended Reality)</a></li>
                        <li className="mega-menu-item"><a href="/mr" className="mega-menu-link">MR (Mixed Reality)</a></li>
                        <li className="mega-menu-item"><a href="/metaverse" className="mega-menu-link">Metaverse Solutions</a></li>
                        <li className="mega-menu-item"><a href="/nft-games" className="mega-menu-link">NFT Game Development</a></li>
                        <li className="mega-menu-item"><a href="/nft-marketplace" className="mega-menu-link">NFT Marketplace</a></li>
                        <li className="mega-menu-item"><a href="/serviceimmersive" className="mega-menu-link">Immersive Marketing</a></li>
                        <li className="mega-menu-item"><a href="/metaverse-games" className="mega-menu-link">Metaverse Games</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="mega-menu-title">WEB/APP DEVELOPMENT</h6>
                      <ul className="mega-menu-list">
                        <li className="mega-menu-item"><a href="/webdev" className="mega-menu-link">Web Development</a></li>
                        <li className="mega-menu-item"><a href="/mobile" className="mega-menu-link">Mobile App Development</a></li>
                        <li className="mega-menu-item"><a href="/software" className="mega-menu-link">Software Development</a></li>
                        <li className="mega-menu-item"><a href="/low-code" className="mega-menu-link">Low Code / No Code</a></li>
                        <li className="mega-menu-item"><a href="/erp" className="mega-menu-link">Custom ERP Software</a></li>
                        <li className="mega-menu-item"><a href="/saas" className="mega-menu-link">SaaS Development</a></li>
                        <li className="mega-menu-item"><a href="/shopify" className="mega-menu-link">Shopify Development</a></li>
                        <li className="mega-menu-item"><a href="/wordpress" className="mega-menu-link">WordPress Development</a></li>
                        <li className="mega-menu-item"><a href="/ai" className="mega-menu-link">AI Development</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                      <h6 className="mega-menu-title">GAME DEVELOPMENT</h6>
                      <ul className="mega-menu-list">
                        <li className="mega-menu-item"><a href="/android-games" className="mega-menu-link">Android Games</a></li>
                        <li className="mega-menu-item"><a href="/ios-games" className="mega-menu-link">iOS Games</a></li>
                      </ul>
                      <h6 className="mega-menu-title mt-3">ENTERPRISE</h6>
                      <ul className="mega-menu-list">
                        <li className="mega-menu-item"><a href="/crm" className="mega-menu-link">CRM Development</a></li>
                        <li className="mega-menu-item"><a href="/erp-dev" className="mega-menu-link">ERP Development</a></li>
                        <li className="mega-menu-item"><a href="/custom-dev" className="mega-menu-link">Custom Development</a></li>
                      </ul>
                      <h6 className="mega-menu-title mt-3">DIGITAL MARKETING</h6>
                      <ul className="mega-menu-list">
                        <li className="mega-menu-item"><a href="/seo" className="mega-menu-link">SEO Optimization</a></li>
                        <li className="mega-menu-item"><a href="/marketing" className="mega-menu-link">Marketing Strategy</a></li>
                        <li className="mega-menu-item"><a href="/immersive-marketing" className="mega-menu-link">Immersive Marketing</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown
                title={
                  <span className="header-nav-link px-3 py-2">
                    Portfolio
                  </span>
                }
                id="technologies-dropdown"

              >
                <NavDropdown.Item href="/" className="header-dropdown-item">Design & Animation</NavDropdown.Item>
                <NavDropdown.Item href="/" className="header-dropdown-item">Web & App Development</NavDropdown.Item>
                <NavDropdown.Item href="/" className="header-dropdown-item">Immersive Technologies</NavDropdown.Item>
                <NavDropdown.Item href="/" className="header-dropdown-item">Game Development</NavDropdown.Item>
                <NavDropdown.Item href="/" className="header-dropdown-item">Enterprise Solutions</NavDropdown.Item>
                <NavDropdown.Item href="/" className="header-dropdown-item">Digital Marketing</NavDropdown.Item>
                <NavDropdown.Item href="/" className="header-dropdown-item">Rebranding</NavDropdown.Item>
              </NavDropdown>

              {/* Technologies Dropdown */}
              <NavDropdown
                title={
                  <span className="header-nav-link px-3 py-2">
                    Technologies
                  </span>
                }
                id="technologies-dropdown"

              >
                <NavDropdown.Item href="/design" className="header-dropdown-item">Design & Animation</NavDropdown.Item>
                <NavDropdown.Item href="/web" className="header-dropdown-item">Web & App Development</NavDropdown.Item>
                <NavDropdown.Item href="/immersive" className="header-dropdown-item">Immersive Technologies</NavDropdown.Item>
                <NavDropdown.Item href="/game" className="header-dropdown-item">Game Development</NavDropdown.Item>
                <NavDropdown.Item href="/enterprise" className="header-dropdown-item">Enterprise Solutions</NavDropdown.Item>
                <NavDropdown.Item href="/digital" className="header-dropdown-item">Digital Marketing</NavDropdown.Item>
                <NavDropdown.Item href="rebranding" className="header-dropdown-item">Rebranding</NavDropdown.Item>
              </NavDropdown>

              {/* Blog Dropdown */}
              <Nav.Link href="/blog" className="header-nav-link px-3 py-2">
                Blog
              </Nav.Link>

              {/* Company Dropdown */}
              <NavDropdown
                title={
                  <span className="header-nav-link px-3 py-2">
                    Company
                  </span>
                }
                id="company-dropdown" style={{ marginRight: "10px" }}
              >
                <NavDropdown.Item href="/contact" className="header-dropdown-item">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="/careers" className="header-dropdown-item">Careers</NavDropdown.Item>
                <NavDropdown.Item href="/privacy-policy" className="header-dropdown-item">Privacy Policy</NavDropdown.Item>
              </NavDropdown>

              {/* Account Section */}
              <div className="d-flex align-items-center">
                <Account />
              </div>
            </Nav>
          </div>

          {/* Mobile Menu Toggle - Custom Hamburger Icon */}
          <button
            className="mobile-menu-toggle d-lg-none"
            onClick={handleShowMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </Container>
      </Navbar>

      {/* Mobile Menu Sidebar */}
      <Offcanvas
        show={showMobileMenu}
        onHide={handleCloseMobileMenu}
        placement="end"
        className="mobile-menu-sidebar"
      >
        <Offcanvas.Header className="mobile-menu-header">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <div className="logo-container mobile-logo">
                <img src={logo} alt="logo" height={40} width={50} />
              </div>
            </div>
            <button
              className="mobile-menu-close"
              onClick={handleCloseMobileMenu}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mobile-menu-separator"></div>
        </Offcanvas.Header>

        <Offcanvas.Body className="mobile-menu-body">
          <div className="mobile-nav-links">
            <a href="/" className="mobile-nav-link" onClick={handleCloseMobileMenu}>
              <span>Home</span>
            </a>

            <a href="/about" className="mobile-nav-link" onClick={handleCloseMobileMenu}>
              <span>About Us</span>
            </a>

            <div className={`mobile-nav-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
              <button
                className="mobile-nav-link dropdown-toggle"
                onClick={() => toggleMobileDropdown('services')}
              >
                <span>Services</span>
              </button>
              <div className="mobile-dropdown-content">
                {/* REBRANDING - Nested Dropdown */}
                <div className="mobile-dropdown-section">
                  <div className={`mobile-sub-dropdown ${activeSubDropdown === 'rebranding' ? 'active' : ''}`}>
                    <button
                      className="mobile-sub-dropdown-toggle"
                      onClick={() => toggleSubDropdown('rebranding')}
                    >
                      <span>REBRANDING</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className="mobile-sub-dropdown-content">
                      <a href="/redesign" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Website Redesign</a>
                      <a href="/brand-identity" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Brand Identity</a>
                      <a href="/tech-migration" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Tech Migration</a>
                    </div>
                  </div>
                </div>

                {/* DESIGN & ANIMATION - Nested Dropdown */}
                <div className="mobile-dropdown-section">
                  <div className={`mobile-sub-dropdown ${activeSubDropdown === 'design-animation' ? 'active' : ''}`}>
                    <button
                      className="mobile-sub-dropdown-toggle"
                      onClick={() => toggleSubDropdown('design-animation')}
                    >
                      <span>DESIGN & ANIMATION</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className="mobile-sub-dropdown-content">
                      <a href="/animation" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>2D & 3D Animation</a>
                      <a href="/cgi" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>CGI & Video Production</a>
                      <a href="/graphics" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Graphics & UI/UX Design</a>
                    </div>
                  </div>
                </div>

                {/* METAVERSE TECH - Nested Dropdown */}
                <div className="mobile-dropdown-section">
                  <div className={`mobile-sub-dropdown ${activeSubDropdown === 'metaverse-tech' ? 'active' : ''}`}>
                    <button
                      className="mobile-sub-dropdown-toggle"
                      onClick={() => toggleSubDropdown('metaverse-tech')}
                    >
                      <span>METAVERSE TECH</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className="mobile-sub-dropdown-content">
                      <a href="/ar" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>AR (Augmented Reality)</a>
                      <a href="/vr" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>VR (Virtual Reality)</a>
                      <a href="/xr" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>XR (Extended Reality)</a>
                      <a href="/mr" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>MR (Mixed Reality)</a>
                      <a href="/metaverse" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Metaverse Solutions</a>
                      <a href="/nft-games" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>NFT Game Development</a>
                      <a href="/nft-marketplace" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>NFT Marketplace</a>
                      <a href="/serviceimmersive" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Immersive Marketing</a>
                      <a href="/metaverse-games" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Metaverse Games</a>
                    </div>
                  </div>
                </div>

                {/* WEB/APP DEVELOPMENT - Nested Dropdown */}
                <div className="mobile-dropdown-section">
                  <div className={`mobile-sub-dropdown ${activeSubDropdown === 'web-app-dev' ? 'active' : ''}`}>
                    <button
                      className="mobile-sub-dropdown-toggle"
                      onClick={() => toggleSubDropdown('web-app-dev')}
                    >
                      <span>WEB/APP DEVELOPMENT</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className="mobile-sub-dropdown-content">
                      <a href="/web" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Web Development</a>
                      <a href="/mobile" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Mobile App Development</a>
                      <a href="/software" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Software Development</a>
                      <a href="/low-code" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Low Code / No Code</a>
                      <a href="/erp" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Custom ERP Software</a>
                      <a href="/saas" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>SaaS Development</a>
                      <a href="/shopify" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Shopify Development</a>
                      <a href="/wordpress" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>WordPress Development</a>
                      <a href="/ai" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>AI Development</a>
                    </div>
                  </div>
                </div>

                {/* GAME DEVELOPMENT - Nested Dropdown */}
                <div className="mobile-dropdown-section">
                  <div className={`mobile-sub-dropdown ${activeSubDropdown === 'game-dev' ? 'active' : ''}`}>
                    <button
                      className="mobile-sub-dropdown-toggle"
                      onClick={() => toggleSubDropdown('game-dev')}
                    >
                      <span>GAME DEVELOPMENT</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className="mobile-sub-dropdown-content">
                      <a href="/android-games" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Android Games</a>
                      <a href="/ios-games" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>iOS Games</a>
                    </div>
                  </div>
                </div>

                {/* ENTERPRISE - Nested Dropdown */}
                <div className="mobile-dropdown-section">
                  <div className={`mobile-sub-dropdown ${activeSubDropdown === 'enterprise' ? 'active' : ''}`}>
                    <button
                      className="mobile-sub-dropdown-toggle"
                      onClick={() => toggleSubDropdown('enterprise')}
                    >
                      <span>ENTERPRISE</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className="mobile-sub-dropdown-content">
                      <a href="/crm" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>CRM Development</a>
                      <a href="/erp-dev" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>ERP Development</a>
                      <a href="/custom-dev" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Custom Development</a>
                    </div>
                  </div>
                </div>

                {/* DIGITAL MARKETING - Nested Dropdown */}
                <div className="mobile-dropdown-section">
                  <div className={`mobile-sub-dropdown ${activeSubDropdown === 'digital-marketing' ? 'active' : ''}`}>
                    <button
                      className="mobile-sub-dropdown-toggle"
                      onClick={() => toggleSubDropdown('digital-marketing')}
                    >
                      <span>DIGITAL MARKETING</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className="mobile-sub-dropdown-content">
                      <a href="/seo" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>SEO Optimization</a>
                      <a href="/marketing" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Marketing Strategy</a>
                      <a href="/immersive-marketing" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Immersive Marketing</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mobile-nav-dropdown ${activeDropdown === 'Portfolio' ? 'active' : ''}`}>
              <button
                className="mobile-nav-link dropdown-toggle"
                onClick={() => toggleMobileDropdown('Portfolio')}
              >
                <span>Portfolio</span>
              </button>
              <div className="mobile-dropdown-content">
                <a href="/" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Design & Animation</a>
                <a href="/" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Web & App Development</a>
                <a href="/" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Immersive Technologies</a>
                <a href="/" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Game Development</a>
                <a href="/" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Enterprise Solutions</a>
                <a href="/" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Digital Marketing</a>
                <a href="/" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Rebranding</a>
              </div>
            </div>
            <div className={`mobile-nav-dropdown ${activeDropdown === 'technologies' ? 'active' : ''}`}>
              <button
                className="mobile-nav-link dropdown-toggle"
                onClick={() => toggleMobileDropdown('technologies')}
              >
                <span>Technologies</span>
              </button>
              <div className="mobile-dropdown-content">
                <a href="/design" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Design & Animation</a>
                <a href="/web" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Web & App Development</a>
                <a href="/immersive" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Immersive Technologies</a>
                <a href="/game" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Game Development</a>
                <a href="/enterprise" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Enterprise Solutions</a>
                <a href="/digital" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Digital Marketing</a>
                <a href="/rebranding" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Rebranding</a>
              </div>
            </div>

            <a href="/blog" className="mobile-nav-link" onClick={handleCloseMobileMenu}>
              <span>Blog</span>
            </a>

            <div className={`mobile-nav-dropdown ${activeDropdown === 'company' ? 'active' : ''}`} >
              <button
                className="mobile-nav-link dropdown-toggle"
                onClick={() => toggleMobileDropdown('company')}
              >
                <span>Company</span>
              </button>
              <div className="mobile-dropdown-content">
                <a href="/contact" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Contact Us</a>
                <a href="/careers" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Careers</a>
                <a href="/privacy-policy" className="mobile-dropdown-item" onClick={handleCloseMobileMenu}>Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="mobile-account-section m-2">
            <Account />
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;