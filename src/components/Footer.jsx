import React from 'react';
import './css/Footer.css';
import 'remixicon/fonts/remixicon.css';

function Footer({ language }) {
 const translations = {
  AZ: {
   heading: "Əlaqə məlumatları",
   schedule: "Xidmətimizin gündəlik iş qrafiki bazar ertəsindən cümə gününədək saat 9:00-dan 18:00-dəkdir, GMT+4. Genişləndirilmiş iş saatlarından bizim Premium müştərilərimiz faydalana bilər.",
   addressTitle: "Ünvan",
   address: "Bülbül Pr42, Jale Plaza, 5-ci mərtəbə",
   phoneTitle: "Telefonlar",
   phone: "010 529 18 29",
   emailTitle: "E-mail",
   email: "info@bytech.az"
  },
  EN: {
   heading: "Contact Information",
   schedule: "Our service operates daily from Monday to Friday, 9:00 AM to 6:00 PM, GMT+4. Extended hours are available for our Premium clients.",
   addressTitle: "Address",
   address: "Bülbül Pr42, Jale Plaza, 5th floor",
   phoneTitle: "Phones",
   phone: "010 529 18 29",
   emailTitle: "E-mail",
   email: "info@bytech.az"
  }
 };

 const content = translations[language] || translations.AZ;

 return (
  <footer className='container-fluid bg-dark text-white py-5 d-flex flex-column gap-5'>

   <div className='text-center px-3'>
    <h1 className='fw-bold fs-1'>{content.heading}</h1>
    <p className='fs-5 mx-auto text1'>{content.schedule}</p>
   </div>

   <div className='d-flex flex-wrap justify-content-around card-box'>

    <div className='d-flex flex-column align-items-center gap-3'>
     <div className='rounded-circle d-flex align-items-center justify-content-center bg-primary icon-container'>
      <i className="ri-map-pin-line fs-2"></i>
     </div>
     <h3 className='fs-4 fw-bold'>{content.addressTitle}</h3>
     <p className='fs-5 text-center'>{content.address}</p>
    </div>

    <div className='d-flex flex-column align-items-center gap-3'>
     <div className='rounded-circle d-flex align-items-center justify-content-center bg-primary icon-container'>
      <i className="ri-phone-line fs-2"></i>
     </div>
     <h3 className='fs-4 fw-bold'>{content.phoneTitle}</h3>
     <p className='fs-5 text-center'>{content.phone}</p>
    </div>

    <div className='d-flex flex-column align-items-center gap-3'>
     <div className='rounded-circle d-flex align-items-center justify-content-center bg-primary icon-container'>
      <i className="ri-mail-line fs-2"></i>
     </div>
     <h3 className='fs-4 fw-bold'>{content.emailTitle}</h3>
     <p className='fs-5 text-center'>{content.email}</p>
    </div>

   </div>
  </footer>
 );
}

export default Footer;