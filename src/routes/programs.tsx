import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { programs } from "../data/programs";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — KELS" },
      {
        name: "description",
        content:
          "KELS programs: Colloquium and Speakers Series, and KELS Community activities including mentoring and meet-ups.",
      },
      { property: "og:title", content: "Programs — KELS" },
      {
        property: "og:description",
        content: "Colloquium, Speakers Series, mentoring, and community programs.",
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="text-center font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
        {t.programs.title}
      </h1>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {programs.map((program) => (
          <article
            key={program.id}
            className="flex flex-col rounded-3xl bg-card p-7 shadow-card ring-1 ring-border transition-transform hover:-translate-y-1"
          >
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground">
              {t.programs.imagePlaceholder}
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold leading-tight text-foreground">
              {program.title}
            </h2>
            <p className="mt-4 text-foreground/90">{program.description}</p>
            <ul className="mt-4 space-y-1.5 text-foreground/90">
              {program.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 text-right">
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {t.programs.learnMore}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
