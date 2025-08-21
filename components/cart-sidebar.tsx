"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, ShoppingBag, ExternalLink, Trash2, User, Phone, Mail, CreditCard } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/products"
import { generateWhatsAppMessage, getWhatsAppUrl } from "@/lib/cart"
import { toast } from "sonner"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId)
      toast.success("Producto eliminado del carrito")
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleCheckout = () => {
    if (!customerData.name || !customerData.phone || !customerData.email) {
      toast.error("Por favor completa todos los campos")
      return
    }

    if (items.length === 0) {
      toast.error("El carrito está vacío")
      return
    }

    setIsCheckingOut(true)

    try {
      const message = generateWhatsAppMessage(items, customerData)
      const whatsappUrl = getWhatsAppUrl(message)

      window.open(whatsappUrl, "_blank")
      toast.success("Redirigiendo a WhatsApp...")

      setTimeout(() => {
        clearCart()
        setCustomerData({ name: "", phone: "", email: "" })
        onClose()
        setIsCheckingOut(false)
        toast.success("¡Pedido enviado! Te contactaremos pronto.")
      }, 1000)
    } catch (error) {
      toast.error("Error al procesar el pedido")
      setIsCheckingOut(false)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg lg:max-w-xl flex flex-col h-full p-0 bg-background/95 backdrop-blur-xl border-l border-border/50">
        <SheetHeader className="p-4 sm:p-6 bg-gradient-to-r from-red-500/10 to-blue-500/10 border-b border-border/50">
          <SheetTitle className="flex items-center gap-3 text-lg sm:text-xl font-bold">
            <div className="p-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <span>Carrito de Compras</span>
              <div className="text-sm font-normal text-muted-foreground">
                {items.length} {items.length === 1 ? "producto" : "productos"}
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            /* Enhanced empty state with better design */
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">Tu carrito está vacío</p>
                  <p className="text-sm text-muted-foreground">Agrega productos para comenzar tu compra</p>
                </div>
                <Button onClick={onClose} variant="outline" className="mt-4 bg-transparent">
                  Continuar Comprando
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div
                      key={`${item.product.id}-${JSON.stringify(item.variations)}`}
                      className="group flex gap-4 p-4 border border-border/50 rounded-xl bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={item.product.images[0] || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1 min-w-0 space-y-2">
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                            {item.product.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{item.product.category}</p>
                        </div>

                        {item.variations && (
                          <div className="flex flex-wrap gap-1">
                            {Object.entries(item.variations).map(([key, value]) => (
                              <Badge key={key} variant="secondary" className="text-xs px-2 py-1">
                                {value}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:bg-destructive hover:text-destructive-foreground transition-colors"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:bg-primary hover:text-primary-foreground transition-colors"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                            onClick={() => removeItem(item.product.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="text-right space-y-1">
                        <p className="font-bold text-sm sm:text-base text-primary">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <p className="text-xs text-muted-foreground">{formatPrice(item.product.price)} c/u</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg sm:text-xl font-bold">Total:</span>
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                      {formatPrice(total)}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-base">Datos de contacto</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Nombre completo
                        </Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre completo"
                          value={customerData.name}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, name: e.target.value }))}
                          className="focus-ring"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          placeholder="Tu número de teléfono"
                          value={customerData.phone}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="focus-ring"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={customerData.email}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, email: e.target.value }))}
                          className="focus-ring"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Button
                        onClick={handleCheckout}
                        disabled={isCheckingOut}
                        className="w-full h-12 bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg btn-premium"
                        size="lg"
                      >
                        {isCheckingOut ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Procesando...
                          </div>
                        ) : (
                          <>
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Finalizar por WhatsApp
                          </>
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => {
                          clearCart()
                          toast.success("Carrito vaciado")
                        }}
                        className="w-full h-10 border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Vaciar Carrito
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
