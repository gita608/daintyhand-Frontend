
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dainty-cream via-dainty-pink/10 to-dainty-blue/10 overflow-hidden">
      {/* Decorative elements - adjusted for mobile */}
      <div className="absolute top-16 left-4 md:top-20 md:left-10 animate-pulse">
        <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary opacity-60" />
      </div>
      <div className="absolute bottom-24 right-8 md:bottom-32 md:right-16 animate-pulse delay-1000">
        <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-secondary opacity-40" />
      </div>
      <div className="absolute top-1/3 right-8 md:right-20 animate-pulse delay-500">
        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary opacity-80" />
      </div>

      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-dainty-gray mb-4 md:mb-6 leading-tight">
            Handcrafted
            <span className="text-gradient block">with Love</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto font-light px-2">
            Discover unique handmade crafts, custom invitations, and beautiful decorative pieces 
            that tell your story with artisanal elegance.
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-dainty-blue-dark text-dainty-blue-dark hover:bg-dainty-blue-dark hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300"
            >
              Custom Orders
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
