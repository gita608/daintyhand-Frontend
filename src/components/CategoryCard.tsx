import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;     // now optional
  imageUrl?: string;     // now optional
  delay?: number;
}

const CategoryCard = ({ title, description, icon: Icon, imageUrl, delay = 0 }: CategoryCardProps) => {
  return (
    <div
      className="group craft-card hover-lift relative h-80"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      {imageUrl && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dainty-gray/80 via-dainty-gray/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-3">
            {Icon && (
              <div className="p-2 bg-primary/20 rounded-lg">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            )}
            <h3 className="font-playfair text-xl font-semibold text-dainty-gray">{title}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
