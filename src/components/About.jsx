import React from 'react';
import foto from "../assets/aboutfoto.jpg";
import Footer from './Footer';
import './css/About.css';

function About({ language }) {
 const translations = {
  AZ: {
   aboutTitle: "BYTech Haqqında",
   aboutSince: "2018-ci ildən",
   aboutText: "Biz Azərbaycanda aparıcı İT həlləri təminatçısıyıq və biznes uğurunu təmin edən innovativ texnoloji xidmətlər göstərməyə həsr olunmuşuq.",

   mission: "Missiyamız",
   missionText: "Müəssisələrə öz potensiallarını tam reallaşdırmağa imkan verən innovativ İT həlləri təqdim etmək. Biz müştərilərimizin inkişafını və uğurunu təmin edən etibarlı, səmərəli və müasir texnoloji xidmətlər göstərməyə sadiqik.",

   vision: "Vizyonumuz",
   visionText: "Mükəmməlliyi, innovasiyası və müştəri uğuruna sadiqliyimizlə tanınan Azərbaycanın aparıcı İT həlləri təminatçısı olmaq. Biz regionda texnoloji xidmətlərin gələcəyini formalaşdırmağı hədəfləyirik.",

   timeline: [
    { year: "2018", text: "Azərbaycanda İT xidmətlərini transformasiya etmək vizyonu ilə təsis edildi" },
    { year: "2020", text: "İnnovativ bulud həlləri və uzaqdan dəstək xidmətlərini təqdim etdik" },
    { year: "2019", text: "Veb saytların hazırlanması və inkişafı başladı" },
    { year: "2023", text: "Mobil App-lar hazırlanması başladı" }
   ]
  },
  EN: {
   aboutTitle: "About BYTech",
   aboutSince: "Since 2018",
   aboutText: "We are a leading IT solutions provider in Azerbaijan, dedicated to delivering innovative technology services that drive business success.",

   mission: "Our Mission",
   missionText: "To deliver innovative IT solutions that enable businesses to fully realize their potential. We are committed to providing reliable, efficient, and modern technology services that support our clients’ growth and success.",

   vision: "Our Vision",
   visionText: "To be recognized as Azerbaijan's leading IT solutions provider, known for excellence, innovation, and commitment to customer success. We aim to shape the future of technology services in the region.",

   timeline: [
    { year: "2018", text: "Founded with a vision to transform IT services in Azerbaijan" },
    { year: "2020", text: "Introduced innovative cloud solutions and remote support services" },
    { year: "2019", text: "Started developing and delivering websites" },
    { year: "2023", text: "Began developing Mobile Applications" }
   ]
  }
 };

 const t = translations[language];

 return (
  <>
   {/* 1-ci hissə */}
   <div className="container-fluid row align-items-center p-5 justify-content-around">
    {/* Text */}
    <div className="col-12 col-md-6 d-flex flex-column gap-3 mt-4">
     <h1 className="fw-bold fs-1 text-info">{t.aboutTitle}</h1>
     <h3 className="fw-bold fs-4 text-black">{t.aboutSince}</h3>
     <p className="fw-bold fs-5 text-light-emphasis">{t.aboutText}</p>
    </div>

    {/* Şəkil */}
    <div className="col-12 col-md-5 d-flex justify-content-center mt-4">
     <img className="img-fluid rounded-4" src={foto} alt="about" />
    </div>
   </div>

   {/* Missiya və Vizyon */}
   <div className="container-fluid about-box row gap-4 p-4 justify-content-center">
    <div className="col-12 col-md-6 bg-white p-4 rounded-4">
     <h2 className="fw-bold fs-4 text-info">{t.mission}</h2>
     <p className="fw-bold fs-5 text-black mt-4">{t.missionText}</p>
    </div>
    <div className="col-12 col-md-6 bg-white p-4 rounded-4">
     <h2 className="fw-bold fs-4 text-info">{t.vision}</h2>
     <p className="fw-bold fs-5 text-black mt-4">{t.visionText}</p>
    </div>
   </div>

   {/* Timeline hissəsi */}
   <div className="container-fluid main-container d-flex flex-wrap justify-content-center align-items-start">
    {/* Sol tərəf */}
    <div className="left-box d-flex flex-column align-items-center text-center">
     <div className="gap-2 d-flex flex-column align-items-center text-center">
      <h1 className="fw-bold fs-4 text-info">{t.timeline[0].year}</h1>
      <p className="fw-bold fs-5 w-75">{t.timeline[0].text}</p>
     </div>
     <div className="gap-2 d-flex flex-column left-box-top align-items-center text-center">
      <h1 className="fw-bold fs-4 text-info">{t.timeline[1].year}</h1>
      <p className="fw-bold fs-5 w-75">{t.timeline[1].text}</p>
     </div>
    </div>

    {/* Sağ tərəf */}
    <div className="right-box d-flex flex-column align-items-center text-center">
     <div className="gap-2 d-flex flex-column align-items-center text-center">
      <h1 className="fw-bold fs-4 text-info">{t.timeline[2].year}</h1>
      <p className="fw-bold fs-5 w-75">{t.timeline[2].text}</p>
     </div>
     <div className="gap-2 d-flex flex-column left-box-top align-items-center text-center">
      <h1 className="fw-bold fs-4 text-info">{t.timeline[3].year}</h1>
      <p className="fw-bold fs-5 w-75">{t.timeline[3].text}</p>
     </div>
    </div>
   </div>

   <Footer language={language} />
  </>
 );
}

export default About;