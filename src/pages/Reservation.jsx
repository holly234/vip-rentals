import { useState } from 'react';
import Footer from '../components/common/Footer';

const Reservation = () => {
  const [deliveryOption, setDeliveryOption] = useState('Self Pickup');
  const [sameReturnAddress, setSameReturnAddress] = useState(true);

  const dailyRate = 1795;
  const rentalDays = 21;
  const subtotal = dailyRate * rentalDays;
  const total = 40695;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header with Steps */}
      <header className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-20 mb-2">
            {['Reserve', 'Pay', 'Done'].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full mb-1 ${
                    i === 0 ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                ></div>
                <span
                  className={`text-sm ${
                    i === 0 ? 'font-medium text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-[2px] bg-gray-200 relative">
            <div className="w-1/3 h-full bg-blue-600 absolute top-0 left-0"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Form Column */}
          <div className="lg:w-[58%] space-y-10">
            {/* Select Vehicle */}
            <div>
              <h2 className="text-[17px] font-semibold text-black mb-4">Select Vehicle</h2>
              <div className="grid grid-cols-2">
                <input
                  type="text"
                  placeholder="Make*"
                  className="border border-[#e5e5e5] h-[48px] px-3 text-sm text-gray-700 placeholder-gray-400 rounded-l-md"
                />
                <input
                  type="text"
                  placeholder="Model*"
                  className="border border-[#e5e5e5] h-[48px] px-3 text-sm text-gray-700 placeholder-gray-400 border-l-0 rounded-r-md"
                />
              </div>
            </div>

            {/* Rental Period (Fixed for Chrome) */}
            <div>
              <h2 className="text-[17px] font-semibold text-black mb-4">Rental Period</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[140px]">
                  <input
                    type="date"
                    className="appearance-none w-full border border-[#e5e5e5] h-[48px] px-3 text-sm text-gray-700 rounded-md"
                  />
                </div>
                <div className="flex-1 min-w-[140px]">
                  <input
                    type="time"
                    className="appearance-none w-full border border-[#e5e5e5] h-[48px] px-3 text-sm text-gray-700 rounded-md"
                  />
                </div>
                <div className="flex-1 min-w-[140px]">
                  <input
                    type="date"
                    className="appearance-none w-full border border-[#e5e5e5] h-[48px] px-3 text-sm text-gray-700 rounded-md"
                  />
                </div>
                <div className="flex-1 min-w-[140px]">
                  <input
                    type="time"
                    className="appearance-none w-full border border-[#e5e5e5] h-[48px] px-3 text-sm text-gray-700 rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <h2 className="text-[17px] font-semibold text-black mb-4">Delivery Address</h2>

              <div className="inline-flex items-center border border-gray-300 rounded-full overflow-hidden text-sm mb-4">
                <button
                  onClick={() => setDeliveryOption('Self Pickup')}
                  className={`px-4 py-[10px] transition font-medium ${
                    deliveryOption === 'Self Pickup'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  Self Pickup
                </button>
                <button
                  onClick={() => setDeliveryOption('Delivery')}
                  className={`px-4 py-[10px] transition font-medium ${
                    deliveryOption === 'Delivery'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  Delivery
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter Delivery Address"
                className="w-full border border-[#e5e5e5] rounded-md h-[48px] px-3 text-sm text-gray-700 placeholder-gray-400 mb-3"
              />

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={sameReturnAddress}
                  onChange={() => setSameReturnAddress(!sameReturnAddress)}
                />
                Return address same as delivery address
              </label>

              <div className="mt-4">
                <span className="text-sm text-gray-600 cursor-pointer flex items-center gap-1">
                  Additional services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Customer Info */}
            <div>
              <h2 className="text-[17px] font-semibold text-black mb-4">Customer Info</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First name*" className="w-full border border-[#e5e5e5] rounded-md h-[48px] px-3 text-sm" />
                <input type="text" placeholder="Last name*" className="w-full border border-[#e5e5e5] rounded-md h-[48px] px-3 text-sm" />
              </div>
              <input type="email" placeholder="Email address" className="w-full border border-[#e5e5e5] rounded-md h-[48px] px-3 text-sm mb-4" />
              <select className="w-full border border-[#e5e5e5] rounded-md h-[48px] px-3 text-sm">
                <option>Age</option>
                <option>18+</option>
                <option>25+</option>
              </select>
            </div>

            <button className="w-full bg-gray-300 text-white py-3 text-[15px] font-medium mt-4 cursor-not-allowed rounded-md" disabled>
              Next
            </button>
          </div>

          {/* Summary Column */}
          <div className="lg:w-[42%]">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-[16px] font-semibold mb-1">RANGE ROVER SPORT</h3>
              <p className="text-[14px] text-gray-500 mb-5">2024</p>
              <img
                src="/range-rover.jpg"
                alt="Range Rover Sport"
                className="w-full h-40 object-cover rounded-md mb-5"
              />

              <div className="space-y-4 text-sm text-gray-700 mb-6">
                <div>
                  <p className="text-gray-500 text-xs mb-1">Start</p>
                  <p>Feb 25, 2025 at 10:00am</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">End</p>
                  <p>Mar 18, 2025 at 10:00am</p>
                </div>
                <p className="text-gray-400 text-xs">1000 miles max total | $5 per extra mile</p>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2 text-sm">
                  <span>${dailyRate} X {rentalDays} Days</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-medium text-[16px] mt-2">
                  <span className="text-gray-800">Total (estimated)</span>
                  <span className="text-blue-600">${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Reservation;
