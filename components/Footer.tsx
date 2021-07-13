import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="flex justify-center items-center">
        <p className="text-xs text-gray-600 font-thin opacity-80">
          Design by{" "}
          <a
            href="https://asurraa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Asurraa
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
