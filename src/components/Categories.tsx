import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import api from "../../api";

interface Category {
  id: number;
  title: string;
  description: string;
  image: string; // from Laravel API
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get("/categories").then(res => {
      setCategories(res.data.data);
    }).catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dainty-gray mb-4 md:mb-6">
            Our Craft Categories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Each piece is thoughtfully created with premium materials and meticulous attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="animate-fade-up">
              <CategoryCard
                title={category.title}
                description={category.description}
                imageUrl={category.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
