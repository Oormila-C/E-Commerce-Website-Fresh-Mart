import { useEffect, useState } from "react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

function Hero() {

  const images = [hero1, hero2, hero3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length);

    }, 3000);

    return () => clearInterval(timer);

  }, []);

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  function prevSlide() {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  return (
    <section className="relative h-[90vh]">

      <img
        src={images[current]}
        alt="hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white">

        <h1 className="text-5xl md:text-7xl font-bold">
          FreshMart
        </h1>

        <p className="text-xl mt-6 max-w-xl">
          Fresh groceries delivered directly to your home.
        </p>

        <button className="mt-8 bg-green-600 px-8 py-4 rounded-lg hover:bg-green-700">
          Shop Now
        </button>

      </div>

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 bg-white text-black rounded-full w-12 h-12 text-2xl"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 bg-white text-black rounded-full w-12 h-12 text-2xl"
      >
        ❯
      </button>

    </section>
  );
}

export default Hero;