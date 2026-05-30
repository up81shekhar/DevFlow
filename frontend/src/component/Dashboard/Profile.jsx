import React, { useState, useRef, useEffect } from "react";
import { RingLoader } from "react-spinners";
import {
  Plus,
  Search,
  Folder,
  MessageSquare,
  Cpu,
  FileText,
  CheckSquare,
  Sparkles,
  ChevronDown,
  UploadCloud,
  Share2,
  Copy,
  Trash2,
  Paperclip,
  ArrowUp,
  Menu, // Added for mobile menu trigger
  X,    // Added for closing mobile menu
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

// ── helpers ──────────────────────────────────────────────────────────────────
const nowTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const Profile = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // sessions: [{ id, title, messages: [{role,text,time}] }]
  const [sessions, setSessions] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [searchQuery, setSearch] = useState("");
  
  // Mobile responsive sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const bottomRef = useRef(null);

  // derived
  const currentSession = sessions.find((s) => s.id === activeId) ?? null;
  const messages = currentSession?.messages ?? [];

  // auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // ── helpers that mutate sessions ─────────────────────────────────────────
  const addMessage = (sid, msg) =>
    setSessions((prev) =>
      prev.map((s) =>
        s.id === sid ? { ...s, messages: [...s.messages, msg] } : s,
      ),
    );

  const autoTitle = (sid, text) =>
    setSessions((prev) =>
      prev.map((s) =>
        s.id === sid && s.title === "New Chat"
          ? { ...s, title: text.slice(0, 38) }
          : s,
      ),
    );

  // ── New Chat ──────────────────────────────────────────────────────────────
  const handleNewChat = () => {
    const id = uuidv4();
    setSessions((prev) => [{ id, title: "New Chat", messages: [] }, ...prev]);
    setActiveId(id);
    setInput("");
    setIsSidebarOpen(false); // Close sidebar on mobile after choosing a chat
  };

  // ── getReply — YOUR ORIGINAL API CALL, untouched ─────────────────────────
  const getReply = async () => {
    const text = input.trim();
    if (!text || loading) return;

    // create session on-the-fly if none is active
    let sid = activeId;
    if (!sid) {
      sid = uuidv4();
      setSessions((prev) => [
        { id: sid, title: text.slice(0, 38), messages: [] },
        ...prev,
      ]);
      setActiveId(sid);
    }

    addMessage(sid, { role: "user", text, time: nowTime() });
    autoTitle(sid, text);
    setInput("");
    setLoading(true);

    // ── ORIGINAL API CALL (unchanged) ────────────────────────────────────
    const options = {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ message: text, threadId: sid }),
    };
    try {
      const response = await fetch("https://devflow-production-ddad.up.railway.app/api/chat", options);
      const res = await response.json();
      console.log(res);
      addMessage(sid, { role: "ai", text: res.reply, time: nowTime() });
      setLoading(false);
    } catch (err) {
      console.log(err);
      addMessage(sid, {
        role: "ai",
        text: "⚠️ Server unreachable. Is your backend running on port 8080?",
        time: nowTime(),
      });
      setLoading(false);
    }
  };

  const filteredSessions = sessions.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen w-full bg-[#0B0D16] text-[#9EA3B0] font-sans antialiased overflow-hidden text-[13px] relative">
      
      {/* Backdrop overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ================= LEFT SIDEBAR ================= */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[240px] bg-[#0F111A] flex flex-col border-r border-[#1C1F30] p-3 h-full shrink-0 gap-3 overflow-y-auto transition-transform duration-300 ease-in-out
        md:static md:translate-x-0 md:w-[220px]
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Brand & Mobile Close Button */}
        <div className="flex items-center justify-between px-1 text-white font-semibold">
          <div className="flex items-center gap-2 text-[23px]">
            <img
              src="./src/assets/Logo.png"
              alt="logo"
              className="h-8 w-8 object-contain"
            />
            <span>DevFlow AI</span>
          </div>
          <button 
            className="md:hidden p-1 text-gray-400 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* New Chat */}
        <button
          onClick={handleNewChat}
          className="w-full bg-[#5233E7] hover:bg-[#4326CE] text-white font-medium py-2 px-3 rounded-[10px] flex items-center justify-center gap-2 transition-colors text-[12px]"
        >
          <Plus size={14} />
          New Chat
        </button>

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500"
            size={13}
          />
          <input
            type="text"
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#161926] text-[12px] text-gray-300 pl-8 pr-3 py-2 rounded-lg border border-transparent focus:border-purple-600 focus:outline-none transition-all"
          />
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-2 mb-1">
            Workspace
          </span>
          {[
            { icon: <Folder size={14} />, label: "Projects" },
            { icon: <MessageSquare size={14} />, label: "Chats", active: true },
            { icon: <Cpu size={14} />, label: "AI Tools" },
            { icon: <FileText size={14} />, label: "Prompts" },
            { icon: <CheckSquare size={14} />, label: "Tasks" },
          ].map(({ icon, label, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-2 px-2 py-[7px] rounded-lg text-[12px] transition-colors ${
                active
                  ? "bg-[#1C1F30] text-white font-medium"
                  : "hover:bg-[#161926]"
              }`}
            >
              {icon} {label}
            </a>
          ))}
        </nav>

        {/* Recent Chats */}
        <nav className="flex flex-col gap-0.5 flex-1 overflow-y-auto">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-2 mb-1">
            Recent Chats
          </span>

          {filteredSessions.length === 0 && (
            <p className="text-[11px] text-gray-600 px-2 py-1">No chats yet.</p>
          )}

          {filteredSessions.map((s) => (
            <div
              key={s.id}
              onClick={() => {
                setActiveId(s.id);
                setInput("");
                setIsSidebarOpen(false); // Close mobile panel upon selecting item
              }}
              className={`group flex items-center justify-between truncate text-[11.5px] px-2 py-[6px] rounded-md cursor-pointer transition-colors ${
                s.id === activeId
                  ? "text-white font-medium border-l-2 border-purple-500 pl-[6px] bg-[#161926]"
                  : "hover:bg-[#161926]"
              }`}
            >
              <span className="truncate flex-1">{s.title}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSessions((prev) => prev.filter((x) => x.id !== s.id));
                  if (activeId === s.id) setActiveId(null);
                }}
                className="opacity-100 md:opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-400 transition-all ml-1 shrink-0"
              >
                <Trash2 size={11} />
              </button>
            </div>
          ))}

          {filteredSessions.length > 0 && (
            <a
              href="#"
              className="text-[11px] text-purple-400 font-medium px-2 py-1.5 hover:underline"
            >
              View all
            </a>
          )}
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col h-full bg-[#0D0F1A] relative overflow-hidden w-full">
        {/* Topbar */}
        <header className="h-[52px] border-b border-[#1C1F30] flex items-center justify-between px-4 md:px-5 bg-[#0D0F1A]/80 backdrop-blur-md z-10 shrink-0 gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            {/* Hamburger button for mobile layouts */}
            <button 
              className="md:hidden p-1.5 text-gray-400 hover:text-white hover:bg-[#161926] rounded-lg transition-colors shrink-0"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={18} />
            </button>
            
            <button className="flex items-center gap-1.5 text-white font-medium text-[13px] hover:bg-[#161926] py-1 px-2.5 rounded-lg transition-colors truncate">
              <span className="truncate">{currentSession ? currentSession.title : "DevFlow AI"}</span>
              <ChevronDown size={13} className="text-gray-400 shrink-0" />
            </button>
          </div>
          
          <div className="flex items-center gap-2.5 md:gap-3.5 shrink-0">
            {[UploadCloud, Share2, Trash2].map((Icon, i) => (
              <button
                key={i}
                onClick={
                  i === 2
                    ? () => {
                        if (activeId)
                          setSessions((prev) =>
                            prev.map((s) =>
                              s.id === activeId ? { ...s, messages: [] } : s,
                            ),
                          );
                      }
                    : undefined
                }
                className="text-gray-500 hover:text-white transition-colors p-1"
              >
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

        {/* Messages Layout */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-20 py-5 space-y-6 pb-32">
          {/* Empty / welcome state */}
          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center select-none py-10">
              <p className="text-white text-[14px] font-semibold">
                {currentSession ? "Start the conversation" : "Welcome to"}
              </p>
              <div className="flex items-center gap-2 px-1 text-white font-semibold text-[23px]">
                <img
                  src="./src/assets/Logo.png"
                  alt="logo"
                  className="h-8 w-8 object-contain"
                />
                <span>DevFlow AI</span>
              </div>
              <p className="text-[12px] text-gray-500 max-w-[260px]">
                {currentSession
                  ? "Type a message below."
                  : 'Click the menu icon or "New Chat" to get started.'}
              </p>
            </div>
          )}

          {/* Render all messages */}
          {messages.map((msg, idx) =>
            msg.role === "user" ? (
              <div key={idx} className="flex justify-end">
                <div className="max-w-[85%] md:max-w-[72%] bg-[#3617D9] text-white rounded-[14px] rounded-tr-[3px] px-4 py-2.5">
                  <p className="text-[12.5px] leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </p>
                  <span className="block text-[10px] text-purple-200/70 text-right mt-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            ) : (
              <div key={idx} className="flex items-start gap-2.5 max-w-[95%] md:max-w-[88%]">
                <div className="w-7 h-7 rounded-[8px] bg-purple-900/30 border border-purple-500/25 flex items-center justify-center shrink-0 text-purple-400 mt-0.5">
                  <Cpu size={13} />
                </div>
                <div className="space-y-3 w-full overflow-hidden">
                  <p className="text-[12.5px] text-[#C8CBD6] leading-relaxed whitespace-pre-wrap breakdown-words">
                    {msg.text}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 pt-0.5">
                    {[Copy, Share2, Trash2].map((Icon, i) => (
                      <button
                        key={i}
                        className="hover:text-gray-300 p-1 transition-colors"
                      >
                        <Icon size={13} />
                      </button>
                    ))}
                  </div>
                  <span className="block text-[10px] text-gray-600">
                    {msg.time}
                  </span>
                </div>
              </div>
            )
          )}

          {/* Loading spinner */}
          {loading && (
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-[8px] bg-purple-900/30 border border-purple-500/25 flex items-center justify-center shrink-0 text-purple-400">
                <Cpu size={13} />
              </div>
              <RingLoader color="#0eff42" loading={loading} size={28} />
            </div>
          )}

          {/* scroll anchor */}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0F1A] via-[#0D0F1A] to-transparent pt-8 pb-4 px-4 sm:px-6 md:px-20 z-10">
          <div className="max-w-3xl mx-auto relative bg-[#131622] rounded-xl border border-[#22263B] shadow-xl focus-within:border-purple-600 transition-colors flex items-center px-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? getReply() : "")}
              placeholder="Ask DevFlow AI anything…"
              className="flex-1 bg-transparent text-[12.5px] text-white py-3 px-2 focus:outline-none placeholder-gray-500 w-full"
            />
            <button
              onClick={getReply}
              className="bg-[#4826D9] hover:bg-[#3B20D3] text-white p-1.5 rounded-lg transition-colors ml-1 shrink-0"
            >
              <ArrowUp size={14} />
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-1.5 px-4 line-clamp-1">
            AI can make mistakes. Consider checking important information.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Profile;