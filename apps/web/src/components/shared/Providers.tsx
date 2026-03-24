"use client";

import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const enableAuth = process.env.NEXT_PUBLIC_ENABLE_PORTAL_AUTH === "true";

  if (!enableAuth) {
    return <>{children}</>;
  }

  return <SessionProvider>{children}</SessionProvider>;
}
