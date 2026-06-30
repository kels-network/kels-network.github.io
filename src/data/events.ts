export type EventItem = {
  id: string;
  title: string;
  /** Path to the event poster image (e.g. "/events/2025-dbr.jpg"). */
  poster?: string;
  dateUS?: string;
  dateKR?: string;
  location?: string;
  locationLabel?: string;
  description?: string;
  speakers: string[];
};

export const upcomingEvents: EventItem[] = [
  {
    id: "upcoming-1",
    title:
      "Conference Debrief Session (ISLS 2026 · ICOLSEI · Festival of Learning)",
    dateUS: "JUL 10 (8PM EST)",
    dateKR: "JUL 11, 2026 (9AM KST)",
    location: "ZOOM",
    locationLabel: "Online",
    speakers: [
      "KELS Speaker Series Committee"],
  },
];

export type PastYear = {
  year: string;
  events: EventItem[];
};

const sampleDesc =
  "This event discusses design-based research and human-centered design approaches in educational technology and learning sciences, exploring how these methodologies shape research practice and learning environments across both online and offline contexts.";

export const pastEvents: PastYear[] = [
  {
    year: "2025",
    events: [
      {
        id: "2025-1",
        title:
          "Design Methodologies: Design-Based Research & Human-Centered Design",
        speakers: [
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
        ],
      },
      {
        id: "2025-2",
        title:
          "Design Methodologies: Design-Based Research & Human-Centered Design",
        dateUS: "NOV 4, 2024 (7PM EST)",
        dateKR: "NOV 3, 2024 (8AM KST)",
        location: "ZOOM",
        locationLabel: "Online",
        description: sampleDesc,
        speakers: [
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
        ],
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        id: "2024-1",
        title:
          "Design Methodologies: Design-Based Research & Human-Centered Design",
        speakers: [
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
        ],
      },
      {
        id: "2024-2",
        title:
          "Design Methodologies: Design-Based Research & Human-Centered Design",
        speakers: [
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
        ],
      },
      {
        id: "2024-3",
        title:
          "Design Methodologies: Design-Based Research & Human-Centered Design",
        speakers: [
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
          "Dr. Jewoong Moon (Assistant Professor, University of Alabama)",
        ],
      },
    ],
  },
];
