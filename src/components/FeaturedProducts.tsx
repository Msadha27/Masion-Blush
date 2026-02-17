import { Heart, ExternalLink } from "lucide-react";

const products = [
  {
    name: "Silk Hair Scrunchie Set",
    price: "$12.99",
    tag: "Best Seller",
    tagColor: "bg-blush-light text-primary",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
  },
  {
    name: "Aesthetic Desk Organizer",
    price: "$24.99",
    tag: "Amazon Pick",
    tagColor: "bg-lavender-light text-foreground",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=400&fit=crop",
  },
  {
    name: "Gold Layered Necklace",
    price: "$18.50",
    tag: "Trending",
    tagColor: "bg-gold-light text-foreground",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
  },
  {
    name: "Cozy Reading Journal",
    price: "$15.00",
    tag: "New",
    tagColor: "bg-sage-light text-secondary-foreground",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
  },
  {
    name: "Pastel Tote Bag",
    price: "$22.00",
    tag: "Best Seller",
    tagColor: "bg-blush-light text-primary",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop",
  },
  {
    name: "Cloud LED Lights",
    price: "$19.99",
    tag: "Dorm Essential",
    tagColor: "bg-lavender-light text-foreground",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="shop" className="py-24 px-6 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Handpicked for you
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Featured Picks
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Add to favorites"
                >
                  <Heart className="w-4 h-4 text-primary" />
                </button>
                <span className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full ${product.tagColor}`}>
                  {product.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    {product.price}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
