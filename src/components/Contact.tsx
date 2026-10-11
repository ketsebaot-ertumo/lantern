import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Let's build something reliable together.
            </h2>
            <p className="mt-4 text-white/70">
              Tell us about your project. We'll respond within one business day
              with a clear next step.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>Addis Ababa, Ethiopia</p>
              <p>hello@lantern.et</p>
              <p>+251 11 XXX XXXX</p>
            </div>
          </div>

          <form className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full name
              </Label>
              <Input
                id="name"
                placeholder="Abebe Kebede"
                className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Work email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Project details
              </Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Tell us what you're building..."
                className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
              />
            </div>
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}