import React from "react";
import design from "../assets/design.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
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
    // <section className="min-h-screen ml" id = "about">
    //   <div
    //     name="About"
    //     className={
    //       theme
    //         ? " md:text-2xl  w-full min-h-screen  shadow-box-shadow bg-[#ffffff] text-[#000000] font-bold p-8  "
    //         : " md:text-2xl  w-full min-h-screen bg-slate-100 text-[#7c8cc2] p-20  "
    //     }
    //   >
    //     <div className="flex flex-col justify-center items-center w-full h-full shadow-box-shadow p-2 rounded-3xl mt-20 text-justify">
    //       <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
    //         <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    //           <div className="sm:text-right pb-8 pl-4 ">
    //             <p className="text-4xl font-bold inline border-b-4 border-pink-600">
    //               {" "}
    //               About{" "}
    //             </p>
    //           </div>
    //         </AnimationOnScroll>
    //       </div>
    //       <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
    //         <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    //           <div className="sm:text-right text-4xl ">
    //             <p className="text-xl sm:text-xl md:text-3xl">
    //             I am interested in a career and exploring things in the IT field, especially in the fields of Network architecture and Programming.
    //             </p>
    //           </div>
    //         </AnimationOnScroll>
    //         <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    //           <div >
    //             <AnimationOnScroll animateIn="animate__tada">
    //               <img src={design} alt="" className="h-13 animate-bounce" />
    //             </AnimationOnScroll>
    //             <p className="leading-relaxed text-2xl md:text-3xl sm:text-xl ">
    //             Creative software developer and network engineer with more than 3+ years of experience
    //           as a freelance and . Proficient in Laravel, Tailwind
    //           CSS, ViteJS, and ReactJS .{" "}
    //             </p>
    //           </div>
    //         </AnimationOnScroll>
    //       </div>
    //     </div>

    //       <div className="animate-bounce grid grid-cols-3 lg:grid-cols-9 mt-12 mb-12 gap-5 mx-5  justify-center">
    //         <img src={js} title="JavaScript" alt=""  />
    //         <img src={css} title="CSS" alt="" />
    //         <img src={html} title="HTML" alt="" />
    //         <img src={react} title="React" alt="" />
    //         <img src={github} title="github" alt="" />
    //         <img src={tailwind} title="tailwind" alt="" />
    //         <img src={laravel} title="laravel" alt="" />
    //         <img src={figma} title="Figma" alt="" />
    //         <img src={cisco2} title="Cisco" alt="" className="py-3" />
    //       </div>

    //   </div>
    // </section>

    <section
      class="text-gray-600 body-font overflow-hidden bg-slate-100"
      id="experience"
    >
      <div class="container px-5 py-28 mx-auto text-justify">
        <div className="flex flex-col justify-center items-center w-full h-full shadow-box-shadow p-2 rounded-3xl mt-20 text-justify bg-slate-100 text-[#7c8cc2]">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <div className="sm:text-right pb-8 pl-4 ">
                <p className="text-4xl text-center font-bold inline border-b-4 border-pink-600">
                  {" "}
                  About{" "}
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <div className="sm:text-right text-4xl ">
                <p className="text-xl sm:text-xl md:text-3xl">
                  I am interested in a career and exploring things in the IT
                  field, especially in the fields of Network architecture and
                  Programming.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <div>
                <AnimationOnScroll animateIn="animate__tada">
                  <img src={design} alt="" className="h-13 animate-bounce mx-auto " />
                </AnimationOnScroll>
                <p className="leading-relaxed text-2xl md:text-3xl sm:text-xl ">
                  Creative software developer and network engineer with more
                  than 3+ years of experience as a freelance and . Proficient in
                  Laravel, Tailwind CSS, ViteJS, and ReactJS .{" "}
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className=" grid grid-cols-3 lg:grid-cols-9 mt-12 mb-12 gap-5 mx-5  justify-center">
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
    </section>
  );
};

export default About;
