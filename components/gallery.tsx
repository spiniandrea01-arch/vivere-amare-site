"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type GalleryContent = {
  eyebrow: string;
  title: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  photoLabel: string;
  galleryLabel: string;
  images: ReadonlyArray<{ src: string; alt: string }>;
};

export function Gallery({ content }: { content: GalleryContent }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % content.images.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + content.images.length) % content.images.length);
    }
  };

  return (
    <section id="galleria" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-serif text-foreground md:text-4xl lg:text-5xl">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {content.images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              onClick={() => openLightbox(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            </button>
          ))}
        </div>

        <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent
            showCloseButton={false}
            overlayClassName="bg-transparent backdrop-blur-md"
            className="z-[80] w-full max-w-5xl overflow-hidden rounded-2xl border-none bg-transparent p-0 shadow-none"
          >
            <DialogTitle className="sr-only">
              {selectedIndex !== null
                ? `${content.photoLabel} ${selectedIndex + 1} / ${content.images.length}: ${content.images[selectedIndex].alt}`
                : content.galleryLabel}
            </DialogTitle>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              {selectedIndex !== null && (
                <Image
                  src={content.images[selectedIndex].src}
                  alt={content.images[selectedIndex].alt}
                  fill
                  className="rounded-2xl object-contain"
                  sizes="100vw"
                />
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute right-4 top-4 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">{content.closeLabel}</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">{content.previousLabel}</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">{content.nextLabel}</span>
              </Button>
            </div>

            <div className="py-4 text-center">
              <p className="text-white/80">
                {selectedIndex !== null && content.images[selectedIndex].alt}
              </p>
              <p className="mt-1 text-sm text-white/50">
                {selectedIndex !== null && `${selectedIndex + 1} / ${content.images.length}`}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}