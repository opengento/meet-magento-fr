type Location = {
  name: string;
  rank: number;
  url: string;
  telephone?: string | undefined;
  address?: string | undefined;
  content?: string | undefined;
};

export type AccommodationProps = {
  title: string;
  description: string;
  locations: Location[];
};
