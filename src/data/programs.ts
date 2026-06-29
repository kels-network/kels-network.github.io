export type Program = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const programs: Program[] = [
  {
    id: "colloquium",
    title: "KELS Colloquium and Speakers Series",
    description: "KELS builds online & offline community among ~",
    items: [
      "Invited Speaker Series",
      "Special Webinars",
      "PhD Hidden Curriculum Series",
      "Rising Graduate Scholars Colloquium",
      "KELS Workshop",
    ],
  },
  {
    id: "community",
    title: "KELS Community",
    description: "KELS builds online & offline community among ~",
    items: [
      "In-person Meet Up",
      "Mentoring",
      "KELS Small Talks (잡담회)",
      "Board Meetings",
      "KELS Clubs",
    ],
  },
];
