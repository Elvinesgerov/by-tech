import './css/CommentSwiper.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

function CommentSwiper({ language }) {
 const translations = {
  AZ: {
   heading: "Müştərilərimizin dedikləri...",
   slides: [
    { text: "Bakıda bizim üçün etdiklərinizdən məmnunuq. Başqa ölkələrdə də sizin kimi komandalar tapmaq istərdik.", name: "Ivan Jensen", position: "International", img: img1 },
    { text: "Operativ dəstək göstərməyiniz əladır! Köməyinizə görə təşəkkür edirik!", name: "Elur Aliyev", position: "ASCO", img: img2 },
    { text: "BYTech-in təqdim etdiyi xidmətlərdən razıyıq. Komandanız peşəkar İT xidmət göstərməklə yanaşı, həm də xərclərimizə qənaət etməkdə bizə kömək edir.", name: "Orkhan Mammadov", position: "ProlinkCaspian", img: img3 },
    { text: "Dəstəyinizə görə təşəkkür edirik! Etibarlı və səmərəli komandadır. Harda oluramsa-olum onlara arxayıman. Əla işdir!", name: "Colin Mackay", position: "LaserGulf", img: img4 },
    { text: "Köməyinizə görə sağ olun! Olduqca peşəkardır. Komandanızı təkidlə hər kəsə tövsiyə edirəm!", name: "Stu Gerrard", position: "Enermech", img: img5 },
    { text: "Operativliyə görə Sizə təşəkkür edirik. Uşaqlar, İT məsələlərimizin həllində bizə əla kömək edirsiniz.", name: "Arnoud Govaert", position: "AA Services", img: img6 }
   ]
  },
  EN: {
   heading: "What our clients say...",
   slides: [
    { text: "We are satisfied with what you have done for us in Baku. We would love to find teams like yours in other countries as well.", name: "Ivan Jensen", position: "International", img: img1 },
    { text: "Your operational support is excellent! Thank you for your help!", name: "Elur Aliyev", position: "ASCO", img: img2 },
    { text: "We are pleased with BYTech services. Your team provides professional IT services and helps us save costs.", name: "Orkhan Mammadov", position: "ProlinkCaspian", img: img3 },
    { text: "Thank you for your support! Reliable and efficient team. Wherever I am, I trust them. Great job!", name: "Colin Mackay", position: "LaserGulf", img: img4 },
    { text: "Thanks for your help! Very professional. I strongly recommend your team to everyone!", name: "Stu Gerrard", position: "Enermech", img: img5 },
    { text: "Thanks for your efficiency. Guys, you are excellent in solving our IT issues.", name: "Arnoud Govaert", position: "AA Services", img: img6 }
   ]
  }
 };

 const content = translations[language];

 return (
  <div className="container py-5">
   <h1 className="text-center fs-1">{content.heading}</h1>

   <Swiper
    modules={[Autoplay]}
    className="commentSwiper"
    autoplay={{
     delay: 4000,
     disableOnInteraction: false,
    }}
   >
    {content.slides.map((slide, index) => (
     <SwiperSlide key={index} className={`${index % 2 === 0 ? "odd" : "even"} p-4 flex-column gap-2 mt-5`}>
      <div className="container">
       <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
         <p className="text-white fs-5 fw-bold">{slide.text}</p>
         <i className="ri-arrow-down-line text-white fs-4 fw-bold d-block my-2"></i>
         <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
          <img className="comment-img" src={slide.img} alt={slide.name} />
          <div>
           <h3 className="text-white fw-bold mb-0">{slide.name}</h3>
           <p className="text-white fw-semibold">{slide.position}</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
}

export default CommentSwiper;