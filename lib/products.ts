export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  priceId: string
  images?: string[]
  features?: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: "dream-reading",
    name: "Dream Reading",
    description: "A transformative experience to unlock your subconscious mind.",
    priceInCents: 6666, // $66.66
    priceId: "price_1TQRfG0Hlo41Y11UxOmUQM4f",
    images: ["/images/ethereal-sleep.jpg"],
    features: [
        "Personalized Dream Analysis",
        "Zhou Gong's Ancient Wisdom",
        "Feng Shui Action Step",
    ],
  },
]