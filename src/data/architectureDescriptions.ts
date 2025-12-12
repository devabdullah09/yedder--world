// Architecture project descriptions and details

export type ArchitectureDescription = {
  description: string
  details: string[]
}

export const architectureDescriptions: Record<string, ArchitectureDescription> = {
  'moon-garden': {
    description: 'Moon Garden is a boutique hotel in Puerto Escondido that seamlessly blends contemporary design with local architectural traditions. This project showcases our commitment to creating spaces that honor their context while providing modern comfort and elegance.',
    details: [
      'Boutique Hotel in Puerto Escondido',
      'Contemporary design with local traditions',
      'Sustainable architecture practices',
      'Integration with natural landscape',
      'Puerto Escondido Collection',
      'Thoughtful spatial planning'
    ]
  },
  'casa-amaras': {
    description: 'Casa Amaras represents a harmonious fusion of modern living and traditional Mexican architecture. This residential project in Puerto Escondido demonstrates our approach to creating homes that feel both timeless and contemporary.',
    details: [
      'Residential project in Puerto Escondido',
      'Modern and traditional fusion',
      'Sustainable design principles',
      'Natural material integration',
      'Puerto Escondido Collection',
      'Contextual architecture'
    ]
  },
  '33': {
    description: '33 is a unique architectural project in Tulum that explores the relationship between built form and natural environment. This design celebrates the beauty of the Yucatan landscape while creating functional, beautiful spaces.',
    details: [
      'Architectural project in Tulum',
      'Integration with natural environment',
      'Contemporary design approach',
      'Sustainable practices',
      'Tulum Collection',
      'Landscape-responsive design'
    ]
  },
  'atlas-zeytun': {
    description: 'Atlas Zeytun is a distinguished project in Marrakech that showcases our ability to blend Moroccan architectural heritage with contemporary design sensibilities. This space honors traditional craftsmanship while meeting modern needs.',
    details: [
      'Project in Marrakech',
      'Moroccan heritage meets contemporary design',
      'Traditional craftsmanship',
      'Modern functionality',
      'Marrakech Collection',
      'Cultural sensitivity'
    ]
  },
  'wabi-sabi': {
    description: 'Wabi Sabi embodies the Japanese aesthetic philosophy of finding beauty in imperfection and impermanence, applied to a Marrakech context. This project creates spaces that feel authentic, natural, and deeply connected to place.',
    details: [
      'Wabi Sabi philosophy in Marrakech',
      'Beauty in imperfection',
      'Natural materials',
      'Authentic design approach',
      'Marrakech Collection',
      'Philosophical architecture'
    ]
  },
  'kasah': {
    description: 'Kasah is a contemporary architectural project in Marrakech that demonstrates our commitment to creating spaces that respond to climate, culture, and context. This design showcases innovative solutions within a traditional framework.',
    details: [
      'Contemporary project in Marrakech',
      'Climate-responsive design',
      'Cultural context integration',
      'Innovative solutions',
      'Marrakech Collection',
      'Contextual innovation'
    ]
  },
  'villa-ali': {
    description: 'Villa Ali represents a sophisticated residential design in Marrakech that balances luxury with authenticity. This project showcases our ability to create private spaces that feel both exclusive and grounded in their cultural context.',
    details: [
      'Residential villa in Marrakech',
      'Luxury and authenticity',
      'Private space design',
      'Cultural grounding',
      'Marrakech Collection',
      'Sophisticated residential architecture'
    ]
  },
  'black-boxe': {
    description: 'Black Boxe is a dynamic nightclub project in New York that explores the relationship between architecture and experience. This design creates immersive environments that enhance the social and cultural activities within.',
    details: [
      'Nightclub in New York',
      'Architecture and experience design',
      'Immersive environments',
      'Social space creation',
      'New York Club Collection',
      'Cultural venue architecture'
    ]
  },
  'azulik-uh-may': {
    description: 'Azulik Uh May is a research thesis exploring new forms of vernacular architecture. This academic work investigates how traditional building practices can inform contemporary sustainable design, creating a bridge between past and future.',
    details: [
      'Research thesis project',
      'Vernacular architecture exploration',
      'Traditional and contemporary bridge',
      'Sustainable design research',
      'Research Thesis Collection',
      'Academic architectural investigation'
    ]
  },
}

// Default description for projects without custom descriptions
export const defaultArchitectureDescription: ArchitectureDescription = {
  description: 'This architectural project represents our commitment to creating spaces that honor tradition while embracing innovation. Each design is a dialogue between place, culture, and contemporary needs, resulting in architecture that feels both timeless and forward-thinking.',
  details: [
    'Thoughtful architectural design',
    'Cultural sensitivity',
    'Sustainable practices',
    'Contextual response',
    'Part of Yedder Architecture Studio',
    'Innovation through tradition'
  ]
}

// Helper function to get project description
export const getArchitectureDescription = (projectId: string): ArchitectureDescription => {
  return architectureDescriptions[projectId] || defaultArchitectureDescription
}

