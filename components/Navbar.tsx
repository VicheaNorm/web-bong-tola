import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="bg-white  min-h-screen" id="home">
      <header className="bg-white sticky top-0 shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center  mx-auto text-gray-700 font-extrabold capitalize dark:text-gray-300">
          {/* <a
          href="#"
          className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          home
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          features
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          pricing
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          blog
        </a> */}

          <Link href="/">
            <a>
              <p className="font-extrabold text-1xl md:text-3xl lg:text-5xl​ text-blue-800 hover:text-blue-500">
                សូមស្វាគមន៍មកកាន់ខេត្តកំពង់ស្ពឺ
              </p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <img src="/logo.svg" className="p-1 w-20 md:w-40" />
            </a>
          </Link>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
