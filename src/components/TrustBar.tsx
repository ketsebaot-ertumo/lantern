import { Separator } from "@/components/ui/separator";

const logos = [
  "Bank of Abyssinia",
  "Ethio Telecom",
  "Ministry of Health",
  "Awash Bank",
  "Safaricom",
];

export function TrustBar() {
  return (
    <div className="border-y bg-card/50 py-8">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          Trusted by teams building at scale
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((name, i) => (
            <div key={name} className="flex items-center gap-10">
              <span className="text-sm font-semibold tracking-tight text-muted-foreground/80 transition-colors hover:text-foreground">
                {name}
              </span>
              {i < logos.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-4 sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}