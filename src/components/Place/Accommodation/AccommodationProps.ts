type Location = {
  name: string;
  url: string;
  content?: string | undefined;
};

export type AccommodationProps = {
  title: string;
  description: string;
  locations: Location[];
};
