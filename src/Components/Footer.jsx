import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import './Footer.css'
// import logo from "./assets/logo.png"; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="fotermain text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo + Social */}
        <div>
          {/* <img src={logo} alt="Logo" className="w-32 mb-4" /> */}
          <h2 className="mb-3">Dr.Napkin</h2>
          <div className="flex gap-4">
            {/* <a href="#" className="hover:text-white text-xl"><FaFacebookF /></a> */}
            <a href="https://www.instagram.com/dr.napkin1" className="hover:text-white text-xl"><FaInstagram /></a>
            {/* <a href="#" className="hover:text-white text-xl"><FaTwitter /></a> */}
          </div>
        </div>

        {/* Center: Contact Info */}
        <div className="text-sm space-y-3">
          <div className="flex items-center gap-3">
            <MdEmail className="text-lg" />
            <span><a href="mailto:drnapkinpads@gmail.com">drnapkinpads@gmail.com</a></span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-lg" />
            <span><a href="tel:+919447180033">+91 94471 80033</a></span>
          </div>
          <div className="flex items-start gap-3">
            <MdLocationOn className="text-lg mt-1" />
            <span>
              Kozhikode,
              Kerala-673582
            </span>
          </div>
        </div>

        {/* Right: Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/aboutus" className="hover:text-white">About Us</a></li>
            <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} Dr. Napkin™. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
