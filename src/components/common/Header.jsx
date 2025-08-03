import { FaSearch, FaUser, FaBars, FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMobileSearchOverlay, setShowMobileSearchOverlay] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    { name: "Range Rover Sport 2024", image: "/suv.webp" },
    { name: "Range Rover Sport 2024", image: "/suv.webp" },
    { name: "Range Rover Sport 2024", image: "/suv.webp" },
  ]);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  useEffect(() => {
    if (isMobileMenuOpen || showMobileSearchOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, showMobileSearchOverlay]);

  return (
    <header className="bg-white border-b-[1px] border-b-gray-300 py-4 z-50 relative">
      <div className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center flex-wrap gap-y-4">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-2xl font-light tracking-wider text-gray-800">
            VIP <span className="text-gray-900 font-semibold">| RENTALS</span>
          </h1>
          <span className="text-[11px] text-gray-500 uppercase tracking-wide mt-1 ml-[2px]">
            Luxury Collection
          </span>
        </div>

        {/* Mobile icons */}
        <div className="flex items-center gap-4 md:hidden">
          <FaSearch
            className="text-gray-500 text-[20px] cursor-pointer"
            onClick={() => setShowMobileSearchOverlay(true)}
          />
          <button
            className="text-gray-500"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars className="text-[20px]" />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row items-center gap-10 text-[15px] text-gray-800 font-medium">
          {[{ title: 'Categories', key: 'categories', items: ['SUV', 'Sedan', 'Convertible', 'Coupe'] }, { title: 'Fleet', key: 'fleet', items: ['Mercedes G-Wagon', 'Range Rover', 'Lexus LX570', 'BMW X6'] }, { title: 'Company', key: 'company', items: ['About Us', 'Services', 'Blogs', 'Contact'] }].map(({ title, key, items }) => (
            <div key={key} className="relative group">
              <div className="cursor-pointer hover:text-black">{title}</div>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg border border-gray-100 hidden group-hover:flex flex-col min-w-[180px] px-2 py-2 z-30">
                {items.map((item) => (
                  <Link
                    key={item}
                    to={`/${key}/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/chauffeur" className="hover:text-black">Chauffeur</Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-[6px]">
            <FaSearch className="text-gray-500 text-[14px] mr-2" />
            <input
              type="text"
              placeholder="Search fleets"
              className="bg-transparent focus:outline-none text-[14px] placeholder-gray-400"
            />
          </div>
          <FaUser className="text-[18px] text-gray-700" />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-[80%] max-w-xs bg-white z-50 shadow-lg flex flex-col md:hidden">
          <div className="flex justify-end px-5 pt-4">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 text-xl">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 pt-2" style={{ maxHeight: 'calc(85vh - 180px)' }}>
            <div className="space-y-1 text-sm">
              {[{ title: 'Categories', key: 'categories', items: ['SUV', 'Sedan', 'Convertible', 'Coupe'] }, { title: 'Fleet', key: 'fleet', items: ['Mercedes G-Wagon', 'Range Rover', 'Lexus LX570', 'BMW X6'] }, { title: 'Company', key: 'company', items: ['About Us', 'Services', 'Blogs', 'Contact'] }].map(({ title, key, items }) => (
                <div key={key} className="border-b border-gray-200">
                  <div className="flex justify-between items-center py-2 px-1 text-gray-700 font-medium cursor-pointer" onClick={() => toggleDropdown(key)}>
                    {title}
                    <FaChevronRight className={`text-xs transition-transform ${openDropdown === key ? 'rotate-90' : ''}`} />
                  </div>
                  {openDropdown === key && (
                    <div className="pl-4 pb-2 space-y-1 text-gray-500">
                      {items.map((item) => (
                        <Link key={item} to={`/${key}/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`} className="block hover:text-black" onClick={() => { setIsMobileMenuOpen(false); setOpenDropdown(null); }}>{item}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/chauffeur" className="block py-2 px-1 text-gray-700 font-medium hover:text-black border-b border-gray-200" onClick={() => setIsMobileMenuOpen(false)}>Chauffeur</Link>
            </div>
          </div>

          {/* Raised Bottom Buttons */}
          <div className="px-5 pt-3 pb-6 mt-6 bg-white border-t border-gray-200">
            <div className="w-full bg-gray-100 text-gray-600 text-sm py-2 rounded-md text-center mb-2">
              📞 +1-123-456-7899
            </div>
            <Link to="/login" className="w-full block bg-blue-100 text-blue-700 text-center py-2 rounded-md text-sm font-medium hover:bg-blue-200 mb-2" onClick={() => setIsMobileMenuOpen(false)}>
              LOG IN / SIGN UP
            </Link>
            <Link to="/reserve" className="w-full block bg-red-100 text-red-700 text-center py-2 rounded-md text-sm font-medium hover:bg-red-200" onClick={() => setIsMobileMenuOpen(false)}>
              RESERVE NOW
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Search Overlay */}
      {showMobileSearchOverlay && (
        <div className="fixed inset-0 z-[100] bg-white overflow-auto p-4 md:hidden">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 mb-4">
            <FaSearch className="text-gray-500 text-[16px] mr-3" />
            <input type="text" placeholder="Search fleets" className="bg-transparent focus:outline-none text-[16px] w-full placeholder-gray-400" />
            <button onClick={() => setShowMobileSearchOverlay(false)}>
              <span className="text-gray-400 text-xl font-semibold">&times;</span>
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3 ml-1">Recently viewed</p>
          <div className="space-y-4 mb-6">
            {recentSearches.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover" />
                <span className="text-sm font-medium text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setRecentSearches([])} className="flex items-center text-sm text-gray-500 hover:text-black ml-auto">
            <span className="mr-1">🗑</span> Clear all
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
