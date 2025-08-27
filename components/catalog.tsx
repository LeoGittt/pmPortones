"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { CatalogFilters, type FilterState } from "@/components/catalog-filters"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Search, Filter, Grid3X3, List, Sparkles, TrendingUp } from "lucide-react"
import { mockProducts, type Product } from "@/lib/products"

interface CatalogProps {
  onAddToCart: (product: Product, quantity?: number, variations?: Record<string, string>) => void
}

const PRODUCTS_PER_PAGE = 20

export function Catalog({ onAddToCart }: CatalogProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    sortBy: "name-asc",
  })

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm),
      )
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "category":
          return a.category.localeCompare(b.category)
        default: // name-asc
          return a.name.localeCompare(a.name)
      }
    })

    return filtered
  }, [filters])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE)

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filters change
  }

  const handleClearFilters = () => {
    setFilters({
      search: "",
      category: "",
      sortBy: "name-asc",
    })
    setCurrentPage(1)
  }

  const handleAddToCart = (product: Product) => {
    onAddToCart(product)
  }

  return (
    <section id="catalogo" className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Catálogo Premium
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
            Descubre Nuestros
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Productos Exclusivos
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tecnología de vanguardia en automatización de portones y sistemas de acceso. 
            <span className="text-primary font-medium"> Calidad profesional garantizada.</span>
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">{mockProducts.length}+ Productos</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Calidad Premium</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Envío Rápido</span>
            </div>
          </div>
        </div>

        {/* Enhanced Layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Enhanced Sidebar - Filtros */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CatalogFilters 
                filters={filters} 
                onFiltersChange={handleFiltersChange} 
                onClearFilters={handleClearFilters} 
              />
            </div>
          </div>

          {/* Enhanced Main Content - Productos */}
          <div className="lg:col-span-4">
            {/* Enhanced Controls Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {paginatedProducts.length} productos encontrados
                    </p>
                    <p className="text-sm text-muted-foreground">
                      de {filteredAndSortedProducts.length} disponibles
                    </p>
                  </div>
                </div>
                
                {totalPages > 1 && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium text-primary">
                      Página {currentPage} de {totalPages}
                    </span>
                  </div>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 p-1 bg-muted/50 rounded-lg border border-border/50">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8 px-3"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-8 px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Enhanced Products Grid */}
            {paginatedProducts.length > 0 ? (
              <div className={`grid gap-6 mb-12 transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {paginatedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <ProductCard 
                      product={product} 
                      onAddToCart={handleAddToCart}
                      viewMode={viewMode}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card/50 backdrop-blur-sm rounded-2xl border border-dashed border-border/50 shadow-lg">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-muted to-muted/50 rounded-full flex items-center justify-center">
                    <Search className="w-12 h-12 text-muted-foreground/70" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 text-xs">!</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  No encontramos productos
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                  Intenta ajustar los filtros o usar términos de búsqueda diferentes. 
                  Nuestro catálogo se actualiza constantemente.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={handleClearFilters} 
                    variant="default"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Limpiar Filtros
                  </Button>
                  <Button variant="outline" className="border-border/50">
                    Ver Todos los Productos
                  </Button>
                </div>
              </div>
            )}

            {/* Enhanced Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-6 mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg">
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="h-10 px-4 bg-background/80 border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Anterior
                  </Button>

                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 7) {
                        pageNum = i + 1
                      } else if (currentPage <= 4) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 3) {
                        pageNum = totalPages - 6 + i
                      } else {
                        pageNum = currentPage - 3 + i
                      }

                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 transition-all duration-200 ${
                            currentPage === pageNum 
                              ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg scale-110' 
                              : 'bg-background/80 border-border/50 hover:bg-primary/10 hover:border-primary/30'
                          }`}
                        >
                          {pageNum}
                        </Button>
                      )
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="h-10 px-4 bg-background/80 border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 disabled:opacity-50"
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                
                {/* Page Info */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Mostrando productos <span className="font-semibold text-foreground">{startIndex + 1}</span> al{" "}
                    <span className="font-semibold text-foreground">{Math.min(startIndex + PRODUCTS_PER_PAGE, filteredAndSortedProducts.length)}</span>{" "}
                    de <span className="font-semibold text-foreground">{filteredAndSortedProducts.length}</span> resultados
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  )
}
