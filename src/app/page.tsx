import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedRaces from "../components/FeaturedRaces";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedRaces />
      <Footer />
    </div>
  );
}
