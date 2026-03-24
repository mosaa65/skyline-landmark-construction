import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/data/careers";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const job = jobs.find((j) => j.slug === resolvedParams.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Job Header */}
      <section className="bg-ink pt-32 pb-20">
        <div className="container-shell max-w-4xl mx-auto text-sand" data-reveal>
          <div className="flex flex-wrap items-center gap-4 mb-8">
             <span className="px-3 py-1 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] bg-gold/5">
               {job.type}
             </span>
             <span className="text-sand/60 text-sm flex items-center gap-2">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               {job.location}
             </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            {job.title}
          </h1>
          
          <p className="text-xl text-sand/80 leading-relaxed max-w-2xl">
            {job.summary}
          </p>
        </div>
      </section>

      {/* Job Details */}
      <section className="section-light bg-surface pt-16 pb-24">
         <div className="container-shell max-w-5xl mx-auto">
            <div className="grid gap-16 lg:grid-cols-[1.8fr_1fr]">
               
               {/* Main Details */}
               <div data-reveal className="space-y-16">
                  {/* Overview */}
                  <div>
                    <h2 className="text-2xl font-display text-ink mb-6">The Role</h2>
                    <div className="prose prose-lg prose-p:text-ink/70 prose-p:leading-relaxed max-w-none">
                       <p>
                         At our core, we are engineers of the extraordinary. We take on the projects others deem too complex, too demanding, or too ambitious. As a {job.title}, you will be at the vanguard of this mission, directly impacting the skyline and the communities our infrastructure serves.
                       </p>
                       <p className="mt-4">
                         This is not a role for the complacent. We require rigorous strategic thinking, a deep respect for safety and quality, and the leadership to drive cross-functional alignment in high-stakes environments.
                       </p>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h2 className="text-2xl font-display text-ink mb-6">Key Responsibilities</h2>
                    <ul className="space-y-4">
                      {job.responsibilities.map((resp, idx) => (
                         <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-ink/5 shadow-sm">
                           <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center mt-0.5 font-bold text-xs">
                             {idx + 1}
                           </span>
                           <span className="text-ink/80">{resp}</span>
                         </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="text-2xl font-display text-ink mb-6">What We're Looking For</h2>
                    <ul className="space-y-4">
                      {job.requirements.map((req, idx) => (
                         <li key={idx} className="flex items-start gap-3">
                           <span className="flex-shrink-0 text-gold mt-1">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                             </svg>
                           </span>
                           <span className="text-ink/70 leading-relaxed">{req}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
               </div>

               {/* Sidebar / Apply */}
               <div data-reveal data-delay="0.2">
                  <div className="glass-panel rounded-[28px] p-8 md:p-10 sticky top-32 border border-ink/5 bg-white shadow-card">
                     <h3 className="text-xl font-display text-ink mb-2">Ready to Build?</h3>
                     <p className="text-sm text-ink/60 mb-8 leading-relaxed">
                        Join an elite team delivering the world's most complex projects.
                     </p>
                     
                     <div className="space-y-6 mb-8 border-t border-ink/10 pt-6">
                        <div>
                          <label className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/70">Full Name</label>
                          <input className="w-full mt-2 bg-surface border border-ink/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Jane Doe" />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/70">Email Address</label>
                          <input type="email" className="w-full mt-2 bg-surface border border-ink/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold" placeholder="jane@example.com" />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/70">LinkedIn URL</label>
                          <input className="w-full mt-2 bg-surface border border-ink/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold" placeholder="linkedin.com/in/..." />
                        </div>
                     </div>
                     
                     <Button variant="primary" className="w-full justify-center">Submit Application</Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      {/* Return Link */}
      <section className="bg-white py-12 border-t border-ink/5 text-center">
         <div className="container-shell">
            <Link href="/careers" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink/60 hover:text-gold transition-colors">
               <span>←</span>
               <span>Back to Open Positions</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
