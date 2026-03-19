//Watches
import watch1 from "@/assets/Watches/rosegoldwatch.jpg";
import watch2 from "@/assets/Watches/Halowatch.jpg";
import watch3 from "@/assets/Watches/watchbrace.jpg";
import watch4 from "@/assets/Watches/steelwatch.jpg";
import watch5 from "@/assets/Watches/pinkwatch.jpg";
import watch6 from "@/assets/Watches/leatherwatch.jpg";
import bracelet from "@/assets/Watches/bracelet.jpg";
import watch7 from "@/assets/Watches/bluewatch.jpg";
import bracelet2 from "@/assets/Watches/rosegoldbracelet.jpg";
import bracelet3 from "@/assets/Watches/pinkbrace.jpg";
import watch8 from "@/assets/Watches/louiswatch.jpg";
import watch9 from "@/assets/Watches/luioscreamwatch.jpg";
import watch10 from "@/assets/Watches/jokerwatch.jpg";

import CategoryMenu from "@/components/CategoryMenuTemp";
import { BriefcaseConveyorBelt } from "lucide-react";
import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

const Watch = () => {
  return (
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
            <CategoryMenu/>
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
                  {/*Watch 5*/}
                  <div className="border rounded-xl p-6 shadow-sm">
                    <img
                      src={watch5}
                      alt="IIK COLLECTION Watches for Women Round Dial "
                      className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                    />

                    <h3 className="font-semibold mb-2">
                      IIK COLLECTION Watches for Women Round Dial
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      A stylish analogue watch with a rose gold strap and black dial,
                      designed to add elegance to any outfit. Perfect for office wear,
                      casual fashion, and special occasions.
                    </p>

                    <a
                      href="https://amzn.to/3N1Y9wp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      View on Amazon
                    </a>
                  </div>
                    {/*Watch 6*/}
                    {/* Watch */}
                    <div className="border rounded-xl p-6 shadow-sm">
                    <img
                        src={watch3}
                        alt="IIK Collection Women Analogue Quartz Watch"
                        className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                    />

                    <h3 className="font-semibold mb-2">
                        IIK Collection Women Analogue Quartz Leather Strap Watch
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                        A stylish analogue quartz watch with a premium leather strap and elegant round
                        dial. Designed for modern women, it offers long battery life and a lightweight
                        design perfect for office wear, casual outfits, and daily fashion.
                    </p>

                    <a
                        href="https://amzn.to/3P91v1d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                    >
                        View on Amazon
                    </a>
                    </div>
                    {/* Bracelet */}
                    <div className="border rounded-xl p-6 shadow-sm">
                    <img
                        src={bracelet}
                        alt="Shining Diva Rose Gold Austrian Crystal Bracelet"
                        className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                    />

                    <h3 className="font-semibold mb-2">
                        Shining Diva Rose Gold Austrian Crystal Bracelet for Women
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                        A beautiful rose gold bracelet decorated with Austrian crystals and pastel stones.
                        This elegant fashion accessory is perfect for parties, festive outfits, and daily
                        styling. A great gifting option for girlfriends, friends, or special occasions like
                        Valentine's Day.
                    </p>

                    <a
                        href="https://amzn.to/4sM8uvv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                    >
                        View on Amazon
                    </a>
                    </div>
                    {/* Watch 7 */}
                    <div className="border rounded-xl p-6 shadow-sm">
                      <img
                        src={watch6}
                        alt="IIK Collection Women Analogue Quartz Watch"
                        className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                      />

                      <h3 className="font-semibold mb-2">
                        IIK Collection Women Analogue Quartz Watch
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        A stylish analogue watch with a round dial and elegant metal bracelet strap.
                        Designed for everyday fashion, office wear, and casual outfits. Lightweight,
                        durable, and perfect for women looking for affordable style.
                      </p>

                      <a
                        href="https://amzn.to/40ABA4W"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        View on Amazon
                      </a>
                    </div>
                    {/* Rose Gold Crystal Bracelet */}
                    <div className="border rounded-xl p-6 shadow-sm">
                      <img
                        src={bracelet2}
                        alt="Shining Diva Rose Gold Crystal Bracelet"
                        className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                      />

                      <h3 className="font-semibold mb-2">
                        Shining Diva Rose Gold Crystal Bracelet
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        A stylish rose gold bracelet featuring sparkling crystal accents.
                        Lightweight and elegant, perfect for everyday wear, parties,
                        and adding a touch of glamour to your outfit.
                      </p>

                      <a
                        href="https://amzn.to/4146SRN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        View on Amazon
                      </a>
                    </div>
                    {/* Crystal Rose Gold Bracelet */}
                    <div className="border rounded-xl p-6 shadow-sm">
                      <img
                        src={bracelet3}
                        alt="Shining Diva Stylish Crystal Bracelet for Women"
                        className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                      />

                      <h3 className="font-semibold mb-2">
                        Shining Diva Stylish Crystal Bracelet for Women
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        A delicate rose gold bracelet with sparkling crystal accents.
                        Designed for elegance and comfort, perfect for everyday wear,
                        parties, and adding a stylish touch to any outfit.
                      </p>

                      <a
                        href="https://amzn.to/4bdvb60"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        View on Amazon
                      </a>
                    </div>


                    {/* Watch 8 - Louis Devin Blue Dial */}
                    <div className="border rounded-xl p-6 shadow-sm">
                      <img
                        src={watch8}
                        alt="LOUIS DEVIN Rose Gold Mesh Strap Analog Watch for Women Blue Dial"
                        className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                      />

                      <h3 className="font-semibold mb-2">
                        LOUIS DEVIN Rose Gold Mesh Strap Watch (Blue Dial)
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        A stunning blue dial watch with a rose gold mesh strap that adds a bold
                        yet elegant touch. Perfect for statement outfits, parties, and daily wear.
                        Stylish, trendy, and budget-friendly.
                      </p>

                      <a
                        href="https://amzn.to/3PsVxbu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        View on Amazon (₹359)
                      </a>
                    </div>
                    {/* Watch 9 - Louis Devin Beige Dial */}
                    <div className="border rounded-xl p-6 shadow-sm">
                      <img
                        src={watch9}
                        alt="LOUIS DEVIN Rose Gold Mesh Strap Analog Watch for Women Beige Dial"
                        className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                      />

                      <h3 className="font-semibold mb-2">
                        LOUIS DEVIN Rose Gold Mesh Strap Watch (Beige Dial)
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        A sleek rose gold mesh strap watch with a minimal beige dial. Designed
                        for a classy and modern look, perfect for both casual and formal outfits.
                        Affordable luxury that elevates your everyday style.
                      </p>

                      <a
                        href="https://amzn.to/3PhqDmp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        View on Amazon (₹359)
                      </a>
                    </div>
                    {/* Watch  10 - Joker & Witch */}
                    <div className="border rounded-xl p-6 shadow-sm">
                      <img
                        src={watch10}
                        alt="Joker & Witch Skyfall Women's Grey and Rosegold Strap Watch"
                        className="w-full h-80 object-contain bg-white rounded-lg mb-4"
                      />

                      <h3 className="font-semibold mb-2">
                        Joker & Witch Skyfall Women's Grey & Rosegold Strap Watch
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        A soft pastel blue strap watch with a rosegold dial that gives a minimal
                        and elegant look. Perfect for everyday wear, college outfits, and gifting.
                        Lightweight, stylish, and designed for a feminine aesthetic.
                      </p>

                      <a
                        href="https://amzn.to/3NnXvJH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        View on Amazon (₹749)
                      </a>
                    </div>

              </div>
            </div>
        </div>
    </div>
  );
};

export default Watch;