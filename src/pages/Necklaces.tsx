import necklace1 from "@/assets/fashion/Palmon black.jpg";
import necklace2 from "@/assets/fashion/Palmon pink.jpg";
import necklace3 from "@/assets/fashion/Heart.jpg";
import necklace4 from "@/assets/fashion/Blackheart.jpg";
import necklace5 from "@/assets/fashion/Pinkheart.jpg";
import ring1 from "@/assets/fashion/rings.jpg";
import CategoryMenu from "@/components/CategoryMenuTemp";

const Necklaces = () => {
  return (
            <div className="min-h-screen py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <CategoryMenu/>
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
                    {/* Product 6 */}
                    <div className="border rounded-xl p-6 shadow-sm">
                        <img

                        src={ring1}
                        alt="18K Gold Plated Heart Ring"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                        />

                        <h3 className="font-semibold mb-2">
                        Cute Pink & Gold Aesthetic Stackable Ring Set (Combo of 8)
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4">
                        A delicate heart-shaped ring with a gold plating — anti-tarnish, waterproof,
                        and perfect for everyday elegance or gifting.
                        </p>

                        <a
                        href="https://amzn.to/4rbAPKt"
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
    }

export default Necklaces;
