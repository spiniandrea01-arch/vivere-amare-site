"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Local images (in public/images/)
const images = [
  { src: "/images/bagno.jpg", alt: "Soggiorno con vista mare" },
  { src: "/images/soggiorno-divano.jpg", alt: "Soggiorno con divano" },
  { src: "/images/cucina.jpg", alt: "Cucina attrezzata" },
  { src: "/images/tavolo-apparecchiato.jpg", alt: "Tavolo apparecchiato" },
  { src: "/images/camera-1.jpg", alt: "Camera da letto" },
  { src: "/images/camera-2.jpg", alt: "Camera - dettaglio" },
  { src: "/images/bollitore.jpg", alt: "Bagno" },
  { src: "/images/caffe.jpg", alt: "Angolo caffè" },
  { src: "/images/dettaglio-vivere-amare.jpg", alt: "Dettaglio Vivere aMare" },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galleria" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Galleria
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Scopri ogni angolo di Vivere aMare
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl w-full bg-black/95 border-none p-0">
            <div className="relative aspect-[16/10] w-full">
              {selectedIndex !== null && (
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:bg-white/20"
              >
                <X className="w-6 h-6" />
                <span className="sr-only">Chiudi</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-8 h-8" />
                <span className="sr-only">Precedente</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronRight className="w-8 h-8" />
                <span className="sr-only">Successiva</span>
              </Button>
            </div>

            <div className="text-center py-4">
              <p className="text-white/80">
                {selectedIndex !== null && images[selectedIndex].alt}
              </p>
              <p className="text-white/50 text-sm mt-1">
                {selectedIndex !== null &&
                  `${selectedIndex + 1} / ${images.length}`}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
