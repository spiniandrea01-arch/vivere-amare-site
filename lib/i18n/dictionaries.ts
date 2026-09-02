import { type Locale } from "@/lib/i18n/config";

const dictionaries = {
  it: {
    localeLabel: "IT",
    meta: {
      title: "Vivere aMare | Casa Vacanze Vista Mare a Castelsardo, Sardegna",
      description:
        "Il tuo rifugio vista mare a Castelsardo, Sardegna. Appartamento per 4 ospiti con piscina condominiale, aria condizionata e vista mozzafiato sul mare. Prenota direttamente su WhatsApp.",
      keywords: [
        "Castelsardo",
        "Sardegna",
        "casa vacanze",
        "appartamento mare",
        "vacanze Sardegna",
        "vista mare",
      ],
      openGraphTitle: "Vivere aMare | Casa Vacanze a Castelsardo",
      openGraphDescription:
        "Il tuo rifugio vista mare a Castelsardo, dove ogni risveglio profuma di vacanza.",
    },
    links: {
      whatsappMessage:
        "Ciao, ho visto Vivere aMare e vorrei informazioni per prenotare",
      airbnbUrl: "https://www.airbnb.it/rooms/1652072955321878106",
    },
    header: {
      navItems: [
        { label: "Home", href: "#" },
        { label: "Appartamento", href: "#appartamento" },
        { label: "Servizi", href: "#servizi" },
        { label: "Galleria", href: "#galleria" },
        { label: "Posizione", href: "#posizione" },
        { label: "Tariffe", href: "#prezzi" },
        { label: "Contatti", href: "#prenota" },
      ],
      cta: "Prenota",
      mobileCta: "Prenota su WhatsApp",
      menuAriaLabel: "Menu",
      menuTitle: "Menu di navigazione",
      languageAriaLabel: "Seleziona lingua",
      italianLabel: "Italiano",
      englishLabel: "Inglese",
    },
    hero: {
      location: "Castelsardo, Sardegna",
      title: "Vivi il mare, ogni giorno",
      description:
        "Il tuo rifugio vista mare a Castelsardo, dove ogni risveglio profuma di vacanza.",
      whatsappCta: "Scrivimi su WhatsApp",
      discoverCta: "Scopri di piu",
      imageAlt: "Vista mare da Vivere aMare, Castelsardo",
    },
    whyChoose: {
      eyebrow: "Perche scegliere Vivere aMare",
      title: "Un soggiorno semplice, ma speciale",
      reasons: [
        {
          title: "Vista Mare Mozzafiato",
          description:
            "Goditi ogni giorno una vista aperta sul mare e sul borgo di Castelsardo, tra luce, silenzio e tramonti unici.",
        },
        {
          title: "Comfort e Relax",
          description:
            "Spazi curati e accoglienti, ideali per coppie e famiglie che cercano tranquillita e semplicita.",
        },
        {
          title: "Posizione Perfetta",
          description:
            "A pochi minuti dal centro storico e dalle spiagge piu belle del nord Sardegna.",
        },
        {
          title: "Esperienza Autentica",
          description:
            "Vivi la Sardegna vera: mare cristallino, cucina locale e atmosfere rilassanti.",
        },
      ],
    },
    apartment: {
      eyebrow: "L'appartamento",
      title: "Il tuo angolo di paradiso mediterraneo",
      descriptionOne:
        "Vivere aMare e un appartamento accogliente e curato nei dettagli, perfetto per coppie, famiglie e soggiorni rilassanti in Sardegna. Offre una splendida vista sul mare e sul borgo di Castelsardo.",
      descriptionTwo:
        "L'appartamento e dotato di tutti i comfort moderni: cucina attrezzata con lavastoviglie e macchina del caffe, aria condizionata, Smart TV, Wi-Fi ad alta velocita e lavatrice. Il self check-in ti permette di arrivare in totale autonomia.",
      features: ["4 Ospiti", "1 Camera, 2 Letti", "1 Bagno", "Vista Mare"],
      mainImageAlt: "Soggiorno con vista mare",
      bedroomImageAlt: "Camera da letto",
      kitchenImageAlt: "Cucina attrezzata",
    },
    gallery: {
      eyebrow: "Galleria",
      title: "Scopri ogni angolo di Vivere aMare",
      closeLabel: "Chiudi",
      previousLabel: "Precedente",
      nextLabel: "Successiva",
      photoLabel: "Foto",
      galleryLabel: "Foto galleria",
      images: [
        { src: "/images/camera-1.jpg", alt: "Vista mare" },
        { src: "/images/soggiorno-divano.jpg", alt: "Soggiorno con divano" },
        { src: "/images/cucina.jpg", alt: "Cucina attrezzata" },
        { src: "/images/soggiorno-vista-mare.jpg", alt: "Bagno" },
        { src: "/images/camera-2.jpg", alt: "Camera - dettaglio" },
        { src: "/images/tavolo-apparecchiato.jpg", alt: "Camera da letto" },
        { src: "/images/bagno.jpg", alt: "Cucina - dettaglio" },
        { src: "/images/caffe.jpg", alt: "Angolo caffe" },
        { src: "/images/dettaglio-vivere-amare.jpg", alt: "Dettaglio Vivere aMare" },
      ],
    },
    amenities: {
      eyebrow: "Servizi",
      title: "Tutto il necessario per la tua vacanza",
      items: [
        "Wi-Fi Alta Velocita",
        "Smart TV",
        "Aria Condizionata",
        "Lavatrice",
        "Cucina Attrezzata",
        "Macchina del Caffe",
        "Piscina Stagionale",
        "Self Check-in",
      ],
      dishwasherNote: "Lavastoviglie inclusa in cucina",
    },
    location: {
      eyebrow: "Posizione",
      title: "Castelsardo, Sardegna",
      description:
        "Castelsardo e uno dei borghi piu belli d'Italia, arroccato su un promontorio roccioso che domina il Golfo dell'Asinara. Vivere aMare ti offre la base perfetta per esplorare il nord Sardegna: dalle spiagge dorate alle calette nascoste, dai siti archeologici alle cantine locali.",
      distances: [
        { label: "Centro storico Castelsardo", distance: "5 min" },
        { label: "Spiagge piu vicine", distance: "3 min" },
        { label: "Alghero", distance: "45 min" },
        { label: "Aeroporto Alghero", distance: "40 min" },
      ],
      imageAlt: "Castelsardo, Sardegna",
    },
    prices: {
      eyebrow: "Tariffe indicative",
      title: "Prezzi a partire da",
      description:
        "Le tariffe possono variare in base al periodo e alla disponibilita. Scrivimi su WhatsApp per un preventivo aggiornato.",
      perNight: "a notte",
      items: [
        { month: "Maggio", price: "70" },
        { month: "Giugno", price: "85" },
        { month: "Luglio", price: "110" },
        { month: "Agosto", price: "140" },
        { month: "Settembre", price: "75" },
      ],
    },
    booking: {
      eyebrow: "Prenota Ora",
      title: "Prenota la tua vacanza da sogno",
      description:
        "Contattaci direttamente su WhatsApp per le migliori tariffe e disponibilita, oppure prenota comodamente su Airbnb.",
      benefits: [
        "Risposta rapida su WhatsApp",
        "Prenotazione sicura e garantita",
        "Check-in flessibile",
      ],
      whatsappCta: "Scrivimi su WhatsApp",
      airbnbCta: "Prenota su Airbnb",
      trustBadge:
        "Oltre 100 ospiti soddisfatti hanno gia scelto Vivere aMare",
    },
    footer: {
      description:
        "Il tuo rifugio vista mare a Castelsardo, Sardegna. Dove ogni risveglio profuma di vacanza.",
      contactsTitle: "Contatti",
      followTitle: "Seguici",
      copyrightText: "Tutti i diritti riservati.",
      cityText: "Castelsardo, Sardegna, Italia",
    },
  },
  en: {
    localeLabel: "EN",
    meta: {
      title: "Vivere aMare | Seaside Holiday Home in Castelsardo, Sardinia",
      description:
        "Your sea-view retreat in Castelsardo, Sardinia. Apartment for 4 guests with shared pool, air conditioning, and stunning sea views. Book directly on WhatsApp.",
      keywords: [
        "Castelsardo",
        "Sardinia",
        "holiday home",
        "sea view apartment",
        "Sardinia vacation",
        "seaside stay",
      ],
      openGraphTitle: "Vivere aMare | Holiday Home in Castelsardo",
      openGraphDescription:
        "Your sea-view retreat in Castelsardo, where every morning feels like a holiday.",
    },
    links: {
      whatsappMessage:
        "Hi, I saw Vivere aMare and I would like information to book",
      airbnbUrl: "https://www.airbnb.it/rooms/1652072955321878106",
    },
    header: {
      navItems: [
        { label: "Home", href: "#" },
        { label: "Apartment", href: "#appartamento" },
        { label: "Amenities", href: "#servizi" },
        { label: "Gallery", href: "#galleria" },
        { label: "Location", href: "#posizione" },
        { label: "Rates", href: "#prezzi" },
        { label: "Contact", href: "#prenota" },
      ],
      cta: "Book",
      mobileCta: "Book on WhatsApp",
      menuAriaLabel: "Menu",
      menuTitle: "Navigation menu",
      languageAriaLabel: "Choose language",
      italianLabel: "Italian",
      englishLabel: "English",
    },
    hero: {
      location: "Castelsardo, Sardinia",
      title: "Live by the sea, every day",
      description:
        "Your sea-view retreat in Castelsardo, where every morning feels like a holiday.",
      whatsappCta: "Message me on WhatsApp",
      discoverCta: "Discover more",
      imageAlt: "Sea view from Vivere aMare, Castelsardo",
    },
    whyChoose: {
      eyebrow: "Why choose Vivere aMare",
      title: "A simple stay, made special",
      reasons: [
        {
          title: "Stunning Sea View",
          description:
            "Enjoy an open view of the sea and the village of Castelsardo every day, with light, silence, and unique sunsets.",
        },
        {
          title: "Comfort and Relax",
          description:
            "Cozy and curated spaces, ideal for couples and families seeking peace and simplicity.",
        },
        {
          title: "Perfect Location",
          description:
            "Just a few minutes from the old town and the most beautiful beaches in northern Sardinia.",
        },
        {
          title: "Authentic Experience",
          description:
            "Experience the real Sardinia: crystal-clear sea, local cuisine, and relaxing atmospheres.",
        },
      ],
    },
    apartment: {
      eyebrow: "The apartment",
      title: "Your Mediterranean corner of paradise",
      descriptionOne:
        "Vivere aMare is a cozy apartment with attention to detail, perfect for couples, families, and relaxing stays in Sardinia. It offers a beautiful sea view over Castelsardo.",
      descriptionTwo:
        "The apartment includes all modern comforts: equipped kitchen with dishwasher and coffee machine, air conditioning, Smart TV, high-speed Wi-Fi, and washing machine. Self check-in lets you arrive with full autonomy.",
      features: ["4 Guests", "1 Bedroom, 2 Beds", "1 Bathroom", "Sea View"],
      mainImageAlt: "Living room with sea view",
      bedroomImageAlt: "Bedroom",
      kitchenImageAlt: "Equipped kitchen",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Explore every corner of Vivere aMare",
      closeLabel: "Close",
      previousLabel: "Previous",
      nextLabel: "Next",
      photoLabel: "Photo",
      galleryLabel: "Gallery photo",
      images: [
        { src: "/images/camera-1.jpg", alt: "Sea view" },
        { src: "/images/soggiorno-divano.jpg", alt: "Living room with sofa" },
        { src: "/images/cucina.jpg", alt: "Equipped kitchen" },
        { src: "/images/soggiorno-vista-mare.jpg", alt: "Bathroom" },
        { src: "/images/camera-2.jpg", alt: "Bedroom detail" },
        { src: "/images/tavolo-apparecchiato.jpg", alt: "Bedroom" },
        { src: "/images/bagno.jpg", alt: "Kitchen detail" },
        { src: "/images/caffe.jpg", alt: "Coffee corner" },
        { src: "/images/dettaglio-vivere-amare.jpg", alt: "Vivere aMare detail" },
      ],
    },
    amenities: {
      eyebrow: "Amenities",
      title: "Everything you need for your holiday",
      items: [
        "High-Speed Wi-Fi",
        "Smart TV",
        "Air Conditioning",
        "Washing Machine",
        "Equipped Kitchen",
        "Coffee Machine",
        "Seasonal Pool",
        "Self Check-in",
      ],
      dishwasherNote: "Dishwasher included in the kitchen",
    },
    location: {
      eyebrow: "Location",
      title: "Castelsardo, Sardinia",
      description:
        "Castelsardo is one of Italy's most beautiful villages, set on a rocky promontory overlooking the Gulf of Asinara. Vivere aMare gives you the perfect base to explore northern Sardinia: from golden beaches to hidden coves, from archaeological sites to local wineries.",
      distances: [
        { label: "Castelsardo historic center", distance: "5 min" },
        { label: "Nearest beaches", distance: "3 min" },
        { label: "Alghero", distance: "45 min" },
        { label: "Alghero Airport", distance: "40 min" },
      ],
      imageAlt: "Castelsardo, Sardinia",
    },
    prices: {
      eyebrow: "Indicative rates",
      title: "Prices starting from",
      description:
        "Rates may vary based on period and availability. Message me on WhatsApp for an updated quote.",
      perNight: "per night",
      items: [
        { month: "May", price: "50" },
        { month: "June", price: "80" },
        { month: "July", price: "100" },
        { month: "August", price: "130" },
        { month: "September", price: "70" },
      ],
    },
    booking: {
      eyebrow: "Book now",
      title: "Book your dream holiday",
      description:
        "Contact us directly on WhatsApp for the best rates and availability, or book easily on Airbnb.",
      benefits: [
        "Fast reply on WhatsApp",
        "Safe and guaranteed booking",
        "Flexible check-in",
      ],
      whatsappCta: "Message me on WhatsApp",
      airbnbCta: "Book on Airbnb",
      trustBadge: "Over 100 happy guests have already chosen Vivere aMare",
    },
    footer: {
      description:
        "Your sea-view retreat in Castelsardo, Sardinia. Where every morning feels like a holiday.",
      contactsTitle: "Contacts",
      followTitle: "Follow us",
      copyrightText: "All rights reserved.",
      cityText: "Castelsardo, Sardinia, Italy",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
