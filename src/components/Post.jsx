import React, { useEffect } from 'react';
import './css/Post.css';
import 'remixicon/fonts/remixicon.css';

function Post() {
 useEffect(() => {
  if (!document.getElementById('instagram-embed-script')) {
   const script = document.createElement('script');
   script.src = "https://www.instagram.com/embed.js";
   script.async = true;
   script.id = 'instagram-embed-script';
   document.body.appendChild(script);
  } else {
   window.instgrm?.Embeds?.process();
  }
 }, []);

 const blockquoteStyle = {
  margin: "10px auto",
  width: "100%",
  maxWidth: "540px",
 };

 return (
  <div className='container py-5'>
   {/* Header */}
   <div className='d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-5 text-center text-md-start'>
    <div className='logo-box bg-black d-flex align-items-center justify-content-center rounded-circle'>
     <i className="ri-instagram-fill fs-4 text-white"></i>
    </div>
    <a
     href="https://www.instagram.com/thebytech.az"
     target="_blank"
     rel="noopener noreferrer"
     className='text-info fs-4 fw-bold'
    >
     thebytech.az
    </a>
   </div>

   {/* Instagram posts */}
   <div className='row justify-content-center gap-4 post-box'>
    {[
     "https://www.instagram.com/p/DKr7-3ZCV--/",
     "https://www.instagram.com/p/DKfaCb9CZsb/",
     "https://www.instagram.com/p/DKd-fn9iFqV/",
     "https://www.instagram.com/p/DKd9FDViyrL/"
    ].map((link, index) => (
     <div key={index} className='col-12 col-sm-6 col-lg-4'>
      <blockquote
       className="instagram-media"
       data-instgrm-captioned
       data-instgrm-permalink={link}
       data-instgrm-version="14"
       style={blockquoteStyle}
      ></blockquote>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Post;