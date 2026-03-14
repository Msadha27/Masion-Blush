//bags
import bag1 from "@/assets/bags/bag1.jpg";
import bag2 from "@/assets/bags/bag2.jpg";
import bag3 from "@/assets/bags/bag3.jpg";
import bag4 from "@/assets/bags/Koreanbag.jpg";
import bag5 from "@/assets/bags/bag4.jpg";
import bag6 from "@/assets/bags/Handbag.jpg";

import CategoryMenu from "@/components/CategoryMenuTemp";

const Bags = () => {
  return (
      <div className="min-h-screen py-20 px-6">
        <CategoryMenu />
        {/* BAGS */}
        {/* BAGS */}
        <div className="mb-16">
        <h2 className="text-2xl font-serif mb-6">👜 Aesthetic Bags</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Add 3 bag blocks */}
          {/*bag 1*/}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={bag1}
              alt="The Purple Tree Printed Canvas Tote Bag"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              The Purple Tree Printed Canvas Tote Bag
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A stylish printed canvas tote perfect for college days,
              casual outings and everyday minimal styling.
            </p>

            <a
              href="https://amzn.to/4rSHqtS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/*bag 2*/}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={bag2}
              alt="Eco Right Large Canvas Tote with Zipper"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              Eco Right Large Canvas Tote with Zipper
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Spacious and practical with inner pocket and zipper —
              perfect for college, shopping and office essentials.
            </p>

            <a
              href="https://amzn.to/4b0je3d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/*bag 3*/}
          <div className="border rounded-xl p-6 shadow-sm">
              <img
                src={bag3}
                alt="The Purple Tree Printed Fatty Tote Bag"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold mb-2">
                The Purple Tree Printed Fatty Tote Bag
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                A cute and gift-worthy printed tote —
                stylish, functional and perfect for everyday use.
              </p>

              <a
                href="https://amzn.to/4b0j7EP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                View on Amazon
              </a>
            </div>
          {/*bag 4*/}
          <div className="border rounded-xl p-6 shadow-sm">
              <img
                src={bag4}
                alt="Korean Style Canvas Tote Bag"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />  
              <h3 className="font-semibold mb-2">
                Kawn® Korean Corduroy Aesthetic Tote Bag
              </h3>   
              <p className="text-sm text-muted-foreground mb-4">
               A soft Korean-style corduroy tote with a ribbed design — neutral, minimal
               and perfect for college, travel and everyday soft-girl outfits.
              </p>
              <a
                href="https://amzn.to/4aTG0Zg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                View on Amazon
              </a>
              </div>
          {/*bag 5*/}
          <div className="border rounded-xl p-6 shadow-sm">
              <img
                src={bag5}
                alt="ADISA Minimal Crossbody Sling Bag"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />  
              <h3 className="font-semibold mb-2">
                ADISA Minimal Crossbody Sling Bag
              </h3>   
              <p className="text-sm text-muted-foreground mb-4">
               A chic and versatile canvas tote designed for everyday use.
               Perfect for college, errands, casual outings, and effortless minimal styling.
               Lightweight, durable, and spacious — your go-to carry-all for a stylish day on the move.
              </p>
              <a
                href="https://amzn.to/40LF709"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                View on Amazon
              </a>
              </div>
          {/*bag 6*/}
          <div className="border rounded-xl p-6 shadow-sm">
              <img
                src={bag6}
                alt="Stylish Knitted Crochet Handbag"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">
                Elegant Evening Clutch Bag
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
               A stylish evening clutch designed to complement both ethnic and modern outfits. Featuring a sleek textured finish and a delicate chain strap, this handbag adds a touch of elegance to any party or festive look. Compact yet spacious enough for your essentials, 
               it’s the perfect accessory for weddings, celebrations, and special occasions.
              </p>
              <a
                href="https://amzn.to/4snpmZc"
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
  );
};

export default Bags;