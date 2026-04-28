import Image from 'next/image'
import { Bath, BedDouble, CalendarCheck, Facebook, Instagram, Mail, MapPin, Phone, ShieldCheck, Sparkles, Users, Wifi, Waves, Wind, Tv, Utensils, WashingMachine, Coffee, Car, Star } from 'lucide-react'

const whatsapp = 'https://wa.me/393355467680?text=Ciao%2C%20ho%20visto%20Vivere%20aMare%20e%20vorrei%20informazioni%20per%20prenotare'
const airbnb = 'https://www.airbnb.it/rooms/1652072955321878106'
const instagram = 'https://www.instagram.com/_vivere_amare_/'
const facebook = 'https://www.facebook.com/profile.php?id=61578512951441'

const gallery = [
  { src: '/images/soggiorno-vista-mare.jpg', title: 'Soggiorno con vista mare' },
  { src: '/images/cucina.jpg', title: 'Cucina attrezzata' },
  { src: '/images/tavolo-apparecchiato.jpg', title: 'Tavola pronta per la vacanza' },
  { src: '/images/camera-1.jpg', title: 'Camera matrimoniale' },
  { src: '/images/bagno.jpg', title: 'Bagno con doccia e lavatrice' },
  { src: '/images/caffe.jpg', title: 'Dettagli per sentirsi a casa' },
]

const amenities = [
  [Wifi, 'Wi‑Fi'], [Wind, 'Aria condizionata'], [Tv, 'Smart TV'], [Utensils, 'Cucina attrezzata'],
  [WashingMachine, 'Lavatrice'], [Coffee, 'Macchina del caffè'], [Waves, 'Piscina stagionale'], [Car, 'Parcheggio in strada']
]

export default function Home() {
  return (
    <main className="bg-[#fffaf4] text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-xl font-semibold tracking-tight text-[#123c55]">Vivere aMare</a>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <a href="#casa">La casa</a><a href="#gallery">Gallery</a><a href="#servizi">Servizi</a><a href="#prenota">Prenota</a>
          </nav>
          <a href={whatsapp} target="_blank" className="rounded-full bg-[#d34b3f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#bd3f35]">WhatsApp</a>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden">
        <Image src="/images/hero-colazione-vista-mare.jpg" alt="Colazione vista mare a Castelsardo" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-20">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-md">Castelsardo, Sardegna · Vista mare</p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">Vivi il mare, ogni giorno</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">Il tuo rifugio vista mare a Castelsardo, dove ogni risveglio profuma di vacanza.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" className="rounded-full bg-[#d34b3f] px-8 py-4 text-center font-semibold text-white shadow-xl hover:bg-[#bd3f35]">Prenota via WhatsApp</a>
              <a href={airbnb} target="_blank" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-[#123c55] shadow-xl hover:bg-white/90">Prenota su Airbnb</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <Stat icon={Users} value="4" label="ospiti" />
              <Stat icon={BedDouble} value="2" label="letti" />
              <Stat icon={Bath} value="1" label="bagno" />
            </div>
          </div>
        </div>
      </section>

      <section id="casa" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d34b3f]">Premium accessibile</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#123c55] md:text-5xl">Comfort, vista mare e dettagli pensati per farti stare bene.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">Vivere aMare è un appartamento accogliente per coppie e famiglie: soggiorno luminoso, cucina attrezzata, camera matrimoniale, bagno completo e balcone con vista sul mare e sul borgo di Castelsardo.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Mini icon={ShieldCheck} title="Airbnb disponibile" text="Per chi preferisce prenotare in piattaforma." />
              <Mini icon={CalendarCheck} title="Diretta via WhatsApp" text="Risposta rapida per disponibilità e preventivi." />
              <Mini icon={Sparkles} title="Curata nei dettagli" text="Atmosfera calda, mediterranea e familiare." />
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image src="/images/soggiorno-vista-mare.jpg" alt="Soggiorno vista mare" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d34b3f]">Gallery</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#123c55] md:text-5xl">La casa, la vista, i dettagli.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gallery.map((photo, i) => (
              <div key={photo.src} className={`${i === 0 ? 'md:col-span-2 md:row-span-2 min-h-[520px]' : 'min-h-[250px]'} relative overflow-hidden rounded-[1.75rem] shadow-sm`}>
                <Image src={photo.src} alt={photo.title} fill className="object-cover transition duration-500 hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
                  <p className="font-semibold">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servizi" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d34b3f]">Servizi</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#123c55] md:text-5xl">Tutto quello che serve per una vacanza semplice.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(([Icon, label]) => (
              <div key={label as string} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                {/* @ts-ignore */}<Icon className="h-7 w-7 text-[#d34b3f]" />
                <p className="mt-4 font-semibold">{label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123c55] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <MapPin className="h-10 w-10 text-[#f0c987]" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">Castelsardo, tra borgo e mare.</h2>
            <p className="mt-6 text-lg leading-8 text-white/80">Una base ideale per scoprire la costa nord della Sardegna, passeggiare nel centro storico e godersi il panorama sul Golfo dell’Asinara.</p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image src="/images/dettaglio-vivere-amare.jpg" alt="Vivere aMare ingresso" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="prenota" className="mx-auto max-w-4xl px-5 py-24 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d34b3f] text-white"><Star className="h-6 w-6" /></div>
        <h2 className="text-4xl font-semibold tracking-tight text-[#123c55] md:text-5xl">Vuoi soggiornare a Vivere aMare?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">Scrivimi su WhatsApp per disponibilità e preventivo. Se preferisci prenotare tramite piattaforma, puoi usare Airbnb.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={whatsapp} target="_blank" className="rounded-full bg-[#d34b3f] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#bd3f35]"><Phone className="mr-2 inline h-5 w-5" /> WhatsApp</a>
          <a href={airbnb} target="_blank" className="rounded-full border border-[#123c55] px-8 py-4 font-semibold text-[#123c55] hover:bg-[#123c55] hover:text-white">Airbnb</a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-5 text-[#123c55]">
          <a href={instagram} target="_blank" className="flex items-center gap-2 hover:text-[#d34b3f]"><Instagram className="h-5 w-5" /> Instagram</a>
          <a href={facebook} target="_blank" className="flex items-center gap-2 hover:text-[#d34b3f]"><Facebook className="h-5 w-5" /> Facebook</a>
        </div>
        <a href="mailto:spiniandrea01@gmail.com" className="mt-6 inline-flex items-center gap-2 text-slate-600"><Mail className="h-4 w-4" /> spiniandrea01@gmail.com</a>
      </section>

      <footer className="border-t bg-white py-8 text-center text-sm text-slate-500">
        © 2026 Vivere aMare · Castelsardo · CIN: IT090023C2000U1024
      </footer>
    </main>
  )
}

function Stat({ icon: Icon, value, label }: { icon: any, value: string, label: string }) {
  return <div className="rounded-3xl bg-white/20 p-4 text-center backdrop-blur-md"><Icon className="mx-auto h-6 w-6" /><p className="mt-2 text-2xl font-semibold">{value}</p><p className="text-sm text-white/80">{label}</p></div>
}

function Mini({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
  return <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100"><Icon className="h-7 w-7 text-[#d34b3f]" /><h3 className="mt-4 font-semibold text-[#123c55]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>
}
