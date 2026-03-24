import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    ok: true,
    message:
      "AI assistant is in Phase 5 scaffolding. Enable NEXT_PUBLIC_ENABLE_AI_WIDGET for UI, and connect an LLM provider when ready.",
  });
}
