import { Linkedin } from "lucide-react";
import { useLanguage } from "../lib/i18n";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.214.38-.463.89-.636 1.295a18.27 18.27 0 0 0-5.498 0A12.6 12.6 0 0 0 9.11 3 19.74 19.74 0 0 0 4.677 4.37C1.61 8.94.78 13.39 1.195 17.78a19.9 19.9 0 0 0 6.073 3.058c.49-.668.927-1.377 1.304-2.123-.717-.27-1.402-.603-2.05-.99.172-.126.34-.258.502-.392a14.2 14.2 0 0 0 12.146 0c.164.139.332.27.502.392-.65.39-1.337.722-2.054.992.377.745.813 1.454 1.303 2.122a19.84 19.84 0 0 0 6.075-3.058c.487-5.09-.836-9.5-3.673-13.41ZM8.02 15.1c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.335-.955 2.42-2.157 2.42Zm7.96 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.335-.946 2.42-2.157 2.42Z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground">{t.footer.board}</p>
          <p>{t.footer.rights}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-linkedin text-white transition-transform hover:scale-105"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Discord"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-discord text-discord-foreground transition-transform hover:scale-105"
          >
            <DiscordIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export { DiscordIcon };
