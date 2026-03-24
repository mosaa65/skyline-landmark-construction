"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

const FAQ_RESPONSES: Record<string, string> = {
  quote:
    "I can connect you with our project team! Head to /quote to start a guided 4-step request — it takes about 3 minutes and a specialist will respond within 24 hours.",
  pricing:
    "Our projects range from $5M to $500M+ depending on scope, type, and location. Visit /quote to share your parameters and get a tailored response.",
  contact:
    "You can reach us at +1 (212) 555-0189 or partnerships@constructionco.com, or visit /contact for a full consultation form.",
  commercial:
    "We've delivered 180+ commercial projects including towers, headquarters, and mixed-use developments across 3 continents. Browse at /projects.",
  residential:
    "Our residential portfolio spans luxury estates and high-rise residences globally. See examples at /projects or visit /industries/residential.",
  industrial:
    "We specialize in large-scale industrial facilities — logistics hubs, manufacturing plants, and energy infrastructure. Visit /industries/industrial.",
  bim:
    "Yes! BIM integration is core to every project — it reduces rework by 60% and aligns all stakeholders before ground breaks. Learn more at /innovation.",
  sustainability:
    "We target LEED certification on all eligible projects and have achieved a 30% reduction in embodied carbon across our portfolio. See /sustainability.",
  timeline:
    "Our track record is 98% on-time delivery. Our AI scheduling engine continuously monitors the critical path and flags risks weeks in advance.",
  careers:
    "We're always looking for elite construction leaders, engineers, and innovators. Explore open positions at /careers.",
  default:
    "Thanks for your question! For detailed inquiries, please call us at +1 (212) 555-0189 or visit /contact to speak with a specialist.",
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
  if (lower.includes("timeline") || lower.includes("schedule") || lower.includes("long") || lower.includes("how long")) return FAQ_RESPONSES.timeline;
  if (lower.includes("career") || lower.includes("job") || lower.includes("hire") || lower.includes("work")) return FAQ_RESPONSES.careers;
  return FAQ_RESPONSES.default;
}

const QUICK_ACTIONS = [
  "Get a project quote",
  "View our portfolio",
  "BIM & innovation",
  "Sustainability",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! I'm your Project Advisor. Ask me about our services, portfolio, or get a quote — I'm here to help.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getBotResponse(text) }]);
      setTyping(false);
    }, 800 + Math.random() * 500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open AI assistant"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_30px_rgba(232,168,56,0.5)] transition-all duration-300 hover:scale-110"
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
        {!open && (
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
        )}
      </button>

      {/* Chat Panel */}
      <div
        className="fixed bottom-24 right-6 z-50 flex w-80 flex-col overflow-hidden rounded-[28px] shadow-[0_24px_80px_rgba(6,8,16,0.45)] transition-all duration-500 sm:w-96"
        style={{
          maxHeight: "540px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(20px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4" style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)" }}>
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: "linear-gradient(135deg,#e8a838,#c9a96e)" }}>
              AI
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#1a1a2e] bg-green-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Project Advisor</p>
            <p className="text-[11px] text-white/50">Online · Responds instantly</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4" style={{ background: "#fafaf8", minHeight: 0 }}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[82%] rounded-[18px] px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-br-sm text-white"
                    : "rounded-bl-sm border border-black/5 bg-white text-gray-700 shadow-sm"
                }`}
                style={msg.role === "user" ? { background: "linear-gradient(135deg,#e8a838,#c9a96e)" } : {}}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="flex gap-1.5 rounded-[18px] rounded-bl-sm border border-black/5 bg-white px-4 py-3 shadow-sm">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-gray-400" style={{ animation: `chatBounce 1s infinite ${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          )}
          {messages.length === 1 && (
            <div className="mt-1 flex flex-wrap gap-2">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action}
                  onClick={() => sendMessage(action)}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm transition-all hover:border-yellow-400 hover:bg-yellow-50"
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
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all disabled:opacity-40"
            style={{ background: "linear-gradient(135deg,#e8a838,#c9a96e)" }}
          >
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes chatBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
