import { Link } from "@tanstack/react-router";
import { Globe, Moon, Sun } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "../lib/i18n";
import { useTheme } from "../lib/theme";

export function Header() {
  const { t, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/events", label: t.nav.events },
    { to: "/programs", label: t.nav.programs },
    { to: "/contributors", label: t.nav.contributors },
    { to: "/admin", label: t.nav.admin },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
            KELS
          </span>
        </Link>

        <nav className="ml-auto mr-4 hidden items-center gap-6 md:flex lg:mr-8 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:font-semibold data-[status=active]:text-primary data-[status=active]:underline data-[status=active]:underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.toggleLang}
            title={t.nav.toggleLang}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Globe className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.nav.toggleTheme}
            title={t.nav.toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="flex items-center justify-center gap-4 overflow-x-auto border-t border-border px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            activeOptions={{ exact: link.to === "/" }}
            className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors data-[status=active]:font-semibold data-[status=active]:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
