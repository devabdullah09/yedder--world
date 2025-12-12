// Architecture projects data

export type ArchitectureProject = {
  id: string
  name: string
  location: string
}

export const allArchitectureProjects: ArchitectureProject[] = [
  // Puerto Escondido
  { id: 'moon-garden', name: 'MOON GARDEN', location: 'Puerto Escondido' },
  { id: 'casa-amaras', name: 'CASA AMARAS', location: 'Puerto Escondido' },
  
  // Tulum
  { id: '33', name: '33', location: 'Tulum' },
  
  // Marrakech
  { id: 'atlas-zeytun', name: 'ATLAS ZEYTUN', location: 'Marrakech' },
  { id: 'wabi-sabi', name: 'WABI SABI', location: 'Marrakech' },
  { id: 'kasah', name: 'KASAH', location: 'Marrakech' },
  { id: 'villa-ali', name: 'VILLA ALI', location: 'Marrakech' },
  
  // New York Club
  { id: 'black-boxe', name: 'BLACK BOXE', location: 'New York Club' },
  
  // Research Thesis
  { id: 'azulik-uh-may', name: 'AZULIK UH MAY', location: 'Research Thesis' },
]

// Helper to get project by ID
export const getArchitectureProjectById = (id: string): ArchitectureProject | null => {
  return allArchitectureProjects.find(p => p.id === id) || null
}

