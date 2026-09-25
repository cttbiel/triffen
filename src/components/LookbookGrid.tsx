import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const LookbookGrid: React.FC = () => {
  return (
    <section
      id="lookbook"
      style={{
        backgroundColor: "var(--bg-page)",
        borderColor: "var(--border-main)",
      }}
      className="py-20 lg:py-28 border-t transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Campanha */}
        <div
          style={{ borderColor: "var(--border-main)" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b pb-8"
        >
          <div>
            <span className="text-xs font-heading tracking-widest text-[#d5c5b2] dark:text-[#d5c5b2] uppercase block mb-2 font-semibold">
              CAMPANHA EDITORIAL / DROP I
            </span>
            <h2
              style={{ color: "var(--text-heading)" }}
              className="text-3xl sm:text-5xl font-heading font-bold tracking-tight"
            >
              OS TRÊS CAMINHOS.
            </h2>
          </div>
          <p
            style={{ color: "var(--text-muted)" }}
            className="mt-4 md:mt-0 text-sm max-w-md font-sans font-light leading-relaxed"
          >
            A Triffen nasce na encruzilhada de escolhas, coragem e identidade. Do bar à praia, do asfalto à natureza. Cada peça foi esculpida para carregar presença.
          </p>
        </div>

        {/* Grade Asimétrica Curada (Estilo Aimé Leon Dore & Represent) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Foto Principal de Destaque: Praia / Cerca */}
          <div className="md:col-span-7 relative group overflow-hidden rounded bg-[#141414] aspect-[4/5] sm:aspect-[16/11] border border-black/10 shadow-sm">
            <Image
              src="/assets/lookbook_fence.webp"
              alt="Modelos vestindo Triffen Drop I diante da orla"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <span className="text-[10px] font-heading tracking-widest text-[#d5c5b2] uppercase block">
                  CAPÍTULO 01
                </span>
                <p className="text-lg sm:text-xl font-heading font-bold tracking-wide">
                  PERSPECTIVA &amp; HORIZONTE
                </p>
                <p className="text-xs text-[#aaa] font-sans font-light mt-0.5">
                  T-Shirts Street Bege e Marrom
                </p>
              </div>
              <Link
                href="/produto/bege"
                className="inline-flex items-center space-x-1.5 text-xs font-heading tracking-wider py-2 px-3.5 bg-white text-black hover:bg-[#d5c5b2] rounded font-semibold transition-colors duration-200 shadow-md"
              >
                <span>VER PEÇA</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Coluna Direita com 2 Fotos Menores */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Foto 2: Trilha / Rochas */}
            <div className="relative group overflow-hidden rounded bg-[#141414] aspect-[4/3] flex-1 border border-black/10 shadow-sm">
              <Image
                src="/assets/lookbook_model_trail.webp"
                alt="Modelo Triffen com calça cargo e camiseta marrom na trilha"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[9px] font-heading tracking-widest text-[#d5c5b2] uppercase block">
                    CAPÍTULO 02
                  </span>
                  <p className="text-sm sm:text-base font-heading font-bold">
                    POSTURA &amp; MOVIMENTO
                  </p>
                </div>
                <Link
                  href="/produto/marrom"
                  className="text-xs font-heading font-semibold text-[#d5c5b2] hover:text-white"
                >
                  EXPLORAR &rarr;
                </Link>
              </div>
            </div>

            {/* Foto 3: Street Sticker Culture */}
            <div className="relative group overflow-hidden rounded bg-[#141414] aspect-[4/3] flex-1 border border-black/10 shadow-sm">
              <Image
                src="/assets/lookbook_urban_sticker.webp"
                alt="Adesivo Triffen em pilar de concreto urbano"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[9px] font-heading tracking-widest text-[#d5c5b2] uppercase block">
                    CAPÍTULO 03
                  </span>
                  <p className="text-sm sm:text-base font-heading font-bold">
                    CULTURA DE RUA AUTORAL
                  </p>
                </div>
                <Link
                  href="/produto/bone-5panel"
                  className="text-xs font-heading font-semibold text-[#d5c5b2] hover:text-white"
                >
                  VER BONÉ &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
