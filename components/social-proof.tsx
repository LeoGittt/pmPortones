"use client"

import React from "react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-background border border-border/50 rounded-xl p-6 space-y-4 h-full shadow-sm hover:shadow-md transition-all duration-300 group hover:border-orange-500/20">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 transition-colors ${i < rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground/30 group-hover:text-muted-foreground/40'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="flex-1">
        <p className="text-muted-foreground text-sm leading-relaxed font-medium">"{content}"</p>
      </div>
      <div className="border-t border-border/30 pt-4">
        <div className="font-semibold text-foreground group-hover:text-orange-500 transition-colors">{name}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  )
}

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Propietario de Casa",
      content: "Excelente servicio y productos de calidad. Mi portón automático lleva 5 años funcionando perfectamente.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Administradora de Consorcio",
      content: "Profesionales confiables. Instalaron sistemas en todo nuestro edificio con garantía completa.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Empresa de Seguridad",
      content: "Los recomendamos a todos nuestros clientes. Calidad y servicio técnico excepcional.",
      rating: 5
    },
    {
      name: "Lucía Gómez",
      role: "Dueña de PH",
      content: "La atención fue excelente y el equipo muy amable. El portón funciona perfecto y el precio fue justo.",
      rating: 5
    },
    {
      name: "Federico Torres",
      role: "Constructor",
      content: "Siempre los elijo para mis obras. Cumplen con los plazos y la calidad es superior.",
      rating: 4
    },
    {
      name: "María López",
      role: "Cliente Particular",
      content: "Me asesoraron muy bien y resolvieron todas mis dudas. Recomendados!",
      rating: 5
    }
    
  ];

  const [current, setCurrent] = React.useState(0);
  const total = testimonials.length;
  const cardsPerView = 3; // Número de cards visibles a la vez
  const maxIndex = Math.max(0, total - cardsPerView); // Máximo índice permitido

  const goTo = (idx: number) => {
    if (idx < 0) setCurrent(0);
    else if (idx > maxIndex) setCurrent(maxIndex);
    else setCurrent(idx);
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4 font-medium">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clientes Satisfechos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>
        <div className="relative">
          {/* Navegación */}
          <div className="flex justify-between items-center mb-8">
            <button
              className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border/50 hover:bg-orange-500/10 hover:border-orange-500/20 text-orange-500 disabled:opacity-40 disabled:hover:bg-background disabled:hover:border-border/50 transition-all duration-200 shadow-sm"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    idx === current 
                      ? 'bg-orange-500 scale-110' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => goTo(idx)}
                  aria-label={`Ir al grupo ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border/50 hover:bg-orange-500/10 hover:border-orange-500/20 text-orange-500 disabled:opacity-40 disabled:hover:bg-background disabled:hover:border-border/50 transition-all duration-200 shadow-sm"
              onClick={() => goTo(current + 1)}
              disabled={current >= maxIndex}
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carrusel centrado con múltiples cards visibles */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ 
                transform: `translateX(-${current * (100 / cardsPerView)}%)`,
                width: `${(total / cardsPerView) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 transition-transform duration-500"
                  style={{ width: `${100 / total}%` }}
                >
                  <div className="px-2 h-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Versión responsive para móviles */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out justify-center"
                style={{ 
                  transform: `translateX(-${current * 100}%)`,
                  width: `${testimonials.length * 100}%`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4 flex justify-center">
                    <div className="max-w-sm w-full">
                      <TestimonialCard {...testimonial} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
