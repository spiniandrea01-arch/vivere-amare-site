import Image from "next/image";
import { Users, BedDouble, Bath, Eye } from "lucide-react";

const MAIN_IMAGE = "/images/soggiorno-divano.jpg";
const BEDROOM_IMAGE = "/images/camera-1.jpg";
const KITCHEN_IMAGE = "/images/cucina.jpg";

const icons = [Users, BedDouble, Bath, Eye] as const;

type ApartmentContent = {
  eyebrow: string;
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  features: ReadonlyArray<string>;
  mainImageAlt: string;
  bedroomImageAlt: string;
  kitchenImageAlt: string;
};

export function Apartment({ content }: { content: ApartmentContent }) {
  return (
    <section id="appartamento" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={MAIN_IMAGE}
                  alt={content.mainImageAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={BEDROOM_IMAGE}
                alt={content.bedroomImageAlt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={KITCHEN_IMAGE}
                alt={content.kitchenImageAlt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {content.eyebrow}
            </p>
            <h2 className="mb-6 text-balance text-3xl font-serif text-foreground md:text-4xl lg:text-5xl">
              {content.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {content.descriptionOne}
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {content.features.map((feature, index) => {
                const Icon = icons[index] ?? Eye;

                return (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-secondary p-4"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                );
              })}
            </div>

            <p className="leading-relaxed text-muted-foreground">{content.descriptionTwo}</p>
          </div>
        </div>
      </div>
    </section>
  );
}