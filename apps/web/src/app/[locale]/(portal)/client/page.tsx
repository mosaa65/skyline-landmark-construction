import { auth } from "@/auth";
import Link from "next/link";

const MOCK_PROJECTS = [
  {
    id: "1",
    name: "Skyline Tower HQ",
    type: "Commercial",
    phase: "Structure",
    progress: 68,
    budget: "$42M",
    spent: "$28.5M",
    nextMilestone: "Facade Installation",
    nextDate: "Apr 2026",
    status: "on-track",
  },
  {
    id: "2",
    name: "Lakeside Residences",
    type: "Luxury Residential",
    phase: "Fit-Out",
    progress: 87,
    budget: "$18M",
    spent: "$15.7M",
    nextMilestone: "Final Inspection",
    nextDate: "May 2026",
    status: "on-track",
  },
];

const RECENT_DOCS = [
  { name: "Contract Amendment #3", date: "Mar 12, 2026", type: "Legal" },
  { name: "March Progress Report", date: "Mar 01, 2026", type: "Report" },
  { name: "Structural Engineer Certificate", date: "Feb 20, 2026", type: "Certificate" },
  { name: "Material Delivery Schedule", date: "Feb 15, 2026", type: "Schedule" },
];

const STATUS_COLORS: Record<string, string> = {
  "on-track": "bg-green-500",
  "delayed": "bg-red-500",
  "at-risk": "bg-yellow-500",
};

export default async function ClientPortal() {
  const session = await auth();

  return (
    <div className="space-y-8 text-sand">
      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold/70">Client Portal</p>
        <h1 className="mt-3 font-display text-4xl text-sand">Project Command Center</h1>
        <p className="mt-2 text-sand/60">
          Welcome back, <span className="text-gold">{session?.user?.name ?? "Valued Client"}</span>. Here&apos;s your live project overview.
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: "Active Projects", value: "2", icon: "🏗️" },
          { label: "Total Budget", value: "$60M", icon: "💰" },
          { label: "Avg. Completion", value: "78%", icon: "📊" },
          { label: "Documents", value: "24", icon: "📁" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-2xl mb-1">{stat.icon}</p>
            <p className="text-2xl font-display text-gold">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.15em] text-sand/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Active projects */}
      <div>
        <h2 className="text-lg font-display text-sand mb-4">Active Projects</h2>
        <div className="space-y-4">
          {MOCK_PROJECTS.map((project) => (
            <div key={project.id} className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`h-2 w-2 rounded-full ${STATUS_COLORS[project.status]}`} />
                    <h3 className="font-semibold text-sand">{project.name}</h3>
                  </div>
                  <p className="text-xs uppercase tracking-[0.15em] text-sand/50">{project.type} · {project.phase} Phase</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gold">{project.spent} <span className="text-sand/40 font-normal">/ {project.budget}</span></p>
                  <p className="text-xs text-sand/40">Budget utilization</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-sand/50 mb-1.5">
                  <span>Construction Progress</span>
                  <span className="text-gold font-semibold">{project.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-gold to-amber-500 transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-sand/50">
                <span>Next: <span className="text-sand">{project.nextMilestone}</span></span>
                <span>{project.nextDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent documents */}
      <div>
        <h2 className="text-lg font-display text-sand mb-4">Recent Documents</h2>
        <div className="rounded-[24px] border border-white/10 bg-white/5 overflow-hidden">
          {RECENT_DOCS.map((doc, idx) => (
            <div
              key={doc.name}
              className={`flex items-center justify-between p-5 hover:bg-white/5 transition-colors cursor-pointer ${idx < RECENT_DOCS.length - 1 ? "border-b border-white/5" : ""}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold text-sm">
                  📄
                </div>
                <div>
                  <p className="text-sm font-medium text-sand">{doc.name}</p>
                  <p className="text-xs text-sand/40">{doc.date}</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-sand/50">
                {doc.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/contact" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-gold/30 transition-colors group">
          <span className="text-2xl">💬</span>
          <div>
            <p className="font-semibold text-sand group-hover:text-gold transition-colors">Message Project Manager</p>
            <p className="text-xs text-sand/50">Direct line to your PM team</p>
          </div>
        </Link>
        <Link href="/quote" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-gold/30 transition-colors group">
          <span className="text-2xl">➕</span>
          <div>
            <p className="font-semibold text-sand group-hover:text-gold transition-colors">Start a New Project</p>
            <p className="text-xs text-sand/50">Request a consultation or quote</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
