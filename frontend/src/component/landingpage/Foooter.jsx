import React from "react";
// import {
//   Github,
//   Twitter,
//   Linkedin,
//   Instagram,
//   ArrowRight,
// } from "lucide-react";

const Foooter = () => {
  return (
    <footer className="relative w-full bg-[#050816] border-t border-white/10 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        
        {/* Top CTA */}
        <div className="bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-white/10 rounded-[32px] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 backdrop-blur-xl">
          
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Build Faster with <br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                DevFlow AI
              </span>
            </h2>

            <p className="mt-5 text-gray-400 text-lg max-w-2xl">
              Your complete AI workspace for coding, debugging,
              documentation and collaboration.
            </p>
          </div>

          {/* Button */}
                  <a href='/signup'
 className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold flex items-center gap-3 hover:scale-105 transition duration-300 shadow-lg shadow-violet-500/20">
            Get Started
            {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" /> */}
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/20">
                {"</>"}
              </div>

              <h1 className="text-2xl font-bold text-white">
                DevFlow <span className="text-violet-400">AI</span>
              </h1>
            </div>

            <p className="mt-5 text-gray-400 leading-relaxed">
              AI-powered developer workspace designed for modern teams and creators.
            </p>
            <div className="text-zinc-600 mt-5">
                MADE WITH ❤️ 
                <p className="text-zinc-600">By Shekhar</p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Product
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Integrations
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer transition">
                API
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Connect
            </h3>

            {/* <div className="flex items-center gap-4">
              {[
                // Github,
                // Twitter,
                // Linkedin,
                // Instagram,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div> */}

            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              Follow us for updates, AI tools and developer resources.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          
          <p className="text-gray-500 text-sm">
            © 2026 DevFlow AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms of Service
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;