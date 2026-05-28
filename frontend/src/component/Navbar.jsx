import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 pt-4">
      <nav className="max-w-7xl mx-auto h-16 px-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/src/assets/Logo.png"
            alt="logo"
            className="h-8 w-8 object-contain"
          />

          <h1 className="text-white text-xl font-bold tracking-wide">
            Dev<span className="text-violet-400">Flow AI</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {["Home", "Dashboard", "Pricing", "About"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Login */}
          <a
            href="/login"
            className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white hover:bg-white/10 transition-all duration-300"
          >
            Login
          </a>

          {/* AI Button */}
          <a
            href="/dashboard"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 text-white text-sm font-semibold shadow-lg shadow-violet-500/30 hover:scale-105 hover:shadow-violet-500/50 transition-all duration-300"
          >
            AI Workspace
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white bg-white/10 p-2 rounded-xl border border-white/10"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0b1020]/80 backdrop-blur-2xl p-4 shadow-2xl">
          
          <div className="flex flex-col gap-2">
            {["Home", "Dashboard", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <a
              href="/login"
              className="w-full text-center px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
            >
              Login
            </a>

            <a
              href="/profile"
              className="w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 text-white font-semibold shadow-lg shadow-violet-500/30"
            >
              AI Workspace
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;