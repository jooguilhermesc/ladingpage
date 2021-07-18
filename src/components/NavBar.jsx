import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="bg-black dark:bg-gray-800 w-full">
        <div className="flex flex-row-reverse bg-blue-900">
          <a className="" href="https://github.com/jooguilhermesc/">
            Github
          </a>
          <a className="" href="https://www.linkedin.com/in/jooguilhermesc/">
            Linkedin
          </a>
        </div>
        <div className="container p-6 mx-auto">
          <p
            className="block text-7xl font-bold text-center text-blue-600 dark:text-white hover:text-blue-400 dark:hover:text-gray-300"
          >
            Sebo virtual
          </p>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
