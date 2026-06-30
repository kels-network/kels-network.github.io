import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useLanguage } from "../lib/i18n";
import { contributorSections } from "../data/contributors";

export const Route = createFileRoute("/contributors")({
  head: () => ({
    meta: [
      { title: "Contributors — KELS" },
      {
        name: "description",
        content:
          "Appreciation for the volunteers and panels contributing to KELS programs and the Open Access Guide.",
      },
      { property: "og:title", content: "Contributors — KELS" },
      {
        property: "og:description",
        content: "The volunteers and panels behind KELS programs.",
      },
    ],
  }),
  component: ContributorsPage,
});

function ContributorsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="text-center font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {t.contributors.title}
      </h1>

      <p className="mt-10 text-justify font-serif text-lg leading-relaxed text-foreground/90">
        {t.contributors.intro}
      </p>
      <p className="mt-6 font-serif text-lg text-foreground">
        {t.contributors.signature}
      </p>

      <Accordion type="multiple" className="mt-10 space-y-5">
        {contributorSections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="rounded-3xl border-none bg-card px-7 shadow-card ring-1 ring-border"
          >
            <AccordionTrigger className="py-6 text-left font-display text-xl font-semibold text-foreground hover:no-underline">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="pb-7">
              <ul className="space-y-2 text-foreground/90">
                {section.people.map((person, i) => (
                  <li key={i}>{person}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
