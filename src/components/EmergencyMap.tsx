import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const EmergencyMap = () => {
  // User location state
  const [userLocation, setUserLocation] = useState(null); // Initially null
  const [vehicles, setVehicles] = useState([]); // Vehicle data

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Fallback to a default location (e.g., Delhi)
          setUserLocation({ lat: 28.6139, lng: 77.209 });
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Fallback to a default location
      setUserLocation({ lat: 28.6139, lng: 77.209 });
    }
  }, []);

  // Custom icons for vehicles and user
  const vehicleIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png", // Replace with a taxi icon if needed
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const userIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // User location icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={userLocation || { lat: 20.5937, lng: 78.9629 }} // Center on user location or India
      zoom={userLocation ? 13 : 5} // Zoom in if user location is available
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* User location marker */}
      {userLocation && (
        <Marker position={userLocation} icon={userIcon}>
          <Popup>Your Current Location</Popup>
        </Marker>
      )}

      {/* Vehicle markers */}
      {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.id}
          position={{ lat: vehicle.lat, lng: vehicle.lng }}
          icon={vehicleIcon}
        >
          <Popup>
            Vehicle ID: {vehicle.id}
            <br />
            Type: {vehicle.type}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EmergencyMap;
