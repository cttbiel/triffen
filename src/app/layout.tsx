import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://triffen.vercel.app"),
  title: "TRIFFEN | Put Your Mind, Make It Happen",
  description:
    "Streetwear brasileiro autoral de alta gramatura e identidade sólida. Conheça o Drop I / Essentials e o novo 5-Panel Cap.",
  icons: {
    icon: "/assets/logo_jhi_preta.ico",
  },
  openGraph: {
    title: "TRIFFEN | Brazilian Luxury Streetwear",
    description: "Put Your Mind, Make It Happen. Drop I / Essentials & Headwear liberados.",
    images: ["/assets/hero_duo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark-mode" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-[#0b0b0b] text-[#f5f5f5] antialiased min-h-screen flex flex-col selection:bg-[#d5c5b2] selection:text-black"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
