export interface Character {
  id: string;
  name: string;
  codename: string;
  role: string;
  actor: string;
  bio: string;
  voiceLine: string;
  stats: { label: string; value: number }[];
  accentColor: string;
}

export interface Screenshot {
  id: string;
  title: string;
  category: "all" | "neon" | "action" | "vibe";
  src: string;
  description: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: "News" | "Update" | "Community";
  title: string;
  summary: string;
  image: string;
}

export interface PreOrderEdition {
  id: string;
  name: string;
  price: string;
  badge?: string;
  benefits: string[];
  image: string;
}
