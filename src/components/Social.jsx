import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Social.css';
import { RiWhatsappLine} from "react-icons/ri";

function Social() {
 return (
  <>
   <div className="social-fixed">
    <a
     href="https://wa.me/+994105291829"
     target="_blank"
     rel="noreferrer"
     className="social-btn whatsapp"
    >
     <RiWhatsappLine />
    </a>
   </div>
  </>
 )
}

export default Social