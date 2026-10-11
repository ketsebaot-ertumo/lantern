import Link from "next/link";
import { Lamp} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons/BrandIcons";
import { getCurrentYear } from "@/lib/get-current-year";
// import { FooterYear } from "./FooterYear";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services/custom-software", label: "Custom Software" },
      { href: "/services/web-mobile", label: "Web & Mobile" },
      { href: "/services/cloud-devops", label: "Cloud & DevOps" },
      { href: "/services/data-ai", label: "Data & AI" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/careers", label: "Careers" },
      { href: "/insights", label: "Insights" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/security", label: "Security" },
    ],
  },
];

const socials = [
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { Icon: TwitterIcon, href: "#", label: "Twitter" },
  { Icon: GithubIcon, href: "#", label: "GitHub" },
];

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy">
                <Lamp className="h-5 w-5 text-amber" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Lantern<span className="text-amber">.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              Lantern Software Engineering PLC — building reliable software for
              Africa's most ambitious teams.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:border-amber/40 hover:text-amber"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-amber"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground/70 md:flex-row">
           <p>
            © {year} Lantern Software Engineering PLC. All rights reserved.
          </p>

          <p>Addis Ababa, Ethiopia · hello@lantern.et</p>
        </div>
      </div>
    </footer>
  );
}