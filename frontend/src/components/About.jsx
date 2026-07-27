import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-10">

          <h1 className="text-4xl font-bold text-green-700 text-center">
            About FreshMart
          </h1>

          <p className="mt-8 text-gray-700 leading-8 text-lg">
            FreshMart is an online grocery shopping platform designed to make
            grocery shopping simple, fast, and convenient. We provide fresh
            fruits, vegetables, dairy products, beverages, and daily
            essentials with reliable doorstep delivery.
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-10">
            Our Mission
          </h2>

          <p className="mt-4 text-gray-700">
            To provide fresh, high-quality groceries at affordable prices
            while delivering an excellent online shopping experience.
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-10">
            Our Vision
          </h2>

          <p className="mt-4 text-gray-700">
            To become the most trusted online grocery platform by offering
            quality products, fast delivery, and outstanding customer service.
          </p>
          <button
  onClick={() => navigate(-1)}
  className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-3 rounded-lg font-semibold transition mt-3"
>
  ← Back
</button>

        </div>
        <div>
    </div>
      </div>

      <Footer />
    </>
  );
}

export default About;