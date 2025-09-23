"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Eye } from "lucide-react"
import { type Product, formatPrice } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void // ahora solo abre el modal
  viewMode?: 'grid' | 'list'
}

export function ProductCard({ product, onAddToCart, viewMode = 'grid' }: ProductCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex">
        {/* Imagen del producto */}
        {/* CAMBIO: bg-muted/50 a bg-card */}
        <div className="relative w-48 h-32 bg-card flex items-center justify-center flex-shrink-0">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="200px"
            // CAMBIO: eliminado p-2
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            priority={product.featured}
          />
          
          {/* Overlay sutil en hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.featured && (
              <Badge variant="default" className="text-xs bg-primary/90 hover:bg-primary">
                Destacado
              </Badge>
            )}
          </div>

          {/* Quick actions */}
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={`/producto/${product.id}`}>
              <Button size="sm" className="h-8 w-8 p-0 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                <Eye className="h-3 w-3" />
              </Button>
            </Link>
            <Button 
              size="sm" 
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="h-8 w-8 p-0 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg disabled:bg-muted disabled:text-muted-foreground"
            >
              <ShoppingCart className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Contenido del producto */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
            </div>
            
            <Button 
              onClick={() => onAddToCart(product)}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Agregar
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      {/* Imagen del producto */}
      {/* CAMBIO: bg-muted/50 a bg-card y agregado flex items-center justify-center para centrar */}
      <div className="relative w-full h-48 sm:h-56 bg-card flex items-center justify-center flex-shrink-0">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          // CAMBIO: eliminado p-2
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority={product.featured}
        />
        
        {/* Overlay sutil en hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Badges minimalistas */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.featured && (
            <Badge className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1">
              Destacado
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground">
              Sin Stock
            </Badge>
          )}
        </div>
        
        {/* Quick actions - aparece en hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            asChild
            className="h-10 w-10 p-0 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg border border-accent/20"
          >
            <Link href={`/producto/${product.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="sm"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="h-10 w-10 p-0 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg border border-accent/20 disabled:bg-muted disabled:text-muted-foreground disabled:border-muted"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Contenido - Flex para distribuir el espacio */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Categoría y estado - Altura fija */}
        <div className="flex items-center justify-between mb-3 h-5">
          <Badge variant="outline" className="text-xs text-muted-foreground border-border/50">
            {product.category}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {product.inStock ? 'Disponible' : 'Agotado'}
          </span>
        </div>
        
        {/* Título - Altura fija para 2 líneas */}
        <div className="h-12 mb-3">
          <h3 className="font-semibold text-foreground text-base sm:text-lg leading-tight line-clamp-2 group-hover:text-foreground/80 transition-colors duration-200">
            {product.name}
          </h3>
        </div>
        
        {/* Descripción - Altura fija para 2 líneas */}
        <div className="h-10 mb-4">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
        
        {/* Espaciador flexible */}
        <div className="flex-1"></div>
        
        {/* Precio - Altura fija */}
        <div className="h-8 mb-4">
          <div className="text-2xl font-semibold text-accent">
            {formatPrice(product.price)}
          </div>
        </div>
        
        {/* Botón - Altura fija al final */}
        <div className="flex-shrink-0">
          <Button 
            onClick={() => onAddToCart(product)} 
            disabled={!product.inStock} 
            className="w-full h-10 bg-accent text-accent-foreground hover:bg-accent/90 disabled:bg-muted disabled:text-muted-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Agregar al carrito' : 'No disponible'}
          </Button>
        </div>
      </div>
    </div>
  )
}