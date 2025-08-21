"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.pexels.com/photos/7944346/pexels-photo-7944346.jpeg"
          alt="Portón automático en funcionamiento"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative flex items-center justify-center">
        {/* Clean Content Block - Centered */}
        <div className="max-w-4xl space-y-12 text-center">
          {/* Simple Badge */}
          <Badge
            variant="outline"
            className="bg-primary/10 border-primary/30 text-primary"
          >
            30+ años de experiencia
          </Badge>

          {/* Clean Typography with Company Name */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                PM Portones
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Portones Automáticos
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto">
              Tecnología de vanguardia para la seguridad de tu hogar
            </p>
          </div>

          {/* Simple Description */}
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Instalación, reparación y mantenimiento de portones automáticos con
            tecnología avanzada y garantía completa.
          </p>

          {/* Clean CTA Button */}
          <div className="flex justify-center">
            <Link href="/catalogo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white transition-colors"
              >
                Ver Catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
