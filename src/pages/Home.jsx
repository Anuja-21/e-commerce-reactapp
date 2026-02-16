import Hero from "../components/Hero";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <Hero />

     <div id="products" className="container">
  <h2 className="page-title">Our Products</h2>

  <div className="grid">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
    </>
  );
};

export default Home;
