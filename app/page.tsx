import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AirbnbCalendarSync } from "@/components/airbnb-calendar-sync";
import { WhyChoose } from "@/components/why-choose";
import { Apartment } from "@/components/apartment";
import { Gallery } from "@/components/gallery";
import { Amenities } from "@/components/amenities";
import { Location } from "@/components/location";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";

function Prices() {
  return (
    <section id="prezzi" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-red-500 mb-3">
          Tariffe indicative
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
          Prezzi a partire da
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Le tariffe possono variare in base al periodo e alla disponibilità.
          Scrivimi su WhatsApp per un preventivo aggiornato.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            ["Maggio", "50"],
            ["Giugno", "80"],
            ["Luglio", "100"],
            ["Agosto", "130"],
            ["Settembre", "70"],
          ].map(([mese, prezzo]) => (
            <div
              key={mese}
              className="rounded-2xl border border-slate-200 p-6 bg-slate-50 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {mese}
              </h3>
              <p className="mt-4 text-3xl font-serif text-red-500">
                €{prezzo}
              </p>
              <p className="mt-2 text-sm text-slate-500">a notte</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AirbnbCalendarSync />

      <WhyChoose />
      <Apartment />

      <Gallery />
      <Amenities />
      <Location />

      {/* NUOVA SEZIONE PREZZI */}
      <Prices />

      <Booking />
      <Footer />
    </main>
  );
}
