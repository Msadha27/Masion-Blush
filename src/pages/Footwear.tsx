//Footwear
import footwear1 from "@/assets/footwear/jutti.jpg";
import footwear2 from "@/assets/footwear/canvas.jpg";
import footwear3 from "@/assets/footwear/blacksandal.jpg";
import CategoryMenu from "@/components/CategoryMenuTemp";

const Footwear = () => {
  return (
      <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
         <CategoryMenu/>
          {/* Footwear */}
              <div className="mb-16">
              <h2 className="text-2xl font-serif mb-6">👡 Aesthetic Footwear</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Add 3 footwear blocks */}
                {/* footwear 1 */}
                <div className="border rounded-xl p-6 shadow-sm">
                  <img
                    src={footwear1}
                    alt="Traditional Jutti Shoes"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />  
                  <h3 className="font-semibold mb-2">
                    Traditional Jutti Shoes
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A pair of traditional jutti shoes featuring intricate embroidery and a comfortable fit — perfect
                    for formal and casual occasions alike. These versatile shoes add a touch of timeless elegance to any outfit.  
                  </p>
                  <a
                    href="https://amzn.to/4rlw94T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    View on Amazon
                  </a>
                  </div>
                  {/* footwear 2 */}
                  <div className="border rounded-xl p-6 shadow-sm">
                    <img
                      src={footwear2}
                      alt="CANVI Women's Ethnic Flats Sandals"
                      className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                    />

                    <h3 className="font-semibold mb-2">
                      CANVI Stylish Ethnic Flats — Comfortable Women's Casual Sandals
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      Elegant and comfortable ethnic flats designed for everyday fashion. 
                      These stylish sandals feature a pointed toe design and soft synthetic leather,
                      making them perfect for college, casual outings, and ethnic outfits.
                    </p>

                    <a
                      href="https://amzn.to/4s6XWr1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      View on Amazon
                    </a>
                  </div>
                  {/* footwear 3 */}
                  <div className="border rounded-xl p-6 shadow-sm">
                    <img
                      src={footwear3}
                      alt="Women Stylish Slippers Flip Flops Cream Flat Slip on Sandals"
                      className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                    />

                    <h3 className="font-semibold mb-2">
                     Women Stylish Slippers Flip Flops Cream Flat Slip on Sandals
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      Stylish and comfortable ethnic sandals designed for everyday fashion. 
                      These versatile shoes feature a classic design and high-quality materials,
                      making them perfect for both casual and formal occasions.
                    </p>

                    <a
                      href="https://amzn.to/3OYWEzE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      View on Amazon
                    </a>
                  </div>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Footwear;