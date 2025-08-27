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
  {
    id: "12",
    name: "Motor Batiente Doble Hoja DH-300",
    price: 125000,
    category: "Motores",
    description: "Motor para portones batientes de doble hoja hasta 300kg por hoja. Incluye pistones y brazos articulados.",
    images: ["/automatic-dual-swing-gate-motor.png"],
    specifications: {
      "Peso por hoja": "300kg",
      "Ángulo apertura": "110°",
      Alimentación: "220V",
      Garantía: "3 años",
    },
    variations: {
      model: ["DH-300", "DH-400", "DH-500"],
    },
    inStock: true,
    featured: true,
  },
  {
    id: "13",
    name: "Control Remoto Universal UNI-6",
    price: 18000,
    category: "Controles Remotos",
    description: "Control remoto universal de 6 botones compatible con múltiples marcas y frecuencias.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      Botones: "6",
      Frecuencia: "315/433/868 MHz",
      Alcance: "150m",
      Garantía: "1 año",
    },
    variations: {
      color: ["Negro", "Blanco", "Gris"],
    },
    inStock: true,
    featured: false,
  },
  {
    id: "14",
    name: "Kit de Fotocélulas Inalámbricas",
    price: 28000,
    category: "Accesorios",
    description: "Par de fotocélulas inalámbricas para detección de obstáculos con tecnología infrarroja.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      Alcance: "20m",
      Tipo: "Infrarroja",
      Alimentación: "12V/24V",
      Resistencia: "IP65",
    },
    inStock: true,
    featured: false,
  },
  {
    id: "15",
    name: "Central de Control Inteligente IC-Pro",
    price: 75000,
    category: "Controles Remotos",
    description: "Central de control inteligente con conectividad WiFi y app móvil para gestión remota.",
    images: ["/central-control-portones.png"],
    specifications: {
      Conectividad: "WiFi",
      Canales: "8",
      Voltaje: "12V/24V",
      App: "iOS/Android",
    },
    variations: {
      model: ["IC-Pro", "IC-Premium", "IC-Enterprise"],
    },
    inStock: true,
    featured: true,
  },
  {
    id: "16",
    name: "Cremallera de Acero Galvanizado 1m",
    price: 8500,
    category: "Repuestos",
    description: "Cremallera de acero galvanizado módulo 4 para portones corredizos. Venta por metro.",
    images: ["/metal-gate-rack.png"],
    specifications: {
      Material: "Acero galvanizado",
      Módulo: "4",
      Longitud: "1 metro",
      Altura: "30mm",
    },
    variations: {
      size: ["1m", "2m", "3m", "4m"],
    },
    inStock: true,
    featured: false,
  },
  {
    id: "17",
    name: "Sistema Domótico Residencial SR-100",
    price: 180000,
    category: "Sistemas Completos",
    description: "Sistema completo de automatización residencial con integración de portones, luces y seguridad.",
    images: ["/residential-automation-system.png"],
    specifications: {
      Dispositivos: "Hasta 50",
      Protocolos: "Zigbee, WiFi, Z-Wave",
      Pantalla: "7 pulgadas táctil",
      Garantía: "5 años",
    },
    variations: {
      model: ["SR-100", "SR-200", "SR-Premium"],
    },
    inStock: true,
    featured: true,
  },
  {
    id: "18",
    name: "Sensor de Proximidad Magnético",
    price: 5500,
    category: "Accesorios",
    description: "Sensor magnético para detección de posición de portones y puertas automáticas.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      Tipo: "Magnético",
      Distancia: "5mm",
      Voltaje: "12V/24V",
      Material: "ABS",
    },
    variations: {
      color: ["Blanco", "Negro", "Marrón"],
    },
    inStock: true,
    featured: false,
  },
  {
    id: "19",
    name: "Motor Corredizo Industrial X-Heavy 800",
    price: 150000,
    category: "Motores",
    description: "Motor industrial para portones corredizos pesados hasta 800kg. Ideal para uso comercial intensivo.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      "Peso máximo": "800kg",
      Velocidad: "15 m/min",
      Alimentación: "380V trifásico",
      "Ciclos/hora": "100",
    },
    variations: {
      model: ["X-Heavy 800", "X-Heavy 1000", "X-Heavy 1200"],
    },
    inStock: true,
    featured: true,
  },
  {
    id: "20",
    name: "Kit de Mantenimiento Completo",
    price: 25000,
    category: "Repuestos",
    description: "Kit completo de mantenimiento con lubricantes, tornillería y piezas de desgaste comunes.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      Incluye: "Lubricantes, tornillos, fusibles",
      Aplicación: "Mantenimiento general",
      Frecuencia: "Semestral",
      Rendimiento: "10 servicios",
    },
    inStock: true,
    featured: false,
  },
  {
    id: "21",
    name: "Portón Corredizo Automatizado Elegance",
    price: 320000,
    category: "Sistemas Completos",
    description: "Portón corredizo completo con motor, rieles, cremallera y sistema de control integrado.",
    images: ["/sleek-automated-gate.png"],
    specifications: {
      Ancho: "4 metros",
      Alto: "2 metros",
      Material: "Hierro forjado",
      Motor: "X200 incluido",
    },
    variations: {
      size: ["3m", "4m", "5m", "6m"],
      color: ["Negro", "Blanco", "Verde", "Marrón"],
    },
    inStock: true,
    featured: true,
  },
  {
    id: "22",
    name: "Teclado Digital Exterior TD-Safe",
    price: 35000,
    category: "Accesorios",
    description: "Teclado digital resistente al agua para acceso sin llaves con códigos programables.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      Códigos: "Hasta 100",
      Resistencia: "IP67",
      Retroiluminación: "LED azul",
      Alimentación: "12V",
    },
    variations: {
      color: ["Plateado", "Negro", "Blanco"],
    },
    inStock: true,
    featured: false,
  },
  {
    id: "23",
    name: "Batería de Respaldo UPS-Gate 24V",
    price: 45000,
    category: "Accesorios",
    description: "Sistema de batería de respaldo para mantener funcionamiento durante cortes de energía.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      Voltaje: "24V",
      Capacidad: "18Ah",
      Autonomía: "8 horas",
      Recarga: "Automática",
    },
    variations: {
      model: ["18Ah", "35Ah", "55Ah"],
    },
    inStock: true,
    featured: false,
  },
  {
    id: "24",
    name: "Control Remoto de Pulsera Wrist-Control",
    price: 22000,
    category: "Controles Remotos",
    description: "Control remoto compacto tipo pulsera para máxima comodidad y portabilidad.",
    images: ["/automatic-sliding-motor.png"],
    specifications: {
      Botones: "2",
      Tipo: "Pulsera",
      Frecuencia: "433MHz",
      Batería: "CR2032",
    },
    variations: {
      color: ["Negro", "Azul", "Rosa", "Blanco"],
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
