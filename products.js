/**
 * TRIFFEN - Catálogo de Produtos e Coleções
 * Estrutura modular de dados para alimentar a loja e páginas de produtos dinamicamente.
 */

const TRIFFEN_WHATSAPP_PHONE = "5527996500097";

const TRIFFEN_PRODUCTS = [
  {
    id: "bege",
    slug: "t-shirt-oversized-bege",
    name: "Triffen T-Shirt Oversized Bege",
    category: "DROP I / ESSENTIALS",
    price: 149.90,
    priceFormatted: "R$ 149,90",
    installments: "até 3x de R$ 49,97 sem juros",
    pixDiscount: "R$ 142,40 com 5% de desconto no PIX",
    badge: "MAIS VENDIDO",
    images: [
      {
        src: "assets/TRIFFEN_camisa_bege_frente.jpg",
        alt: "Triffen T-Shirt Oversized Bege - Visão frontal com estampa central"
      },
      {
        src: "assets/TRIFFEN_camisa_bege_modelo_f.jpg",
        alt: "Modelo feminina vestindo Triffen T-Shirt Oversized Bege"
      },
      {
        src: "assets/TRIFFEN_camisa_bege_modeloM_frente.jpg",
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
    description: "A T-Shirt Oversized Bege da Triffen representa a união perfeita entre o minimalismo contemporâneo e o streetwear autêntico. Desenvolvida em modelagem boxy com ombros caídos e malha encorpada, garante caimento estruturado e conforto premium para qualquer momento do dia.",
    details: [
      "Malha 100% Algodão Heavyweight Penteado (220g/m²)",
      "Gola canelada em ribana 2x1 com 3cm de espessura que não deforma",
      "Modelagem Oversized Boxy com caimento impecável",
      "Estampa frontal em silk-screen de alta durabilidade e toque zero",
      "Reforço de costura ombro a ombro e acabamento pespontado",
      "Etiqueta interna estampada para máximo conforto sem atrito"
    ],
    care: [
      "Lavar preferencialmente à mão ou no ciclo delicado com água fria",
      "Não utilizar alvejantes ou produtos abrasivos",
      "Secar à sombra em varal para preservar o tecido e a cor original",
      "Passar do avesso em temperatura média (máx. 110°C), evitando ferro direto na estampa",
      "Não lavar a seco"
    ],
    shippingInfo: "Envio para todo o Brasil em até 24h úteis após confirmação. Primeira troca grátis em até 7 dias corridos após o recebimento."
  },
  {
    id: "marrom",
    slug: "t-shirt-oversized-marrom",
    name: "Triffen T-Shirt Oversized Marrom",
    category: "DROP I / ESSENTIALS",
    price: 149.90,
    priceFormatted: "R$ 149,90",
    installments: "até 3x de R$ 49,97 sem juros",
    pixDiscount: "R$ 142,40 com 5% de desconto no PIX",
    badge: "DESTAQUE",
    images: [
      {
        src: "assets/TRIFFEN_camisa_marrom_frente.jpg",
        alt: "Triffen T-Shirt Oversized Marrom - Visão frontal"
      },
      {
        src: "assets/JHI_modelo_costas_marrom.JPG",
        alt: "Modelo vestindo Triffen T-Shirt Oversized Marrom - Visão costas com estampa autoral"
      }
    ],
    sizes: [
      { size: "P", stock: "Disponível", available: true },
      { size: "M", stock: "Disponível", available: true },
      { size: "G", stock: "Últimas unidades", available: true },
      { size: "GG", stock: "Disponível", available: true },
      { size: "XGG", stock: "Disponível", available: true }
    ],
    description: "Com um tom terroso marcante e sofisticado, a T-Shirt Oversized Marrom expressa identidade sólida e postura. Produzida em algodão nobre com toque macio e gramatura alta, é a peça-chave para compor sobreposições e visuais streetwear refinados.",
    details: [
      "Malha 100% Algodão Heavyweight Penteado (220g/m²)",
      "Gola canelada em ribana 2x1 com 3cm de espessura",
      "Modelagem Streetwear Oversized autêntica",
      "Estampa de alta definição frontal e arte autoral nas costas",
      "Costuras reforçadas e acabamento premium",
      "Tecido pré-encolhido que evita surpresas na lavagem"
    ],
    care: [
      "Lavar preferencialmente à mão ou ciclo delicado com água fria",
      "Não utilizar alvejantes ou amaciantes em excesso",
      "Secar à sombra em superfície plana ou varal",
      "Passar do lado avesso para preservar a estampa",
      "Não secar em tambor"
    ],
    shippingInfo: "Envio rápido para todo o território nacional. Embalagem exclusiva Triffen para presente."
  },
  {
    id: "roxa",
    slug: "t-shirt-oversized-roxa",
    name: "Triffen T-Shirt Oversized Roxa",
    category: "DROP I / ESSENTIALS",
    price: 149.90,
    priceFormatted: "R$ 149,90",
    installments: "até 3x de R$ 49,97 sem juros",
    pixDiscount: "R$ 142,40 com 5% de desconto no PIX",
    badge: "NOVIDADE",
    images: [
      {
        src: "assets/TRIFFEN_camisa_roxa_frente.jpg",
        alt: "Triffen T-Shirt Oversized Roxa - Visão frontal"
      },
      {
        src: "assets/TRIFFEN_camisa_roxa_costas.jpg",
        alt: "Triffen T-Shirt Oversized Roxa - Visão costas flat lay"
      },
      {
        src: "assets/TRIFFEN_camisa_roxa_modeloM_frente.JPG",
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
    description: "Uma tonalidade vibrante e expressiva que sintetiza a ousadia do streetwear. A T-Shirt Oversized Roxa traz o manifesto 'Put Your Mind, Make It Happen' para o cotidiano de quem dita suas próprias regras e vive com autenticidade.",
    details: [
      "Malha 100% Algodão Heavyweight Penteado (220g/m²)",
      "Gola canelada em ribana 2x1 de 3cm",
      "Modelagem Boxy com caimento solto e estruturado",
      "Estampa frontal e traseira com acabamento silk screen de toque aveludado",
      "Pesponto duplo nas cavas e barra",
      "Resistência superior a lavagens mantendo o tom roxo vivo"
    ],
    care: [
      "Lavar com peças de cores similares com água fria",
      "Não deixar de molho prolongado e não alvejar",
      "Secagem em varal à sombra",
      "Passar do avesso em temperatura moderada",
      "Não limpar a seco"
    ],
    shippingInfo: "Despacho em até 24h úteis. Rastreamento em tempo real via WhatsApp e E-mail."
  }
];

// Tabela de medidas oficial da Triffen (em centímetros)
const TRIFFEN_SIZE_CHART = {
  columns: ["Tamanho", "Tórax / Peito", "Comprimento", "Manga", "Ombro a Ombro"],
  rows: [
    { size: "P", chest: "56 cm", length: "74 cm", sleeve: "23 cm", shoulder: "52 cm" },
    { size: "M", chest: "58 cm", length: "76 cm", sleeve: "24 cm", shoulder: "54 cm" },
    { size: "G", chest: "61 cm", length: "78 cm", sleeve: "25 cm", shoulder: "57 cm" },
    { size: "GG", chest: "64 cm", length: "80 cm", sleeve: "26 cm", shoulder: "60 cm" },
    { size: "XGG", chest: "67 cm", length: "82 cm", sleeve: "27 cm", shoulder: "63 cm" }
  ]
};

// Funções auxiliares de busca de produto
function getProductById(id) {
  if (!id) return TRIFFEN_PRODUCTS[0];
  const normalizedId = id.toString().toLowerCase().trim();
  return TRIFFEN_PRODUCTS.find(p => p.id === normalizedId || p.slug === normalizedId) || TRIFFEN_PRODUCTS[0];
}

function getAllProducts() {
  return TRIFFEN_PRODUCTS;
}
