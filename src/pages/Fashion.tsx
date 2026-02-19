import { Link } from "react-router-dom";

const Fashion = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-serif mb-10 text-center">
          Curated Fashion Picks
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Minimal Gold Necklace</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Elegant everyday accessory for soft aesthetic outfits.
            </p>
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Pastel Oversized Shirt</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Perfect minimal college outfit essential.
            </p>
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Aesthetic Handbag</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Neutral tone handbag for everyday elegance.
            </p>
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View on Amazon
            </a>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-sm underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
