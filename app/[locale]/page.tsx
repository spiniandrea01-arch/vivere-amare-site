import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyChoose } from "@/components/why-choose";
import { Apartment } from "@/components/apartment";
import { Gallery } from "@/components/gallery";
import { Amenities } from "@/components/amenities";
import { Location } from "@/components/location";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { hasLocale } from "@/lib/i18n/config";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/393355467680?text=${encodeURIComponent(message)}`;
}

function Prices({
  eyebrow,
  title,
  description,
  perNight,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  perNight: string;
  items: ReadonlyArray<{ month: string; price: string }>;
}) {
  return (
    <section id="prezzi" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">{eyebrow}</p>

        <h2 className="mb-6 text-4xl font-serif text-slate-900 md:text-5xl">{title}</h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-600">{description}</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div
              key={item.month}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.month}</h3>
              <p className="mt-4 text-3xl font-serif text-red-500">EUR {item.price}</p>
              <p className="mt-2 text-sm text-slate-500">{perNight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;
  const localeValue = locale ?? "";

  if (!hasLocale(localeValue)) {
    notFound();
  }

  const dict = getDictionary(localeValue);
  const whatsappUrl = buildWhatsAppUrl(dict.links.whatsappMessage);

  return (
    <main>
      <Header locale={localeValue} content={dict.header} whatsappUrl={whatsappUrl} />
      <Hero content={dict.hero} whatsappUrl={whatsappUrl} />
      <WhyChoose content={dict.whyChoose} />
      <Apartment content={dict.apartment} />
      <Gallery content={dict.gallery} />
      <Amenities content={dict.amenities} />
      <Location content={dict.location} />
      <Prices
        eyebrow={dict.prices.eyebrow}
        title={dict.prices.title}
        description={dict.prices.description}
        perNight={dict.prices.perNight}
        items={dict.prices.items}
      />
      <Booking content={dict.booking} whatsappUrl={whatsappUrl} airbnbUrl={dict.links.airbnbUrl} />
      <Footer content={dict.footer} />
    </main>
  );
}
