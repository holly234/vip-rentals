const AboutIntroSection = () => {
  return (
    <section className="bg-white py-20 w-[90%] md:w-[80%] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
          Luxury Car Rental in New Orleans
        </h1>
        <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
          At VIP Rentals, we deliver more than just vehicles—we provide premium luxury car rental experiences tailored to your needs in New Orleans. Whether you're seeking chauffeur-driven convenience or a self-drive adventure, we ensure every detail reflects sophistication and comfort.
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-10 mb-10 text-center text-sm md:text-base">
        <div>
          <p className="text-blue-600 font-medium">Established</p>
          <p className="text-gray-800 text-xl mt-1">2025</p>
        </div>
        <div>
          <p className="text-blue-600 font-medium">Cars in Fleet</p>
          <p className="text-gray-800 text-xl mt-1">98</p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="/about-f.jpg" // Replace with actual image path
          alt="Luxury car fleet"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutIntroSection;
