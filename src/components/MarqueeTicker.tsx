import React from "react";

interface MarqueeTickerProps {
  text?: string[];
  inverted?: boolean;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  text = [
    "PUT YOUR MIND, MAKE IT HAPPEN",
    "DROP I / ESSENTIALS",
    "220 GSM HEAVYWEIGHT MALHA",
    "5-PANEL CONTRAST STITCH",
    "OS TRÊS CAMINHOS",
    "BRAZILIAN LUXURY STREETWEAR",
    "PUT YOUR MIND, MAKE IT HAPPEN",
    "DROP I / ESSENTIALS",
  ],
  inverted = false,
}) => {
  return (
    <div
      style={{
        borderColor: "var(--border-main)",
      }}
      className={`w-full overflow-hidden py-3 border-y select-none transition-colors duration-200 ${
        inverted
          ? "bg-[#111111] text-[#f5f5f5] dark:bg-white dark:text-black"
          : "bg-[var(--bg-card)] text-[var(--text-heading)]"
      }`}
      aria-hidden="true"
    >
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {/* Repetição dupla para efeito de looping infinito ininterrupto */}
        <div className="flex items-center space-x-8 text-xs font-heading tracking-widest uppercase">
          {text.map((item, idx) => (
            <span key={idx} className="flex items-center space-x-6">
              <span className="font-semibold">{item}</span>
              <span className="opacity-40 text-[10px]">◆</span>
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-8 text-xs font-heading tracking-widest uppercase pl-8">
          {text.map((item, idx) => (
            <span key={`dup-${idx}`} className="flex items-center space-x-6">
              <span className="font-semibold">{item}</span>
              <span className="opacity-40 text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
