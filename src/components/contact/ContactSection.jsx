import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-10 bg-white w-[100%] md:w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start">

        {/* Left: Contact Form Card */}
        <div className="p-3 w-full max-w-[500px] mx-auto md:max-w-[400px]">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-gray-900 mb-10"
              style={{
                fontFamily: 'Prata',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '130%',
                letterSpacing: '0.5%',
              }}>
            Get in Touch With Us
          </h2>
          <form className="space-y-6 text-sm">
            <input
              type="text"
              placeholder="First name*"
              className="w-full border border-gray-200 rounded-sm px-5 py-5 text-[15px] focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-sm px-5 py-5 text-[15px] focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500"
              required
            />
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-sm px-5 py-5 bg-white text-[15px] text-gray-600">
                🇺🇸 <span className="ml-2">+1</span>
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-sm px-5 py-5 text-[15px] focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-200 rounded-sm px-5 py-5 text-[15px] resize-none focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 text-[15px] font-medium rounded-sm hover:bg-blue-700 transition"
            >
              Next
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-8 w-full p-3 max-w-[500px] mx-auto md:max-w-[400px]">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-gray-900"
              style={{
                fontFamily: 'Prata',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '130%',
                letterSpacing: '0.5%',
              }}>
            Contact
          </h2>

          {/* Phone */}
          <div className="flex w-[85%] flex-col gap-3 border border-gray-200 rounded-sm px-4 py-5 bg-[#FCFCFC]">
            <div className="bg-blue-100 p-2 rounded-md w-fit">
              <FaPhoneAlt className="text-blue-600 text-lg" />
            </div>
            <p className="text-[15px] text-gray-700">+1-123-456-7899</p>
          </div>

          {/* Location */}
          <div className="flex bg-[#FCFCFC] flex-col gap-3 border border-gray-200 rounded-sm px-4 py-5 w-[85%]">
            <div className="bg-blue-100 p-2 rounded-md w-fit">
              <FaMapMarkerAlt className="text-blue-600 text-lg" />
            </div>
            <p className="text-[15px] text-gray-700">XYZ New Orleans</p>
          </div>

          {/* Hours */}
          <div className="flex bg-[#FCFCFC] flex-col gap-3 border border-gray-200 rounded-sm px-4 py-5 w-[85%]">
            <div className="bg-blue-100 p-2 rounded-sm w-fit">
              <FaClock className="text-blue-600 text-lg" />
            </div>
            <div className="text-[15px] flex text-gray-700 gap-6">
              <div>
                <strong
                  style={{
                    
                    fontWeight: '500',
                    fontStyle: 'normal',
                    fontSize: '15px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  Monday - Friday
                </strong>
                <br />
                8:00 AM - 8:00 PM
              </div>
              <div>
                <strong
                  style={{
                    
                    fontWeight: '500',
                    fontStyle: 'normal',
                    fontSize: '15px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  Saturday - Sunday
                </strong>
                <br />
                9:00 AM - 6:00 PM
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-10 pt-2">
            <a href="#" className="p-2 rounded-sm bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 rounded-sm bg-red-100 text-pink-500 hover:bg-red-200 transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
