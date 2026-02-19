import fashionImg from "@/assets/category-fashion.jpg";
import booksImg from "@/assets/category-books.jpg";
import amazonImg from "@/assets/category-amazon.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Fashion Finds",
    description: "Curated outfits, accessories & style inspo for every aesthetic.",
    image: fashionImg,
    color: "bg-blush-light",
    path: "/fashion"
,
  },
  {
    title: "Book Club",
    description: "Page-turners, cozy reads & books that look gorgeous on your shelf.",
    image: booksImg,
    color: "bg-sage-light",
    path: "/books"
  },
  {
    title: "Amazon Picks",
    description: "The prettiest dorm essentials, desk accessories & hidden gems.",
    image: amazonImg,
    color: "bg-lavender-light",
    path: "/finds"
  },
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Shop by Category
          </h2>
          <Link to="/fashion">
                {/* Fashion Card Content */}
          </Link>
          <Link to="/books">
              {/* Books Card Content */}
          </Link>
          <Link to="/finds">
             {/* Finds Card Content */}
          </Link>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
  {categories.map((cat, i) => (
    <Link
      key={cat.title}
      to={cat.path}
      className="group block opacity-0 animate-fade-up"
      style={{ animationDelay: `${0.2 + i * 0.15}s` }}
    >
      <div className={`${cat.color} rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
            {cat.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {cat.description}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
}

export default CategorySection;
