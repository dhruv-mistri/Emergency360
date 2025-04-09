
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Emergency360</h3>
            <p className="text-gray-400 mb-6">
             🚑 Emergency 360 – Empowering faster emergency responses across India.
  Smart ambulance allocation, real-time tracking & optimized routes for saving lives.
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Basic Life Support (BLS) Ambulance</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Patient Transport Vehicle (PTV)</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Fire & Rescue Vehicle</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"> Private Emergency Van</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Police Escort / Response Vehicle</a>
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
                  Agmedabad,Gujarat
                </span>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 text-primary mr-3">
                  <Phone size={20} />
                </div>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  9712702006
                </a>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 text-primary mr-3">
                  <Mail size={20} />
                </div>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Emergency360.com
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
