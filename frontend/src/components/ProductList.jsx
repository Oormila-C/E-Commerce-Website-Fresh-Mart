import { useState } from "react";

import products from "../Data/products";

import SearchBar from "./SearchBar";
import Category from "./Category";
import ProductCard from "./ProductCard";

function ProductList() {

  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState("All");

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selected === "All" ||
      product.category === selected;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-green-50 py-16">

      <h1 className="text-4xl text-center font-bold text-green-700">
        Our Products
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Category
        selected={selected}
        setSelected={setSelected}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-red-500 text-xl">
            No products found.
          </p>
        )}

      </div>

    </section>
  );
}

export default ProductList;