import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './css/Swiper.css';
import Image1 from "../assets/mobiltetbiq.webp";
import Image2 from "../assets/sayithazirlanmasi.webp";

function SwiperComponent() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current)
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    if (progressContent.current)
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="swiper-wrapper-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${Image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '70vh',
          }}
        />
        <SwiperSlide
          style={{
            backgroundImage: `url(${Image1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '70vh',
          }}
        />

        <div className="autoplay-progress">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
