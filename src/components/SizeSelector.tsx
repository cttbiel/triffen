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
    <div className="space-y-3 select-none">
      <div className="flex items-center justify-between text-xs">
        <span
          style={{ color: "var(--text-muted)" }}
          className="font-heading tracking-wider uppercase"
        >
          Tamanho Selecionado:{" "}
          <strong
            style={{ color: "var(--text-heading)" }}
            className="font-bold text-sm ml-1"
          >
            {selectedSize}
          </strong>
        </span>

        {!isHeadwear && (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            style={{ color: "var(--accent-sand)" }}
            className="flex items-center space-x-1.5 text-xs hover:underline font-heading tracking-wide transition-colors duration-200"
          >
            <Ruler size={14} />
            <span>Guia de Medidas</span>
          </button>
        )}
      </div>

      {/* Grid de Botões de Tamanho */}
      <div className="flex flex-wrap gap-2.5">
        {sizes.map((s) => {
          const isSelected = selectedSize === s.size;
          return (
            <button
              key={s.size}
              type="button"
              onClick={() => onSelectSize(s.size)}
              disabled={!s.available}
              style={{
                backgroundColor: isSelected
                  ? "var(--text-heading)"
                  : "var(--bg-card)",
                color: isSelected
                  ? "var(--bg-page)"
                  : "var(--text-body)",
                borderColor: isSelected
                  ? "var(--text-heading)"
                  : "var(--border-main)",
              }}
              className={`min-w-[48px] h-12 px-4 rounded border text-xs font-heading font-semibold tracking-wider transition-all duration-200 flex items-center justify-center shadow-sm hover:scale-[1.03] ${
                !s.available ? "opacity-30 cursor-not-allowed line-through" : ""
              }`}
            >
              {s.size}
            </button>
          );
        })}
      </div>

      {/* Feedback de Estoque / Status */}
      <p
        style={{ color: "var(--text-muted)" }}
        className="text-[11px] font-sans flex items-center space-x-2 pt-0.5"
      >
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-main)",
              color: "var(--text-heading)",
            }}
            className="border rounded-lg max-w-lg w-full p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{ borderColor: "var(--border-main)" }}
              className="flex items-center justify-between border-b pb-3"
            >
              <h3 className="text-base font-heading font-bold tracking-wide">
                TABELA DE MEDIDAS OFICIAL (EM CM)
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ color: "var(--text-muted)" }}
                className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>

            <p
              style={{ color: "var(--text-muted)" }}
              className="text-xs font-sans"
            >
              Modelagem Streetwear Oversized Boxy. Meça uma peça favorita esticada em superfície plana.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr
                    style={{
                      borderColor: "var(--border-main)",
                      color: "var(--text-muted)",
                    }}
                    className="border-b font-heading tracking-wider"
                  >
                    {TRIFFEN_SIZE_CHART.columns.map((col, idx) => (
                      <th key={idx} className="py-2.5 px-2">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody
                  style={{ borderColor: "var(--border-subtle)" }}
                  className="divide-y font-mono text-[11px]"
                >
                  {TRIFFEN_SIZE_CHART.rows.map((row) => {
                    const isSelected = row.size === selectedSize;
                    return (
                      <tr
                        key={row.size}
                        style={{
                          backgroundColor: isSelected
                            ? "var(--bg-pill)"
                            : "transparent",
                          color: isSelected
                            ? "var(--text-heading)"
                            : "var(--text-body)",
                        }}
                      >
                        <td className="py-2.5 px-2 font-heading font-bold">{row.size}</td>
                        <td className="py-2.5 px-2">{row.chest}</td>
                        <td className="py-2.5 px-2">{row.length}</td>
                        <td className="py-2.5 px-2">{row.sleeve}</td>
                        <td className="py-2.5 px-2">{row.shoulder}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div
              style={{
                backgroundColor: "var(--bg-pill)",
                color: "var(--text-muted)",
              }}
              className="p-3 rounded text-[11px] space-y-1"
            >
              <p>💡 <strong>Tórax:</strong> Medida de cava a cava frontal.</p>
              <p>💡 <strong>Comprimento:</strong> Do topo da gola até a barra.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
