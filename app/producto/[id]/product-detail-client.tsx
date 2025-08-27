"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Heart,
  Share2,
  ArrowLeft,
  Check,
  Truck,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { mockProducts, formatPrice, type Product } from "@/lib/products";

interface ProductDetailClientProps {
  productId: string;
}

export function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const { itemCount, addItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Buscar el producto por ID
  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen">
        <Navbar
          cartItemCount={itemCount}
          onCartClick={() => setIsCartOpen(true)}
        />
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Producto no encontrado
          </h1>
          <Link href="/catalogo">
            <Button>Volver al catálogo</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsCartOpen(true);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      {/* Breadcrumbs */}
      <div className="pt-24 pb-4 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/catalogo"
              className="hover:text-foreground transition-colors"
            >
              Catálogo
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          {/* Botón volver */}
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 mt-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catálogo
          </Link>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-muted/50 rounded-xl overflow-hidden">
                <Image
                  src={product.images[selectedImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      Sin Stock
                    </Badge>
                  </div>
                )}
              </div>

              {/* Miniaturas */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index
                          ? "border-accent"
                          : "border-border hover:border-border/80"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Vista ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge
                    variant="outline"
                    className="text-accent border-accent/20"
                  >
                    {product.category}
                  </Badge>
                  {product.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500">
                      Destacado
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {product.name}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Precio */}
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-foreground">
                      {formatPrice(product.price)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Precio final incluye IVA
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-medium ${
                        product.inStock ? "text-green-600" : "text-accent"
                      }`}
                    >
                      {product.inStock ? "✓ Disponible" : "✗ Sin stock"}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {product.inStock
                        ? "Envío inmediato"
                        : "Consultar disponibilidad"}
                    </div>
                  </div>
                </div>

                {/* Controles de cantidad y agregar al carrito */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="px-3 py-2 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-border min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-3 py-2 hover:bg-muted"
                    >
                      +
                    </button>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 h-12"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {product.inStock ? "Agregar al carrito" : "No disponible"}
                  </Button>
                </div>

                {/* Botones secundarios */}
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Heart className="w-4 h-4 mr-2" />
                    Favoritos
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartir
                  </Button>
                </div>
              </div>

              {/* Beneficios */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      Envío gratis
                    </div>
                    <div className="text-xs text-muted-foreground">En CABA</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      Garantía
                    </div>
                    <div className="text-xs text-muted-foreground">
                      12 meses
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <HeadphonesIcon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      Soporte
                    </div>
                    <div className="text-xs text-muted-foreground">24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Características
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Motor de alta resistencia
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Sistema de seguridad integrado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Control remoto incluido
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Instalación profesional
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Garantía extendida disponible
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                ¿Necesitas ayuda?
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Nuestro equipo de expertos está disponible para ayudarte con
                  cualquier consulta sobre este producto o su instalación.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1">Consultar por WhatsApp</Button>
                  <Button variant="outline" className="flex-1">
                    Solicitar Instalación
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Productos Destacados */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Productos Destacados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestros productos más populares y encuentra la solución perfecta para tu hogar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts
              .filter(p => p.featured && p.id !== product.id)
              .slice(0, 3)
              .map((featuredProduct) => (
                <ProductCard
                  key={featuredProduct.id}
                  product={featuredProduct}
                  onAddToCart={addItem}
                />
              ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/catalogo">
              <Button variant="outline" size="lg">
                Ver todos los productos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
