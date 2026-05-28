import { Sun, Heart, MapPin, Sparkles } from "lucide-react";

const icons = [Sun, Heart, MapPin, Sparkles] as const;

type WhyChooseContent = {
  eyebrow: string;
  title: string;
  reasons: ReadonlyArray<{ title: string; description: string }>;
};

export function WhyChoose({ content }: { content: WhyChooseContent }) {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-serif text-foreground md:text-4xl lg:text-5xl">
            {content.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.reasons.map((reason, index) => {
            const Icon = icons[index] ?? Sparkles;

            return (
              <div
                key={reason.title}
                className="group rounded-2xl bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-serif text-foreground">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}