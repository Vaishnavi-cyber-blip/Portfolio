import "./WorkEx.css"
// import React from 'react'
// import { Link } from "react-router-dom"
import React4 from "../assets/msrf.png"

// const WorkEx = () => {
//     return (
//         // <div>
//         //     <h1 className="heading">- WORK EXPERIENCE -</h1>
//         //     <p className="name"> MADRAS SCIENTIFIC RESEARCH ORGANIZATION </p>
//         //     <p className="ml">Machine Learning Intern</p>
//         //     <p> ~ Creating unique, simple-to-understand, and user-friendly content</p>
//         //     <p> ~  Editing and proofreading new content before publication</p>
//         //     <p> ~ In the last two weeks worked as a mentor for the fresh batch.</p>



//         // </div>

//         <div className="WorkEx">
//             <h1>- WORK EXPERIENCE -</h1>
//             <div className="left">
                
                
//                 <h4>MADRAS SCIENTIFIC RESEARCH ORGANIZATION</h4>
//                 <p> ~ Creating unique, simple-to-understand, and user-friendly content</p>
//                 <p> ~  Editing and proofreading new content before publication</p>
//                 <p> ~ In the last two weeks worked as a mentor for the fresh batch.</p>
//                 <Link to="/contact">
//                     <button className="btn">Contact</button>
//                 </Link>
//             </div>

//             <div className="right">
//                 <div className="img-stack top">
//                     <img src={React4} className="intro" alt="true" />
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default WorkEx


// import React from 'react';


// const WorkExperience = () => {
//   return (
//     <div className="work-experience">
//       <h1>Work Experience</h1>
//       <div className="job">
//         <h4>Web Developer</h4>
//         <p className="company">ABC Company</p>
//         <p className="date">Jan 2021 - Present</p>
//         <ul className="responsibilities">
//           <li>Develop and maintain company website using React and CSS</li>
//           <li>Collaborate with team members to improve website functionality and user experience</li>
//           <li>Create and maintain documentation for website code and design</li>
//         </ul>
//       </div>
//       <div className="logo">
//         <img src={React4} className="intro2" alt="true"/>

//       </div>
//     </div>
//   );
// };

// export default WorkExperience;



// import React from 'react';


// const WorkExperience = () => {
//   return (
//     <div className="work-experience">
//       <h2>Work Experience</h2>
//       <div className="job">
//         <div className="company-logo">
//           <img src={React4} alt="Company logo" />
//         </div>
//         <div className="job-details">
//           <h3>Machine Learning Intern</h3>
//           <p className="company">Madras Scientific Research Organisation</p>
//           <p className="date">19/07/2021 to 20/09/2021</p>
//           <ul className="responsibilities">
//             <li>Working on deep learning</li>
//             <li>Implementing machine learning algorithms</li>
            
//             <li>Creating unique, simple-to-understand, and user-friendly content</li>
//             <li>Researching solutions from machine learning papers and journals</li>
//             <li>In the last two weeks worked as a mentor for the fresh batch.</li>
            
            
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkExperience;


import React from 'react';


const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2 className="head1">- WORK EXPERIENCE -</h2>
      <div className="job">
        <div className="company-logo">
          <img src={React4} alt="Company logo" />
        </div>
        <div className="job-details">
          <h3>Machine Learning Intern</h3>
          <p className="company">Madras Scientific Research Organisation</p>
          <p className="date">19/07/2021 to 20/09/2021</p>
          <ul className="responsibilities">
            <li>Working on deep learning</li>
            <li>Implementing machine learning algorithms</li>
            
            <li>Creating unique, simple-to-understand, and user-friendly content</li>
            <li>Researching solutions from machine learning papers and journals</li>
            <li>In the last two weeks worked as a mentor for the fresh batch.</li>
            
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;




