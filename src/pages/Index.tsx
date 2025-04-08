
import Header from "@/components/Header";
import EmergencyMap from "@/components/EmergencyMap";
import EmergencyHeader from "@/components/EmergencyHeader";
import AmbulanceList from "@/components/AmbulanceList";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Ambulance } from "@/types/ambulance";
import { useToast } from "@/hooks/use-toast";
import ActiveEmergency from "@/components/ActiveEmergency";

const Index = () => {
  const [ambulances, setAmbulances] = useState<Ambulance[]>([
    { 
      id: "amb-1", 
      driverName: "John Smith", 
      phoneNumber: "+1-555-123-4567", 
      distance: "0.8 km", 
      eta: "3 min",
      location: { lat: 40.7128, lng: -74.006 } 
    },
    { 
      id: "amb-2", 
      driverName: "Sarah Johnson", 
      phoneNumber: "+1-555-987-6543", 
      distance: "1.2 km", 
      eta: "4 min",
      location: { lat: 40.7138, lng: -74.009 } 
    },
    { 
      id: "amb-3", 
      driverName: "Michael Lee", 
      phoneNumber: "+1-555-456-7890", 
      distance: "2.5 km", 
      eta: "6 min",
      location: { lat: 40.7118, lng: -74.003 } 
    }
  ]);
  
  const [activeEmergency, setActiveEmergency] = useState<Ambulance | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const { toast } = useToast();

  const requestAmbulance = (ambulance: Ambulance) => {
    setActiveEmergency(ambulance);
    toast({
      title: "Emergency Request Sent",
      description: `Ambulance ${ambulance.id} has been dispatched to your location.`,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-16 pb-8">
        <EmergencyHeader />
        
        <div className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <EmergencyMap 
                ambulances={ambulances}
                activeEmergency={activeEmergency}
                userLocation={userLocation}
                setUserLocation={setUserLocation}
              />
            </div>
            <div className="lg:col-span-1">
              {!activeEmergency ? (
                <AmbulanceList 
                  ambulances={ambulances} 
                  onRequestAmbulance={requestAmbulance} 
                />
              ) : (
                <ActiveEmergency 
                  ambulance={activeEmergency} 
                  onCancelEmergency={() => setActiveEmergency(null)} 
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
