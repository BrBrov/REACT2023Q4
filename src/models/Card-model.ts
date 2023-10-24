import Volume from './Volume';

export interface CardProps {
  id: number;
  name: string;
  description: string;
  image_url: string;
  volume: Volume;
  abv: number;
  srm: number;
  ibu: number;
}
