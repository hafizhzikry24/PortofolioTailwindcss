// import React, { useState } from "react";

// function Header() {
// const [isDropdownVisible, setIsDropdownVisible] = useState(false);

// const handleDropdownClick = () => {
//   setIsDropdownVisible(!isDropdownVisible);
// };

//   return (
//     <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//       <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             class="h-8"
//             alt="Flowbite Logo"
//           />
//           <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Flowbite
//           </span>
//         </a>
//         <button
//           data-collapse-toggle="navbar-dropdown"
//           type="button"
//           class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-dropdown"
//           aria-expanded="false"
//         >
//           <span class="sr-only">Open main menu</span>
//           <svg
//             class="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
//           <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//   <li>
//   <div className="relative group">
//   <button
//     onClick={handleDropdownClick}
//     className="mr-5 hover:text-blue-500 focus:outline-none"
//   >
//     Dropdown
//   </button>
//   <ul
//     className={`${
//       isDropdownVisible ? "block" : "hidden"
//     } absolute text-gray-700 pt-1`}
//   >
//     <li>
//       <a
//         href="#"
//         className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
//       >
//         Dropdown Item 1
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
//       >
//         Dropdown Item 2
//       </a>
//     </li>
//   </ul>
// </div>
//   </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;

// import React, { useState } from "react";

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const handleDropdownClick = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <header className="body-font bg-gray-800  text-white">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center  text-white mb-4 md:mb-0">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl">Porto Hafizh</span>
//         </a>

//         <nav
//           className={`${
//             isMobileMenuOpen ? "block" : "hidden"
//           } md:ml-auto md:flex md:items-center mb-3`}
//         >
//           <a className="mr-5 hover:text-gray-900">Intro</a>
//           <a className="mr-5 hover:text-gray-900">About</a>
//           <a className="mr-5 hover:text-gray-900">Projects</a>

//           {/* <div className="relative group">
//             <button
//               onClick={handleDropdownClick}
//               className="mr-5 hover:text-blue-500 focus:outline-none"
//             >
//               Dropdown
//             </button>
//             <ul
//               className={`${
//                 isDropdownVisible ? "block" : "hidden"
//               } absolute text-gray-700 pt-1`}
//             >
//               <li>
//                 <a
//                   href="#"
//                   className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
//                 >
//                   Dropdown Item 1
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
//                 >
//                   Dropdown Item 2
//                 </a>
//               </li>
//             </ul>
//           </div> */}

//           <a className="mr-5 hover:text-gray-900">Experience</a>
//         </nav>

//         <button
//           onClick={handleMobileMenuToggle}
//           className="inline-flex items-center bg-slate-300 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0 md:hidden"
//         >

//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-4 h-4 "
//           >
//             <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//             <g
//               id="SVGRepo_tracerCarrier"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             ></g>
//             <g id="SVGRepo_iconCarrier">
//               {" "}
//               <path
//                 d="M2 5.5C2 4.94772 2.44772 4.5 3 4.5H21C21.5523 4.5 22 4.94772 22 5.5V6.5C22 7.05228 21.5523 7.5 21 7.5H3C2.44772 7.5 2 7.05228 2 6.5V5.5Z"
//                 fill="#787878"
//               ></path>{" "}
//               <path
//                 d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5H21C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z"
//                 fill="#787878"
//               ></path>{" "}
//               <path
//                 d="M3 16.5C2.44772 16.5 2 16.9477 2 17.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V17.5C22 16.9477 21.5523 16.5 21 16.5H3Z"
//                 fill="#787878"
//               ></path>{" "}
//             </g>
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from "react";

export default function Header() {
  return (
    <header class="text-white body-font bg-gray-800 sticky top-0 left-0 right-0 ">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center textwhite mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">PortofolioHafizh</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#content" class="mr-5 hover:text-gray-900">Intro</a>
          <a href="#about" class="mr-5 hover:text-gray-900">About</a>
          <a href="#projects" class="mr-5 hover:text-gray-900">Project</a>
          <a href="#experience" class="mr-5 hover:text-gray-900">Experience</a>
        </nav>
      </div>
    </header>
  );
}
