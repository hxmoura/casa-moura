export interface Departament {
  name: string;
  slug: string;
  icon: string;
  categories: Array<{
    name: string;
    link: string;
  }>;
}
