import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f9f9f9] border-t border-gray-200 mt-20 py-12 text-sm text-gray-700">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Left - Logo and Links */}
        <div>
          <h1 className="text-lg font-semibold mb-6">VIP | RENTALS</h1>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">TERMS AND CONDITIONS</a></li>
            <li><a href="#" className="hover:underline">PRIVACY POLICY</a></li>
            <li><a href="#" className="hover:underline">ABOUT US</a></li>
            <li><a href="#" className="hover:underline">SITEMAP</a></li>
          </ul>
        </div>

        {/* Middle - Contact & Social */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="uppercase text-xs mb-1 text-gray-500">EMAIL GOES HERE</p>
            <p className="font-medium">+1 123 456 7889</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Right - Hours */}
        <div>
          <p className="font-medium mb-2">Operating Hours</p>
          <p>Monday – Friday: 8:00 AM – 8:00 PM</p>
          <p>Saturday – Sunday: 9:00 AM – 6:00 PM</p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-500">
        © 2025 VIP RENTALS. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
