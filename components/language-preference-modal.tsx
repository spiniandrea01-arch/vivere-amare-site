"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hasLocale, type Locale } from "@/lib/i18n/config";

const LOCALE_STORAGE_KEY = "preferred_locale";

const LANGUAGES: { locale: Locale; tag: string; native: string }[] = [
  { locale: "it", tag: "IT", native: "Italiano" },
  { locale: "en", tag: "EN", native: "English" },
];

function buildLocalizedPath(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return `/${nextLocale}`;
  }

  if (hasLocale(parts[0])) {
    parts[0] = nextLocale;
    return `/${parts.join("/")}`;
  }

  return `/${nextLocale}/${parts.join("/")}`;
}

export function LanguagePreferenceModal({
  locale,
  italianLabel = "Italiano",
  englishLabel = "English",
}: {
  locale: Locale;
  italianLabel?: string;
  englishLabel?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Locale | null>(null);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  useEffect(() => {
    const existing = localStorage.getItem(LOCALE_STORAGE_KEY);

    if (existing && hasLocale(existing)) {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  const modalText = useMemo(
    () =>
      locale === "it"
        ? {
            title: "Seleziona la lingua",
            description: "Scegli la lingua preferita. Potrai cambiarla in qualsiasi momento.",
            confirm: "Conferma lingua",
          }
        : {
            title: "Select your language",
            description: "Choose your preferred language. You can change it at any time.",
            confirm: "Confirm language",
          },
    [locale],
  );

  const handleConfirm = () => {
    if (!selected) return;

    localStorage.setItem(LOCALE_STORAGE_KEY, selected);
    setOpen(false);
    router.push(buildLocalizedPath(pathname, selected));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120]" role="dialog" aria-modal="true" aria-label={modalText.title}>
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-[121] flex min-h-full items-center justify-center p-2 sm:p-4">
        <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-border bg-background p-4 shadow-xl sm:p-6">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-accent/80 to-accent/60" />

          <div className="mb-4 mt-2 flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
            <Globe className="h-5 w-5 text-accent" />
          </div>

          <div className="mb-4 space-y-1.5 text-left sm:mb-5">
            <h2 className="text-lg font-semibold">{modalText.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{modalText.description}</p>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {LANGUAGES.map(({ locale: languageLocale, tag, native }) => (
              <button
                key={languageLocale}
                role="radio"
                aria-checked={selected === languageLocale}
                onClick={() => setSelected(languageLocale)}
                className={cn(
                  "relative rounded-xl border p-3 text-left transition-all sm:p-4",
                  selected === languageLocale
                    ? "border-2 border-accent bg-accent/10 shadow-sm"
                    : "border-border hover:border-accent/30 hover:bg-accent/5",
                )}
              >
                {selected === languageLocale && (
                  <span className="absolute right-2.5 top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent">
                    <Check className="h-2.5 w-2.5 text-accent-foreground" />
                  </span>
                )}

                <span className="mb-2 inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-accent/30 bg-white px-2 text-xs font-semibold text-accent">
                  {tag}
                </span>

                <span className="block text-sm font-medium">
                  {languageLocale === "it" ? italianLabel : englishLabel}
                </span>

                <span className="block text-xs text-muted-foreground">{native}</span>
              </button>
            ))}
          </div>

          <Button
            className="h-11 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:bg-accent/40"
            disabled={!selected}
            onClick={handleConfirm}
          >
            {modalText.confirm}
          </Button>
        </div>
      </div>
    </div>
  );
}
