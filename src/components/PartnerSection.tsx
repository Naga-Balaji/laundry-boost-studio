import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Shield } from "lucide-react";
import partnerBackground from "@/assets/partner-bg.jpg";

const PartnerSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Access to thousands of customers and steady income stream",
    },
    {
      icon: Users,
      title: "Marketing Support",
      description: "We handle customer acquisition and marketing for you",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work on your own terms with flexible pickup schedules",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Complete insurance protection for your business operations",
    },
  ];

  // TODO: Connect to partner registration system
  const handleBecomePartner = () => {
    console.log("Become Partner clicked");
    // BACKEND: Connect to partner registration form/onboarding system
    // Collect partner details, location, capacity, etc.
  };

  // TODO: Connect to partner info request
  const handleLearnMore = () => {
    console.log("Learn More about partnership clicked");
    // BACKEND: Connect to partner information request system
    // Send partner information packet or schedule a call
  };

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(210 100% 50% / 0.95) 0%, hsl(220 100% 60% / 0.95) 100%), url(${partnerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Become Our Partner
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join our network of successful laundry partners and grow your
            business with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-white/95 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partner Stats */}
        <div className="bg-white/10 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                500+
              </div>
              <div className="text-primary-foreground/80">Active Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                ₹50K+
              </div>
              <div className="text-primary-foreground/80">
                Average Monthly Revenue
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                95%
              </div>
              <div className="text-primary-foreground/80">
                Partner Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Partnership Journey?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBecomePartner}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
            >
              Become a Partner
            </Button>
            <Button
              onClick={handleLearnMore}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-blue-500 hover:bg-primary-foreground  hover:text-blue-900"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
