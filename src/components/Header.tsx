import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Ambulance, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Link to the Home Page */}
            <a
              href="/"
              className="text-2xl font-bold text-red-600 flex items-center"
            >
              <Ambulance className="mr-2" />
              Emergency 360
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Link to Home Section */}
            <a
              href="/"
              className="text-foreground hover:text-red-600 font-medium"
            >
              Home
            </a>
            {/* Link to Emergency Section */}
            <a
              href="#emergency"
              className="text-foreground hover:text-red-600 font-medium"
            >
              Emergency
            </a>
            {/* Link to Services Section */}
            <a
              href="#services"
              className="text-foreground hover:text-red-600 font-medium"
            >
              Services
            </a>
            {/* Link to About Us Section */}
            <a
              href="#about"
              className="text-foreground hover:text-red-600 font-medium"
            >
              About Us
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Emergency Call Button */}
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
              onClick={() => (window.location.href = "tel:911")}
            >
              <Phone size={18} className="mr-1" />
              Emergency
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {/* Link to Home Section */}
              <a
                href="/"
                className="text-foreground hover:text-red-600 font-medium py-2"
              >
                Home
              </a>
              {/* Link to Emergency Section */}
              <a
                href="#emergency"
                className="text-foreground hover:text-red-600 font-medium py-2"
              >
                Emergency
              </a>
              {/* Link to Services Section */}
              <a
                href="#services"
                className="text-foreground hover:text-red-600 font-medium py-2"
              >
                Services
              </a>
              {/* Link to About Us Section */}
              <a
                href="#about"
                className="text-foreground hover:text-red-600 font-medium py-2"
              >
                About Us
              </a>
              <div className="flex flex-col space-y-3 pt-2">
                {/* Emergency Call Button */}
                <Button
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => (window.location.href = "tel:911")}
                >
                  <Phone size={18} className="mr-1" />
                  Call Emergency
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
