import { useState } from 'react';
import MyLogo from "../assets/mylogo.png";

import { TiThMenuOutline } from "react-icons/ti";
import { Link } from 'react-scroll';

import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    // Toggle menu state with a delay
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <header className="body-font sticky top-0 z-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg text-white">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center sm:p-5">
        <div className="flex w-full justify-between items-center md:w-auto mb-2">
          {/* Logo text - position on the right for mobile */}

          <img
            className="w-28 h sm:w-32 sm:h-7 shadow-xl transition-transform duration-1000 ease-in-out transform hover:scale-110 hover:rotate-3"
            src={MyLogo}
            alt="logo"
          />
          {/* <a className="flex title-font font-medium items-center ml-5 text-white">
            <span className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              ZikkDev
            </span>
          </a> */}

          {/* Button for mobile menu - position on the left */}
          <button
            onClick={handleMobileMenuToggle}
            className={`inline-flex items-center border-0 py-2 px-3 focus:outline-none rounded text-base md:hidden transition-transform duration-500 transform ${
              isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
            }  shadow-lg`}
            
          >
            {isMobileMenuOpen ? (
              <IoCloseSharp    className="text-2xl text-purple-500" />
            ) : (
              <TiThMenuOutline className="text-xl text-purple-500" />
            )}
          </button>
        </div>

        <nav
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:ml-auto md:flex md:items-center mb-3 mt-1 space-x-6 sm:space-x-7 text-sm sm:text-lg`}
 
        >
          <Link
            to="content"
            smooth={true}
            duration={500}
            className="hover:text-purple-400 text-purple-300 cursor-pointer transition-colors duration-300 "
          >
            Intro
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-purple-400 text-purple-300 cursor-pointer transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hover:text-purple-400 text-purple-300 cursor-pointer transition-colors duration-300"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-purple-400 text-purple-300 cursor-pointer transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="form"
            smooth={true}
            duration={500}
            className="hover:text-purple-400 text-purple-300 cursor-pointer transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

