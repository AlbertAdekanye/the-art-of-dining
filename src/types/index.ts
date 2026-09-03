export type MenuCategory =
  | "Main Course"
  | "Grills"
  | "Pasta"
  | "Dessert"
  | "Drinks";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  featured?: boolean;
}
