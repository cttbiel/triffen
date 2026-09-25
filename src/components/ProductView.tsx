"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { ProductGallery } from "@/components/ProductGallery";
import { SizeSelector } from "@/components/SizeSelector";
import { StickyPurchaseBar } from "@/components/StickyPurchaseBar";
import { ProductCard } from "@/components/ProductCard";
import { TRIFFEN_WHATSAPP_PHONE } from "@/data/products";
import { MessageCircle, ShieldCheck, Truck, RotateCcw, ChevronDown, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductViewProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductView: React.FC<ProductViewProps> = ({
  product,
  relatedProducts,
}) => {
  const { addItem } = useCart();
  const isHeadwear = product.id === "bone-5panel";
  const defaultSize = isHeadwear ? "ÚNICO" : product.sizes[2]?.size || product.sizes[0]?.size || "G";
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  // Accordions retráteis
  const [openAccordions, setOpenAccordions] = useState({
    desc: true,
    details: true,
    care: false,
    shipping: false,
  });

  const toggleAccordion = (key: keyof typeof openAccordions) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Gerador de mensagem WhatsApp direto
  const rawMessage = `Olá, Triffen! 👋\n\nQuero garantir o *${product.name}* no tamanho *${selectedSize}* (${product.priceFormatted}).\n\nComo posso prosseguir com o pagamento e envio?`;
  const whatsappUrl = `https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=${encodeURIComponent(
    rawMessage
  )}`;

  return (
    <div className="pt-6 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        style={{ color: "var(--text-muted)" }}
        className="mb-8 text-xs font-heading tracking-widest uppercase flex items-center space-x-2"
      >
        <Link href="/" className="hover:!text-[var(--text-heading)] transition-colors duration-200">
          INÍCIO
        </Link>
        <span>/</span>
        <Link href="/#colecao" className="hover:!text-[var(--text-heading)] transition-colors duration-200">
          DROP I
        </Link>
        <span>/</span>
        <span style={{ color: "var(--text-heading)" }} className="font-semibold">
          {product.name}
        </span>
      </nav>

      {/* Grid Principal: Galeria à esquerda e Detalhes de compra à direita */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Coluna Esquerda: Galeria com Lupa */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Coluna Direita: Informações & Ações */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Categoria, SKU e Título */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-heading tracking-widest uppercase mb-1">
              <span style={{ color: "var(--accent-sand)" }} className="font-semibold">
                {product.category}
              </span>
              <span style={{ color: "var(--text-muted)" }} className="font-mono opacity-70">
                {product.sku}
              </span>
            </div>
            <h1
              style={{ color: "var(--text-heading)" }}
              className="text-2xl sm:text-4xl font-heading font-bold tracking-wide leading-tight"
            >
              {product.name}
            </h1>
          </div>

          {/* Preço e Parcelamento */}
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-main)",
            }}
            className="p-4 rounded border space-y-2 shadow-sm"
          >
            <div className="flex items-baseline space-x-3">
              <span
                style={{ color: "var(--text-heading)" }}
                className="text-2xl sm:text-3xl font-heading font-bold"
              >
                {product.priceFormatted}
              </span>
              <span style={{ color: "var(--text-muted)" }} className="text-xs font-sans">
                {product.installments}
              </span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-[#00c9a7]/10 text-[#00c9a7] border border-[#00c9a7]/20 px-2.5 py-1 rounded text-xs font-heading tracking-wider">
              <span className="font-bold">PIX</span>
              <span className="font-sans font-medium">{product.pixDiscount}</span>
            </div>
          </div>

          {/* Seletor de Tamanho */}
          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
            isHeadwear={isHeadwear}
          />

          {/* Botões de Ação de Compra */}
          <div className="space-y-2.5">
            {/* 1. Adicionar à Sacola */}
            <button
              type="button"
              onClick={() => addItem(product, selectedSize)}
              style={{
                backgroundColor: "var(--text-heading)",
                color: "var(--bg-page)",
              }}
              className="w-full flex items-center justify-center space-x-2.5 font-heading font-bold text-xs sm:text-sm tracking-widest py-4 px-6 rounded shadow-lg transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
            >
              <ShoppingBag size={18} />
              <span>ADICIONAR À SACOLA</span>
            </button>

            {/* 2. Comprar Direto no WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-heading font-bold text-xs sm:text-sm tracking-widest py-3.5 px-6 rounded shadow-md transition-all duration-200"
            >
              <MessageCircle size={18} />
              <span>GARANTIR DIRETO NO WHATSAPP</span>
            </a>

            <p
              style={{ color: "var(--text-muted)" }}
              className="text-[11px] text-center font-sans"
            >
              Atendimento exclusivo • Confirmação de estoque e chave PIX imediata
            </p>
          </div>

          {/* Selos de Confiança */}
          <div
            style={{ borderColor: "var(--border-subtle)" }}
            className="grid grid-cols-3 gap-2 pt-2 border-t text-center text-[10px] sm:text-xs font-heading tracking-wider"
          >
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-main)",
                color: "var(--text-body)",
              }}
              className="p-2.5 rounded border flex flex-col items-center gap-1 shadow-sm"
            >
              <Truck size={16} className="text-[#00c9a7]" />
              <span>ENVIO EM 24H</span>
            </div>
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-main)",
                color: "var(--text-body)",
              }}
              className="p-2.5 rounded border flex flex-col items-center gap-1 shadow-sm"
            >
              <RotateCcw size={16} className="text-[#00c9a7]" />
              <span>1ª TROCA GRÁTIS</span>
            </div>
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-main)",
                color: "var(--text-body)",
              }}
              className="p-2.5 rounded border flex flex-col items-center gap-1 shadow-sm"
            >
              <ShieldCheck size={16} className="text-[#00c9a7]" />
              <span>ORIGINAL TRIFFEN</span>
            </div>
          </div>

          {/* Informações de Despacho & Entrega Direta */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-main)",
            }}
            className="p-4 rounded border flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <div
                style={{
                  backgroundColor: "var(--bg-pill)",
                  color: "var(--accent-sand)",
                }}
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Truck size={17} />
              </div>
              <div>
                <span
                  style={{ color: "var(--text-heading)" }}
                  className="text-xs font-heading font-semibold tracking-wider block"
                >
                  ENVIO DE SERRA - ES
                </span>
                <span
                  style={{ color: "var(--text-muted)" }}
                  className="text-[11px] font-sans"
                >
                  Frete e prazo combinados diretamente no WhatsApp
                </span>
              </div>
            </div>
            <span
              style={{ color: "var(--accent-sand)" }}
              className="text-[10px] font-heading font-bold px-2 py-1 rounded bg-black/10 dark:bg-white/10 uppercase"
            >
              A COMBINAR
            </span>
          </div>

          {/* Acordeons Técnicos de Informação */}
          <div
            style={{ borderColor: "var(--border-main)" }}
            className="divide-y border-y text-xs font-sans"
          >
            {/* Descrição */}
            <div style={{ borderColor: "var(--border-subtle)" }} className="py-3">
              <button
                onClick={() => toggleAccordion("desc")}
                style={{ color: "var(--text-heading)" }}
                className="w-full flex items-center justify-between font-heading tracking-wider uppercase py-1"
              >
                <span>Descrição &amp; Conceito</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openAccordions.desc ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.desc && (
                <p
                  style={{ color: "var(--text-muted)" }}
                  className="mt-2 leading-relaxed font-light font-sans"
                >
                  {product.description}
                </p>
              )}
            </div>

            {/* Detalhes Técnicos */}
            <div style={{ borderColor: "var(--border-subtle)" }} className="py-3">
              <button
                onClick={() => toggleAccordion("details")}
                style={{ color: "var(--text-heading)" }}
                className="w-full flex items-center justify-between font-heading tracking-wider uppercase py-1"
              >
                <span>Ficha Técnica &amp; Composição</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openAccordions.details ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.details && (
                <ul
                  style={{ color: "var(--text-muted)" }}
                  className="mt-2 space-y-1 list-disc list-inside font-light font-sans"
                >
                  {product.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cuidados e Lavagem */}
            <div style={{ borderColor: "var(--border-subtle)" }} className="py-3">
              <button
                onClick={() => toggleAccordion("care")}
                style={{ color: "var(--text-heading)" }}
                className="w-full flex items-center justify-between font-heading tracking-wider uppercase py-1"
              >
                <span>Guia de Cuidados &amp; Conservação</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openAccordions.care ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.care && (
                <ul
                  style={{ color: "var(--text-muted)" }}
                  className="mt-2 space-y-1 list-disc list-inside font-light font-sans"
                >
                  {product.care.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Envio e Devoluções */}
            <div style={{ borderColor: "var(--border-subtle)" }} className="py-3">
              <button
                onClick={() => toggleAccordion("shipping")}
                style={{ color: "var(--text-heading)" }}
                className="w-full flex items-center justify-between font-heading tracking-wider uppercase py-1"
              >
                <span>Envio &amp; Garantia de Troca</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openAccordions.shipping ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.shipping && (
                <p
                  style={{ color: "var(--text-muted)" }}
                  className="mt-2 leading-relaxed font-light font-sans"
                >
                  {product.shippingInfo}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Produtos Relacionados */}
      {relatedProducts.length > 0 && (
        <section
          style={{ borderColor: "var(--border-main)" }}
          className="mt-24 pt-16 border-t"
        >
          <div className="flex items-center justify-between mb-8">
            <h2
              style={{ color: "var(--text-heading)" }}
              className="text-xl sm:text-2xl font-heading font-bold tracking-wide"
            >
              COMPLETE SEU LOOK / OUTROS MODELOS
            </h2>
            <Link
              href="/#colecao"
              style={{ color: "var(--accent-sand)" }}
              className="text-xs font-heading tracking-wider hover:underline"
            >
              VER TODOS &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Barra Fixa Flutuante de Compra */}
      <StickyPurchaseBar product={product} selectedSize={selectedSize} />
    </div>
  );
};
