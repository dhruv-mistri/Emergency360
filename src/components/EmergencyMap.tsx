import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getDistance } from "geolib"; // Import geolib for distance calculation

const EmergencyMap = () => {
  const [userLocation, setUserLocation] = useState({
    lat: 22.9759,
    lng: 72.602,
  }); 
  const [vehicles, setVehicles] = useState([
    { id: 1, lat: 22.9765, lng: 72.6155, type: "Ambulance" },
  ]);

  useEffect(() => {
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
        }
      );
    }
  }, []);

  // Custom icon for the user (person icon)
  const userIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png", // Person icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  // Custom icon for the vehicle (ambulance car icon)
  const vehicleIcon = new L.Icon({
    iconUrl: "/medical.png", // Ambulance car icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const updateVehicleLocation = () => {
    if (!userLocation) {
      console.error("User location is not available.");
      return;
    }

    const newVehicles = vehicles.map((vehicle) => ({
      ...vehicle,
      lat: userLocation.lat + (Math.random() - 0.5) * 0.01,
      lng: userLocation.lng + (Math.random() - 0.5) * 0.01,
    }));

    setVehicles(newVehicles);
  };

  // Function to calculate distance between user and vehicle
  const calculateDistance = (vehicleLat, vehicleLng) => {
    const distance = getDistance(
      { latitude: userLocation.lat, longitude: userLocation.lng },
      { latitude: vehicleLat, longitude: vehicleLng }
    );
    return (distance / 1000).toFixed(2); // Convert to kilometers and round to 2 decimal places
  };

  return (
    <div>
      {/* <button
        onClick={updateVehicleLocation}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1000,
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Update Vehicle Location
      </button> */}

      <MapContainer
        center={userLocation}
        zoom={13}
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
              <br />
              Distance: {calculateDistance(vehicle.lat, vehicle.lng)} km
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default EmergencyMap;
