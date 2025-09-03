import React from 'react';
import './css/HeroSections.css';
import BackgroundImage from '../assets/teamfoto.webp';

function HeroSections({ language }) {
 const translations = {
  AZ: {
   title: "SİZİN ETİBAR EDƏ BİLƏCƏKİSİNİZ",
   highlight: "BYTech KOMANDASI",
   paragraph1: "Biz Sizin biznes prosseslərinizin məhsuldarlığını yüksəldəcək xidmətlər təklif edirik.",
   paragraph2: "İcazə verin Sizə səmərəli işləməyin yollarını göstərək."
  },
  EN: {
   title: "YOUR TRUSTWORTHY",
   highlight: "BYTech TEAM",
   paragraph1: "We provide services that will increase the efficiency of your business processes.",
   paragraph2: "Let us show you ways to work efficiently."
  }
 };

 return (
  <div
   className="d-flex align-items-center w-100"
   style={{
    backgroundImage: `url(${BackgroundImage})`,
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
       <p className="fs-4 fw-bold">{translations[language].paragraph2}</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default HeroSections;