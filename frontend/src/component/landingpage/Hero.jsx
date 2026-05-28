import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen p-30 overflow-hidden bg-[#050816] flex items-center justify-center px-6">
      
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-100px] w-[420px] h-[420px] bg-violet-600/30 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] bg-blue-600/30 blur-[140px] rounded-full"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Glass Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-violet-500/10 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse"></span>

          <p className="text-sm font-medium text-violet-200 tracking-wide">
            Introducing DevFlow AI Workspace
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] text-white tracking-tight">
          Build Faster
          <br />

          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            With AI Power
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-gray-400">
          The ultimate AI workspace for developers.
          <br className="hidden sm:block" />
          Generate code, debug instantly, manage projects,
          write docs and ship products faster than ever.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          
          {/* Primary Button */}
          <a
            href="/signup"
            className="group relative px-8 py-4 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500"></div>

            <div className="absolute inset-[1px] rounded-2xl bg-black/20 backdrop-blur-xl"></div>

            <span className="relative z-10 text-white font-semibold flex items-center gap-2">
              Get Started Free
              <span className="group-hover:translate-x-1 transition">
                →
              </span>
            </span>
          </a>

          {/* Secondary Button */}
          <a
            href="/dashboard"
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Explore Features
          </a>
        </div>

        {/* Stats Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-xl">
            <h2 className="text-3xl font-bold text-white">10x</h2>
            <p className="mt-2 text-gray-400">
              Faster Development Workflow
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-xl">
            <h2 className="text-3xl font-bold text-white">50+</h2>
            <p className="mt-2 text-gray-400">
              Integrated AI Tools
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-xl">
            <h2 className="text-3xl font-bold text-white">24/7</h2>
            <p className="mt-2 text-gray-400">
              AI Powered Assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;