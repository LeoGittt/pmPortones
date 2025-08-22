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
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-border transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      {/* Imagen del producto */}
      <div className="relative w-full h-48 sm:h-56 bg-muted/50 flex-shrink-0">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={product.featured}
        />
        
        {/* Overlay sutil en hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Badges minimalistas */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.featured && (
            <Badge className="bg-foreground text-background text-xs font-medium px-2 py-1">
              Destacado
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground">
              Sin Stock
            </Badge>
          )}
        </div>
        
        {/* Botón de vista rápida - aparece en hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="sm"
            asChild
            className="bg-background/95 backdrop-blur-sm border border-foreground/20 shadow-xl text-foreground hover:bg-background"
          >
            <Link href={`/producto/${product.id}`}>
              <Eye className="w-4 h-4 mr-2" />
              Ver detalles
            </Link>
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
          <div className="text-2xl font-semibold text-foreground">
            {formatPrice(product.price)}
          </div>
        </div>
        
        {/* Botones - Altura fija al final */}
        <div className="space-y-2 flex-shrink-0">
          <Button 
            onClick={() => onAddToCart(product)} 
            disabled={!product.inStock} 
            className="w-full h-10 bg-foreground text-background hover:bg-foreground/90 disabled:bg-muted disabled:text-muted-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Agregar al carrito' : 'No disponible'}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            asChild 
            className="w-full h-8 text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            <Link href={`/producto/${product.id}`}>
              Ver más información
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
