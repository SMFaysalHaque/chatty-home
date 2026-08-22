import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";

export function Showcase() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need to <GradientText>stay connected</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Real screens from Chatty — fast, focused, and delightful on every device.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan">Real-time</p>
            <h3 className="mt-2 text-2xl font-bold">Messages the moment they’re sent</h3>
            <p className="mt-3 text-muted">
              Powered by websockets, every message lands instantly — no refresh, no waiting.
              Optimistic sending keeps the conversation flowing.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <BrowserFrame>
              <Image src="/shots/chat-desktop.png" alt="Chatty real-time conversation" width={1280} height={800} className="h-auto w-full" />
            </BrowserFrame>
          </Reveal>
        </div>

        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <Reveal className="md:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia">Groups</p>
            <h3 className="mt-2 text-2xl font-bold">Full admin control for group chats</h3>
            <p className="mt-3 text-muted">
              Create groups, add or remove members, promote admins, rename, and leave — all
              from one clean, intuitive panel.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:order-1">
            <BrowserFrame>
              <Image src="/shots/group-manage.png" alt="Chatty group management" width={1280} height={800} className="h-auto w-full" />
            </BrowserFrame>
          </Reveal>
        </div>

        <div className="mt-24 grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600 dark:text-amber">Responsive</p>
            <h3 className="mt-2 text-2xl font-bold">Beautiful on every screen</h3>
            <p className="mt-3 text-muted">
              From desktop to pocket, Chatty adapts. Dark mode, smart auto-scroll, and a
              thumb-friendly composer come standard.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <PhoneFrame>
              <Image src="/shots/chat-mobile.png" alt="Chatty on mobile" width={390} height={844} className="h-auto w-full" />
            </PhoneFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
