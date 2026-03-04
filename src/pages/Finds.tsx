import find1 from '../assets/finds/bouquet.jpg';

const Finds = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-serif mb-6">Aesthetic Amazon Finds</h1>
      <p>Beautiful lifestyle picks that elevate everyday spaces.</p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={find1} 
            alt="Bouquet" 
            className="w-full h-64 object-cover rounded-lg mb-4" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Elegant Bouquet</h2>
            <p className="text-gray-600">A stunning floral arrangement to brighten any room.</p>
            <a 
                href="https://www.amazon.com/dp/B08XYZ1234" 
                target="_blank" rel="noopener noreferrer" 
                className="text-blue-500 hover:underline mt-4 inline-block">
              View on Amazon
            </a>
          </div>
        </div>
        {/* Additional finds can be added here in the same format */}
      </div>
    </div>
  );
};

export default Finds;
