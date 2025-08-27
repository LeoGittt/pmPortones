export interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
  images: string[]
  specifications: Record<string, string>
  variations?: {
    color?: string[]
    size?: string[]
    model?: string[]
  }
  inStock: boolean
  featured: boolean
}

export const categories = ["Motores", "Controles Remotos", "Repuestos", "Accesorios", "Sistemas Completos"]

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Motor Corredizo X200",
    price: 85000,
    category: "Motores",
    description: "Motor para portones corredizos de hasta 400kg. Incluye cremallera y kit de instalación completo.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      "Peso máximo": "400kg",
      Velocidad: "12 m/min",
      Alimentación: "220V",
      Garantía: "2 años",
    },
    variations: {
      model: ["X200", "X300", "X400"],
    },
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Control Remoto PM-4",
    price: 12000,
    category: "Controles Remotos",
    description: "Control remoto de 4 botones con tecnología rolling code para máxima seguridad.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      Botones: "4",
      Frecuencia: "433MHz",
      Alcance: "100m",
      Batería: "12V",
    },
    variations: {
      color: ["Negro", "Blanco", "Gris"],
    },
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Kit Fotocélulas",
    price: 18000,
    category: "Accesorios",
    description: "Sistema de seguridad con fotocélulas para detección de obstáculos.",
    images: ["/automatic-dual-swing-gate-motor.png"],
    specifications: {
      Alcance: "20m",
      Tipo: "Infrarrojo",
      Alimentación: "12V",
      Resistencia: "IP54",
    },
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    name: "Motor Batiente Dual",
    price: 120000,
    category: "Motores",
    description: "Sistema completo para portones batientes de dos hojas hasta 300kg cada una.",
    images: ["/automatic-dual-swing-gate-motor.png"],
    specifications: {
      "Peso por hoja": "300kg",
      Apertura: "90°-120°",
      Alimentación: "220V",
      Garantía: "3 años",
    },
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Cremallera Metálica",
    price: 8500,
    category: "Repuestos",
    description: "Cremallera metálica de 1 metro para motores corredizos.",
    images: ["/metal-gate-rack.png"],
    specifications: {
      Longitud: "1m",
      Material: "Acero galvanizado",
      Módulo: "4",
      Peso: "2kg/m",
    },
    variations: {
      size: ["1m", "2m", "3m"],
    },
    inStock: true,
    featured: false,
  },
  {
    id: "6",
    name: "Central de Control Universal",
    price: 35000,
    category: "Repuestos",
    description: "Central de control universal compatible con la mayoría de motores del mercado.",
    images: ["/central-control-portones.png"],
    specifications: {
      Compatibilidad: "Universal",
      Memoria: "100 controles",
      Funciones: "Peatonal, total, automático",
      Protección: "IP65",
    },
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    name: "Sistema Completo Residencial",
    price: 180000,
    category: "Sistemas Completos",
    description: "Kit completo para automatización residencial incluye motor, controles, fotocélulas e instalación.",
    images: ["/residential-automation-system.png"],
    specifications: {
      Incluye: "Motor + 2 controles + fotocélulas",
      Instalación: "Incluida",
      Garantía: "3 años",
      Servicio: "24hs",
    },
    inStock: true,
    featured: true,
  },
  {
    id: "8",
    name: "Lámpara de Señalización",
    price: 15000,
    category: "Accesorios",
    description: "Lámpara LED de señalización con intermitencia durante el movimiento del portón.",
    images: ["/led-gate-signal-lamp.png"],
    specifications: {
      Tipo: "LED",
      Potencia: "25W",
      Voltaje: "12V/24V",
      Color: "Naranja",
    },
    variations: {
      color: ["Naranja", "Rojo", "Azul"],
    },
    inStock: true,
    featured: false,
  },
  {
    id: "9",
    name: "Central de Control Universal",
    price: 35000,
    category: "Repuestos",
    description: "Central de control universal compatible con la mayoría de motores del mercado.",
    images: ["/central-control-portones.png"],
    specifications: {
      Compatibilidad: "Universal",
      Memoria: "100 controles",
      Funciones: "Peatonal, total, automático",
      Protección: "IP65",
    },
    inStock: true,
    featured: false,
  },
  {
    id: "10",
    name: "Sistema Completo Residencial",
    price: 180000,
    category: "Sistemas Completos",
    description: "Kit completo para automatización residencial incluye motor, controles, fotocélulas e instalación.",
    images: ["/residential-automation-system.png"],
    specifications: {
      Incluye: "Motor + 2 controles + fotocélulas",
      Instalación: "Incluida",
      Garantía: "3 años",
      Servicio: "24hs",
    },
    inStock: true,
    featured: true,
  },
  {
    id: "11",
    name: "Lámpara de Señalización",
    price: 15000,
    category: "Accesorios",
    description: "Lámpara LED de señalización con intermitencia durante el movimiento del portón.",
    images: ["/led-gate-signal-lamp.png"],
    specifications: {
      Tipo: "LED",
      Potencia: "25W",
      Voltaje: "12V/24V",
      Color: "Naranja",
    },
    variations: {
      color: ["Naranja", "Rojo", "Azul"],
    },
    inStock: true,
    featured: false,
  },
]

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((product) => product.id === id)
}

export function getRelatedProducts(productId: string, category: string): Product[] {
  return mockProducts.filter((product) => product.id !== productId && product.category === category).slice(0, 4)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price)
}
