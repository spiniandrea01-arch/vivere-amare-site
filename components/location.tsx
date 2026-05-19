import Image from "next/image";
import { MapPin, Clock, Car, Plane } from "lucide-react";

const CASTELSARDO_IMAGE = "/images/Castelsardo1.jpeg";
const icons = [MapPin, Clock, Car, Plane] as const;

type LocationContent = {
  eyebrow: string;
  title: string;
  description: string;
  distances: ReadonlyArray<{ label: string; distance: string }>;
  imageAlt: string;
};

export function Location({ content }: { content: LocationContent }) {
  return (
    <section id="posizione" className="bg-primary py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              {content.eyebrow}
            </p>
            <h2 className="mb-6 text-balance text-3xl font-serif md:text-4xl lg:text-5xl">
              {content.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/80">{content.description}</p>

            <div className="grid grid-cols-2 gap-4">
              {content.distances.map((item, index) => {
                const Icon = icons[index] ?? MapPin;

                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                    <Icon className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.label}</p>
                      <p className="text-sm text-white/60">{item.distance}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={CASTELSARDO_IMAGE}
                alt={content.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-accent/20" />
          </div>
        </div>
      </div>
    </section>
  );
}