import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center bg-ink text-sand relative overflow-hidden">
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink"></div>
         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(201,169,110,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,110,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="relative z-10 container-shell text-center max-w-2xl mx-auto" data-reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gold mb-8">System Malfunction</p>
        <h1 className="font-display text-7xl md:text-9xl tracking-tighter mb-6">404</h1>
        <p className="text-xl text-sand/70 mb-12 leading-relaxed">
          The requested path doesn't align with our current blueprints. This page has been moved or no longer exists in the project scope.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Button href="/" variant="primary">Return to Base</Button>
           <Button href="/contact" variant="outline" className="border-white/20 text-sand hover:bg-white/10">Report Issue</Button>
        </div>
      </div>
    </div>
  );
}
