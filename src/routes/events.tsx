import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useLanguage } from "../lib/i18n";
import { upcomingEvents, pastEvents, type EventItem } from "../data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — KELS" },
      {
        name: "description",
        content:
          "Upcoming and past KELS events: colloquia, webinars, and speaker series on Edutech and Learning Sciences.",
      },
      { property: "og:title", content: "Events — KELS" },
      {
        property: "og:description",
        content: "Upcoming and past KELS events and speaker series.",
      },
    ],
  }),
  component: EventsPage,
});

function DateBlock({ event, bare }: { event: EventItem; bare?: boolean }) {
  if (!event.dateUS && !event.dateKR) return null;
  return (
    <div
      className={
        bare
          ? "flex items-center gap-3"
          : "flex items-center gap-3 rounded-2xl bg-card px-5 py-3.5 shadow-card ring-1 ring-border"
      }
    >
      <Calendar className="h-6 w-6 shrink-0 text-foreground" />
      <div className="space-y-0.5 text-sm font-medium text-foreground">
        {event.dateUS && (
          <p className="flex items-center">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="United States"
              className="mr-1.5 h-3.5 w-auto rounded-[2px]"
              loading="lazy"
            />
            {event.dateUS}
          </p>
        )}
        {event.dateKR && (
          <p className="flex items-center">
            <img
              src="https://flagcdn.com/w40/kr.png"
              alt="Korea"
              className="mr-1.5 h-3.5 w-auto rounded-[2px]"
              loading="lazy"
            />
            {event.dateKR}
          </p>
        )}
      </div>
    </div>
  );
}

function LocationBlock({ event, bare }: { event: EventItem; bare?: boolean }) {
  if (!event.location) return null;
  return (
    <div
      className={
        bare
          ? "flex items-center gap-3"
          : "flex items-center gap-3 rounded-2xl bg-card px-5 py-3.5 shadow-card ring-1 ring-border"
      }
    >
      <MapPin className="h-6 w-6 shrink-0 text-foreground" />
      <div className="text-sm">
        {event.locationLabel && (
          <p className="text-muted-foreground">{event.locationLabel}</p>
        )}
        <p className="font-medium text-foreground">{event.location}</p>
      </div>
    </div>
  );
}

function Speakers({ event }: { event: EventItem }) {
  const { t } = useLanguage();
  return (
    <div>
      <p className="font-display font-bold text-foreground">{t.events.speakers}</p>
      <div className="mt-1 space-y-0.5 text-sm text-foreground/90">
        {event.speakers.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>
    </div>
  );
}

function EventsPage() {
  const { t } = useLanguage();
  const upcoming = upcomingEvents[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="text-center font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
        {t.events.title}
      </h1>

      {/* Upcoming */}
      <h2 className="mt-12 font-display text-2xl font-bold text-foreground">
        {t.events.upcoming}
      </h2>
      {upcoming && (
        <div className="mt-6 flex flex-col gap-6 sm:flex-row">
          <div className="flex aspect-[3/4] w-full max-w-[220px] shrink-0 items-center justify-center rounded-xl bg-muted text-center text-sm text-muted-foreground">
            {t.events.posterPlaceholder}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold leading-snug text-foreground">
              {upcoming.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <DateBlock event={upcoming} />
              <LocationBlock event={upcoming} />
            </div>
            <div className="mt-5">
              <Speakers event={upcoming} />
            </div>
          </div>
        </div>
      )}

      {/* Past */}
      <h2 className="mt-16 font-display text-2xl font-bold text-foreground">
        {t.events.past}
      </h2>
      <div className="mt-6 space-y-10">
        {pastEvents.map((group) => (
          <div key={group.year}>
            <h3 className="font-display text-xl font-bold text-foreground">
              {group.year}
            </h3>
            <Accordion type="multiple" className="mt-4 space-y-4">
              {group.events.map((event) => (
                <AccordionItem
                  key={event.id}
                  value={event.id}
                  className="rounded-2xl border-none bg-card px-6 shadow-sm ring-1 ring-border"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-foreground hover:no-underline sm:text-lg">
                    {event.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      {(event.dateUS || event.location) && (
                        <div className="flex flex-wrap gap-3">
                          <DateBlock event={event} />
                          <LocationBlock event={event} />
                        </div>
                      )}
                      {event.description && (
                        <p className="text-sm leading-relaxed text-foreground/90">
                          {event.description}
                        </p>
                      )}
                      <Speakers event={event} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
