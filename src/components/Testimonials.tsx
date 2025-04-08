
import { StarIcon } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    content: "The service was exceptional! The car was immaculate and the staff was incredibly helpful. Will definitely be using CruiseRent for all my business trips."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vacation Traveler",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 4,
    content: "We rented an SUV for our family vacation and it was perfect. The booking process was smooth and the vehicle was comfortable for our long road trip."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Resident",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    rating: 5,
    content: "I needed a temporary vehicle while mine was being repaired, and CruiseRent made it so easy. Great rates and fantastic customer service!"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon 
              key={i} 
              size={18} 
              className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
              fill={i < testimonial.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-gray-700 mb-6">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what customers have to say about their experience with CruiseRent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary text-white rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to book your perfect ride?</h3>
            <p className="mb-6">
              Join thousands of satisfied customers who choose CruiseRent for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Browse Vehicles
              </button>
              <button className="bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
