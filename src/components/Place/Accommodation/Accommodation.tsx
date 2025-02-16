import Typography from "@/components/Typography/Typography";
import React from "react";
import { AccommodationProps } from "@/components/Place/Accommodation/AccommodationProps";
import Link from "next/link";

const Accommodation = ({ accomodation }: { accomodation: AccommodationProps }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 md:py-6">
      <div className="flex flex-col gap-4 ">
        <Typography
          variant="h3"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
        >
          {accomodation.title}
        </Typography>
        <Typography
          color="dark"
          weight="semibold"
          className="whitespace-pre-wrap"
        >
          {accomodation.description}
        </Typography>
        <ul className="list-disc pl-5 text-black">
          {accomodation.locations.map((location, index) => (
            <li key={index}>
              <Link href={location.url} target="_blank" rel="noopener">
                <Typography color="dark" className="underline">
                  {location.name}
                </Typography>
              </Link>
              {location.content && (
                <Typography color="dark" className="whitespace-pre-wrap">
                  {location.content}
                </Typography>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accommodation;
