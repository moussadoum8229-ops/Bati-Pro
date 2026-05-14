import React from "react";

export default function Navbar() {

  function scrollToSection(id) {

    const element = document.getElementById(id)

    element.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-white text-gray-800 shadow-md sticky top-0 z-50 px-4 md:px-8">
        <div className="navbar-start w-[70%] lg:w-1/2 flex justify-start items-center">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52 font-semibold text-gray-700"
            >
              <li>
                <button onClick={() => scrollToSection("Accueil")}>Acceuil</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("a-propos")}> À propos</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>Service</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("Avantage concurrentiel")}>Avantage concurrentiel</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("Temoignage")}>Temoignage</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>Contact</button>
              </li>
            </ul>
          </div>
          <a href="#" className="shrink-0 flex items-center ml-2 lg:ml-0">
            <img
              src="./Bati-pro.jpg"
              className="h-10 md:h-20 object-contain rounded-md shadow-sm transition-transform hover:scale-105"
              alt="Bamako Sira Logo"
            />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-base font-semibold">
            <li>
              <button className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => scrollToSection("Accueil")}>Acceuil</button>
            </li>
            <li>
              <button className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => scrollToSection("a-propos")}> À propos</button>
            </li>
            <li>
              <button className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => scrollToSection("services")}>Service</button>
            </li>
            <li>
              <button className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => scrollToSection("Avantage concurrentiel")}>Avantage concurrentiel</button>
            </li>
            <li>
              <button className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => scrollToSection("Temoignage")}>Temoignage</button>
            </li>
             <li>
              <button className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
          </ul>
        </div>

        <div className="navbar-end w-[30%] lg:flex pr-2 lg:pr-4 justify-end">
          <img
            src="./Logo2.jpg"
            className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-green-500 shadow-md transform hover:scale-105 transition-transform object-cover"
            alt="Logo Ministère"
          />
        </div>
      </nav>
    </div>
  );
}
