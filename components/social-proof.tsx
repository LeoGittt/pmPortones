"use client"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-background border border-border/50 rounded-xl p-6 space-y-4">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground/30'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">"{content}"</p>
      <div>
        <div className="font-medium text-foreground">{name}</div>
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
    }
  ]

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4 font-medium">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clientes Satisfechos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
        
        {/* Badges de confianza */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Garantía Extendida</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">Servicio Certificado</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">30 Años de Experiencia</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium">Soporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}
