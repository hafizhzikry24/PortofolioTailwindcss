// import React from "react";
// import design from "../assets/graduate.jpg";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import js from "../assets/js.png";
// import react from "../assets/react.png";
// import css from "../assets/css.png";
// import figma from "../assets/figma.png";
// import cisco2 from "../assets/image.png";
// import html from "../assets/html .png";
// import tailwind from "../assets/tailwind.png";
// import github from "../assets/github.png";
// import laravel from "../assets/laravel.png";

// const About = ({ theme }) => {
//   return (


//     <section
//       class="text-gray-600 body-font overflow-hidden bg-slate-100"
//       id="about"
//     >
//       <div class="container py-16 sm:py-28 mx-auto text-justify">
//         <div className="flex flex-col justify-center items-center w-full h-full shadow-box-shadow p-2 rounded-3xl mt-20 text-justify bg-slate-100 text-[#7c8cc2]">
//           <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            
//               <div className="sm:text-right pb-8 pl-4 ">
//                 <p className="text-4xl text-center font-bold inline border-b-4 border-pink-600">
//                   {" "}
//                   About{" "}
//                 </p>
//               </div>
           
//           </div>
//           <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
           
//               <div className="sm:text-right text-4xl ">
//                 <p className="text-xl sm:text-xl md:text-3xl">
//                   I am interested in a career and exploring things in the IT
//                   field, especially in the fields of Network architecture and
//                   Programming.
//                 </p>
//               </div>
            
         
//               <div className="mb-4">
             
//                   <img src={design} alt="" className="h-13 mx-auto " />
              
//                 <p className="leading-relaxed text-2xl md:text-3xl sm:text-xl ">
//                   Creative software developer and network engineer with more
//                   than 3+ years of experience as a freelance and . Proficient in
//                   Laravel, Tailwind CSS, ViteJS, and ReactJS .{" "}
//                 </p>
//               </div>
           
//           </div>
//         </div>
//         <div className=" grid grid-cols-3 lg:grid-cols-9 mt-24 px-12 gap-5 mx-auto  animate-bounce justify-center">
//           <img src={js} title="JavaScript" alt="" />
//           <img src={css} title="CSS" alt="" />
//           <img src={html} title="HTML" alt="" />
//           <img src={react} title="React" alt="" />
//           <img src={github} title="github" alt="" />
//           <img src={tailwind} title="tailwind" alt="" />
//           <img src={laravel} title="laravel" alt="" />
//           <img src={figma} title="Figma" alt="" />
//           <img src={cisco2} title="Cisco" alt="" className="py-3" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import design from "../assets/graduate.jpg";
import js from "../assets/js.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import cisco2 from "../assets/image.png";
import html from "../assets/html .png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import laravel from "../assets/laravel.png";

const About = ({ theme }) => {
  return (
    <section
      className="text-gray-600 body-font overflow-hidden bg-slate-100 py-40 sm:py-2"
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center w-full h-full bg-white p-8 rounded-2xl shadow-lg text-gray-800 ">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 mb-4">
              About
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-justify">
              <p className="text-xl md:text-2xl mb-4">
              I am eager to build a career in IT, focusing on both backend and frontend development. I thrive on creating efficient backend systems and crafting engaging front-end interfaces. I am committed to mastering the latest technologies and best practices to deliver high-quality, comprehensive solutions.
              </p>
            </div>
            <div className="flex-1 text-center md:text-left">
              <img src={design} alt="Design" className="w-64 mx-auto mb-4 rounded-lg shadow-md" />
              <p className="text-lg md:text-xl">
                Creative software developer and network engineer with over 3+ years of experience as a freelancer. Proficient in Laravel, Tailwind CSS, ViteJS, and ReactJS.
              </p>
            </div>
          </div>
          
          <div className=" grid grid-cols-3 lg:grid-cols-9 mt-24 px-12 gap-5 mx-auto  animate-bounce justify-center">
          <img src={js} title="JavaScript" alt="" />
          <img src={css} title="CSS" alt="" />
          <img src={html} title="HTML" alt="" />
          <img src={react} title="React" alt="" />
          <img src={github} title="github" alt="" />
          <img src={tailwind} title="tailwind" alt="" />
          <img src={laravel} title="laravel" alt="" />
          <img src={figma} title="Figma" alt="" />
          <img src={cisco2} title="Cisco" alt="" className="py-3" />
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
