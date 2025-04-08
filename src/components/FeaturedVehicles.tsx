
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";

interface VehicleProps {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  features: string[];
}

const vehicles: VehicleProps[] = [
  {
    id: 1,
    name: "BMW 3 Series",
    category: "Luxury",
    price: 89,
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.8,
    features: ["Automatic", "4 Seats", "GPS", "Bluetooth"]
  },
  {
    id: 2,
    name: "Toyota RAV4",
    category: "SUV",
    price: 65,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.6,
    features: ["Automatic", "5 Seats", "GPS", "Bluetooth"]
  },
  {
    id: 3,
    name: "Mercedes E-Class",
    category: "Luxury",
    price: 120,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.9,
    features: ["Automatic", "5 Seats", "GPS", "Leather Interior"]
  },
  {
    id: 4,
    name: "Honda Civic",
    category: "Economy",
    price: 45,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    rating: 4.5,
    features: ["Automatic", "5 Seats", "Bluetooth", "Fuel Efficient"]
  }
];

const VehicleCard = ({ vehicle }: { vehicle: VehicleProps }) => {
  return (
    <div className="vehicle-card bg-white rounded-xl overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{vehicle.name}</h3>
            <Badge variant="secondary" className="mt-1">{vehicle.category}</Badge>
          </div>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{vehicle.rating}</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {vehicle.features.map((feature, index) => (
            <span 
              key={index} 
              className="inline-block bg-secondary px-2 py-1 rounded-md text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-xl font-bold">${vehicle.price}</span>
            <span className="text-sm text-muted-foreground ml-1">/day</span>
          </div>
          <Button size="sm">View Details</Button>
        </div>
      </div>
    </div>
  );
};

const FeaturedVehicles = () => {
  return (
    <section id="vehicles" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Vehicles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of premium vehicles for your next adventure. 
            We offer a wide range of cars from economic to luxury.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg">View All Vehicles</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
