import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Social.css';
import { RiWhatsappLine, RiInstagramLine } from "react-icons/ri";

function Social() {
 return (
  <>
   <div className="social-fixed">
    <a
     href="https://wa.me/+994503851383"
     target="_blank"
     rel="noreferrer"
     className="social-btn whatsapp"
    >
     <RiWhatsappLine />
    </a>
    <a
     href="https://www.instagram.com/esgerov.060"
     target="_blank"
     rel="noreferrer"
     className="social-btn instagram"
    >
     <RiInstagramLine />
    </a>
   </div>
  </>
 )
}

export default Social