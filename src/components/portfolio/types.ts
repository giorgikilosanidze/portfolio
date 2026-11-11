export type Job = {
  role: string;
  company: string;
  url: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
};
