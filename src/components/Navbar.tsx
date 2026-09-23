"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { TRIFFEN_WHATSAPP_PHONE, getAllProducts } from "@/data/products";

export const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalProducts = getAllProducts().length;

  useEffect(() => {
    // Carrega tema salvo ou padrão dark
    const saved = localStorage.getItem("triffen-theme") || "dark-mode";
    const isDark = saved === "dark-mode";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    const themeClass = nextDark ? "dark-mode" : "light-mode";
    localStorage.setItem("triffen-theme", themeClass);

    if (nextDark) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  };

  return (
    <>
      {/* Barra de Avisos Superior */}
      <div className="bg-black text-[#d5c5b2] border-b border-[#222222] py-2 px-4 text-center text-[11px] font-heading tracking-widest uppercase">
        <p>
          🚚 <strong>Frete Grátis</strong> acima de R$ 299 | DROP I / ESSENTIALS & HEADWEAR LIBERADOS
        </p>
      </div>

      {/* Navbar Fixa */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0b0b0b]/90 backdrop-blur-md border-[#262626] py-3 shadow-xl"
            : "bg-[#0b0b0b] border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-36 sm:w-44 h-9">
              <Image
                src={
                  isDarkMode
                    ? "/assets/TIPOGRAFIA-TRIFFEN-TRANSPARENTE-JHI-BRANCA.png"
                    : "/assets/TIPOGRAFIA-TRIFFEN-TRANSPARENTE-JHI-PRETA.png"
                }
                alt="TRIFFEN"
                fill
                sizes="(max-width: 768px) 150px, 180px"
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Links Centrais Desktop */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-heading tracking-widest uppercase">
            <Link
              href="/#colecao"
              className="text-[#999] hover:text-white transition-colors duration-200"
            >
              COLEÇÃO
            </Link>
            <Link
              href="/#lookbook"
              className="text-[#999] hover:text-white transition-colors duration-200"
            >
              EDITORIAL
            </Link>
            <Link
              href="/#manifesto"
              className="text-[#999] hover:text-white transition-colors duration-200"
            >
              MANIFESTO
            </Link>
            <a
              href={`https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20gostaria%20de%20atendimento%20da%20Triffen.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999] hover:text-[#00c9a7] transition-colors duration-200 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c9a7] animate-pulse"></span>
              ATENDIMENTO
            </a>
          </div>

          {/* Ações Laterais */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-full border border-[#262626] text-[#999] hover:text-white hover:border-[#444] transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <Link
              href="/#colecao"
              className="flex items-center space-x-2 text-xs font-heading tracking-wider py-1.5 px-3 rounded-full border border-[#262626] hover:border-[#555] transition-colors duration-200"
              aria-label="Ver catálogo de produtos"
            >
              <ShoppingBag size={15} />
              <span className="font-semibold">{totalProducts} PEÇAS</span>
            </Link>

            {/* Botão Menu Hambúrguer Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="md:hidden p-2 rounded border border-[#262626] text-white hover:border-[#555] transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* =========================================================================
            DRAWER / MENU MOBILE SLIDE-DOWN
           ========================================================================= */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#222222] bg-[#0c0c0c] px-6 py-8 space-y-6 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-4 text-sm font-heading tracking-widest uppercase">
              <Link
                href="/#colecao"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white flex items-center justify-between py-2 border-b border-[#1c1c1c]"
              >
                <span>COLEÇÃO DROP I</span>
                <span className="text-[10px] text-[#d5c5b2]">{totalProducts} PEÇAS</span>
              </Link>
              <Link
                href="/produto/bone-5panel"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#d5c5b2] flex items-center justify-between py-2 border-b border-[#1c1c1c]"
              >
                <span>NOVO: BONÉ 5-PANEL</span>
                <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded text-white">HOT</span>
              </Link>
              <Link
                href="/#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#aaa] hover:text-white py-2 border-b border-[#1c1c1c]"
              >
                EDITORIAL OS TRÊS CAMINHOS
              </Link>
              <Link
                href="/#manifesto"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#aaa] hover:text-white py-2 border-b border-[#1c1c1c]"
              >
                MANIFESTO DA MARCA
              </Link>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Triffen%20e%20gostaria%20de%20atendimento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] text-black font-heading font-bold text-xs tracking-wider py-3.5 rounded"
              >
                <span>FALAR NO WHATSAPP</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="https://www.instagram.com/triffen.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#181818] border border-[#2a2a2a] text-white font-heading text-xs tracking-wider py-3.5 rounded"
              >
                <span>INSTAGRAM @TRIFFEN.OFICIAL</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
