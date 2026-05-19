import {
  Wifi,
  Tv,
  Thermometer,
  WashingMachine,
  UtensilsCrossed,
  Coffee,
  Waves,
  Key,
} from "lucide-react";

const icons = [
  Wifi,
  Tv,
  Thermometer,
  WashingMachine,
  UtensilsCrossed,
  Coffee,
  Waves,
  Key,
] as const;

type AmenitiesContent = {
  eyebrow: string;
  title: string;
  items: ReadonlyArray<string>;
  dishwasherNote: string;
};

export function Amenities({ content }: { content: AmenitiesContent }) {
  return (
    <section id="servizi" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-serif text-foreground md:text-4xl lg:text-5xl">
            {content.title}
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = icons[index] ?? Key;

            return (
              <div
                key={item}
                className="group flex flex-col items-center rounded-2xl bg-secondary p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-center text-sm font-medium text-foreground">{item}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3">
            <span className="text-sm text-primary">{content.dishwasherNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}