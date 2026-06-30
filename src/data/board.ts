export type BoardMember = {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  image?: string;
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
  image: "/board/hakeoung-hannah-lee.png",
  bio: "Hannah Lee is a faculty member at the University of Virginia. Grounded in sociocultural perspectives, Lee develops and deploys AI-enhanced multimodal learning analytics approaches and tools to better understand collaborative learning dynamics in authentic STEM learning settings. She is the director of the MLTI Lab (https://www.mltilab.com/) at the University of Virginia.",
  links: {
    lab: "https://www.mltilab.com/",
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
      {
        id: "st-youngsun-choo",
        name: "Youngsun Choo",
        title: "Doctoral Student",
        affiliation: "Seoul National University",
        image: "/board/youngsun-choo.jpg",
        bio: "Youngsun’s research explores how learning emerges through interactions between learners and AI and how AI can support cognitive, emotional learning processes.",
      },
      {
        id: "st-youngwoong-kim",
        name: "YoungWoong Kim",
        title: "Team Lead, Strategic Business Team",
        affiliation: "Korea Education Group",
        image: "/board/youngwoong-kim.jpg",
        bio: 'YoungWoong\'s research—drawing on years of designing and running intensive bootcamps—asks why well-organized, "kind" teaching so rarely produces real capability, and what it takes to design learning where productive struggle, retrieval, and self-regulation actually drive growth. He extends this into the AI era, exploring how to design learning that protects the cognitive work AI increasingly offloads, and how people turn lived experience into capability and new careers.',
        links: {
          homepage: "https://bootcamp.work",
        },
      },
      {
        id: "st-jaesung-hur",
        name: "Jaesung Hur",
        title: "Ph.D. (Spring 2026 grad)",
        affiliation: "Florida State University",
        image: "/board/jaesung-hur.jpg",
        bio: "Jaesung’s research centers on examining how emerging technologies and instructional design shape learner engagement in technology-mediated environments. As AI literacy is becoming a new form of essential digital literacy, her recent work focuses on enhancing pre-service teachers’ AI literacy, including knowledge, skills, critical and ethical evaluation, and human agency in using AI.",
        links: {
          scholar: "https://scholar.google.com/citations?user=qcm5964AAAAJ&hl=en",
        },
      },
    ],
  },
  {
    id: "colloquium",
    role: "KELS Colloquium and Speaker Series Committee",
    members: [
      hannah("col-hannah-lee"),
      {
        id: "col-idam-kim",
        name: "Idam Kim",
        title: "Doctoral Candidate",
        affiliation: "Florida State University",
        image: "/board/idam-kim.jpg",
        bio: "Idam’s research focuses on teacher professional learning across both formal and informal settings, with particular attention to technology integration, digital literacy, and the role of AI in education.",
        links: {
          scholar:
            "https://scholar.google.com/citations?hl=en&user=rhmPr8QAAAAJ",
        },
      },
    ],
  },
  {
    id: "mentoring",
    role: "KELS Mentoring Committee",
    members: [
      {
        id: "men-hyangeun-ji",
        name: "Hyangeun (Jenny) Ji",
        title: "Assistant Professor",
        affiliation: "University of North Texas",
        image: "/board/hyangeun-ji.jpg",
        bio: "Dr. Ji's research explores how learning is shaped across technology-mediated environments, including immersive and AI-enhanced contexts, with particular attention to the interactions among learners, teachers, and learning technologies. Her work considers how these technologies reshape classroom participation, teacher facilitation, and opportunities for meaningful learning.",
        links: {
          scholar:
            "https://scholar.google.com/citations?user=e-KQ6A0AAAAJ&hl=en",
        },
      },
      {
        id: "men-hanall-sung",
        name: "Hanall Sung",
        title: "Assistant Professor",
        affiliation: "University of Tennessee, Knoxville",
        image: "/board/hanall-sung.png",
        bio: "Hanall's research explores multimodal approaches to knowledge construction, expression, and assessment in technology-enhanced learning and teaching, examining both human–human and human–AI interactions.",
        links: {
          linkedin: "https://www.linkedin.com/in/hanallsung",
        },
      },
      {
        id: "men-gi-woong-choi",
        name: "Gi Woong Choi",
        title: "Assistant Professor",
        affiliation: "Florida State University",
        image: "/board/gi-woong-choi.png",
        bio: "Gi Woong's research interests span across the fields of learning sciences, instructional systems and learning technologies, and information science, with a current focus on AI in education, informal STEM learning, libraries as learning spaces, problem-solving, makerspaces, and educational affordances of emerging technologies.",
        links: {
          homepage: "https://sites.google.com/view/giwoongchoi",
          scholar:
            "https://scholar.google.com/citations?user=6YJ82EwAAAAJ&hl=en",
          linkedin: "https://www.linkedin.com/in/giwoongchoi/",
        },
      },
    ],
  },
  {
    id: "communication",
    role: "KELS Communication Officers",
    members: [
      {
        id: "com-tony-ahn",
        name: "Byunghoon (Tony) Ahn",
        title: "Postdoctoral Fellow",
        affiliation: "University of British Columbia",
        image: "/board/tony-ahn.jpg",
        bio: "Tony's research interest includes: health professions education, simulation-based education, impasse-driven learning (e.g., productive struggle, epistemic emotions), and instructional design.",
        links: {
          scholar: "https://scholar.google.ca/citations?user=JyQgLioAAAAJ&hl=en",
        },
      },
    ],
  },
  {
    id: "curators",
    role: "KELS Resource Curators",
    members: [
      {
        id: "cur-jewoong-moon",
        name: "Jewoong Moon",
        title: "Assistant Professor",
        affiliation: "The University of Alabama",
        image: "/board/jewoong-moon.jpg",
        bio: "Jewoong's research interests include digital game-based learning, inclusive and immersive learning environment design, and adaptive learning system design informed by computational analytics.",
        links: {
          homepage: "https://educatian.github.io/cv/",
          lab: "https://educatian.github.io/adie/",
        },
      },
    ],
  },
];
