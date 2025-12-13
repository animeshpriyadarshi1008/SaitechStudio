export interface Partner {
  name: string;
  logo: string;
  description?: string;
  partnership?: string;
}

export interface Service {
  title: string;
  desc: string;
  image: string;
  details: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface Stat {
  number: number | string;
  suffix?: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  image: string;
  icon?: string;
  subtitles?: string[];
  themeColor?: string;
}