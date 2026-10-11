import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const posts = [
  {
    title: "Designing event-driven systems for Ethiopian fintech",
    category: "Engineering",
    date: "Mar 12, 2026",
    href: "/insights/event-driven-fintech",
  },
  {
    title: "A pragmatic guide to SOC 2 readiness for startups",
    category: "Security",
    date: "Mar 4, 2026",
    href: "/insights/soc2-readiness",
  },
  {
    title: "Why we standardized on Next.js App Router",
    category: "Frontend",
    date: "Feb 22, 2026",
    href: "/insights/nextjs-app-router",
  },
];

export function Insights() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">
              Insights
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Latest from the team
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-amber"
          >
            All articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.href} href={p.href} className="group">
              <Card className="flex h-full flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:border-amber/40 group-hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 text-xs">
                    <Badge
                      variant="secondary"
                      className="bg-amber/15 text-amber hover:bg-amber/20"
                    >
                      {p.category}
                    </Badge>
                    <span className="text-muted-foreground/60">{p.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardTitle className="text-lg leading-snug group-hover:text-amber">
                    {p.title}
                  </CardTitle>
                </CardContent>
                <CardFooter>
                  <span className="inline-flex items-center gap-1 text-sm font-medium">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}