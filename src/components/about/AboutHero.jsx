const AboutHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full">
      <img 
        src="/range.jpg"
        alt="Luxury cars on the road"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-light">About us</h1>
      </div>
    </section>
  );
};

export default AboutHero;
