import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 mt-auto border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">We<span className="text-accent">Tech</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your destination for high-performance computing. We provide the tools, you build the dream.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Components</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Graphics Cards</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Processors</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Motherboards</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Storage</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Driver Downloads</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Build Guides</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">RMA & Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WeTech Store. All rights reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ProductListing />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<div className="p-20 text-center text-gray-500">Build Guides Coming Soon</div>} />
              <Route path="/profile" element={
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-500 bg-white m-8 rounded-lg shadow-sm p-8">
                  <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Member Profile</h2>
                  <p>Log in to manage your PC builds and orders.</p>
                  <button className="mt-6 px-6 py-2 bg-accent text-white rounded-md hover:bg-blue-700 transition-colors">
                    Sign In
                  </button>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;