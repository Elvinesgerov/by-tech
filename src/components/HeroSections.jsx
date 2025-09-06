import React from 'react';
import './css/HeroSections.css';
import BackgroundImage from '../assets/Team.jpeg';

function HeroSections({ language }) {
 const translations = {
  AZ: {
   title: "Etibar, İnnovasiya və Uğur!",
   highlight: "BYTech KOMANDASI",
   paragraph1: "Daha çevik və səmərəli biznes üçün etibarlı xidmətlər təqdim edirik.",
  },
  EN: {
   title: "Trust, Innovation and Success!",
   highlight: "BYTech TEAM",
   paragraph1: "We provide reliable services for more agile and origin-oriented businesses.",
  }
 };

 return (
  <div
   className="d-flex align-items-center w-100"
   style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: "100vh"
   }}
  >
   <div className="container">
    <div className="row align-items-center">
     <div className="col-12 col-lg-6">
      <div className="text-white p-3 pb-5 bg-opacity-50 rounded d-flex flex-column gap-2">
       <h1 className="display-4 fw-bold">
        {translations[language].title}
        <span className="highlight"> {translations[language].highlight}</span>
       </h1>
       <p className="fs-4 fw-bold">{translations[language].paragraph1}</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default HeroSections;