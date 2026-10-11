import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Engineering articles from the Lantern team — fintech, security, frontend, and delivery.",
};

const posts = [
  {
    slug: "event-driven-fintech",
    title: "Designing event-driven systems for Ethiopian fintech",
    excerpt:
      "How we structure Kafka-based pipelines for payment flows that can't afford to lose a message.",
    category: "Engineering",
    date: "Mar 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "soc2-readiness",
    title: "A pragmatic guide to SOC 2 readiness for startups",
    excerpt:
      "What actually matters in a SOC 2 Type II audit — and what's just consultant theater.",
    category: "Security",
    date: "Mar 4, 2026",
    readTime: "12 min read",
  },
  {
    slug: "nextjs-app-router",
    title: "Why we standardized on Next.js App Router",
    excerpt:
      "Server components, streaming, and the trade-offs we accepted after a year in production.",
    category: "Frontend",
    date: "Feb 22, 2026",
    readTime: "6 min read",
  },
  {
    slug: "offline-first-africa",
    title: "Offline-first is not optional in African healthcare",
    excerpt:
      "Designing HMIS tools that work when the network doesn't — and sync safely when it does.",
    category: "Field Notes",
    date: "Feb 10, 2026",
    readTime: "10 min read",
  },
  {
    slug: "postgres-at-scale",
    title: "Postgres at scale: lessons from 10TB+ deployments",
    excerpt:
      "Partitioning, connection pooling, and the queries that quietly cost you thousands.",
    category: "Engineering",
    date: "Jan 28, 2026",
    readTime: "9 min read",
  },
  {
    slug: "hiring-senior-engineers",
    title: "How we hire senior engineers (and why we don't do whiteboard tests)",
    excerpt:
      "A take-home that mirrors real work beats LeetCode theater every time.",
    category: "Culture",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Field notes from the team"
        description="Practical engineering writing from the systems we build and the problems we solve."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group"
              >
                <Card className="flex h-full flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:border-amber/40 group-hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-amber/15 text-amber hover:bg-amber/20"
                      >
                        {p.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground/60">
                        {p.date}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardTitle className="text-lg leading-snug group-hover:text-amber">
                      {p.title}
                    </CardTitle>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t pt-5">
                    <span className="text-xs text-muted-foreground">
                      {p.readTime}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-amber" />
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}