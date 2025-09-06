import React from 'react';
import Zeroimg from "../assets/mainfoto.png";
import './css/Zero.css';

function Zero({ language }) {
 const translations = {
  AZ: {
   title: "Bytech Solutions",
   subtitle: "Dəstək və Həllər",
   paragraph: "BYTech Solutions – Etibarlı xidmət, innovativ həllər və müştəri etimadını qorumaq missiyası ilə fəaliyyət göstərir",
   button: "Ətraflı"
  },
  EN: {
   title: "Bytech Solutions",
   subtitle: "Support and Solutions",
   paragraph: "BYTech Solutions – Operates with a mission to provide reliable service, innovative solutions, and maintain trust in purpose",
   button: "Learn More"
  }
 };

 return (
  <div className="container-box container-fluid py-6">
   <div className="row align-items-center min-vh-100">
    <div className="col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center text-md-start text-center mb-4 mb-md-0 p-md-4">
     <h1 className="text-h display-4 fw-bold">{translations[language].title}</h1>
     <h4 className="mt-3 fw-bold text-h">{translations[language].subtitle}</h4>
     <p className="text-p mt-3 w-75 fs-5 fw-semibold">{translations[language].paragraph}</p>
     <a href='#services' className="btn btn-primary mt-3 fs-5">{translations[language].button}</a>
    </div>
    <div className="col-md-5 text-center">
     <img src={Zeroimg} alt="Zero" className="img-fluid col-md-12" />
    </div>
   </div>
  </div>
 );
}

export default Zero;