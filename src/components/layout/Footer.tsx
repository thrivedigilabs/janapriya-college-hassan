import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Janapriya Group</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Building Brighter Futures in Healthcare through compassionate education and excellence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-accent transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-accent transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>B.Sc Nursing</li>
              <li>Paramedical Sciences</li>
              <li>Allied Health Sciences</li>
              <li>BPT - Physiotherapy</li>
              <li>Medical Lab Technology</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Janapriya Campus, Hassan, Karnataka
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@janapriyaedu.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © 2025 Janapriya Group of Institutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="hover:text-accent transition-colors text-primary-foreground/70">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-accent transition-colors text-primary-foreground/70">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
