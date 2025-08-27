import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Preloader from './components/Preloader.js';
import "react-quill/dist/quill.snow.css";
import JobDetails from "./pages/Careerdetail.js";



// pages
import Index from './pages/index';
import About from './pages/about';
import Contact from './components/contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Admin from './pages/Admin';
import Design from "./pages/technologies/design";
import Digital from "./pages/technologies/digital";
import Web from "./pages/technologies/web";
import Enterprise from "./pages/technologies/enterprise";
import Game from "./pages/technologies/game";
import Rebranding from "./pages/technologies/rebranding";
import Immersive from "./pages/technologies/immersive";
import Careers from './pages/careers';
import PrivacyPolicy from './pages/privacy-policy';
import ServicesRedesign from './pages/services/serviceRedesign';
import ServicesBrand from './pages/services/serviceBrand';
import ServicesTech from './pages/services/serviceTech';
import Services2d3d from './pages/services/service2d3d';
import ServicesCGI from './pages/services/serviceCGI';
import ServicesGraphic from './pages/services/serviceGraphic';
import ServicesAR from './pages/services/serviceAR';
import ServicesVR from './pages/services/serviceVR';
import ServicesMR from './pages/services/serviceMR';
import ServicesXR from './pages/services/serviceXR';
import ServicesMetaverse from './pages/services/serviceMetaverse';
import ServicesGamedevlopment from './pages/services/serviceGamedevlopment';
import ServicesMarketplace from './pages/services/serviceMarketplace';
import ServiceImmersive from './pages/services/serviceImmersive';
import ServicesMetaversegame from './pages/services/serviceMetaversegame';
import ServicesWeb from './pages/services/serviceWeb';
import ServicesMobile from './pages/services/serviceMobile';
import ServicesSoftware from './pages/services/serviceSoftware';
import ServicesLowcode from './pages/services/serviceLow-code';
import ServicesErp from './pages/services/serviceErp';
import ServicesSaas from './pages/services/serviceSaas';
import ServicesShopify from './pages/services/serviceShopify';
import ServicesWordpress from './pages/services/serviceWordpress';
import ServicesAI from './pages/services/serviceAI';
import ServicesIos from './pages/services/serviceIos';
import ServicesAndroid from './pages/services/serviceAndroid';
import ServicesCRM from './pages/services/serviceCRM';
import ServicesErpdevlopment from './pages/services/serviceErpdevlopment';
import ServicesCustomdevlopment from './pages/services/serviceCustomdevlopment';
import ServicesSEO from './pages/services/serviceSEO';
import ServicesMarketing from './pages/services/serviceMarketing';
import ServicesImmersivemaketing from './pages/services/serviceImmersivemarketing';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/design" element={<Design />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/web" element={<Web />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rebranding" element={<Rebranding />} />
        <Route path="/immersive" element={<Immersive />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/redesign" element={<ServicesRedesign />} />
        <Route path="/brand-identity" element={<ServicesBrand />} />
        <Route path="/tech-migration" element={<ServicesTech />} />
        <Route path="/animation" element={<Services2d3d />} />
        <Route path="/cgi" element={<ServicesCGI />} />
        <Route path="/graphics" element={<ServicesGraphic />} />
        <Route path="/ar" element={<ServicesAR />} />
        <Route path="/vr" element={<ServicesVR />} />
        <Route path="/mr" element={<ServicesMR />} />
        <Route path="/xr" element={<ServicesXR />} />
        <Route path="/metaverse" element={<ServicesMetaverse />} />
        <Route path="/nft-games" element={<ServicesGamedevlopment />} />
        <Route path="/nft-marketplace" element={<ServicesMarketplace />} />
        <Route path="/serviceimmersive" element={<ServiceImmersive />} />
        <Route path="/metaverse-games" element={<ServicesMetaversegame />} />
        <Route path="/webdev" element={<ServicesWeb />} />
        <Route path="/mobile" element={<ServicesMobile />} />
        <Route path="/software" element={<ServicesSoftware />} />
        <Route path="/low-code" element={<ServicesLowcode />} />
        <Route path="/erp-dev" element={<ServicesErp />} />
        <Route path="/Saas" element={<ServicesSaas />} />
        <Route path="/shopify" element={<ServicesShopify />} />
        <Route path="/wordpress" element={<ServicesWordpress />} />
        <Route path="/ai" element={<ServicesAI />} />
        <Route path="/ios-games" element={<ServicesIos />} />
        <Route path="/android-games" element={<ServicesAndroid />} />
        <Route path="/crm" element={<ServicesCRM />} />
        <Route path="/marketing" element={<ServicesMarketing />} />
        <Route path="/immersive-marketing" element={<ServicesImmersivemaketing />} />
        <Route path="/seo" element={<ServicesSEO />} />
        <Route path="/erp" element={<ServicesErpdevlopment />} />
        <Route path="/custom-dev" element={<ServicesCustomdevlopment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/job/:slug" element={<JobDetails />} />
      </Routes>

      {/* ✅ Hide footer only on /admin */}
      {location.pathname !== "/admin" && <Footer />}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* {loading && <Preloader onFinish={() => setLoading(false)} />} */}
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
