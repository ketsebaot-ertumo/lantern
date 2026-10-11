import { Badge } from "@/components/ui/badge";

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue", "Flutter", "Tailwind"],
  },
  { label: "Backend", items: ["Node.js", "Python", "Go", ".NET", "Java"] },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "dbt"],
  },
  { label: "Cloud", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
];

export function TechStack() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="bg-amber/15 text-amber hover:bg-amber/20"
          >
            Our Stack
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Modern tools, proven choices
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                {g.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border bg-background px-3 py-2 text-sm font-medium transition-colors hover:border-amber/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}