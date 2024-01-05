export type Job = {
  role: string;
  company: { name: string; link?: string };
  date: { from: string; to: string };
  stack: string[];
  points: string[];
};
