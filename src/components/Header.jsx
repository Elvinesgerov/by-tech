import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import './css/Header.css';

function Header({ language, setLanguage }) {
 const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
 const location = useLocation();

 useEffect(() => {
  document.body.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  localStorage.setItem("theme", darkMode ? "dark" : "light");
 }, [darkMode]);

 const translations = {
  AZ: { home: "Ana Səhifə", services: "Xidmətlər", about: "Haqqımızda", careers: "Vakansiya", contact: "Əlaqə", admin: "Portfolio" },
  EN: { home: "Home", services: "Services", about: "About Us", careers: "Vacancy", contact: "Contact", admin: "Portfolio" }
 };

 const handleLanguageChange = (e) => {
  const selectedLang = e.target.value;
  setLanguage(selectedLang);
  localStorage.setItem("language", selectedLang);
 };

 const activeLink = location.pathname === "/about" ? "about" : "home";

 return (
  <header>
   <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-nav"}`}>
    <div className="container">
     <img src={Logo} className="logo-img navbar-brand" alt="Logo" />
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
       <li className="nav-item">
        <Link to="/" className={`nav-link fw-bold ${activeLink === "home" ? "active-link" : ""}`}>
         {translations[language].home}
        </Link>
       </li>
       <li className="nav-item">
        <a href="#" className={`nav-link fw-bold`}>
         {translations[language].services}
        </a>
       </li>
       <li className="nav-item">
        <Link to="/about" className={`nav-link fw-bold ${activeLink === "about" ? "active-link" : ""}`}>
         {translations[language].about}
        </Link>
       </li>
       <li className="nav-item">
        <a href="#" className={`nav-link fw-bold`}>
         {translations[language].careers}
        </a>
       </li>
       <li className="nav-item">
        <a href="#" className={`nav-link fw-bold`}>
         {translations[language].contact}
        </a>
       </li>
       <li className="nav-item">
        <a href="https://my-platforum.vercel.app/" target="_blank" className={`nav-link fw-bold`}>
         {translations[language].admin}
        </a>
       </li>
      </ul>

      <div className="d-flex align-items-center gap-3">
       <select className="form-select py-1" value={language} onChange={handleLanguageChange}>
        <option value="AZ">AZ</option>
        <option value="EN">EN</option>
       </select>

       <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="darkModeSwitch" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
        <label className="form-check-label" htmlFor="darkModeSwitch">{darkMode ? "Light" : "Dark"}</label>
       </div>
      </div>
     </div>
    </div>
   </nav>
  </header>
 );
}

export default Header;