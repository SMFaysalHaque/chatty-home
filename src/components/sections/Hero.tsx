"use client";

import { motion, type Variants } from "motion/react";
import { CHAT_APP_URL } from "@/config/env";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-20 md:pb-32 md:pt-28">
      <AuroraBackground />
      <Container>
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-dot" />
            Real-time messaging, live now
          </motion.span>

          <motion.h1 variants={item} className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Conversations that feel <GradientText>instant</GradientText>.
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Chatty is a real-time chat app with group conversations, live delivery, and a
            beautifully fast interface. Message anyone, anywhere — the moment you hit send.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CHAT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gradient-to-r from-cyan to-fuchsia px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-fuchsia/25 transition hover:opacity-90 sm:w-auto"
            >
              Start chatting free
            </a>
            <a
              href="#demo"
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-fg transition hover:bg-white/10 sm:w-auto"
            >
              See it live
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
