import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    text: "Flawless service! The car was pristine, delivery was smooth, and the whole process was so easy. Highly recommend!",
    name: "Jessica Mordrich",
  },
  {
    text: "VIP Rentals provided a top-notch experience! Their chauffeur service was so luxurious—my driver was very polite and drove exceptionally well.",
    name: "Sophia L.",
  },
  {
    text: "Booked for our anniversary getaway—called Friday morning, and by evening, the car was waiting for us. Made the weekend extra special!",
    name: "Michael T.",
  },
  {
    text: "The rental experience was amazing. The car was luxurious, clean, and drove like a dream. Booking was quick and easy.",
    name: "Bryan A.",
  },
  {
    text: "Exceptional customer service! They went above and beyond to accommodate my last-minute request. The Mercedes I rented was immaculate.",
    name: "Olivia R.",
  },
  {
    text: "Perfect for business trips. The car made a great impression on my clients, and the concierge service saved me so much time.",
    name: "David K.",
  },
];

const InfiniteHorizontalScroll = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const speed = 0.5; // pixels per frame (lower = slower)

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Clone all cards for seamless looping
    const originalCards = Array.from(content.children);
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      content.appendChild(clone);
    });

    let position = 0;
    const contentWidth = content.scrollWidth / 2; // Original width before cloning

    const animate = () => {
      position -= speed;
      
      // Reset position when we've scrolled one full width
      if (position <= -contentWidth) {
        position = 0;
      }
      
      content.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden py-12 bg-gray-50">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 mx-auto">
          See What All The Talk is All About!
        </h2>

        <div 
          ref={containerRef}
          className="overflow-hidden"
        >
          <div 
            ref={contentRef}
            className="flex"
            style={{ width: 'max-content' }}
          >
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm mx-3"
              >
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.text}
                </p>
                <p className="text-right font-medium text-sm text-black">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteHorizontalScroll;