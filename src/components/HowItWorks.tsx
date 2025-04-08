
import { MapPin, Calendar, Car, Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Location",
    description: "Select your pick-up location and desired dates for your rental.",
    icon: MapPin
  },
  {
    id: 2,
    title: "Select Date",
    description: "Choose the perfect dates for your journey, with flexible options available.",
    icon: Calendar
  },
  {
    id: 3,
    title: "Book Your Car",
    description: "Select from our premium fleet and complete your reservation in minutes.",
    icon: Car
  },
  {
    id: 4,
    title: "Enjoy The Ride",
    description: "Pick up your vehicle and enjoy your journey with our 24/7 roadside assistance.",
    icon: Check
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Renting a vehicle with us is quick and hassle-free. Follow these simple steps to get on the road.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-5">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                
                {step.id < steps.length && (
                  <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-1/4">
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need Special Arrangements?</h3>
              <p className="text-muted-foreground mb-6">
                We offer custom solutions for business travel, events, and long-term rentals. 
                Our team can create a package that meets your specific needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary mr-3">
                    <Check size={20} />
                  </div>
                  <p>Corporate accounts with special rates</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary mr-3">
                    <Check size={20} />
                  </div>
                  <p>Wedding and event packages</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary mr-3">
                    <Check size={20} />
                  </div>
                  <p>Monthly rental discounts</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Special arrangements" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
