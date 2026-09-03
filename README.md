# The Art of Dining

A modern and responsive restaurant website concept designed to showcase a restaurant’s food, atmosphere and services.

The project demonstrates how a well-designed website can help restaurants display their menu, receive table reservation requests and connect with potential customers.

## Live Demo

[View The Art of Dining](https://the-art-of-dining.vercel.app/)

## Features

- Modern dark restaurant design
- Fully responsive layout
- Interactive food-category filters
- Restaurant menu with Nigerian naira prices
- Table reservation form
- Contact form
- About and restaurant story page
- Customer testimonials
- WhatsApp contact button
- Custom 404 page
- Social-sharing metadata
- Vercel Analytics
- Mobile navigation
- SEO-friendly metadata

## Pages

- Home
- Menu
- About
- Reservations
- Contact
- 404 Not Found

## Built With

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Vercel Analytics

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your computer.

Check your installation:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Enter the project directory:

```bash
cd the-art-of-dining
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── home/
│   │   ├── AboutSection.tsx
│   │   ├── ClientCTA.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── FeaturedDishes.tsx
│   │   ├── Hero.tsx
│   │   ├── ReservationCTA.tsx
│   │   └── Testimonials.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── SiteLayout.tsx
│   ├── menu/
│   │   └── MenuCard.tsx
│   └── ui/
│       ├── ScrollToTop.tsx
│       └── WhatsAppButton.tsx
├── data/
│   ├── menu.ts
│   └── testimonials.ts
├── pages/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── NotFound.tsx
│   └── Reservations.tsx
├── types/
│   └── index.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Important Note

This is a concept project created for portfolio and demonstration purposes. The restaurant name, menu, prices, address, testimonials and contact information are fictional.

The reservation and contact forms currently demonstrate the user interface only. They are not connected to a database or email service.

## Customisation

You can adapt the project for a real restaurant by changing:

- Restaurant name and logo
- Food images
- Menu items and prices
- Address and opening hours
- Phone and WhatsApp numbers
- Email address
- Social-media links
- Restaurant story and testimonials

## Deployment

This project can be deployed on Vercel.

Build settings:

```text
Framework: Vite
Build command: npm run build
Output directory: dist
```

The included `vercel.json` file allows React Router pages to work correctly when they are refreshed directly.

## Developer

Designed and developed by **Albert Adekanye — CodeWithKanye**.

- Portfolio: [codewithkanye-portfolio.vercel.app](https://codewithkanye-portfolio.vercel.app/)
- GitHub: [AlbertAdekanye](https://github.com/AlbertAdekanye)
- WhatsApp: [Contact me](https://wa.me/2349054019407)

## Need a Website?

If you own a restaurant or another business and need a modern website, contact me through WhatsApp to discuss your project.

## License

This project is available for portfolio and educational purposes. Images belong to their respective owners and providers.