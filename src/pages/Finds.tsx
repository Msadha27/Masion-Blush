import find1 from '../assets/finds/bouquet.jpg';

const Finds = () => {
  return (
    <div className="min-h-screen p-10 max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif mb-3">
        Aesthetic Amazon Finds
      </h1>

      <p className="text-gray-600 max-w-xl">
        Cute, aesthetic and useful products curated to elevate your everyday lifestyle.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src={find1}
            alt="Bouquet"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">
              Crochet Flower Bouquet
            </h2>

            <p className="text-gray-600 mb-4">
              A cute crochet flower bouquet perfect for gifting, room decor, or aesthetic styling.
            </p>

            <a
              href="https://amzn.to/4lgXDY0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              View on Amazon →
            </a>
          </div>
        </div>
        </div>
        {/* Additional finds can be added here in the same format */}
      </div>
  );
};

export default Finds;
