
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">CruiseRent</h3>
            <p className="text-gray-400 mb-6">
              Premium vehicle rental services for business and leisure travel.
              Experience the best in comfort and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#vehicles" className="text-gray-400 hover:text-white transition-colors">Vehicles</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Vehicle Types</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Economy Cars</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">SUVs & Crossovers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Vehicles</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Convertibles</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Vans & Minibuses</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 text-primary mr-3">
                  <MapPin size={20} />
                </div>
                <span className="text-gray-400">
                  123 Rental Street, City Center<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 text-primary mr-3">
                  <Phone size={20} />
                </div>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 text-primary mr-3">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@cruiserent.com" className="text-gray-400 hover:text-white transition-colors">
                  info@cruiserent.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CruiseRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
