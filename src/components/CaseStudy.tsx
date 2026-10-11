import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CaseStudy() {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="bg-amber/15 text-amber hover:bg-amber/20">
              Featured Case Study
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              How we cut loan processing time by 73% for a leading microfinance
              institution
            </h2>
            <p className="mt-5 text-white/70">
              We rebuilt their origination pipeline with a modern event-driven
              architecture, integrated with the national credit bureau, and
              rolled out a mobile-first officer app.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "73%", label: "Faster processing" },
                { value: "4.2x", label: "Loan volume" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-2xl font-bold text-amber md:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button>
                <a href="/work/microfinance">
                  Read full case study
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-white/5 p-6">
                <TrendingUp className="h-8 w-8 text-amber" />
                <div className="space-y-3">
                  {[80, 60, 95, 45, 88].map((w, i) => (
                    <div key={i} className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-amber"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}