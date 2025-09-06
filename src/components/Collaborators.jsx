import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import './css/Advertising.css';
import img1 from "../assets/face.png";
import img2 from "../assets/mado.png";
import img3 from "../assets/montale.png";
import img4 from "../assets/ozsut.png";
import img5 from "../assets/turizim.png";
import img6 from "../assets/ulduzum.png";
import img7 from "../assets/vitam.png";

function Collaborators({ language }) {

 const translations = {
  AZ: {
   heading: "Əməkdaşlar"
  },
  EN: {
   heading: "Collaborators"
  }
 };

 const clients = [img1, img2, img3, img4, img5, img6, img7];
 const content = translations[language] || translations.AZ;

 return (
  <div>
   <h1 className='text-center fs-2 fw-bold mt-5'>{content.heading}</h1>
   <Swiper
    spaceBetween={30}
    modules={[Autoplay]}
    autoplay={{ delay: 2700, disableOnInteraction: false }}
    className="advertising-swiper mt-5 mb-5 pt-5"
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
 )
}

export default Collaborators