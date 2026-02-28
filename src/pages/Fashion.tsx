import necklace1 from "@/assets/fashion/Palmon black.jpg";
import necklace2 from "@/assets/fashion/Palmon pink.jpg";
import necklace3 from "@/assets/fashion/Heart.jpg";
import necklace4 from "@/assets/fashion/Blackheart.jpg";
import necklace5 from "@/assets/fashion/Pinkheart.jpg";
//dresses
import dress1 from "@/assets/fashion/Maxi1.jpg";
import dress2 from "@/assets/fashion/Yellowmaxi.jpg";
import dress3 from "@/assets/fashion/Pinkfloral.jpg";
import dress4 from "@/assets/fashion/Purplekurti.jpg";
import dress5 from "@/assets/fashion/Brownkurti.jpg"
//bags
import bag1 from "@/assets/fashion/bag1.jpg";
import bag2 from "@/assets/fashion/bag2.jpg";
import bag3 from "@/assets/fashion/bag3.jpg";
import bag4 from "@/assets/fashion/Koreanbag.jpg"


const Fashion = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        <h1 className="text-3xl font-serif mb-12 text-center">
          Curated Fashion Picks
        </h1>

        {/* NECKLACES */}
        <h2 className="text-2xl font-serif mb-6">✨ Minimal Necklaces</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Product 1 */}
          <div className="border rounded-xl p-6 shadow-sm">
           <img src={necklace1} alt="PALMONAS Blue Stone Gold Necklace" className="w-full h-64 object-cover rounded-lg mb-4"/>

           <h3 className="font-semibold mb-2">
                 PALMONAS Blue Stone Gold Necklace
           </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A delicate blue stone pendant with gold finish — waterproof,
              anti-tarnish and perfect for everyday minimal styling.
            </p>

            <a
              href="https://amzn.to/4aLVkr2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
         </div>
          {/* Duplicate block for other 2 necklaces */}
          {/* Product 2 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={necklace2}
              alt="PALMONAS Pink Emerald Geometric Pendant"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              PALMONAS Pink Emerald Geometric Pendant
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A soft pink emerald geometric pendant with a modern gold finish —
              waterproof, anti-tarnish and perfect for gifting or everyday elegance.
            </p>

            <a
              href="https://amzn.to/472G4EX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* Product 3 */}
         <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={necklace3}
              alt="18K Gold Plated Open Heart Pendant Necklace"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              18K Gold Plated Open Heart Pendant Necklace
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A timeless open-heart pendant with a sleek gold snake chain —
              anti-tarnish, hypoallergenic and perfect for effortless everyday elegance.
            </p>

            <a
              href="https://amzn.to/4kI059w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>

          {/* Product 4 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={necklace4}
              alt="Gold Chain Necklace with Black Heart Charms"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              Gold Chain Necklace with Black Heart Charms
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A dainty multi-charm necklace with subtle black heart accents —
              minimal, trendy and perfect for everyday layering.
            </p>

            <a
              href="https://amzn.to/3ORwluR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* Product 5 */}
         <div className="border rounded-xl p-6 shadow-sm">
          <img
            src={necklace5}
            alt="18K Gold Plated Korean Heart Pendant Necklace"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />

          <h3 className="font-semibold mb-2">
            18K Gold Plated Korean Heart Pendant Necklace
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            A soft-girl style Korean heart pendant necklace — anti-tarnish, waterproof,
            minimal and perfect for daily wear or gifting.
          </p>

          <a
            href="https://amzn.to/46uUUnD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            View on Amazon
          </a>
        </div>

        </div>


        {/* DRESSES */}
        <h2 className="text-2xl font-serif mb-6">🌸 Floral Maxi Dresses</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">    

          {/* Add 3 dress blocks same structure */}
          {/* dress1 */}
          <div className="border rounded-xl p-6 shadow-sm">
              <img
                src={dress1}
                alt="Leriya Floral Georgette A-Line Maxi Dress"
                className="w-full h-80 object-contain bg-white rounded-lg mb-4"
              />

              <h3 className="font-semibold mb-2">
                Leriya Floral Georgette A-Line Maxi Dress
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                A flowy georgette maxi dress with soft floral prints and a flattering
                A-line silhouette — perfect for summer outings and effortless elegance.
              </p>

              <a
                href="https://amzn.to/4s0jG7c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                View on Amazon
              </a>
            </div>
          {/* dress2 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress2}
              alt="AASK Floral One-Piece Maxi Dress"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              AASK Floral One-Piece Maxi Dress
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A soft floral one-piece maxi with an effortless silhouette —
              lightweight, feminine and perfect for everyday elegance.
            </p>

            <a
              href="https://amzn.to/4s1CdjM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* dress3 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress3}
              alt="Sheetal Associates Floral Puff Sleeve Maxi Dress"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              Floral Puff Sleeve High-Waist Maxi Dress
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A romantic floral maxi dress with puff sleeves and a flattering high-waist silhouette —
              flowy, feminine and perfect for brunch dates or soft aesthetic outings.
            </p>

            <a
              href="https://amzn.to/4aMHcxJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* dress4 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img 
              src={dress4}
              alt="Purple Floral Kurti"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              Elegant Rayon Viscose Purple Kurti Set – Embroidered Kurta, Pant & Dupatta
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Upgrade your ethnic wardrobe with this beautifully crafted purple rayon-viscose kurti set. Designed with elegant gold print embroidery, this set includes a straight-fit kurta, matching pants, and a soft dupatta for the perfect traditional yet modern Indian outfit.
            </p>

            <a
              href="https://amzn.to/4l6VzBO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* dress5 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress5}
              alt="Brown Ethnic Kurti Set"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              Elegant Embroidered Anarkali Kurta Set — Premium Traditional Wear for Women
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A premium ethnic look at an affordable price — ideal for women who want stylish, comfortable, and classy Indian wear. This elegant Anarkali kurta set features intricate embroidery, a flattering silhouette, and comes with matching pants and a dupatta for a complete traditional outfit perfect for festivals, weddings, or everyday
            </p>

            <a
              href="https://amzn.to/3P8LuYQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>  
        {/* BAGS */}
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
        </div>

      </div>

      </div>
    </div>


  );
};

export default Fashion;