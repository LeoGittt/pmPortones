"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Location } from "@/components/location";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { FAQSection } from "@/components/faq-section";
import { useCart } from "@/contexts/cart-context";

export function ContactoClient() {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      {/* Header optimizado para conversión */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido principal */}
            <div>
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-6 font-medium">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Ponte en Contacto
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                Conversemos sobre tu
                <span className="text-primary"> Proyecto</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Nuestro equipo de expertos está listo para ayudarte a encontrar
                la solución perfecta para tus necesidades de automatización.
              </p>

              {/* Beneficios de contactar */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">
                      Consulta gratuita
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Evaluación sin costo de tu proyecto
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">
                      Respuesta en 24h
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Contacto garantizado en menos de un día
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">
                      Presupuesto personalizado
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Cotización adaptada a tu presupuesto
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Métodos de contacto rápido */}
            <div className="lg:pl-8">
              <div className="bg-muted/30 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-foreground mb-4">
                  Contacto Directo
                </h3>

                <a
                  href="tel:+5491234567890"
                  className="flex items-center gap-4 p-4 bg-background hover:bg-muted/50 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      Llamar Ahora
                    </div>
                    <div className="text-sm text-muted-foreground">
                      +54 9 11 2345-6789
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/5491234567890"
                  className="flex items-center gap-4 p-4 bg-background hover:bg-muted/50 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">
                      Mensaje instantáneo
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@portonespm.com"
                  className="flex items-center gap-4 p-4 bg-background hover:bg-muted/50 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">
                      info@portonespm.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Horarios de atención */}
              <div className="mt-6 p-4 bg-background border border-border/50 rounded-xl">
                <h4 className="font-medium text-foreground mb-3">
                  Horarios de Atención
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Lunes a Viernes
                    </span>
                    <span className="text-foreground">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábados</span>
                    <span className="text-foreground">9:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA para acción inmediata */}
      <section className="py-8 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground">
                ¿Necesitas atención inmediata?
              </h3>
              <p className="text-sm text-muted-foreground">
                Nuestro equipo técnico está disponible para consultas
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Llamar Ahora
              </button>
              <button className="px-6 py-2 border border-border hover:bg-muted/50 rounded-lg font-medium transition-colors">
                Programar Visita
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <FAQSection />

      <Location />

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
