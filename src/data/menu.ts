import type { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "The Artisan Burger",
    description:
      "Flame-grilled beef, mature cheddar, caramelised onions and our signature sauce.",
    price: 12500,
    category: "Grills",
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
  },
  {
    id: 2,
    name: "Pepper Steak",
    description:
      "Tender grilled beef served with vegetables and a rich peppercorn sauce.",
    price: 18500,
    category: "Main Course",
    image:
      "https://images.pexels.com/photos/27039847/pexels-photo-27039847/free-photo-of-close-up-of-a-plate-with-a-gourmet-dish.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
  },
  {
    id: 3,
    name: "Creamy Prawn Pasta",
    description:
      "Pasta tossed with seasoned prawns, herbs and our creamy house sauce.",
    price: 16000,
    category: "Pasta",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
  },
];
