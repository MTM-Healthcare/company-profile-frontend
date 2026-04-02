export interface SiteConfig {
  id: number;
  name: string;
  description: string;
  url: string;
  ogImage: string;
  twitterUrl?: string | null;
  facebookUrl?: string | null;
  phone: string;
  email: string;
  address: string;
  mapLink?: string | null;
  workingHours?: string | null;
  updatedAt: string;
}

export interface HeroSlide {
  id: number;
  imageUrl: string;
  alt: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceCategory {
  id: number;
  name: string;
  iconPath: string;
  order: number;
}

export interface HealthService {
  id: number;
  title: string;
  description: string;
  price: string;
  orders: string;
  duration?: string | null;
  benefits: string[];
  guarantees: string[];
  categoryId?: number | null;
  category?: ServiceCategory | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content?: string | null;
  category: string;
  imageUrl: string;
  status: string;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  status: string;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface EventSlide {
  id: number;
  imageUrl: string;
  order: number;
}

export interface Achievement {
  id: number;
  imageUrl: string;
  text: string;
  order: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  imageUrl: string;
  title?: string | null;
  description: string;
  linkText?: string | null;
  isFeatured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: number;
  name: string;
  description1?: string | null;
  description2?: string | null;
  imageUrl: string;
  stats: Array<{ label: string; subtext: string }>;
  isHighlight: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AboutStat {
  id: number;
  value: string;
  label: string;
  order: number;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl?: string | null;
  logoText?: string | null;
  order: number;
}

export interface AboutData {
  stats: AboutStat[];
  partners: Partner[];
}

export interface SocialLink {
  id: number;
  platform: string;
  href: string;
  bgColor?: string | null;
  order: number;
}
