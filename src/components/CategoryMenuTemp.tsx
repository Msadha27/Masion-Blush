import { NavLink } from "react-router-dom";

const categories = [
  { name: "Dresses", path: "/fashion" },
  { name: "Necklaces", path: "/necklaces" },
  { name: "Outfit Styling", path: "/outfit-styling" },
];

const CategoryMenu = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-12 border-b pb-4">
      {categories.map((cat) => (
        <NavLink
          key={cat.name}
          to={cat.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-primary"
            }`
          }
        >
          {cat.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryMenu;