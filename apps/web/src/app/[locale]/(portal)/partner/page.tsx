import { auth } from "@/auth";
import Link from "next/link";

const AVAILABLE_OPPORTUNITIES = [
  {
    id: "1",
    project: "Northpark Commercial Complex",
    type: "Commercial",
    value: "$4.2M",
    scope: "MEP & Electrical",
    location: "Austin, TX",
    deadline: "Apr 15, 2026",
    status: "Open",
  },
  {
    id: "2",
    project: "Harbor Expansion Phase 2",
    type: "Industrial",
    value: "$9.8M",
    scope: "Structural Steel & Cladding",
    location: "Rotterdam, NL",
    deadline: "May 01, 2026",
    status: "Open",
  },
  {
    id: "3",
    project: "Seraphim Tower Fit-Out",
    type: "Luxury Residential",
    value: "$2.1M",
    scope: "Interior Joinery & Finishes",
    location: "Monaco",
    deadline: "Apr 28, 2026",
    status: "Closing Soon",
  },
];

const STATUS_COLORS: Record<string, string> = {
  "Open": "border-green-500/30 bg-green-500/10 text-green-400",
  "Closing Soon": "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

export default async function PartnerPortal() {
  const session = await auth();

  return (
    <div className="space-y-8 text-sand">
      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold/70">Partner Portal</p>
        <h1 className="mt-3 font-display text-4xl text-sand">Subcontractor Opportunities</h1>
        <p className="mt-2 text-sand/60">
          Welcome, <span className="text-gold">{session?.user?.name ?? "Partner"}</span>. Browse and bid on open project packages.
        </p>
      </div>

      {/* Stats strip */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Open Opportunities", value: "3", icon: "📦" },
          { label: "Total Value Available", value: "$16.1M", icon: "💼" },
          { label: "Your Active Bids", value: "1", icon: "📋" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-2xl mb-1">{stat.icon}</p>
            <p className="text-2xl font-display text-gold">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.15em] text-sand/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Opportunity cards */}
      <div>
        <h2 className="text-lg font-display text-sand mb-4">Available Packages</h2>
        <div className="space-y-4">
          {AVAILABLE_OPPORTUNITIES.map((opp) => (
            <div key={opp.id} className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-gold/20 transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-sand">{opp.project}</h3>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] font-semibold ${STATUS_COLORS[opp.status] ?? ""}`}>
                      {opp.status}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.15em] text-sand/50">{opp.type} · {opp.scope}</p>
                </div>
                <p className="text-2xl font-display text-gold">{opp.value}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs text-sand/50 border-t border-white/5 pt-4">
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {opp.location}
                </span>
                <span>Bid Deadline: <span className="text-sand">{opp.deadline}</span></span>
                <Link
                  href="/contact"
                  className="ml-auto rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold hover:bg-gold hover:text-ink transition-all duration-300"
                >
                  Submit Bid →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner resources */}
      <div>
        <h2 className="text-lg font-display text-sand mb-4">Partner Resources</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: "📋", title: "Subcontractor Agreement Template", tag: "Legal" },
            { icon: "🛡️", title: "HSSE Requirements & Standards", tag: "Safety" },
            { icon: "📐", title: "Technical Specifications Library", tag: "Technical" },
            { icon: "📞", title: "Procurement Team Directory", tag: "Contact" },
          ].map((resource) => (
            <div key={resource.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-gold/20 cursor-pointer transition-colors group">
              <span className="text-2xl">{resource.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-sand group-hover:text-gold transition-colors">{resource.title}</p>
                <span className="text-[10px] uppercase tracking-[0.15em] text-sand/40">{resource.tag}</span>
              </div>
              <span className="text-sand/30 group-hover:text-gold transition-colors">↓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
