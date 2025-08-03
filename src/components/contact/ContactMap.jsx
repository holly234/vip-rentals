const ContactMap = () => {
  return (
    <section className="py-0 bg-white w-[95%] md:w-[80%] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 text-center mb-6">
        Get Directions
      </h2>

      <div className="overflow-hidden rounded-sm w-full h-[400px]">
        <iframe
          title="VIP Rentals Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110611.02292650398!2d-90.18830698961922!3d29.96234128781714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a66da8bf81cf%3A0x121474dc71a8026f!2sBudget%20Car%20Rental!5e0!3m2!1sen!2sng!4v1753569585696!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
