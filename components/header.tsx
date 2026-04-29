"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/393355467680?text=Ciao%2C%20ho%20visto%20Vivere%20aMare%20e%20vorrei%20informazioni%20per%20prenotare";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Appartamento", href: "#appartamento" },
  { label: "Servizi", href: "#servizi" },
  { label: "Galleria", href: "#galleria" },
  { label: "Posizione", href: "#posizione" },
  { label: "Tariffe", href: "#prezzi" },
  { label: "Contatti", href: "#prenota" },
];

export function Header() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-serif text-2xl md:text-3xl transition-colors ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          Vivere <span className="italic">aMare</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
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
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 gap-2"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Prenota
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-foreground" : "text-white"}
            >
              <Menu className="w-6 h-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] border-l border-border/60 bg-white/95 px-6"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
              <a href="#" className="font-serif text-3xl text-primary">
                Vivere <span className="italic">aMare</span>
              </a>
              <nav className="flex w-full max-w-[220px] flex-col gap-3">
                {navItems.map((item) => (
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
              <Button
                asChild
                size="sm"
                className="mt-2 h-9 rounded-full bg-accent px-4 text-sm text-white hover:bg-accent/90"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Prenota su WhatsApp
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
