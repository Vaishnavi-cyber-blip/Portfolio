
import React from 'react';
import "./BlogStyling.css"

const Blog  = () => {

    
  return (
    <div className="b-card">
        <h1 className="head"> - BLOGS -</h1>
        <div className="blogs-container">
           
           <div className="blog-card">
            
             <figure>
               <a href="https://drive.google.com/file/d/1QUD-AD2vPPm0Acdq76R-93UK4SM-RK7w/view?usp=share_link">
                 <img src="https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Your Blog Title" />
               </a>
             </figure>
             <div className="blog-content">
               <div className="blog-topic">
                 <a href="https://drive.google.com/file/d/1QUD-AD2vPPm0Acdq76R-93UK4SM-RK7w/view?usp=share_link">Light GBM</a>
               </div>
               <h3 className="blog-title">
                 <a href="https://drive.google.com/file/d/1g-EOEzfl99STFV7q2hDpY2IBrULGTW6O/view?usp=sharing">The High-Performance Gradient Boosting Framework You Need to Know</a>
               </h3>
               <div className="blog-footer">
                 <a className="blog-category" href="https://drive.google.com/file/d/1g-EOEzfl99STFV7q2hDpY2IBrULGTW6O/view?usp=sharing">Open-Source framework</a>
                 
               </div>
             </div>
           </div>
           <div className="blog-card">
             <figure>
               <a href="https://drive.google.com/file/d/1QUD-AD2vPPm0Acdq76R-93UK4SM-RK7w/view?usp=share_link">
                 <img src="https://images.unsplash.com/photo-1642621668575-93550304b614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="Your Blog Title" />
               </a>
             </figure>
             <div className="blog-content">
               <div className="blog-topic">
                 <a href="https://drive.google.com/file/d/1QUD-AD2vPPm0Acdq76R-93UK4SM-RK7w/view?usp=share_link">Stocks price</a>
               </div>
               <h3 className="blog-title">
                 <a href="https://drive.google.com/file/d/1QUD-AD2vPPm0Acdq76R-93UK4SM-RK7w/view?usp=share_link">Analyzing Market Trends: Predictions for Stocks</a>
               </h3>
               <div className="blog-footer">
                 <a className="blog-category" href="https://drive.google.com/file/d/1QUD-AD2vPPm0Acdq76R-93UK4SM-RK7w/view?usp=sharing">Stocks prediction</a>
                 
               </div>
             </div>
           </div>
           <div className="blog-card">
             <figure>
               <a href="https://drive.google.com/file/d/1kNAxnvEfthsEcXx5YlfxkwPOggJUuxVt/view?usp=sharing">
                 <img src="https://images.unsplash.com/photo-1628435600697-6a954dea5055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Your Blog Title" />
               </a>
             </figure>
             <div className="blog-content">
               <div className="blog-topic">
                 <a href="https://drive.google.com/file/d/1kNAxnvEfthsEcXx5YlfxkwPOggJUuxVt/view?usp=sharing">Open CV</a>
               </div>
               <h3 className="blog-title">
                 <a href="https://drive.google.com/file/d/1kNAxnvEfthsEcXx5YlfxkwPOggJUuxVt/view?usp=sharing">From Grainy to Smooth: Using OpenCV for Image Smoothing and Blurring</a>
               </h3>
               <div className="blog-footer">
                 <a className="blog-category" href="https://drive.google.com/file/d/1kNAxnvEfthsEcXx5YlfxkwPOggJUuxVt/view?usp=sharing">working with images</a>
                 
               </div>
             </div>
           </div>
         </div>
        
    </div>
    
   
  );
}

export default Blog

