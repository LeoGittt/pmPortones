import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users, Award, Wrench, Phone } from "lucide-react";
import Image from "next/image";

export function AboutUs() {
  const features = [
    {
      icon: Clock,
      title: "30+ Años de Experiencia",
      description:
        "Más de tres décadas brindando soluciones confiables en automatización de portones.",
    },
    {
      icon: Shield,
      title: "Confianza y Seguridad",
      description:
        "Productos y servicios que garantizan la máxima seguridad para tu hogar o empresa.",
    },
    {
      icon: Wrench,
      title: "Servicio Técnico Especializado",
      description:
        "Equipo técnico altamente capacitado para instalación, mantenimiento y reparaciones.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description:
        "Cada cliente es único. Ofrecemos soluciones adaptadas a sus necesidades específicas.",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description:
        "Trabajamos con las mejores marcas y ofrecemos garantía en todos nuestros productos.",
    },
    {
      icon: Phone,
      title: "Soporte Técnico",
      description:
        "Estamos disponibles cuando nos necesites, con atención personalizada y profesional.",
    },
  ];

  return (
    <section id="nosotros" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800 border-red-200">
            Sobre Nosotros
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            PORTONES PM: Tu Socio de Confianza en Automatización
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Con más de 30 años de experiencia en el mercado, somos la empresa
            líder en automatización y reparación de portones en Argentina.
            Nuestra misión es simple: automatizar accesos y simplificar tu vida.
          </p>
        </div>

        {/* Nueva estructura de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Columna izquierda - Contenido */}
          <div className="space-y-8">
            {/* Nuestra Historia */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                Nuestra Historia
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Desde 1993, PORTONES PM ha sido pionera en el desarrollo e
                  implementación de sistemas de automatización para portones
                  residenciales, comerciales e industriales. Lo que comenzó como
                  un pequeño taller familiar se ha convertido en una empresa de
                  referencia en el sector.
                </p>
                <p>
                  A lo largo de estos años, hemos automatizado miles de accesos,
                  desde pequeñas residencias hasta grandes complejos industriales.
                  Nuestra experiencia nos ha enseñado que cada proyecto es único y
                  requiere una solución personalizada.
                </p>
              </div>
            </div>

            {/* Nuestros Valores */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                Nuestros Valores
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Confiabilidad
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Cada producto y servicio que ofrecemos está respaldado por
                      nuestra garantía de calidad.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Innovación
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Incorporamos constantemente las últimas tecnologías en
                      automatización y seguridad.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Servicio al Cliente
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Nuestros clientes son nuestra prioridad. Ofrecemos atención
                      personalizada y soporte continuo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Experiencia
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Tres décadas de experiencia nos respaldan en cada proyecto
                      que emprendemos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/sleek-automated-gate.png"
                  alt="PORTONES PM - Automatización de portones"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Tecnología de Vanguardia
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Sistemas automatizados de última generación para máxima seguridad y comodidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-red-200 hover:border-red-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              ¿Listo para Automatizar tu Acceso?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos hoy mismo y descubre cómo podemos simplificar tu vida
              con nuestras soluciones de automatización. Presupuesto sin
              compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1165145507"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar Ahora
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
