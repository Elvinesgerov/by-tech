import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import Header from './components/Header';
import HeroSections from './components/HeroSections';
import Zero from './components/Zero';
import Services from './components/Services';
import ScrollTopButton from './components/ScrollTopButton';
import Social from './components/Social';
import Preference from './components/Preference';
import SwiperComponent from './components/SwiperComponent';
import Offer from './components/Offer';
import CommentSwiper from './components/CommentSwiper';
import Team from './components/Team';
import Advertising from './components/Advertising';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "AZ");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const HomePage = () => (
    <>
      <HeroSections language={language} />
      <SwiperComponent />
      <Zero language={language} />
      <Services language={language} />
      <ScrollTopButton />
      <Social />
      <Preference language={language} />
      <Offer language={language} />
      <CommentSwiper language={language} />
      <Team language={language} />
      <Advertising language={language} />
      <Footer language={language} />
    </>
  );

  return (
    <Router>
      <Header language={language} setLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;