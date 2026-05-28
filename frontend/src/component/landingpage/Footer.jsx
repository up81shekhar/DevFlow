import React from "react";

const Footer = () => {
  const review = [
    {
      desc: "DevFlow AI has become an essential part of my daily workflow. It keeps everything organized.",
      name: "Sarthak Verma",
      role: "Full Stack Developer",
      image:
        "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      desc: "This platform helped me manage coding, debugging and documentation all in one place.",
      name: "Rahul Sharma",
      role: "Frontend Developer",
      image:
        "https://randomuser.me/api/portraits/men/39.jpg",
    },
    {
      desc: "The UI is clean, fast and extremely useful for developers building modern apps.",
      name: "Aman Gupta",
      role: "MERN Stack Developer",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#050816] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Loved by Developers
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Trusted by developers worldwide
        </p>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {review.map((tool, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition duration-300"
            >
              {/* Review */}
              <p className="text-gray-300 text-lg leading-relaxed">
                "{tool.desc}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-14 h-14 rounded-full object-cover border border-white/10"
                />

                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg">
                    {tool.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {tool.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Footer;