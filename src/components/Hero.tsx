"use client";

export default function Hero() {
  return (
    <div
      className="mt-16 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
      style={{
        boxShadow: "var(--shadow-terminal)",
        animation: "windowFadeIn 0.8s ease-out",
      }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-[var(--border-color)] bg-[linear-gradient(180deg,#1a1a1a,#111111)] px-[18px] py-3.5">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[var(--color-error)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--color-warning)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--color-success)]" />
        </div>
        <span className="flex-1 text-center font-[family-name:var(--font-mono)] text-[11px] lowercase tracking-[0.5px] text-[var(--text-muted)]">
          ~/superhuman-workshop
        </span>
      </div>

      {/* Terminal Body */}
      <div className="px-10 pb-14 pt-10 max-sm:px-6 max-sm:pb-10 max-sm:pt-7">
        {/* Command Line */}
        <div className="mb-5 flex items-center gap-2.5 overflow-hidden font-[family-name:var(--font-mono)] text-sm text-[var(--accent-green)]">
          <span className="shrink-0 text-[var(--text-muted)]">$</span>
          <span
            className="w-0 overflow-hidden whitespace-nowrap"
            style={{ animation: "typing 1.5s steps(40) 0.3s forwards" }}
          >
            claude &quot;make me superhuman&quot;
          </span>
          <span
            className="inline-block h-5 w-2.5 shrink-0 bg-[var(--accent-green)]"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </div>

        {/* Badge */}
        <div
          className="mb-5 inline-flex items-center gap-2 rounded-md border border-[rgba(0,255,136,0.2)] bg-[var(--accent-green-dim)] px-3.5 py-2 font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-wider text-[var(--accent-green)]"
          style={{ animation: "badgeFadeIn 0.5s ease-out 1.8s both" }}
        >
          Live Workshop &bull; Feb 15
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(40px,7vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)]"
          style={{ animation: "heroFadeIn 0.6s ease-out 2.0s both" }}
        >
          From Chatbots
          <br />
          to <span className="highlight">Conductors.</span>
        </h1>

        {/* Subhead */}
        <p
          className="mt-5 max-w-[520px] text-lg text-[var(--text-secondary)]"
          style={{ animation: "heroFadeIn 0.6s ease-out 2.1s both" }}
        >
          Build your personal website &amp; learn the spec-driven methodology
          for any project — coding, renovating, or business.
        </p>

        {/* Meta pills */}
        <div
          className="mt-6 mb-8 flex flex-wrap gap-3"
          style={{ animation: "heroFadeIn 0.6s ease-out 2.2s both" }}
        >
          {[
            { dot: true, text: "Sunday, Feb 15th" },
            { text: "12:00 – 14:30" },
            { text: "Amsterdam" },
            { text: "12 seats" },
          ].map((pill) => (
            <span
              key={pill.text}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-color)] bg-[rgba(255,255,255,0.03)] px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--text-secondary)]"
            >
              {pill.dot && (
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-green)]" />
              )}
              {pill.text}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#rsvp"
          className="cta-shine inline-flex items-center gap-2.5 rounded-[10px] bg-[var(--accent-gold)] px-8 py-4 text-[15px] font-bold uppercase tracking-[0.5px] text-[var(--bg-primary)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#ffe456] hover:shadow-[0_10px_40px_rgba(255,214,10,0.3)]"
          style={{ animation: "heroFadeIn 0.6s ease-out 2.3s both" }}
        >
          Claim Your Seat
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-[18px] w-[18px] transition-transform duration-250 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Sub-CTA text */}
        <p
          className="mt-4 font-[family-name:var(--font-mono)] text-[13px] text-[var(--text-muted)]"
          style={{ animation: "heroFadeIn 0.6s ease-out 2.4s both" }}
        >
          Leave with a deployed site AND a new operating system for execution.
        </p>
      </div>
    </div>
  );
}
