import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  // TODO: Connect to contact form system
  const handleContactForm = (type: string) => {
    console.log(`Contact form type: ${type}`);
    // BACKEND: Connect to contact form submission system
  };

  // TODO: Connect to social media links
  const handleSocialClick = (platform: string) => {
    console.log(`Social media click: ${platform}`);
    // BACKEND: Track social media clicks for analytics
  };

  // TODO: Connect to newsletter subscription
  const handleNewsletterSignup = (email: string) => {
    console.log(`Newsletter signup: ${email}`);
    // BACKEND: Connect to email newsletter subscription system
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">LaundryPro</span>
            </div>
            <p className="text-background/80 mb-6">
              Premium laundry services with doorstep pickup and delivery. 
              Making laundry simple and convenient for everyone.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Home</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Services</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Wash & Fold</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Wash & Iron</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Dry Cleaning</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Express Service</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Become Partner</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-background/60 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80">123 Business Street</p>
                  <p className="text-background/80">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-background/60" />
                <p className="text-background/80">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-background/60" />
                <p className="text-background/80">support@laundrypro.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 LaundryPro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;