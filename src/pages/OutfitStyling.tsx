import CategoryMenu from "@/components/CategoryMenuTemp";

const OutfitStyling = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        <CategoryMenu />

        <h1 className="text-3xl font-bold mb-10">
          Outfit Styling Ideas ✨
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Kurti */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src="/outfitstyling/kalamkari.jpg"
              alt="Printed Kalamkari Kurti"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              Women Printed Kalamkari Khadi Cotton Kurti
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stylish and comfortable kurti with unique tribal print design.
              Perfect for daily wear and casual outings at an affordable price.
              Rating: 3.9 ⭐
            </p>
            <a href="https://amzn.to/4sykm4x" className="text-primary underline">
              View on Amazon
            </a>
          </div>

          {/* Jeans */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src="/outfitstyling/jeans.jpg"
              alt="Baggy Jeans"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              London Hills Women's Baggy High Rise Jeans
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Relaxed fit trendy baggy jeans. Best seller with high comfort and
              stylish streetwear look. Rating: 4.0 ⭐
            </p>
            <a href="https://amzn.to/3O6snyA" className="text-primary underline">
              View on Amazon
            </a>
          </div>

          {/* Bag */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src="/outfitstyling/bag.jpg"
              alt="Handbag"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              Aesthetic PU Leather Shoulder Handbag
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Elegant tote bag for daily use. Perfect for office, college, and
              casual outings. Lightweight and stylish. Rating: 3.8 ⭐
            </p>
            <a href="https://amzn.to/4saBSuQ" className="text-primary underline">
              View on Amazon
            </a>
          </div>

          {/* Watch */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src="/outfitstyling/watch.jpg"
              alt="Watch"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              Louis Devin Rose Gold Mesh Chain Watch
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Elegant minimal watch with premium finish. Perfect accessory for
              modern outfits. Rating: 4.1 ⭐
            </p>
            <a href="https://amzn.to/4t8L9nS" className="text-primary underline">
              View on Amazon
            </a>
          </div>

          {/* Bangle */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src="/outfitstyling/bangles.jpg"
              alt="Bangle"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              Gold Plated Kada Bracelet for Women
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stylish gold-plated bracelet to elevate your outfit look.
              Lightweight and trendy accessory. Rating: 4.0 ⭐
            </p>
            <a href="https://amzn.to/48fGIQ2" className="text-primary underline">
              View on Amazon
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OutfitStyling;