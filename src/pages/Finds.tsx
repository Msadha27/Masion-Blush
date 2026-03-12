import find1 from '../assets/finds/bouquet.jpg';
import lamp from '../assets/finds/pear-lamp.jpg';
import sunflower from '../assets/finds/sunflower.jpg';
import bag from '../assets/finds/crochet-bag.jpg';
import jewelry from '../assets/finds/jewelry-box.jpg';
import CategoryMenu from "@/components/CategoryMenuTemp";
const products = [
  {
    name: "Crochet Flower Bouquet",
    image: find1,
    description:
      "A cute crochet flower bouquet perfect for gifting, room decor, or aesthetic styling.",
    link: "https://amzn.to/4lgXDY0",
  },
  {
    name: "Cute Pear Night Lamp",
    image: lamp,
    description:
      "A soft silicone pear night lamp with touch control and 7 colors. Perfect aesthetic bedroom decor.",
    link: "https://amzn.to/4lbQsA1",
  },
  {
    name: "Crochet Sunflower Decor",
    image: sunflower,
    description:
      "Handmade crochet sunflower plant perfect for car dashboard, desk decor, or gifting.",
    link: "https://amzn.to/40LcvnT",
  },
  {
    name: "Crochet Wrist Handbag",
    image: bag,
    description:
      "Stylish knitted crochet handbag perfect for casual outings, travel, and everyday aesthetic fashion.",
    link: "https://amzn.to/4rU4KrV",
  },
  {
    name: "Jewelry Organizer Box",
    image: jewelry,
    description:
      "Portable jewelry organizer with compartments for rings, earrings, and necklaces.",
    link: "https://amzn.to/4ucJe34",
  },
];

const Finds = () => {
  return (
    <div className="min-h-screen p-10 max-w-6xl mx-auto">
      <CategoryMenu/>
      <h1 className="text-4xl font-serif mb-3">
        Aesthetic Amazon Finds
      </h1>

      <p className="text-gray-600 max-w-xl">
        Cute, aesthetic and useful products curated to elevate your everyday lifestyle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {item.name}
              </h2>

              <p className="text-gray-600 mb-4">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 font-medium hover:underline"
              >
                View on Amazon →
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Finds;