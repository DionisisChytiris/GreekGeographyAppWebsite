import React, { useState, useRef, useEffect } from "react";

function Navbar({ isInSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollUp(false);
      }

      // Scrolling up near top only
      if (currentScrollY < 800 && currentScrollY < lastScrollY.current) {
        setScrollUp(true);
      }

      // if (currentScrollY > lastScrollY.current) {
      //   setScrollUp(false); // scrolling down
      // } else if (currentScrollY < 300){
      //   setScrollUp(true); // scrolling up
      // }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // <nav className="bg-blue-500 p-4 sticky top-0 z-0 shadow-md">
    <nav className={"p-4 sticky top-0 z-50 bg-transparent"}>
      {/* <nav className={`p-4 sticky top-0 z-50 ${isInSection?  "bg-blue-300" : "bg-transparent"}`}> */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center sm:items-center sm:justify-start ">
            {/* Icon Container */}
            <div
              className={`${
                !isInSection ? "bg-white" : "bg-blue-500"
              } w-12 h-12 rounded-xl flex items-center justify-center`}
            >
              <img
                src="/logo.png"
                alt="App Screenshot"
                className="object-cover pb-1"
              />
            </div>

            {/* Text Container */}
            <div
              className={`transition-all duration-300 ${
                scrollUp
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5"
              } flex-shrink-0 text-white text-xl flex items-center justify-center px-5 sm:block lg:block hidden`}
            >
              Γεωγραφία της Ελλάδας
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#section1"
                className={`${
                  !isInSection ? "text-white" : "text-blue-500"
                } text-shadow-md hover:bg-blue-200 px-3 py-2 rounded-md text-md font-medium`}
              >
                Aρχική
              </a>
              <a
                href="#section2"
                className={`${
                  !isInSection ? "text-white" : "text-blue-500"
                } text-shadow-md hover:bg-blue-200 px-2 py-2 rounded-md text-md font-medium`}
              >
                About
              </a>
              <a
                href="#section3"
                className={`${
                  !isInSection ? "text-white" : "text-blue-500"
                } text-shadow-md hover:bg-blue-200 px-3 py-2 rounded-md text-md font-medium`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
