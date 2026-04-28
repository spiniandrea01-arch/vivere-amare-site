import { Sun, Heart, MapPin, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Sun,
    title: "Vista Mare Mozzafiato",
    description:
      "Goditi ogni giorno una vista aperta sul mare e sul borgo di Castelsardo, tra luce, silenzio e tramonti unici.",
  },
  {
    icon: Heart,
    title: "Comfort e Relax",
    description:
      "Spazi curati e accoglienti, ideali per coppie e famiglie che cercano tranquillità e semplicità.",
  },
  {
    icon: MapPin,
    title: "Posizione Perfetta",
    description:
      "A pochi minuti dal centro storico e dalle spiagge più belle del nord Sardegna.",
  },
  {
    icon: Sparkles,
    title: "Esperienza Autentica",
    description:
      "Vivi la Sardegna vera: mare cristallino, cucina locale e atmosfere rilassanti.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Perché scegliere Vivere aMare
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Un soggiorno semplice, ma speciale
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
