export interface Review {
  perfilName: string;
  raiting: number;
  description: string;
  date: string;
  title: string;
}

interface Informations {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  promotionalPrice: number;
  quantityInStock: number;
  sectionHomePage: string;
  images: Array<string>;
  reviews: Array<Review>;
  description: string;
  informations: Informations;
}
