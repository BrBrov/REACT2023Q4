import Volume from './Volume';
import Method from './Method';
import Ingredients from './Ingredients';

interface ResponseData {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: Array<string>;
  brewers_tips: string;
  contributed_by: string;
}

export default ResponseData;
