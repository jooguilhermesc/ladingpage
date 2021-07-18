import React from "react";

const Footer = () => {
  return (
    <div className="block py-5 text-center text-gray-600 w-full  md:flex-column">
      <div className="flex flex-row-reverse pt-2 pr-4">
        <a
          className="text-blue-600 mx-4"
          href="https://github.com/jooguilhermesc/"
        >
          Github
        </a>
        <a
          className="text-blue-600 mx-4"
          href="https://www.linkedin.com/in/jooguilhermesc/"
        >
          Linkedin
        </a>
        @Copyright João Guilherme - 2021
      </div>
    </div>
  );
};

export default Footer;
