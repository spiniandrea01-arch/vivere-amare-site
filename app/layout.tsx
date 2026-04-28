export const metadata = {
  title: "Vivere aMare - Castelsardo",
  description: "Appartamento vista mare a Castelsardo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
