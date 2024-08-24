import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="body-font sticky top-0 z-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg text-white">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center sm:p-5">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold tracking-wide hover:text-indigo-400 transition-colors duration-300">
            PortofolioHafizh
          </span>
        </a>

        <nav
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:ml-auto md:flex md:items-center mb-3 space-x-6 text-lg`}
        >
          <Link
            to="content"
            smooth={true}
            duration={500}
            className="hover:text-indigo-400 cursor-pointer transition-colors duration-300"
          >
            Intro
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-indigo-400 cursor-pointer transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-indigo-400 cursor-pointer transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hover:text-indigo-400 cursor-pointer transition-colors duration-300"
          >
            Experience
          </Link>
        </nav>

        <button
          onClick={handleMobileMenuToggle}
          className="inline-flex items-center bg-gray-900 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:hidden transition-colors duration-300 shadow-lg"
        >
          {isMobileMenuOpen ? (
            <FiX className="text-lg text-slate-100 icon-transition icon-rotate" />
          ) : (
            <FiMenu className="text-lg text-slate-100 icon-transition" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
