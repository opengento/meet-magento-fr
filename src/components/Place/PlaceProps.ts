import {ReactNode} from "react";

type PlaceType = {
  title: ReactNode;
  subtitle: ReactNode;
  address: ReactNode;
  description: ReactNode;
  label: ReactNode;
  url: string;
};

export type PlaceDataProps = PlaceType;
export type PlaceProps = {
  place: PlaceType;
};
