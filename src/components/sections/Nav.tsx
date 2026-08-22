import Link from "next/link";
import { CHAT_APP_URL } from "@/config/env";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-fuchsia text-sm font-bold text-bg">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight">Chatty</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={CHAT_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-cyan to-fuchsia px-4 py-2 text-sm font-semibold text-bg shadow-lg shadow-fuchsia/20 transition hover:opacity-90"
        >
          Open Chatty →
        </a>
      </Container>
    </header>
  );
}
