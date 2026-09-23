"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { MessageCircle } from "lucide-react";
import { TRIFFEN_WHATSAPP_PHONE } from "@/data/products";

interface StickyPurchaseBarProps {
  product: Product;
  selectedSize: string;
}

export const StickyPurchaseBar: React.FC<StickyPurchaseBarProps> = ({
  product,
  selectedSize,
}) => {
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
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-t border-[#262626] py-3 px-4 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Informações da Peça */}
        <div className="flex items-center space-x-3 min-w-0">
          <div className="relative w-11 h-13 rounded overflow-hidden bg-[#181818] border border-[#2a2a2a] flex-shrink-0">
            <Image
              src={product.images[0].src}
              alt=""
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-heading font-semibold text-white truncate max-w-[200px] sm:max-w-sm">
              {product.name}
            </p>
            <p className="text-[11px] text-[#aaa] font-sans">
              <strong className="text-white">{product.priceFormatted}</strong> • Tam:{" "}
              <span className="text-[#d5c5b2] font-semibold">{selectedSize}</span>
            </p>
          </div>
        </div>

        {/* CTA do WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-heading font-bold text-xs tracking-wider px-5 py-3 rounded shadow-md transition-colors duration-200"
        >
          <MessageCircle size={16} />
          <span>GARANTIR NO WHATSAPP</span>
        </a>
      </div>
    </aside>
  );
};
