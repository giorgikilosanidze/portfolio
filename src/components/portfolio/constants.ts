import type { Job, Project } from "./types";

export const PROFILE = {
  name: "Giorgi Kilosanidze",
  role: "Front-End Developer",
  location: "Tbilisi, Georgia",
  summary:
    "I build fast, responsive web applications with React, TypeScript, Next.js and Tailwind CSS, and I'm comfortable on the back end with Node.js, Express and REST APIs.",
  email: "giorgikilosanidze7@gmail.com",
  github: "https://github.com/giorgikilosanidze",
  linkedin: "https://www.linkedin.com/in/giorgi-kilosanidze-2a186a315/",
  cv: "/Giorgi-Kilosanidze-CV.pdf",
};

export const EXPERIENCE: Job[] = [
  {
    role: "Front-End Developer",
    company: "Argonaut Research Technologies",
    url: "https://argonautresearch.com/",
    period: "Aug 2024 – Present",
    location: "Tbilisi, Georgia",
    highlights: [
      "Migrated 70,000+ lines of legacy JavaScript to modern React, cutting load time by 40%.",
      "Built 3 of the most complex core features of the platform.",
      "Mentored 3 junior developers on best practices and code quality.",
      "Worked closely with design and back-end teams on responsive UI and API integration.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "GORBI",
    description:
      "Website for GORBI, a public opinion research and consulting company working across Europe, Eurasia, South East Asia and Africa. Built on my own at Argonaut Research Technologies.",
    stack: ["Next.js", "React"],
    liveUrl: "https://gorbi.com/",
  },
  {
    name: "CookAI",
    description:
      "Type the ingredients you have and get a full recipe in seconds, with an AI-generated photo of the dish. Save favorites to a personal cookbook and share them with a link.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini AI", "Auth.js"],
    liveUrl: "https://cook-ai-sooty.vercel.app",
    codeUrl: "https://github.com/giorgikilosanidze/CookAI",
  },
  {
    name: "BeSocial",
    description:
      "A social network with posts, reactions, comments, follows, notifications and real-time chat with online status and typing indicators.",
    stack: ["React", "TypeScript", "Redux", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "https://be-social-liard.vercel.app",
    codeUrl: "https://github.com/giorgikilosanidze/BeSocial",
  },
  {
    name: "JAKASPORTS",
    description:
      "An online sports equipment store with a product catalog, wholesale ordering and a full admin panel for managing products and orders.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
];

export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "HTML & CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Git",
];

export const EDUCATION = {
  title: "Front-End Development Course",
  school: "Academy of Digital Industries",
  year: "2024",
  details: "Certificates in HTML & CSS, JavaScript and React.",
};
