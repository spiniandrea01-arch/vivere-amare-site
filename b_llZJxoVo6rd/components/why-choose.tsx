import { Sun, Heart, MapPin, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Sun,
    title: "Vista Mare Mozzafiato",
    description:
      "Svegliarsi ogni mattina con la vista del mare cristallino della Sardegna e del borgo storico di Castelsardo.",
  },
  {
    icon: Heart,
    title: "Comfort & Relax",
    description:
      "Un appartamento moderno e confortevole, perfetto per una vacanza rilassante con tutti i servizi necessari.",
  },
  {
    icon: MapPin,
    title: "Posizione Strategica",
    description:
      "A pochi minuti dal centro storico di Castelsardo e dalle spiagge più belle del nord Sardegna.",
  },
  {
    icon: Sparkles,
    title: "Esperienza Autentica",
    description:
      "Vivi la vera Sardegna: mare, cultura, enogastronomia e tramonti indimenticabili.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Perché sceglierci
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            La tua vacanza perfetta inizia qui
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
