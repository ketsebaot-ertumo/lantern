import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />

      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-amber" />
          Trusted software engineering partner in East Africa
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
          Software that ships.
          <br />
          <span className="text-amber">Engineering that scales.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          Lantern Software Engineering PLC designs, builds, and maintains
          mission-critical systems for fintech, healthcare, government, and
          enterprise teams across Ethiopia and beyond.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg">
            <a href="/contact">
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a href="/work">View Our Work</a>
          </Button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground/70">
          Trusted by 40+ organizations · ISO-aligned delivery · AWS & Azure ready
        </p>
      </div>
    </section>
  );
}