export interface Work {
  id: string;
  title: string;
  description: string;
  year: number;
  imageUrl: string;
  slug: string;
}

export interface About {
  name: string;
  birthDate: string;
  deathDate: string;
  biography: string;
}

export interface Organization {
  name: string;
  mission: string;
  members: string[];
}