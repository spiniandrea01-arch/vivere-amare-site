"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/393355467680?text=Ciao%2C%20ho%20visto%20Vivere%20aMare%20e%20vorrei%20informazioni%20per%20prenotare";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-colazione-vista-mare.jpg"
          alt="Vista mare da Vivere aMare, Castelsardo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light">
          Castelsardo, Sardegna
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight text-balance">
          Vivi il mare, ogni giorno
        </h1>
        <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed text-pretty">
          Il tuo rifugio vista mare a Castelsardo, dove ogni risveglio profuma
          di vacanza.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg gap-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Scrivimi su WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white px-8 py-6 text-lg rounded-full transition-all"
          >
            <a href="#appartamento">Scopri di più</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
