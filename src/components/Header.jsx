import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [classifyDropdownOpen, setClassifyDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setClassifyDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:ml-25 xl:mr-25">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <img className="w-auto h-15 lg:h-20" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-8">
            <Link to="/" className="text-base font-medium text-black hover:text-green-600">
              Home
            </Link>
            <Link to="/guide" className="text-base font-medium text-black hover:text-green-600">
              Guide
            </Link>

            {/* Classify Dropdown (Desktop) */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-base font-medium text-black hover:text-green-600 focus:outline-none">
                Classify
                <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.66a.75.75 0 01-1.08 0l-4.25-4.66a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute hidden pt-2 group-hover:block">
                <div className="w-48 py-2 bg-white rounded-md shadow-xl border border-gray-100">
                  <Link to="/classify/image" className="block px-4 py-2 text-base text-black font-medium hover:bg-gray-100 hover:text-green-600">
                    Image
                  </Link>
                  <Link to="/classify/iot" className="block px-4 py-2 text-base text-black font-medium hover:bg-gray-100 hover:text-green-600">
                    IoT
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/iot-control" className="text-base font-medium text-black hover:text-green-600">
              IoT Control
            </Link>
            <Link
              to="/classify/iot"
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              Get started now
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md mt-2">
            <div className="flex flex-col items-center space-y-2">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="w-full text-center py-2 text-base font-medium text-black hover:bg-green-100 hover:text-green-600 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/guide"
                onClick={handleLinkClick}
                className="w-full text-center py-2 text-base font-medium text-black hover:bg-green-100 hover:text-green-600 rounded-md"
              >
                Guide
              </Link>

              {/* Classify Toggle Button */}
              <button
                type="button"
                onClick={() => setClassifyDropdownOpen(!classifyDropdownOpen)}
                className="w-full flex items-center justify-center gap-1 py-2 text-base font-medium text-black hover:bg-green-100 hover:text-green-600 rounded-md focus:outline-none"
              >
                Classify
                {classifyDropdownOpen ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.7 10.7a1 1 0 01-1.4 0L10 7.42 6.7 10.7a1 1 0 01-1.4-1.42l4-4a1 1 0 011.4 0l4 4a1 1 0 010 1.42z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.66a.75.75 0 01-1.08 0l-4.25-4.66a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {/* Classify Dropdown in Mobile */}
              <div
                className={`flex flex-col items-center w-full transition-all duration-300 ease-in-out ${
                  classifyDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <Link
                  to="/classify/image"
                  onClick={handleLinkClick}
                  className="w-full text-center py-2 text-base font-medium text-black hover:bg-green-100 hover:text-green-600 rounded-md"
                >
                  Image
                </Link>
                <Link
                  to="/classify/iot"
                  onClick={handleLinkClick}
                  className="w-full text-center py-2 text-base font-medium text-black hover:bg-green-100 hover:text-green-600 rounded-md"
                >
                  IoT
                </Link>
              </div>

              <Link
                to="/iot-control"
                onClick={handleLinkClick}
                className="w-full text-center py-2 text-base font-medium text-black hover:bg-green-100 hover:text-green-600 rounded-md"
              >
                IoT Control
              </Link>
            </div>

            <div className="flex justify-center mt-6">
              <Link
                to="/classify/iot"
                onClick={handleLinkClick}
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Get started now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}