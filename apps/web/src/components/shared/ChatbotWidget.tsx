"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

const FAQ_RESPONSES: Record<string, string> = {
  quote:
    "I can connect you with our team to discuss your project. Head to our Quote page at /quote to start the process — it takes about 3 minutes.",
  pricing:
    "Our projects range from $5M to $500M+ depending on scope, type, and location. Visit /quote to share your parameters and get a preliminary estimate.",
  contact:
    "You can reach us at +1 (212) 555-0189 or partnerships@constructionco.com. For an in-depth consultation, visit /contact.",
  commercial:
    "We've delivered 180+ commercial projects including towers, headquarters, and mixed-use developments. View our portfolio at /projects.",
  residential:
    "Our residential portfolio spans luxury estates and high-rise residences globally. See examples at /projects or visit /industries/residential.",
  industrial:
    "We specialize in large-scale industrial facilities — logistics hubs, manufacturing plants, and energy infrastructure. Visit /industries/industrial.",
  bim:
    "Yes! BIM integration is core to every project we undertake. It reduces rework by 60% and aligns all stakeholders before ground breaks. Learn more at /innovation.",
  sustainability:
    "We target LEED certification on all eligible projects and have achieved a 30% reduction in embodied carbon. Full details at /sustainability.",
  timeline:
    "Project timelines depend on scope, but our track record is 98% on-time delivery. Our AI scheduling system continuously monitors the critical path.",
  careers:
    "We're always looking for top talent — engineers, project managers, and construction innovators. Explore opportunities at /careers.",
  default:
    "Thanks for reaching out! Our team is available 24/7. You can also call us at +1 (212) 555-0189 or visit /contact to speak with a specialist.",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("quote") || lower.includes("estimate") || lower.includes("cost")) return FAQ_RESPONSES.quote;
  if (lower.includes("price") || lower.includes("budget")) return FAQ_RESPONSES.pricing;
  if (lower.includes("contact") || lower.includes("phone") || lower.includes("email")) return FAQ_RESPONSES.contact;
  if (lower.includes("commercial") || lower.includes("tower") || lower.includes("office")) return FAQ_RESPONSES.commercial;
  if (lower.includes("residential") || lower.includes("home") || lower.includes("luxury")) return FAQ_RESPONSES.residential;
  if (lower.includes("industrial") || lower.includes("warehouse") || lower.includes("factory")) return FAQ_RESPONSES.industrial;
  if (lower.includes("bim") || lower.includes("technology") || lower.includes("innovation")) return FAQ_RESPONSES.bim;
  if (lower.includes("green") || lower.includes("leed") || lower.includes("sustain")) return FAQ_RESPONSES.sustainability;
  if (lower.includes("timeline") || lower.includes("schedule") || lower.includes("long")) return FAQ_RESPONSES.timeline;
  if (lower.includes("career") || lower.includes("job") || lower.includes("hire")) return FAQ_RESPONSES.careers;
  return FAQ_RESPONSES.default;
}

const QUICK_ACTIONS = [
  "Get a project quote",
  "Explore our portfolio",
  "BIM & technology",
  "Sustainability record",
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! I'm your project advisor. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = { role: "bot", text: getBotResponse(text) };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 shadow-[0_8px_30px_rgba(232,168,56,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(232,168,56,0.6)]"
        style={{ background: "linear-gradient(135deg,#e8a838,#c9a96e)" }}
      >
        {open ? (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {/* Online indicator */}
        {!open && (
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
        )}
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-[28px] overflow-hidden shadow-[0_24px_80px_rgba(6,8,16,0.4)] transition-all duration-500 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ maxHeight: "560px" }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)" }}
        >
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 text-white text-sm font-bold">
              AI
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink bg-green-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Project Advisor</p>
            <p className="text-[11px] text-white/50">Online · Responds instantly</p>
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex flex-col gap-3 overflow-y-auto p-4"
          style={{ background: "#fafaf8", flex: 1, minHeight: 0 }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] rounded-[18px] px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-br-sm text-white"
                    : "rounded-bl-sm border border-black/5 bg-white text-gray-700 shadow-sm"
                }`}
                style={
                  msg.role === "user"
                    ? { background: "linear-gradient(135deg,#e8a838,#c9a96e)" }
                    : {}
                }
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="flex gap-1.5 rounded-[18px] rounded-bl-sm border border-black/5 bg-white px-4 py-3 shadow-sm">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 rounded-full bg-gray-400"
                    style={{ animation: `bounce 1s infinite ${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions (show only on first load) */}
          {messages.length === 1 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action}
                  onClick={() => sendMessage(action)}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm transition-all hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border-t border-black/5 bg-white px-3 py-3">
          <input
            className="flex-1 rounded-full border border-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-800 outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 placeholder:text-gray-400"
            placeholder="Ask about our projects..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-all disabled:opacity-40"
            style={{ background: "linear-gradient(135deg,#e8a838,#c9a96e)" }}
          >
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
