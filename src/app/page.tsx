import Hero from "@/components/Hero";
import Section from "@/components/Section";
import {
  ProblemSection,
  MethodologySection,
  EvolutionSection,
  ToolkitSection,
  OutputSection,
  HostsSection,
  AgendaSection,
  PrereqsSection,
  RsvpSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      {/* Hello Bar */}
      <div className="relative z-10 border-b border-[rgba(255,214,10,0.3)] bg-[linear-gradient(90deg,rgba(255,214,10,0.15),rgba(0,255,136,0.15))] px-6 py-3 text-center text-sm text-[var(--text-primary)]">
        <span className="font-semibold text-[var(--accent-gold)]">
          12 seats only
        </span>{" "}
        — Sunday, February 15th — Amsterdam
      </div>

      <div className="relative z-[1] mx-auto max-w-[880px] px-6">
        <Hero />

        <Section number="01" label="The problem">
          <ProblemSection />
        </Section>

        <Section number="02" label="The methodology">
          <MethodologySection />
        </Section>

        <Section number="03" label="The evolution">
          <EvolutionSection />
        </Section>

        <Section number="04" label="The toolkit" center>
          <ToolkitSection />
        </Section>

        <Section number="05" label="The output">
          <OutputSection />
        </Section>

        <Section number="06" label="Your hosts">
          <HostsSection />
        </Section>

        <Section number="07" label="The agenda">
          <AgendaSection />
        </Section>

        <Section number="08" label="Before you arrive">
          <PrereqsSection />
        </Section>

        <RsvpSection />

        {/* Footer */}
        <footer className="border-t border-[var(--border-subtle)] py-12 text-center">
          <p className="text-sm text-[var(--text-muted)]">
            Superhuman: From Chatbots to Conductors
          </p>
          <p className="mt-2 text-[13px] italic text-[var(--text-muted)]">
            This page was built with Claude Code.
          </p>
        </footer>
      </div>
    </>
  );
}
