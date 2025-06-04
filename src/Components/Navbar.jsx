import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const whatsappNumber = '919961171005';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
         }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 relative">

          {/* Logo (left) */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <span className="text-xl font-bold text-gray-800">Dr.Napkin</span>
          </div>

          {/* Nav Links (centered using absolute positioning) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:underline font-medium transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Book Now button (right) */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello Dr.Napkin`}
              className="border-2 border-black text-black px-5 py-2  font-semibold hover:bg-black hover:text-white transition duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4">
          <ul className="flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-black font-medium transition duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello Dr.Napkin`}
              onClick={() => setIsOpen(false)}
              className="border-2 text-center py-2 font-semibold hover:bg-black hover:text-white transition duration-300"
            >
              Book Now
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
