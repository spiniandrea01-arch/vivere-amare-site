import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";

function getLocaleFromCountry(request: NextRequest): "it" | "en" | null {
  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-country-code");

  if (!country) {
    return null;
  }

  return country.toUpperCase() === "IT" ? "it" : "en";
}

function getPreferredLocale(request: NextRequest): "it" | "en" {
  const countryLocale = getLocaleFromCountry(request);
  if (countryLocale) {
    return countryLocale;
  }

  const header = request.headers.get("accept-language");
  if (!header) {
    return defaultLocale;
  }

  const languages = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean) as string[];

  for (const lang of languages) {
    const base = lang.split("-")[0];
    if (base === "it" || base === "en") {
      return base;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const first = segments[1];

  if (first && hasLocale(first)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
