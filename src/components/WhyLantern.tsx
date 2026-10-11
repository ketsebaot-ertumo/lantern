import { MapPin, Rocket, Lock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reasons = [
  {
    icon: MapPin,
    title: "Local roots, global standards",
    body: "Based in Addis, delivering to international benchmarks for quality and security.",
  },
  {
    icon: Rocket,
    title: "Ship-fast, agile delivery",
    body: "Two-week sprints, transparent backlogs, and demo-ready increments from day one.",
  },
  {
    icon: Lock,
    title: "Security-first by default",
    body: "Threat modeling, code review, and hardening baked into every engagement.",
  },
  {
    icon: Users,
    title: "Senior engineers only",
    body: "No junior bench-warming. Every project is led by a principal engineer.",
  },
];

export function WhyLantern() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Badge
              variant="secondary"
              className="bg-amber/15 text-amber hover:bg-amber/20"
            >
              Why Lantern
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              The partner teams trust when the stakes are high
            </h2>
            <p className="mt-4 text-muted-foreground">
              We combine deep local context with the engineering discipline of
              world-class product teams. Reliable software, delivered
              predictably.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <Card key={r.title}>
                <CardHeader>
                  <r.icon
                    className="h-6 w-6 text-amber"
                    strokeWidth={2.25}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-base">{r.title}</CardTitle>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}