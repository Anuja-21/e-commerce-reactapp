const Hero = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Upgrade Your Tech</h1>
        <p>Premium electronics for modern lifestyle.</p>

        <button className="hero-btn" onClick={scrollToProducts}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
