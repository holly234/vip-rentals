import { FaSearch, FaUser, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <header className="bg-white shadow-sm py-4 z-50 relative">
      <div className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center flex-wrap gap-y-4">

        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-2xl font-light tracking-wider text-gray-800">
            VIP <span className="font-semibold text-gray-900">| RENTALS</span>
          </h1>
          <span className="text-[11px] text-gray-500 uppercase tracking-wide mt-1 ml-[2px]">
            Luxury Collection
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars className="text-[20px]" />
        </button>

        {/* Navigation */}
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-20 py-4 md:py-0 px-4 md:px-0 md:items-center gap-6 md:gap-10 text-[15px] text-gray-800 font-medium`}>

          {/* Reusable Dropdown Component */}
          {[
            {
              title: 'Categories',
              key: 'categories',
              items: ['SUV', 'Sedan', 'Convertible', 'Coupe']
            },
            {
              title: 'Fleet',
              key: 'fleet',
              items: ['Mercedes G-Wagon', 'Range Rover', 'Lexus LX570', 'BMW X6']
            },
            {
              title: 'Company',
              key: 'company',
              items: ['About Us', 'Services', 'Blogs', 'Contact']
            },
          ].map(({ title, key, items }) => (
            <div key={key} className="relative group md:static w-full md:w-auto">
              {/* Dropdown Title */}
              <div
                className="cursor-pointer hover:text-black flex items-center gap-1 py-2 md:py-0"
                onClick={() => toggleDropdown(key)}
              >
                {title}
              </div>

              {/* Dropdown Menu */}
              <div className={`
                ${openDropdown === key ? 'block' : 'hidden'}
                md:absolute md:top-[110%] md:left-0 md:bg-white md:shadow-lg md:rounded-lg md:border md:border-gray-100
                flex-col md:min-w-[180px]
                md:px-2 md:py-2
                md:group-hover:flex
                w-full md:w-auto
              `}>
                {items.map((item) => (
                  <Link
                    key={item}
                    to={`/${key}/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black md:rounded whitespace-nowrap"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setOpenDropdown(null);
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Static Chauffeur link */}
          <Link
            to="/chauffeur"
            className="cursor-pointer hover:text-black py-2 md:py-0"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
          >
            Chauffeur
          </Link>
        </nav>

        {/* Search + User */}
        <div className={`${isMobileMenuOpen ? 'hidden' : 'flex'} md:flex items-center gap-4 order-1 md:order-none w-full md:w-auto mt-4 md:mt-0 justify-between md:justify-normal`}>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-[6px] w-full md:w-auto">
            <FaSearch className="text-gray-500 text-[14px] mr-2" />
            <input
              type="text"
              placeholder="Search fleets"
              className="bg-transparent focus:outline-none text-[14px] placeholder-gray-400 w-full"
            />
          </div>
          <FaUser className="text-[18px] text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Header;
