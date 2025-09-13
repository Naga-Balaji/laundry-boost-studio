import { Button } from "@/components/ui/button";

const Header = () => {
  // TODO: Connect navigation to your routing system
  const handleNavigation = (section: string) => {
    console.log(`Navigate to ${section}`);
    // BACKEND: Implement navigation logic or scroll to section
  };

  // TODO: Connect to booking system
  const handleBookNow = () => {
    console.log("Book Now clicked");
    // BACKEND: Connect to booking/scheduling system
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-bold text-foreground">LaundryPro</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavigation("partner")}
            className="px-4 py-2 rounded-md text-foreground transition-colors border border-transparent hover:border-gray-400 hover:text-primary"
          >
            Home
          </button>

          <button
            onClick={() => handleNavigation("partner")}
            className="px-4 py-2 rounded-md text-foreground transition-colors border border-transparent hover:border-gray-400 hover:text-primary"
          >
            Services
          </button>

          {/*<button
            onClick={() => handleNavigation("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>*/}
          <button
            onClick={() => handleNavigation("partner")}
            className="px-4 py-2 rounded-md text-foreground transition-colors border border-transparent hover:border-gray-400 hover:text-primary"
          >
            About
          </button>

          <button
            onClick={() => handleNavigation("partner")}
            className="px-4 py-2 rounded-md text-foreground transition-colors border border-transparent hover:border-gray-400 hover:text-primary"
          >
            Become a Partner
          </button>
        </nav>

        <Button
          onClick={handleBookNow}
          className="bg-primary hover:bg-primary-hover"
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
