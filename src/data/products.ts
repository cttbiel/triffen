import { Product, SizeChart } from "@/types/product";

export const TRIFFEN_WHATSAPP_PHONE = "5527996500097";

export const TRIFFEN_PRODUCTS: Product[] = [
  {
    id: "bone-5panel",
    slug: "bone-5-panel-stealth-black",
    name: "Triffen 5-Panel Cap — Stealth Black",
    category: "HEADWEAR / DROP I",
    sku: "TRF-ACC-5P01",
    price: 89.90,
    priceFormatted: "R$ 89,90",
    installments: "até 3x de R$ 29,97 sem juros",
    pixDiscount: "R$ 85,40 no PIX (5% OFF)",
    badge: "NOVO ACESSÓRIO",
    images: [
      {
        src: "/assets/boneLadoDireito.webp",
        alt: "Triffen 5-Panel Cap Stealth Black com pespontos brancos contrastantes — vista lateral 3/4"
      },
      {
        src: "/assets/boneFrente.webp",
        alt: "Triffen 5-Panel Cap — vista frontal e aba com costura concêntrica"
      },
      {
        src: "/assets/boneLado.webp",
        alt: "Triffen 5-Panel Cap — detalhe macro do bordado e costura reforçada"
      }
    ],
    sizes: [
      { size: "ÚNICO", stock: "Disponível (Edição Limitada)", available: true }
    ],
    description: "O 5-Panel Cap da Triffen materializa a atitude do streetwear autêntico com design minimalista de alta resistência. Confeccionado em tecido twill encorpado e durável, destaca-se pelo contraste dos pespontos brancos estruturais e pelo bordado clássico frontal em alto relevo. Possui modelagem anatômica de 5 gomos e fecho ajustável strapback com passador metálico fosco.",
    details: [
      "Construção anatômica clássica de 5 painéis (5-Panel Camper)",
      "Tecido Twill de Algodão Heavyweight resistente e durável",
      "Costura pespontada em linha branca de alta tenacidade em todas as divisórias",
      "Aba reta/levemente curvada com 4 linhas de costura concêntrica",
      "Bordado frontal Triffen de alta precisão com acabamento em relevo",
      "Ilhoses laterais metálicos para ventilação térmica",
      "Regulagem traseira strapback em fita reforçada com fivela metálica preta fosca",
      "Origem: Confeccionado no Espírito Santo (Serra/ES)"
    ],
    care: [
      "Limpar a seco ou com pano levemente umedecido em água fria e sabão neutro",
      "Não lavar em máquina de lavar roupa para não deformar a copa",
      "Secar à sombra em formato original",
      "Não torcer e não utilizar ferro de passar",
      "Guardar em local arejado sem dobrar a aba"
    ],
    shippingInfo: "Despacho a partir de Serra - ES para todo o Brasil. Entrega a combinar diretamente no WhatsApp."
  },
  {
    id: "bege",
    slug: "t-shirt-street-bege-triffen",
    name: "T-shirt Street Bege — Triffen",
    category: "ESSENTIALS / DROP I",
    sku: "TRF-TEE-BEG01",
    price: 100.00,
    priceFormatted: "R$ 100,00",
    installments: "até 3x de R$ 33,33 sem juros",
    pixDiscount: "R$ 95,00 no PIX (5% OFF)",
    badge: "MAIS VENDIDO",
    images: [
      {
        src: "/assets/TRIFFEN_camisa_bege_frente.webp",
        alt: "Triffen T-Shirt Street Bege - Visão frontal flat lay"
      },
      {
        src: "/assets/TRIFFEN_camisa_bege_modelo_f.webp",
        alt: "Modelo feminina vestindo Triffen T-Shirt Street Bege"
      },
      {
        src: "/assets/TRIFFEN_camisa_bege_modeloM_frente.webp",
        alt: "Modelo masculino vestindo Triffen T-Shirt Street Bege"
      }
    ],
    sizes: [
      { size: "P", stock: "Disponível", available: true },
      { size: "M", stock: "Últimas unidades", available: true },
      { size: "G", stock: "Disponível", available: true },
      { size: "GG", stock: "Disponível", available: true },
      { size: "XGG", stock: "Disponível", available: true }
    ],
    description: "Eleve seu estilo com a exclusiva T-shirt Street 100% Algodão 30.1 da Triffen, meticulosamente penteada para garantir toque nobre e caimento impecável. A gramatura robusta de 180g é uma verdadeira revolução, superando em até 30g os padrões comuns de mercado. Malha Confortjet peletizada com acabamento aveludado e aroma característico envolvente.",
    details: [
      "Malha nobre 100% Algodão 30.1 Penteado Confortjet Peletizada",
      "Gramatura robusta de 180g com caimento encorpado e estruturado",
      "Toque macio, aveludado e aroma singular característico",
      "Modelagem Streetwear Oversized Boxy autêntica com ombros descaídos",
      "Gola canelada em ribana 2x1 reforçada anti-alargamento",
      "Silk-screen de alta durabilidade e toque zero que não racha",
      "Origem: Confeccionada com orgulho no Espírito Santo (Serra/ES)"
    ],
    care: [
      "Lavar preferencialmente com peças de cores similares e água fria",
      "Não utilizar alvejantes ou produtos à base de cloro",
      "Secar à sombra em varal para preservar a malha e a cor",
      "Passar do avesso em temperatura moderada",
      "Não passar o ferro diretamente sobre a estampa"
    ],
    shippingInfo: "Despacho a partir de Serra - ES para todo o Brasil. Entrega a combinar diretamente no WhatsApp."
  },
  {
    id: "marrom",
    slug: "t-shirt-street-marrom-triffen",
    name: "T-shirt Street Marrom — Triffen",
    category: "ESSENTIALS / DROP I",
    sku: "TRF-TEE-BRN01",
    price: 100.00,
    priceFormatted: "R$ 100,00",
    installments: "até 3x de R$ 33,33 sem juros",
    pixDiscount: "R$ 95,00 no PIX (5% OFF)",
    badge: "DESTAQUE",
    images: [
      {
        src: "/assets/TRIFFEN_camisa_marrom_frente.webp",
        alt: "Triffen T-Shirt Street Marrom - Visão frontal flat lay"
      },
      {
        src: "/assets/JHI_modelo_costas_marrom.webp",
        alt: "Modelo vestindo Triffen T-Shirt Street Marrom - Estampa autoral nas costas"
      },
      {
        src: "/assets/lookbook_model_trail.webp",
        alt: "Modelo na trilha urbana vestindo Triffen T-Shirt Street Marrom e calça cargo"
      }
    ],
    sizes: [
      { size: "P", stock: "Disponível", available: true },
      { size: "M", stock: "Disponível", available: true },
      { size: "G", stock: "Últimas unidades", available: true },
      { size: "GG", stock: "Disponível", available: true },
      { size: "XGG", stock: "Disponível", available: true }
    ],
    description: "Com um tom terroso marcante e imponente, a T-shirt Street Marrom expressa identidade sólida e confiança. Confeccionada em malha 100% Algodão 30.1 Penteado de 180g Confortjet peletizada com arte autoral nas costas, é a peça indispensável para composições pesadas de streetwear.",
    details: [
      "Malha nobre 100% Algodão 30.1 Penteado Confortjet Peletizada",
      "Gramatura robusta de 180g com caimento pesado e elegante",
      "Toque macio, aveludado e aroma singular característico",
      "Modelagem Streetwear Oversized Boxy autêntica com ombros descaídos",
      "Estampa conceitual frontal e arte autoral Triffen nas costas",
      "Gola canelada em ribana 2x1 de 3cm que mantém a estrutura",
      "Origem: Confeccionada com orgulho no Espírito Santo (Serra/ES)"
    ],
    care: [
      "Lavar preferencialmente com peças de tons terrosos em água fria",
      "Não deixar de molho prolongado",
      "Secar à sombra em varal",
      "Passar do lado avesso",
      "Não passar o ferro sobre a estampa"
    ],
    shippingInfo: "Despacho a partir de Serra - ES para todo o Brasil. Entrega a combinar diretamente no WhatsApp."
  },
  {
    id: "roxa",
    slug: "t-shirt-street-roxa-triffen",
    name: "T-shirt Street Roxa — Triffen",
    category: "ESSENTIALS / DROP I",
    sku: "TRF-TEE-PRP01",
    price: 100.00,
    priceFormatted: "R$ 100,00",
    installments: "até 3x de R$ 33,33 sem juros",
    pixDiscount: "R$ 95,00 no PIX (5% OFF)",
    badge: "NOVIDADE",
    images: [
      {
        src: "/assets/TRIFFEN_camisa_roxa_frente.webp",
        alt: "Triffen T-Shirt Street Roxa - Visão frontal flat lay"
      },
      {
        src: "/assets/TRIFFEN_camisa_roxa_costas.webp",
        alt: "Triffen T-Shirt Street Roxa - Visão costas flat lay"
      },
      {
        src: "/assets/TRIFFEN_camisa_roxa_modeloM_frente.webp",
        alt: "Modelo masculino vestindo Triffen T-Shirt Street Roxa"
      }
    ],
    sizes: [
      { size: "P", stock: "Disponível", available: true },
      { size: "M", stock: "Disponível", available: true },
      { size: "G", stock: "Disponível", available: true },
      { size: "GG", stock: "Últimas unidades", available: true },
      { size: "XGG", stock: "Disponível", available: true }
    ],
    description: "Uma tonalidade profunda e expressiva que sintetiza a coragem do lema 'Put Your Mind, Make It Happen'. A T-shirt Street Roxa une corte solto, peso visual e toque aveludado em algodão 30.1 penteado 180g Confortjet.",
    details: [
      "Malha nobre 100% Algodão 30.1 Penteado Confortjet Peletizada",
      "Gramatura robusta de 180g",
      "Toque aveludado peletizado com aroma característico",
      "Modelagem Streetwear Oversized Boxy autêntica com ombros descaídos",
      "Silk-screen de alta fixação que preserva nitidez e cores",
      "Pesponto duplo nas junções de maior atrito",
      "Origem: Confeccionada com orgulho no Espírito Santo (Serra/ES)"
    ],
    care: [
      "Lavar com peças de tons similares em água fria",
      "Não alvejar",
      "Secagem em varal à sombra",
      "Passar do avesso em temperatura média",
      "Não lavar a seco"
    ],
    shippingInfo: "Despacho a partir de Serra - ES para todo o Brasil. Entrega a combinar diretamente no WhatsApp."
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
