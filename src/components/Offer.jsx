import React from 'react';
import 'remixicon/fonts/remixicon.css';
import './css/Offer.css';

function Offer({ language }) {
 const translations = {
  AZ: {
   heading: "Biz sizə nə təklif edirik?",
   subheading: "Bu həqiqətən çox sadədir",
   paragraphs: [
    { text: "Biz sizin İT infrastrukturunuzun iş qabiliyyətini yüksək səviyyədə təmin edirik.", highlight: "HƏR ZAMAN." },
    { text: "Məlumatlarınızın qorunub saxlanılmasını təmin edirik.", highlight: "DAİMA." },
    { text: "Məlumatlarınızın təhlükəsizliyini təmin edirik.", highlight: "HƏQİQƏTƏN." },
    { text: "Sizə lazım olan dəstək və köməyi göstəririk.", highlight: "HƏR YERDƏ HƏR ZAMAN." }
   ],
   cards: [
    {
     icon: "ri-medal-line",
     title: "15 il bazarda",
     text: "Müxtəlif biznes mühitlərində zəngin təcrübəyə malik BYTech Sizin etibarlı İT partnyorunuza çevriləcək."
    },
    {
     icon: "ri-lightbulb-flash-line",
     title: "Daxili IT şöbəsindən daha ucuz",
     text: "Sizə şəxsi İT mütəxəssisinizdən də ucuz xidmət göstərəcək peşəkar İT komandası."
    },
    {
     icon: "ri-group-3-fill",
     title: "Sertifikatlaşdırılmış mütəxəssislər komandası",
     text: "İstənilən İT problemin həllində kömək etməyə hazır olan yüksək ixtisaslı və sertifikatlaşdırılmış mütəxəssislərdən ibarət komanda Sizin ixtiyarınızdadır."
    }
   ]
  },
  EN: {
   heading: "What do we offer you?",
   subheading: "It’s really simple",
   paragraphs: [
    { text: "We ensure the high-level performance of your IT infrastructure.", highlight: "ALWAYS." },
    { text: "We ensure the protection of your data.", highlight: "FOREVER." },
    { text: "We ensure the security of your information.", highlight: "TRULY." },
    { text: "We provide the support and help you need.", highlight: "ANYWHERE, ANYTIME." }
   ],
   cards: [
    {
     icon: "ri-medal-line",
     title: "15 years in the market",
     text: "With rich experience in various business environments, BYTech becomes your reliable IT partner."
    },
    {
     icon: "ri-lightbulb-flash-line",
     title: "Cheaper than an in-house IT department",
     text: "A professional IT team that provides services cheaper than your personal IT specialist."
    },
    {
     icon: "ri-group-3-fill",
     title: "Certified team of professionals",
     text: "A team of highly qualified and certified specialists ready to solve any IT problem is at your service."
    }
   ]
  }
 };

 const content = translations[language];

 return (
  <div className='container py-5'>
   <div className='text-center mb-5'>
    <h1 className='offer-text' style={{ color: "#212529" }}>{content.heading}</h1>
    <h3 style={{ color: "#212529" }}>{content.subheading}</h3>
   </div>

   <div className='text-center mb-5'>
    {content.paragraphs.map((p, index) => (
     <p key={index} className='text-secondary offer-p fs-5 fw-bold'>
      {p.text}
      <span className='fs- offer-span'> {p.highlight}</span>
     </p>
    ))}
   </div>

   <div className='row text-center g-4'>
    {content.cards.map((card, index) => (
     <div key={index} className='col-12 col-md-4 d-flex flex-column align-items-center'>
      <i className={`${card.icon} fs-1 fw-bold mb-2`}></i>
      <h5 className='fw-bold mb-2'>{card.title}</h5>
      <p className='fs-6' style={{ maxWidth: '400px' }}>{card.text}</p>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Offer;