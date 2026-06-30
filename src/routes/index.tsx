import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../lib/i18n";
import { DiscordIcon } from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KELS — Korean Edutech & Learning Sciences Researcher Network" },
      {
        name: "description",
        content:
          "KELS is a research network where researchers in Korea in Educational Technology and Learning Sciences freely communicate and collaborate.",
      },
      {
        property: "og:title",
        content: "KELS — Korean Edutech & Learning Sciences Researcher Network",
      },
      {
        property: "og:description",
        content:
          "A research network pursuing cooperation over competition, and diversity over hierarchy.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        {t.home.headline}
      </h1>

      <p className="mt-14 font-serif text-4xl font-bold italic text-foreground sm:text-5xl">
        {t.home.welcome}
      </p>

      <p className="mt-6 max-w-3xl text-justify text-lg leading-relaxed text-foreground/90">
        {t.home.intro}
      </p>

      <div className="mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 rounded-full bg-discord px-6 py-3.5 text-base font-semibold text-discord-foreground shadow-sm transition-transform hover:scale-105"
        >
          <DiscordIcon className="h-5 w-5" />
          {t.home.discord}
        </a>
      </div>
    </section>
  );
}
