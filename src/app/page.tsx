import React from "react";
import Image from "next/image";
import { HeroBanner } from "@/components/HeroBanner";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ProductCard } from "@/components/ProductCard";
import { LookbookGrid } from "@/components/LookbookGrid";
import { getAllProducts } from "@/data/products";
import { ArrowDown, MessageCircle } from "lucide-react";
import { TRIFFEN_WHATSAPP_PHONE } from "@/data/products";

export default function Home() {
  const products = getAllProducts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Banner de Alto Impacto */}
      <HeroBanner />

      {/* 2. Marquee Ticker Brutalista */}
      <MarqueeTicker />

      {/* 3. Catálogo Oficial (Drop I) */}
      <section id="colecao" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#222222] pb-6">
          <div>
            <span className="text-[11px] font-heading tracking-widest text-[#d5c5b2] uppercase block mb-1.5">
              CATÁLOGO OFICIAL • DROP I
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              ESSENTIALS &amp; HEADWEAR
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 flex items-center space-x-2 text-xs font-heading tracking-wider text-[#888]">
            <span>4 ITENS EM ESTOQUE LIMITADO</span>
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </div>

        {/* Grade de 4 Produtos (1 Boné + 3 Camisas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Lookbook Editorial Curado ("OS TRÊS CAMINHOS") */}
      <LookbookGrid />

      {/* 5. Segunda Fita Marquee em Contraste */}
      <MarqueeTicker
        inverted
        text={[
          "PUT YOUR MIND, MAKE IT HAPPEN",
          "5-PANEL CAP STEALTH BLACK",
          "MALHA PESADA 220G",
          "DROP I / ESSENTIALS",
          "O STREETWEAR QUE CONQUISTA",
          "BRAZILIAN LUXURY",
        ]}
      />

      {/* 6. Manifesto & Os Três Caminhos */}
      <section id="manifesto" className="py-24 bg-[#0e0e0e] border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-heading tracking-widest text-[#d5c5b2] uppercase block mb-3">
            O MANIFESTO
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-tight mb-8">
            NÃO É SÓ O QUE VOCÊ VESTE.
            <br />
            É O IMPACTO QUE VOCÊ DEIXA.
          </h2>

          <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#aaaaaa] font-sans font-light leading-relaxed">
            <p>
              A Triffen nasceu com a convicção de que quem sabe onde quer chegar não precisa pedir licença. Nossas peças traduzem a coragem das decisões, a postura de quem não se intimida e a determinação de transformar ideias em realidade.
            </p>
            <p>
              Do boné estruturado às camisetas heavyweight, criamos para quem carrega presença inegável.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <div className="relative w-28 h-28 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/assets/LOGO-TRIFFEN-TRANSPARENTE-JHI-BRANCA.png"
                alt="Emblema Triffen"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={`https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Triffen%20e%20gostaria%20de%20atendimento.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Triffen no WhatsApp"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black shadow-2xl transition-transform duration-200 hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle size={26} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-heading text-xs font-bold px-0 group-hover:px-2">
          CONCIERGE
        </span>
      </a>
    </div>
  );
}
