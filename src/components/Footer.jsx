import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0c154a] text-white py-8 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Monogram Section */}
        <div>
          <h3 className="font-bold">MONOGRAM</h3>
          <p className="mt-2 text-sm">305 King St. W<br/>Suite 502<br/>Kitchener, ON<br/>Canada</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold">QUICK LINKS</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li>Home</li>
            <li>How it Works</li>
            <li>Shop</li>
            <li>Download</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold">HELP</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li>FAQs</li>
            <li>Support Center</li>
            <li>Shipping and Sales</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-bold">INFORMATION</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li>About Us</li>
            <li>Work with us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Terms of Sale</li>
            <li>Press Kit</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-bold">SUBSCRIBE TO MONOGRAM</h3>
          <p className="mt-2 text-sm">Master productivity with Creative Console and get all the latest Monogram news.</p>
          <div className="mt-3 flex space-x-2">
            <input type="email" placeholder="Email Address" className="p-2 rounded-lg text-gray-100 w-full bg-gray-800" />
            <button className="bg-gray-300 text-black px-4 py-2 rounded-lg">SUBMIT</button>
          </div>
          <div className="mt-4 flex space-x-3 text-lg">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

