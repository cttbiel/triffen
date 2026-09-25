"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    subtotal,
    subtotalFormatted,
    whatsappCheckoutUrl,
  } = useCart();
  const { isDark } = useTheme();

  // Fechar gaveta ao pressionar tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Prevenir rolagem do body quando a gaveta estiver aberta
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const pixTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(subtotal * 0.95);

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Backdrop transparente escuro */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Gaveta Lateral (Slide-over) */}
      <aside
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-main)",
        }}
        className="relative w-full max-w-md h-full flex flex-col shadow-2xl border-l z-10 animate-in slide-in-from-right duration-300 transition-colors"
        aria-label="Sacola de compras"
      >
        {/* Cabeçalho da Gaveta */}
        <div
          style={{ borderColor: "var(--border-subtle)" }}
          className="flex items-center justify-between p-5 border-b"
        >
          <div className="flex items-center space-x-2">
            <ShoppingBag size={18} style={{ color: "var(--text-heading)" }} />
            <h2
              style={{ color: "var(--text-heading)" }}
              className="text-sm font-heading font-bold tracking-widest uppercase"
            >
              SUA SACOLA ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Fechar sacola"
            style={{ color: "var(--text-muted)" }}
            className="p-1.5 rounded-full hover:scale-105 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Conteúdo: Lista de Produtos ou Estado Vazio */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div
                style={{
                  backgroundColor: "var(--bg-pill)",
                  color: "var(--text-muted)",
                }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
              >
                <ShoppingBag size={28} />
              </div>
              <div className="space-y-1">
                <p
                  style={{ color: "var(--text-heading)" }}
                  className="font-heading font-bold text-base tracking-wider uppercase"
                >
                  SUA SACOLA ESTÁ VAZIA
                </p>
                <p
                  style={{ color: "var(--text-muted)" }}
                  className="text-xs font-sans max-w-xs"
                >
                  Explore o Drop I e descubra a qualidade autoral da Triffen.
                </p>
              </div>
              <button
                onClick={closeCart}
                style={{
                  backgroundColor: "var(--text-heading)",
                  color: "var(--bg-page)",
                }}
                className="mt-4 px-6 py-2.5 rounded font-heading font-bold text-xs tracking-widest uppercase transition-opacity hover:opacity-90"
              >
                VER COLEÇÃO
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
                className="flex gap-4 p-3.5 rounded border shadow-sm transition-colors"
              >
                {/* Imagem do Produto */}
                <div
                  style={{
                    backgroundColor: "var(--bg-pill)",
                    borderColor: "var(--border-main)",
                  }}
                  className="relative w-18 h-22 rounded overflow-hidden flex-shrink-0 border"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>

                {/* Detalhes e Controles */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        style={{ color: "var(--text-heading)" }}
                        className="text-xs font-heading font-semibold tracking-wide truncate"
                      >
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{ color: "var(--text-muted)" }}
                        className="hover:text-red-500 transition-colors p-1"
                        aria-label="Remover item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p
                      style={{ color: "var(--text-muted)" }}
                      className="text-[11px] font-sans mt-0.5"
                    >
                      Tamanho:{" "}
                      <span
                        style={{ color: "var(--accent-sand)" }}
                        className="font-semibold uppercase"
                      >
                        {item.size}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Contador de Quantidade */}
                    <div
                      style={{
                        backgroundColor: "var(--bg-pill)",
                        borderColor: "var(--border-main)",
                      }}
                      className="flex items-center border rounded"
                    >
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ color: "var(--text-heading)" }}
                        className="p-1 px-2 hover:opacity-70 transition-opacity"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus size={12} />
                      </button>
                      <span
                        style={{ color: "var(--text-heading)" }}
                        className="px-2 text-xs font-mono font-semibold"
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ color: "var(--text-heading)" }}
                        className="p-1 px-2 hover:opacity-70 transition-opacity"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Preço Total do Item */}
                    <span
                      style={{ color: "var(--text-heading)" }}
                      className="text-xs font-heading font-bold"
                    >
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé da Gaveta (Resumo & CTA) */}
        {items.length > 0 && (
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-main)",
            }}
            className="p-5 border-t space-y-4"
          >
            {/* Aviso de Entrega Direto e Sem Burocracia */}
            <div
              style={{
                backgroundColor: "var(--bg-pill)",
                borderColor: "var(--border-subtle)",
              }}
              className="p-2.5 rounded border text-[11px] font-sans flex items-center justify-between"
            >
              <span style={{ color: "var(--text-muted)" }}>🚚 Envio de Serra - ES:</span>
              <strong style={{ color: "var(--text-heading)" }}>Entrega a combinar</strong>
            </div>

            {/* Linhas de Valores */}
            <div className="space-y-1.5 text-xs font-sans">
              <div className="flex justify-between">
                <span style={{ color: "var(--text-muted)" }}>Total dos produtos:</span>
                <span
                  style={{ color: "var(--text-heading)" }}
                  className="font-heading font-bold text-sm"
                >
                  {subtotalFormatted}
                </span>
              </div>
              <div className="flex justify-between text-[#00c9a7] text-[11px] font-medium">
                <span>⚡ À vista no PIX (5% OFF):</span>
                <strong>{pixTotal}</strong>
              </div>
            </div>

            {/* CTA Finalizar Pedido no WhatsApp */}
            <a
              href={whatsappCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-heading font-bold text-xs tracking-widest py-3.5 px-4 rounded shadow-lg transition-all duration-200 hover:scale-[1.01]"
            >
              <MessageCircle size={17} />
              <span>FINALIZAR PEDIDO NO WHATSAPP</span>
            </a>

            <button
              onClick={closeCart}
              style={{ color: "var(--text-muted)" }}
              className="w-full text-center text-[11px] font-heading tracking-wider hover:underline"
            >
              CONTINUAR ESCOLHENDO
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
