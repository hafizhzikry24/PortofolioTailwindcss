import React from "react";
import porto from "../assets/SPCPLCPMK.png";
import foody from "../assets/12.png";
import kkn from "../assets/13.png";
import bercak from "../assets/Bercak.png";
import madani from "../assets/Madani.png";
import KP from "../assets/KP.png";

export default function Projects() {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-16" id="projects">
      <div className="container px-5 py-32 mx-auto min-h-screen sm:py-24">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeIn">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
            This is a project that I made while studying in the IT field. These projects were created for college and internship needs to develop hard skills, including college assignments, practical work, and research.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-justify">
          {[
            {
              src: bercak,
              title: "BLOG Bercak Village",
              category: "Profile Website",
              description: "Created a profile village of Bercak for KKN task using ReactJS and Tailwind CSS.",
              link: "https://desabercakboyolali.web.app/"
            },
            {
              src: madani,
              title: "Madani",
              category: "UI/UX Competition",
              description: "Created for UI/UX Competition for MTQMN using Figma and developed with design thinking.",
              link: "https://bit.ly/PrototipeMadani"
            },
            {
              src: KP,
              title: "Network Engineer",
              category: "Internship",
              description: "NETWORK DESIGN AND RECONFIGURATION LABORATORY 2 STATE VOCATIONAL SCHOOL 53 JAKARTA.",
              link: "#"
            },
            {
              src: porto,
              title: "SPCPLCPMK",
              category: "Capstone Project",
              description: "Created website SPCPLCPMK for Capstone, and my role is front-end developer.",
              link: "https://test1.spcplcpmk.com/login"
            },
            {
              src: foody,
              title: "FOODY",
              category: "Final Project PWA",
              description: "Created PWA App recipe food with Next.js and Tailwind CSS.",
              link: "https://foody-culinary.vercel.app/"
            },
            {
              src: kkn,
              title: "Blog Klikiran Village",
              category: "Profile Website",
              description: "Created a profile village of Klikiran for KKN task using ReactJS and Tailwind CSS.",
              link: "https://desaklikiran-381b3.web.app/"
            }
          ].map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
              <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="gallery"
                  className="w-full h-64 object-cover object-center bg-white"
                  src={item.src}
                />
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="p-6 flex flex-col h-full">
                    <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                      {item.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
