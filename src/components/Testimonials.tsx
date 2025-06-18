
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      content: "The wedding invitations were absolutely stunning! Every detail was perfect, and our guests couldn't stop complimenting them. The quality and craftsmanship exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Art Collector",
      content: "I've purchased several decorative pieces, and each one is a masterpiece. The attention to detail and unique artistic vision makes these pieces truly special additions to our home.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Event Planner",
      content: "Working with this artisan has been a dream! Custom pieces for our events always receive amazing feedback from clients. Professional, creative, and reliable every time.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dainty-gray mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who have experienced the magic of handcrafted artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name} 
              className="bg-dainty-blue/20 rounded-2xl p-8 relative animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="w-8 h-8 text-primary mb-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-primary rounded-full mr-1"></div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-dainty-blue pt-4">
                <div className="font-semibold text-dainty-gray">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
