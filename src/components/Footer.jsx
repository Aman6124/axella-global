import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/brand-logo.svg"
                alt="Axella Global logo"
                className="w-10 h-10 object-contain rounded-lg bg-white/0"
              />
              <div>
                <h3 className="text-xl font-bold">Axella Global</h3>
                <p className="text-sm text-gray-300">Logisolutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Delivering Excellence with Every Mile — One Call, On Time, Every Time.
            </p>
            <div className="text-sm text-gray-300">
              <p>📍 Taloja, Mumbai</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@axellaglobal.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Fleet & Coverage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Cold Chain Transportation</li>
              <li>Ambient Logistics</li>
              <li>Flexible Vehicle Options</li>
              <li>Open & Closed Containers</li>
              <li>Temperature Controlled Storage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                  <span className="text-xs">✉️</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-gray-300 text-sm">info@axellaglobal.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                  <span className="text-xs">📍</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-gray-300 text-sm">Taloja, Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Axella Global Logisolutions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
