'use client'

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Prajwal Neupane</h2>
          <p className="mt-2 text-sm text-gray-400">
            Web Developer | JS • TS • Nest • Next
          </p>
          <div className="flex mt-4 gap-5 text-xl">
            <a href="mailto:prajwal003@gmail.com" className="hover:text-blue-400 transition">
              <GoMail />
            </a>
            <a href="https://github.com/prajwal003-web-developer" target="_blank" className="hover:text-gray-100 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prajwal003/" target="_blank" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-semibold text-lg text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/lander" className="hover:text-white transition">About</a></li>
            <li><a href="/lander" className="hover:text-white transition">Free Lexity</a></li>
            <li><a href="/lander" className="hover:text-white transition">Landing Page</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-lg text-white">About Free Lexity</h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Free Lexity is a lightweight platform I built to help developers 
            and creators with fast, modern solutions.  
            Focused on simplicity, speed, and clean design.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Prajwal. All rights reserved.
      </div>
    </footer>
  );
}
