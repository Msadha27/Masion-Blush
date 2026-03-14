
import dress1 from "@/assets/fashion/Maxi1.jpg";
import dress2 from "@/assets/fashion/Yellowmaxi.jpg";
import dress3 from "@/assets/fashion/Pinkfloral.jpg";
import dress4 from "@/assets/fashion/Purplekurti.jpg";
import dress5 from "@/assets/fashion/Brownkurti.jpg";
import dress6 from "@/assets/fashion/Lehanga.jpg";
import dress7 from "@/assets/fashion/BlackMaxi.jpg";
import dress8 from "@/assets/fashion/Shortkurti.jpg";
import dress9 from "@/assets/fashion/Ethnicwear.jpg";
import dress10 from "@/assets/fashion/Holi.jpg";
import dress11 from "@/assets/fashion/Blackanarkali.jpg";
import dress12 from "@/assets/fashion/Ethnicpurple.jpg";
import dress13 from "@/assets/fashion/Greenkurti.jpg";
import dress14 from "@/assets/fashion/Bluekurta.jpg";
import dress15 from "@/assets/fashion/elegentkurta.jpg";


import CategoryMenu from "@/components/CategoryMenuTemp";
//dresses


const Fashion = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
         <CategoryMenu/>
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
              Elegant Rayon Viscose Purple Kurti Set.Embroidered Kurta, Pant & Dupatta
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
          {/* dress6 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress6}
              alt="Elegant Lehenga Choli Set"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2"> 
              Kanjivaram Silk Zari Weaving Half Saree (Langa Voni).Bridal & Festive Wear
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              A stunning lehenga choli set with intricate embroidery and a flowy silhouette —
              perfect for weddings, festivals or special occasions.
            </p>
            <a
              href="https://amzn.to/46yLwzg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* dress7 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress7}
              alt="Elegant Ombre Pleated Maxi Dress"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />  
            <h3 className="font-semibold mb-2">
              Elegant Ombre Pleated Maxi Dress
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              An elegant long-sleeve ombre maxi dress featuring a soft pleated gradient.
              Perfect for parties, dinners, outings, and effortless classy styling.
              Lightweight, comfortable, and beautifully flowy — a true statement piece.
            </p>
            <a
              href="https://amzn.to/4cjAW2S"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
            </div>
          {/* dress8 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress8}
              alt="Paisley Cotton Tunic Top"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
             Paisley Cotton Tunic Top
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
           A soft cotton paisley printed tunic designed for comfort and everyday elegance. Perfect for casual outings, office wear, or relaxed styling.
            </p>
            <a
              href="https://amzn.to/4uqF2wT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* dress9 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress9}
              alt="Ethnicwear"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              Elegant Embroidered Anarkali Kurta Set — Premium Traditional Wear for Festive Occasions
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A beautifully embroidered anarkali kurta set with traditional motifs and premium fabric.
              Ideal for weddings, festivals, and special celebrations.
            </p>
            <a
              href="https://amzn.to/47fVo16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* dress10 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src={dress10} 
              alt="Holi Festival Outfit"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
             Rayon Printed Anarkali Kurti — Festive Ethnic Outfit for Celebrations
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A vibrant and colorful outfit set designed for the Holi festival. This set includes a bright kurta, comfortable pants, and a matching dupatta — perfect for celebrating the festival of colors in style and comfort.
            </p>
            <a
              href="https://amzn.to/4unWJgd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
            {/* dress11 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src={dress11} 
              alt="Elegant Black Anarkali Kurta Set"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              ANNI Rayon Printed Kurta Pant Set — Comfortable Ethnic Outfit for Daily Wear
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
            This elegant rayon kurta pant set combines simplicity with style.
The lightweight fabric and attractive printed design make it a great choice for casual outings, workdays, and relaxed ethnic fashion. A comfortable and affordable outfit for women who love effortless style.
            </p>
            <a
              href="https://amzn.to/4swR8Tg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>
          {/* dress12 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src={dress12} 
              alt="Elegant Purple Anarkali Kurta Set"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
             ANNI Designer Embroidered Tunic Top — Elegant Ethnic Style for Women
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A stunning purple anarkali kurta set with intricate embroidery and high-quality fabric.
              Ideal for weddings, festivals, and other special events.
            </p>
            <a
              href="https://amzn.to/4lwtvbe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>  
          {/* dress13 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img  
              src={dress13} 
              alt="Elegant Green Anarkali Kurta Set"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              FABNEX Kurta Pant & Dupatta Set — Elegant Ethnic Outfit for Women
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
            A beautiful ethnic kurta set featuring a stylish printed design with matching pants and dupatta.
This outfit offers a perfect blend of comfort and elegance, making it ideal for festivals, family gatherings, and casual traditional wear. The soft fabric and graceful design make it a great budget-friendly fashion choice.
            </p>
            <a
              href="https://amzn.to/46TtA2w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>    
          {/* dress14 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress14}
              alt="Elegant Blue Anarkali Kurta Set"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />
            <h3 className="font-semibold mb-2">
              GoSriKi Cotton Kurta Set — Stylish A-Line Kurta with Pants for Women
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
            A modern A-line cotton kurta set designed for comfort and everyday elegance.
            Made with breathable cotton fabric, this outfit is perfect for college, office, and daily wear. The stylish printed pattern adds
            a trendy touch while maintaining a classic ethnic look.
            </p>
            <a
              href="https://amzn.to/40YSgDi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div> 
          {/* dress15 */}
                   
          <div className="border rounded-xl p-6 shadow-sm">
            <img
              src={dress15}
              alt="Klosia Women Embroidered Kurta Pant Set with Dupatta"
              className="w-full h-80 object-contain bg-white rounded-lg mb-4"
            />

            <h3 className="font-semibold mb-2">
              Klosia Women Embroidered Kurta Pant Set with Dupatta
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Elegant maroon kurta and pant set featuring stylish embroidery on the neckline
              and hem, paired with a matching dupatta. Perfect for festive occasions, family
              gatherings, and traditional celebrations while maintaining comfort and style.
            </p>

            <a
              href="https://amzn.to/4shMc54"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>   
        </div>
        <div>
      
            
            </div>
            </div>
          <div>
            
          </div>
        </div>
  );
}


export default Fashion;