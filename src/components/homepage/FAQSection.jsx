import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do your cars come with Wi-Fi or other luxury features?",
    answer: "Yes, all of our vehicles include features like Wi-Fi, premium sound systems, and leather interiors to ensure a luxurious experience.",
  },
  {
    question: "Can the car be delivered to my location?",
    answer: "Absolutely. We offer delivery and pickup to your location of choice, whether it's your home, hotel, or office — on your schedule.",
  },
  {
    question: "Do you have age requirements for renters?",
    answer: "Yes, renters must be at least 25 years old with a valid driver's license. Some exceptions may apply for corporate accounts.",
  },
  {
    question: "Do you offer insurance or require one?",
    answer: "Yes, we offer rental insurance options. You can also use your own policy or credit card coverage — we'll help verify what works best.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-[95%] sm:w-[85%] md:w-[80%] mx-auto my-16 sm:my-20 lg:my-24">
      <h2
        className="mb-8 sm:mb-12 sm:text-left"
        style={{
          fontFamily: 'Prata, serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '24px',
          lineHeight: '130%',
          letterSpacing: '0.5%',
        }}
      >
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4 sm:py-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none group"
            >
              <h3
                className="text-base sm:text-lg transition-colors text-gray-900 group-hover:text-black"
                style={{
                  fontFamily: 'Prata, serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '140%',
                  letterSpacing: '0.5%',
                }}
              >
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              )}
            </button>

            {activeIndex === index && (
              <div className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
