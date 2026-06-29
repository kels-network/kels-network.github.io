export type BoardMember = {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  bio?: string;
  links?: {
    lab?: string;
    linkedin?: string;
    homepage?: string;
    scholar?: string;
  };
};

export type BoardGroup = {
  id: string;
  role: string;
  members: BoardMember[];
};

const hannah = (id: string): BoardMember => ({
  id,
  name: "Hakeoung Hannah Lee",
  title: "Assistant Professor",
  affiliation: "University of Virginia",
  bio: "Hannah's research explores multimodal approaches to knowledge construction, expression, and assessment in technology-enhanced learning and teaching, examining both human–human and human–AI interactions.",
  links: {
    lab: "#",
    linkedin: "#",
    homepage: "#",
    scholar: "#",
  },
});

export const boardGroups: BoardGroup[] = [
  {
    id: "chair",
    role: "KELS Network Chair",
    members: [hannah("chair-1")],
  },
  {
    id: "small-talk",
    role: "KELS Small Talk Committee",
    members: [
      hannah("st-1"),
      hannah("st-2"),
      hannah("st-3"),
      hannah("st-4"),
    ],
  },
  {
    id: "colloquium",
    role: "KELS Colloquium and Speaker Series Committee",
    members: [
      hannah("col-1"),
      hannah("col-2"),
      hannah("col-3"),
      hannah("col-4"),
    ],
  },
  {
    id: "mentoring",
    role: "KELS Mentoring Committee",
    members: [hannah("men-1"), hannah("men-2"), hannah("men-3")],
  },
  {
    id: "communication",
    role: "KELS Communication Officers",
    members: [hannah("com-1"), hannah("com-2"), hannah("com-3")],
  },
  {
    id: "curators",
    role: "KELS Resource Curators",
    members: [hannah("cur-1"), hannah("cur-2")],
  },
];
