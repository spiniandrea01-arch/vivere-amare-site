import { Button } from "@/components/ui/button";
import { MessageCircle, Home, Shield, Clock } from "lucide-react";

const icons = [MessageCircle, Shield, Clock] as const;

type BookingContent = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: ReadonlyArray<string>;
  whatsappCta: string;
  airbnbCta: string;
  trustBadge: string;
};

export function Booking({
  content,
  whatsappUrl,
  airbnbUrl,
}: {
  content: BookingContent;
  whatsappUrl: string;
  airbnbUrl: string;
}) {
  return (
    <section id="prenota" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {content.eyebrow}
        </p>
        <h2 className="mb-6 text-balance text-3xl font-serif text-foreground md:text-4xl lg:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {content.description}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-6">
          {content.benefits.map((benefit, index) => {
            const Icon = icons[index] ?? Clock;

            return (
              <div key={benefit} className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-3 rounded-full bg-accent px-10 py-7 text-lg text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              {content.whatsappCta}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-3 rounded-full border-primary px-10 py-7 text-lg text-primary transition-all hover:bg-primary hover:text-white"
          >
            <a href={airbnbUrl} target="_blank" rel="noopener noreferrer">
              <Home className="h-6 w-6" />
              {content.airbnbCta}
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{content.trustBadge}</p>
      </div>
    </section>
  );
}