"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Section({
  number,
  label,
  children,
  className = "",
  center = false,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}) {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className={`reveal border-t border-[var(--border-subtle)] py-24 ${center ? "text-center" : ""} ${className}`}
    >
      <span className="mb-4 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[2px] text-[var(--accent-green)]">
        {number} — {label}
      </span>
      {children}
    </section>
  );
}
