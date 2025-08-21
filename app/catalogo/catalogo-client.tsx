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

      {/* Header optimizado con mejor jerarquía visual */}
      <section className="pt-24 pb-8 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Contenido principal */}
            <div className="lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4 font-medium">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Productos Disponibles
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight leading-tight">
                Catálogo de
                <span className="text-primary"> Productos</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Descubre nuestra completa gama de soluciones para
                automatización. Productos de calidad profesional respaldados por
                décadas de experiencia.
              </p>

              {/* Estadísticas compactas */}
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">100+ Productos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">
                    Garantía Incluida
                  </span>
                </div>
              </div>
            </div>

            {/* CTA secundario */}
            <div className="lg:text-right">
              <p className="text-sm text-muted-foreground mb-3">
                ¿Necesitas ayuda?
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors">
                  Contactar Asesor
                </button>
                <button className="px-4 py-2 border border-border hover:bg-muted/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Guía de Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación de categorías rápida */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Categorías:
            </span>
            {[
              "Motores",
              "Repuestos",
              "Sistemas de Control",
              "Accesorios",
              "Kits Completos",
            ].map((category) => (
              <button
                key={category}
                className="px-3 py-1.5 bg-background hover:bg-muted border border-border/50 rounded-full text-sm font-medium whitespace-nowrap transition-colors hover:border-primary/50"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Catalog onAddToCart={handleAddToCart} />

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
