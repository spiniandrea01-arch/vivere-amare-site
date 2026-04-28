import Image from "next/image";
import { MapPin, Clock, Car, Plane } from "lucide-react";

const CASTELSARDO_IMAGE = "/images/Castelsardo1.jpg";

const distances = [
  { icon: MapPin, label: "Centro storico Castelsardo", distance: "5 min" },
  { icon: Clock, label: "Spiagge più vicine", distance: "3 min" },
  { icon: Car, label: "Alghero", distance: "45 min" },
  { icon: Plane, label: "Aeroporto Alghero", distance: "40 min" },
];

export function Location() {
  return (
    <section id="posizione" className="py-20 md:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
              Posizione
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Castelsardo, Sardegna
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Castelsardo è uno dei borghi più belli d&apos;Italia, arroccato su
              un promontorio roccioso che domina il Golfo dell&apos;Asinara.
              Vivere aMare ti offre la base perfetta per esplorare il nord
              Sardegna: dalle spiagge dorate alle calette nascoste, dai siti
              archeologici alle cantine locali.
            </p>

            {/* Distances */}
            <div className="grid grid-cols-2 gap-4">
              {distances.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      {item.label}
                    </p>
                    <p className="text-white/60 text-sm">{item.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={CASTELSARDO_IMAGE}
                alt="Castelsardo, Sardegna"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
