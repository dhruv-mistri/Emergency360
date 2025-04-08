
import { Ambulance } from "@/types/ambulance";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

interface AmbulanceListProps {
  ambulances: Ambulance[];
  onRequestAmbulance: (ambulance: Ambulance) => void;
}

const AmbulanceList = ({ ambulances, onRequestAmbulance }: AmbulanceListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <MapPin className="mr-2 text-red-600" />
        Nearby Ambulances
      </h2>
      {ambulances.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No ambulances found nearby</p>
      ) : (
        <div className="space-y-4">
          {ambulances.map((ambulance) => (
            <div 
              key={ambulance.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-red-500 transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Ambulance {ambulance.id}</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Available
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-1">
                Driver: {ambulance.driverName}
              </p>
              <div className="flex justify-between mb-3 text-sm">
                <span className="text-gray-500">Distance: {ambulance.distance}</span>
                <span className="text-red-600 font-medium">ETA: {ambulance.eta}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => window.location.href = `tel:${ambulance.phoneNumber}`}
                >
                  <Phone size={16} className="mr-1" /> Call
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  onClick={() => onRequestAmbulance(ambulance)}
                >
                  Request Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AmbulanceList;
