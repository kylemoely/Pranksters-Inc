import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
<<<<<<< HEAD
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white dark:bg-gray-900 mb-3">
=======
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-orange-300 text-gray-900 dark:bg-gray-900 dark:text-white mb-3">
>>>>>>> c0e3b7e72a51aa83bd29de7fc4a2b055c6954dd9
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href=""
            >
              Pranksters-INC
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id=""
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/signup"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Sign-Up</span>
                </a>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}