export interface Project {
  id: string;
  title: string;
  minerals: string[];
  location: string;
  description: string;
  image: string;
  highlights: string[];
  reportUrl?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Press Release' | 'Update' | 'Media';
  imageUrl?: string;
  link?: string;
}

export interface StockDataPoint {
  name: string;
  value: number;
}
