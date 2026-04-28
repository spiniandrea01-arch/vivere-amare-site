import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyChoose } from "@/components/why-choose";
import { Apartment } from "@/components/apartment";
import { Gallery } from "@/components/gallery";
import { Amenities } from "@/components/amenities";
import { Location } from "@/components/location";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChoose />
      <Apartment />
      <Gallery />
      <Amenities />
      <Location />
      <Booking />
      <Footer />
    </main>
  );
}
