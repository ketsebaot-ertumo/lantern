import type { Metadata } from "next";
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  Building2,
  Truck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Industry-specific software solutions for fintech, healthcare, education, government, and logistics teams.",
};

const industries = [
  {
    icon: Landmark,
    title: "Fintech & Banking",
    description:
      "Core banking integrations, payment rails, mobile money, and lending platforms built for regulatory compliance.",
    outcomes: [
      "Faster loan origination",
      "Real-time transaction processing",
      "National credit bureau integration",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Electronic medical records, patient portals, and health information systems designed for clinical workflows.",
    outcomes: [
      "Unified patient records",
      "Offline-first field tools",
      "HMIS / DHIS2 integration",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Learning management systems, student information platforms, and assessment tools.",
    outcomes: [
      "Student & staff portals",
      "Offline-capable e-learning",
      "Exam & grading automation",
    ],
  },
  {
    icon: Building2,
    title: "Government & Public Sector",
    description:
      "Citizen service portals, regulatory systems, and inter-agency data platforms.",
    outcomes: [
      "Digital identity integration",
      "Secure multi-tenant systems",
      "Open data & transparency portals",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Fleet management, warehouse systems, and last-mile delivery platforms.",
    outcomes: [
      "Real-time shipment tracking",
      "Route optimization",
      "Warehouse & inventory systems",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Software built for your industry"
        description="We bring deep domain expertise to every sector we serve — because generic software doesn't solve specific problems."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((i) => (
              <Card key={i.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-amber">
                    <i.icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardTitle className="text-lg">{i.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm leading-relaxed">
                    {i.description}
                  </CardDescription>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {i.outcomes.map((o) => (
                      <span
                        key={o}
                        className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}