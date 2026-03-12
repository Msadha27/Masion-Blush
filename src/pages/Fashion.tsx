import CategoryMenu from "@/components/Categorymenu";
//dresses
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
//bags
import bag1 from "@/assets/fashion/bag1.jpg";
import bag2 from "@/assets/fashion/bag2.jpg";
import bag3 from "@/assets/fashion/bag3.jpg";
import bag4 from "@/assets/fashion/Koreanbag.jpg";
import bag5 from "@/assets/fashion/bag4.jpg";
import bag6 from "@/assets/fashion/Handbag.jpg";
//Watches
import watch1 from "@/assets/fashion/rosegoldwatch.jpg";
import watch2 from "@/assets/fashion/Halowatch.jpg";
import watch3 from "@/assets/fashion/watchbrace.jpg";
import watch4 from "@/assets/fashion/steelwatch.jpg";

//Footwear
import footwear1 from "@/assets/fashion/jutti.jpg";
import footwear2 from "@/assets/fashion/canvas.jpg";



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
        </div>
        <div>
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
          <div>
             {/* Watches*/}
              <div className="mb-16">
              <h2 className="text-2xl font-serif mb-6">⌚ Elegant Watches</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Add 3 watch blocks */}
                {/* watch 1 */}
                <div className="border rounded-xl p-6 shadow-sm">
                  <img
                    src={watch1}
                    alt="Rose Gold Minimalist Watch"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />  
                  <h3 className="font-semibold mb-2">
                    Rose Gold Minimalist Watch
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A sleek and elegant rose gold watch with a minimalist design — perfect for everyday wear, office styling, and special occasions. Lightweight, comfortable, and designed to elevate any outfit with a touch of timeless sophistication.
                  </p>  
                  <a
                    href="https://amzn.to/4bi4vzQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    View on Amazon
                  </a>
                  </div>
                  {/* watch 2 */}
                  <div className="border rounded-xl p-6 shadow-sm">
                    <img
                      src={watch2}
                      alt="Joker & Witch Halo Analogue Watch for Women"
                      className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                    />

                    <h3 className="font-semibold mb-2">
                      Joker & Witch Halo Watch — Elegant Women's Fashion Wristwatch
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      A stylish analogue watch with a rose gold strap and black dial,
                      designed to add elegance to any outfit. Perfect for office wear,
                      casual fashion, and special occasions.
                    </p>

                    <a
                      href="https://amzn.to/4llawA2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      View on Amazon
                    </a>
                  </div>
                  {/* watch 3 */}
                  <div className="border rounded-xl p-6 shadow-sm">
                    <img
                      src={watch3}
                      alt="Joker & Witch Stainless Steel Women Yvonne Gold Analog Watch Bracelet Stack"
                      className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                    />

                    <h3 className="font-semibold mb-2">
                      Joker & Witch Halo Watch — Elegant Women's Fashion Wristwatch
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      A stylish analogue watch with a rose gold strap and black dial,
                      designed to add elegance to any outfit. Perfect for office wear,
                      casual fashion, and special occasions.
                    </p>

                    <a
                      href="https://amzn.to/4sauK2j"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      View on Amazon
                    </a>
                  </div>
                  {/*Watch 4*/}
                  <div className="border rounded-xl p-6 shadow-sm">
                    <img
                      src={watch4}
                      alt="LOUIS DEVIN Stainless Steel Chain Analog Wrist Watch for Women"
                      className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                    />

                    <h3 className="font-semibold mb-2">
                      LOUIS DEVIN Stainless Steel Chain Analog Wrist Watch for Women
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      A stylish analogue watch with a rose gold strap and black dial,
                      designed to add elegance to any outfit. Perfect for office wear,
                      casual fashion, and special occasions.
                    </p>

                    <a
                      href="https://amzn.to/4cORRux"
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
          <div>
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
              </div>
              </div>
            </div>
          </div>
      </div>
      </div>
  );
}


export default Fashion;