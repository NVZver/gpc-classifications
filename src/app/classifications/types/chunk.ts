export interface LocalisedContent {
  locale: 'nl' | 'fr';
  [key: string]: any;
}

export interface ChunkAttribute {
  attributeId: string;
  localisedContent: LocalisedContent[]; // unic items, need to use Map
  [key: string]: any;
}

export interface ChunkTracking {
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
}

export interface Chunk {
  id: string;
  level: string;
  localisedContent: LocalisedContent[];
  attributes: ChunkAttribute[];
  tracking: ChunkTracking;
  [key: string]: any;
}
