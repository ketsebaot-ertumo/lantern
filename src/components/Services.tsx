import {
  Code2,
  Boxes,          // ← new, for ERP
  Smartphone,
  Cloud,
  Network,
  Brain,
} from "lucide-react";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Bespoke platforms and internal tools engineered for reliability.",
  },
  {
    icon: Boxes,
    title: "ERP Systems",
    description:
      "Modular ERP covering HR, Accounting, Inventory, Procurement, and Sales.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Customer-facing products built with React, Next.js, Flutter, and native.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, and GCP infrastructure with CI/CD, IaC, and observability.",
  },
  {
    icon: Network,
    title: "Systems Integration",
    description:
      "Payment rails, core banking, and enterprise APIs connected reliably.",
  },
  {
    icon: Brain,
    title: "Data & AI",
    description:
      "Data pipelines, dashboards, and applied ML that drive real decisions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Full-stack engineering, end to end
          </h2>
          <p className="mt-4 text-muted-foreground">
            From discovery to deployment and beyond — one accountable team.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group transition-all duration-200 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl hover:shadow-amber/5"
            >
              <CardHeader>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-amber transition-colors group-hover:bg-amber group-hover:text-navy">
                  <s.icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{s.title}</CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed">
                  {s.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
// import {
//   Code2,
//   Smartphone,
//   Cloud,
//   Network,
//   Brain,
//   ShieldCheck,
// } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// const services = [
//   { icon: Code2, title: "Custom Software", description: "Bespoke platforms, ERPs, and internal tools engineered for reliability." },
//   { icon: Smartphone, title: "Web & Mobile Apps", description: "Customer-facing products built with React, Next.js, Flutter, and native." },
//   { icon: Cloud, title: "Cloud & DevOps", description: "AWS, Azure, and GCP infrastructure with CI/CD, IaC, and observability." },
//   { icon: Network, title: "Systems Integration", description: "Payment rails, core banking, and enterprise APIs connected reliably." },
//   { icon: Brain, title: "Data & AI", description: "Data pipelines, dashboards, and applied ML that drive real decisions." },
//   { icon: ShieldCheck, title: "IT Consulting", description: "Architecture reviews, security audits, and delivery-team enablement." },
// ];

// export function Services() {
//   return (
//     <section id="services" className="py-20 md:py-28">
//       <div className="mx-auto max-w-[1280px] px-6 md:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-widest text-amber">
//             What we do
//           </p>
//           <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
//             Full-stack engineering, end to end
//           </h2>
//           <p className="mt-4 text-muted-foreground">
//             From discovery to deployment and beyond — one accountable team.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((s) => (
//             <Card
//               key={s.title}
//               className="group transition-all duration-200 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl hover:shadow-amber/5"
//             >
//               <CardHeader>
//                 <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-amber transition-colors group-hover:bg-amber group-hover:text-navy">
//                   <s.icon className="h-5 w-5" strokeWidth={2.25} />
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <CardTitle className="text-lg">{s.title}</CardTitle>
//                 <CardDescription className="mt-2 text-sm leading-relaxed">
//                   {s.description}
//                 </CardDescription>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }