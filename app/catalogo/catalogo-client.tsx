"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Catalog } from "@/components/catalog";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { useCart } from "@/contexts/cart-context";
import type { Product } from "@/lib/products";

export function CatalogoClient() {
  const { itemCount, addItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleAddToCart = (
    product: Product,
    quantity = 1,
    variations?: Record<string, string>
  ) => {
    addItem(product, quantity, variations);
  };

  return (
    <main className="min-h-screen">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      

     

      <Catalog onAddToCart={handleAddToCart} />

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
