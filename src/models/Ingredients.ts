import Volume from './Volume';

interface ComponentsIngredients {
  name: string;
  amount: Volume;
}

interface HopsData {
  name: string;
  amount: Volume;
  add: string;
  attribute: string;
}
interface Ingredients {
  malt: Array<ComponentsIngredients>;
  hops: Array<HopsData>;
  yeast: string;
}

export default Ingredients;
