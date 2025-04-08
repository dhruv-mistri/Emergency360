
export interface Ambulance {
  id: string;
  driverName: string;
  phoneNumber: string;
  distance: string;
  eta: string;
  location: {
    lat: number;
    lng: number;
  };
}
