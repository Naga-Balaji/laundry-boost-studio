import { CheckSquare, MapPin, Shirt, Truck } from "lucide-react";
import processBackground from "@/assets/process-bg.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: CheckSquare,
      title: "Order Online",
      description: "Place your order through our website or mobile app with just a few clicks",
    },
    {
      icon: MapPin,
      title: "Pick Up",
      description: "We collect your laundry from your doorstep at your convenient time",
    },
    {
      icon: Shirt,
      title: "Professional Cleaning",
      description: "Your laundry is professionally cleaned with care using premium products",
    },
    {
      icon: Truck,
      title: "Drop Off",
      description: "We deliver your clean clothes back to you fresh and neatly packed",
    },
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(0 0% 100% / 0.98) 0%, hsl(210 40% 98% / 0.98) 100%), url(${processBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process makes laundry effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-hero-gradient rounded-full shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Join thousands of satisfied customers who trust us with their laundry needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-muted-foreground">Orders Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;