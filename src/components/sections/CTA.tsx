import { CHAT_APP_URL } from "@/config/env";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-glass p-10 text-center md:p-16">
            <AuroraBackground />
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to start <GradientText>chatting</GradientText>?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Join a conversation in seconds. It’s fast, it’s free, and it works everywhere.
            </p>
            <a
              href={CHAT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-cyan to-fuchsia px-8 py-3 text-sm font-semibold text-onAccent shadow-lg shadow-fuchsia/25 transition hover:opacity-90"
            >
              Open Chatty →
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
