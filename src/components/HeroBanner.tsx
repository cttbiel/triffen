"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface HeroPanel {
  id: string;
  name: string;
  category: string;
  code: string;
  image: string;
  href: string;
  objectPositionDesktop: string;
  objectPositionMobile: string;
}

const PANELS: HeroPanel[] = [
  {
    id: "bege",
    name: "T-Shirt Street Bege",
    category: "DROP I",
    code: "01",
    image: "/assets/TRIFFEN_camisa_bege_modelo_f.webp",
    href: "/produto/bege",
    // Centraliza perfeitamente a modelo feminina e o bordado Triffen
    objectPositionDesktop: "28% 25%",
    objectPositionMobile: "30% 20%",
  },
  {
    id: "roxa",
    name: "T-Shirt Street Roxa",
    category: "DROP I",
    code: "02",
    image: "/assets/TRIFFEN_camisa_roxa_modeloM_frente.webp",
    href: "/produto/roxa",
    objectPositionDesktop: "center 22%",
    objectPositionMobile: "center 18%",
  },
  {
    id: "marrom",
    name: "T-Shirt Street Marrom",
    category: "DROP I",
    code: "03",
    image: "/assets/JHI_modelo_costas_marrom.webp",
    href: "/produto/marrom",
    objectPositionDesktop: "center 30%",
    objectPositionMobile: "center 25%",
  },
  {
    id: "duo",
    name: "Campanha Duo Lifestyle",
    category: "EDITORIAL",
    code: "04",
    image: "/assets/hero_duo.webp",
    href: "/#lookbook",
    // Centraliza perfeitamente o Jean e sua namorada no deck da orla
    objectPositionDesktop: "38% 25%",
    objectPositionMobile: "40% 25%",
  },
];

export const HeroBanner: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Auto-slide no mobile a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % PANELS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[92vh] bg-black overflow-hidden select-none border-b border-[#222222] flex flex-col justify-end">
      {/* =========================================================================
          1. FUNDO DESKTOP: 4 COLUNAS EDITORIAIS VIVAS (INTERATIVAS & EXPANSÍVEIS)
         ========================================================================= */}
      <div className="hidden lg:flex absolute inset-0 z-0 w-full h-full">
        {PANELS.map((panel, idx) => {
          const isHovered = hoveredIndex === idx;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <div
              key={panel.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative h-full overflow-hidden border-r border-[#1f1f1f] last:border-r-0 transition-all duration-700 ease-out cursor-pointer ${
                isHovered
                  ? "flex-[1.8]"
                  : isAnyHovered
                  ? "flex-[0.85]"
                  : "flex-1"
              }`}
            >
              {/* Imagem do Painel com Enquadramento Focado no Ponto Áureo */}
              <Image
                src={panel.image}
                alt={panel.name}
                fill
                priority={idx === 0 || idx === 3}
                sizes="35vw"
                style={{ objectPosition: panel.objectPositionDesktop }}
                className={`object-cover transition-all duration-700 ease-out ${
                  isHovered
                    ? "scale-105 brightness-90 contrast-105"
                    : isAnyHovered
                    ? "scale-100 brightness-[0.4] contrast-95 grayscale-[30%]"
                    : "scale-100 brightness-[0.55] contrast-100"
                }`}
              />

              {/* Vinhetas e sombras escuras para contraste perfeito do texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20 pointer-events-none"></div>

              {/* Tag Superior do Painel */}
              <div className="absolute top-6 left-5 z-10 flex items-center space-x-2 text-[10px] font-heading tracking-widest text-[#aaa] uppercase pointer-events-none">
                <span className="font-mono text-white/50">{panel.code}</span>
                <span className="opacity-40">•</span>
                <span className={`${isHovered ? "text-white font-bold" : ""}`}>
                  {panel.name}
                </span>
              </div>

              {/* Link sutil no rodapé da coluna ao passar o mouse */}
              <div
                className={`absolute bottom-6 right-5 z-10 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  href={panel.href}
                  className="inline-flex items-center space-x-1 text-[11px] font-heading tracking-widest text-black bg-white px-3 py-1.5 rounded font-semibold hover:bg-[#d5c5b2] transition-colors duration-150 shadow-lg"
                >
                  <span>EXPLORAR</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          2. FUNDO MOBILE: CROSS-FADE CONTÍNUO DAS 4 FOTOS
         ========================================================================= */}
      <div className="lg:hidden absolute inset-0 z-0 w-full h-full">
        {PANELS.map((panel, idx) => (
          <div
            key={panel.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              mobileIndex === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={panel.image}
              alt={panel.name}
              fill
              priority={idx === 0}
              sizes="100vw"
              style={{ objectPosition: panel.objectPositionMobile }}
              className="object-cover brightness-[0.5] contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
          </div>
        ))}

        {/* Indicadores de Slide Mobile */}
        <div className="absolute top-4 right-4 z-20 flex space-x-1.5">
          {PANELS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setMobileIndex(idx)}
              aria-label={`Ver imagem ${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                mobileIndex === idx ? "w-6 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          3. CONTEÚDO EM PRIMEIRO PLANO (TIPOGRAFIA MONUMENTAL E LIMPA)
         ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          {/* Badges de Coleção */}
          <div className="flex flex-wrap items-center gap-2.5 text-[10px] sm:text-[11px] font-heading tracking-widest text-[#d5c5b2] mb-4 uppercase">
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded border border-white/15">
              DROP I / FW26
            </span>
            <span className="opacity-80">BRAZILIAN LUXURY STREETWEAR</span>
            <span className="opacity-40">•</span>
            <span className="text-[#00c9a7] font-semibold">EDITION LIMITÉE</span>
          </div>

          {/* Título Monumental — 100% Nítido em Código */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white tracking-tight leading-[0.92] mb-6">
            PUT YOUR MIND,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d5c5b2] to-[#999999]">
              MAKE IT HAPPEN.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cccccc] max-w-xl font-sans font-light leading-relaxed mb-8 drop-shadow-md">
            Mais que roupas, histórias. O corte oversized boxy em malha pesada 220g e o novo 
            <strong className="text-white font-medium"> 5-Panel Cap</strong> concebidos para quem dita o próprio ritmo e constrói a própria direção.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="/produto/bone-5panel"
              className="group inline-flex items-center justify-center space-x-2.5 bg-white text-black font-heading text-xs tracking-widest font-semibold px-7 py-4 rounded hover:bg-[#d5c5b2] shadow-2xl transition-all duration-200"
            >
              <span>GARANTIR NOVO BONÉ 5-PANEL</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/#colecao"
              className="inline-flex items-center justify-center space-x-2 bg-black/70 backdrop-blur-md text-white border border-[#444] font-heading text-xs tracking-widest px-7 py-4 rounded hover:border-white hover:bg-black transition-colors duration-200"
            >
              <span>EXPLORAR CAMISETAS OVERSIZED</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
