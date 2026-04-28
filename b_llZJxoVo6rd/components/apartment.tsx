import Image from "next/image";
import { Users, BedDouble, Bath, Eye } from "lucide-react";

// Local images (in public/images/)
const MAIN_IMAGE = "/images/soggiorno-vista-mare.jpg";
const BEDROOM_IMAGE = "/images/camera-1.jpg";
const KITCHEN_IMAGE = "/images/cucina.jpg";

const features = [
  { icon: Users, label: "4 Ospiti" },
  { icon: BedDouble, label: "1 Camera, 2 Letti" },
  { icon: Bath, label: "1 Bagno" },
  { icon: Eye, label: "Vista Mare" },
];

export function Apartment() {
  return (
    <section id="appartamento" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src={MAIN_IMAGE}
                  alt="Soggiorno con vista mare"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={BEDROOM_IMAGE}
                alt="Camera da letto"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={KITCHEN_IMAGE}
                alt="Cucina attrezzata"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-medium">
              L&apos;appartamento
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Il tuo angolo di paradiso mediterraneo
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vivere aMare è un appartamento accogliente e curato nei dettagli, 
              perfetto per coppie, famiglie e soggiorni rilassanti in Sardegna. 
              Offre una splendida vista sul mare e sul borgo di Castelsardo.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-xl"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              L&apos;appartamento è dotato di tutti i comfort moderni: cucina
              attrezzata con lavastoviglie e macchina del caffè, aria
              condizionata, Smart TV, Wi-Fi ad alta velocità e lavatrice. Il
              self check-in ti permette di arrivare in totale autonomia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
