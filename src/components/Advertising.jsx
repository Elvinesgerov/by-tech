import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './css/Advertising.css';
import img1 from "../assets/metro.png";
import img2 from "../assets/azerpoct.png";
import img3 from "../assets/azersun.jpg";
import img4 from "../assets/kapital.jpg";
import img5 from "../assets/nar.jpeg";

function Advertising({ language }) {
 const translations = {
  AZ: {
   heading: "Müştərilərimiz"
  },
  EN: {
   heading: "Our Clients"
  }
 };

 const clients = [img1, img2, img3, img4, img5, img1, img2];
 const content = translations[language] || translations.AZ;

 return (
  <div>
   <h1 className='text-center fs-2 fw-bold mt-5'>{content.heading}</h1>
   <Swiper
    spaceBetween={30}
    pagination={{ clickable: true }}
    modules={[Pagination, Autoplay]}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    className="advertising-swiper mt-5 pt-5"
    breakpoints={{
     0: { slidesPerView: 1 },
     600: { slidesPerView: 2 },
     768: { slidesPerView: 3 }
    }}
   >
    {clients.map((client, index) => (
     <SwiperSlide key={index} className="advertising-slide">
      <img src={client} alt={`Client ${index + 1}`} />
     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
}

export default Advertising;
