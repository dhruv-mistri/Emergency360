
import { useEffect, useRef, useState } from "react";
import { Ambulance } from "@/types/ambulance";
import { MapPin } from "lucide-react";

interface EmergencyMapProps {
  ambulances: Ambulance[];
  activeEmergency: Ambulance | null;
  userLocation: { lat: number, lng: number } | null;
  setUserLocation: React.Dispatch<React.SetStateAction<{ lat: number, lng: number } | null>>;
}

const EmergencyMap = ({ 
  ambulances, 
  activeEmergency,
  userLocation, 
  setUserLocation 
}: EmergencyMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          
          setUserLocation({ lat: 40.7128, lng: -74.006 });
          setIsLoading(false);
        }
      );
    } else {
      
      setUserLocation({ lat: 40.7128, lng: -74.006 });
      setIsLoading(false);
    }
  }, [setUserLocation]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-gray-50 border-b">
        <h2 className="text-xl font-semibold flex items-center">
          <MapPin className="mr-2 text-red-600" />
          Emergency Map
        </h2>
      </div>
      
      <div className="relative">
        <div 
          ref={mapRef} 
          className="w-full h-[500px] bg-gray-100"
        >
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 bg-white p-4 rounded-lg shadow-md">
                
              </p>
            </div>
          )}
          
          {/* Placeholder for ambulance markers */}
          <div className="absolute top-4 right-4 p-3 bg-white rounded-lg shadow-md">
            <p className="text-sm font-medium mb-1">Legend:</p>
            <div className="flex items-center mb-1">
              <span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-2"></span>
              <span className="text-xs">Your Location</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-xs">Ambulance</span>
            </div>
          </div>
          
          {/* Ambulance status overlay */}
          {activeEmergency && (
            <div className="absolute bottom-4 left-4 p-3 bg-white rounded-lg shadow-md max-w-xs">
              <p className="text-sm font-semibold">Ambulance {activeEmergency.id} is on the way</p>
              <p className="text-xs text-gray-500">ETA: {activeEmergency.eta}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmergencyMap;
