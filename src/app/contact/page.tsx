import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Lantern Software Engineering PLC. We respond within one business day.",
};

const contactItems = [
  {
    icon: MapPin,
    label: "Office",
    value: "Bole Road, Addis Ababa, Ethiopia",
  },
  { icon: Mail, label: "Email", value: "hello@lantern.et" },
  { icon: Phone, label: "Phone", value: "+251 11 555 0100" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us what you're building. We'll respond within one business day with a clear next step."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Get in touch
              </h2>
              <p className="mt-3 text-muted-foreground">
                Prefer email or a call? Reach us directly — or use the form and
                we'll route you to the right engineer.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((c) => (
                  <Card key={c.label}>
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-amber">
                        <c.icon className="h-4 w-4" strokeWidth={2.25} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                          {c.label}
                        </div>
                        <div className="mt-1 text-sm font-medium">
                          {c.value}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="pt-8">
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" placeholder="Abebe Kebede" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Acme Inc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" placeholder="+251 …" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project details</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us what you're building, timeline, and budget range…"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send message
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We'll never share your information. Read our{" "}
                    <a href="/privacy" className="underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}