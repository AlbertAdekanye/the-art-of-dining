import AboutSection from "../components/home/AboutSection";
import ClientCTA from "../components/home/ClientCTA";
import ExperienceSection from "../components/home/ExperienceSection";
import FeaturedDishes from "../components/home/FeaturedDishes";
import Hero from "../components/home/Hero";
import ReservationCTA from "../components/home/ReservationCTA";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <ExperienceSection />
      <Testimonials />
      <ReservationCTA />
      <ClientCTA />
    </>
  );
}

export default Home;
