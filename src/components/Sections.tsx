"use client";

/* ===== 01 — THE PROBLEM ===== */
export function ProblemSection() {
  return (
    <>
      <h2 className="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        You&apos;re driving a sports car
        <br />
        to the <span className="highlight">mailbox.</span>
      </h2>

      <blockquote className="my-8 border-l-[3px] border-[var(--accent-gold)] pl-5 text-[17px] italic text-[var(--text-primary)]">
        Using AI as a chatbot barely scratches the surface. What&apos;s changed
        isn&apos;t that AI got smarter — it&apos;s that we&apos;ve figured out
        how to <em>work with it.</em>
      </blockquote>

      <p className="text-base text-[var(--text-secondary)]">
        The breakthrough isn&apos;t better models. It&apos;s better workflows.
        Break big problems into small focused pieces. Create plans and specs.
        Orchestrate multiple AI agents the way a project manager coordinates a
        team.
      </p>

      <p className="text-base text-[var(--text-secondary)]">
        This approach works for code — but it works equally well for{" "}
        <strong className="text-[var(--text-primary)]">
          any structured project.
        </strong>
      </p>

      {/* Side-by-side comparison */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <CompareBlock
          variant="negative"
          header="How most people use AI"
          lines={[
            '"Hey ChatGPT, build me a website"',
            "",
            "→ Generic output",
            "→ No structure",
            "→ Endless back-and-forth",
            "→ Nothing ships",
          ]}
          result="Result: Frustration"
        />
        <CompareBlock
          variant="positive"
          header="Spec-driven orchestration"
          lines={[
            "Vision → Spec → Execute → Verify",
            "",
            "→ Scoped tasks",
            "→ AI agents in parallel",
            "→ Self-checking output",
            "→ Deployed in hours",
          ]}
          result="Result: Shipped & live"
        />
      </div>
    </>
  );
}

function CompareBlock({
  variant,
  header,
  lines,
  result,
}: {
  variant: "negative" | "positive";
  header: string;
  lines: string[];
  result: string;
}) {
  const isNeg = variant === "negative";
  const borderColor = isNeg
    ? "border-[rgba(255,95,87,0.3)]"
    : "border-[rgba(0,255,136,0.3)]";
  const hoverShadow = isNeg
    ? "hover:shadow-[0_20px_40px_rgba(255,95,87,0.1)]"
    : "hover:shadow-[0_20px_40px_rgba(0,255,136,0.1)]";
  const headerBg = isNeg
    ? "bg-[rgba(255,95,87,0.05)] text-[var(--color-error)]"
    : "bg-[rgba(0,255,136,0.05)] text-[var(--accent-green)]";
  const resultColor = isNeg
    ? "text-[var(--color-error)]"
    : "text-[var(--accent-green)]";
  const iconPath = isNeg ? "M6 6l12 12M6 18L18 6" : "M5 12l5 5L20 7";
  const iconStroke = isNeg ? "#ff5f57" : "#00ff88";

  return (
    <div
      className={`overflow-hidden rounded-xl border bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-0.5 ${borderColor} ${hoverShadow}`}
    >
      <div
        className={`flex items-center gap-2 border-b border-[var(--border-color)] px-[18px] py-3 font-[family-name:var(--font-mono)] text-xs ${headerBg}`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconStroke}
          strokeWidth={2}
        >
          <path d={iconPath} />
        </svg>
        {header}
      </div>
      <div className="px-[18px] py-5 font-[family-name:var(--font-mono)] text-[13px] leading-[1.8] text-[var(--text-secondary)]">
        {lines.map((line, i) =>
          line === "" ? (
            <br key={i} />
          ) : (
            <span key={i}>
              {line}
              <br />
            </span>
          )
        )}
        <div
          className={`mt-4 border-t border-dashed border-[var(--border-color)] pt-4 font-medium ${resultColor}`}
        >
          {result}
        </div>
      </div>
    </div>
  );
}

/* ===== 02 — THE METHODOLOGY ===== */
export function MethodologySection() {
  const rows = [
    {
      step: "Vision",
      site: "A site that showcases my work and lets me blog",
      reno: "A comfortable, modern apartment that feels like home",
    },
    {
      step: "Break down",
      site: "Homepage, About, Blog, Projects, Contact",
      reno: "Living room, Kitchen, Bedroom, Bathroom, Hallway",
    },
    {
      step: "Research",
      site: "AI researches design trends, CMS options",
      reno: "AI researches materials, prices, regulations",
    },
    {
      step: "Plan",
      site: "Feature list, tech stack, phased rollout",
      reno: "Room-by-room budget, timeline, dependencies",
    },
    {
      step: "Execute",
      site: '"Build hero section," "connect CMS," "deploy"',
      reno: '"Get 3 quotes," "order tiles," "schedule electrician"',
    },
    {
      step: "Verify",
      site: "AI self-checks code, runs tests, you review",
      reno: "Review quotes vs budget, check samples, adjust",
    },
  ];

  return (
    <>
      <h2 className="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        One pattern. <span className="highlight">Any</span> project.
      </h2>

      <p className="mt-4 max-w-[560px] text-base text-[var(--text-secondary)]">
        The spec-driven workflow isn&apos;t a software technique. It&apos;s a
        project management methodology that happens to work incredibly well with
        AI. If you can describe a goal and break it into parts, you can use it.
      </p>

      <div className="my-8 overflow-hidden rounded-[10px] border border-[var(--border-color)]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b border-[var(--border-color)] bg-[var(--bg-tertiary)] px-[18px] py-3.5 text-left font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[1.5px] text-[var(--accent-gold)]">
                Step
              </th>
              <th className="border-b border-[var(--border-color)] bg-[var(--bg-tertiary)] px-[18px] py-3.5 text-left font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[1.5px] text-[var(--accent-green)]">
                Personal Website
              </th>
              <th className="border-b border-[var(--border-color)] bg-[var(--bg-tertiary)] px-[18px] py-3.5 text-left font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[1.5px] text-[var(--accent-gold)]">
                Apartment Renovation
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.step}
                className="transition-colors hover:bg-[rgba(255,214,10,0.02)]"
              >
                <td
                  className={`whitespace-nowrap px-[18px] py-3 align-top font-[family-name:var(--font-mono)] text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] ${i < rows.length - 1 ? "border-b border-[var(--border-subtle)]" : ""}`}
                >
                  {row.step}
                </td>
                <td
                  className={`px-[18px] py-3 align-top text-[13px] text-[var(--text-secondary)] ${i < rows.length - 1 ? "border-b border-[var(--border-subtle)]" : ""}`}
                >
                  {row.site}
                </td>
                <td
                  className={`px-[18px] py-3 align-top text-[13px] text-[var(--text-secondary)] ${i < rows.length - 1 ? "border-b border-[var(--border-subtle)]" : ""}`}
                >
                  {row.reno}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <blockquote className="my-8 border-l-[3px] border-[var(--accent-gold)] pl-5 text-[17px] italic text-[var(--text-primary)]">
        The point is not that AI will tile your bathroom. The point is that the
        hard part of any project — the structuring, research, planning, tracking
        — is exactly what AI is good at when you give it the right workflow.
      </blockquote>
    </>
  );
}

