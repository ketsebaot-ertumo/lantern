import type { Metadata } from "next";
import {
  Code2,
  Boxes,
  Smartphone,
  Cloud,
  Network,
  Brain,
  CheckCircle2,
} from "lucide-react";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, ERP (HR, Accounting, Inventory, Procurement, Sales), web & mobile apps, cloud & DevOps, systems integration, and data & AI — delivered by senior engineers.",
};

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Bespoke platforms, internal tools, and line-of-business systems engineered for reliability and scale.",
    points: [
      "Domain-driven design & architecture reviews",
      "Legacy modernization & migration",
      "Workflow & automation platforms",
    ],
  },
  {
    icon: Boxes,
    title: "ERP Systems",
    description:
      "End-to-end ERP covering HR, Accounting, Inventory, Procurement, Sales, and more — tailored to your operations.",
    points: [
      "CRM",
      "Projects & Sites",
      "HR & Payroll",
      "Logistics & Fleet",
      "Accounting & Finance",
      "Inventory, Procurement & Sales",
      "Role-based access & audit trails",
    ],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Customer-facing products built with React, Next.js, Flutter, and native.",
    points: [
      "Progressive web apps & SPAs",
      "iOS & Android (Flutter / React Native)",
      "Design systems & accessibility (WCAG 2.1 AA)",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, and GCP infrastructure with CI/CD, IaC, and observability.",
    points: [
      "Kubernetes & container orchestration",
      "Terraform / Pulumi infrastructure-as-code",
      "Monitoring, alerting & SRE practices",
    ],
  },
  {
    icon: Network,
    title: "Systems Integration",
    description:
      "Payment rails, core banking, and enterprise APIs connected reliably.",
    points: [
      "Payment gateways & mobile money",
      "Core banking & regulatory integrations",
      "Event-driven messaging (Kafka, RabbitMQ)",
    ],
  },
  {
    icon: Brain,
    title: "Data & AI",
    description:
      "Data pipelines, dashboards, and applied ML that drive real decisions.",
    points: [
      "ETL/ELT pipelines & data warehouses",
      "BI dashboards (Metabase, Superset)",
      "Applied ML & LLM integrations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-stack engineering, end to end"
        description="From discovery to deployment and beyond — one accountable team delivering reliable software."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-amber">
                    <s.icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm leading-relaxed">
                    {s.description}
                  </CardDescription>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-navy px-8 py-12 text-center text-white md:px-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-3 text-white/70">
              Book a free 30-minute consultation and we'll help you scope it.
            </p>
            <Button size="lg" className="mt-6">
              <a href="/contact">Book a Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// import type { Metadata } from "next";
// import {
//   Code2,
//   Smartphone,
//   Cloud,
//   Network,
//   Brain,
//   ShieldCheck,
//   CheckCircle2,
// } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { PageHeader } from "@/components/PageHeader";

// export const metadata: Metadata = {
//   title: "Services",
//   description:
//     "Custom software, web & mobile apps, cloud & DevOps, systems integration, data & AI, and IT consulting — delivered by senior engineers.",
// };

// const services = [
//   {
//     icon: Code2,
//     title: "Custom Software",
//     description:
//       "Bespoke platforms, ERPs, and internal tools engineered for reliability and scale.",
//     points: [
//       "Domain-driven design & architecture reviews",
//       "Legacy modernization & migration",
//       "ERP, CRM, and workflow platforms",
//     ],
//   },
//   {
//     icon: Smartphone,
//     title: "Web & Mobile Apps",
//     description:
//       "Customer-facing products built with React, Next.js, Flutter, and native.",
//     points: [
//       "Progressive web apps & SPAs",
//       "iOS & Android (Flutter / React Native)",
//       "Design systems & accessibility (WCAG 2.1 AA)",
//     ],
//   },
//   {
//     icon: Cloud,
//     title: "Cloud & DevOps",
//     description:
//       "AWS, Azure, and GCP infrastructure with CI/CD, IaC, and observability.",
//     points: [
//       "Kubernetes & container orchestration",
//       "Terraform / Pulumi infrastructure-as-code",
//       "Monitoring, alerting & SRE practices",
//     ],
//   },
//   {
//     icon: Network,
//     title: "Systems Integration",
//     description:
//       "Payment rails, core banking, and enterprise APIs connected reliably.",
//     points: [
//       "Payment gateways & mobile money",
//       "Core banking & regulatory integrations",
//       "Event-driven messaging (Kafka, RabbitMQ)",
//     ],
//   },
//   {
//     icon: Brain,
//     title: "Data & AI",
//     description:
//       "Data pipelines, dashboards, and applied ML that drive real decisions.",
//     points: [
//       "ETL/ELT pipelines & data warehouses",
//       "BI dashboards (Metabase, Superset)",
//       "Applied ML & LLM integrations",
//     ],
//   },
//   {
//     icon: ShieldCheck,
//     title: "IT Consulting",
//     description:
//       "Architecture reviews, security audits, and delivery-team enablement.",
//     points: [
//       "Technical due diligence & audits",
//       "Security & compliance readiness",
//       "Team coaching & agile delivery setup",
//     ],
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Services"
//         title="Full-stack engineering, end to end"
//         description="From discovery to deployment and beyond — one accountable team delivering reliable software."
//       />

//       <section className="py-20 md:py-28">
//         <div className="mx-auto max-w-[1280px] px-6 md:px-8">
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((s) => (
//               <Card key={s.title} className="flex flex-col">
//                 <CardHeader>
//                   <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-amber">
//                     <s.icon className="h-5 w-5" strokeWidth={2.25} />
//                   </div>
//                 </CardHeader>
//                 <CardContent className="flex-1">
//                   <CardTitle className="text-lg">{s.title}</CardTitle>
//                   <CardDescription className="mt-2 text-sm leading-relaxed">
//                     {s.description}
//                   </CardDescription>
//                   <ul className="mt-5 space-y-2">
//                     {s.points.map((p) => (
//                       <li
//                         key={p}
//                         className="flex items-start gap-2 text-sm text-muted-foreground"
//                       >
//                         <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
//                         {p}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="mt-16 rounded-2xl bg-navy px-8 py-12 text-center text-white md:px-16">
//             <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
//               Not sure where to start?
//             </h2>
//             <p className="mt-3 text-white/70">
//               Book a free 30-minute consultation and we'll help you scope it.
//             </p>
//             <Button size="lg" className="mt-6">
//               <a href="/contact">Book a Consultation</a>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }