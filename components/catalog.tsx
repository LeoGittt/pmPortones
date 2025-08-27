"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { CatalogFilters, type FilterState } from "@/components/catalog-filters"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Search, Filter, Grid3X3, List } from "lucide-react"
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
    <section id="catalogo" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Layout de dos columnas: Filtros + Productos */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Filtros */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CatalogFilters 
                filters={filters} 
                onFiltersChange={handleFiltersChange} 
                onClearFilters={handleClearFilters} 
              />
            </div>
          </div>

          {/* Main Content - Productos */}
          <div className="lg:col-span-3">
            {/* Controls Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 p-4 bg-card border border-border rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-accent" />
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
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium text-accent">
                      Página {currentPage} de {totalPages}
                    </span>
                  </div>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 p-1 bg-muted/50 rounded-lg border border-border">
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

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <div className={`grid gap-6 mb-12 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {paginatedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="transform transition-all duration-300 hover:scale-[1.02]"
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
              <div className="text-center py-16 bg-card border border-dashed border-border rounded-lg">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  No encontramos productos
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Intenta ajustar los filtros o usar términos de búsqueda diferentes. 
                  Nuestro catálogo se actualiza constantemente.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={handleClearFilters} 
                    variant="default"
                    className="bg-accent hover:bg-accent/90"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Limpiar Filtros
                  </Button>
                  <Button variant="outline">
                    Ver Todos los Productos
                  </Button>
                </div>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-4 mt-8 p-4 bg-card border border-border rounded-lg">
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="h-9 px-3"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Anterior
                  </Button>

                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }

                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-9 h-9 ${
                            currentPage === pageNum 
                              ? 'bg-accent text-accent-foreground' 
                              : ''
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
                    className="h-9 px-3"
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  Mostrando productos <span className="font-medium text-foreground">{startIndex + 1}</span> al{" "}
                  <span className="font-medium text-foreground">{Math.min(startIndex + PRODUCTS_PER_PAGE, filteredAndSortedProducts.length)}</span>{" "}
                  de <span className="font-medium text-foreground">{filteredAndSortedProducts.length}</span> resultados
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
