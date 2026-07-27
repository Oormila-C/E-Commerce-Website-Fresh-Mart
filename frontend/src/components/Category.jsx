const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Beverages",
];

function Category({ selected, setSelected }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10 px-4">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-6 py-2 rounded-full transition duration-300 ${
            selected === category
              ? "bg-green-600 text-white"
              : "bg-gray-200 hover:bg-green-500 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default Category;