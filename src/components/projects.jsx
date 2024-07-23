import React from "react";
import porto from "../assets/SPCPLCPMK.png";
import foody from "../assets/12.png";
import kkn from "../assets/13.png";
import bercak from "../assets/Bercak.png";
import madani from "../assets/Madani.png";
import KP from "../assets/KP.png";



export default function Projects() {
  return (
    // <section id="portfolio" class="bg-slate-100 pt-36 pb-16 dark:bg-slate-800 min-h-screen">
    //   <div class="container px-5 mx-auto">
    //     <div class="w-full px-4">
    //       <div class="mx-auto mb-16 max-w-xl text-center">
    //         <h4 class="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
    //         <h2 class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Project Terbaru</h2>
    //         <p class="text-md font-medium text-secondary md:text-lg">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus porro consequuntur alias, commodi nemo enim aliquam ipsam obcaecati? Assumenda, ipsam?
    //         </p>
    //       </div>
    //     </div>

    //     <div class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
    //       <div class="mb-12 p-4 md:w-1/2">
    //         <div class="overflow-hidden rounded-md shadow-md">
    //           <img src={porto} alt="Landing Page" width="w-full" />
    //         </div>
    //         <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Landing Page Sandhika Galih</h3>
    //         <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
    //       </div>
    //       <div class="mb-12 p-4 md:w-1/2">
    //         <div class="overflow-hidden rounded-md shadow-md">
    //           <img src={foody} alt="E-Commerce" width="w-full" />
    //         </div>
    //         <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">E-Commerce</h3>
    //         <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
    //       </div>
    //       <div class="mb-12 p-4 md:w-1/2">
    //         <div class="overflow-hidden rounded-md shadow-md">
    //           <img src={porto} alt="Technical Documentation" width="w-full" />
    //         </div>
    //         <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Technical Documentation</h3>
    //         <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
    //       </div>
    //       <div class="mb-12 p-4 md:w-1/2">
    //         <div class="overflow-hidden rounded-md shadow-md">
    //           <img src="dist/img/portfolio/4.png" alt="Tribute Page" width="w-full" />
    //         </div>
    //         <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Tribute Page</h3>
    //         <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto min-h-screen" id="projects">
        <div class="flex flex-col text-center w-full mb-20 my-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            My Projects
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          This is a project that I made while studying in the IT field, I made this project for college and internship needs to develop hard skills, I got this project from college assignments, practical work, and research.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 py-8 text-justify">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={bercak}
              />
              <a href="https://desabercakboyolali.web.app/" target="_blank"><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  Profile Website
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  BLOG Bercak Village
                </h1>
                <p class="leading-relaxed">
                  Created a profile village of bercak for KKN task using reactJS and Tailwind CSS .
                </p>
              </div></a>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={madani}
              />
              <a href="https://bit.ly/PrototipeMadani" target="_blank"><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  UI/UX Competition
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Madani
                </h1>
                <p class="leading-relaxed">
                  Created for UI/UX Competition for MTQMN using figma and developed with design thinking.
                </p>
              </div></a>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={KP}
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  Internship
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Network Enginner
                </h1>
                <p class="leading-relaxed">
                NETWORK DESIGN AND RECONFIGURATION LABORATORY 2 STATE VOCATIONAL SCHOOL 53 JAKARTA.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={porto}
              />
              <a href="https://test1.spcplcpmk.com/login" target="_blank"><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  Capstone Project
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  SPCPLCPMK
                </h1>
                <p class="leading-relaxed">
                  Created website SPCPLCPMK for Capstone, and my role is front-end developer.
                </p>
              </div></a>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={foody}
              />
              <a href="foody-culinary.vercel.app" target="_blank"></a><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  Final Project PWA
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  FOODY
                </h1>
                <p class="leading-relaxed">
                  Created PWA App reciept food with Next.js and tailwind css.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={kkn}
              />
              <a href="https://desaklikiran-381b3.web.app/" target="_blank"><div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                Profile Website
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Blog Klikiran Village
                </h1>
                <p class="leading-relaxed">
                Created a profile village of klikiran for KKN task using reactJS and Tailwind CSS.
                </p>
              </div></a>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
