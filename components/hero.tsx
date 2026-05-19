"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

type HeroContent = {
  location: string;
  title: string;
  description: string;
  whatsappCta: string;
  discoverCta: string;
  imageAlt: string;
};

export function Hero({
  content,
  whatsappUrl,
}: {
  content: HeroContent;
  whatsappUrl: string;
}) {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-colazione-vista-mare.jpg"
          alt={content.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-white/90 md:text-base">
          {content.location}
        </p>
        <h1 className="mb-6 text-balance text-4xl font-serif leading-tight text-white md:text-6xl lg:text-7xl">
          {content.title}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-pretty text-white/90 md:text-xl lg:text-2xl">
          {content.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-3 rounded-full bg-accent px-8 py-6 text-lg text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              {content.whatsappCta}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
          >
            <a href="#appartamento">{content.discoverCta}</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50 pt-2">
          <div className="h-3 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}