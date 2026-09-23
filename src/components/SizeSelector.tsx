"use client";

import React, { useState } from "react";
import { SizeOption } from "@/types/product";
import { TRIFFEN_SIZE_CHART } from "@/data/products";
import { Ruler, X } from "lucide-react";

interface SizeSelectorProps {
  sizes: SizeOption[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
  isHeadwear?: boolean;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
  isHeadwear = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentSizeObj = sizes.find((s) => s.size === selectedSize) || sizes[0];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-heading tracking-wider text-[#aaa] uppercase">
          Tamanho Selecionado:{" "}
          <strong className="text-white font-bold">{selectedSize}</strong>
        </span>

        {!isHeadwear && (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-1.5 text-xs text-[#d5c5b2] hover:text-white transition-colors duration-200 underline font-heading tracking-wide"
          >
            <Ruler size={14} />
            <span>Guia de Medidas</span>
          </button>
        )}
      </div>

      {/* Grid de Botões de Tamanho */}
      <div className="flex flex-wrap gap-2.5">
        {sizes.map((s) => (
          <button
            key={s.size}
            type="button"
            onClick={() => onSelectSize(s.size)}
            disabled={!s.available}
            className={`min-w-[48px] h-12 px-4 rounded border text-xs font-heading font-semibold tracking-wider transition-all duration-200 flex items-center justify-center ${
              selectedSize === s.size
                ? "bg-white text-black border-white shadow-lg"
                : "bg-[#141414] text-[#ccc] border-[#262626] hover:border-[#555] hover:text-white"
            } ${!s.available ? "opacity-30 cursor-not-allowed line-through" : ""}`}
          >
            {s.size}
          </button>
        ))}
      </div>

      {/* Feedback de Estoque / Status */}
      <p className="text-[11px] text-[#888] font-sans flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00c9a7]"></span>
        <span>
          Tamanho {selectedSize}: {currentSizeObj?.stock || "Disponível para envio imediato"}
        </span>
      </p>

      {/* Modal Guia de Medidas */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#121212] border border-[#2a2a2a] rounded-lg max-w-lg w-full p-6 text-white space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#222] pb-3">
              <h3 className="text-base font-heading font-bold tracking-wide">
                TABELA DE MEDIDAS OFICIAL (EM CM)
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#aaa] hover:text-white transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-[#888] font-sans">
              Modelagem Streetwear Oversized Boxy. Meça uma peça favorita esticada em superfície plana.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#262626] text-[#888] font-heading tracking-wider">
                    {TRIFFEN_SIZE_CHART.columns.map((col, idx) => (
                      <th key={idx} className="py-2.5 px-2">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1c1c1c] font-mono text-[11px]">
                  {TRIFFEN_SIZE_CHART.rows.map((row) => (
                    <tr
                      key={row.size}
                      className={
                        row.size === selectedSize
                          ? "bg-white/5 text-[#d5c5b2] font-bold"
                          : "text-[#ccc]"
                      }
                    >
                      <td className="py-2.5 px-2 font-heading font-bold">{row.size}</td>
                      <td className="py-2.5 px-2">{row.chest}</td>
                      <td className="py-2.5 px-2">{row.length}</td>
                      <td className="py-2.5 px-2">{row.sleeve}</td>
                      <td className="py-2.5 px-2">{row.shoulder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#181818] p-3 rounded text-[11px] text-[#999] space-y-1">
              <p>💡 <strong>Tórax:</strong> Medida de cava a cava frontal.</p>
              <p>💡 <strong>Comprimento:</strong> Do topo da gola até a barra.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
