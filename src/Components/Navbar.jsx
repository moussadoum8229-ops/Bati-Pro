import React from "react";

export default function Navbar() {
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
                <a href="#propos">À Propos</a>
              </li>
              <li>
                <a href="#panneaux">Les formes de Panneaux</a>
              </li>
              <li>
                <a href="#infraction">Infraction</a>
              </li>
              <li>
                <a href="#paiement">Paiement</a>
              </li>
            </ul>
          </div>
          <a href="#" className="shrink-0 flex items-center ml-2 lg:ml-0">
            <img
              src="./Bati-pro.jpg"
              className="h-10 md:h-16 object-contain rounded-md shadow-sm transition-transform hover:scale-105"
              alt="Bamako Sira Logo"
            />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-base font-semibold">
            <li>    
              <a
                href="#propos"
                className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
              >
                À Propos
              </a>
            </li>
            <li>
              <a
                href="#panneaux"
                className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
              >
                Panneaux
              </a>
            </li>
            <li>
              <a
                href="#infraction"
                className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
              >
                Infraction
              </a>
            </li>
            <li>
              <a
                href="#paiement"
                className="hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
              >
                Paiement
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
