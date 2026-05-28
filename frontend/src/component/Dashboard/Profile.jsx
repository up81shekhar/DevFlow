import React, { useState } from 'react';
import {
  Plus, Search, Folder, MessageSquare, Cpu,
  FileText, CheckSquare, Sparkles, ChevronDown,
  UploadCloud, Share2, Copy, Trash2, Paperclip, ArrowUp
} from 'lucide-react';

const Profile = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex h-screen w-full bg-[#0B0D16] text-[#9EA3B0] font-sans antialiased overflow-hidden text-[13px]">

      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="w-[220px] bg-[#0F111A] flex flex-col border-r border-[#1C1F30] p-3 h-full shrink-0 gap-3 overflow-y-auto">

        {/* Brand */}
        <div className="flex items-center gap-2 px-1 text-white font-semibold text-[13px]">
          <div className="bg-gradient-to-tr from-purple-600 to-indigo-500 w-[26px] h-[26px] rounded-[7px] flex items-center justify-center text-white shrink-0">
            <Cpu size={14} />
          </div>
          <span>DevFlow AI</span>
        </div>

        {/* New Chat */}
        <button className="w-full bg-[#5233E7] hover:bg-[#4326CE] text-white font-medium py-2 px-3 rounded-[10px] flex items-center justify-center gap-2 transition-colors text-[12px]">
          <Plus size={14} />
          New Chat
        </button>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" size={13} />
          <input
            type="text"
            placeholder="Search…"
            className="w-full bg-[#161926] text-[12px] text-gray-300 pl-8 pr-3 py-2 rounded-lg border border-transparent focus:border-purple-600 focus:outline-none transition-all"
          />
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-2 mb-1">Workspace</span>
          {[
            { icon: <Folder size={14} />, label: 'Projects' },
            { icon: <MessageSquare size={14} />, label: 'Chats', active: true },
            { icon: <Cpu size={14} />, label: 'AI Tools' },
            { icon: <FileText size={14} />, label: 'Prompts' },
            { icon: <CheckSquare size={14} />, label: 'Tasks' },
          ].map(({ icon, label, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-2 px-2 py-[7px] rounded-lg text-[12px] transition-colors ${
                active ? 'bg-[#1C1F30] text-white font-medium' : 'hover:bg-[#161926]'
              }`}
            >
              {icon} {label}
            </a>
          ))}
        </nav>

        {/* Recent Chats */}
        <nav className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-2 mb-1">Recent Chats</span>
          {['Authentication in Node.js', 'React performance tips', 'MongoDB indexing', 'API rate limiting', 'JWT best practices'].map((title, i) => (
            <a
              key={title}
              href="#"
              className={`truncate text-[11.5px] px-2 py-[6px] rounded-md transition-colors ${
                i === 0
                  ? 'text-white font-medium border-l-2 border-purple-500 pl-[6px] bg-[#161926]'
                  : 'hover:bg-[#161926]'
              }`}
            >
              {title}
            </a>
          ))}
          <a href="#" className="text-[11px] text-purple-400 font-medium px-2 py-1.5 hover:underline">View all</a>
        </nav>

        {/* Upgrade */}
        <div className="bg-[#141624] p-3 rounded-xl border border-[#272B44] mt-auto shrink-0">
          <div className="flex items-center gap-1.5 mb-1.5 text-white font-semibold text-[12px]">
            <div className="bg-purple-600 p-[3px] rounded"><Sparkles size={12} /></div>
            Upgrade to Pro
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed mb-2.5">Unlock unlimited AI discussions and more features.</p>
          <button className="w-full bg-[#5233E7] hover:bg-[#4326CE] text-white text-[11px] font-medium py-1.5 rounded-lg transition-colors">Upgrade now</button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col h-full bg-[#0D0F1A] relative overflow-hidden">

        {/* Topbar */}
        <header className="h-[52px] border-b border-[#1C1F30] flex items-center justify-between px-5 bg-[#0D0F1A]/80 backdrop-blur-md z-10 shrink-0">
          <button className="flex items-center gap-1.5 text-white font-medium text-[13px] hover:bg-[#161926] py-1 px-2.5 rounded-lg transition-colors">
            Authentication in Node.js
            <ChevronDown size={13} className="text-gray-400" />
          </button>
          <div className="flex items-center gap-3.5">
            {[UploadCloud, Share2, Trash2].map((Icon, i) => (
              <button key={i} className="text-gray-500 hover:text-white transition-colors">
                <Icon size={15} />
              </button>
            ))}
            <div className="w-7 h-7 rounded-full overflow-hidden border-[1.5px] border-purple-500 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 md:px-20 py-5 space-y-6 pb-28">

          {/* User bubble */}
          <div className="flex justify-end">
            <div className="max-w-[72%] bg-[#3617D9] text-white rounded-[14px] rounded-tr-[3px] px-4 py-2.5">
              <p className="text-[12.5px] leading-relaxed">How to implement authentication in Node.js using JWT?</p>
              <span className="block text-[10px] text-purple-200/70 text-right mt-1">10:30 AM</span>
            </div>
          </div>

          {/* AI response */}
          <div className="flex items-start gap-2.5 max-w-[88%]">
            <div className="w-7 h-7 rounded-[8px] bg-purple-900/30 border border-purple-500/25 flex items-center justify-center shrink-0 text-purple-400 mt-0.5">
              <Cpu size={13} />
            </div>
            <div className="space-y-3 w-full">
              <p className="text-[12.5px] text-[#C8CBD6] leading-relaxed">
                Here's a simple way to implement authentication in Node.js using JWT and Express.
              </p>

              {/* Code block */}
              <div className="bg-[#090A10] border border-[#1C1F30] rounded-[10px] overflow-hidden font-mono text-[11.5px] w-full">
                <div className="bg-[#121420] px-3 py-[7px] flex items-center justify-between border-b border-[#1C1F30] text-gray-500 text-[11px]">
                  <span>JavaScript</span>
                  <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                    <Copy size={11} /> Copy
                  </button>
                </div>
                <div className="p-3.5 overflow-x-auto">
                  <pre className="text-[#C8CBD6] leading-[1.65]">{`const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // validate user
  const token = jwt.sign({ email }, "secretKey", {
    expiresIn: '1h'
  });
  res.json({ token });
});`}</pre>
                </div>
              </div>

              <p className="text-[12.5px] text-[#C8CBD6] leading-relaxed">
                This creates a login route that generates a JWT token. You can then use this token to protect other routes.
              </p>

              <div className="flex items-center gap-2 text-gray-500 pt-0.5">
                {[Copy, Share2, Trash2].map((Icon, i) => (
                  <button key={i} className="hover:text-gray-300 p-1 transition-colors">
                    <Icon size={13} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0F1A] via-[#0D0F1A] to-transparent pt-8 pb-4 px-5 md:px-20">
          <div className="max-w-3xl mx-auto relative bg-[#131622] rounded-xl border border-[#22263B] shadow-xl focus-within:border-purple-600 transition-colors flex items-center px-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask DevFlow AI anything…"
              className="flex-1 bg-transparent text-[12.5px] text-white py-3 px-2 focus:outline-none placeholder-gray-500"
            />
            <button className="text-gray-500 hover:text-gray-300 p-1.5 transition-colors">
              <Paperclip size={15} />
            </button>
            <button className="bg-[#4826D9] hover:bg-[#3B20D3] text-white p-1.5 rounded-lg transition-colors ml-1">
              <ArrowUp size={14} />
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-1.5">
            AI can make mistakes. Consider checking important information.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Profile;