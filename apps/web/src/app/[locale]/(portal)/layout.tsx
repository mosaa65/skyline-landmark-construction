import { auth } from "@/auth";
import Link from "next/link";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <section className="section-dark">
      <div className="container-shell flex min-h-screen gap-8 py-16">
        <aside className="hidden w-64 rounded-3xl border border-white/10 bg-white/5 p-6 lg:block">
          <p className="text-xs uppercase tracking-[0.3em] text-sand/50">Portal</p>
          <nav className="mt-6 flex flex-col gap-4 text-sm text-sand/70">
            <Link href="/client" className="transition hover:text-gold">
              Client Dashboard
            </Link>
            <Link href="/partner" className="transition hover:text-gold">
              Partner Dashboard
            </Link>
            <Link href="/login" className="transition hover:text-gold">
              {session ? "Switch Account" : "Sign In"}
            </Link>
          </nav>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
