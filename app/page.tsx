export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      
      {/* HERO */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px" }}>
          Vivi il mare, ogni giorno
        </h1>
        <p>
          Il tuo rifugio vista mare a Castelsardo
        </p>

        <br />

        <a href="https://wa.me/393355467680" target="_blank">
          <button style={{ padding: "10px 20px", marginRight: "10px" }}>
            WhatsApp
          </button>
        </a>

        <a href="https://www.airbnb.it/rooms/1652072955321878106" target="_blank">
          <button style={{ padding: "10px 20px" }}>
            Airbnb
          </button>
        </a>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "40px" }}>
        <h2>La casa</h2>

        <img src="/hero.jpg" width="300" />
        <img src="/img2.jpg" width="300" />
        <img src="/img3.jpg" width="300" />
      </section>

      {/* CONTATTI */}
      <section style={{ padding: "40px" }}>
        <h2>Contatti</h2>
        <p>Email: spiniandrea01@gmail.com</p>
        <p>Tel: +39 3355467680</p>
      </section>

    </main>
  );
}
