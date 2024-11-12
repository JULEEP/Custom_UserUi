import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#265396' }} className="text-white py-8 px-4">
      {/* Footer Links Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between text-center lg:text-left">
        
        {/* Column 1: Easy Returns */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
          <p className="text-sm">Free Replacement or Full Refund</p>
        </div>

        {/* Column 2: Let us help */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Let us help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/my-account" className="hover:underline">My Account</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact us</a></li>
            <li><a href="/all-products" className="hover:underline">All Products</a></li>
            <li><a href="/bulk-order" className="hover:underline">Bulk Order Inquiry</a></li>
          </ul>
        </div>

        {/* Column 3: Our Company */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/investors" className="hover:underline">For investors</a></li>
            <li><a href="/media" className="hover:underline">For media</a></li>
            <li><a href="/sustainability" className="hover:underline">Sustainability</a></li>
            <li><a href="/annual-returns" className="hover:underline">Annual Returns</a></li>
            <li><a href="/csr" className="hover:underline">Corporate Social Responsibility</a></li>
          </ul>
        </div>

        {/* Column 4: Our Policies */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Our policies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy and Cookie Policy</a></li>
            <li><a href="/copyright" className="hover:underline">Copyright matters</a></li>
            <li><a href="/patents" className="hover:underline">Patents & trademarks</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom - Optional additional section */}
      <div className="text-center text-xs pt-6 border-t border-gray-700 mt-6">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
