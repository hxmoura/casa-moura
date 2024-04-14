export interface product {
  id: number;
  name: string;
  brand: string;
  price: number;
  promotionalPrice: number;
  quantityInStock: number;
  sectionHomePage: string;
  image: string;
  reviews: Array<{
    perfilName: string;
    raiting: number;
    description: string;
  }>;
}
