"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { TRIFFEN_WHATSAPP_PHONE, getAllProducts } from "@/data/products";
import { useTheme } from "@/context/ThemeContext";

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalProducts = getAllProducts().length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra de Avisos Superior */}
      <div
        style={{
          backgroundColor: "var(--announcement-bg)",
          color: "var(--announcement-text)",
        }}
        className="border-b border-[#222222]/30 py-2 px-4 text-center text-[11px] font-heading tracking-widest uppercase transition-colors duration-200"
      >
        <p>
          🚚 <strong>Frete Grátis</strong> acima de R$ 299 | DROP I / ESSENTIALS &amp; HEADWEAR LIBERADOS
        </p>
      </div>

      {/* Navbar Fixa */}
      <nav
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: scrolled ? "var(--border-main)" : "transparent",
        }}
        className={`sticky top-0 z-50 transition-all duration-300 border-b backdrop-blur-md ${
          scrolled ? "py-3 shadow-xl" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-36 sm:w-44 h-9">
              <Image
                src={
                  isDark
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
              style={{ color: "var(--text-muted)" }}
              className="hover:!text-[var(--text-heading)] transition-colors duration-200"
            >
              COLEÇÃO
            </Link>
            <Link
              href="/#lookbook"
              style={{ color: "var(--text-muted)" }}
              className="hover:!text-[var(--text-heading)] transition-colors duration-200"
            >
              EDITORIAL
            </Link>
            <Link
              href="/#manifesto"
              style={{ color: "var(--text-muted)" }}
              className="hover:!text-[var(--text-heading)] transition-colors duration-200"
            >
              MANIFESTO
            </Link>
            <a
              href={`https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20gostaria%20de%20atendimento%20da%20Triffen.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)" }}
              className="hover:!text-[#00c9a7] transition-colors duration-200 flex items-center gap-1.5"
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
              style={{
                borderColor: "var(--border-main)",
                backgroundColor: "var(--bg-pill)",
                color: "var(--text-heading)",
              }}
              className="p-2 rounded-full border hover:scale-105 transition-all duration-200"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <Link
              href="/#colecao"
              style={{
                borderColor: "var(--border-main)",
                backgroundColor: "var(--bg-pill)",
                color: "var(--text-heading)",
              }}
              className="flex items-center space-x-2 text-xs font-heading tracking-wider py-1.5 px-3 rounded-full border hover:scale-105 transition-all duration-200"
              aria-label="Ver catálogo de produtos"
            >
              <ShoppingBag size={15} />
              <span className="font-semibold">{totalProducts} PEÇAS</span>
            </Link>

            {/* Botão Menu Hambúrguer Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              style={{
                borderColor: "var(--border-main)",
                color: "var(--text-heading)",
              }}
              className="md:hidden p-2 rounded border transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* =========================================================================
            DRAWER / MENU MOBILE SLIDE-DOWN
           ========================================================================= */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-main)",
            }}
            className="md:hidden border-t px-6 py-8 space-y-6 animate-in slide-in-from-top-4 duration-200"
          >
            <nav className="flex flex-col space-y-4 text-sm font-heading tracking-widest uppercase">
              <Link
                href="/#colecao"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "var(--text-heading)",
                  borderColor: "var(--border-subtle)",
                }}
                className="flex items-center justify-between py-2 border-b"
              >
                <span>COLEÇÃO DROP I</span>
                <span className="text-[10px] text-[#00c9a7]">{totalProducts} PEÇAS</span>
              </Link>
              <Link
                href="/produto/bone-5panel"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "var(--text-heading)",
                  borderColor: "var(--border-subtle)",
                }}
                className="flex items-center justify-between py-2 border-b"
              >
                <span>NOVO: BONÉ 5-PANEL</span>
                <span className="text-[9px] bg-black/10 dark:bg-white/10 px-2 py-0.5 rounded font-bold">
                  HOT
                </span>
              </Link>
              <Link
                href="/#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "var(--text-muted)",
                  borderColor: "var(--border-subtle)",
                }}
                className="hover:!text-[var(--text-heading)] py-2 border-b"
              >
                EDITORIAL OS TRÊS CAMINHOS
              </Link>
              <Link
                href="/#manifesto"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "var(--text-muted)",
                  borderColor: "var(--border-subtle)",
                }}
                className="hover:!text-[var(--text-heading)] py-2 border-b"
              >
                MANIFESTO DA MARCA
              </Link>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Triffen%20e%20gostaria%20de%20atendimento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] text-black font-heading font-bold text-xs tracking-wider py-3.5 rounded shadow-lg"
              >
                <span>FALAR NO WHATSAPP</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="https://www.instagram.com/triffen.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--bg-pill)",
                  borderColor: "var(--border-main)",
                  color: "var(--text-heading)",
                }}
                className="flex items-center justify-center space-x-2 border font-heading text-xs tracking-wider py-3.5 rounded"
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
