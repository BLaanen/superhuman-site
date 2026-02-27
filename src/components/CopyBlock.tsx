"use client";

import { useState } from "react";

export default function CopyBlock({
  command,
  label,
  variant = "terminal",
}: {
  command: string;
  label?: string;
  variant?: "terminal" | "claude";
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === "claude") {
    return (
      <div className="my-4">
        <div className="rounded-lg border border-dashed border-[var(--accent-gold)] bg-[rgba(255,214,10,0.04)] px-5 py-4">
          <span className="mb-2 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[2px] text-[var(--accent-gold)]">
            Paste into Claude Code
          </span>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="min-w-0 break-words font-[family-name:var(--font-mono)] text-[15px] leading-[1.6] text-[var(--text-primary)]">
              {command}
            </p>
            <button
              onClick={handleCopy}
              className="shrink-0 cursor-pointer self-start rounded-md px-4 py-2 font-[family-name:var(--font-mono)] text-[13px] font-semibold transition-all duration-200 sm:self-center"
              style={{
                backgroundColor: copied
                  ? "var(--accent-green)"
                  : "var(--accent-gold)",
                color: "var(--bg-primary)",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-4">
      {label && (
        <span className="mb-2 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[2px] text-[var(--text-muted)]">
          {label}
        </span>
      )}
      <div className="flex flex-col gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <code className="min-w-0 break-words font-[family-name:var(--font-mono)] text-[15px] text-[var(--text-primary)]">
          {command}
        </code>
        <button
          onClick={handleCopy}
          className="shrink-0 cursor-pointer self-start rounded-md px-4 py-2 font-[family-name:var(--font-mono)] text-[13px] font-semibold transition-all duration-200 sm:self-center"
          style={{
            backgroundColor: copied
              ? "var(--accent-green)"
              : "var(--accent-gold)",
            color: "var(--bg-primary)",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
