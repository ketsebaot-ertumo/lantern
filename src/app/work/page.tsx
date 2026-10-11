import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and client outcomes from Software Engineering Technology PLC.",
};

const projects = [
  {
    slug: "erp-retail-chain",
    industry: "Retail",
    client: "National retail chain",
    title: "Integrated ERP & POS platform",
    description:
      "Deployed a unified ERP, POS, and inventory system across 45 branches with fiscalized cash register integration certified by the Ministry of Revenues.",
    metric: "45 branches unified",
  },
  {
    slug: "e-government-portal",
    industry: "GovTech",
    client: "Federal regulatory authority",
    title: "Digital services portal",
    description:
      "Digitized 66 licensing and certification services, eliminating in-person visits for thousands of businesses and exporters.",
    metric: "66 services online",
  },
  {
    slug: "fleet-telematics",
    industry: "Logistics",
    client: "Regional logistics operator",
    title: "Real-time fleet management",
    description:
      "GPS telematics platform with route optimization, fuel monitoring, and driver safety alerts for commercial fleets.",
    metric: "1,200+ vehicles tracked",
  },
  {
    slug: "mobile-finance",
    industry: "Fintech",
    client: "Microfinance institution",
    title: "Loan origination & management",
    description:
      "Mobile-first origination pipeline with offline-capable field tools and automated credit scoring for rural lending.",
    metric: "60% faster processing",
  },
  {
    slug: "health-information",
    industry: "Healthcare",
    client: "Regional health bureau",
    title: "Facility health information system",
    description:
      "Patient records and reporting platform deployed across district health facilities with offline-first data sync.",
    metric: "120+ facilities live",
  },
  {
    slug: "telecom-selfservice",
    industry: "Telecom",
    client: "National telecom operator",
    title: "Customer self-service portal",
    description:
      "Modernized subscriber portal for package purchases, airtime top-up, bill payment, and roaming management.",
    metric: "10M+ subscribers",
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Proof, not promises"
        description="A selection of systems we've designed, built, and shipped for organizations across Ethiopia."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group">
                <Card className="flex h-full flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:border-amber/40 group-hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className="bg-amber/15 text-amber hover:bg-amber/20"
                      >
                        {p.industry}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {p.client}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardTitle className="text-xl group-hover:text-amber">
                      {p.title}
                    </CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      {p.description}
                    </CardDescription>
                    <div className="mt-6 flex items-center justify-between border-t pt-5">
                      <span className="text-sm font-semibold text-amber">
                        {p.metric}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-amber" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// import type { Metadata } from "next";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { PageHeader } from "@/components/PageHeader";

// export const metadata: Metadata = {
//   title: "Work",
//   description:
//     "Case studies and client outcomes from Lantern Software Engineering PLC.",
// };

// const projects = [
//   {
//     slug: "microfinance-origination",
//     industry: "Fintech",
//     client: "Leading microfinance institution",
//     title: "Loan origination platform",
//     description:
//       "Rebuilt the origination pipeline with event-driven architecture and a mobile officer app.",
//     metric: "73% faster processing",
//   },
//   {
//     slug: "national-hmis",
//     industry: "Healthcare",
//     client: "Ministry of Health",
//     title: "National health information system",
//     description:
//       "Unified patient records across 300+ facilities with offline-first field tools.",
//     metric: "300+ facilities live",
//   },
//   {
//     slug: "telecom-self-service",
//     industry: "Telecom",
//     client: "Ethio Telecom",
//     title: "Self-service customer portal",
//     description:
//       "Modernized the customer portal serving 40M+ subscribers with Next.js.",
//     metric: "40M+ users",
//   },
//   {
//     slug: "logistics-tracking",
//     industry: "Logistics",
//     client: "Regional logistics operator",
//     title: "Real-time fleet tracking",
//     description:
//       "Fleet management platform with GPS telemetry, route optimization, and driver app.",
//     metric: "1,200 vehicles tracked",
//   },
// ];

// export default function WorkPage() {
//   return (
//     <>
//       <PageHeader
//         eyebrow="Work"
//         title="Proof, not promises"
//         description="A selection of systems we've designed, built, and shipped for teams across East Africa."
//       />

//       <section className="py-20 md:py-28">
//         <div className="mx-auto max-w-[1280px] px-6 md:px-8">
//           <div className="grid gap-6 md:grid-cols-2">
//             {projects.map((p) => (
//               <Link key={p.slug} href={`/work/${p.slug}`} className="group">
//                 <Card className="flex h-full flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:border-amber/40 group-hover:shadow-lg">
//                   <CardHeader>
//                     <div className="flex items-center gap-3">
//                       <Badge
//                         variant="secondary"
//                         className="bg-amber/15 text-amber hover:bg-amber/20"
//                       >
//                         {p.industry}
//                       </Badge>
//                       <span className="text-xs text-muted-foreground">
//                         {p.client}
//                       </span>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="flex-1">
//                     <CardTitle className="text-xl group-hover:text-amber">
//                       {p.title}
//                     </CardTitle>
//                     <CardDescription className="mt-2 leading-relaxed">
//                       {p.description}
//                     </CardDescription>
//                     <div className="mt-6 flex items-center justify-between border-t pt-5">
//                       <span className="text-sm font-semibold text-amber">
//                         {p.metric}
//                       </span>
//                       <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-amber" />
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }