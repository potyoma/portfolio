export const getLabel = (type: "github" | "demo", name: string) =>
  `Go to project's ${name} ${type === "github" ? "GitHub" : "demo"} page.`;
