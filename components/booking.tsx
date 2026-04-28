import { Button } from "@/components/ui/button";
import { MessageCircle, Home, Shield, Clock } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/393355467680?text=Ciao%2C%20ho%20visto%20Vivere%20aMare%20e%20vorrei%20informazioni%20per%20prenotare";
const AIRBNB_URL = "https://www.airbnb.it/rooms/1652072955321878106";

const benefits = [
  { icon: MessageCircle, text: "Risposta rapida su WhatsApp" },
  { icon: Shield, text: "Prenotazione sicura e garantita" },
  { icon: Clock, text: "Check-in flessibile" },
];

export function Booking() {
  return (
    <section id="prenota" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-medium">
          Prenota Ora
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
          Prenota la tua vacanza da sogno
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Contattaci direttamente su WhatsApp per le migliori tariffe e
          disponibilità, oppure prenota comodamente su Airbnb.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <benefit.icon className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground text-sm">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-lg gap-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Scrivimi su WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-7 text-lg gap-3 rounded-full transition-all"
          >
            <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer">
              <Home className="w-6 h-6" />
              Prenota su Airbnb
            </a>
          </Button>
        </div>

        {/* Trust badge */}
        <p className="text-muted-foreground text-sm mt-8">
          Oltre 100 ospiti soddisfatti hanno già scelto Vivere aMare
        </p>
      </div>
    </section>
  );
}
