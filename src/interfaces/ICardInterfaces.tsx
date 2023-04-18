export interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: objectDataCard;
  location: objectDataCard;
  image: string;
  episode: Array<string>;
  residents: Array<string>;
  url: string;
  created: string;
}

interface objectDataCard {
  name: string;
  url: string;
}

export interface IForms {
  name: string;
  foto: string;
  birth: string;
  fruit: string;
  male: string;
  agreement: boolean;
}

export interface IErrors {
  name: boolean;
  foto: boolean;
  birth: boolean;
  fruit: boolean;
  male: boolean;
  agreement: boolean;
}
