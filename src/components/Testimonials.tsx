import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const items = [
  {
    quote:
      "Lantern delivered our core banking integration two weeks ahead of schedule. Their code quality is the best we've worked with locally.",
    name: "Hanna Tesfaye",
    role: "CTO, Awash Digital",
    initials: "HT",
  },
  {
    quote:
      "They understood our regulatory constraints and still shipped fast. Rare combination.",
    name: "Dawit Bekele",
    role: "Head of Engineering, Ethio Telecom",
    initials: "DB",
  },
  {
    quote:
      "The dashboard they built is now used daily by 300+ officers across five regions.",
    name: "Sara Mekonnen",
    role: "Program Director, Ministry of Health",
    initials: "SM",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What partners say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <CardContent className="flex-1 pt-6">
                <Quote className="h-6 w-6 text-amber" />
                <blockquote className="mt-4 text-sm leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="border-t pt-5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-navy text-xs text-amber">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}