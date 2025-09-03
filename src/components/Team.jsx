import React, { useState, useEffect } from 'react';
import './css/Team.css';
import img2 from "../assets/asgarov.jpg";
import img3 from "../assets/manfoto.webp";
import img4 from "../assets/women foto.avif";

function Team() {
 const [language, setLanguage] = useState("AZ");

 useEffect(() => {
  const savedLang = localStorage.getItem("language") || "AZ";
  setLanguage(savedLang);
 }, []);

 const translations = {
  AZ: { heading: "Komandamız" },
  EN: { heading: "Our Team" }
 };

 const teamMembers = [
  { name: "Rashad Shrınov", role: "CEO", img: img2 },
  { name: "Elvin Asgarov", role: "Developer", img: img2 },
  { name: "Mike Johnson", role: "Technical Lead", img: img3 },
  { name: "Sarah Wilson", role: "Designer", img: img4 }
 ];

 return (
  <div className="container-fluid box mt-5 p-5 team-container">
   <h1 className="text-white text-center fs-2">{translations[language].heading}</h1>

   <div className="row mt-5 g-4 justify-content-center">
    {teamMembers.map((member, index) => (
     <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow">
       <div className="rounded-circle overflow-hidden">
        <img className="w-100 h-100 rounded-circle" src={member.img} alt={member.name} />
       </div>
       <h1 className="fs-4 fw-bold">{member.name}</h1>
       <p className="fs-5 fw-bold">{member.role}</p>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Team;