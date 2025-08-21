import type { Product } from "./products"

export interface CartItem {
  product: Product
  quantity: number
  variations?: Record<string, string>
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
}

export function calculateItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0)
}

export function generateWhatsAppMessage(
  items: CartItem[],
  customerData: { name: string; phone: string; email: string },
): string {
  const itemsList = items
    .map((item, index) => {
      const variations = item.variations
        ? ` (${Object.entries(item.variations)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ")})`
        : ""
      return `${index + 1}. ${item.product.name}${variations} (x${item.quantity}) → $${(item.product.price * item.quantity).toLocaleString("es-AR")}`
    })
    .join("\n")

  const total = calculateCartTotal(items)

  return `¡Hola! Quiero realizar el siguiente pedido en PORTONES PM:

${itemsList}

TOTAL: $${total.toLocaleString("es-AR")}

Datos de contacto:
Nombre: ${customerData.name}
Teléfono: ${customerData.phone}
Email: ${customerData.email}

¡Gracias!`
}

export function getWhatsAppUrl(message: string): string {
  const phoneNumber = "5491165145507" // Argentina format with country code
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}
