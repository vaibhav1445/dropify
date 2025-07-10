
import React from 'react';
import { FaGithub, FaGlobe, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <span className="text-center md:text-left mb-3 md:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold">Dropify</span>. All rights reserved.
        </span>
        <div className="flex space-x-6">
          <a
            href="https://github.com/vaibhav1445"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 flex items-center space-x-1 transition"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 flex items-center space-x-1 transition"
          >
            <FaGlobe />
            <span>Portfolio</span>
          </a>
          <a
            href="mailto:support@dropify.com"
            className="hover:text-yellow-300 flex items-center space-x-1 transition"
          >
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
