"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";

type HeaderContent = {
  navItems: ReadonlyArray<{ label: string; href: string }>;
  cta: string;
  mobileCta: string;
  menuAriaLabel: string;
  menuTitle: string;
  languageAriaLabel: string;
  italianLabel: string;
  englishLabel: string;
};

export function Header({
  locale,
  content,
  whatsappUrl,
}: {
  locale: Locale;
  content: HeaderContent;
  whatsappUrl: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[70] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 py-3 shadow-sm backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a
          href="#"
          className={`text-2xl font-serif transition-colors md:text-3xl ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          Vivere <span className="italic">aMare</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {content.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center gap-2" aria-label={content.languageAriaLabel}>
            <Link
              href="/it"
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                locale === "it"
                  ? "bg-white text-primary"
                  : isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
              }`}
            >
              IT
            </Link>
            <Link
              href="/en"
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                locale === "en"
                  ? "bg-white text-primary"
                  : isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>

          <Button
            asChild
            className="gap-2 rounded-full bg-accent px-6 text-white hover:bg-accent/90"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              {content.cta}
            </a>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-foreground" : "text-white"}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">{content.menuAriaLabel}</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] border-l border-border/60 bg-white/95 px-6"
          >
            <SheetTitle className="sr-only">{content.menuTitle}</SheetTitle>
            <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
              <a href="#" className="text-3xl font-serif text-primary">
                Vivere <span className="italic">aMare</span>
              </a>
              <nav className="flex w-full max-w-[220px] flex-col gap-3">
                {content.navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-full border border-border bg-background px-4 py-2 text-base text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-3" aria-label={content.languageAriaLabel}>
                <Link
                  href="/it"
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full border px-4 py-1.5 text-sm ${
                    locale === "it"
                      ? "border-primary bg-primary text-white"
                      : "border-border text-foreground"
                  }`}
                >
                  {content.italianLabel}
                </Link>
                <Link
                  href="/en"
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full border px-4 py-1.5 text-sm ${
                    locale === "en"
                      ? "border-primary bg-primary text-white"
                      : "border-border text-foreground"
                  }`}
                >
                  {content.englishLabel}
                </Link>
              </div>
              <Button
                asChild
                size="sm"
                className="mt-2 h-9 rounded-full bg-accent px-4 text-sm text-white hover:bg-accent/90"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {content.mobileCta}
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}