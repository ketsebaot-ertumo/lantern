"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Lamp } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-20 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy">
            <Lamp className="h-5 w-5 text-amber" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Lantern<span className="text-amber">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button size="sm" className="hidden md:inline-flex">
          <Link href="/contact">Book a Consultation</Link>
        </Button>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="mt-2 w-fit">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}