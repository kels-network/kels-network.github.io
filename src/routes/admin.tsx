import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Linkedin, Globe, GraduationCap } from "lucide-react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { useLanguage } from "../lib/i18n";
import { boardGroups, type BoardMember } from "../data/board";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Board Members — KELS" },
      {
        name: "description",
        content:
          "The 2026 KELS Board: Network Chair, committees, communication officers, and resource curators.",
      },
      { property: "og:title", content: "Board Members — KELS" },
      {
        property: "og:description",
        content: "Meet the 2026 KELS Board members and committees.",
      },
    ],
  }),
  component: BoardPage,
});

function MemberCard({
  member,
  onClick,
}: {
  member: BoardMember;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center text-center"
    >
      <div className="h-28 w-28 rounded-full bg-muted ring-1 ring-border transition-shadow duration-300 group-hover:shadow-[0_0_18px_0_color-mix(in_oklab,var(--glow)_55%,transparent)] sm:h-32 sm:w-32" />
      <p className="mt-3 font-display text-sm font-bold text-foreground">
        {member.name}
      </p>
      <p className="text-xs text-muted-foreground">{member.title}</p>
      <p className="text-xs text-muted-foreground">{member.affiliation}</p>
    </button>
  );
}

function MemberLinks({ member }: { member: BoardMember }) {
  const links = member.links;
  if (!links) return null;
  const entries = [
    { key: "lab", href: links.lab, icon: FlaskConical, label: "Lab" },
    { key: "linkedin", href: links.linkedin, icon: Linkedin, label: "LinkedIn" },
    { key: "homepage", href: links.homepage, icon: Globe, label: "Homepage" },
    {
      key: "scholar",
      href: links.scholar,
      icon: GraduationCap,
      label: "Google Scholar",
    },
  ].filter((e) => e.href);

  return (
    <div className="flex flex-wrap gap-2">
      {entries.map(({ key, href, icon: Icon, label }) => (
        <a
          key={key}
          href={href}
          aria-label={label}
          title={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted text-foreground transition-colors hover:bg-accent"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function BoardPage() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<BoardMember | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="text-center font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
        {t.board.title}
      </h1>

      <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
        {t.board.year}
      </h2>

      <div className="mt-8 space-y-14">
        {boardGroups.map((group) => (
          <section key={group.id}>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {group.role}
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {group.members.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onClick={() => setSelected(member)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl rounded-3xl">
          {selected && (
            <div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="h-40 w-40 shrink-0 self-center rounded-full bg-muted ring-1 ring-border sm:self-start" />
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {selected.name}
                  </h3>
                  <p className="text-foreground/90">{selected.title}</p>
                  <p className="text-foreground/90">{selected.affiliation}</p>
                  <div className="mt-5">
                    <MemberLinks member={selected} />
                  </div>
                </div>
              </div>
              {selected.bio && (
                <>
                  <hr className="my-6 border-border" />
                  <p className="leading-relaxed text-foreground/90">
                    {selected.bio}
                  </p>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
