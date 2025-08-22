"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ProductCard } from "@/components/product-card";
import { HeroSection } from "@/components/hero";
import { AboutUs } from "@/components/about-us";
import { Location } from "@/components/location";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SocialProofSection } from "@/components/social-proof";
import { useCart } from "@/contexts/cart-context";
import type { Product } from "@/lib/products";

// Componente de sección de características principales
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Garantía Extendida",
      description: "Hasta 3 años de garantía en instalación y productos",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Instalación Rápida",
      description: "Instalación profesional en el mismo día",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Soporte 24/7",
      description: "Atención y consultas disponibles siempre",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "30 Años de Experiencia",
      description: "Tradición familiar en automatización de portones",
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4 font-medium">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            ¿Por qué elegir PORTONES PM?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu Tranquilidad es Nuestra Prioridad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos experiencia, tecnología y servicio personalizado para
            brindarte las mejores soluciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/20 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente de sección CTA mejorada
function CTASection() {
  return (
    <section className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Listo para automatizar tu portón?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Obtén una cotización personalizada sin compromiso. Nuestros
              especialistas evaluarán tu proyecto y te brindarán la mejor
              solución.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Presupuesto gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Respuesta en 24h</span>
              </div>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
                Solicitar Cotización
              </button>
              <button className="px-8 py-3 border border-border hover:bg-muted/50 rounded-lg font-semibold transition-colors">
                Ver Catálogo
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              🕐 Respuesta garantizada en menos de 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { itemCount, addItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [modalQuantity, setModalQuantity] = useState(1);

  const handleCartClick = () => setIsCartOpen(true);
  const handleAddToCart = (product: Product, quantity = 1, variations?: Record<string, string>) => {
    addItem(product, quantity, variations);
    setIsCartOpen(true);
  };
  const handleOpenModal = (product: Product) => {
    setModalProduct(product);
    setModalQuantity(1);
  };
  const handleCloseModal = () => setModalProduct(null);

  return (
    <main className="min-h-screen">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      <HeroSection />

      <FeaturesSection />

      {/* Sección de productos destacados en vez de catálogo completo */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Productos Destacados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Conoce nuestros productos más populares y recomendados.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(require("@/lib/products").mockProducts as Product[])
              .filter((p: Product) => p.featured)
              .slice(0, 4)
              .map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
          </div>
        </div>
      </section>

      <SocialProofSection />

      <AboutUs />

      <CTASection />

      <Location />

      <ContactForm />

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
