import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "Sign in", body: "Enter your name and number — new numbers register instantly. No passwords, no friction." },
  { n: "02", title: "Find people", body: "Search by name to start a direct chat, or create a group with everyone at once." },
  { n: "03", title: "Chat in real time", body: "Messages arrive live over websockets. Reply, react, and stay in sync on every device." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Up and running in <GradientText>three steps</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            No setup, no downloads. Just open Chatty and start talking.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <GlassCard className="h-full p-6">
                <span className="bg-gradient-to-r from-cyan to-fuchsia bg-clip-text text-4xl font-bold text-transparent">
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
