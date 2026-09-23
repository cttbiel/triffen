import { Product, SizeChart } from "@/types/product";

export const TRIFFEN_WHATSAPP_PHONE = "5527996500097";

export const TRIFFEN_PRODUCTS: Product[] = [
  {
    id: "bone-5panel",
    slug: "bone-5-panel-stealth-black",
    name: "Triffen 5-Panel Cap — Stealth Black / Contrast Stitch",
    category: "HEADWEAR / DROP I",
    sku: "TRF-ACC-5P01",
    price: 129.90,
    priceFormatted: "R$ 129,90",
    installments: "até 3x de R$ 43,30 sem juros",
    pixDiscount: "R$ 123,40 com 5% de desconto no PIX",
    badge: "NOVO ACESSÓRIO",
    images: [
      {
        src: "/assets/boneLadoDireito.jpeg",
        alt: "Triffen 5-Panel Cap Stealth Black com pespontos brancos contrastantes — vista lateral 3/4"
      },
      {
        src: "/assets/boneFrente.jpeg",
        alt: "Triffen 5-Panel Cap — vista frontal e aba com costura concêntrica"
      },
      {
        src: "/assets/boneLado.jpeg",
        alt: "Triffen 5-Panel Cap — detalhe macro do bordado e costura reforçada"
      }
    ],
    sizes: [
      { size: "ÚNICO", stock: "Disponível (Edição Limitada)", available: true }
    ],
    description: "O 5-Panel Cap da Triffen materializa a atitude do streetwear autêntico com design minimalista de alta engenharia. Confeccionado em tecido twill encorpado e durável, destaca-se pelo contraste dos pespontos brancos estruturais e pelo bordado clássico frontal em alto relevo. Possui modelagem anatômica de 5 gomos e fecho ajustável strapback com passador metálico fosco.",
    details: [
      "Construção anatômica clássica de 5 painéis (5-Panel Camper)",
      "Tecido Twill de Algodão Heavyweight resistente à abrasão e intempéries",
      "Costura pespontada em linha branca de alta tenacidade em todas as divisórias",
      "Aba reta/levemente curvada com 4 linhas de costura concêntrica",
      "Bordado frontal Triffen de alta precisão com acabamento em relevo",
      "Ilhoses laterais metálicos para ventilação térmica",
      "Regulagem traseira strapback em fita reforçada com fivela metálica preta fosca"
    ],
    care: [
      "Limpar a seco ou com pano levemente umedecido em água fria e sabão neutro",
      "Não lavar em máquina de lavar roupa ou tanquinho para não deformar a copa",
      "Secar à sombra em formato original",
      "Não torcer e não utilizar ferro de passar",
      "Guardar em local arejado sem dobrar a aba"
    ],
    shippingInfo: "Despacho em até 24h úteis. Embalagem rígida protetora anti-amassamento. Primeira troca grátis em até 7 dias."
  },
  {
    id: "bege",
    slug: "t-shirt-oversized-bege",
    name: "Triffen T-Shirt Oversized Bege",
    category: "ESSENTIALS / DROP I",
    sku: "TRF-TEE-BEG01",
    price: 149.90,
    priceFormatted: "R$ 149,90",
    installments: "até 3x de R$ 49,97 sem juros",
    pixDiscount: "R$ 142,40 com 5% de desconto no PIX",
    badge: "MAIS VENDIDO",
    images: [
      {
        src: "/assets/TRIFFEN_camisa_bege_frente.jpg",
        alt: "Triffen T-Shirt Oversized Bege - Visão frontal flat lay"
      },
      {
        src: "/assets/TRIFFEN_camisa_bege_modelo_f.jpg",
        alt: "Modelo feminina vestindo Triffen T-Shirt Oversized Bege"
      },
      {
        src: "/assets/TRIFFEN_camisa_bege_modeloM_frente.jpg",
        alt: "Modelo masculino vestindo Triffen T-Shirt Oversized Bege"
      }
    ],
    sizes: [
      { size: "P", stock: "Disponível", available: true },
      { size: "M", stock: "Últimas unidades", available: true },
      { size: "G", stock: "Disponível", available: true },
      { size: "GG", stock: "Disponível", available: true },
      { size: "XGG", stock: "Sob encomenda", available: true }
    ],
    description: "A T-Shirt Oversized Bege da Triffen representa a união entre o minimalismo sofisticado e o streetwear pesado contemporâneo. Desenvolvida em modelagem boxy com ombros caídos e malha encorpada de 220g/m², garante caimento estruturado e presença imponente em qualquer ambiente.",
    details: [
      "Malha 100% Algodão Heavyweight Penteado (220g/m²)",
      "Gola canelada em ribana 2x1 com 3cm de espessura que não alarga",
      "Modelagem Oversized Boxy autêntica com ombros descaídos",
      "Estampa frontal em silk-screen de toque aveludado e altíssima durabilidade",
      "Costura reforçada ombro a ombro com acabamento pespontado",
      "Tecido pré-encolhido termofixado que evita deformações pós-lavagem"
    ],
    care: [
      "Lavar preferencialmente à mão ou ciclo delicado com água fria",
      "Não utilizar alvejantes ou produtos com cloro",
      "Secar à sombra em varal para preservar a malha e cor original",
      "Passar do avesso em temperatura moderada (máx. 110°C)",
      "Não passar ferro diretamente sobre a estampa"
    ],
    shippingInfo: "Envio para todo o Brasil em até 24h úteis após confirmação. Primeira troca grátis em até 7 dias corridos."
  },
  {
    id: "marrom",
    slug: "t-shirt-oversized-marrom",
    name: "Triffen T-Shirt Oversized Marrom",
    category: "ESSENTIALS / DROP I",
    sku: "TRF-TEE-BRN01",
    price: 149.90,
    priceFormatted: "R$ 149,90",
    installments: "até 3x de R$ 49,97 sem juros",
    pixDiscount: "R$ 142,40 com 5% de desconto no PIX",
    badge: "DESTAQUE",
    images: [
      {
        src: "/assets/TRIFFEN_camisa_marrom_frente.jpg",
        alt: "Triffen T-Shirt Oversized Marrom - Visão frontal flat lay"
      },
      {
        src: "/assets/JHI_modelo_costas_marrom.JPG",
        alt: "Modelo vestindo Triffen T-Shirt Oversized Marrom - Estampa autoral nas costas"
      },
      {
        src: "/assets/lookbook_model_trail.jpg",
        alt: "Modelo na trilha urbana vestindo Triffen T-Shirt Oversized Marrom e calça cargo"
      }
    ],
    sizes: [
      { size: "P", stock: "Disponível", available: true },
      { size: "M", stock: "Disponível", available: true },
      { size: "G", stock: "Últimas unidades", available: true },
      { size: "GG", stock: "Disponível", available: true },
      { size: "XGG", stock: "Disponível", available: true }
    ],
    description: "Com um tom terroso marcante e maduro, a T-Shirt Oversized Marrom expressa identidade sólida e confiança. Produzida em algodão nobre de gramatura superior com arte autoral nas costas, é a peça indispensável para sobreposições de impacto.",
    details: [
      "Malha 100% Algodão Heavyweight Penteado (220g/m²)",
      "Gola canelada em ribana 2x1 com 3cm de espessura",
      "Modelagem Streetwear Oversized Boxy",
      "Estampa de alta definição frontal e arte conceitual Triffen nas costas",
      "Costuras pespontadas duplas nas cavas e barra",
      "Tecido nobre pré-lavado e amaciado"
    ],
    care: [
      "Lavar preferencialmente com peças de cores similares e água fria",
      "Não deixar de molho prolongado",
      "Secar à sombra em varal",
      "Passar do lado avesso",
      "Não lavar a seco"
    ],
    shippingInfo: "Envio rápido para todo o território nacional. Embalagem exclusiva Triffen."
  },
  {
    id: "roxa",
    slug: "t-shirt-oversized-roxa",
    name: "Triffen T-Shirt Oversized Roxa",
    category: "ESSENTIALS / DROP I",
    sku: "TRF-TEE-PRP01",
    price: 149.90,
    priceFormatted: "R$ 149,90",
    installments: "até 3x de R$ 49,97 sem juros",
    pixDiscount: "R$ 142,40 com 5% de desconto no PIX",
    badge: "NOVIDADE",
    images: [
      {
        src: "/assets/TRIFFEN_camisa_roxa_frente.jpg",
        alt: "Triffen T-Shirt Oversized Roxa - Visão frontal flat lay"
      },
      {
        src: "/assets/TRIFFEN_camisa_roxa_costas.jpg",
        alt: "Triffen T-Shirt Oversized Roxa - Visão costas flat lay"
      },
      {
        src: "/assets/TRIFFEN_camisa_roxa_modeloM_frente.JPG",
        alt: "Modelo masculino vestindo Triffen T-Shirt Oversized Roxa"
      }
    ],
    sizes: [
      { size: "P", stock: "Disponível", available: true },
      { size: "M", stock: "Disponível", available: true },
      { size: "G", stock: "Disponível", available: true },
      { size: "GG", stock: "Últimas unidades", available: true },
      { size: "XGG", stock: "Disponível", available: true }
    ],
    description: "Uma tonalidade profunda e expressiva que sintetiza a coragem do lema 'Put Your Mind, Make It Happen'. A T-Shirt Oversized Roxa quebra o comum com equilíbrio e personalidade, combinando corte amplo e toque macio.",
    details: [
      "Malha 100% Algodão Heavyweight Penteado (220g/m²)",
      "Gola canelada em ribana 2x1 de 3cm",
      "Modelagem Boxy com caimento solto e estruturado",
      "Silk screen de alta precisão na frente e nas costas",
      "Pesponto duplo nas junções de maior atrito",
      "Cor resistente com solidez a lavagens frequentes"
    ],
    care: [
      "Lavar com peças de tons escuros/similares em água fria",
      "Não alvejar",
      "Secagem em varal à sombra",
      "Passar do avesso em temperatura média",
      "Não lavar a seco"
    ],
    shippingInfo: "Despacho em até 24h úteis com rastreamento ativo."
  }
];

export const TRIFFEN_SIZE_CHART: SizeChart = {
  columns: ["TAMANHO", "TÓRAX / PEITO", "COMPRIMENTO", "MANGA", "OMBRO A OMBRO"],
  rows: [
    { size: "P", chest: "56 cm", length: "74 cm", sleeve: "23 cm", shoulder: "52 cm" },
    { size: "M", chest: "58 cm", length: "76 cm", sleeve: "24 cm", shoulder: "54 cm" },
    { size: "G", chest: "61 cm", length: "78 cm", sleeve: "25 cm", shoulder: "57 cm" },
    { size: "GG", chest: "64 cm", length: "80 cm", sleeve: "26 cm", shoulder: "60 cm" },
    { size: "XGG", chest: "67 cm", length: "82 cm", sleeve: "27 cm", shoulder: "63 cm" }
  ]
};

export function getProductById(id: string): Product | undefined {
  if (!id) return undefined;
  const clean = id.toLowerCase().trim();
  return TRIFFEN_PRODUCTS.find(p => p.id === clean || p.slug === clean);
}

export function getAllProducts(): Product[] {
  return TRIFFEN_PRODUCTS;
}
