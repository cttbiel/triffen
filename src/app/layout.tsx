import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

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
        className="antialiased min-h-screen flex flex-col selection:bg-[#d5c5b2] selection:text-black transition-colors duration-200"
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
