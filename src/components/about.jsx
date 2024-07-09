import React from "react";
import design from "../assets/design.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import js from "../assets/js.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import vscode from "../assets/vscode.png";
import html from "../assets/html .png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import laravel from "../assets/laravel.png";

const About = ({ theme }) => {
  return (
    <section className="min-h-screen ml">
      <div
        name="About"
        className={
          theme
            ? " md:text-2xl  w-full min-h-screen  shadow-box-shadow bg-[#ffffff] text-[#000000] font-bold p-20  "
            : " md:text-2xl  w-full min-h-screen bg-slate-100 text-[#7c8cc2] p-20  "
        }
      >
        <div className="flex flex-col justify-center items-center w-full h-full shadow-box-shadow p-8 rounded-3xl mt-28">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <div className="sm:text-right pb-8 pl-4 ">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                  {" "}
                  About{" "}
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <div className="sm:text-right text-4xl ">
                <p className="text-xl sm:text-2xl md:text-4xl">
                  Hi. I'm Shoaib, nice to meet you. Please take a look around.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <div>
                <AnimationOnScroll animateIn="animate__tada">
                  <img src={design} alt="" className="h-13 animate-bounce" />
                </AnimationOnScroll>
                <p className="leading-relaxed text-sm md:text-xl">
                  I am passionate about building excellent software that
                  improves the lives of those around me. I am specializing in
                  creating Responsive web applications for individuals and
                  small-businesses,I like to Learn New Technologies .{" "}
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>

        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="grid grid-cols-4 lg:grid-cols-8 mt-12 mb-12 gap-10 mx-5 justify-center">
            <img src={js} title="JavaScript" alt=""  />
            <img src={css} title="CSS" alt="" />
            <img src={vscode} title="VSCode" alt="" />
            <img src={html} title="HTML" alt="" />
            <img src={react} title="React" alt="" />
            <img src={github} title="github" alt="" />
            <img src={tailwind} title="tailwind" alt="" />
            <img src={laravel} title="laravel" alt="" />
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default About;
