"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TRIFFEN_WHATSAPP_PHONE } from "@/data/products";
import { ShieldCheck, Truck, RotateCcw, Lock, ArrowRight, Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const Footer: React.FC = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--border-main)",
        color: "var(--text-body)",
      }}
      className="border-t pt-16 pb-12 select-none transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            1. LINHA SUPERIOR: NEWSLETTER VIP & COMUNIDADE DE DROPS
           ========================================================================= */}
        <div
          style={{ borderColor: "var(--border-subtle)" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b items-center"
        >
          <div className="lg:col-span-6">
            <span
              style={{ color: "var(--accent-sand)" }}
              className="text-[10px] font-heading tracking-widest uppercase block mb-1"
            >
              ACESSO EXCLUSIVO • LISTA VIP
            </span>
            <h3
              style={{ color: "var(--text-heading)" }}
              className="text-xl sm:text-2xl font-heading font-bold tracking-wide"
            >
              RECEBA OS PRÓXIMOS DROPS ANTES DE TODOS
            </h3>
            <p
              style={{ color: "var(--text-muted)" }}
              className="text-xs font-sans font-light mt-1 max-w-md"
            >
              Edições numeradas e peças de tiragem limitada. Cadastre-se para ser notificado no lançamento oficial.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md lg:ml-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="SEU MELHOR E-MAIL"
                required
                style={{
                  backgroundColor: "var(--bg-input)",
                  borderColor: "var(--border-main)",
                  color: "var(--text-heading)",
                }}
                className="flex-1 rounded px-4 py-3 text-xs outline-none font-heading tracking-wider focus:ring-1 focus:ring-[var(--accent-sand)] transition-all"
              />
              <button
                type="submit"
                style={{
                  backgroundColor: isDark ? "#ffffff" : "#0f0f0f",
                  color: isDark ? "#000000" : "#ffffff",
                }}
                className="font-heading font-bold text-xs tracking-widest px-6 py-3 rounded transition-colors duration-200 flex items-center space-x-1.5 flex-shrink-0 hover:opacity-90"
              >
                {subscribed ? (
                  <>
                    <Check size={14} />
                    <span>INSCRITO</span>
                  </>
                ) : (
                  <>
                    <span>ENTRAR</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-[#00c9a7] mt-2 lg:text-right font-sans">
                ✓ Bem-vindo à Triffen VIP. Avisaremos você em primeira mão.
              </p>
            )}
          </div>
        </div>

        {/* =========================================================================
            2. GRID PRINCIPAL: MARCA, NAVEGAÇÃO, CONTATO & REDES SOCIAIS
           ========================================================================= */}
        <div
          style={{ borderColor: "var(--border-subtle)" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b"
        >
          {/* Coluna 1: Tipografia & Identidade */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-44 h-10">
                <Image
                  src={
                    isDark
                      ? "/assets/TIPOGRAFIA-TRIFFEN-TRANSPARENTE-JHI-BRANCA.png"
                      : "/assets/TIPOGRAFIA-TRIFFEN-TRANSPARENTE-JHI-PRETA.png"
                  }
                  alt="Triffen"
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p
              style={{ color: "var(--text-muted)" }}
              className="text-xs sm:text-sm font-sans font-light leading-relaxed max-w-sm"
            >
              Put Your Mind, Make It Happen. Streetwear brasileiro de alta gramatura e corte autoral boxy. Confeccionado para quem dita o próprio destino.
            </p>

            <div
              style={{ color: "var(--accent-sand)" }}
              className="pt-2 flex items-center space-x-3 text-[11px] font-heading tracking-widest"
            >
              <span>DROP I / ESSENTIALS &amp; HEADWEAR</span>
              <span>•</span>
              <span>EST. 2026</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3">
            <h4
              style={{ color: "var(--text-heading)" }}
              className="text-xs font-heading tracking-widest uppercase mb-4"
            >
              COLEÇÃO &amp; PEÇAS
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link
                  href="/produto/bone-5panel"
                  style={{ color: "var(--text-body)" }}
                  className="hover:!text-[var(--accent-sand)] transition-colors duration-200 flex items-center space-x-1.5"
                >
                  <span
                    style={{
                      backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
                      color: "var(--accent-sand)",
                    }}
                    className="text-[9px] font-heading px-1.5 py-0.5 rounded"
                  >
                    NOVO
                  </span>
                  <span>5-Panel Cap Stealth Black</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/produto/bege"
                  style={{ color: "var(--text-muted)" }}
                  className="hover:!text-[var(--text-heading)] transition-colors duration-200"
                >
                  T-Shirt Oversized Bege
                </Link>
              </li>
              <li>
                <Link
                  href="/produto/marrom"
                  style={{ color: "var(--text-muted)" }}
                  className="hover:!text-[var(--text-heading)] transition-colors duration-200"
                >
                  T-Shirt Oversized Marrom
                </Link>
              </li>
              <li>
                <Link
                  href="/produto/roxa"
                  style={{ color: "var(--text-muted)" }}
                  className="hover:!text-[var(--text-heading)] transition-colors duration-200"
                >
                  T-Shirt Oversized Roxa
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/#lookbook"
                  style={{ color: "var(--accent-sand)" }}
                  className="hover:!text-[var(--text-heading)] transition-colors duration-200 font-heading tracking-wider"
                >
                  EDITORIAL OS TRÊS CAMINHOS &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais & Contato com Ícones Oficiais */}
          <div className="md:col-span-4 space-y-4">
            <h4
              style={{ color: "var(--text-heading)" }}
              className="text-xs font-heading tracking-widest uppercase"
            >
              CONCIERGE &amp; REDES OFICIAIS
            </h4>

            <div className="space-y-3">
              {/* WhatsApp Button Pill */}
              <a
                href={`https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Triffen%20e%20gostaria%20de%20atendimento.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-main)",
                }}
                className="group flex items-center justify-between p-3 rounded border hover:border-[#25D366] transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-black transition-colors duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.678-1.635-.929-2.241-.244-.59-.492-.51-.678-.52-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.51 1.079 2.91 1.23 3.111c.15.201 2.123 3.242 5.143 4.547.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.175-1.431-.075-.126-.276-.201-.577-.351z" />
                      <path d="M12.004 0C5.373 0 0 5.373 0 12c0 2.115.549 4.16 1.594 5.972L.051 23.473a.75.75 0 0 0 .937.937l5.655-1.482A11.936 11.936 0 0 0 12.004 24C18.635 24 24 18.627 24 12S18.635 0 12.004 0zm0 22a9.932 9.932 0 0 1-5.076-1.39.75.75 0 0 0-.555-.078l-4.148 1.087 1.139-3.97a.75.75 0 0 0-.083-.593A9.946 9.946 0 0 1 2 12c0-5.514 4.486-10 10.004-10 5.514 0 10 4.486 10 10s-4.486 10-9.996 10z" />
                    </svg>
                  </div>
                  <div>
                    <span
                      style={{ color: "var(--text-heading)" }}
                      className="text-xs font-heading font-semibold tracking-wider block"
                    >
                      WHATSAPP OFICIAL
                    </span>
                    <span
                      style={{ color: "var(--text-muted)" }}
                      className="text-[11px] font-mono"
                    >
                      (27) 99650-0097
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  style={{ color: "var(--text-muted)" }}
                  className="group-hover:!text-[#25D366] group-hover:translate-x-1 transition-all duration-200"
                />
              </a>

              {/* Instagram Button Pill */}
              <a
                href="https://www.instagram.com/triffen.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-main)",
                }}
                className="group flex items-center justify-between p-3 rounded border hover:border-[#E1306C] transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#E1306C]/15 text-[#E1306C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E1306C] group-hover:text-white transition-colors duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <span
                      style={{ color: "var(--text-heading)" }}
                      className="text-xs font-heading font-semibold tracking-wider block"
                    >
                      INSTAGRAM
                    </span>
                    <span
                      style={{ color: "var(--text-muted)" }}
                      className="text-[11px] font-mono"
                    >
                      @triffen.oficial
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  style={{ color: "var(--text-muted)" }}
                  className="group-hover:!text-[#E1306C] group-hover:translate-x-1 transition-all duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. BARRA DE SELOS DE CONFIANÇA & MEIOS DE PAGAMENTO
           ========================================================================= */}
        <div
          style={{ borderColor: "var(--border-subtle)" }}
          className="py-8 border-b flex flex-wrap items-center justify-between gap-6 text-[11px] font-heading tracking-widest uppercase"
        >
          <div className="flex flex-wrap items-center gap-6">
            <span style={{ color: "var(--text-body)" }} className="flex items-center space-x-1.5">
              <Lock size={13} className="text-[#00c9a7]" />
              <span>SSL 256-BIT CRIPTOGRAFADO</span>
            </span>
            <span style={{ color: "var(--text-body)" }} className="flex items-center space-x-1.5">
              <ShieldCheck size={13} className="text-[#00c9a7]" />
              <span>CONFORME LGPD</span>
            </span>
            <span style={{ color: "var(--text-body)" }} className="flex items-center space-x-1.5">
              <Truck size={13} style={{ color: "var(--accent-sand)" }} />
              <span>ENVIO EM 24H ÚTEIS</span>
            </span>
            <span style={{ color: "var(--text-body)" }} className="flex items-center space-x-1.5">
              <RotateCcw size={13} style={{ color: "var(--accent-sand)" }} />
              <span>1ª TROCA GRÁTIS</span>
            </span>
          </div>

          <div
            style={{ color: "var(--text-muted)" }}
            className="flex items-center space-x-3 text-[10px] font-mono"
          >
            <span
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-main)",
              }}
              className="px-2 py-1 rounded border"
            >
              PIX (5% OFF)
            </span>
            <span
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-main)",
              }}
              className="px-2 py-1 rounded border"
            >
              CARTÃO ATÉ 3X
            </span>
            <span
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-main)",
              }}
              className="px-2 py-1 rounded border"
            >
              MERCADO PAGO
            </span>
          </div>
        </div>

        {/* =========================================================================
            4. LINHA INFERIOR: COPYRIGHT & MANIFESTO
           ========================================================================= */}
        <div
          style={{ color: "var(--text-muted)" }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans"
        >
          <p>© 2026 Triffen Oficial. Todos os direitos reservados.</p>
          <p
            style={{ color: "var(--text-body)" }}
            className="mt-2 sm:mt-0 font-heading tracking-wider"
          >
            PUT YOUR MIND, MAKE IT HAPPEN.
          </p>
        </div>
      </div>
    </footer>
  );
};
