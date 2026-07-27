import Navbar from "./Navbar";
import Hero from "./Hero";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function Home() {
    
  return (
    <>
      <Navbar />
      <Hero />
      <ProductList />
      <Footer />
    </>
    
  );
}

export default Home;