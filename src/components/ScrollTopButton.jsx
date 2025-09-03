import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

function ScrollTopButton() {
 const [visible, setVisible] = useState(false);

 useEffect(() => {
  const toggleVisibility = () => {
   if (window.pageYOffset > 400) {
    setVisible(true);
   } else {
    setVisible(false);
   }
  };
  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
 }, []);

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth"
  });
 };
 return (
  <>
   <button
    type="button"
    className={`btn btn-primary d-flex justify-content-center align-items-center rounded-circle position-fixed ${visible ? 'd-block' : 'd-none'}`}
    style={{ bottom: "20px", right: "20px", zIndex: 1000, width: "60px", height: "60px" }}
    onClick={scrollToTop}
   >
    <FaArrowUpLong />
   </button>
  </>
 )
}

export default ScrollTopButton