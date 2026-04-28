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

const amenities = [
  { icon: Wifi, label: "Wi-Fi Alta Velocità" },
  { icon: Tv, label: "Smart TV" },
  { icon: Thermometer, label: "Aria Condizionata" },
  { icon: WashingMachine, label: "Lavatrice" },
  { icon: UtensilsCrossed, label: "Cucina Attrezzata" },
  { icon: Coffee, label: "Macchina del Caffè" },
  { icon: Waves, label: "Piscina Stagionale" },
  { icon: Key, label: "Self Check-in" },
];

export function Amenities() {
  return (
    <section id="servizi" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Servizi
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Tutto il necessario per la tua vacanza
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-secondary rounded-2xl hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <amenity.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-foreground text-center font-medium text-sm">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary text-sm">
              Lavastoviglie inclusa in cucina
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
