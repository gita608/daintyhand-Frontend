
import { Star, Users, Award } from "lucide-react";

const FeaturedWork = () => {
  const stats = [
    { icon: Star, label: "5-Star Reviews", value: "2,500+" },
    { icon: Users, label: "Happy Customers", value: "5,000+" },
    { icon: Award, label: "Years of Crafting", value: "15+" }
  ];

  const featuredItems = [
    {
      title: "Vintage Wedding Suite",
      description: "Complete invitation package with RSVP cards and envelopes",
      price: "$125",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Botanical Wall Art",
      description: "Hand-pressed flower arrangement in custom frame",
      price: "$85",
      image: "https://images.unsplash.com/photo-1516634591446-24c609e2d634?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Memory Scrapbook",
      description: "Personalized photo album with handcrafted embellishments",
      price: "$95",
      image: "https://images.unsplash.com/photo-1506485338023-6ce5f38de033?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dainty-pink/5 to-dainty-blue/5">
      <div className="container px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-playfair text-3xl font-bold text-dainty-gray mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Items */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dainty-gray mb-6">
            Featured Creations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved handcrafted pieces, each one unique and made with love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div 
              key={item.title} 
              className="craft-card group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-square overflow-hidden rounded-t-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-dainty-gray">{item.title}</h3>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <button className="w-full bg-secondary hover:bg-dainty-blue-dark text-dainty-gray font-semibold py-3 rounded-lg transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
