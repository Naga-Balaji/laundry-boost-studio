import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CitiesSection = () => {
  const cities = [
    { name: "Mumbai", zones: "All Zones", orders: "2000+" },
    { name: "Delhi", zones: "NCR Region", orders: "1500+" },
    { name: "Bangalore", zones: "City Limits", orders: "1800+" },
    { name: "Hyderabad", zones: "Greater Hyderabad", orders: "1200+" },
    { name: "Chennai", zones: "Metro Area", orders: "1000+" },
    { name: "Pune", zones: "PCMC & PMC", orders: "800+" },
  ];

  // TODO: Connect to city selection and service area check
  const handleCitySelect = (cityName: string) => {
    console.log(`Selected city: ${cityName}`);
    // BACKEND: Connect to location service to check service availability
    // Set user's preferred city in backend/state management
  };

  // TODO: Connect to expansion request system
  const handleRequestCity = () => {
    console.log("Request new city clicked");
    // BACKEND: Connect to city expansion request form/system
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cities We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium laundry services available in major cities across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cities.map((city, index) => (
            <div 
              key={index}
              onClick={() => handleCitySelect(city.name)}
              className="bg-card-gradient border border-border rounded-lg p-6 hover:shadow-card transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{city.name}</h3>
                    <p className="text-sm text-muted-foreground">{city.zones}</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Monthly Orders</span>
                <span className="text-lg font-semibold text-primary">{city.orders}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Request New City */}
        <div className="text-center">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't see your city?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're expanding rapidly! Request service in your city and be the first to know when we launch.
            </p>
            <Button 
              onClick={handleRequestCity}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Request Your City
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;