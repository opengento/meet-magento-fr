type Itinerary = {
  "name": string;
  "icons": string[];
}

type PublicTransport = {
  title: string;
  itinerary: Itinerary[];
};

type Location = {
  name: string;
  url: string;
  content?: string | undefined;
};

type Parking = {
  title: string;
  description: string;
  locations: Location[];
};

export type PlaceAccessPublicTransportProps = PublicTransport;
export type PlaceAccessParkingProps = Parking;
export type PlaceAccessProps = {
  title: string;
  description: string;
  publicTransport: PublicTransport;
  parking: Parking;
};
