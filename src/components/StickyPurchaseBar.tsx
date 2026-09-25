"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { TRIFFEN_WHATSAPP_PHONE } from "@/data/products";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

interface StickyPurchaseBarProps {
  product: Product;
  selectedSize: string;
}

export const StickyPurchaseBar: React.FC<StickyPurchaseBarProps> = ({
  product,
  selectedSize,
}) => {
  const { isDark } = useTheme();
  const { addItem } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe quando rolar mais de 450px
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rawMessage = `Olá, Triffen! 👋\n\nQuero garantir o *${product.name}* no tamanho *${selectedSize}* (${product.priceFormatted}).\n\nComo prossigo com o pagamento e envio?`;
  const whatsappUrl = `https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=${encodeURIComponent(
    rawMessage
  )}`;

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra fixa de compra"
      style={{
        backgroundColor: isDark ? "rgba(13, 13, 13, 0.96)" : "rgba(255, 255, 255, 0.96)",
        borderColor: "var(--border-main)",
      }}
      className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md border-t py-3 px-4 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Informações da Peça */}
        <div className="flex items-center space-x-3 min-w-0">
          <div
            style={{
              backgroundColor: "var(--bg-pill)",
              borderColor: "var(--border-main)",
            }}
            className="relative w-11 h-13 rounded overflow-hidden border flex-shrink-0"
          >
            <Image
              src={product.images[0].src}
              alt=""
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p
              style={{ color: "var(--text-heading)" }}
              className="text-xs font-heading font-semibold truncate max-w-[200px] sm:max-w-sm"
            >
              {product.name}
            </p>
            <p style={{ color: "var(--text-muted)" }} className="text-[11px] font-sans">
              <strong style={{ color: "var(--text-heading)" }}>{product.priceFormatted}</strong> • Tam:{" "}
              <span style={{ color: "var(--accent-sand)" }} className="font-semibold">
                {selectedSize}
              </span>
            </p>
          </div>
        </div>

        {/* Ações: Sacola e WhatsApp */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => addItem(product, selectedSize)}
            style={{
              backgroundColor: "var(--text-heading)",
              color: "var(--bg-page)",
            }}
            className="inline-flex items-center space-x-1.5 font-heading font-bold text-xs tracking-wider px-3.5 sm:px-4 py-2.5 sm:py-3 rounded shadow-md transition-opacity hover:opacity-90 active:scale-95"
          >
            <ShoppingBag size={15} />
            <span className="hidden sm:inline">ADICIONAR À SACOLA</span>
            <span className="sm:hidden">SACOLA</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-heading font-bold text-xs tracking-wider px-3.5 sm:px-4 py-2.5 sm:py-3 rounded shadow-md transition-colors duration-200"
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">GARANTIR NO WHATSAPP</span>
            <span className="sm:hidden">COMPRAR</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
