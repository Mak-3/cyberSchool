import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="bg-[#001e62] text-white text-sm border-b-[0.5px] border-gray-600">
          <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
            <p>Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
            <p>Phone: +101-1231-1231</p>
          </div>
        </div>

        <nav className="bg-[#001e62] shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-4">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-gray-300">
                Cyber School
              </div>

              <div className="hidden md:flex space-x-6 items-center">
                <a href="/cyberschool/" className="text-gray-300 hover:text-gray-100">
                  Home
                </a>
                <a href="/cyberschool#about" className="text-gray-300 hover:text-gray-100">
                  About
                </a>

                <div className="relative group">
                  <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                    Training
                    <FaChevronDown className="w-3 h-3 mt-0.5" />
                  </button>
                  <div className="absolute hidden group-hover:block py-2 w-40 rounded">
                    <div className="mt-2 bg-white shadow-md rounded">
                      <Link to="/courses/certified-cyber-expert" className="block px-4 py-2 hover:bg-gray-100">
                        Course
                      </Link>
                      <Link
                        to="/training-events"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Training Events
                      </Link>
                      <a
                        href="/cyberschool#online-training"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Online Training
                      </a>
                    </div>
                  </div>
                </div>
                <a href="#" className="text-gray-300 hover:text-gray-100">
                  Executive Education
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-100">
                  Certification
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-100">
                  Contact
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-gray-300 hover:text-gray-100"
                >
                  {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
              <a href="#" className="block text-gray-700">
                Home
              </a>
              <a href="#" className="block text-gray-700">
                About
              </a>

              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex justify-between items-center text-gray-700"
                >
                  <span>Services</span>
                  {dropdownOpen ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
                </button>
                {dropdownOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-gray-900"
                    >
                      Web Design
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-gray-900"
                    >
                      App Dev
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="block text-gray-700">
                Contact
              </a>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
