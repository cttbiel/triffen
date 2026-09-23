"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ProductImage } from "@/types/product";
import { ZoomIn, X } from "lucide-react";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  const activeImage = images[selectedIndex] || images[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgContainerRef.current) return;
    const rect = imgContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Imagem Principal com Efeito Lupa */}
      <div
        ref={imgContainerRef}
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
        onClick={() => setIsLightboxOpen(true)}
        className="relative w-full aspect-[4/5] bg-[#121212] border border-[#222222] rounded overflow-hidden cursor-crosshair select-none group"
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-opacity duration-300"
        />

        {/* Lente de Zoom Ampliado (Hover Magnifier) */}
        {isZooming && (
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none z-20"
            style={{
              backgroundImage: `url(${activeImage.src})`,
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
              backgroundSize: "240%",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}

        {/* Dica de Zoom / Tela Cheia */}
        <div className="absolute bottom-3 right-3 z-30 flex items-center space-x-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1.5 rounded text-[11px] text-[#ccc] font-heading tracking-wider border border-white/10 group-hover:text-white transition-colors duration-200">
          <ZoomIn size={13} />
          <span>CLIQUE PARA AMPLIAR</span>
        </div>
      </div>

      {/* Miniaturas da Galeria */}
      {images.length > 1 && (
        <div className="flex items-center space-x-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              onMouseEnter={() => setSelectedIndex(idx)}
              className={`relative w-20 h-24 rounded overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                selectedIndex === idx
                  ? "border-[#d5c5b2] scale-100 opacity-100"
                  : "border-[#262626] opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Modal Lightbox Tela Cheia */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Fechar visualização"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-colors duration-200 z-50"
          >
            <X size={24} />
          </button>
          <div
            className="relative w-full max-w-4xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
