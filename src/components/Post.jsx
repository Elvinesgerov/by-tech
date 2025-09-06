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
  }
 }, []);

 const blockquoteStyle = {
  margin: "1px",
  maxWidth: "540px",
  minWidth: "326px",
  width: "99%",
 };

 return (
  <div className='container-fluid h-auto p-5'>
   <div className='w-100 d-flex gap-3 align-items-center justify-content-center mb-5'>
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

   <div className='d-flex justify-content-around flex-wrap mt-5 gap-5'>
    <blockquote
     className="instagram-media"
     data-instgrm-captioned
     data-instgrm-permalink="https://www.instagram.com/p/DKr7-3ZCV--/"
     data-instgrm-version="14"
     style={blockquoteStyle}
    ></blockquote>

    <blockquote
     className="instagram-media"
     data-instgrm-captioned
     data-instgrm-permalink="https://www.instagram.com/p/DKfaCb9CZsb/"
     data-instgrm-version="14"
     style={blockquoteStyle}
    ></blockquote>

    <blockquote
     className="instagram-media"
     data-instgrm-captioned
     data-instgrm-permalink="https://www.instagram.com/p/DKd-fn9iFqV/"
     data-instgrm-version="14"
     style={blockquoteStyle}
    ></blockquote>

    <blockquote
     className="instagram-media"
     data-instgrm-captioned
     data-instgrm-permalink="https://www.instagram.com/p/DKd9FDViyrL/"
     data-instgrm-version="14"
     style={blockquoteStyle}
    ></blockquote>
   </div>
  </div>
 );
}

export default Post;