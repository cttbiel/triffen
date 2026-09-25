"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/types/product";
import { TRIFFEN_WHATSAPP_PHONE } from "@/data/products";

export interface CartItem {
  id: string; // `${productId}-${size}`
  productId: string;
  name: string;
  price: number;
  priceFormatted: string;
  size: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  subtotal: number;
  subtotalFormatted: string;
  whatsappCheckoutUrl: string;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Carregar do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("triffen-cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Erro ao carregar carrinho:", e);
    }
    setIsInitialized(true);
  }, []);

  // Salvar no localStorage sempre que o carrinho mudar
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem("triffen-cart", JSON.stringify(items));
    } catch (e) {
      console.error("Erro ao salvar carrinho:", e);
    }
  }, [items, isInitialized]);

  const addItem = (product: Product, size: string, quantity: number = 1) => {
    const itemId = `${product.id}-${size}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          priceFormatted: product.priceFormatted,
          size,
          image: product.images[0]?.src || "/assets/TRIFFEN_JHI_logo.jpg",
          quantity,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const subtotalFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(subtotal);

  // Mensagem padronizada para o WhatsApp
  const generateWhatsAppMessage = () => {
    if (items.length === 0) {
      return "Olá, Triffen! Gostaria de tirar uma dúvida sobre as peças.";
    }

    const itemsText = items
      .map(
        (item) =>
          `• ${item.quantity}x *${item.name}* (Tam: *${item.size}*) — ${new Intl.NumberFormat(
            "pt-BR",
            { style: "currency", currency: "BRL" }
          ).format(item.price * item.quantity)}`
      )
      .join("\n");

    const pixTotal = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(subtotal * 0.95);

    return `Olá, Triffen! 👋 Gostaria de garantir o seguinte pedido:\n\n${itemsText}\n\n*Total dos Produtos:* ${subtotalFormatted}\n*À vista no PIX (5% OFF):* ${pixTotal}\n*Entrega:* A combinar via WhatsApp\n\nComo podemos prosseguir com o pagamento e envio?`;
  };

  const whatsappCheckoutUrl = `https://wa.me/${TRIFFEN_WHATSAPP_PHONE}?text=${encodeURIComponent(
    generateWhatsAppMessage()
  )}`;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        subtotal,
        subtotalFormatted,
        whatsappCheckoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
