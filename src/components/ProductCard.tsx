import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const primaryImg = product.images[0];
  const hoverImg = product.images[1] || product.images[0];

  return (
    <article
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-main)",
      }}
      className="group relative flex flex-col border hover:border-[#999] dark:hover:border-[#555] transition-all duration-300 rounded overflow-hidden shadow-sm hover:shadow-xl"
    >
      {/* Mídia do Produto com Troca no Hover */}
      <Link
        href={`/produto/${product.id}`}
        style={{ backgroundColor: "var(--bg-pill)" }}
        className="relative block w-full aspect-[4/5] overflow-hidden"
        aria-label={`Ver detalhes de ${product.name}`}
      >
        {/* Badge da Peça */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-20 bg-black/85 dark:bg-black/85 backdrop-blur-md text-white text-[10px] font-heading font-medium tracking-widest px-2.5 py-1 rounded border border-white/10 uppercase shadow-md">
            {product.badge}
          </span>
        )}

        {/* Imagem Principal */}
        <Image
          src={primaryImg.src}
          alt={primaryImg.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-opacity duration-500 ease-out group-hover:opacity-0"
        />

        {/* Imagem Secundária (On-Body ou Detalhe) no Hover */}
        <Image
          src={hoverImg.src}
          alt={hoverImg.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 scale-100 group-hover:scale-105"
        />
      </Link>

      {/* Informações da Peça */}
      <div className="flex flex-col flex-1 p-5 justify-between">
        <div>
          <div className="flex items-center justify-between text-[10px] font-heading tracking-widest uppercase mb-1.5 opacity-70">
            <span style={{ color: "var(--text-muted)" }}>{product.category}</span>
            <span className="font-mono text-[9px] opacity-60">{product.sku}</span>
          </div>

          <h3
            style={{ color: "var(--text-heading)" }}
            className="text-base font-heading font-semibold tracking-wide leading-snug group-hover:text-[#a88d6f] transition-colors duration-200"
          >
            <Link href={`/produto/${product.id}`}>{product.name}</Link>
          </h3>
        </div>

        <div
          style={{ borderColor: "var(--border-subtle)" }}
          className="mt-4 pt-4 border-t flex items-end justify-between"
        >
          <div>
            <p
              style={{ color: "var(--text-heading)" }}
              className="text-lg font-heading font-bold tracking-wide"
            >
              {product.priceFormatted}
            </p>
            <span
              style={{ color: "var(--text-muted)" }}
              className="text-[11px] font-sans block"
            >
              {product.installments}
            </span>
          </div>

          <Link
            href={`/produto/${product.id}`}
            style={{ color: "var(--text-heading)" }}
            className="flex items-center space-x-1.5 text-xs font-heading font-semibold tracking-wider hover:translate-x-0.5 transition-transform duration-200"
          >
            <span>VER PEÇA</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
};
