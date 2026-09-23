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
    <article className="group relative flex flex-col bg-[#121212] border border-[#222222] hover:border-[#444444] transition-all duration-300 rounded overflow-hidden">
      {/* Mídia do Produto com Troca no Hover */}
      <Link
        href={`/produto/${product.id}`}
        className="relative block w-full aspect-[4/5] bg-[#0c0c0c] overflow-hidden"
        aria-label={`Ver detalhes de ${product.name}`}
      >
        {/* Badge da Peça */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-20 bg-black/85 backdrop-blur-md text-white text-[10px] font-heading font-medium tracking-widest px-2.5 py-1 rounded border border-white/10 uppercase">
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
          <div className="flex items-center justify-between text-[10px] font-heading tracking-widest text-[#888888] uppercase mb-1.5">
            <span>{product.category}</span>
            <span className="font-mono text-[9px] opacity-60">{product.sku}</span>
          </div>

          <h3 className="text-base font-heading font-semibold text-white tracking-wide leading-snug group-hover:text-[#d5c5b2] transition-colors duration-200">
            <Link href={`/produto/${product.id}`}>{product.name}</Link>
          </h3>
        </div>

        <div className="mt-4 pt-4 border-t border-[#1e1e1e] flex items-end justify-between">
          <div>
            <p className="text-lg font-heading font-bold text-white tracking-wide">
              {product.priceFormatted}
            </p>
            <span className="text-[11px] text-[#888888] font-sans block">
              {product.installments}
            </span>
          </div>

          <Link
            href={`/produto/${product.id}`}
            className="flex items-center space-x-1.5 text-xs font-heading font-semibold text-white tracking-wider group-hover:text-[#d5c5b2] transition-colors duration-200"
          >
            <span>VER PEÇA</span>
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
