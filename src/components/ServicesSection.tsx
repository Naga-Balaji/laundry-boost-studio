import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Sparkles, Zap, Flame } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 'wash-fold',
      icon: Shirt,
      title: "Wash & Fold",
      price: "₹45",
      unit: "/kg",
      description: "Complete wash and fold service for everyday clothes",
      features: ["Gentle detergents", "Fabric softener", "Neat folding"],
    },
    {
      id: 'wash-iron',
      icon: Flame,
      title: "Wash & Iron",
      price: "₹65",
      unit: "/kg",
      description: "Wash, dry and professional ironing service",
      features: ["Premium pressing", "Wrinkle-free finish", "Hangers included"],
    },
    {
      id: 'dry-clean',
      icon: Sparkles,
      title: "Dry Clean",
      price: "₹95",
      unit: "onwards",
      description: "Specialized dry cleaning for delicate fabrics",
      features: ["Delicate care", "Stain removal", "Shape retention"],
    },
    {
      id: 'express',
      icon: Zap,
      title: "Express Service",
      price: "₹110",
      unit: "/kg",
      description: "Same-day pickup and delivery service",
      features: ["4-6 hour delivery", "Priority handling", "Emergency service"],
    },
  ];

  // TODO: Connect to booking system with service selection
  const handleBookService = (serviceId: string, serviceName: string) => {
    console.log(`Booking service: ${serviceId} - ${serviceName}`);
    // BACKEND: Connect to booking system with pre-selected service
    // Pass service details to booking flow
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional laundry services designed for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="relative overflow-hidden bg-card-gradient border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground">{service.unit}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleBookService(service.id, service.title)}
                    className="w-full bg-primary hover:bg-primary-hover"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Offers */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-lg px-6 py-4">
            <p className="text-accent font-semibold">
              🎉 First-time customers get 20% off! Use code: WELCOME20
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;