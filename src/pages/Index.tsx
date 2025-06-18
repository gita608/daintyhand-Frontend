
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductCarousel from "@/components/ProductCarousel";
import Products from "@/components/Products";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <ProductCarousel />
      <Products />
      <FeaturedWork />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
