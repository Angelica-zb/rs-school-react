export interface ICard {
  id: number;
  name: string;
  cost: number;
  description: string;
  image: string;
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
