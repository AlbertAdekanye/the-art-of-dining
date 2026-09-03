import AboutSection from "../components/home/AboutSection";
import ExperienceSection from "../components/home/ExperienceSection";
import FeaturedDishes from "../components/home/FeaturedDishes";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <ExperienceSection />
    </>
  );
}

export default Home;
