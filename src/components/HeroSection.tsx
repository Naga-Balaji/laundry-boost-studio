import { Button } from "@/components/ui/button";
import { Calendar, Truck, Sparkles } from "lucide-react";

const HeroSection = () => {
  // TODO: Connect to scheduling system
  const handleSchedulePickup = () => {
    console.log("Schedule Pickup clicked");
    // BACKEND: Connect to pickup scheduling system/modal
  };

  // TODO: Connect to booking system
  const handleBookNow = () => {
    console.log("Book Now clicked - Hero");
    // BACKEND: Connect to main booking system
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Laundry Made
            <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              Simple & Smart
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Premium laundry services with doorstep pickup and delivery. 
            Clean clothes, delivered fresh to your doorstep in 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleSchedulePickup}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Pickup
            </Button>
            <Button 
              onClick={handleBookNow}
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              View Services
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Free Pickup & Delivery</h3>
              <p className="text-primary-foreground/80">Door-to-door service at no extra cost</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Premium Quality</h3>
              <p className="text-primary-foreground/80">Professional cleaning with care</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">24-48 Hour Turnaround</h3>
              <p className="text-primary-foreground/80">Quick service without compromise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;