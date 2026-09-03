export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amara Okafor",
    role: "Regular guest",
    quote:
      "The food was beautifully presented and tasted even better. The entire experience felt thoughtful from beginning to end.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tunde Williams",
    role: "Food enthusiast",
    quote:
      "The atmosphere, service and flavours were exceptional. The Art of Dining has quickly become one of my favourite restaurants.",
    rating: 5,
  },
  {
    id: 3,
    name: "Zainab Ibrahim",
    role: "First-time guest",
    quote:
      "Every dish felt special, and the staff made us feel completely welcome. I will definitely be returning.",
    rating: 5,
  },
];
