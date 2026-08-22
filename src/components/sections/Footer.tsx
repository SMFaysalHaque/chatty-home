import { CHAT_APP_URL } from "@/config/env";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-fuchsia text-sm font-bold text-bg">
            C
          </span>
          <span className="font-semibold">Chatty</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#features" className="transition-colors hover:text-fg">Features</a>
          <a href="#how" className="transition-colors hover:text-fg">How it works</a>
          <a href={CHAT_APP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">Open Chatty</a>
        </nav>
        <p className="text-xs text-muted">Built with Next.js · © {new Date().getFullYear()} Chatty</p>
      </Container>
    </footer>
  );
}
