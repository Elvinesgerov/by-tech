import React from 'react';
import İmage1 from "../assets/HostingEmail.webp";
import İmage2 from "../assets/kameralar.jpg";
import İmage3 from "../assets/sebeke.webp";
import İmage4 from "../assets/cloud.webp";
import İmage5 from "../assets/website.jpg";
import İmage6 from "../assets/app.webp";
import İmage7 from "../assets/Qrafik.jpg";
import İmage8 from "../assets/uxdizayner.jpg";
import foto1 from "../assets/foto1.svg";
import foto2 from "../assets/foto2.svg";
import foto3 from "../assets/foto3.svg";
import foto4 from "../assets/foto4.svg";
import foto6 from "../assets/foto6.svg";
import foto7 from "../assets/foto7.svg";
import foto8 from "../assets/foto8.svg";
import foto10 from "../assets/foto10.svg";
import './css/Services.css';

function Services({ language }) {
  const translations = {
    AZ: {
      title: "Xidmətlər",
      cards: [
        "Hosting və E-poçt dəstəyi",
        "Təhlükəsizlik kameraları",
        "Şəbəkə Xidməti",
        "Cloud Server",
        "Web Saytların hazırlanması",
        "Tətbiqlərin Hazırlanması",
        "Qrafik Dizayner",
        "UX/UI Dizayner"
      ]
    },
    EN: {
      title: "Services",
      cards: [
        "Hosting and Email Support",
        "Security Cameras",
        "Network Service",
        "Cloud Server",
        "Website Development",
        "App Development",
        "Graphic Designer",
        "UX/UI Designer"
      ]
    }
  };

  const SERVICES = {
    AZ: [
      { title: "Uzaqdan və Lokal dəstək", frontImg: foto1, backText: "İşinizin xüsusiyyətini nəzərə alaraq Sizə dəyişdirilməsi mümkün olan xidmət paketi təqdim edirik." },
      { title: "İstifadəçi və sorğu xidmətinin dəstəyi", frontImg: foto2, backText: "Sorğu xidmətinin ixtisaslaşmış mütəxəssis komandası müştərilərimizin qayğısına qalır." },
      { title: "24/7 aktiv monitorinq", frontImg: foto3, backText: "İnfrastrukturun aktiv monitorinqini həyata keçirməklə problemləri aradan qaldırırıq." },
      { title: "Cisco mütəxəssis komandası", frontImg: foto4, backText: "CCİE, CCNP və CCNA sertifikatlı mühəndis komandası təhlükəsiz şəbəkə infrastrukturu quracaq." },
      { title: "Server infrastrukturu", frontImg: foto6, backText: "Server infrastrukturunu layihələşdirir, inkişaf etdirir və dəstəkləyirik." },
      { title: "Domein Satışı", frontImg: foto7, backText: "Biz sizə ən yaxşı domenləri təqdim edirik və biznesinizi rəqəmsal dünyada önə çıxarırıq." },
      { title: "Mobil Tətbiqlərin hazırlanması", frontImg: foto8, backText: "iOS və Android tətbiqlərini yüksək performansla hazırlayırıq." },
      { title: "Web Saytların hazırlanması", frontImg: foto10, backText: "SEO optimizasiya olunmuş və istifadəçi dostu saytlar hazırlayırıq." },
    ],
    EN: [
      { title: "Remote and Local Support", frontImg: foto1, backText: "We offer customizable service packages tailored to your business needs." },
      { title: "User and Help Desk Support", frontImg: foto2, backText: "Our specialized help desk team takes care of our customers." },
      { title: "24/7 Active Monitoring", frontImg: foto3, backText: "We actively monitor infrastructure to resolve issues proactively." },
      { title: "Cisco Specialist Team", frontImg: foto4, backText: "Our CCIE, CCNP, and CCNA certified engineers build secure network infrastructure." },
      { title: "Server Infrastructure", frontImg: foto6, backText: "We design, develop, and support server infrastructures." },
      { title: "Domain Sales", frontImg: foto7, backText: "We provide reliable domains to strengthen your business online." },
      { title: "Mobile App Development", frontImg: foto8, backText: "We develop high-performance iOS and Android applications." },
      { title: "Website Development", frontImg: foto10, backText: "We build modern, SEO-friendly, and user-friendly websites." },
    ]
  };

  return (
    <>
      <div className="container-fluid py-5 services-container" id="services">
        <h2 className="text-center mb-5 text-white fs-1">{translations[language].title}</h2>
        <div className="row g-4 flex-wrap">
          {[İmage1, İmage2, İmage3, İmage4, İmage5, İmage6, İmage7, İmage8].map((img, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
                  url(${img})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                <h1 className="fs-4 fw-bold p-2 rounded-3">{translations[language].cards[index]}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="services-wrapper dark-color"
        style={{ background: "linear-gradient(135deg, #4795A0, #083A5F)" }}>
        <div className="container">
          <div className="row justify-content-center">
            {SERVICES[language].map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img className="w-50" src={service.frontImg} alt={service.title} />
                      <h1 className="fs-5 mt-5 fw-bold">{service.title}</h1>
                    </div>
                    <div className="flip-card-back">
                      <img className="w-50" src={service.frontImg} alt={service.title} />
                      <h1 className="fs-5 mt-5 fw-bold">{service.title}</h1>
                      <p>{service.backText}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;