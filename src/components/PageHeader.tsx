import { Badge } from "@/components/ui/badge";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-grid border-b py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="bg-amber/15 text-amber hover:bg-amber/20"
          >
            {eyebrow}
          </Badge>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}