import CategoryMenu from "@/components/Categorymenu";
const OutfitStyling = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <CategoryMenu />
        <h1 className="text-3xl font-bold mb-10">
          Outfit Styling Ideas
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

        </div>
      </div>
    </div>
  );
};

export default OutfitStyling;