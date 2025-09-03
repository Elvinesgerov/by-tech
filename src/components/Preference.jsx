import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "./css/Preference.css";

function Preference({ language }) {
 const translations = {
  AZ: {
   heading: "Niyə məhz byTech?",
   subheading: "Biz zəmanət veririk.",
   items: [
    { title: "PERSONALLA BAĞLI HEÇ BİR ÇƏTİNLİK YOXDUR", icon: "ri-user-line", text: "Personalla əlaqə qurmaq və suallarınıza cavab almaq prosesi sadə və rahatdır." },
    { title: "MƏLUMATLARINIZ TƏHLÜKƏSİZLİKDƏDİR", icon: "ri-folder-line", text: "Məlumatlarınız hər zaman onlara ehtiyacınız yarandığı yerdədir." },
    { title: "ŞƏBƏKƏNİZ QORUNUR", icon: "ri-lock-line", text: "Şirkətiniz üçün son dərəcə vacib olan məlumatların kimlər üçün əlçatan olduğunu hər zaman bilin." },
    { title: "ZƏNGİNİZ HƏR ZAMAN QƏBUL EDİLƏCƏK", icon: "ri-customer-service-line", text: "Peşəkar dəstək komandası harada olmağınızdan asılı olmayaraq, Sizə kömək etməyə hazırdır." },
    { title: "ARTIQ XƏRCSİZ BÜTÖV BİR İT ŞÖBƏSİ", icon: "ri-user-community-line", text: "Diqqətinizi biznesinizə yönəldin, İT personalın idarə olunmasına yox." },
    { title: "HEÇ BİR GİZLİ ÖDƏMƏ YOXDUR", icon: "ri-exchange-dollar-line", text: "Biz heç zaman sürprizlər etmirik. Hər zaman İT-nizin neçəyə və niyə bu qiymətə olduğunu bilirsiniz." },
    { title: "KOMANDA İŞİ", icon: "ri-24-hours-line", text: "Komanda işi sayəsində hər kəsin bacarığı birləşir və daha güclü nəticələr əldə edilir." },
    { title: "WEB SAYT VƏ APP HAZIRLANMASI", icon: "ri-code-line", text: "Müasir Veb Saytlar və Mobil Tətbiqlər Hazırlayırıq" }
   ]
  },
  EN: {
   heading: "Why byTech?",
   subheading: "We guarantee.",
   items: [
    { title: "NO DIFFICULTY WITH STAFF", icon: "ri-user-line", text: "The process of communicating with staff and getting answers is simple and convenient." },
    { title: "YOUR DATA IS SAFE", icon: "ri-folder-line", text: "Your data is always available where you need it." },
    { title: "YOUR NETWORK IS PROTECTED", icon: "ri-lock-line", text: "Always know who has access to your company's most important information." },
    { title: "YOUR CALL WILL ALWAYS BE ANSWERED", icon: "ri-customer-service-line", text: "Our professional support team is ready to help you anytime, anywhere." },
    { title: "A WHOLE IT DEPARTMENT WITHOUT EXTRA COST", icon: "ri-user-community-line", text: "Focus on your business, not on managing IT staff." },
    { title: "NO HIDDEN FEES", icon: "ri-exchange-dollar-line", text: "We never surprise you. You always know what and why you are paying for IT." },
    { title: "TEAMWORK", icon: "ri-24-hours-line", text: "Thanks to teamwork, everyone's skills are combined to achieve stronger results." },
    { title: "WEB & APP DEVELOPMENT", icon: "ri-code-line", text: "We create modern Websites and Mobile Applications." }
   ]
  }
 };

 const content = translations[language];

 return (
  <div className="preference-box w-100 h-auto d-flex flex-column gap-3 align-items-center">
   <div className="text-center mb-5 d-flex flex-column gap-4">
    <h2 className="text-color">{content.heading}</h2>
    <h4 className="text-color">{content.subheading}</h4>
   </div>

   <div className="container">
    <div className="row justify-content-center">
     {content.items.map((item, index) => (
      <div
       key={index}
       className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
      >
       <div className="card text-center w-100 card-box-container d-flex flex-column justify-content-between gap-3">
        <i className={`${item.icon} image-color mb-3 fs-2`} />
        <h5 className="fs-5 image-color">{item.title}</h5>
        <p className="fs-5 image-color">{item.text}</p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default Preference;