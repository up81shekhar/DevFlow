import React from "react";


const tools = [
  {
    title: "AI Code Assistant",
    desc: "Generate, explain and optimize code in seconds.",
    icon: <i className="fa-brands fa-napster text-violet-400 w-full"></i>,
    // icon: <i className="fa-brands fa-napster text-violet-400 w-full"></i>,
    bg: "bg-violet-500/10",
  },
  {
    title: "Bug Analyzer",
    desc: "Find errors and get intelligent solutions.",
    icon: <i className="fa-solid fa-bug text-orange-400"></i>,
    bg: "bg-orange-500/10",
  },
  {
    title: "Docs Generator",
    desc: "Generate README, API docs and more.",
    icon: <i class="fa-regular text-indigo-400 fa-file"></i>,
    bg: "bg-indigo-500/10",
  },
  {
    title: "Task Breakdown",
    desc: "Break down any idea into actionable tasks.",
    icon: <i class="fa-solid text-emerald-400 fa-list-check"></i>,
    bg: "bg-emerald-500/10",
  },
  {
    title: "GitHub Integration",
    desc: "Connect your repos and analyze your codebase.",
    icon: <i class="fa-brands fa-github text-blue-400"></i>,
    bg: "bg-blue-500/10",
  },
  {
    title: "Team Collaboration",
    desc: "Collaborate in real-time with your team.",
    icon: <i class="fa-regular fa-handshake text-purple-400"></i>,
    bg: "bg-purple-500/10",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Powerful AI Tools for Developers
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            Everything you need to build, ship and scale your projects
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-violet-500/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/5 to-blue-500/5" />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${tool.bg}`}
              >
                {tool.icon}
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white">
                  {tool.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;