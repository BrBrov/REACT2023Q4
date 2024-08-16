interface Temperature {
  value: number;
  unit: string;
}

interface MashTemperature {
  temp: Temperature;
  duration: number | null;
}

interface FermentationTemperature {
  temp: Temperature;
}

interface Method {
  mash_temp: Array<MashTemperature>;
  fermentation: FermentationTemperature;
  twist: null | string;
}

export default Method;
