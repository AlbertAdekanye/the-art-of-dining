import AboutSection from "../components/home/AboutSection";
import ExperienceSection from "../components/home/ExperienceSection";
import FeaturedDishes from "../components/home/FeaturedDishes";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <ExperienceSection />
      <Testimonials />
    </>
  );
}

export default Home;
