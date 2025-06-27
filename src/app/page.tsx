import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedRaces from "../components/FeaturedRaces";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedRaces />
    </div>
  );
}
