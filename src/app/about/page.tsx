import type { Metadata } from "next";
import { Target, Heart, Zap, ShieldCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lantern Software Engineering PLC — senior engineers building reliable software for Africa's most ambitious teams.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over outputs",
    body: "We measure success by the business result, not lines of code.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability is a feature",
    body: "Uptime, security, and correctness are non-negotiable.",
  },
  {
    icon: Zap,
    title: "Ship, learn, repeat",
    body: "Small increments beat big bangs. Every two weeks, something real.",
  },
  {
    icon: Heart,
    title: "Local roots, global craft",
    body: "We build here, to the standards of the best teams anywhere.",
  },
];

const team = [
  { name: "Abebe Kebede", role: "Managing Director", initials: "AK" },
  { name: "Hanna Tesfaye", role: "Head of Engineering", initials: "HT" },
  { name: "Dawit Bekele", role: "Principal Architect", initials: "DB" },
  { name: "Sara Mekonnen", role: "Delivery Lead", initials: "SM" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Senior engineers. Reliable software."
        description="Lantern Software Engineering PLC is an Addis Ababa–based engineering firm delivering mission-critical systems across East Africa."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our story
            </h2>
            <p className="mt-5 text-muted-foreground">
              We started Lantern because we saw too many ambitious organizations
              held back by unreliable software. Our bet was simple: bring
              world-class engineering discipline to Ethiopian teams, build
              locally, and deliver at a global standard. Today we're trusted by
              banks, ministries, telecoms, and startups to build the systems
              they depend on.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <CardHeader>
                  <v.icon className="h-6 w-6 text-amber" strokeWidth={2.25} />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-base">{v.title}</CardTitle>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Leadership
              </h2>
              <p className="mt-4 text-muted-foreground">
                Engineers first, leaders always.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((t) => (
                <Card key={t.name} className="text-center">
                  <CardContent className="pt-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-semibold text-amber">
                      {t.initials}
                    </div>
                    <div className="mt-4 font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}