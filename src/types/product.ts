export interface Review {
  perfilName: string;
  raiting: number;
  description: string;
  date: string;
  title: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  promotionalPrice: number;
  quantityInStock: number;
  sectionHomePage: string;
  images: Array<string>;
  reviews: Array<Review>;
  informations: string;
  characteristics: {
    weight: string;
    color: string;
    brand: string;
    width: string;
    height: string;
    material: string;
    model: string;
    ensure: string;
  };
}
