import { PortableText } from "@portabletext/react";

const components = {
  block: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="mt-8 text-2xl font-display text-ink">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="mt-6 text-xl font-display text-ink">{children}</h3>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mt-4 text-base text-ink/70">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="mt-4 space-y-2 text-ink/70">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => <li>• {children}</li>,
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}
