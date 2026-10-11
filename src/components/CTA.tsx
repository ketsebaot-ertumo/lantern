import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let's build something reliable together.
            </h2>
            <p className="mt-4 text-white/70">
              Tell us about your project. We'll respond within one business day
              with a clear next step.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg">
                <a href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <a
                href="mailto:hello@lantern.et"
                className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                or email hello@lantern.et
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}