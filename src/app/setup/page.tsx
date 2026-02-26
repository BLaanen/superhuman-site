"use client";

import CopyBlock from "@/components/CopyBlock";
import { OsProvider, OsToggle, OsContent } from "@/components/OsToggle";

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--border-subtle)] py-16">
      <span className="mb-4 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[2px] text-[var(--accent-green)]">
        Step {number}
      </span>
      <h2 className="mb-6 text-[clamp(24px,3.5vw,30px)] font-bold leading-[1.2] tracking-[-0.02em]">
        {title}
      </h2>
      <div className="space-y-4 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
        {children}
      </div>
    </section>
  );
}

export default function SetupPage() {
  return (
    <OsProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* Header */}
        <header className="border-b border-[var(--border-subtle)] px-6 py-4">
          <div className="mx-auto flex max-w-[880px] items-center justify-between">
            <span className="font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-[2px] text-[var(--text-muted)]">
              Setup Guide
            </span>
            <a
              href="/"
              className="font-[family-name:var(--font-mono)] text-[13px] text-[var(--text-muted)] underline decoration-[var(--border-color)] underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
            >
              ← Back to site
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto max-w-[880px] px-6 pb-24 pt-16">
          {/* Title */}
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">
            Get set up in{" "}
            <span className="text-[var(--accent-gold)]">15 minutes</span>.
          </h1>
          <p className="mb-8 max-w-[600px] text-[18px] leading-[1.6] text-[var(--text-secondary)]">
            Follow these steps before Sunday. Everything here is copy-paste
            — no coding experience needed.
          </p>

          {/* OS Toggle */}
          <div className="mb-16">
            <OsToggle />
          </div>

          {/* Step 0 */}
          <Step number="0" title="What You Need">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--accent-green)]">●</span>
                <OsContent
                  mac={<span>A Mac laptop</span>}
                  windows={
                    <span>
                      A Windows laptop with{" "}
                      <a
                        href="https://git-scm.com/downloads/win"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-gold)] underline underline-offset-4"
                      >
                        Git for Windows
                      </a>{" "}
                      installed (free)
                    </span>
                  }
                />
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--accent-green)]">●</span>
                <span>
                  A Claude Pro subscription ($20/month) —{" "}
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-gold)] underline underline-offset-4"
                  >
                    claude.ai
                  </a>
                  <br />
                  <span className="text-[14px] text-[var(--text-muted)]">
                    Sonnet 4.6 is included and works great — no need for the more
                    expensive tier.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--accent-green)]">●</span>
                <span>
                  A GitHub account (free) —{" "}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-gold)] underline underline-offset-4"
                  >
                    github.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--accent-green)]">●</span>
                <span>
                  A Vercel account (free, sign up with GitHub) —{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-gold)] underline underline-offset-4"
                  >
                    vercel.com
                  </a>
                </span>
              </li>
            </ul>
          </Step>

          {/* Step 1 */}
          <Step number="1" title="Open Terminal">
            <OsContent
              mac={
                <>
                  <p>
                    Press{" "}
                    <kbd className="rounded border border-[var(--border-color)] bg-[var(--bg-tertiary)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[14px]">
                      Cmd + Space
                    </kbd>
                    , type{" "}
                    <strong className="text-[var(--text-primary)]">
                      Terminal
                    </strong>
                    , and press Enter.
                  </p>
                  <p>
                    This is how you talk directly to your computer. It looks
                    old-school, but it&apos;s incredibly powerful.
                  </p>
                  <div className="my-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-5 py-4">
                    <div className="mb-3 flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-[var(--color-error)]" />
                      <span className="h-3 w-3 rounded-full bg-[var(--color-warning)]" />
                      <span className="h-3 w-3 rounded-full bg-[var(--color-success)]" />
                    </div>
                    <p className="font-[family-name:var(--font-mono)] text-[14px] text-[var(--text-muted)]">
                      Last login: Sun Mar 1 11:30:00
                      <br />
                      <span className="text-[var(--text-secondary)]">
                        yourname@MacBook ~ %
                      </span>{" "}
                      <span className="inline-block h-4 w-2 animate-pulse bg-[var(--text-primary)]" />
                    </p>
                  </div>
                  <p className="text-[14px] text-[var(--text-muted)]">
                    ↑ This is what Terminal looks like — a dark window with a
                    blinking cursor.
                  </p>
                </>
              }
              windows={
                <>
                  <p>
                    Press the{" "}
                    <kbd className="rounded border border-[var(--border-color)] bg-[var(--bg-tertiary)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[14px]">
                      Windows
                    </kbd>{" "}
                    key, type{" "}
                    <strong className="text-[var(--text-primary)]">
                      PowerShell
                    </strong>
                    , and press Enter.
                  </p>
                  <p>
                    This is how you talk directly to your computer. It looks
                    old-school, but it&apos;s incredibly powerful.
                  </p>
                  <div className="my-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-5 py-4">
                    <p className="mb-3 font-[family-name:var(--font-mono)] text-[12px] text-[var(--text-muted)]">
                      Windows PowerShell
                    </p>
                    <p className="font-[family-name:var(--font-mono)] text-[14px] text-[var(--text-muted)]">
                      Copyright (C) Microsoft Corporation.
                      <br />
                      <br />
                      <span className="text-[var(--text-secondary)]">
                        PS C:\Users\yourname&gt;
                      </span>{" "}
                      <span className="inline-block h-4 w-2 animate-pulse bg-[var(--text-primary)]" />
                    </p>
                  </div>
                  <p className="text-[14px] text-[var(--text-muted)]">
                    ↑ This is what PowerShell looks like — a blue window with a
                    blinking cursor.
                  </p>
                </>
              }
            />
          </Step>

          {/* Step 2 */}
          <Step number="2" title="Install Claude Code">
            <OsContent
              mac={
                <CopyBlock
                  command="curl -fsSL https://claude.ai/install.sh | bash"
                  label="Paste this into Terminal"
                />
              }
              windows={
                <CopyBlock
                  command="irm https://claude.ai/install.ps1 | iex"
                  label="Paste this into PowerShell"
                />
              }
            />
            <p>
              This one command installs everything you need, including Node.js.
            </p>
            <div className="my-4 rounded-lg border border-[var(--accent-gold)] bg-[rgba(255,214,10,0.04)] px-5 py-4">
              <p className="font-semibold text-[var(--accent-gold)]">
                Important — after it finishes:
              </p>
              <OsContent
                mac={
                  <p className="mt-1">
                    Close Terminal completely (
                    <kbd className="rounded border border-[var(--border-color)] bg-[var(--bg-tertiary)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[14px]">
                      Cmd + Q
                    </kbd>
                    ) and reopen it. This ensures the new commands are available.
                  </p>
                }
                windows={
                  <p className="mt-1">
                    Close the PowerShell window and reopen it. This ensures the
                    new commands are available.
                  </p>
                }
              />
            </div>
          </Step>

          {/* Step 3 */}
          <Step number="3" title="Start Claude Code & Log In">
            <OsContent
              mac={
                <CopyBlock command="claude" label="Paste this into Terminal" />
              }
              windows={
                <CopyBlock
                  command="claude"
                  label="Paste this into PowerShell"
                />
              }
            />
            <p>
              Type this and press Enter. Claude Code will start and ask you to
              log in.
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                Follow the prompts — it will open your browser to authenticate
                with your Claude account
              </li>
              <li>Accept the terms when prompted</li>
            </ul>
            <p>
              <strong className="text-[var(--text-primary)]">
                What you should see:
              </strong>{" "}
              the Claude Code welcome screen in your terminal.
            </p>
          </Step>

          {/* Step 4 */}
          <Step number="4" title="Set Up GitHub">
            <p>
              Now that Claude Code is running, you can ask it to help you set up
              the rest.
            </p>
            <CopyBlock
              command="Help me install the GitHub CLI and authenticate with my GitHub account"
              variant="claude"
            />
            <p>
              Claude Code will walk you through the steps. Follow its
              instructions.
            </p>
            <p className="text-[14px] italic text-[var(--text-muted)]">
              This is the workshop&apos;s philosophy in action — use the AI to
              set up the AI.
            </p>
          </Step>

          {/* Step 5 */}
          <Step number="5" title="Set Up Vercel">
            <p>Same approach — paste this into Claude Code:</p>
            <CopyBlock
              command="Help me install the Vercel CLI and log in to my Vercel account"
              variant="claude"
            />
            <p>Again, follow Claude&apos;s instructions. It knows what to do.</p>
          </Step>

          {/* Step 6 */}
          <Step number="6" title="Create a Project Folder">
            <OsContent
              mac={
                <CopyBlock
                  command="mkdir ~/Desktop/workshop && cd ~/Desktop/workshop"
                  label="Paste this into Terminal"
                />
              }
              windows={
                <CopyBlock
                  command="mkdir ~\Desktop\workshop; cd ~\Desktop\workshop"
                  label="Paste this into PowerShell"
                />
              }
            />
            <p>
              This gives you a clean folder on your Desktop for Sunday.
            </p>
          </Step>

          {/* Step 7 */}
          <Step number="7" title="Install GSD">
            <OsContent
              mac={
                <CopyBlock
                  command="npx get-shit-done-cc@latest"
                  label="Paste this into Terminal (not inside Claude Code)"
                />
              }
              windows={
                <CopyBlock
                  command="npx get-shit-done-cc@latest"
                  label="Paste this into PowerShell (not inside Claude Code)"
                />
              }
            />
            <p>
              When prompted, choose{" "}
              <strong className="text-[var(--text-primary)]">Claude Code</strong>{" "}
              and then{" "}
              <strong className="text-[var(--text-primary)]">Global</strong>.
            </p>
          </Step>

          {/* Step 8 */}
          <Step number="8" title="Verify Everything Works">
            <p>
              Start Claude Code in your workshop folder and type:
            </p>
            <CopyBlock command="/gsd:help" />
            <p>
              <strong className="text-[var(--text-primary)]">
                If you see a list of commands, you&apos;re ready for Sunday.
              </strong>
            </p>
          </Step>

          {/* Stuck */}
          <section className="border-t border-[var(--border-subtle)] py-16">
            <h2 className="mb-6 text-[clamp(24px,3.5vw,30px)] font-bold leading-[1.2] tracking-[-0.02em]">
              Stuck?
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
              <div className="space-y-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">
                    <OsContent
                      mac={<>Can&apos;t find Terminal?</>}
                      windows={<>Can&apos;t find PowerShell?</>}
                    />
                  </p>
                  <OsContent
                    mac={
                      <p>
                        It&apos;s in Applications → Utilities → Terminal.
                      </p>
                    }
                    windows={
                      <p>
                        Press the Windows key and type &quot;PowerShell&quot; — it&apos;s
                        built into Windows.
                      </p>
                    }
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">
                    &quot;Command not found&quot; after installing?
                  </p>
                  <OsContent
                    mac={
                      <p>
                        Close Terminal (
                        <kbd className="rounded border border-[var(--border-color)] bg-[var(--bg-tertiary)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[14px]">
                          Cmd + Q
                        </kbd>
                        ) and reopen it.
                      </p>
                    }
                    windows={
                      <p>
                        Close the PowerShell window and reopen it.
                      </p>
                    }
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">
                    Claude Code won&apos;t log in?
                  </p>
                  <p>
                    Make sure you have a Claude Pro subscription at{" "}
                    <a
                      href="https://claude.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent-gold)] underline underline-offset-4"
                    >
                      claude.ai
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">
                    Still stuck?
                  </p>
                  <p>
                    Message the WhatsApp group, or come early on Sunday at
                    11:30am — we&apos;ll help you set up.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bonus */}
          <section className="border-t border-[var(--border-subtle)] py-16">
            <span className="mb-4 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[2px] text-[var(--accent-gold)]">
              Bonus
            </span>
            <h2 className="mb-6 text-[clamp(24px,3.5vw,30px)] font-bold leading-[1.2] tracking-[-0.02em]">
              Level Up Your Website Building
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
              <p>
                These optional skills supercharge Claude Code for building
                beautiful websites. Install them now so they&apos;re ready on
                Sunday.
              </p>

              <div className="space-y-6">
                {/* UI/UX Pro Max */}
                <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
                  <div className="mb-1 flex items-center gap-3">
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      UI/UX Pro Max
                    </h3>
                    <a
                      href="https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-mono)] text-[12px] text-[var(--accent-gold)] underline underline-offset-4"
                    >
                      View skill →
                    </a>
                  </div>
                  <p className="mb-4 text-[15px]">
                    50+ design styles, 97 color palettes, 57 font pairings, and
                    UX guidelines — all available as a skill inside Claude Code.
                  </p>
                  <OsContent
                    mac={
                      <CopyBlock
                        command="npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max"
                        label="Paste this into Terminal"
                      />
                    }
                    windows={
                      <CopyBlock
                        command="npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max"
                        label="Paste this into PowerShell"
                      />
                    }
                  />
                </div>

                {/* Impeccable */}
                <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
                  <div className="mb-1 flex items-center gap-3">
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      Impeccable
                    </h3>
                    <a
                      href="https://impeccable.style/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-mono)] text-[12px] text-[var(--accent-gold)] underline underline-offset-4"
                    >
                      View skill →
                    </a>
                  </div>
                  <p className="mb-4 text-[15px]">
                    Design fluency for Claude Code — 17 commands like /polish,
                    /audit, /simplify, and /bolder to make your sites look
                    professional.
                  </p>
                  <CopyBlock
                    command="/plugin marketplace add pbakaus/impeccable"
                    variant="claude"
                  />
                  <p className="mt-2 text-[14px] text-[var(--text-muted)]">
                    After installing, run{" "}
                    <code className="rounded border border-[var(--border-color)] bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[13px]">
                      /plugin menu
                    </code>{" "}
                    inside Claude Code to finish setup.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-[var(--border-subtle)] py-16 text-center">
            <p className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,32px)] font-bold tracking-[-0.02em]">
              See you Sunday ✌️
            </p>
            <p className="mt-2 text-[var(--text-muted)]">
              March 1st · Amsterdam
            </p>
          </footer>
        </main>
      </div>
    </OsProvider>
  );
}
