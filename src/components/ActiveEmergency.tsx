
import { Ambulance as AmbulanceType } from "@/types/ambulance";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, MapPin, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface ActiveEmergencyProps {
  ambulance: AmbulanceType;
  onCancelEmergency: () => void;
}

const ActiveEmergency = ({ ambulance, onCancelEmergency }: ActiveEmergencyProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(
    parseInt(ambulance.eta.split(" ")[0]) * 60
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const progressPercentage = 100 - (remainingTime / (parseInt(ambulance.eta.split(" ")[0]) * 60) * 100);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-red-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center">
            <AlertCircle className="mr-2" />
            Emergency Active
          </h2>
          <span className="bg-white text-red-600 px-2 py-1 rounded-full text-xs font-medium">
            ETA: {formatTime(remainingTime)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-2 bg-red-600 rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="border rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Ambulance {ambulance.id}</p>
              <p className="text-sm text-gray-500">{ambulance.driverName}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-red-600">{ambulance.eta} away</p>
              <p className="text-sm text-gray-500">{ambulance.distance}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            className="w-full bg-red-600 hover:bg-red-700"
            onClick={() => window.location.href = `tel:${ambulance.phoneNumber}`}
          >
            <Phone className="mr-2" size={18} />
            Call Ambulance Driver
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-gray-300"
            onClick={onCancelEmergency}
          >
            Cancel Emergency
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-6">
          Emergency services have been notified and are on their way.
          Please stay at your location.
        </p>
      </div>
    </div>
  );
};

export default ActiveEmergency;
