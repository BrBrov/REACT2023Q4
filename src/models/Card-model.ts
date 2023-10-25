import Volume from './Volume';

export interface CardProps {
  id: number;
  name: string;
  description: string;
  image_url: string | null;
  volume: Volume;
  abv: number;
  srm: number;
  ibu: number;
}