/* ===== 03 — THE EVOLUTION ===== */
export function EvolutionSection() {
  const stages = [
    {
      name: "Chat / LLM",
      unlocks: "Instant knowledge, writing, brainstorming",
      limit: "Can only talk. Can't do anything.",
    },
    {
      name: "Agent",
      unlocks: "Multi-step reasoning. Plans and iterates.",
      limit: "Sandboxed. No access to your tools.",
    },
    {
      name: "MCP & Tools",
      unlocks: "Reads email, searches files, calls APIs",
      limit: "Cloud only. Can't touch your machine.",
    },
    {
      name: "Claude Code",
      unlocks: "Read, write, run, test code — your terminal",
      limit: "Context window limits.",
    },
    {
      name: "Spec-Driven",
      unlocks: "Reliable execution of complex projects",
      limit: "Manual orchestration still required.",
    },
    {
      name: "GSD →",
      unlocks: "You become the conductor. Agents work in parallel, self-verify.",
      limit: "The frontier. Where we are today.",
      active: true,
    },
  ];

  return (
    <>
      <h2 className="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        How we got here.
      </h2>
      <p className="text-base text-[var(--text-secondary)]">
        Each stage solves a limitation of the previous one. The final insight:
        the breakthrough isn&apos;t better models — it&apos;s better workflows.
      </p>

      <div className="mt-10 flex flex-col gap-[2px]">
        {stages.map((stage, i) => (
          <div
            key={stage.name}
            className={`grid gap-0 border border-[var(--border-color)] bg-[var(--bg-card)] px-5 py-4 transition-all duration-300 hover:z-[2] hover:border-[var(--accent-gold)] hover:bg-[var(--bg-tertiary)] max-md:grid-cols-1 max-md:gap-1.5 md:grid-cols-[120px_1fr_1fr] ${
              i === 0 ? "rounded-t-[10px]" : ""
            } ${i === stages.length - 1 ? "rounded-b-[10px]" : ""} ${
              stage.active
                ? "border-[rgba(255,214,10,0.3)] bg-[rgba(255,214,10,0.03)]"
                : ""
            }`}
          >
            <div className="flex items-center font-[family-name:var(--font-mono)] text-xs font-semibold text-[var(--accent-gold)]">
              {stage.name}
            </div>
            <div className="pr-4 text-[13px] text-[var(--text-secondary)]">
              {stage.unlocks}
            </div>
            <div
              className={`flex items-center font-[family-name:var(--font-mono)] text-xs ${
                stage.active
                  ? "text-[var(--accent-gold)]"
                  : "text-[var(--text-muted)]"
              }`}
            >
              {stage.limit}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ===== 04 — THE TOOLKIT ===== */
export function ToolkitSection() {
  const tools = [
    { icon: "⌨", name: "Claude Code", desc: "AI in your terminal" },
    { icon: "🔗", name: "MCP", desc: "connects your tools" },
    { icon: "⚡", name: "GSD Framework", desc: "orchestrates execution" },
  ];

  return (
    <>
      <h2 className="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        Three layers. One workflow.
      </h2>
      <p className="mx-auto mt-4 mb-10 max-w-[480px] text-base text-[var(--text-secondary)]">
        You&apos;ll learn to use all three together — the engine, the
        connections, and the framework.
      </p>

      <div className="grid gap-4 max-sm:grid-cols-1 sm:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-6 text-center transition-all duration-250 hover:-translate-y-1 hover:border-[var(--accent-green)] hover:shadow-[0_8px_24px_rgba(0,255,136,0.1)]"
          >
            <div className="mb-3 text-[32px]">{tool.icon}</div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)]">
              {tool.name}
            </h4>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-[var(--text-muted)]">
              {tool.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ===== 05 — THE OUTPUT ===== */
export function OutputSection() {
  const items = [
    "A live personal website (Next.js + Tailwind) deployed on Vercel",
    "The spec-driven methodology for any project — digital or physical",
    "Hands-on experience with Claude Code, MCP, and GSD",
    "A mental model for orchestrating AI agents, not just chatting",
    "A template repo you can fork and customize for future projects",
  ];

  return (
    <>
      <h2 className="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        What you&apos;ll walk away with.
      </h2>

      <ul className="my-7">
        {items.map((item) => (
          <li
            key={item}
            className="check-item mb-3.5 flex items-start gap-3.5 text-[15px] text-[var(--text-secondary)]"
          >
            {item}
          </li>
        ))}
      </ul>

      <blockquote className="my-8 border-l-[3px] border-[var(--accent-gold)] pl-5 text-[17px] italic text-[var(--text-primary)]">
        Not by becoming a programmer — by becoming a conductor.
      </blockquote>
    </>
  );
}

/* ===== 06 — YOUR HOSTS ===== */
export function HostsSection() {
  return (
    <>
      <h2 className="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        Who&apos;s running this.
      </h2>

      <div className="mt-10 grid gap-6 max-sm:grid-cols-1 sm:grid-cols-2">
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-7 py-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-gold)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="mb-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[2px] text-[var(--accent-green)]">
            Technical Co-Founder, Embed
          </div>
          <div className="mb-3 text-2xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
            Konstantin
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            The technical deep dive. Code, the GSD framework, terminal
            workflows. Konstantin will walk you through the architecture and
            live-code alongside you.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-7 py-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-gold)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="mb-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[2px] text-[var(--accent-green)]">
            CMO, John Mattone Global
          </div>
          <div className="mb-3 text-2xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
            Bo-Peter
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            The strategic application. CMO for the World&apos;s #1 Executive
            Coach. How to apply spec-driven orchestration to any project —
            managing the narrative and bridging the gap for non-coders.
          </p>
        </div>
      </div>
    </>
  );
}

/* ===== 07 — AGENDA ===== */
export function AgendaSection() {
  const items = [
    { time: "12:00", block: "Welcome & Setup", detail: "Confirm prerequisites. Quick troubleshooting." },
    { time: "12:05", block: "The Evolution Story", detail: "Walk through the 6 stages: Chat → Agent → MCP → Claude Code → Spec-Driven → GSD. Live demos." },
    { time: "12:25", block: "The Methodology Moment", detail: "Website vs. apartment renovation side-by-side. The universal pattern. Interactive discussion." },
    { time: "12:35", block: "Live Demo: GSD", detail: "Full cycle on the TV: create a spec, GSD breaks it into tasks, executes, self-checks." },
    { time: "12:45", block: "Fork & First Run", detail: "Everyone forks the template, runs dev server, triggers first GSD task together." },
    { time: "12:55", block: "Build Session", detail: "Work on your site. Milestones: personalize content, add a section, connect Sanity, deploy to Vercel." },
    { time: "14:00", block: "Deploy & Show", detail: "Everyone deploys. Round-the-room share of live URLs on the TV. Celebrate." },
    { time: "14:15", block: "Reflection & Next Steps", detail: "What surprised you? What would you apply this to? Share resources. Wind down." },
  ];

  return (
    <>
      <h2 className="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        How the day unfolds.
      </h2>
      <p className="text-base text-[var(--text-secondary)]">
        ~2.5 hours. Presentation first, then hands-on building with two
        facilitators floating.
      </p>

      <div className="mt-10 flex flex-col gap-[2px]">
        {items.map((item, i) => (
          <div
            key={item.time}
            className={`grid gap-6 border border-[var(--border-color)] bg-[var(--bg-card)] px-5 py-4 transition-all duration-300 hover:border-[rgba(255,214,10,0.2)] hover:bg-[var(--bg-tertiary)] max-sm:grid-cols-1 max-sm:gap-1 sm:grid-cols-[100px_1fr] ${
              i === 0 ? "rounded-t-[10px]" : ""
            } ${i === items.length - 1 ? "rounded-b-[10px]" : ""}`}
          >
            <div className="pt-0.5 font-[family-name:var(--font-mono)] text-xs font-medium text-[var(--accent-gold)]">
              {item.time}
            </div>
            <div>
              <div className="mb-0.5 text-[15px] font-semibold text-[var(--text-primary)]">
                {item.block}
              </div>
              <p className="text-[13px] text-[var(--text-muted)]">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ===== 08 — PREREQUISITES ===== */
export function PrereqsSection() {
  const prereqs = [
    { num: "01", name: "Claude Code CLI", note: "The AI agent that runs in your terminal. Requires Claude Pro or API key." },
    { num: "02", name: "Node.js (v20+)", note: "Required for Next.js and the dev toolchain." },
    { num: "03", name: "Git + GitHub Account", note: "For forking the template and deploying via Vercel." },
    { num: "04", name: "Vercel Account", note: "One-click deployment. Free tier is fine." },
    { num: "05", name: "VS Code + Terminal", note: "For running Claude Code and viewing the project." },
  ];

  const readings = [
    {
      title: "MCP (Model Context Protocol)",
      desc: "the standard way to connect AI agents to external tools: databases, APIs, services. Think of it as USB-C for AI.",
    },
    {
      title: "Agents vs. Chat",
      desc: "why multi-step AI agents that can plan and iterate are fundamentally different from a chatbot.",
    },
    {
      title: "Spec-Driven Development",
      desc: "breaking work into small, scoped, AI-executable specs instead of one giant prompt.",
    },
  ];

  return (
    <>
      <h2 className="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        Pre-requisites.
      </h2>
      <p className="text-base text-[var(--text-secondary)]">
        Must be installed and working{" "}
        <strong className="text-[var(--text-primary)]">before Sunday.</strong>{" "}
        We&apos;ll send setup instructions one week prior and host a 30-min
        setup call on Friday to troubleshoot.
      </p>

      <div className="my-8 flex flex-col gap-2.5">
        {prereqs.map((p) => (
          <div
            key={p.num}
            className="grid grid-cols-[36px_1fr] gap-4 rounded-[10px] border border-[var(--border-color)] bg-[var(--bg-card)] px-5 py-4 transition-all duration-300 hover:translate-x-1 hover:border-[var(--accent-green)] hover:bg-[var(--bg-tertiary)] hover:shadow-[-4px_0_0_var(--accent-green)]"
          >
            <div className="flex items-center font-[family-name:var(--font-mono)] text-xs font-semibold text-[var(--accent-green)]">
              {p.num}
            </div>
            <div>
              <div className="mb-0.5 text-[15px] font-semibold text-[var(--text-primary)]">
                {p.name}
              </div>
              <p className="font-[family-name:var(--font-mono)] text-[13px] text-[var(--text-muted)]">
                {p.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended reading divider */}
      <div className="mt-10 mb-4 border-b border-[var(--border-subtle)] pb-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[2px] text-[var(--text-muted)]">
        Recommended reading
      </div>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">
        Come with a basic understanding of these concepts — we&apos;ll go deep
        on the day:
      </p>
      <ul>
        {readings.map((r) => (
          <li
            key={r.title}
            className="check-item mb-3.5 flex items-start gap-3.5 text-[15px] text-[var(--text-secondary)]"
          >
            <strong className="text-[var(--text-primary)]">{r.title}</strong> —{" "}
            {r.desc}
          </li>
        ))}
      </ul>
    </>
  );
}

/* ===== 09 — RSVP ===== */
export function RsvpSection() {
  return (
    <div
      id="rsvp"
      className="relative border-t border-[var(--border-subtle)] py-24 pb-36 text-center"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(255,214,10,0.06),transparent_70%)]" />

      <span className="mb-4 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[2px] text-[var(--accent-green)]">
        09 — Claim your seat
      </span>

      <div className="mb-2 font-[family-name:var(--font-mono)] text-[clamp(48px,8vw,72px)] font-bold text-[var(--accent-gold)] [text-shadow:0_0_60px_rgba(255,214,10,0.4)]">
        12
      </div>
      <p className="mb-10 font-[family-name:var(--font-mono)] text-[13px] tracking-[0.5px] text-[var(--text-muted)]">
        seats available
      </p>

      <h2 className="mb-4 text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em]">
        Ready to become a <span className="highlight">conductor?</span>
      </h2>

      <p className="mx-auto mb-10 max-w-[440px] text-[15px] text-[var(--text-secondary)]">
        Sunday, March 1st &bull; 12:00 – 14:30 &bull; Amsterdam
        <br />
        <span className="text-[13px] text-[var(--text-muted)]">
          Intimate apartment setting. Laptops required. Coffee provided.
        </span>
      </p>

      <a
        href="https://chat.whatsapp.com/KPrCEswpRBjFWAJ3lXSvpd"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-shine inline-flex items-center gap-2.5 rounded-[10px] bg-[var(--accent-gold)] px-10 py-[18px] text-[17px] font-bold uppercase tracking-[0.5px] text-[var(--bg-primary)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#ffe456] hover:shadow-[0_10px_40px_rgba(255,214,10,0.3)]"
      >
        Request to Join
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </a>

      <p className="mt-5 font-[family-name:var(--font-mono)] text-xs text-[var(--text-muted)]">
        Request to join the WhatsApp group to reserve your spot
      </p>
    </div>
  );
}
