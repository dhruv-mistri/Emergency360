import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Ambulance, Phone } from "lucide-react";

const EmergencyHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="bg-red-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <Ambulance size={32} />
            <h1 className="text-3xl font-bold">Emergency 360</h1>
          </div>
          <p className="text-lg mb-4">
            {getGreeting()}, Welcome to Emergency 360!
          </p>
          <p className="text-lg mb-4">
            Fast emergency ambulance service at your fingertips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-200"
              onClick={() => (window.location.href = "tel:911")}
            >
              <Phone className="mr-2" size={20} />
              Call 108
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-red-700"
            >
              <Ambulance className="mr-2" size={20} />
              Emergency SOS
            </Button>
          </div>
          <p className="mt-4 text-sm">
            Current Time: {currentTime.toLocaleTimeString()} |{" "}
            {currentTime.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHeader;
