import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./contact.css";
import HeroPolyhedron from "./HeroPolyhedron";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectName: "",
    mobile: "",
    message: "",
    meetingDate: "",
  });
  const dateInputRef = useRef(null);

  const [showCalendar, setShowCalendar] = useState(false);
  const [meetingDate, setMeetingDate] = useState(null);


  const form = useRef(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const { fullName, email, projectName, mobile, message, meetingDate } = formData;

    if (!fullName || !email || !projectName || !mobile || !message || !meetingDate) {
      setError("Please fill all the fields.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_kcjn8gj",//service ID
        "template_tig18om",//temlete ID
        form.current,
        "9fbAhK4AecFe8pJUV"//public key
      );

      toast.success("Email sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
        fullName: "",
        email: "",
        projectName: "",
        mobile: "",
        message: "",
        meetingDate: "",
      });
    } catch (err) {
      toast.error("Failed to send email. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const sendWhatsApp = () => {
    const { fullName, email, projectName, mobile, message, meetingDate } = formData;

    if (!fullName || !email || !projectName || !mobile || !message || !meetingDate) {
      setError("Please fill all the fields.");
      return;
    }

    const whatsappMessage =
      `*New Contact Form Submission*

  *Name:* ${fullName}
  *Email:* ${email}
  *Project Name:* ${projectName}
  *Mobile:* ${mobile}
  *Meeting Date:* ${meetingDate}
  
  *Message:*
  ${message}
  
  ---
  _Sent from We3vision Private Limited Website_`;

    const whatsappURL = `https://wa.me/917383216096?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };


  return (
    <div className="w-full mil-light-gradient">
      <ToastContainer />
      <div className="container2 mil-dark-gradient mb-40 pt-20" style={{ position: "relative", zIndex: 1 }}>
      <HeroPolyhedron />
        <div className="mil-banner-content mil-up one justify-content-center text-center">
          <h1 className="mil-muted mil-mb-60 text-responsive">
            Get in touch
          </h1>
          <div className="mil-button-group justify-content-center text-center eleven">
          <a className="mil-button mil-quick-enquiry mil-arrow-place"
                    onClick={() => {
                      document.getElementById("next-section").scrollIntoView({
                        behavior: "smooth"
                      });
                    }}>
                    <span>Send Message</span>
                    <div className="mil-button-arrow">
                      <svg viewBox="0 0 24 24">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                    </div>
                  </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 mb-60" id="next-section">
        {/* Left Info */}
        <div className="flex-1">
          <p className="uppercase text-sm mb-2">Getting Touch</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#2A2BC7' }}>
            Have a project in mind?
            <br /> Let’s bring it to life together!
          </h2>

          <div className="space-y-3">
          <div className="bg-white/10 px-4 py-3 rounded-md flex items-center gap-3">
  <FaPhoneAlt className="text-pink-400 text-lg" />
  <span>+91 7383216096</span>
</div>

<div className="bg-white/10 px-4 py-3 rounded-md flex items-center gap-3">
  <FaEnvelope className="text-pink-400 text-lg" />
  <span>info@we3visioninfotech.com</span>
</div>

<div className="bg-white/10 px-4 py-3 rounded-md flex items-center gap-3">
  <FaMapMarkerAlt className="text-pink-400 text-lg" />
  <span>936 A, Ishwar Darshan, Bhim Kachchhi Mohallo, Nanpura, Surat-305003, Gujarat, India</span>
</div>
          </div>

          <div className="relative inline-block">
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="mt-6 bg-gradient-to-r px-6 py-3 rounded-full font-semibold hover:opacity-90 transition mil-button"
            >
              BOOK MEETING →
            </button>

            {showCalendar && (
              <div
                className="absolute  ml-4 z-50 bg-pink p-3 rounded-xl shadow-lg"
                style={{ minWidth: "240px" }} // Keeps calendar from being too small
              >
                <DatePicker
                  selected={meetingDate}
                  onChange={(date) => {
                    setMeetingDate(date);
                    setFormData({ ...formData, meetingDate: date.toISOString().split("T")[0] });
                    setShowCalendar(false); // Close after selection
                  }}
                  inline
                />
              </div>
            )}
          </div>




          {/* Hidden date picker */}
          <input
            type="date"
            ref={dateInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFormData({ ...formData, meetingDate: e.target.value })}
          />

        </div>

        {/* Right Form */}
        <div className="flex-1 p-6 rounded-xl right-section glass-form" >
          <form ref={form}>
            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-md  form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-md  form-input"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={formData.projectName}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-md form-input"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No"
                value={formData.mobile}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-md  form-input"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 rounded-md  mb-4 form-textarea"
            ></textarea>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={sendWhatsApp}
                className="flex-1 px-6 py-3 rounded-full font-semibold submit-btn"
              >
                Send via WhatsApp
              </button>
              <button
                type="submit"
                onClick={sendEmail}
                className="flex-1 px-6 py-3 rounded-full font-semibold submit-btn"
              >
                Send via Email
              </button>
            </div>
          </form>
        </div>
      </div>
        <div className="mil-map-frame mil-up">
                    <div className="mil-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
    </div>
  );
}
