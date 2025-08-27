import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ onFinish }) => {
  const [visibleWords, setVisibleWords] = useState([false, false, false]);
  const [step, setStep] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleWords([true, false, false]), 500),
      setTimeout(() => setVisibleWords([true, true, false]), 1500),
      setTimeout(() => setVisibleWords([true, true, true]), 2500),
      setTimeout(() => setStep(1), 3500) // Gradient box step
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (step === 1) {
      const t1 = setTimeout(() => {
        setFade(true); // Start fade out
        setTimeout(() => {
          onFinish(); // Remove preloader after fade
        }, 800); // match fade animation time
      }, 2500); // Time gradient box is visible
      return () => clearTimeout(t1);
    }
  }, [step, onFinish]);

  return (
    <div className={`preloader ${fade ? "fade-out" : ""}`}>
      {step === 0 && (
        <h1 className="preloader-text">
          {visibleWords[0] && <span>Pioneering </span>}
          {visibleWords[1] && <span className="bold">Creative </span>}
          {visibleWords[2] && <span>Excellence</span>}
        </h1>
      )}

      {step === 1 && (
        <div className="reveal-container">
          <h1 className="reveal-text">We3vision Private Limited</h1>
          <div className="gradient-slider"></div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
