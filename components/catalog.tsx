"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { CatalogFilters, type FilterState } from "@/components/catalog-filters"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { mockProducts, type Product } from "@/lib/products"

interface CatalogProps {
  onAddToCart: (product: Product, quantity?: number, variations?: Record<string, string>) => void
}

const PRODUCTS_PER_PAGE = 20

export function Catalog({ onAddToCart }: CatalogProps) {
  const [currentPage, setCurrentPage] = useState(1)
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 relative inline-block">
            Nuestro Catálogo
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/70 via-accent to-primary/70 rounded-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Descubre nuestra amplia gama de productos para automatización de portones y accesos
          </p>
        </div>

        <CatalogFilters filters={filters} onFiltersChange={handleFiltersChange} onClearFilters={handleClearFilters} />

        {/* Results info */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-card/50 p-3 rounded-lg border border-border/40 shadow-sm">
          <p className="text-muted-foreground font-medium mb-2 sm:mb-0">
            Mostrando <span className="text-foreground font-semibold">{paginatedProducts.length}</span> de <span className="text-foreground font-semibold">{filteredAndSortedProducts.length}</span> productos
          </p>
          {totalPages > 1 && (
            <p className="text-muted-foreground font-medium">
              Página <span className="text-foreground font-semibold">{currentPage}</span> de <span className="text-foreground font-semibold">{totalPages}</span>
            </p>
          )}
        </div>

        {/* Products Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-border rounded-lg bg-muted/20">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No se encontraron productos
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Intenta ajustar los filtros o realizar una búsqueda diferente.
            </p>
            <Button onClick={handleClearFilters} variant="outline">
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 pb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="shadow-sm hover:bg-primary/5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Button>

            <div className="flex gap-2">
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
                    className={`w-10 h-10 shadow-sm ${currentPage === pageNum ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/5'}`}
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
              className="shadow-sm hover:bg-primary/5 transition-colors"
            >
              Siguiente
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
