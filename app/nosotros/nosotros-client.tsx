"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { AboutUs } from "@/components/about-us";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SocialProofSection } from "@/components/social-proof";
import { useCart } from "@/contexts/cart-context";

export function NosotrosClient() {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      {/* Header con enfoque en storytelling */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido principal */}
            <div>
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-6 font-medium">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Nuestra Historia
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                Tres Décadas de
                <span className="text-primary"> Excelencia</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Desde 1994, hemos sido pioneros en automatización de portones,
                combinando tradición artesanal con innovación tecnológica.
              </p>

              {/* Valores clave */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-foreground">
                      Calidad
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Productos duraderos y confiables
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold text-foreground">
                      Experiencia
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    30+ años en el mercado
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-semibold text-foreground">
                      Innovación
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tecnología de vanguardia
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="font-semibold text-foreground">
                      Servicio
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Atención personalizada
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline visual mejorada */}
            <div className="lg:pl-8">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">1994</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">
                      Fundación
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Inicio como taller familiar especializado en reparación de
                      motores.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 border-2 border-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">
                      2005
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">
                      Expansión
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Incorporación de sistemas automatizados y nuevas
                      tecnologías.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 border-2 border-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-green-600">
                      2015
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">
                      Modernización
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Adopción de sistemas inteligentes y control remoto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 border-2 border-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-purple-600">
                      2025
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">
                      Presente
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Líderes en automatización con soluciones IoT y domótica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas */}
      <section className="py-12 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">
                Años de Experiencia
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">
                Proyectos Completados
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">
                Satisfacción Cliente
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Soporte Técnico
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />

      <SocialProofSection />

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
