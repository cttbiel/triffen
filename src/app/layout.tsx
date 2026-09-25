import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

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
    images: ["/assets/hero_duo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark-mode" suppressHydrationWarning>
      <head>
        {/* Script inline executado antes do primeiro paint para evitar Flash de Tema ao navegar ou recarregar */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('triffen-theme');
                  if (saved === 'light-mode') {
                    document.documentElement.classList.remove('dark-mode');
                    document.documentElement.classList.add('light-mode');
                  } else {
                    document.documentElement.classList.remove('light-mode');
                    document.documentElement.classList.add('dark-mode');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${oswald.variable} antialiased min-h-screen flex flex-col selection:bg-[#d5c5b2] selection:text-black transition-colors duration-200`}
      >
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
