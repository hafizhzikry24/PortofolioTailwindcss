import React from "react";
import { FiTwitter, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import MyLogo from "../assets/mylogo.png"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">
      <div className="bg-gray-800 bg-opacity-75 py-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-5">
          <a className="flex items-center text-white mb-4 sm:mb-0">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <img
            className="w-28 sm:w-32 sm:h-7 shadow-xl transition-transform duration-1000 ease-in-out transform hover:scale-110 hover:rotate-3"
            src={MyLogo}
            alt="logo"
          />
          </a>
          
          <p className="text-sm text-purple-200">
            © 2024 Muhammad Hafizh Zikry — 
            <a
              href="mailto:hafizhcool24@gmail.com"
              className="text-pink-200 ml-1 font-bold hover:text-pink-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </p>
          
          {/* <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="mailto:hafizhcool24@gmail.com" className="text-gray-400 hover:text-gray-100 transition-colors duration-300">
              <FiMail className="w-7 h-7" />
            </a>
            <a href="https://twitter.com/knyttneve" className="text-gray-400 hover:text-gray-100 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FiTwitter className="w-7 h-7" />
            </a>
            <a href="https://github.com/yourusername" className="text-gray-400 hover:text-gray-100 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FiGithub className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" className="text-gray-400 hover:text-gray-100 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="w-7 h-7" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
